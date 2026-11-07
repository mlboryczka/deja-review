// The Exercises page's door to the server and to its saved answers (Spanish,
// test app, 2026-10-24).
//
// Marking an answer is POST /api/review-answer with { exercise: { action:
// "answer", key, typed, hints } }, `hints` being how much of the hint showed (api/_lib/exercises.js; the route is shared
// because Vercel's Hobby plan deploys at most twelve). The student's own
// Anthropic key goes with it, as with every request that may spend Claude
// credit; the server uses it only when the answer key doesn't settle the
// answer.
//
// The answers already given are read straight from es_exercise_answers
// (migration_022), which lets a student read only their own rows.
//
// The Supabase client is passed in, so this file can be loaded by a test in
// Node.

import { keyHeaders } from "./anthropicKey.js";
import { DIALOGUE_PREFIX } from "./dialogueRounds.js";

export const EXERCISE_ENDPOINT = "/api/review-answer";

export class ExerciseError extends Error {
  constructor(message, { status = 0, code = "" } = {}) {
    super(message);
    this.name = "ExerciseError";
    this.status = status;
    this.code = code;
  }
}

// One request to the server's exercises: its reply when it says `ok`, or
// throws ExerciseError with a plain sentence.
async function send(exercise, ok, { supabase, user, fetchImpl } = {}) {
  const doFetch = fetchImpl || globalThis.fetch;
  let token = "";
  try {
    const { data } = await supabase.auth.getSession();
    token = data?.session?.access_token || "";
  } catch { /* no session: said below */ }
  if (!token) throw new ExerciseError("Your session has ended. Sign in again.", { status: 401, code: "no_session" });

  let res;
  try {
    res = await doFetch(EXERCISE_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}`, ...keyHeaders(user?.id) },
      body: JSON.stringify({ exercise }),
    });
  } catch {
    throw new ExerciseError("Couldn’t reach the server. Check your connection and try again.", { code: "network" });
  }
  const raw = await res.text().catch(() => "");
  let data = null;
  try { data = raw ? JSON.parse(raw) : null; } catch { data = null; }
  if (res.ok && data && ok(data)) return data;
  const fallback = res.status === 504 ? "The server took too long. Try again in a minute." : `The server answered ${res.status}. Try again.`;
  throw new ExerciseError((data && typeof data.error === "string" && data.error) || fallback, {
    status: res.status,
    code: (data && typeof data.code === "string" && data.code) || "",
  });
}

// { answer, saved, missing? }, or throws ExerciseError with a plain sentence.
export const markAnswer = ({ key, typed, hints = 0 }, opts) =>
  send({ action: "answer", key, typed, hints }, (d) => !!d.answer, opts);

// "My answer should be accepted": { verdict: "accept"|"reject"|"uncertain",
// reasoning, forced?, saved, missing? }. `typed` is the answer as kept,
// `verdict` how it was marked; `force` is Accept anyway.
export const disputeAnswer = ({ key, typed, verdict, force = false }, opts) =>
  send({ action: "dispute", key, typed, verdict, force }, (d) => typeof d.verdict === "string", opts);

// The answers the student has had accepted, as { [item key]: Set of lines as
// kept } (es_exercise_disputes, migration_027). Before that is run, none.
export async function loadAccepted({ supabase, userId }) {
  const accepted = {};
  const { data, error } = await supabase.from("es_exercise_disputes").select("item_key, typed").eq("user_id", userId).eq("accepted", true);
  for (const r of error ? [] : data || []) (accepted[r.item_key] ||= new Set()).add(r.typed);
  return accepted;
}

const PAGE = 1000;

// Every answer the student has given, oldest first, as the page keeps them:
// { key, typed, verdict, markedBy, note, correct, answeredAt }. `missing`
// when the table isn't there yet (migration_022 not run). The Dialogues page's
// answers are in the same table: `dialogues` reads those instead of the
// exercises'.
export async function loadAnswers({ supabase, userId, dialogues = false }) {
  const rows = [];
  for (let from = 0; ; from += PAGE) {
    const mine = supabase
      .from("es_exercise_answers")
      .select("item_key, typed, verdict, marked_by, note, correct, answered_at")
      .eq("user_id", userId);
    const { data, error } = await (dialogues
      ? mine.like("item_key", `${DIALOGUE_PREFIX}%`)
      : mine.not("item_key", "like", `${DIALOGUE_PREFIX}%`))
      .order("answered_at", { ascending: true })
      .range(from, from + PAGE - 1);
    if (error) {
      const missing = error.code === "42P01" || error.code === "PGRST205";
      return { answers: rows, missing, error: missing ? null : error };
    }
    for (const r of data || []) {
      rows.push({
        key: r.item_key, typed: r.typed, verdict: r.verdict, markedBy: r.marked_by,
        note: r.note || "", correct: r.correct || "", answeredAt: r.answered_at,
      });
    }
    if (!data || data.length < PAGE) break;
  }
  return { answers: rows, missing: false, error: null };
}
