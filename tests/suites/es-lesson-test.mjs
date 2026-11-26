// The Spanish lesson test (2026-11-25): a sample of a lesson's cards, exercise
// items and dialogue sentences, passed at 80% in every part.
//
// What must hold, in plain words:
//   - up to 20 of each part are asked, a smaller part in full, and exercise
//     items come from every sheet;
//   - something answered in the last 7 days isn't asked and counts as it was,
//     a card never studied counts as not known;
//   - passing needs 16 of 20 in every part; one weak part fails the test;
//   - a card's first test answer counts, a correction replaces it;
//   - a passed lesson's cards got right are scheduled about 3.5 times later,
//     one got wrong exactly as before;
//   - the test's flashcards are dealt as practice and change no schedule.
//
// No browser and no network.

import { checker } from "../check.mjs";
import { allAsked, needsTheText, withoutTextItems, newTest, scoreTest, needed, spreadPick, spreadIndexes, withCardAnswer, toAsk, masteredOf, resultOf, PER_PART } from "../../src/lib/lessonTest.js";
import { EXERCISES_BY_ID } from "../../src/data/exercises/es/index.js";
import { DIALOGUE_OF } from "../../src/data/exercises/es/dialogues.js";
import { makeScheduler, withTarget, toFsrsTime } from "../../src/lib/spacedRepetition.js";
import { scheduleAnswer } from "../../src/lib/spacedRepetition.js";
import { testSession } from "../../src/lib/sessionQueue.js";
import { statsOverTime } from "../../src/lib/progressHistory.js";
import { answerDays } from "../../src/lib/lessonMastery.js";

const ck = checker();
const now = Date.parse("2026-12-01T15:00:00Z");
const rng = (() => { let s = 7; return () => (s = (s * 16807) % 2147483647) / 2147483647; })();
const card = (id, extra = {}) => ({ id, row_id: id, f: `f${id}`, b: `b${id}`, fsrs_state: 2, last_review: "2026-10-01T10:00:00Z", last_answer_correct: true, next_due_at: "2026-12-01T00:00:00Z", stability: 20, difficulty: 5, reps: 3, lapses: 0, ...extra });

console.log("\nWhat is asked");
{
  const cards = Array.from({ length: 30 }, (_, i) => card(i + 1));
  const sheets = [EXERCISES_BY_ID.leccion11];
  const dialogue = DIALOGUE_OF.leccion11;
  const t = newTest({ lessonId: "leccion11", cards, sectionOf: (c) => (c.id % 3 ? "a" : "b"), sheets, dialogue, now, rng });
  ck("20 cards of 30", t.cards.length === PER_PART);
  ck("20 exercise items", t.items.length === PER_PART);
  ck("20 dialogue sentences", t.sentences.length === PER_PART);
  const sheetsHit = new Set(t.items.map((e) => e.k.split("/").slice(0, 2).join("/")));
  ck("items come from every sheet of the lesson", sheetsHit.size === EXERCISES_BY_ID.leccion11.exercises.length);
  const idx = t.sentences.map((e) => Number(e.k.split("/")[2]));
  ck("dialogue sentences reach the start and the end", Math.min(...idx) <= 3 && Math.max(...idx) >= DIALOGUE_OF.leccion11.items.length - 3);
  const small = newTest({ lessonId: "leccion1", cards: cards.slice(0, 5), sheets: [], dialogue: null, now, rng });
  ck("a smaller part is asked in full", small.cards.length === 5 && small.items.length === 0 && small.sentences.length === 0);
  ck("spreadPick gives everything when there are fewer", spreadPick([[1, 2], [3]], 20).length === 3);
  ck("spreadIndexes of 14 asks all 14", spreadIndexes(14, 20).length === 14);
}

console.log("\nNothing that needs the lesson's text");
{
  const ex = (id) => EXERCISES_BY_ID[id].exercises;
  ck("Lesson 1's true-or-false about the dialogue needs the text", needsTheText(ex("leccion1").find((e) => e.title === "Comprensión escrita")));
  ck("Lesson 17's pronouns in the dialogue need the text", needsTheText(ex("leccion17")[0]));
  ck("Lesson 14's sentences to translate don't", !needsTheText(ex("leccion14")[0]));
  ck("nor a conjugation exercise", !needsTheText(ex("leccion1")[0]));
  let picked = 0;
  for (let i = 0; i < 30; i++) {
    const t = newTest({ lessonId: "leccion1", cards: [], sheets: [EXERCISES_BY_ID.leccion1], now, rng });
    picked += t.items.filter((e) => needsTheText(EXERCISES_BY_ID.leccion1.exercises.find((x) => x.n === Number(e.k.split("/")[1])))).length;
    if (t.items.length !== 20) { picked = -1; break; }
  }
  ck("30 Lesson 1 tests ask 20 items each and none needing the text", picked === 0, String(picked));
  const textEx = EXERCISES_BY_ID.leccion1.exercises.find((e) => needsTheText(e));
  const old = { items: [{ k: `leccion1/${textEx.n}/1` }, { k: "leccion1/1/1" }] };
  ck("a test begun before drops those items", withoutTextItems(old, EXERCISES_BY_ID).items.map((e) => e.k).join() === "leccion1/1/1");
}

console.log("\nEvery question picked is asked");
{
  const cards = [card(1, { last_review: "2026-11-29T10:00:00Z", last_answer_correct: false }), card(2, { fsrs_state: 0, last_review: null }), card(3)];
  const t = newTest({ lessonId: "x", cards, now, rng });
  ck("a card answered 2 days ago is asked", t.cards.every((e) => e.r === undefined && !e.why), JSON.stringify(t.cards));
  ck("so is a card never studied, and all 3 are left to ask", toAsk(t.cards).length === 3);
  const leccion1 = newTest({ lessonId: "leccion1", cards: Array.from({ length: 30 }, (_, i) => card(i + 1)), sheets: [EXERCISES_BY_ID.leccion1], dialogue: DIALOGUE_OF.leccion1, latest: () => ({ verdict: "right", answeredAt: new Date(now - 86400000).toISOString() }), now, rng });
  ck("items and sentences answered yesterday are asked too: 20, 20 and 14 to ask", toAsk(leccion1.cards).length === 20 && toAsk(leccion1.items).length === 20 && toAsk(leccion1.sentences).length === 14);
  const old = { cards: [{ k: "1:fr", r: true, why: "recent" }, { k: "2:fr", r: false, why: "unseen" }, { k: "3:fr", r: true }], items: [{ k: "a", r: true, why: "recent" }], sentences: [] };
  const fixed = allAsked(old);
  ck("a test begun before asks what it had counted without asking", toAsk(fixed.cards).map((e) => e.k).join() === "1:fr,2:fr" && toAsk(fixed.items).length === 1);
  ck("and keeps what was answered in it", fixed.cards[2].r === true);
  ck("answering such a card records its result", withCardAnswer(old, "1:fr", false).cards[0].r === false);
}

console.log("\nScoring");
{
  const mk = (n, right) => Array.from({ length: n }, (_, i) => ({ k: `c${i}:fr`, r: i < right }));
  const test = (w, g, s) => ({ cards: mk(20, w), items: Array.from({ length: 20 }, (_, i) => ({ k: `i${i}` })), sentences: Array.from({ length: 20 }, (_, i) => ({ k: `s${i}` })), _g: g, _s: s });
  const t = test(16, 16, 16);
  const answerOf = (right) => (k) => ({ verdict: Number(k.slice(1)) < right ? "right" : "wrong" });
  ck("16 of 20 needed", needed(20) === 16);
  const ok = scoreTest(t, (k) => answerOf(16)(k));
  ck("16/16/16 passes", ok.complete && ok.passed);
  const weak = scoreTest(t, (k) => answerOf(15)(k));
  ck("15 in grammar and text fails", weak.complete && !weak.passed);
  const almost = scoreTest(t, (k) => ({ verdict: "almost" }));
  ck("Almost counts as right", almost.passed);
  const hint = scoreTest(t, (k) => ({ verdict: "right", hints: 1 }));
  ck("an answer after a hint is not right", !hint.passed);
  const open = scoreTest(t, (k) => (k.startsWith("i") ? null : { verdict: "right" }));
  ck("unanswered items leave the test incomplete", !open.complete && !open.passed);
  const pend = scoreTest(t, (k) => ({ pending: true }));
  ck("answers still being marked aren't counted", pend.parts.grammar.pending === 20 && !pend.complete);
  const w = withCardAnswer({ cards: [{ k: "1:fr" }] }, "1:fr", true);
  ck("a card's first answer counts", w.cards[0].r === true);
  ck("a later answer doesn't replace it", withCardAnswer(w, "1:fr", false).cards[0].r === true);
  ck("a correction does", withCardAnswer(w, "1:fr", false, { correction: true }).cards[0].r === false);
  ck("only a passed result makes the lesson Mastered", masteredOf({ a: { result: { passed: true } }, b: { result: { passed: false } }, c: { test: {} } }).has("a") && masteredOf({ b: { result: { passed: false } } }).size === 0);
  ck("a failed retest removes it", masteredOf({ a: { result: resultOf({ passed: false, parts: { words: { total: 20, right: 3 } } }) } }).size === 0);
}

console.log("\nSchedule");
{
  const side = { stability: 20, difficulty: 5, fsrs_state: 2, reps: 3, lapses: 0, last_review: "2026-11-11T15:00:00Z", next_due_at: "2026-12-01T15:00:00Z" };
  const at = Date.parse("2026-12-01T15:00:00Z");
  const days = (r) => Math.round((Date.parse(r.next_due_at) - at) / 86400000);
  const base = scheduleAnswer(side, true, at);
  const low = scheduleAnswer(side, true, at, withTarget(0.8));
  ck("a right answer at 80% waits much longer than at 90%", days(low) > days(base) * 2.5 && days(low) < days(base) * 4.5);
  const wrongBase = scheduleAnswer(side, false, at);
  const wrongSame = scheduleAnswer(side, false, at, undefined);
  ck("a wrong answer is scheduled as always", days(wrongBase) === days(wrongSame));
  ck("withTarget keeps the student's weights", JSON.stringify(Array.from(withTarget(0.8).parameters.w)) === JSON.stringify(Array.from(makeScheduler().parameters.w)));
}

console.log("\nThe test's cards are practice");
{
  const cards = [card(1), card(2)];
  const s = testSession(cards, ["1:fr", "2:fr", "9:fr"]);
  ck("the cards asked are the ones named", s.queue.length === 2);
  ck("they are dealt as practice", s.queue.every((c) => c._bucket === "practice"));
}

console.log("\nRight first time today counts a test's answers");
{
  const D = (t) => `2026-11-26T${t}`;
  const cards = [1, 2, 3].map((id) => ({ row_id: id, cat: "vocab", fsrs_state: 2, en_fsrs_state: 0 }));
  const prac = (id, card, t, correct) => ({ id, card_id: card, direction: "fr", answered_at: D(t), correct, counted: false, state_before: null });
  const rows = [prac(1, 1, "12:00:00", true), prac(2, 2, "12:01:00", true), prac(3, 3, "12:02:00", false), prac(4, 3, "12:03:00", true)];
  const day = statsOverTime({ cards, rows, now: Date.parse(D("18:00:00")) }).days.at(-1);
  ck("a card's first practice answer of the day is a first try", day.practice === 3, JSON.stringify(day));
  ck("its later answer that day is a retry", day.retries === 1);
  ck("and the right ones count as right first time", day.right === 2);
  const a = (key, verdict, t, hints = 0) => ({ key, verdict, answeredAt: D(t), hints });
  const days = answerDays([a("leccion1/1/1", "right", "12:00:00"), a("leccion1/1/1", "wrong", "12:05:00"), a("leccion1/1/2", "almost", "12:01:00"), a("leccion1/1/3", "right", "12:02:00", 1), a("dialogo-leccion1/1/1", "wrong", "12:03:00"), a("dialogo-leccion1/1/1", "right", "12:04:00")]);
  const d = Object.values(days)[0];
  ck("an item's first answer of the day counts, Almost as right, a hinted one not", d.itemsFirst === 3 && d.itemsRight === 2, JSON.stringify(d));
  ck("a sentence's second try doesn't", d.sentencesFirst === 1 && d.sentencesRight === 0);
  ck("every answer still counts in Today's totals", d.items === 4 && d.sentences === 2);
}

const n = ck.fails();
console.log(n ? `\n  FAILED: ${n}` : "\n  all checks passed");
process.exit(n ? 1 : 0);
