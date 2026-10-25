// Vercel serverless function: POST /api/review-answer
//
// Called when a user clicks "My answer should have been accepted".
// Asks Claude to review, and if accepted, records the answer as an alternate
// in card_alternates so the matcher accepts it going forward.
//
// Request body:
//   { card_id, direction, french, english, user_answer, expected_answer,
//     force? }
//
// Returns:
//   { ok, verdict: "accept"|"reject"|"uncertain", reasoning: "..." }
//
// A body with `feedback` instead is Claude's review of a piece of feedback,
// and the owner's Apply and Dismiss: see _lib/feedbackReview.js. One with
// `answerChecks` is the owner's list of these verdicts and the test made from
// them: see _lib/answerChecks.js. One with `exercise` is an answer to the
// Spanish Exercises, marked and kept: see _lib/exercises.js. They live here
// because the Hobby plan deploys at most 12 routes.
//
// Every verdict is saved (answer_reviews, migration_015), accept or not, so
// the owner can see what Claude decided and mark where it went wrong.
//
// This route used to have NO authentication of any kind. Anyone who could
// reach the URL could spend the deploy owner's Anthropic credit and write
// rows with the service role key. It now requires a verified session, and
// the Anthropic key that pays is the caller's own unless they are the
// deploy owner.

import Anthropic from "@anthropic-ai/sdk";
import { createClient } from "@supabase/supabase-js";
import { requireUser, isAdmin, adminEmail } from "./_lib/auth.js";
import { requireAnthropicKey, resolveAnthropicKey } from "./_lib/anthropicKey.js";
import { handleFeedbackRequest, supabaseFeedbackStore } from "./_lib/feedbackReview.js";
import { askClaude, verdictRow, handleAnswerChecks, supabaseAnswerStore } from "./_lib/answerChecks.js";
import { handleExerciseRequest, supabaseExerciseStore } from "./_lib/exercises.js";
import { podcastsOpenTo } from "../src/lib/testApp.js";

export const config = { maxDuration: 60 };

// Record an accepted answer as an alternate for THIS user.
//
// card_alternates was global: no user_id, written with the service role,
// read by every client with no filter. One person's accepted answer silently
// became everyone's. migration_008 adds the column; the write and the read
// are both scoped to the owner now.
// `table` is es_card_alternates for a Spanish card (the Spanish module,
// migration_020): the answer is kept with the Spanish deck.
async function recordAlternate({ userId, card_id, direction, user_answer, table = "card_alternates" }) {
  const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } = process.env;
  if (!card_id || !SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) return;
  const admin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const { error } = await admin.from(table).upsert(
    {
      user_id: userId,
      card_id,
      direction: direction || "fr",
      alternate_text: user_answer,
    },
    { onConflict: "user_id,card_id,direction,alternate_text" }
  );
  // Don't fail the request over it — the verdict is still worth returning.
  if (error) console.error("card_alternates write failed:", error.message);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const user = await requireUser(req, res);
  if (!user) return;

  if (req.body?.feedback) return feedbackReview(req, res, user);
  if (req.body?.answerChecks) return answerChecks(req, res, user);
  if (req.body?.exercise) return exercises(req, res, user);

  const {
    card_id,
    direction,
    french,
    english,
    user_answer,
    expected_answer,
    force,
    course,
  } = req.body || {};
  // A Spanish card (the Spanish module, 2026-10-22): judged as Spanish, an
  // accepted answer kept with the Spanish deck, and its verdict kept in
  // answer_reviews marked "es" (migration_021), to be tested like a French
  // one (owner: "logged in the spanish module just as they are for the french
  // module").
  const spanish = course === "es";
  const language = spanish ? "Spanish" : "French";
  const alternatesTable = spanish ? "es_card_alternates" : "card_alternates";

  if (!user_answer || !expected_answer) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // "Accept anyway" — the user overriding a reject. This is their own deck
  // and their own alternate, so it needs no model call and costs nothing.
  //
  // The client has always sent this flag and the server has always ignored
  // it: the override re-ran the same review, and when Claude rejected again
  // nothing was written — while the UI said "this answer will be
  // remembered". It wasn't. It is now.
  if (force === true) {
    await recordAlternate({ userId: user.id, card_id, direction, user_answer, table: alternatesTable });
    await answerStore()?.overridden({ user_id: user.id, card_id, direction, typed: user_answer, course: spanish ? "es" : "fr" });
    return res.status(200).json({
      ok: true,
      verdict: "accept",
      reasoning: "Accepted at your request.",
      forced: true,
    });
  }

  const apiKey = requireAnthropicKey(req, res, user);
  if (!apiKey) return;

  try {
    const { verdict, reasoning, readable } = await askClaude({
      apiKey, direction, french, expected: expected_answer, typed: user_answer, language,
    });

    // Kept whatever it says. Never holds up the answer: a failed save (or no
    // table before migration_015) is logged and the verdict still returned.
    const saved = await answerStore()?.save(verdictRow({
      user, card_id, direction, french, english, expected: expected_answer, typed: user_answer, verdict, reasoning,
      course: spanish ? "es" : "fr",
    }));
    if (saved?.error) console.error("answer_reviews write failed:", saved.error);

    // Guarded: an unparseable reply used to throw and surface as a 500 whose
    // message was a JSON syntax error.
    if (!readable) {
      return res.status(200).json({
        ok: true,
        verdict: "uncertain",
        reasoning: "Couldn't read a clear verdict — use “Accept anyway” if you're sure.",
      });
    }

    if (verdict === "accept") {
      await recordAlternate({ userId: user.id, card_id, direction, user_answer, table: alternatesTable });
    }

    return res.status(200).json({ ok: true, verdict, reasoning });
  } catch (err) {
    console.error("review-answer failed:", err);
    if (err instanceof Anthropic.AuthenticationError) {
      return res.status(401).json({
        error: "Anthropic rejected that API key. Check it in your profile menu.",
        code: "bad_key",
      });
    }
    if (err instanceof Anthropic.RateLimitError) {
      return res.status(429).json({ error: "Rate limited — give it a moment." });
    }
    return res.status(500).json({ error: err.message });
  }
}

function answerStore() {
  const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } = process.env;
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) return null;
  return supabaseAnswerStore(createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth: { persistSession: false, autoRefreshToken: false },
  }));
}

async function answerChecks(req, res, user) {
  try {
    const { status, json } = await handleAnswerChecks({
      body: req.body.answerChecks,
      isAdmin: isAdmin(user),
      store: answerStore(),
      adminEmail: adminEmail(),
    });
    return res.status(status).json(json);
  } catch (err) {
    console.error("answer checks failed:", err);
    if (err instanceof Anthropic.RateLimitError) {
      return res.status(429).json({ error: "Claude is busy. Try again in a minute." });
    }
    if (err instanceof Anthropic.AuthenticationError) {
      return res.status(401).json({ error: "Anthropic refused the server's key." });
    }
    return res.status(500).json({ error: err.message || "The answer checks failed." });
  }
}

// The Spanish Exercises (2026-10-24): the same people as the Spanish module,
// the owner and anyone signed in on the test app (src/lib/testApp.js). The
// key that pays is worked out only if Claude has to mark the answer.
async function exercises(req, res, user) {
  if (!podcastsOpenTo({ isOwner: isAdmin(user), signedIn: true, host: req.headers.host })) {
    return res.status(403).json({ error: "Exercises aren’t open on this app.", code: "forbidden" });
  }
  const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } = process.env;
  const db = SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY
    ? createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false, autoRefreshToken: false } })
    : null;
  try {
    const { status, json } = await handleExerciseRequest({
      body: req.body.exercise,
      user,
      store: db ? supabaseExerciseStore(db) : null,
      apiKey: () => resolveAnthropicKey(req, user),
    });
    return res.status(status).json(json);
  } catch (err) {
    // The raw message is for the log, never for the page.
    console.error("exercise answer failed:", err);
    return res.status(500).json({ error: "Couldn’t mark that just now. Try again.", code: "server_error" });
  }
}

async function feedbackReview(req, res, user) {
  const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, ANTHROPIC_API_KEY } = process.env;
  const db = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  try {
    const { status, json } = await handleFeedbackRequest({
      body: req.body.feedback,
      user,
      isAdmin: isAdmin(user),
      store: supabaseFeedbackStore(db),
      apiKey: ANTHROPIC_API_KEY || null,
    });
    return res.status(status).json(json);
  } catch (err) {
    console.error("feedback review failed:", err);
    if (err instanceof Anthropic.RateLimitError) {
      return res.status(429).json({ error: "Claude is busy. Try again in a minute." });
    }
    return res.status(500).json({ error: err.message || "The review failed." });
  }
}
