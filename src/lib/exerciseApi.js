// The Exercises page's door to the server and to its saved answers (Spanish,
// test app, 2026-10-24).
//
// Marking an answer is POST /api/review-answer with { exercise: { action:
// "answer", key, typed } } (api/_lib/exercises.js; the route is shared
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

export const EXERCISE_ENDPOINT = "/api/review-answer";

export class ExerciseError extends Error {
  constructor(message, { status = 0, code = "" } = {}) {
    super(message);
    this.name = "ExerciseError";
    this.status = status;
    this.code = code;
  }
}

// { answer, saved, missing? }, or throws ExerciseError with a plain sentence.
export async function markAnswer({ key, typed }, { supabase, user, fetchImpl } = {}) {
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
      body: JSON.stringify({ exercise: { action: "answer", key, typed } }),
    });
  } catch {
    throw new ExerciseError("Couldn’t reach the server. Check your connection and try again.", { code: "network" });
  }
  const raw = await res.text().catch(() => "");
  let data = null;
  try { data = raw ? JSON.parse(raw) : null; } catch { data = null; }
  if (res.ok && data?.answer) return data;
  const fallback = res.status === 504 ? "The server took too long. Try again in a minute." : `The server answered ${res.status}. Try again.`;
  throw new ExerciseError((data && typeof data.error === "string" && data.error) || fallback, {
    status: res.status,
    code: (data && typeof data.code === "string" && data.code) || "",
  });
}

const PAGE = 1000;

// Every answer the student has given, oldest first, as the page keeps them:
// { key, typed, verdict, markedBy, note, correct, answeredAt }. `missing`
// when the table isn't there yet (migration_022 not run).
export async function loadAnswers({ supabase, userId }) {
  const rows = [];
  for (let from = 0; ; from += PAGE) {
    const { data, error } = await supabase
      .from("es_exercise_answers")
      .select("item_key, typed, verdict, marked_by, note, correct, answered_at")
      .eq("user_id", userId)
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
