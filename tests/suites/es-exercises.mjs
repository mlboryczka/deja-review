// The Spanish Exercises (2026-10-24): every written exercise of every lesson
// sheet, answered one item at a time, marked by the answer key or by Claude,
// and kept.
//
// What must hold, in plain words:
//   - every lesson's exercise file is complete and answerable: each item has
//     a prompt, a gap item has one list of answers per blank, the others an
//     answer, and the key marks its own answers right;
//   - the key ignores capitals, punctuation, ¿ and ¡, and every accent but
//     one that changes a verb's tense (owner, 2026-10-26): "esta de mal
//     humor" for "está de mal humor" is right, "hablo" for "habló" is
//     "Almost", as on the cards, and "sólo" for "solo" is right; an answer
//     the key marked Almost before, for an accent that no longer counts,
//     shows as Right;
//   - Almost is the key's words with only small slips, however many (owner,
//     2026-11-07): a word off by one letter, a wrong gender or number on an
//     article or demonstrative, one word written as two; a different word, a
//     word left out or added, or a form further off is Claude's to judge, and
//     so is anything that might be just as right, "cansada" for "cansado".
//     Almost counts as right in the figures and stays "almost" in what is
//     kept; a Wrong kept from before shows as Almost when the key says so;
//   - Claude's marking instructions never show a double quotation mark, which
//     cut its replies short, and a whole reply that ran out of room is used;
//   - "My answer should be accepted" (owner, 2026-11-07, as on the cards):
//     Claude looks again and accepts, rejects with a reason, or isn't sure;
//     Accept anyway asks nobody; every press is kept; an accepted answer shows
//     as Right and the key takes it from then on, before Claude is asked;
//   - a true-or-false pressed the wrong way is wrong without asking Claude;
//     free writing always goes to Claude;
//   - the server marks with the sheet's own item, not what the page sends,
//     asks Claude only when the key doesn't settle it, keeps every answer
//     for the student who gave it, and says so when the table isn't there
//     yet; with no key, nothing is asked and nothing kept;
//   - a reply from Claude that can't be read keeps nothing;
//   - a hint (owner, 2026-10-26: "exercises should have a hint option")
//     shows the first letter of each word of the key's first answer, the
//     rest as _, then one more letter a press, until the whole answer shows;
//     how far it went is kept with the answer (owner, 2026-11-07: "Yes,
//     record hints"), and before migration_026 the answer is kept without it;
//   - "Why?" under a miss (owner, 2026-10-26: "there should also be a "why
//     was my answer wrong" option") has a reason for every miss the key
//     marks: the accents that change the tense, as the key writes them, or
//     a true-or-false pressed the wrong way;
//   - the exercises the owner had taken out (2026-10-25) stay out: no
//     sentence of your own, nothing about yourself, no question to write, no
//     answer about the text and no yes or no in a full sentence, and every
//     other item is still there, numbered 1, 2, 3 on the page;
//   - Lessons 9, 10, 11 and 13 open with the present as gaps, an exercise the
//     sheets don't have (owner, 2026-11-02, asking why Lessons 9 and 10 never
//     asked the present of verbs like ver and venir; 2026-11-07, yes to the
//     same in Lessons 11 and 13): every form of hacer, with salgo, pongo and
//     traigo; of ver and venir; of decir, deber and dar; and of poner.
//
// No browser and no network: Claude and the database are stand-ins.

import { checker } from "../check.mjs";
import { EXERCISE_LESSONS, EXERCISES_BY_ID, LEFT_OUT, numbered } from "../../src/data/exercises/es/index.js";
import { LESSON_TEXTS } from "../../src/data/exercises/es/texts.js";
import { EXERCISE_GROUPS, EXERCISE_TITLES, exerciseGroupOf } from "../../src/data/exercises/es/titles.js";
import { plain, bare, kindOf, markByKey, typedText, keyAnswer, itemKey, findItem, isAnswered, hintText, hintLevels, keyReason, markedNow, countsAsRight, acceptedNow, isAccepted } from "../../src/lib/exerciseMarking.js";
import { accentCounts } from "../../src/lib/spanishAccents.js";
import { handleExerciseRequest, markPrompt, readMark, markFromReply, MARK_SYSTEM, REVIEW_SYSTEM, supabaseExerciseStore } from "../../api/_lib/exercises.js";
import { markAnswer, disputeAnswer } from "../../src/lib/exerciseApi.js";
import { UnreadableReply } from "../../api/_lib/podcastQuestions.js";

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
// lessons", and of answering yes in a full sentence, "remove this type of
// lesson". Free writing is left only in Lesson 16's translation of its text.
const leftIn = [];
for (const lesson of EXERCISE_LESSONS) {
  for (const ex of lesson.exercises) {
    const asks = `${ex.instruction} ${ex.english}`;
    const own = ex.items.some((it) => kindOf(it) === "open") && !(lesson.id === "leccion16" && ex.n === 3);
    if (own || /corresponden a las respuestas|sobre el (diálogo|texto)|diciendo la verdad|según tu opinión|of your own|your own way|responder a las preguntas[^.]*de forma (afirmativa|negativa)|^poner las preguntas y las respuestas/i.test(asks)) leftIn.push(`${lesson.id} ej ${ex.n}`);
  }
}
ck("no exercise taken out on 2026-10-25 is left: no sentence of your own, nothing about yourself, no question to write, no answer about the text, no yes or no in a full sentence",
   leftIn.length === 0, leftIn.join("; "));
ck("91 exercises are out, 149 are in (the present in Lessons 9, 10, 11 and 13 included), every lesson keeps some, and every other item is still there",
   Object.values(LEFT_OUT).flat().length === 91 && EXERCISE_LESSONS.reduce((n, l) => n + l.exercises.length, 0) === 149 &&
   EXERCISE_LESSONS.every((l) => l.exercises.length > 0) && items === 2481);
// The owner, 2026-11-02: "why are the lessons 9 and 10 exercises not asking
// me about the present tense for verbs like venir and ver", then yes to a
// fill-in exercise on the present in each, and on 2026-11-07 yes to the same
// in Lessons 11 and 13.
const PRESENT = {
  leccion9: { hacer: ["hago", "haces", "hace", "hacemos", "hacen"], salir: ["salgo"], poner: ["pongo"], traer: ["traigo"] },
  leccion10: { ver: ["veo", "ves", "ve", "vemos", "ven"], venir: ["vengo", "vienes", "viene", "venimos", "vienen"] },
  leccion11: { decir: ["digo", "dices", "dice", "decimos", "dicen"], deber: ["debo", "debes", "debe", "debemos", "deben"], dar: ["doy", "das", "da", "damos", "dan"] },
  leccion13: { poner: ["pongo", "pones", "pone", "ponemos", "ponen"] },
};
const presentMissing = [];
for (const [id, verbs] of Object.entries(PRESENT)) {
  const first = EXERCISES_BY_ID[id].exercises[0];
  if (!/en presente/.test(first.instruction) || !first.items.every((it) => kindOf(it) === "gaps" && it.gaps.length === 1)) presentMissing.push(`${id}: doesn't open with the present as gaps`);
  for (const [verb, forms] of Object.entries(verbs)) {
    const asked = new Set(first.items.filter((it) => it.prompt.endsWith(`(${verb})`)).map((it) => it.gaps[0][0]));
    for (const form of forms) if (!asked.has(form)) presentMissing.push(`${id}: no ${form}`);
  }
}
ck("Lessons 9, 10, 11 and 13 open with the present as gaps: every form of hacer, with salgo, pongo and traigo; of ver and venir; of decir, deber and dar; and of poner",
   presentMissing.length === 0, presentMissing.join("; "));
// "renumber the exercises properly" (owner, 2026-10-25).
ck("each lesson's exercises are numbered 1, 2, 3… on the page, in order",
   EXERCISE_LESSONS.every((l) => l.exercises.every((ex, i) => ex.number === i + 1)));
const shifted = numbered([
  { n: 2, instruction: "Completar.", english: "Fill the gaps." },
  { n: 3, instruction: "Poner las frases del ejercicio 2 en plural.", english: "Put exercise 2's sentences in the plural." },
]);
ck("an instruction pointing at another exercise gives its number on the page",
   shifted[1].number === 2 && /del ejercicio 1 en/.test(shifted[1].instruction) && /exercise 1's/.test(shifted[1].english) &&
   /del ejercicio 1 en/.test(EXERCISES_BY_ID.leccion18.exercises.find((ex) => ex.n === 2).instruction));

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
ck("right but for accents that change no tense is right, with no call: donde estas", markByKey(acc, "donde estas")?.verdict === "right");
const spoke = { prompt: "She spoke with Ana.", answer: "Habló con Ana." };
ck("right but for an accent that changes the tense is Almost, with no call: hablo for habló",
   markByKey(spoke, "hablo con ana")?.verdict === "almost" && markByKey(spoke, "hablo con ana")?.accents === true);
const rafael = { prompt: "Today Don Rafael is in a bad mood.", answer: "Hoy don Rafael está de mal humor." };
ck("esta for the verb está is right, and estan for están",
   markByKey(rafael, "Hoy don Rafael esta de mal humor")?.verdict === "right" && markByKey({ prompt: "x", answer: "Están en casa." }, "estan en casa")?.verdict === "right");
ck("a missing ñ is forgiven like an accent", markByKey({ prompt: "x", answer: "Tengo diez años." }, "tengo diez anos")?.verdict === "right");
ck("the accents that count are those that change a verb's tense",
   ["habló", "hablo", "hablé", "hable", "llegó", "llego", "llegué", "llegue", "trabajó", "trabajo"].every(accentCounts) &&
   !["está", "esta", "están", "estás", "tú", "él", "sé", "dé", "cómo", "qué", "días", "año", "frío"].some(accentCounts));
ck("an accent that Real Academia still allows is right", markByKey({ prompt: "only", answer: "solo" }, "sólo")?.verdict === "right");
{
  const almost = (answer, typed, also) => markByKey({ prompt: "x", answer, also }, typed)?.verdict === "almost";
  const toClaude = (answer, typed, also) => markByKey({ prompt: "x", answer, also }, typed) === null;
  ck("Almost: a wrong article, as the owner said of la despertador", almost("Lo que pasa es que el despertador no sonó.", "lo que pasa es que la despertador no sonó"));
  ck("Almost: a word off by one letter, even another form of the verb", almost("Ellas se maquillan y se visten.", "ellas se maquillan y se vistan") && almost("Cuando te despiertas, ¿qué haces?", "cuando te despiertes, que haces"));
  ck("Almost: however many slips", almost("Ella debe estar agotada.", "elle dabe estar agotada"));
  ck("Almost: a missing, an extra and a swapped letter", almost("Tengo problemas.", "tengo problmas") && almost("Tengo problemas.", "tengo probblemas") && almost("Tengo problemas.", "tengo porblemas"));
  ck("Almost: one word written as two, or two as one", almost("Me levanto porque me aburro.", "me levanto por que me aburro") && almost("A veces duermo.", "aveces duermo"));
  ck("Almost: a demonstrative of the wrong gender or number", almost("Me aburro estos días.", "me aburro este dias"));
  ck("Almost: the closest of the key's answers is the correction",
     markByKey({ prompt: "x", answer: "A veces me levanto porque me aburro.", also: ["A veces me levanto porque estoy aburrido."] }, "a veces me levanto por que estoy aburrido")?.correct === "A veces me levanto porque estoy aburrido.");
  ck("Claude's: a short word off by a letter is another word", toClaude("Se levanta.", "te levanta") && toClaude("Soy Ana.", "son ana"));
  ck("Claude's: a word left out or added", toClaude("Voy a estar agotado.", "voy estar agotado") && toClaude("Se duerme sin problema.", "a se duerme sin problema"));
  ck("Claude's: a form further off", toClaude("Mi despertador sonó.", "mi despertador suena") && toClaude("¿Te despiertas?", "te despertes"));
  ck("Claude's: an ending that may be just as right", toClaude("Estoy cansado.", "estoy cansada") && toClaude("El doctor llegó.", "el doctora llegó"));
  ck("Claude's: an article on a noun either gender can be", toClaude("un turista", "una turista") && toClaude("el paciente", "la paciente"));
  ck("free writing isn't compared for slips", markByKey({ prompt: "x", open: true, answer: "Tengo problemas." }, "tengo problmas") === null);
  const blank = { prompt: "Ellos ___ tarde.", gaps: [["llegan"]] };
  ck("a blank can be Almost too", markByKey(blank, ["llagan"])?.verdict === "almost" && markByKey(blank, ["llagan"])?.slips === true);
  ck("only accents off still says so", markByKey({ prompt: "x", answer: "Habló con Ana." }, "hablo con ana")?.accents === true);
  ck("Why? names the words, as they are written",
     keyReason({ prompt: "x", answer: "Lo que pasa es que el despertador no sonó." }, "lo que pasa es que la despertador no sonó") === 'Right but for one word: "el", not "la".' &&
     keyReason({ prompt: "x", answer: "Ella debe estar agotada." }, "Elle dabe estar agotada") === 'Right but for 2 words: "Ella", not "Elle"; "debe", not "dabe".' &&
     keyReason({ prompt: "x", answer: "Me levanto porque me aburro." }, "me levanto por que me aburro") === 'Right but for one word: "porque", not "por que".');
  const clock = { prompt: "x", answer: "Lo que pasa es que el despertador no sonó." };
  ck("a Wrong kept from before shows as Almost when the key says so, and nothing else is changed",
     markedNow(clock, { markedBy: "claude", verdict: "wrong", typed: "lo que pasa es que la despertador no sonó", note: "n" }).verdict === "almost" &&
     markedNow(clock, { markedBy: "claude", verdict: "wrong", typed: "lo que pasa", note: "n" }).verdict === "wrong");
  ck("a Wrong the key now takes shows as Right", markedNow({ prompt: "I see.", answer: "Ya veo.", also: ["Veo."] }, { markedBy: "claude", verdict: "wrong", typed: "veo" }).verdict === "right");
  const tfWrong = { prompt: "x", truth: false, answer: "Falso. Ana habla con Luis." };
  ck("a true-or-false pressed the wrong way stays Wrong", markedNow(tfWrong, { markedBy: "key", verdict: "wrong", typed: "Verdadero. Ana habla con Luis." }).verdict === "wrong");
  ck("Almost counts as right, Wrong doesn't", countsAsRight("right") && countsAsRight("almost") && !countsAsRight("wrong") && !countsAsRight(undefined));
  ck("Claude's instructions never show a double quotation mark", !MARK_SYSTEM.includes('"'));
  ck("a whole reply that ran out of room is used", markFromReply({ stop_reason: "max_tokens", content: [{ type: "text", text: '{"verdict":"wrong","note":"","correct":""}' }] })?.verdict === "wrong");
  let cut = null, refused = null;
  try { markFromReply({ stop_reason: "max_tokens", content: [{ type: "text", text: '{"verdict":"wro' }] }); } catch (e) { cut = e; }
  try { markFromReply({ stop_reason: "refusal", content: [] }); } catch (e) { refused = e; }
  ck("a reply cut off in the middle, or refused, can't be used", cut instanceof UnreadableReply && refused instanceof UnreadableReply);
}
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

// ── Hints ────────────────────────────────────────────────────────────────
console.log("Hints");
const blank = { prompt: "Yo ___ caminar. (preferir)", gaps: [["prefiero"]] };
ck("a blank's hint is its first letter, then one more each press, until the word",
   hintText(blank, 1) === "p_______" && hintText(blank, 2) === "pr______" && hintLevels(blank) === 8 && hintText(blank, 8) === "prefiero");
const pair = { prompt: "Yo ___ despierto a las seis y después ___ despierto a mis hijos.", gaps: [["me"], ["nada", "—", "-"]] };
ck("two blanks are hinted one by one, numbered, \"nada\" included", hintText(pair, 1) === "1. m_   2. n___" && hintText(pair, 4) === "1. me   2. nada");
const sentence = { prompt: "I prefer to eat sweet things in the morning.", answer: "Prefiero comer cosas dulces en la mañana.", also: ["En la mañana prefiero comer cosas dulces."] };
ck("a sentence shows each word's first letter and length, its punctuation, and only the first answer",
   hintText(sentence, 1) === "P_______ c____ c____ d_____ e_ l_ m_____." && hintText(sentence, 3) === "Pre_____ com__ cos__ dul___ en la mañ___.");
ck("¿ ¡ and an apostrophe always show", hintText({ prompt: "x", answer: "¿Qué tomas? ¡Agua!" }, 1) === "¿Q__ t____? ¡A___!" && hintText({ prompt: "x", answer: "It's 2:39 p.m." }, 1) === "I_'_ 2:3_ p.m.");
ck("a true-or-false hint starts with Verdadero or Falso", hintText(tf, 1) === "F____. L____ v___ e_ E______ U_____.");
{
  const off = [];
  for (const lesson of EXERCISE_LESSONS) for (const ex of lesson.exercises) ex.items.forEach((item, i) => {
    const full = hintText(item, hintLevels(item));
    const want = kindOf(item) === "gaps" ? item.gaps.map((g, j) => (item.gaps.length > 1 ? `${j + 1}. ${g[0]}` : g[0])).join("   ") : item.answer;
    if (full !== want || hintText(item, 1) === "") off.push(itemKey(lesson.id, ex.n, i));
  });
  ck("on every item, pressed enough times, the hint is the key's whole first answer", off.length === 0, off.slice(0, 8).join("; "));
}

// ── Why a miss is a miss ─────────────────────────────────────────────────
console.log("Why?");
const past = { prompt: "Ayer ella ___ con Ana. (hablar)", gaps: [["habló"]] };
ck("a blank right but for an accent that changes the tense says which word",
   keyReason(past, typedText(past, ["hablo"])) === "Right but for the accent, which changes the tense: \"habló\", not \"hablo\".");
const estar = { prompt: "Ella ___ muy bien. (estar)", gaps: [["está"]] };
ck("a blank right but for an accent that changes no tense is right, with no reason",
   markByKey(estar, ["esta"])?.verdict === "right" && keyReason(estar, typedText(estar, ["esta"])) === "");
const tfPast = { prompt: "Ana habló con Lucía.", truth: true, answer: "Verdadero. Ana habló con Lucía." };
ck("a sentence names only the accents that change the tense, as the key writes them",
   keyReason({ prompt: "x", answer: "Después llegué y Ana habló." }, "Despues llegue y Ana hablo.") === "Right but for the accents, which change the tense: \"llegué\", not \"llegue\"; \"habló\", not \"hablo\"." &&
   keyReason(tfPast, typedText(tfPast, { truth: true, text: "Ana hablo con Lucia." })) === "Right but for the accent, which changes the tense: \"habló\", not \"hablo\".");
ck("an answer the key marked Almost before, for an accent that no longer counts, shows as Right; one that still counts stays Almost; Claude's stays as Claude marked it",
   markedNow(rafael, { markedBy: "key", verdict: "almost", typed: "Hoy don Rafael esta de mal humor" }).verdict === "right" &&
   markedNow(estar, { markedBy: "key", verdict: "almost", typed: typedText(estar, ["esta"]) }).verdict === "right" &&
   markedNow(past, { markedBy: "key", verdict: "almost", typed: typedText(past, ["hablo"]) }).verdict === "almost" &&
   markedNow(rafael, { markedBy: "claude", verdict: "almost", typed: "Hoy don Rafael esta de mal humor" }).verdict === "almost");
ck("a true-or-false pressed the wrong way says which it is", keyReason(tf, typedText(tf, { truth: true, text: "Sí." })) === "The statement is false, so the answer is Falso.");
ck("an answer the key doesn't have gets no reason from the key: Claude's note is the reason", keyReason(gap, typedText(gap, ["eres"])) === "" && keyReason(acc, "¿Dónde vives?") === "");
{
  const strip = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").normalize("NFC");
  const silent = [];
  for (const lesson of EXERCISE_LESSONS) for (const ex of lesson.exercises) ex.items.forEach((item, i) => {
    const kind = kindOf(item);
    if (kind === "open") return;
    const typed = kind === "gaps" ? item.gaps.map((g) => strip(g[0])) : kind === "truth" ? { truth: item.truth, text: strip(item.answer) } : strip(item.answer);
    if (markByKey(item, typed)?.verdict === "almost" && !keyReason(item, typedText(item, typed))) silent.push(itemKey(lesson.id, ex.n, i));
  });
  ck("every item's key answer typed without its accents gets a reason", silent.length === 0, silent.slice(0, 8).join("; "));
}

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
  const added = itemKey("leccion11", 17, 0);
  const { status, json } = await handleExerciseRequest({ body: { action: "answer", key: added, typed: ["digo"] }, user, store: s, apiKey: () => ({ key: "sk-ant-test" }), ask: ask(null) });
  ck("an answer to an exercise on no sheet is marked and kept like any other, under its own key",
     status === 200 && json.answer.verdict === "right" && json.saved === true && asked.length === 0 && s.rows.length === 1 && s.rows[0].item_key === "leccion11/17/1");
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
  const s = store();
  asked.length = 0;
  const lesson = EXERCISES_BY_ID["leccion12-1"];
  const ex = lesson.exercises.find((e) => e.items.some((it) => /alarm clock didn't go off/.test(it.prompt)));
  const index = ex.items.findIndex((it) => /alarm clock didn't go off/.test(it.prompt));
  const { status, json } = await handleExerciseRequest({ body: { action: "answer", key: itemKey("leccion12-1", ex.n, index), typed: "lo que pasa es que la despertador no sonó" }, user, store: s, apiKey: null, ask: ask(null) });
  ck("the key's Almost is kept as Almost, with the correction, and needs neither Claude nor a key",
     status === 200 && asked.length === 0 && json.answer.verdict === "almost" && json.answer.markedBy === "key" && json.answer.correct === ex.items[index].answer &&
     json.saved === true && s.rows.length === 1 && s.rows[0].verdict === "almost" && s.rows[0].marked_by === "key" && s.rows[0].correct === ex.items[index].answer && s.rows[0].typed === "lo que pasa es que la despertador no sonó");
}
{
  const kept = async (hints) => {
    const s = store();
    await handleExerciseRequest({ body: { action: "answer", key: key1, typed: right, ...(hints === undefined ? null : { hints }) }, user, store: s, apiKey: null });
    return s.rows[0];
  };
  const most = hintLevels(first.item);
  const [none, two, past, odd, unsaid] = [await kept(0), await kept(2), await kept(most + 5), await kept("x"), await kept(undefined)];
  ck("how much of the hint showed is kept with the answer, from none to the whole answer",
     none.hints === 0 && two.hints === Math.min(2, most) && past.hints === most && odd.hints === 0, JSON.stringify([none.hints, two.hints, past.hints, odd.hints]));
  ck("a page that doesn't say keeps no hints at all, so it isn't counted as none", !("hints" in unsaid));
}
{
  // The database before migration_026: an insert naming hints is refused.
  const inserted = [];
  const db = { from: () => ({ insert: (row) => ({ select: () => ({ single: async () => {
    if ("hints" in row) return { data: null, error: { code: "PGRST204", message: "Could not find the 'hints' column of 'es_exercise_answers' in the schema cache" } };
    inserted.push(row);
    return { data: { answered_at: "2026-11-07T20:00:00Z" }, error: null };
  } }) }) }) };
  const warn = console.warn; console.warn = () => {};
  const res = await supabaseExerciseStore(db).save({ item_key: "k", verdict: "right", hints: 2 });
  console.warn = warn;
  ck("before migration_026 the answer is still kept, without its hints", !res.error && inserted.length === 1 && !("hints" in inserted[0]) && inserted[0].item_key === "k");
  const other = { from: () => ({ insert: () => ({ select: () => ({ single: async () => ({ data: null, error: { code: "23514", message: "violates check constraint" } }) }) }) }) };
  ck("any other refusal is still a failure", !!(await supabaseExerciseStore(other).save({ item_key: "k", hints: 1 })).error);
}
{
  let body = null;
  const fetchImpl = async (_url, init) => { body = JSON.parse(init.body); return { ok: true, status: 200, text: async () => JSON.stringify({ answer: { verdict: "right" }, saved: true }) }; };
  const supabase = { auth: { getSession: async () => ({ data: { session: { access_token: "t" } } }) } };
  await markAnswer({ key: key1, typed: right, hints: 3 }, { supabase, user: { id: "u-1" }, fetchImpl });
  const sent3 = body?.exercise?.hints;
  await markAnswer({ key: key1, typed: right }, { supabase, user: { id: "u-1" }, fetchImpl });
  ck("the page sends how much of the hint showed, none when it wasn't pressed", sent3 === 3 && body?.exercise?.hints === 0);
}
{
  // "My answer should be accepted"
  const disputes = [];
  const dstore = (missing = false) => ({
    ...store(),
    async saveDispute(row) {
      if (missing) return { error: { code: "PGRST205", message: "Could not find the table" } };
      disputes.push(row);
      return { error: null };
    },
    async accepted(userId, key) {
      return { lines: disputes.filter((d) => d.user_id === userId && d.item_key === key && d.accepted).map((d) => d.typed), error: null };
    },
  });
  // The owner's own case: a sentence of Lesson 12's dialogue.
  const { DIALOGUES_BY_ID } = await import("../../src/data/exercises/es/dialogues.js");
  const text = DIALOGUES_BY_ID["dialogo-leccion12-1"];
  const k = itemKey(text.id, 1, text.items.findIndex((it) => /take a shower, brush my teeth/.test(it.prompt)));
  const line = "despues me baño, lavo los dientes, me maquillo y me visto";
  const reviewed = [];
  const review = (reply) => async ({ apiKey, prompt }) => { reviewed.push({ apiKey, prompt }); return reply; };
  const st = dstore();
  const no = await handleExerciseRequest({ body: { action: "dispute", key: k, typed: line, verdict: "wrong" }, user, store: st, apiKey: () => ({ key: "sk-ant-test" }),
    review: review({ verdict: "reject", reasoning: "Brushing your own teeth needs 'me lavo'." }) });
  ck("Claude looks again, with the item, the answer and how it was marked, and its reason comes back",
     no.status === 200 && no.json.verdict === "reject" && no.json.reasoning === "Brushing your own teeth needs 'me lavo'." && no.json.saved === true &&
     reviewed.length === 1 && reviewed[0].prompt.includes(line) && reviewed[0].prompt.includes("How the app marked it: Wrong"));
  ck("a rejected press is kept, and accepts nothing", disputes.length === 1 && disputes[0].review === "reject" && disputes[0].accepted === false && disputes[0].marked === "wrong" && disputes[0].item_key === k && !!disputes[0].prompt_version);
  reviewed.length = 0;
  const anyway = await handleExerciseRequest({ body: { action: "dispute", key: k, typed: line, verdict: "wrong", force: true }, user, store: st, apiKey: null, review: review(null) });
  ck("Accept anyway asks nobody, needs no key, and is kept as forced",
     anyway.status === 200 && anyway.json.verdict === "accept" && anyway.json.forced === true && reviewed.length === 0 &&
     disputes.length === 2 && disputes[1].accepted === true && disputes[1].forced === true && disputes[1].review === null && disputes[1].model === null);
  asked.length = 0;
  const again = await handleExerciseRequest({ body: { action: "answer", key: k, typed: "Después me baño, lavo los dientes, me maquillo y me visto." }, user, store: st, apiKey: null, ask: ask(null) });
  ck("an accepted answer is right from then on, by the key, with no call and no key", again.status === 200 && again.json.answer.verdict === "right" && again.json.answer.markedBy === "key" && asked.length === 0);
  const other = await handleExerciseRequest({ body: { action: "answer", key: k, typed: "despues me baño" }, user: { id: "u-2" }, store: st, apiKey: null, ask: ask(null) });
  ck("only for the student who had it accepted", other.status === 402);
  const yes = await handleExerciseRequest({ body: { action: "dispute", key: k, typed: "otra cosa", verdict: "almost" }, user, store: st, apiKey: () => ({ key: "k" }), review: review({ verdict: "accept", reasoning: "That is fine too." }) });
  ck("Claude can accept it itself", yes.json.verdict === "accept" && disputes.at(-1).accepted === true && disputes.at(-1).review === "accept" && !disputes.at(-1).forced);
  const odd = await handleExerciseRequest({ body: { action: "dispute", key: k, typed: line }, user, store: st, apiKey: () => ({ key: "k" }), review: review({ verdict: "maybe" }) });
  ck("a reply that can't be read is 'not sure', with Accept anyway to fall back on", odd.json.verdict === "uncertain" && /Accept anyway/.test(odd.json.reasoning));
  const nokey = await handleExerciseRequest({ body: { action: "dispute", key: k, typed: line }, user, store: st, apiKey: () => ({ error: "Connect", code: "byok_required", status: 402 }), review: review(null) });
  ck("with no key to pay for Claude, the page is told to connect one", nokey.status === 402 && nokey.json.code === "byok_required");
  const before = await handleExerciseRequest({ body: { action: "dispute", key: k, typed: line, force: true }, user, store: dstore(true), apiKey: null });
  ck("before migration_027 Accept anyway still accepts, and says it wasn't kept", before.json.verdict === "accept" && before.json.saved === false && before.json.missing === true);
  const empty = await handleExerciseRequest({ body: { action: "dispute", key: k, typed: "  " }, user, store: st, apiKey: null });
  ck("an empty answer or an item that isn't there is refused", empty.status === 400 && (await handleExerciseRequest({ body: { action: "dispute", key: "leccion99/1/1", typed: "x" }, user, store: st, apiKey: null })).status === 400);
  ck("Claude's second look never shows a double quotation mark", !REVIEW_SYSTEM.includes('"'));
  const acc = { [k]: new Set(["despues me baño lavo los dientes me maquillo y me visto"]) };
  ck("on the page, an accepted answer shows as Right; others, and one being marked, don't change",
     acceptedNow({ key: k, typed: line, verdict: "wrong" }, acc).verdict === "right" && acceptedNow({ key: k, typed: line, verdict: "wrong" }, acc).accepted === true &&
     acceptedNow({ key: k, typed: "otra", verdict: "wrong" }, acc).verdict === "wrong" && acceptedNow({ key: k, typed: line, pending: true }, acc).pending === true &&
     isAccepted(acc, k, "Después me baño, lavo los dientes, me maquillo y me visto.") && !isAccepted(acc, k, "otra") && !isAccepted(null, k, line));
  let body = null;
  const fetchImpl = async (_url, init) => { body = JSON.parse(init.body); return { ok: true, status: 200, text: async () => JSON.stringify({ verdict: "accept", forced: true, saved: true }) }; };
  const supabase = { auth: { getSession: async () => ({ data: { session: { access_token: "t" } } }) } };
  const r = await disputeAnswer({ key: k, typed: line, verdict: "wrong", force: true }, { supabase, user: { id: "u-1" }, fetchImpl });
  ck("the page sends the item, the answer as kept, how it was marked, and Accept anyway",
     r.verdict === "accept" && JSON.stringify(body) === JSON.stringify({ exercise: { action: "dispute", key: k, typed: line, verdict: "wrong", force: true } }));
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

// The sidebar's four stages (owner, 2026-11-01): every sheet in one place,
// in course order, and a lesson in parts found from any of its parts.
{
  const order = EXERCISE_GROUPS.flatMap((g) => g.rows.flatMap((r) => (r.parts ? r.parts.map((p) => p.id) : [r.id])));
  ck(
    "the sidebar's groups hold every lesson's exercises once, in course order",
    JSON.stringify(order) === JSON.stringify(EXERCISE_TITLES.map((l) => l.id)),
    order.join(" ")
  );
  ck("and every group, lesson and part has a name", EXERCISE_GROUPS.every((g) => g.title && g.rows.every((r) => r.title && (!r.parts || r.parts.every((p) => p.title)))));
  ck(
    "a sheet's group is found from any of its parts",
    exerciseGroupOf("leccion1") === 0 && exerciseGroupOf("leccion8-anexo") === 1 && exerciseGroupOf("leccion12-2") === 2 && exerciseGroupOf("leccion23") === 3 && exerciseGroupOf(null) === -1
  );
  ck(
    "a lesson in parts is one row, named for the lesson, with its parts named",
    JSON.stringify(EXERCISE_GROUPS[1].rows[0]) === JSON.stringify({
      key: "leccion7", title: "Lesson 7 · Describing people",
      parts: [{ id: "leccion7-1", title: "Part 1" }, { id: "leccion7-2", title: "Part 2" }, { id: "leccion7-3", title: "Part 3" }],
    }) && JSON.stringify(EXERCISE_GROUPS[1].rows[1]) === JSON.stringify({
      key: "leccion8", title: "Lesson 8 · The preterite",
      parts: [{ id: "leccion8", title: "The preterite" }, { id: "leccion8-anexo", title: "The time and the date" }],
    }),
    JSON.stringify(EXERCISE_GROUPS[1].rows.slice(0, 2))
  );
}

// Flashcards groups the lessons the same way as Exercises (owner, 2026-11-07:
// "make sure lessons are grouped the same way"), and the grouping leaves the
// order cards come in alone.
{
  const { SPANISH } = await import("../../src/data/lessons/es/index.js");
  const stages = SPANISH.LESSON_STAGES;
  // Each stage as the lessons it holds, whatever parts they have.
  const shape = (groups) => JSON.stringify(groups.map((g) => [g.title, g.rows.map((r) => (r.key || r.id).match(/^leccion\d+/)[0])]));
  ck("Flashcards has the same stages as Exercises, with the same lessons in each", shape(stages) === shape(EXERCISE_GROUPS), shape(stages));
  const order = stages.flatMap((g) => g.rows.flatMap((r) => (r.parts ? r.parts.map((p) => p.id) : [r.id])));
  ck(
    "the stages hold every Flashcards lesson once, in course order",
    JSON.stringify(order) === JSON.stringify(SPANISH.LESSONS.map((l) => l.id)),
    order.join(" ")
  );
  ck(
    "Lessons and Progress list them under the same headings",
    JSON.stringify(SPANISH.LESSON_GROUPS.map((g) => g.title)) === JSON.stringify(stages.map((g) => g.title)) &&
      SPANISH.LESSON_GROUPS.every((g) => g.folds)
  );
  ck(
    "and in the same order as ever, the order cards come in",
    JSON.stringify(SPANISH.LESSONS_SHOWN.map((l) => l.id)) === JSON.stringify(SPANISH.LESSONS.map((l) => l.id))
  );
  const lesson7 = stages[1].rows[0];
  ck(
    "Lesson 7 is one row on Flashcards too, Lesson 8 one lesson there",
    lesson7.title === "Lesson 7 · Describing people" && lesson7.parts.map((p) => p.title).join() === "Part 1,Part 2,Part 3" &&
      stages[1].rows[1].id === "leccion8" && stages[1].rows[1].title === "Lesson 8 · The preterite"
  );
}

const n = ck.fails();
console.log(n ? `\n  FAILED: ${n}` : "\n  all checks passed");
process.exit(n ? 1 : 0);
