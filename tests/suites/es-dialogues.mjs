// The Spanish Dialogues (2026-11-07): each lesson's text, shown in the sheet's
// English a sentence at a time, and typed back into Spanish.
//
// What must hold, in plain words:
//   - every lesson with a text has its dialogue, in the same four stages as
//     everywhere; Lesson 15 has none, and Lesson 8's annex shares Lesson 8's;
//   - not a word of the text is lost in cutting it into sentences, every
//     sentence has its English and its Spanish, and no box asks for one word
//     when there is a sentence to go with it;
//   - the sentences stay where they are: answers are kept under a sentence's
//     place, so one added or taken out would move every answer after it;
//   - the key marks a sentence's own Spanish right, with or without accents
//     but for one that changes the tense; other words go to Claude, and any
//     correct Spanish can be right;
//   - a round is every sentence, then each one that wasn't Right once more,
//     and it is worked out from the answers alone: an unfinished round carries
//     on, a finished one ends where it ends, and the next answer starts the
//     next round;
//   - a finished round brings the text back the next day, then after 3 days, a
//     week and 3 weeks; the gap doesn't grow after more than a quarter of the
//     sentences were missed; a round done before the text was due leaves the
//     schedule alone; the day runs from 4am;
//   - the server marks with the sheet's own sentence, whatever the page sends,
//     keeps it with the exercises' answers under a key of its own, and the two
//     pages read only their own answers;
//   - the tutor is told a text as an exercise with no number, named by its
//     title.
//
// No browser and no network: Claude and the database are stand-ins.

import { checker } from "../check.mjs";
import { DIALOGUES, DIALOGUES_BY_ID, DIALOGUE_OF } from "../../src/data/exercises/es/dialogues.js";
import { DIALOGUE_TITLES, DIALOGUE_GROUPS } from "../../src/data/exercises/es/dialogueTitles.js";
import { TITLES, EXERCISE_GROUPS } from "../../src/data/exercises/es/titles.js";
import { EXERCISES_BY_ID } from "../../src/data/exercises/es/index.js";
import { LESSON_TEXTS } from "../../src/data/exercises/es/texts.js";
import { stageIds } from "../../src/data/lessons/es/stages.js";
import { markByKey, isAnswered, itemKey, findItem, hintText, hintLevels, keyReason } from "../../src/lib/exerciseMarking.js";
import { roundsOf, nextSentence, scheduleOf, dialogueStatus, statusLine, whenLine, addDays, DIALOGUE_PREFIX, DIALOGUE_GAPS } from "../../src/lib/dialogueRounds.js";
import { loadAnswers } from "../../src/lib/exerciseApi.js";
import { exerciseLabel, exerciseAbout, exerciseContext } from "../../src/lib/deckContext.js";
import { handleExerciseRequest } from "../../api/_lib/exercises.js";

const ck = checker();

// ── The texts ───────────────────────────────────────────────────────────
console.log("The texts");
ck("every lesson's sheet but Lesson 15 and Lesson 8's annex has its text",
   DIALOGUES.length === 25 && Object.keys(TITLES).every((id) => !!DIALOGUE_OF[id] === !["leccion15", "leccion8-anexo"].includes(id)));
ck("the sidebar's list and the texts name the same lessons, in course order",
   JSON.stringify(DIALOGUE_TITLES.map((l) => l.id)) === JSON.stringify(DIALOGUES.map((d) => d.lesson)));
{
  const inStages = DIALOGUE_GROUPS.flatMap(stageIds);
  ck("every text is in one stage, in course order", JSON.stringify(inStages) === JSON.stringify(DIALOGUES.map((d) => d.lesson)));
  ck("the stages are Exercises' four, in the same order",
     JSON.stringify(DIALOGUE_GROUPS.map((g) => g.title)) === JSON.stringify(EXERCISE_GROUPS.map((g) => g.title)));
  const eight = DIALOGUE_GROUPS.flatMap((g) => g.rows).find((r) => r.id === "leccion8");
  ck("Lesson 8 is one row, its annex having no text of its own", eight?.title === TITLES.leccion8 && !eight.parts);
  const seven = DIALOGUE_GROUPS.flatMap((g) => g.rows).find((r) => r.key === "leccion7");
  ck("Lesson 7 opens to its three parts", seven?.parts?.length === 3);
}
const norm = (s) => String(s).replace(/\s+/g, " ").trim();
{
  const off = [];
  for (const d of DIALOGUES) {
    const here = d.lines.map((l) => norm(l.sentences.map((s) => s.es).join(" ")));
    const there = LESSON_TEXTS[d.lesson].filter((l) => !l.title).map((l) => norm(l.scene || l.question || l.text));
    if (JSON.stringify(here) !== JSON.stringify(there)) off.push(d.lesson);
  }
  ck("not a word of a text is lost: its sentences together are the sheet's lines", off.length === 0, off.join("; "));
}
{
  const empty = [];
  const oneWord = [];
  const noWho = [];
  const outOfOrder = [];
  for (const d of DIALOGUES) {
    let at = 0;
    for (const line of d.lines) {
      for (const s of line.sentences) {
        if (!s.en.trim() || !s.es.trim()) empty.push(`${d.lesson}/${s.index}`);
        if (s.index !== at++) outOfOrder.push(`${d.lesson}/${s.index}`);
        const short = s.en.trim().split(/\s+/).length === 1 || s.es.trim().split(/\s+/).length === 1;
        if (short && line.sentences.length > 1) oneWord.push(`${d.lesson}: ${s.es}`);
        const item = d.items[s.index];
        if (item.prompt !== s.en || item.answer !== s.es) empty.push(`${d.lesson}/${s.index}: item`);
        if (line.who ? item.who !== line.who : item.who) noWho.push(`${d.lesson}/${s.index}`);
      }
    }
  }
  ck("every sentence has its English and its Spanish, in the text's order", empty.length === 0 && outOfOrder.length === 0, [...empty, ...outOfOrder].slice(0, 5).join("; "));
  ck("no box asks for one word when there is a sentence to go with it", oneWord.length === 0, oneWord.slice(0, 5).join("; "));
  ck("a sentence said by someone knows who", noWho.length === 0, noWho.slice(0, 5).join("; "));
}
// Pinned: answers are kept under a sentence's place, so a change here moves
// them. Only change these on purpose, knowing what it does to answers kept.
const COUNTS = {
  leccion1: 14, leccion2: 16, leccion3: 17, leccion4: 19, leccion5: 24, leccion6: 21, "leccion7-1": 21, "leccion7-2": 19, "leccion7-3": 17,
  leccion8: 15, leccion9: 17, leccion10: 24, leccion11: 24, "leccion12-1": 22, "leccion12-2": 20, leccion13: 31, leccion14: 24, leccion16: 13,
  leccion17: 40, leccion18: 32, leccion19: 24, leccion20: 39, leccion21: 28, leccion22: 20, leccion23: 29,
};
ck("each text still has the sentences its answers are kept under",
   JSON.stringify(Object.fromEntries(DIALOGUES.map((d) => [d.lesson, d.items.length]))) === JSON.stringify(COUNTS));
{
  const d = DIALOGUE_OF["leccion12-1"];
  ck("a title's dot doesn't end a sentence: \"Mrs. Duarte\" stays with its sentence",
     DIALOGUE_OF.leccion11.items.some((it) => it.prompt === "Hey, did you send an email to Mrs. Duarte, like I told you yesterday?"));
  ck("an ellipsis before a small letter doesn't end one: \"¡y a mí tampoco!\"",
     DIALOGUE_OF.leccion20.items.some((it) => it.answer === "A mi amigo no le gusta mucho el chile… ¡y a mí tampoco!"));
  ck("an ellipsis before a capital does: \"Ay, qué mal…\", then \"Pero a ver\"",
     d.items.some((it) => it.answer === "Ay, qué mal…" && it.prompt === "Oh, that's too bad…") ||
     d.items.some((it) => it.answer.startsWith("Pero a ver")));
  ck("the scene is there to translate too, with nobody saying it",
     d.lines[0].kind === "scene" && d.items[0].prompt === "Paola has trouble sleeping." && d.items[0].answer === "Paola tiene problemas para dormir." && !d.items[0].who);
  ck("the speaker's name is in English with the English, in Spanish with the Spanish",
     d.lines.some((l) => l.who === "Her friend" && l.whoEs === "Su amiga"));
  ck("a text's own title is kept in both languages", DIALOGUE_OF.leccion1.heading === "First Spanish class" && DIALOGUE_OF.leccion1.headingEs === "Primera clase de español");
}

// ── Marking ─────────────────────────────────────────────────────────────
console.log("Marking");
const asleep = DIALOGUE_OF["leccion12-1"].items.find((it) => it.answer === "Duermo muy mal estos días.");
ck("the text's own Spanish is right", markByKey(asleep, "Duermo muy mal estos días.")?.verdict === "right");
ck("capitals, punctuation and accents that change no tense don't matter", markByKey(asleep, "duermo muy mal estos dias")?.verdict === "right");
ck("other words go to Claude, which can call them right", markByKey(asleep, "Estoy durmiendo muy mal estos días.") === null);
{
  const said = { prompt: "He spoke with Ana.", answer: "Habló con Ana." };
  ck("an accent that changes the tense is Almost, and says why",
     markByKey(said, "Hablo con Ana.")?.verdict === "almost" && /"Habló", not "Hablo"/.test(keyReason(said, "Hablo con Ana.")));
}
ck("an empty box isn't marked", !isAnswered(asleep, "   "));
{
  const off = [];
  for (const d of DIALOGUES) d.items.forEach((item, i) => {
    if (markByKey(item, item.answer)?.verdict !== "right") off.push(`${d.lesson}/${i}: key`);
    if (hintText(item, hintLevels(item)) !== item.answer) off.push(`${d.lesson}/${i}: hint`);
    const key = itemKey(d.id, 1, i);
    if (findItem(DIALOGUES_BY_ID, key)?.item !== item || findItem(EXERCISES_BY_ID, key)) off.push(`${d.lesson}/${i}: found`);
  });
  ck("every sentence: the key takes its Spanish, the hint ends on it, and its key finds it and no exercise", off.length === 0, off.slice(0, 5).join("; "));
}
ck("a sentence's answers are kept under a key of their own", itemKey(DIALOGUE_OF.leccion1.id, 1, 4) === `${DIALOGUE_PREFIX}leccion1/1/5`);
{
  const hint = hintText(asleep, 1);
  ck("the hint shows each word's first letter and its length", hint === "D_____ m__ m__ e____ d___.", hint);
}

// ── Rounds ──────────────────────────────────────────────────────────────
console.log("Rounds");
const local = (y, m, d, h = 10) => new Date(y, m - 1, d, h).toISOString();
const NOW = local(2026, 11, 7);
const row = (index, verdict, answeredAt = NOW, more = {}) => ({ index, verdict, answeredAt, ...more });
const R = "right", W = "wrong", A = "almost";
ck("a new text starts at its first sentence", JSON.stringify(nextSentence(3, new Map())) === JSON.stringify({ index: 0, again: false }));
{
  const { tries, finished } = roundsOf(3, [row(0, R)]);
  ck("the next sentence is the one after the last answered", nextSentence(3, tries).index === 1 && !finished.length && tries.size === 1);
}
{
  const { finished, tries } = roundsOf(3, [row(0, R), row(1, R), row(2, R)]);
  ck("every sentence right finishes the round, with nothing under way", finished.length === 1 && finished[0].missed === 0 && finished[0].total === 3 && tries.size === 0);
}
{
  const { finished, tries } = roundsOf(3, [row(0, R), row(1, W), row(2, R)]);
  const next = nextSentence(3, tries);
  ck("a miss comes back after the last sentence", !finished.length && next.index === 1 && next.again === true);
}
{
  const again = roundsOf(3, [row(0, R), row(1, W), row(2, R), row(1, R)]);
  const twice = roundsOf(3, [row(0, R), row(1, W), row(2, R), row(1, W)]);
  ck("it comes back once: right or wrong the second time, the round is over, and it counts as missed",
     again.finished.length === 1 && again.finished[0].missed === 1 && twice.finished.length === 1 && twice.finished[0].missed === 1);
}
{
  const { finished, tries } = roundsOf(2, [row(0, A), row(1, R)]);
  ck("Almost comes back too", !finished.length && nextSentence(2, tries).index === 0 && nextSentence(2, tries).again);
}
{
  const a = roundsOf(2, [row(0, W), row(1, W)]);
  ck("misses come back in the text's order", nextSentence(2, a.tries).index === 0);
  const b = roundsOf(2, [row(0, W), row(1, W), row(0, R)]);
  ck("then the next", nextSentence(2, b.tries).index === 1 && nextSentence(2, b.tries).again);
}
{
  const { tries } = roundsOf(3, [row(0, undefined, NOW, { pending: true })]);
  ck("an answer being marked doesn't hold up the next sentence", nextSentence(3, tries).index === 1);
  const all = roundsOf(2, [row(0, undefined, NOW, { pending: true }), row(1, R)]);
  ck("with only answers being marked left, there is nothing to ask and the round isn't over",
     nextSentence(2, all.tries) === null && all.finished.length === 0);
  const back = roundsOf(2, [row(0, undefined, NOW, { pending: true }), row(1, W)]);
  ck("a miss comes back even while another answer is being marked", nextSentence(2, back.tries).index === 1 && nextSentence(2, back.tries).again);
}
{
  const { finished, tries } = roundsOf(2, [row(0, R), row(1, R), row(0, W)]);
  ck("the next answer after a finished round starts the next round", finished.length === 1 && tries.size === 1 && tries.get(0)[0].verdict === W);
}
{
  const { finished, tries } = roundsOf(2, [row(0, R, local(2026, 11, 1)), row(1, R, local(2026, 11, 7))]);
  ck("an unfinished round carries on another day, and finishes that day", finished.length === 1 && finished[0].at === local(2026, 11, 7) && tries.size === 0);
}
{
  const { finished, tries } = roundsOf(1, [row(5, R)]);
  ck("an answer to a sentence the text doesn't have is ignored", !finished.length && !tries.size);
}

// ── The schedule ────────────────────────────────────────────────────────
console.log("The schedule");
const round = (at, missed = 0, total = 20) => ({ at, missed, total });
const dueAfter = (...rounds) => scheduleOf(rounds).due;
ck("the gaps are a day, 3 days, a week and 3 weeks", JSON.stringify(DIALOGUE_GAPS) === "[1,3,7,21]");
ck("no round finished, no date", dueAfter() === null);
const d1 = round(local(2026, 11, 7));
ck("a first round brings it back the next day", dueAfter(d1) === "2026-11-08");
const d2 = round(local(2026, 11, 8));
ck("the second after 3 days", dueAfter(d1, d2) === "2026-11-11");
const d3 = round(local(2026, 11, 11));
ck("the third after a week", dueAfter(d1, d2, d3) === "2026-11-18");
const d4 = round(local(2026, 11, 18));
ck("the fourth after 3 weeks", dueAfter(d1, d2, d3, d4) === "2026-12-09");
ck("and it stays at 3 weeks", dueAfter(d1, d2, d3, d4, round(local(2026, 12, 9))) === "2026-12-30");
ck("exactly a quarter missed still grows the gap", dueAfter(d1, round(local(2026, 11, 8), 5)) === "2026-11-11");
ck("more than a quarter missed doesn't", dueAfter(d1, round(local(2026, 11, 8), 6)) === "2026-11-09");
ck("a poor first round comes back the next day", dueAfter(round(local(2026, 11, 7), 20)) === "2026-11-08");
ck("a poor round later keeps the gap it had", dueAfter(d1, d2, round(local(2026, 11, 11), 10)) === "2026-11-14");
ck("then a good one grows it again", dueAfter(d1, d2, round(local(2026, 11, 11), 10), round(local(2026, 11, 14))) === "2026-11-21");
ck("a round before it was due leaves the schedule alone", dueAfter(d1, d2, round(local(2026, 11, 9))) === "2026-11-11");
ck("a second round the same day does too", dueAfter(d1, round(local(2026, 11, 7, 18))) === "2026-11-08");
ck("a round done late counts from the day it was done", dueAfter(d1, round(local(2026, 11, 20))) === "2026-11-23");
ck("the day runs from 4am: 1am belongs to the day before", dueAfter(round(local(2026, 11, 8, 1))) === "2026-11-08");
ck("dates carry over months and years", addDays("2026-12-30", 3) === "2027-01-02" && addDays("2026-11-01", 1) === "2026-11-02");

// ── What the list says ──────────────────────────────────────────────────
console.log("What the list says");
const TODAY = "2026-11-07";
const full = (n, verdict, at) => Array.from({ length: n }, (_, i) => row(i, verdict, at));
{
  const st = dialogueStatus(4, [], TODAY);
  ck("a text not started says how long it is and isn't due", statusLine(4, st, TODAY) === "4 sentences" && !st.isDue);
}
{
  const st = dialogueStatus(4, [row(0, R), row(1, W)], TODAY);
  ck("a first round under way says how far, and stays near the top until it's done",
     statusLine(4, st, TODAY) === "4 sentences · 2 done" && st.isDue);
}
{
  const at = local(2026, 11, 7);
  const rows = [row(0, W, at), row(1, R, at), row(2, R, at), row(3, R, at), row(0, R, at)];
  const st = dialogueStatus(4, rows, TODAY);
  ck("a finished one says how many times, how it went and when it comes back",
     statusLine(4, st, TODAY) === "Gone through once · 3 of 4 sentences right last time · comes back tomorrow" && !st.isDue, statusLine(4, st, TODAY));
  const later = dialogueStatus(4, rows, "2026-11-08");
  ck("on its day it's due", statusLine(4, later, "2026-11-08").endsWith("due today") && later.isDue);
  const after = dialogueStatus(4, rows, "2026-11-20");
  ck("and stays due until it's done", statusLine(4, after, "2026-11-20").endsWith("due today") && after.isDue);
}
{
  const rows = [...full(2, R, local(2026, 11, 7)), ...full(2, R, local(2026, 11, 8))];
  ck("twice, then a date", statusLine(2, dialogueStatus(2, rows, "2026-11-08"), "2026-11-08") === "Gone through twice · 2 of 2 sentences right last time · comes back Nov 11");
  const three = [...rows, ...full(2, R, local(2026, 11, 8, 12))];
  ck("then a number", statusLine(2, dialogueStatus(2, three, "2026-11-08"), "2026-11-08").startsWith("Gone through 3 times"));
  const early = dialogueStatus(2, [...rows, row(0, R, local(2026, 11, 9))], "2026-11-09");
  ck("a round started early says how far, and doesn't make it due",
     !early.isDue && statusLine(2, early, "2026-11-09") === "Gone through twice · 2 of 2 sentences right last time · 1 done this time · comes back Nov 11", statusLine(2, early, "2026-11-09"));
}
ck("when: today, tomorrow or a date", whenLine("2026-11-07", TODAY) === "due today" && whenLine("2026-11-08", TODAY) === "comes back tomorrow" && whenLine("2026-11-18", TODAY) === "comes back Nov 18");

// ── The server ──────────────────────────────────────────────────────────
console.log("The server");
const user = { id: "u-1" };
const store = () => ({ rows: [], async save(r) { this.rows.push(r); return { row: { answered_at: NOW } }; } });
const asked = [];
const ask = (reply) => async ({ apiKey, prompt }) => { asked.push({ apiKey, prompt }); return reply; };
const d = DIALOGUE_OF["leccion12-1"];
const at = d.items.indexOf(asleep);
const key = itemKey(d.id, 1, at);
{
  const s = store();
  asked.length = 0;
  const { status, json } = await handleExerciseRequest({ body: { action: "answer", key, typed: "duermo muy mal estos dias" }, user, store: s, apiKey: () => ({ key: "k" }), ask: ask(null) });
  ck("the text's own Spanish is right and kept, and Claude isn't asked",
     status === 200 && json.answer.verdict === "right" && json.answer.markedBy === "key" && json.saved === true && asked.length === 0 &&
     s.rows[0].item_key === key && s.rows[0].lesson === d.id && s.rows[0].prompt === asleep.prompt);
}
{
  const s = store();
  asked.length = 0;
  const { status, json } = await handleExerciseRequest({
    body: { action: "answer", key, typed: "Estoy durmiendo muy mal estos días." }, user, store: s, apiKey: () => ({ key: "sk-ant-test" }),
    ask: ask({ verdict: "right", note: "", correct: "" }),
  });
  const p = asked[0]?.prompt || "";
  ck("other words go to Claude, which can call them right, and they are kept",
     status === 200 && json.answer.verdict === "right" && json.answer.markedBy === "claude" && s.rows.length === 1 && s.rows[0].marked_by === "claude");
  ck("Claude is told the English, who says it, the text's Spanish and the whole text",
     p.includes(`Item: ${asleep.prompt}`) && p.includes(`Said by: ${asleep.who}`) && p.includes(`The key's answers: ${asleep.answer}`) &&
     p.includes("The lesson's text:") && p.includes("Lo que pasa es que me despierto") && p.includes("Any correct, natural Spanish"));
}
{
  const s = store();
  const { status, json } = await handleExerciseRequest({ body: { action: "answer", key, typed: "No sé" }, user, store: s, apiKey: () => ({ error: "Connect", code: "byok_required", status: 402 }), ask: ask(null) });
  ck("with no key to pay for Claude, it's said, and nothing is kept", status === 402 && json.code === "byok_required" && s.rows.length === 0);
}
{
  const { status, json } = await handleExerciseRequest({ body: { action: "answer", key: `${DIALOGUE_PREFIX}leccion15/1/1`, typed: "x" }, user, store: store(), apiKey: () => ({ key: "k" }), ask: ask(null) });
  ck("a sentence the app doesn't have is refused", status === 400 && json.code === "no_item");
}
{
  // The two pages share a table and read only their own rows.
  const seen = [];
  const chain = (name) => ({
    select() { return this; },
    eq() { return this; },
    like(col, pattern) { seen.push(["like", name, col, pattern]); return this; },
    not(col, op, pattern) { seen.push(["not", name, col, op, pattern]); return this; },
    order() { return this; },
    range() { return Promise.resolve({ data: [], error: null }); },
  });
  const supabase = { from: chain };
  await loadAnswers({ supabase, userId: "u-1", dialogues: true });
  await loadAnswers({ supabase, userId: "u-1" });
  ck("Dialogues reads its own answers, and Exercises everything else",
     JSON.stringify(seen) === JSON.stringify([
       ["like", "es_exercise_answers", "item_key", `${DIALOGUE_PREFIX}%`],
       ["not", "es_exercise_answers", "item_key", "like", `${DIALOGUE_PREFIX}%`],
     ]), JSON.stringify(seen));
}

// ── The tutor ───────────────────────────────────────────────────────────
console.log("The tutor");
{
  const ctx = {
    lesson: d.title, number: 0, title: "The lesson's dialogue", instruction: "Traduce", english: "Translate",
    items: [{ number: 1, prompt: "Paola has trouble sleeping.", answer: "Paola tiene problemas para dormir.", answered: true, typed: "x", verdict: "wrong", correct: "Paola tiene problemas para dormir.", why: "Because." }, { number: 2, prompt: "Paola: I'm sleeping very badly.", answer: "Duermo muy mal.", answered: false }],
    focus: 2, asked: 1, last: 1,
  };
  ck("the panel names a text by its title", exerciseLabel(ctx) === "The lesson's dialogue, 2: Paola: I'm sleeping very badly.", exerciseLabel(ctx));
  ck("with nothing being answered, just its title", exerciseLabel({ ...ctx, focus: 0 }) === "The lesson's dialogue");
  ck("a question is kept with what it was about", exerciseAbout(ctx).startsWith("The lesson's dialogue, number 2:"), exerciseAbout(ctx));
  const sent = exerciseContext(ctx);
  ck("the tutor gets every sentence, with what was typed only once answered",
     sent.items.length === 2 && sent.items[0].typed === "x" && sent.items[0].why === "Because." && !sent.items[1].typed && sent.focus === 2 && sent.asked === 1 && sent.last === 1);
  const longest = Math.max(...DIALOGUES.map((x) => x.items.length));
  const longestLine = Math.max(...DIALOGUES.flatMap((x) => x.items.map((it) => it.prompt.length + (it.who?.length || 0) + 2)));
  ck("the longest text fits what the tutor is sent", longest <= 60 && longestLine <= 800, `${longest} sentences, ${longestLine} characters`);
}

const n = ck.fails();
console.log(n ? `\n  FAILED: ${n}` : "\n  all checks passed");
process.exit(n ? 1 : 0);
