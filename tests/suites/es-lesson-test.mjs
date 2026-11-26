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
import { needsTheText, withoutTextItems, newTest, scoreTest, needed, spreadPick, spreadIndexes, withCardAnswer, toAsk, masteredOf, resultOf, PER_PART } from "../../src/lib/lessonTest.js";
import { EXERCISES_BY_ID } from "../../src/data/exercises/es/index.js";
import { DIALOGUE_OF } from "../../src/data/exercises/es/dialogues.js";
import { makeScheduler, withTarget, toFsrsTime } from "../../src/lib/spacedRepetition.js";
import { scheduleAnswer } from "../../src/lib/spacedRepetition.js";
import { testSession } from "../../src/lib/sessionQueue.js";

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

console.log("\nRecent and unseen");
{
  const cards = [card(1, { last_review: "2026-11-29T10:00:00Z", last_answer_correct: false }), card(2, { fsrs_state: 0, last_review: null }), card(3)];
  const t = newTest({ lessonId: "x", cards, now, rng });
  const by = Object.fromEntries(t.cards.map((e) => [e.k.split(":")[0], e]));
  ck("a card answered 2 days ago isn't asked and counts as it was (wrong)", by[1].r === false && by[1].why === "recent");
  ck("a card never studied counts as not known", by[2].r === false && by[2].why === "unseen");
  ck("an older card is asked", by[3].r === undefined);
  ck("toAsk lists only the card still to ask", toAsk(t.cards).length === 1);
}

console.log("\nThe way round a card is asked");
{
  const two = (extra) => card(50, { cat: "vocab", en_fsrs_state: 0, en_last_review: null, ...extra });
  const fr = newTest({ lessonId: "x", cards: [two({})], direction: "mix", now, rng }).cards[0];
  ck("a card studied only Spanish side up is asked that way, not counted unseen", fr.k === "50:fr" && fr.why !== "unseen", JSON.stringify(fr));
  const en = newTest({ lessonId: "x", cards: [two({ fsrs_state: 0, last_review: null, en_fsrs_state: 2, en_last_review: "2026-10-01T10:00:00Z" })], direction: "fr", now, rng }).cards[0];
  ck("a card studied only English side up is asked that way, whatever the setting", en.k === "50:en" && en.why !== "unseen", JSON.stringify(en));
  const both = newTest({ lessonId: "x", cards: [two({ en_fsrs_state: 2, en_last_review: "2026-09-01T10:00:00Z" })], direction: "mix", now, rng }).cards[0];
  ck("studied both ways, under Mixed the way answered longer ago", both.k === "50:en", both.k);
  const none = newTest({ lessonId: "x", cards: [two({ fsrs_state: 0, last_review: null })], direction: "mix", now, rng }).cards[0];
  ck("studied neither way, it counts as not known", none.why === "unseen" && none.r === false);
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

const n = ck.fails();
console.log(n ? `\n  FAILED: ${n}` : "\n  all checks passed");
process.exit(n ? 1 : 0);
