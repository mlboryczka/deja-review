// The Dialogues module's rounds (Spanish, test app; owner, 2026-11-07).
//
// A round is one time through a lesson's text: every sentence answered in
// order, then each one that wasn't Right once more, as a missed card comes
// back later in its set. Almost counts as not Right here, as it does on a
// card.
//
// Nothing about a round is kept but its answers (es_exercise_answers, one row
// per answer, oldest first), so a round is worked out from them here, the same
// on any device: a round ends with the answer that leaves nothing to ask, and
// the next answer starts the next one. A round not finished is dropped at the
// end of the day, the app's study day from 4am, so each morning every text
// starts from its first sentence, as every exercise does. Its answers stay
// kept.
//
// The app never asks for a text to be done again (owner, 2026-11-07: "the app
// shouldn't ask me to do a dialogue again"). Going back to one is the student's
// choice: the list only says how many times it has been gone through, and when.
//
// Pure, plain JS: the page imports it, and so do the tests.

import { localISODate } from "./studyDay.js";

// A dialogue's answers are kept under keys starting with this, so they can't
// be mistaken for an exercise's: "dialogo-leccion12-1/1/5".
export const DIALOGUE_PREFIX = "dialogo-";

const isRight = (row) => row.verdict === "right";
const lastOf = (list) => list[list.length - 1];

// Whether a round's answers leave nothing to ask: every sentence Right, or
// answered twice, with no answer still being marked.
function roundOver(count, tries) {
  for (let i = 0; i < count; i++) {
    const t = tries.get(i);
    if (!t) return false;
    const last = lastOf(t);
    if (last.pending || (t.length < 2 && !isRight(last))) return false;
  }
  return true;
}

// `rows` oldest first, each { index, verdict, pending, answeredAt, ... }, from
// one text of `count` sentences. `finished` is its rounds, oldest first, each
// { at, total, missed, tries }; `tries` is the round under way today (a Map of
// sentence index to its answers, in order), empty when there is none.
export function roundsOf(count, rows, today = localISODate()) {
  const finished = [];
  let tries = new Map();
  let day = null;
  for (const row of rows) {
    if (!(row.index >= 0 && row.index < count)) continue;
    const rowDay = localISODate(new Date(row.answeredAt));
    if (rowDay !== day) {
      tries = new Map();
      day = rowDay;
    }
    if (!tries.has(row.index)) tries.set(row.index, []);
    tries.get(row.index).push(row);
    if (roundOver(count, tries)) {
      let missed = 0;
      for (const t of tries.values()) if (!isRight(t[0])) missed++;
      finished.push({ at: row.answeredAt, total: count, missed, tries });
      tries = new Map();
    }
  }
  return { finished, tries: day === today ? tries : new Map() };
}

// The sentence to answer now: { index, again } (again: it was missed, and this
// is its second try), or null when only answers being marked are left.
export function nextSentence(count, tries) {
  for (let i = 0; i < count; i++) if (!tries.has(i)) return { index: i, again: false };
  for (let i = 0; i < count; i++) {
    const t = tries.get(i);
    const last = lastOf(t);
    if (t.length === 1 && !last.pending && !isRight(last)) return { index: i, again: true };
  }
  return null;
}

// Everything the list of dialogues says about one text.
export function dialogueStatus(count, rows, today = localISODate()) {
  const { finished, tries } = roundsOf(count, rows, today);
  return {
    times: finished.length,
    last: finished[finished.length - 1] || null,
    done: tries.size,
  };
}

const shortDate = (iso) => {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" });
};

const timesLine = (times) => (times === 1 ? "once" : times === 2 ? "twice" : `${times} times`);

// A text's line in the list: every number says what it counts.
export function statusLine(count, status, today = localISODate()) {
  const { times, last, done } = status;
  const sentences = `${count} sentences`;
  if (!times) return done ? `${sentences} · ${done} done` : sentences;
  const day = localISODate(new Date(last.at));
  return [
    `Gone through ${timesLine(times)}`,
    `last ${day === today ? "today" : `on ${shortDate(day)}`}, ${last.total - last.missed} of ${last.total} sentences right`,
    ...(done ? [`${done} done today`] : []),
  ].join(" · ");
}
