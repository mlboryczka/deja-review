// The Dialogues module's rounds and schedule (Spanish, test app; owner,
// 2026-11-07).
//
// A round is one time through a lesson's text: every sentence answered in
// order, then each one that wasn't Right once more, as a missed card comes
// back later in its set. Almost counts as not Right here, as it does on a
// card.
//
// Nothing about a round is kept but its answers (es_exercise_answers, one row
// per answer, oldest first), so a round is worked out from them here, the same
// on any device: a round ends with the answer that leaves nothing to ask, and
// the next answer starts the next one. A round left unfinished is carried on
// where it was left, whatever the day.
//
// A finished round sets when the text comes back: the next day, then after 3
// days, a week and 3 weeks, staying at 3 weeks from then on. The gap doesn't
// grow after a round with more than a quarter of its sentences wrong the first
// time. A round finished before its text was due counts as a time through it
// but leaves the schedule alone. The gaps are the app's own starting guess,
// not Laura's.
//
// Pure, plain JS: the page imports it, and so do the tests.

import { localISODate } from "./studyDay.js";

// A dialogue's answers are kept under keys starting with this, so they can't
// be mistaken for an exercise's: "dialogo-leccion12-1/1/5".
export const DIALOGUE_PREFIX = "dialogo-";

export const DIALOGUE_GAPS = [1, 3, 7, 21];
const MISSES_ALLOWED = 0.25;

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
// { at, total, missed, tries }; `tries` is the round under way (a Map of
// sentence index to its answers, in order), empty when there is none.
export function roundsOf(count, rows) {
  const finished = [];
  let tries = new Map();
  for (const row of rows) {
    if (!(row.index >= 0 && row.index < count)) continue;
    if (!tries.has(row.index)) tries.set(row.index, []);
    tries.get(row.index).push(row);
    if (roundOver(count, tries)) {
      let missed = 0;
      for (const t of tries.values()) if (!isRight(t[0])) missed++;
      finished.push({ at: row.answeredAt, total: count, missed, tries });
      tries = new Map();
    }
  }
  return { finished, tries };
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

// A YYYY-MM-DD date `days` later, whatever the clocks do in between.
export function addDays(iso, days) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d + days)).toISOString().slice(0, 10);
}

// When a text's finished rounds bring it back, as a study day (YYYY-MM-DD), or
// null before its first round is finished.
export function scheduleOf(finished) {
  let step = -1;
  let due = null;
  for (const round of finished) {
    const day = localISODate(new Date(round.at));
    if (due && day < due) continue;
    step = round.missed / round.total <= MISSES_ALLOWED
      ? Math.min(step + 1, DIALOGUE_GAPS.length - 1)
      : Math.max(step, 0);
    due = addDays(day, DIALOGUE_GAPS[step]);
  }
  return { due };
}

// Everything the list of dialogues says about one text. It is due once its
// day has come, or from the moment a first round is under way, so a round you
// started isn't lost in the list. A round started early on a text not yet due
// doesn't make it due.
export function dialogueStatus(count, rows, today = localISODate()) {
  const { finished, tries } = roundsOf(count, rows);
  const { due } = scheduleOf(finished);
  return {
    times: finished.length,
    last: finished[finished.length - 1] || null,
    due,
    done: tries.size,
    isDue: finished.length ? due <= today : tries.size > 0,
  };
}

const shortDate = (iso) => {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" });
};

// "due today", "comes back tomorrow" or "comes back Nov 12".
export function whenLine(due, today = localISODate()) {
  if (due <= today) return "due today";
  return due === addDays(today, 1) ? "comes back tomorrow" : `comes back ${shortDate(due)}`;
}

const timesLine = (times) => (times === 1 ? "once" : times === 2 ? "twice" : `${times} times`);

// A text's line in the list: every number says what it counts.
export function statusLine(count, status, today = localISODate()) {
  const { times, last, due, done } = status;
  const sentences = `${count} sentences`;
  if (!times) return done ? `${sentences} · ${done} done` : sentences;
  return [
    `Gone through ${timesLine(times)}`,
    `${last.total - last.missed} of ${last.total} sentences right last time`,
    ...(done ? [`${done} done this time`] : []),
    whenLine(due, today),
  ].join(" · ");
}
