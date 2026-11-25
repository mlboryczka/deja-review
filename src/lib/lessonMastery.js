// How well each Spanish lesson is known, from all three ways of practising it
// (owner, 2026-11-25: "i agree with this"). Pure: no React, no Supabase.
//
// Each lesson gets up to three figures on Stats:
//   Words    its flashcards, ~N remembered, from lib/progress.js as before.
//   Grammar  its exercise items right, out of ALL its items, so items not
//            tried yet show as not done (Lesson 13: 7 right of the 8 tried
//            is 7 of 116, not 88%).
//   Text     its dialogue sentences right, out of all its sentences.
//
// Which answer counts for an item or a sentence:
//   - its first answer;
//   - a later answer replaces it only if it comes at least REDO_GAP_DAYS after
//     the answer that counts. A redo soon after seeing the corrections
//     overstates what stayed: Lesson 10's exercises were 51% on Nov 1, 73%
//     redone the next day, 61% redone ten days later. No study backs the exact
//     gap; the owner agreed to a week.
//   Inside a dialogue round, a sentence's first try is its first answer that
//   day, so the second try after a miss never counts.
//   - Right and Almost count as right (owner, 2026-11-16: "count almost as
//     right and show how many"); an answer typed after Hint showed any of it
//     counts as not right (the owner's rule for cards: being shown the
//     answer is not remembering it). Answers kept before hints were recorded
//     (2026-11-07) count as typed without one, since nobody knows.
//
// The answers come in re-marked the way the pages show them (markedNow,
// acceptedNow), oldest first.
//
// A lesson's rating comes from its lowest figure: Not started (nothing
// answered in any part), Learning (a figure under LEARNED_AT), Learned (every
// figure it has at LEARNED_AT or more). Knowing a lesson means its words, its
// grammar and using both in its text, so one weak part holds it back. The
// 80% line is the owner's to set.

import { countsAsRight } from "./exerciseMarking.js";
import { DIALOGUE_PREFIX } from "./dialogueRounds.js";
import { localISODate } from "./studyDay.js";

export const REDO_GAP_DAYS = 7;
export const LEARNED_AT = 0.8;
const DAY_MS = 86400000;

// Lesson 8's time-and-date sheet ("leccion8-anexo") is part of Lesson 8.
export const lessonOfExercises = (id) => String(id).replace(/-anexo$/, "");

// The answer that counts for each key: { [key]: answer }.
export function countedAnswers(answers) {
  const counted = new Map();
  for (const a of answers || []) {
    if (!a?.key || a.pending) continue;
    const at = Date.parse(a.answeredAt);
    if (!Number.isFinite(at)) continue;
    const prev = counted.get(a.key);
    if (!prev || at - prev.at >= REDO_GAP_DAYS * DAY_MS) counted.set(a.key, { ...a, at });
  }
  return counted;
}

const isRightNow = (a) => countsAsRight(a.verdict) && !(a.hints > 0);

// Items keyed as the pages key them: "<lesson>/<sheet number>/<n>".
function score(keys, counted) {
  let right = 0, almost = 0, tried = 0, hinted = 0, first = null, last = null;
  for (const k of keys) {
    const a = counted.get(k);
    if (!a) continue;
    tried++;
    if (a.hints > 0) hinted++;
    if (isRightNow(a)) { right++; if (a.verdict === "almost") almost++; }
    if (first === null || a.at < first) first = a.at;
    if (last === null || a.at > last) last = a.at;
  }
  return { total: keys.length, right, almost, tried, hinted, first, last };
}

const add = (a, b) => ({
  total: a.total + b.total, right: a.right + b.right, almost: a.almost + b.almost,
  tried: a.tried + b.tried, hinted: a.hinted + b.hinted,
  first: a.first === null ? b.first : b.first === null ? a.first : Math.min(a.first, b.first),
  last: a.last === null ? b.last : b.last === null ? a.last : Math.max(a.last, b.last),
});

// Every lesson's Grammar and Text: { [lessonId]: { grammar?, text? } }.
// exercisesById and dialoguesById are the data files' own maps.
export function masteryByLesson({ exercisesById, dialoguesById, answers }) {
  const counted = countedAnswers(answers);
  const out = {};
  for (const [id, lesson] of Object.entries(exercisesById || {})) {
    const keys = [];
    for (const e of lesson.exercises || []) e.items.forEach((_, i) => keys.push(`${id}/${e.n}/${i + 1}`));
    if (!keys.length) continue;
    const lessonId = lessonOfExercises(id);
    const s = score(keys, counted);
    const row = (out[lessonId] ||= {});
    row.grammar = row.grammar ? add(row.grammar, s) : s;
  }
  for (const d of Object.values(dialoguesById || {})) {
    const ex = d.exercises?.[0];
    if (!ex?.items?.length) continue;
    const keys = ex.items.map((_, i) => `${d.id}/${ex.n}/${i + 1}`);
    (out[d.lesson] ||= {}).text = score(keys, counted);
  }
  return out;
}

const ratio = (s) => (s && s.total > 0 ? s.right / s.total : null);

// "not-started" | "learning" | "learned". words is the cards' summary from
// lib/progress.js ({ total, seen, remembered }), grammar and text as above;
// any of them may be missing.
export function lessonRating({ words, grammar, text }) {
  const parts = [
    words && words.total > 0 ? { started: words.seen > 0, share: words.remembered / words.total } : null,
    grammar && grammar.total > 0 ? { started: grammar.tried > 0, share: ratio(grammar) } : null,
    text && text.total > 0 ? { started: text.tried > 0, share: ratio(text) } : null,
  ].filter(Boolean);
  if (!parts.some((p) => p.started)) return "not-started";
  return parts.every((p) => p.share >= LEARNED_AT) ? "learned" : "learning";
}

export const RATING_LABEL = { "not-started": "Not started", learning: "Learning", learned: "Learned" };

// The study days of exercise and dialogue answers, with how many items and
// sentences were answered on each: { [YYYY-MM-DD]: { items, sentences } }.
// Days are the app's study days, from 4am.
export function answerDays(answers) {
  const days = {};
  for (const a of answers || []) {
    if (!a?.key || a.pending) continue;
    const at = Date.parse(a.answeredAt);
    if (!Number.isFinite(at)) continue;
    const d = (days[localISODate(new Date(at))] ||= { items: 0, sentences: 0 });
    if (a.key.startsWith(DIALOGUE_PREFIX)) d.sentences++;
    else d.items++;
  }
  return days;
}
