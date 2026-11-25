// The Spanish Stats page's Grammar and Text figures, read from the answers
// kept for Exercises and Dialogues (es_exercise_answers). Loaded only when
// Spanish Stats opens, so French never downloads the exercises.
//
// Each answer is re-marked the way the Exercises and Dialogues pages show it
// (markedNow: the key's verdict under today's rules; acceptedNow: an answer
// accepted with "My answer should be accepted" is right), then
// lib/lessonMastery.js decides which answer counts.

import { EXERCISES_BY_ID } from "../data/exercises/es/index.js";
import { DIALOGUES_BY_ID } from "../data/exercises/es/dialogues.js";
import { markedNow, acceptedNow, findItem } from "./exerciseMarking.js";
import { DIALOGUE_PREFIX } from "./dialogueRounds.js";
import { loadAccepted } from "./exerciseApi.js";
import { masteryByLesson, answerDays, lessonRating } from "./lessonMastery.js";

const PAGE = 1000;
const missingColumn = (e) => e && (e.code === "42703" || /column/i.test(e.message || ""));

// Every answer, oldest first, with how much of the hint showed when the
// column is there (migration_026). null when they can't be read.
async function loadAll({ supabase, userId }) {
  for (const withHints of [true, false]) {
    const rows = [];
    let failed = null;
    for (let from = 0; ; from += PAGE) {
      const { data, error } = await supabase
        .from("es_exercise_answers")
        .select(`item_key, typed, verdict, marked_by, answered_at${withHints ? ", hints" : ""}`)
        .eq("user_id", userId)
        .order("answered_at", { ascending: true })
        .range(from, from + PAGE - 1);
      if (error) { failed = error; break; }
      rows.push(...(data || []));
      if (!data || data.length < PAGE) break;
    }
    if (!failed) return rows;
    if (!(withHints && missingColumn(failed))) return null;
  }
  return null;
}

export async function loadSpanishMastery({ supabase, userId }) {
  const [rows, accepted] = await Promise.all([loadAll({ supabase, userId }), loadAccepted({ supabase, userId }).catch(() => ({}))]);
  if (!rows) return null;
  const answers = rows.map((r) => {
    const a = { key: r.item_key, typed: r.typed, verdict: r.verdict, markedBy: r.marked_by, answeredAt: r.answered_at, hints: r.hints ?? null };
    const found = findItem(r.item_key.startsWith(DIALOGUE_PREFIX) ? DIALOGUES_BY_ID : EXERCISES_BY_ID, r.item_key);
    return acceptedNow(markedNow(found?.item, a), accepted);
  });
  return {
    byLesson: masteryByLesson({ exercisesById: EXERCISES_BY_ID, dialoguesById: DIALOGUES_BY_ID, answers }),
    days: answerDays(answers),
    rate: lessonRating,
  };
}
