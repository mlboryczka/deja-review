// The Spanish Exercises (2026-10-24): every written exercise of every lesson
// sheet, answered one item at a time, marked by the answer key or by Claude,
// and kept.
//
// What must hold, in plain words:
//   - every lesson's exercise file is complete and answerable: each item has
//     a prompt, a gap item has one list of answers per blank, the others an
//     answer, and the key marks its own answers right;
//   - the key ignores capitals, punctuation, ¿ and ¡, but not accents:
//     "esta" for "está" is "Almost", as on the cards ("Check the accents"),
//     and "sólo" for "solo" is right;
//   - a true-or-false pressed the wrong way is wrong without asking Claude;
//     free writing always goes to Claude;
//   - the server marks with the sheet's own item, not what the page sends,
//     asks Claude only when the key doesn't settle it, keeps every answer
//     for the student who gave it, and says so when the table isn't there
//     yet; with no key, nothing is asked and nothing kept;
//   - a reply from Claude that can't be read keeps nothing;
//   - the exercises the owner had taken out (2026-10-25, #53–#56) stay out:
//     no sentence of your own, nothing about yourself, no question to write
//     and no answer about the text, and every other item is still there.
//
// No browser and no network: Claude and the database are stand-ins.

import { checker } from "../check.mjs";
import { EXERCISE_LESSONS, EXERCISES_BY_ID, LEFT_OUT } from "../../src/data/exercises/es/index.js";
import { LESSON_TEXTS } from "../../src/data/exercises/es/texts.js";
import { plain, bare, kindOf, markByKey, typedText, keyAnswer, itemKey, findItem, isAnswered } from "../../src/lib/exerciseMarking.js";
import { handleExerciseRequest, markPrompt, readMark } from "../../api/_lib/exercises.js";

const ck = checker();

// ── The data ─────────────────────────────────────────────────────────────
console.log("The exercise files");
const problems = [];
const keys = new Set();
let items = 0;
for (const lesson of EXERCISE_LESSONS) {
  if (!lesson.title || lesson.title === lesson.id) problems.push(`${lesson.id}: no title`);
  if (!Array.isArray(lesson.exercises) || !lesson.exercises.length) { problems.push(`${lesson.id}: no exercises`); continue; }
  for (const ex of lesson.exercises) {
    for (const k of ["title", "instruction", "english"]) if (!String(ex[k] || "").trim()) problems.push(`${lesson.id} ej ${ex.n}: no ${k}`);
    ex.items.forEach((item, i) => {
      items++;
      const key = itemKey(lesson.id, ex.n, i);
      if (keys.has(key)) problems.push(`${key}: twice`);
      keys.add(key);
      if (findItem(EXERCISES_BY_ID, key)?.item !== item) problems.push(`${key}: not found by its key`);
      if (!String(item.prompt || "").trim()) problems.push(`${key}: no prompt`);
      const kind = kindOf(item);
      const blanks = (String(item.prompt).match(/___/g) || []).length;
      if (kind === "gaps") {
        if (item.gaps.length !== blanks) problems.push(`${key}: ${blanks} blanks, ${item.gaps.length} answers`);
        const typed = item.gaps.map((g) => g[0]);
        if (markByKey(item, typed)?.verdict !== "right") problems.push(`${key}: the key's own gaps aren't marked right`);
      } else {
        if (blanks) problems.push(`${key}: blanks but no gap answers`);
        if (!String(item.answer || "").trim()) problems.push(`${key}: no answer`);
        const typed = kind === "truth" ? { truth: item.truth, text: item.answer } : item.answer;
        if (markByKey(item, typed)?.verdict !== "right") problems.push(`${key}: the key's own answer isn't marked right`);
      }
    });
  }
}
ck(`all ${EXERCISE_LESSONS.length} sheets load, with ${items} items, each answerable and marked right by its own key`,
   EXERCISE_LESSONS.length === 27 && items > 2000 && problems.length === 0, problems.slice(0, 8).join("; "));
ck("the lesson text is there for every sheet that has one (not Lesson 15, which has none)",
   EXERCISE_LESSONS.filter((l) => l.textOf !== "leccion15" && !LESSON_TEXTS[l.textOf]).length === 0);

// The owner, 2026-10-25: "get rid of these types of exercises throughout
// lessons". Free writing is left only in Lesson 16's translation of its text.
const leftIn = [];
for (const lesson of EXERCISE_LESSONS) {
  for (const ex of lesson.exercises) {
    const asks = `${ex.instruction} ${ex.english}`;
    const own = ex.items.some((it) => kindOf(it) === "open") && !(lesson.id === "leccion16" && ex.n === 3);
    if (own || /corresponden a las respuestas|sobre el (diálogo|texto)|diciendo la verdad|según tu opinión|of your own|your own way/i.test(asks)) leftIn.push(`${lesson.id} ej ${ex.n}`);
  }
}
ck("no exercise taken out on 2026-10-25 is left: no sentence of your own, nothing about yourself, no question to write, no answer about the text",
   leftIn.length === 0, leftIn.join("; "));
ck("52 exercises are out, 184 are left, every lesson keeps some, and every other item is still there",
   Object.values(LEFT_OUT).flat().length === 52 && EXERCISE_LESSONS.reduce((n, l) => n + l.exercises.length, 0) === 184 &&
   EXERCISE_LESSONS.every((l) => l.exercises.length > 0) && items === 3015);
// "renumber the exercises properly" (owner, 2026-10-25).
ck("each lesson's exercises are numbered 1, 2, 3… on the page, in order",
   EXERCISE_LESSONS.every((l) => l.exercises.every((ex, i) => ex.number === i + 1)));
ck("an instruction pointing at another exercise gives its number on the page",
   /del ejercicio 1 en plural/.test(EXERCISES_BY_ID["leccion12-1"].exercises.find((ex) => ex.n === 3).instruction) &&
   /from exercise 1 /.test(EXERCISES_BY_ID.leccion18.exercises.find((ex) => ex.n === 2).english));

// ── The key's marking ────────────────────────────────────────────────────
console.log("Marking by the key");
ck("capitals, punctuation, ¿ and ¡ don't count", plain("¿De dónde ERES?") === "de dónde eres" && plain("Sí, soy  mexicano.") === "sí soy mexicano");
const notime = { prompt: "¿Tienes tiempo? No, …", answer: "No, no tengo tiempo.", also: ["No tengo tiempo."] };
ck("the comma after a leading No counts: \"No, tengo tiempo\" isn't \"No tengo tiempo\"",
   markByKey(notime, "No, tengo tiempo") === null && markByKey(notime, "no tengo tiempo")?.verdict === "right" && markByKey(notime, "No, no tengo tiempo")?.verdict === "right" && markByKey(notime, "No no tengo tiempo") === null);
ck("accents and ñ are set aside only by bare()", bare("Él está aquí, año") === "el esta aqui ano");
const gap = { prompt: "Ella ___ profesora.", gaps: [["es"]] };
ck("a gap typed right is right", markByKey(gap, ["es"])?.verdict === "right");
ck("a gap the key doesn't have goes to Claude", markByKey(gap, ["eres"]) === null);
const two = { prompt: "Ana ___ abrir la puerta, pero no ___.", gaps: [["quiso"], ["pudo"]] };
ck("two gaps: both right is right, one wrong goes to Claude", markByKey(two, ["quiso", "pudo"])?.verdict === "right" && markByKey(two, ["quiso", "puede"]) === null);
const acc = { prompt: "Where are you? (tú)", answer: "¿Dónde estás?" };
ck("right but for an accent is Almost, with no call", markByKey(acc, "donde estas")?.verdict === "almost" && markByKey(acc, "donde estas")?.accents === true);
ck("an accent that Real Academia still allows is right", markByKey({ prompt: "only", answer: "solo" }, "sólo")?.verdict === "right");
ck("another wording in also is right", markByKey({ prompt: "x", answer: "Me llamo Ana.", also: ["Mi nombre es Ana."] }, "mi nombre es ana")?.verdict === "right");
const tf = { prompt: "Lucía vive en Guadalajara.", truth: false, answer: "Falso. Lucía vive en Estados Unidos." };
ck("true or false pressed the wrong way is wrong, without Claude", markByKey(tf, { truth: true, text: "Sí." })?.verdict === "wrong");
ck("true or false: the key's sentence is right with or without Falso", markByKey(tf, { truth: false, text: "Lucía vive en Estados Unidos" })?.verdict === "right" && markByKey(tf, { truth: false, text: "Falso, Lucía vive en Estados Unidos." })?.verdict === "right");
ck("true or false: another sentence goes to Claude", markByKey(tf, { truth: false, text: "Ella vive en Los Ángeles." }) === null);
const open = { prompt: "Yo …", open: true, answer: "Yo sé nadar." };
ck("free writing goes to Claude", markByKey(open, "Yo sé cocinar.") === null);
ck("an empty answer isn't marked", !isAnswered(gap, [""]) && !isAnswered(acc, "  ") && !isAnswered(tf, { truth: null, text: "x" }));
ck("the typed line fills the blanks in brackets", typedText(two, ["quiso", "pudo"]) === "Ana [quiso] abrir la puerta, pero no [pudo].");
ck("the key's answer fills the blanks with the first answer", keyAnswer(two) === "Ana quiso abrir la puerta, pero no pudo.");

// ── The server ───────────────────────────────────────────────────────────
console.log("The server");
const user = { id: "u-1" };
function store({ missing = false } = {}) {
  const rows = [];
  return {
    rows,
    async save(row) {
      if (missing) return { error: { code: "PGRST205", message: "Could not find the table" } };
      rows.push(row);
      return { row: { answered_at: "2026-10-24T10:00:00Z" }, error: null };
    },
  };
}
const asked = [];
const ask = (reply) => async ({ apiKey, prompt }) => { asked.push({ apiKey, prompt }); return reply; };
const key1 = itemKey("leccion1", 1, 0);
const first = findItem(EXERCISES_BY_ID, key1);
const right = first.item.gaps.map((g) => g[0]);

{
  const s = store();
  asked.length = 0;
  const { status, json } = await handleExerciseRequest({ body: { action: "answer", key: key1, typed: right }, user, store: s, apiKey: () => ({ key: "sk-ant-test" }), ask: ask(null) });
  ck("an answer the key has is right, kept, and Claude isn't asked",
     status === 200 && json.answer.verdict === "right" && json.answer.markedBy === "key" && json.saved === true &&
     asked.length === 0 && s.rows.length === 1 && s.rows[0].user_id === "u-1" && s.rows[0].item_key === key1 && s.rows[0].prompt === first.item.prompt);
}
{
  const s = store();
  asked.length = 0;
  const { status, json } = await handleExerciseRequest({
    body: { action: "answer", key: key1, typed: first.item.gaps.map(() => "zzz") }, user, store: s,
    apiKey: () => ({ key: "sk-ant-test" }),
    ask: ask({ verdict: "wrong", note: "  Use the yo form.  ", correct: "soy" }),
  });
  ck("an answer the key doesn't have is Claude's to mark, with the sheet's instruction and the typed line",
     status === 200 && asked.length === 1 && asked[0].apiKey === "sk-ant-test" &&
     typeof first.exercise.instruction === "string" && asked[0].prompt.includes(`Instruction: ${first.exercise.instruction}`) &&
     asked[0].prompt.includes(`Lesson: ${first.lesson.title}`) && asked[0].prompt.includes("[zzz]") &&
     json.answer.verdict === "wrong" && json.answer.note === "Use the yo form." && json.answer.correct === "soy" && json.answer.markedBy === "claude");
  ck("Claude's verdict is kept with its lesson, model and version", s.rows.length === 1 && s.rows[0].marked_by === "claude" && s.rows[0].lesson === "leccion1" && !!s.rows[0].model && !!s.rows[0].prompt_version);
}
{
  const s = store();
  asked.length = 0;
  const { status, json } = await handleExerciseRequest({ body: { action: "answer", key: key1, typed: ["zzz"] }, user, store: s, apiKey: () => ({ error: "Connect", code: "byok_required", status: 402 }), ask: ask({ verdict: "right", note: "", correct: "" }) });
  ck("no key: nothing asked, nothing kept, and the page is told to connect one", status === 402 && json.code === "byok_required" && asked.length === 0 && s.rows.length === 0);
}
{
  const s = store();
  const { status } = await handleExerciseRequest({ body: { action: "answer", key: key1, typed: ["zzz"] }, user, store: s, apiKey: () => ({ key: "k" }), ask: ask({ verdict: "maybe" }) });
  ck("a reply with no verdict keeps nothing", status === 502 && s.rows.length === 0);
}
{
  const s = store({ missing: true });
  const { status, json } = await handleExerciseRequest({ body: { action: "answer", key: key1, typed: right }, user, store: s, apiKey: null });
  ck("before migration_022 the answer is still marked, and the page is told it wasn't kept", status === 200 && json.answer.verdict === "right" && json.saved === false && json.missing === true);
}
{
  const bad = await handleExerciseRequest({ body: { action: "answer", key: "leccion99/1/1", typed: "x" }, user, store: store(), apiKey: null });
  const empty = await handleExerciseRequest({ body: { action: "answer", key: key1, typed: [""] }, user, store: store(), apiKey: null });
  ck("an item that doesn't exist, or an empty answer, is refused", bad.status === 400 && empty.status === 400);
}
ck("a right verdict carries no correction", readMark({ verdict: "right", note: "", correct: "something" })?.correct === "");
{
  const truthKey = (() => {
    for (const l of EXERCISE_LESSONS) for (const ex of l.exercises) for (let i = 0; i < ex.items.length; i++) if (kindOf(ex.items[i]) === "truth") return itemKey(l.id, ex.n, i);
    return null;
  })();
  const f = truthKey && findItem(EXERCISES_BY_ID, truthKey);
  const prompt = f ? markPrompt({ lesson: f.lesson, exercise: f.exercise, item: f.item, typed: "Verdadero. x" }) : "";
  ck("a question about the lesson's text gives Claude the text", !!f && prompt.includes("The lesson's text:"));
}

const n = ck.fails();
console.log(n ? `\n  FAILED: ${n}` : "\n  all checks passed");
process.exit(n ? 1 : 0);
