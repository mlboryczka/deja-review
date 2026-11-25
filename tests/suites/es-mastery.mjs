// How well each Spanish lesson is known (2026-11-25): Grammar and Text from
// the Exercises and Dialogues answers, and the lesson's rating.
//
// What must hold, in plain words:
//   - an item's first answer counts; a redo replaces it only a week or more
//     later, so a next-day redo changes nothing;
//   - in a dialogue round, the second try after a miss never counts;
//   - Almost counts as right and is counted; an answer typed after Hint is
//     not right; an answer kept before hints were recorded counts as typed
//     without one;
//   - Grammar and Text are out of every item and sentence, tried or not;
//   - Lesson 8's time-and-date sheet counts toward Lesson 8;
//   - the rating is Not started with nothing answered, Learned only when every
//     part is at 80% or more, Learning otherwise;
//   - study days come from every answer, split into items and sentences.
//
// No browser and no network.

import { checker } from "../check.mjs";
import { countedAnswers, masteryByLesson, lessonRating, answerDays, lessonOfExercises, REDO_GAP_DAYS } from "../../src/lib/lessonMastery.js";
import { EXERCISES_BY_ID } from "../../src/data/exercises/es/index.js";
import { DIALOGUES_BY_ID } from "../../src/data/exercises/es/dialogues.js";

const ck = checker();
const at = (iso) => new Date(iso).toISOString();
const ans = (key, verdict, when, hints = 0) => ({ key, verdict, answeredAt: at(when), hints });

console.log("\nWhich answer counts");
{
  const c = countedAnswers([
    ans("leccion10/3/1", "wrong", "2026-11-01T15:00"),
    ans("leccion10/3/1", "right", "2026-11-02T15:00"),
  ]);
  ck("a next-day redo doesn't replace the first answer", c.get("leccion10/3/1").verdict === "wrong");
  const c2 = countedAnswers([
    ans("leccion10/3/1", "wrong", "2026-11-01T15:00"),
    ans("leccion10/3/1", "right", "2026-11-02T15:00"),
    ans("leccion10/3/1", "right", "2026-11-12T15:00"),
  ]);
  ck(`a redo ${REDO_GAP_DAYS} or more days later replaces it`, c2.get("leccion10/3/1").verdict === "right");
  const c3 = countedAnswers([
    ans("leccion10/3/1", "wrong", "2026-11-01T15:00"),
    ans("leccion10/3/1", "right", "2026-11-07T15:00"),
  ]);
  ck("six days later is not enough", c3.get("leccion10/3/1").verdict === "wrong");
  const c4 = countedAnswers([{ key: "leccion10/3/1", verdict: "right", answeredAt: at("2026-11-01T15:00"), pending: true }]);
  ck("an answer still being marked doesn't count", !c4.has("leccion10/3/1"));
}

console.log("\nGrammar and Text for a lesson");
{
  const l10 = EXERCISES_BY_ID.leccion10;
  const items = l10.exercises.reduce((n, e) => n + e.items.length, 0);
  const e = l10.exercises[0];
  const k = (i) => `leccion10/${e.n}/${i}`;
  const m = masteryByLesson({
    exercisesById: EXERCISES_BY_ID, dialoguesById: DIALOGUES_BY_ID,
    answers: [ans(k(1), "right", "2026-11-01T15:00"), ans(k(2), "almost", "2026-11-01T15:01"), ans(k(3), "right", "2026-11-01T15:02", 1), ans(k(4), "wrong", "2026-11-01T15:03"), { ...ans(k(5), "right", "2026-11-01T15:04"), hints: null }],
  }).leccion10.grammar;
  ck("out of every item in the lesson", m.total === items, `${m.total} vs ${items}`);
  ck("tried counts the items answered", m.tried === 5);
  ck("right counts Right and Almost, without hints", m.right === 3, `got ${m.right}`);
  ck("Almost is counted", m.almost === 1);
  ck("a hinted answer is tried but not right", m.hinted === 1);

  const d = DIALOGUES_BY_ID["dialogo-leccion13"];
  const dk = (i) => `dialogo-leccion13/1/${i}`;
  const t = masteryByLesson({
    exercisesById: {}, dialoguesById: DIALOGUES_BY_ID,
    answers: [ans(dk(1), "wrong", "2026-11-15T15:00"), ans(dk(2), "right", "2026-11-15T15:01"), ans(dk(1), "right", "2026-11-15T15:05")],
  }).leccion13.text;
  ck("Text is out of every sentence", t.total === d.exercises[0].items.length);
  ck("the second try after a miss in a round doesn't count", t.right === 1 && t.tried === 2);
}

console.log("\nLesson 8's time-and-date sheet");
{
  ck("leccion8-anexo counts toward leccion8", lessonOfExercises("leccion8-anexo") === "leccion8");
  const m = masteryByLesson({ exercisesById: EXERCISES_BY_ID, dialoguesById: {}, answers: [] });
  const total = (id) => EXERCISES_BY_ID[id].exercises.reduce((n, e) => n + e.items.length, 0);
  ck("its items are added to Lesson 8's", m.leccion8.grammar.total === total("leccion8") + total("leccion8-anexo"));
  ck("no row of its own", !m["leccion8-anexo"]);
}

console.log("\nRating");
{
  const g = (right, tried, total = 10) => ({ total, right, tried });
  ck("nothing answered: Not started", lessonRating({ words: { total: 10, seen: 0, remembered: 0 }, grammar: g(0, 0), text: g(0, 0) }) === "not-started");
  ck("one part under 80%: Learning", lessonRating({ words: { total: 10, seen: 10, remembered: 9 }, grammar: g(7, 10), text: g(9, 10) }) === "learning");
  ck("an untried part holds it back", lessonRating({ words: { total: 10, seen: 10, remembered: 9 }, grammar: g(9, 10), text: g(0, 0) }) === "learning");
  ck("every part at 80% or more: Learned", lessonRating({ words: { total: 10, seen: 10, remembered: 8 }, grammar: g(8, 10), text: g(9, 10) }) === "learned");
  ck("a lesson with no text is rated on the rest", lessonRating({ words: { total: 10, seen: 10, remembered: 9 }, grammar: g(9, 10) }) === "learned");
}

console.log("\nStudy days");
{
  const days = answerDays([ans("leccion10/3/1", "right", "2026-11-01T15:00"), ans("dialogo-leccion13/1/1", "right", "2026-11-01T16:00"), ans("leccion10/3/2", "right", "2026-11-02T03:00")]);
  ck("items and sentences are counted apart", days["2026-11-01"]?.sentences === 1);
  ck("an answer before 4am belongs to the day before", days["2026-11-01"]?.items === 2 && !days["2026-11-02"], JSON.stringify(days));
}

const n = ck.fails();
console.log(n ? `\n  FAILED: ${n}` : "\n  all checks passed");
process.exit(n ? 1 : 0);
