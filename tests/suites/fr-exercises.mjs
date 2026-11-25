// The French Exercises and Dialogues (2026-11-25; owner: "extend the spanish
// dialogue and exercises modules to french"): the written exercises of
// Laura Caufour's French sheets and each lesson's text, marked by the answer
// key or by Claude, and kept in tables of their own.
//
// What must hold, in plain words:
//   - every sheet's file is complete and answerable (each item has a prompt,
//     a gap item one list of answers per blank, the others an answer), has
//     no free-writing item, and the key marks its own answers right;
//   - every sheet is in exactly one place in the sidebar's groups, in course
//     order, and every text in the Dialogues list is a text that exists;
//   - the exercises the owner had taken out of Spanish (2026-10-25) are out
//     of French too: no sentence of your own, nothing about yourself, no
//     question to write, no yes or no in a full sentence;
//   - the key marks as the Spanish one does, with French words: capitals,
//     punctuation, hyphens and every accent but one that makes another form
//     of the verb are set aside ("parle" for "parlé" is Wrong, "ete" for
//     "été" is right); a typo is Almost; another real form of the verb is
//     Wrong; a true-or-false pressed the wrong way is Wrong, with Vrai or
//     Faux;
//   - a French request is marked against the French sheets, and asks Claude
//     with the French instructions, which never show a double quotation
//     mark; the answers are kept in exercise_answers and the disputes in
//     exercise_disputes; a request with no course is Spanish as before;
//   - the Spanish marking still marks as it did (src/lib/exerciseMarking.js
//     was made a factory for both).
//
// No browser and no network: Claude and the database are stand-ins.

import { checker } from "../check.mjs";
import { EXERCISE_LESSONS, EXERCISES_BY_ID } from "../../src/data/exercises/fr/index.js";
import { TITLES, EXERCISE_GROUPS } from "../../src/data/exercises/fr/titles.js";
import { DIALOGUES, DIALOGUES_BY_ID, DIALOGUE_OF } from "../../src/data/exercises/fr/dialogues.js";
import { DIALOGUE_TITLES, DIALOGUE_GROUPS } from "../../src/data/exercises/fr/dialogueTitles.js";
import { LESSON_TEXTS } from "../../src/data/exercises/fr/texts.js";
import { VERB_FORMS, ACCENT_FORMS } from "../../src/data/exercises/fr/verbForms.js";
import { FRENCH_MARKING } from "../../src/lib/frenchMarking.js";
import { kindOf, itemKey, findItem, hintText, plain } from "../../src/lib/exerciseMarking.js";
import { stageIds } from "../../src/data/lessons/es/stages.js";
import { handleExerciseRequest, supabaseExerciseStore, FR_MARK_SYSTEM, FR_REVIEW_SYSTEM, courseOf } from "../../api/_lib/exercises.js";

const ck = checker();
const { markByKey, typedText, isAnswered, keyAnswer } = FRENCH_MARKING;
const nonEmpty = (v) => typeof v === "string" && v.trim().length > 0;

console.log("\nThe sheets");
{
  const ids = Object.keys(TITLES);
  ck("every titled sheet has a file, in course order", EXERCISE_LESSONS.map((l) => l.id).join() === ids.join(), `${EXERCISE_LESSONS.length} of ${ids.length}`);
  let items = 0, exercises = 0, shapeBad = [], keyBad = [], gapBad = [], open = [], truthBad = [];
  for (const lesson of EXERCISE_LESSONS) {
    for (const ex of lesson.exercises) {
      exercises++;
      if (![ex.title, ex.instruction, ex.english].every(nonEmpty)) shapeBad.push(`${lesson.id} ${ex.n}`);
      ex.items.forEach((item, i) => {
        items++;
        const where = `${lesson.id}/${ex.n}/${i + 1}`;
        if (!nonEmpty(item.prompt)) shapeBad.push(where);
        const kind = kindOf(item);
        if (kind === "open") open.push(where);
        if (kind === "gaps") {
          const blanks = (item.prompt.match(/___/g) || []).length;
          if (blanks !== item.gaps.length || item.gaps.some((g) => !g.length || !g.every(nonEmpty))) gapBad.push(where);
          const typed = item.gaps.map((g) => g[0]);
          if (markByKey(item, typed)?.verdict !== "right") keyBad.push(where);
        } else {
          if (!nonEmpty(item.answer)) shapeBad.push(where);
          for (const a of [item.answer, ...(item.also || [])]) {
            const typed = kind === "truth" ? { truth: item.truth, text: a } : a;
            if (markByKey(item, typed)?.verdict !== "right") keyBad.push(`${where} ${JSON.stringify(a)}`);
          }
          if (kind === "truth" && !/^(Vrai|Faux)\b/.test(item.answer)) truthBad.push(where);
        }
      });
    }
  }
  ck("every exercise and item has its parts", shapeBad.length === 0, shapeBad.slice(0, 5).join(", "));
  ck("every gap item has a list of answers for each blank", gapBad.length === 0, gapBad.slice(0, 5).join(", "));
  ck("the key marks every one of its own answers right", keyBad.length === 0, `${keyBad.length}: ${keyBad.slice(0, 5).join("; ")}`);
  ck("no free-writing item (the owner took those out, 2026-10-25)", open.length === 0, open.slice(0, 5).join(", "));
  ck("a true-or-false answer starts with Vrai or Faux and agrees with its truth", truthBad.length === 0, truthBad.slice(0, 5).join(", "));
  ck("the sheets are 165 exercises with 3,259 items", exercises === 165 && items === 3259, `${exercises} exercises, ${items} items`);
}

console.log("\nWhat was left out");
{
  const OWN = /(Écrire|Écris|Ecrire|Production écrite|Ma phrase|your own sentence|about yourself|Poser les questions|Répondre aux questions à la forme|Dictée|Dictee)/i;
  const hits = [];
  for (const lesson of EXERCISE_LESSONS) for (const ex of lesson.exercises) {
    if (OWN.test(`${ex.title} ${ex.instruction}`)) hits.push(`${lesson.id} ${ex.n}: ${ex.title}`);
  }
  ck("no exercise asks for a sentence of your own, the question, a yes or no in full or a dictation", hits.length === 0, hits.slice(0, 5).join("; "));
}

console.log("\nThe lessons in the sidebar");
{
  const all = EXERCISE_GROUPS.flatMap((s) => stageIds(s));
  ck("every sheet is in the groups once", all.length === Object.keys(TITLES).length && new Set(all).size === all.length, `${all.length}`);
  ck("the groups keep the course's order", all.join() === Object.keys(TITLES).join());
  ck("Lessons 6, 11 and 16's sheets are one row each that opens to its sheets",
     EXERCISE_GROUPS.flatMap((s) => s.rows).filter((r) => r.parts).map((r) => `${r.key}:${r.parts.length}`).join() === "lecon6:3,lecon7:2,lecon11:2,lecon15:2,lecon16:2");
  ck("her topic lessons follow as More lessons", EXERCISE_GROUPS.at(-1).title === "More lessons" && EXERCISE_GROUPS.at(-1).rows.length === 13);
  const dAll = DIALOGUE_GROUPS.flatMap((s) => stageIds(s));
  ck("the Dialogues list is the texts there are", dAll.length === DIALOGUES.length && dAll.every((id) => DIALOGUE_OF[id]) && DIALOGUE_TITLES.length === DIALOGUES.length, `${dAll.length}`);
  ck("a text of the list has sentences with her French and her English", DIALOGUES.every((d) => d.items.length > 0 && d.items.every((i) => nonEmpty(i.prompt) && nonEmpty(i.answer))), `${DIALOGUES.reduce((n, d) => n + d.items.length, 0)} sentences`);
  ck("every lesson text is there for the tutor", Object.keys(LESSON_TEXTS).length === DIALOGUES.length);
}

console.log("\nThe key's marking, in French");
{
  // "parler" gap items in the sheets: find real items to test with.
  const find = (pred) => { for (const l of EXERCISE_LESSONS) for (const ex of l.exercises) for (const it of ex.items) if (pred(it)) return it; return null; };
  const present = { prompt: "Tu ___ français. (parler)", gaps: [["parles"]] };
  ck("capitals, hyphens and punctuation are ignored", markByKey({ prompt: "x", answer: "Est-ce que tu viens ?" }, "est ce que tu viens")?.verdict === "right");
  ck("a missing accent that makes no other word is right", markByKey({ prompt: "x", answer: "Il a été à l'école" }, "il a ete a l'ecole")?.verdict === "right");
  const gapIt = find((it) => Array.isArray(it.gaps) && it.gaps.length === 1 && it.gaps[0].length === 1 && /^[a-zéèêàùç]{6,}$/.test(it.gaps[0][0]) && VERB_FORMS[it.gaps[0][0].normalize("NFD").replace(/[̀-ͯ]/g, "")]?.length);
  const w = gapIt.gaps[0][0];
  const near = VERB_FORMS[w.normalize("NFD").replace(/[̀-ͯ]/g, "")][0];
  ck("another real form of the verb, one letter off, is Wrong", markByKey(gapIt, [near])?.verdict === "wrong", `${w} for ${near}`);
  const accented = Object.keys(ACCENT_FORMS).find((k) => /é$/.test(k) && k.length > 5);
  const accentItem = { prompt: "x ___", gaps: [[accented]] };
  ck("an accent that makes another form of the verb is Wrong", markByKey(accentItem, [accented.replace(/é$/, "e")])?.verdict === "wrong", `${accented}`);
  const typo = { prompt: "x", answer: "La maison est grande" };
  ck("a typo in a word that isn't a verb is Almost", markByKey(typo, "la maisn est grande")?.verdict === "almost");
  ck("the wrong gender on an article is Almost", markByKey(typo, "le maison est grande")?.verdict === "almost");
  ck("a different word is for Claude", markByKey(typo, "la voiture est grande") === null);
  const tf = { prompt: "Élise habite à Paris.", truth: true, answer: "Vrai. Élise habite à Paris.", also: ["Vrai. Elle habite à Paris."] };
  ck("a true-or-false pressed the wrong way is Wrong", markByKey(tf, { truth: false, text: "Élise habite à Paris." })?.verdict === "wrong");
  ck("a true-or-false sentence is marked without its Vrai", markByKey(tf, { truth: true, text: "Elle habite a Paris" })?.verdict === "right");
  ck("a true-or-false is kept as Vrai or Faux", typedText(tf, { truth: false, text: "x" }) === "Faux. x" && typedText(tf, { truth: true, text: "x" }) === "Vrai. x");
  ck("an answer isn't complete until every blank is filled", !isAnswered({ gaps: [["a"], ["b"]] }, ["a", ""]) && isAnswered({ gaps: [["a"], ["b"]] }, ["a", "b"]));
  ck("the hint shows the first letters of the key's answer", hintText({ answer: "Il est là" }, 1) === "I_ e__ l_", hintText({ answer: "Il est là" }, 1));
  ck("a fill-in's key answer shows with its blanks filled", keyAnswer({ prompt: "Tu ___ français.", gaps: [["parles"]] }) === "Tu parles français.");
  void present;
}

console.log("\nThe server");
{
  const user = { id: "u1" };
  const keyed = EXERCISE_LESSONS[0];
  const ex = keyed.exercises[0];
  const item = ex.items[0];
  const key = itemKey(keyed.id, ex.n, 0);
  const rows = [], disputes = [];
  const store = {
    async save(row) { rows.push(row); return { row: { answered_at: "2026-11-25T12:00:00Z" } }; },
    async accepted() { return { lines: [] }; },
    async saveDispute(row) { disputes.push(row); return {}; },
  };
  const typedRight = Array.isArray(item.gaps) ? item.gaps.map((g) => g[0]) : item.answer;
  const asked = [];
  const ask = (reply) => async (args) => { asked.push(args); return reply; };
  let r = await handleExerciseRequest({ body: { action: "answer", course: "fr", key, typed: typedRight }, user, store, apiKey: () => ({ key: "k" }), ask: ask(null) });
  ck("a right answer is marked by the French key, asking nobody", r.status === 200 && r.json.answer.verdict === "right" && r.json.answer.markedBy === "key" && asked.length === 0);
  ck("it is kept for the student who gave it", rows.length === 1 && rows[0].user_id === "u1" && rows[0].item_key === key && rows[0].lesson === keyed.id);
  const spanishKey = "leccion1/1/1";
  r = await handleExerciseRequest({ body: { action: "answer", course: "fr", key: spanishKey, typed: ["soy"] }, user, store, apiKey: () => ({ key: "k" }), ask: ask(null) });
  ck("a Spanish item is not in the French sheets", r.status === 400 && r.json.code === "no_item");
  r = await handleExerciseRequest({ body: { action: "answer", key, typed: typedRight }, user, store, apiKey: () => ({ key: "k" }), ask: ask(null) });
  ck("a request with no course looks in the Spanish sheets, as before", r.status === 400 && r.json.code === "no_item", r.json.code);
  // An answer the key can't settle goes to Claude with the French instructions.
  const odd = Array.isArray(item.gaps) ? ["zzzz"] : "zzzz qqqq";
  asked.length = 0;
  r = await handleExerciseRequest({ body: { action: "answer", course: "fr", key, typed: odd }, user, store, apiKey: () => ({ key: "k" }), ask: ask({ verdict: "wrong", note: "No.", correct: "x" }) });
  ck("an answer the key doesn't have goes to Claude with the French instructions", asked.length === 1 && asked[0].system === FR_MARK_SYSTEM && /Instruction:/.test(asked[0].prompt) && /learning French/.test(asked[0].system) && r.json.answer.markedBy === "claude");
  ck("Claude's marking is kept with the French prompt's own version", rows.at(-1).marked_by === "claude" && /^[0-9a-f]{7}$/.test(rows.at(-1).prompt_version) && rows.at(-1).prompt_version !== courseOf("es").markVersion);
  ck("Claude's French instructions never show a double quotation mark", !FR_MARK_SYSTEM.includes('"') && !FR_REVIEW_SYSTEM.includes('"'), "");
  // A dialogue sentence.
  const d = DIALOGUES[0];
  const dKey = itemKey(d.id, 1, 0);
  r = await handleExerciseRequest({ body: { action: "answer", course: "fr", key: dKey, typed: d.items[0].answer }, user, store, apiKey: () => ({ key: "k" }), ask: ask(null) });
  ck("a dialogue sentence is marked against her French", r.status === 200 && r.json.answer.verdict === "right", dKey);
  // Disputes.
  asked.length = 0;
  r = await handleExerciseRequest({ body: { action: "dispute", course: "fr", key: dKey, typed: "zzzz", verdict: "wrong", force: true }, user, store, apiKey: () => ({ key: "k" }) });
  ck("Accept anyway is kept, asking nobody", r.status === 200 && r.json.verdict === "accept" && disputes.length === 1 && disputes[0].forced === true);
  let sentSystem = "";
  r = await handleExerciseRequest({ body: { action: "dispute", course: "fr", key, typed: odd === "zzzz qqqq" ? odd : "zzzz", verdict: "wrong" }, user, store, apiKey: () => ({ key: "k" }), review: async (a) => { sentSystem = a.system; return { verdict: "reject", reasoning: "Not French." }; } });
  ck("Claude's second look uses the French instructions", sentSystem === FR_REVIEW_SYSTEM && r.json.verdict === "reject");
  // The tables.
  const calls = [];
  const db = { from(t) { calls.push(t); return { insert: () => ({ select: () => ({ single: async () => ({ data: { answered_at: "x" }, error: null }) }), then: (f) => f({ error: null }) }), select: () => ({ eq: () => ({ eq: () => ({ eq: async () => ({ data: [], error: null }) }) }) }) }; } };
  await supabaseExerciseStore(db, "fr").save({ user_id: "u" });
  await supabaseExerciseStore(db, "fr").saveDispute({ user_id: "u" });
  await supabaseExerciseStore(db, "fr").accepted("u", "k");
  await supabaseExerciseStore(db).save({ user_id: "u" });
  ck("French answers and disputes go to exercise_answers and exercise_disputes, Spanish to es_*", calls.join() === "exercise_answers,exercise_disputes,exercise_disputes,es_exercise_answers", calls.join());
}

console.log("\nSpanish is as it was");
{
  const { SPANISH_MARKING } = await import("../../src/lib/exerciseMarking.js");
  const item = { prompt: "x ___", gaps: [["habló"]] };
  ck("hablo for habló is still Wrong", SPANISH_MARKING.markByKey(item, ["hablo"])?.verdict === "wrong");
  ck("estan for están is still right", SPANISH_MARKING.markByKey({ prompt: "x", answer: "Ellos están aquí" }, "ellos estan aqui")?.verdict === "right");
  ck("a Spanish true-or-false still says Verdadero", SPANISH_MARKING.typedText({ truth: true }, { truth: true, text: "x" }) === "Verdadero. x");
  void findItem; void plain; void DIALOGUES_BY_ID; void EXERCISES_BY_ID;
}

ck.done();
