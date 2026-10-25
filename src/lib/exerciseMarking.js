// The Exercises module's marking against the answer key (Spanish, test app,
// owner 2026-10-24: "create a new module only in the spanish module for
// quizzing me on the exercises you put together for each lesson").
//
// Every item of a lesson's exercise sheet is in src/data/exercises/es/, with
// the answers a Mexican Spanish teacher would accept (the sheets have no key
// of their own). An answer is marked here first, the same way on the page
// and on the server:
//
//   right    it is one of the key's answers, capitals, punctuation, ¿ ¡ and
//            spaces aside
//   almost   it is one of them but for its accents ("Check the accents"):
//            accents are checked in Spanish (owner, 2026-10-22), "esta" is
//            not "está", "ano" not "año"
//   null     the key doesn't have it: Claude decides (api/_lib/exercises.js),
//            so a right answer the key doesn't list is still right
//
// A true-or-false item pressed the wrong way is wrong without asking anyone.
// A free-writing item ("Escribir una frase con…") has no key to match: it
// always goes to Claude.
//
// Pure, plain JS: the page imports it, and so do the server and the tests.

// Accents the Real Academia no longer asks for but still allows, on solo and
// the demonstratives: "sólo" and "éste" are right where the key has "solo"
// and "este" (the same list as the cards' marking, FlashcardApp.jsx).
const OLD_ACCENTS = new Map([
  ["sólo", "solo"], ["éste", "este"], ["ésta", "esta"], ["éstos", "estos"], ["éstas", "estas"],
  ["ése", "ese"], ["ésa", "esa"], ["ésos", "esos"], ["ésas", "esas"],
  ["aquél", "aquel"], ["aquélla", "aquella"], ["aquéllos", "aquellos"], ["aquéllas", "aquellas"],
]);

// What a key comparison ignores: capitals, punctuation (¿ and ¡ included),
// quotation marks and extra spaces. Apostrophes are made one kind.
//
// But for one comma: the one after a "No" that starts a sentence. "No,
// tengo tiempo" ("No, I have time") is not "No tengo tiempo", and "No, no
// tengo tiempo" is the answer to "¿Tienes tiempo? No, …" (found by the
// check of Lesson 7's key, 2026-10-24).
export function plain(s) {
  return String(s ?? "")
    .normalize("NFC")
    .toLowerCase()
    .replace(/(^|[.!?¿¡]\s*)no\s*,/g, "$1no§ ")
    .replace(/[’‘ʼ`]/g, "'")
    .replace(/[¿¡?!.,;:"“”«»()\[\]…–—\-/]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .map((w) => OLD_ACCENTS.get(w) || w)
    .join(" ");
}

// The same, accents and the tilde of ñ set aside too.
export function bare(s) {
  return plain(s).normalize("NFD").replace(/[̀-ͯ]/g, "").normalize("NFC");
}

// The kind of an item: "gaps" (typed into the sentence's blanks), "truth"
// (Verdadero or Falso, then a sentence), "open" (free writing) or "answer"
// (one box).
export function kindOf(item) {
  if (Array.isArray(item?.gaps)) return "gaps";
  if (typeof item?.truth === "boolean") return "truth";
  if (item?.open === true) return "open";
  return "answer";
}

// The key's right answers for one box.
const answersOf = (item) => [item?.answer, ...(Array.isArray(item?.also) ? item.also : [])].filter((a) => typeof a === "string" && a.trim());

// One typed text against a list of right answers: "right", "accents" or null.
function against(typed, answers) {
  const t = plain(typed);
  if (!t) return null;
  if (answers.some((a) => plain(a) === t)) return "right";
  const b = bare(typed);
  if (answers.some((a) => bare(a) === b)) return "accents";
  return null;
}

// A true-or-false answer's sentence, with or without the "Verdadero." or
// "Falso." the key's answers start with.
const truthSentence = (s) => String(s ?? "").replace(/^\s*(verdadero|falso)\s*[.,:;!]?\s*/i, "");

// What the student typed for an item, in the shape its kind takes:
//   gaps    ["soy", "…"]  one per blank
//   truth   { truth: true|false, text: "…" }
//   other   "…"
// Whether it is complete enough to mark.
export function isAnswered(item, typed) {
  const kind = kindOf(item);
  if (kind === "gaps") return Array.isArray(typed) && typed.length === item.gaps.length && typed.every((t) => plain(t));
  if (kind === "truth") return typeof typed?.truth === "boolean" && !!plain(typed?.text);
  return !!plain(typed);
}

// The key's verdict: { verdict: "right" } or { verdict: "almost", accents:
// true } or { verdict: "wrong", truth: true } (pressed the wrong way), or
// null when Claude has to decide.
export function markByKey(item, typed) {
  if (!isAnswered(item, typed)) return null;
  const kind = kindOf(item);
  if (kind === "gaps") {
    const each = item.gaps.map((list, i) => against(typed[i], list));
    if (each.some((v) => v === null)) return null;
    return each.every((v) => v === "right") ? { verdict: "right" } : { verdict: "almost", accents: true };
  }
  if (kind === "truth") {
    if (typed.truth !== item.truth) return { verdict: "wrong", truth: true };
    const v = against(truthSentence(typed.text), answersOf(item).map(truthSentence));
    return v === "right" ? { verdict: "right" } : v === "accents" ? { verdict: "almost", accents: true } : null;
  }
  // Free writing matches only its own example word for word: anything else
  // is Claude's to judge.
  const v = against(typed, answersOf(item));
  return v === "right" ? { verdict: "right" } : v === "accents" ? { verdict: "almost", accents: true } : null;
}

// The typed answer as one line, for the log and for Claude: the blanks filled
// into the sentence, or "Verdadero. …".
export function typedText(item, typed) {
  const kind = kindOf(item);
  if (kind === "gaps") {
    let i = 0;
    return String(item.prompt || "").replace(/___/g, () => `[${String(typed?.[i++] ?? "").trim()}]`);
  }
  if (kind === "truth") return `${typed?.truth ? "Verdadero" : "Falso"}. ${truthSentence(typed?.text).trim()}`;
  return String(typed ?? "").trim();
}

// The key's answer to show after marking: the sentence with its blanks
// filled, or the model answer.
export function keyAnswer(item) {
  if (kindOf(item) === "gaps") {
    let i = 0;
    return String(item.prompt || "").replace(/___/g, () => item.gaps[i++]?.[0] ?? "___");
  }
  return String(item?.answer ?? "");
}

// Where an item's answers are kept: lesson, exercise number, item number.
export const itemKey = (lessonId, exerciseN, index) => `${lessonId}/${exerciseN}/${index + 1}`;

export function parseItemKey(key) {
  const m = /^([a-z0-9-]+)\/(\d+)\/(\d+)$/.exec(String(key || ""));
  return m ? { lesson: m[1], exercise: Number(m[2]), index: Number(m[3]) - 1 } : null;
}

// One item of the exercise data by its key, with its exercise, or null.
export function findItem(exercisesById, key) {
  const k = parseItemKey(key);
  const lesson = k && exercisesById?.[k.lesson];
  const exercise = lesson?.exercises?.find((e) => e.n === k.exercise);
  const item = exercise?.items?.[k.index];
  return item ? { lesson, exercise, item, index: k.index } : null;
}

// The verdicts the page and the log use, and what each counts as.
export const VERDICTS = ["right", "almost", "wrong"];
