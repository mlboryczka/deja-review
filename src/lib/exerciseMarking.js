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
//            spaces aside, and accents too but for those that count
//            (owner, 2026-10-26; src/lib/spanishAccents.js): "Hoy don Rafael
//            esta de mal humor", "estan", "manana" are right
//   almost   it is one of them but for an accent that changes a verb's tense
//            or person: "hablo" for "habló", "hable" for "hablé"
//   null     the key doesn't have it: Claude decides (api/_lib/exercises.js),
//            so a right answer the key doesn't list is still right
//
// A true-or-false item pressed the wrong way is wrong without asking anyone.
// A free-writing item ("Escribir una frase con…") has no key to match: it
// always goes to Claude.
//
// Pure, plain JS: the page imports it, and so do the server and the tests.

import { accentCounts } from "./spanishAccents.js";

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

// The words of a typed text off only in an accent that counts, as [typed,
// right] pairs, against a right answer it matches accents aside. Both are
// plain(), and accents don't move words, so they line up word for word.
function countingSlips(t, a) {
  const want = a.split(" ");
  return t.split(" ").map((w, i) => [w, want[i]]).filter(([w, r]) => w !== r && accentCounts(r));
}

// One typed text against a list of right answers: "right", "accents" (an
// accent that counts is off) or null.
function against(typed, answers) {
  const t = plain(typed);
  if (!t) return null;
  if (answers.some((a) => plain(a) === t)) return "right";
  const b = bare(typed);
  const near = answers.filter((a) => bare(a) === b);
  if (!near.length) return null;
  return near.some((a) => !countingSlips(t, plain(a)).length) ? "right" : "accents";
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

// Why the key marked an answer a miss, for "Why?" under it (owner,
// 2026-10-26: "there should also be a "why was my answer wrong" option").
// A miss Claude marked carries Claude's own sentence (its note); the key's
// misses are only two: an answer right but for an accent that changes a
// verb's tense, and a true-or-false pressed the wrong way. `line` is the
// answer as kept (typedText). "" when the key has nothing to say about it.
export function keyReason(item, line) {
  const kind = kindOf(item);
  const text = String(line ?? "");
  if (kind === "truth") {
    const chose = /^\s*verdadero\b/i.test(text) ? true : /^\s*falso\b/i.test(text) ? false : null;
    if (chose !== null && chose !== item.truth) {
      return item.truth ? "The statement is true, so the answer is Verdadero." : "The statement is false, so the answer is Falso.";
    }
  }
  // Word by word against the key's answer it matches but for accents: the
  // two have the same words, so the ones that differ are the accents, and
  // only those that count are named. They are quoted as written ("Habló",
  // not "habló").
  const pairs = [];
  const written = (s) => String(s ?? "").normalize("NFC").replace(/[¿¡?!.,;:"“”«»()\[\]…–—\-/]+/g, " ").trim().split(/\s+/);
  const accents = (typed, answers) => {
    const match = answers.find((a) => bare(a) === bare(typed) && plain(a) !== plain(typed));
    if (!match) return;
    const want = plain(match).split(" ");
    const [wantAs, typedAs] = [written(match), written(typed)];
    plain(typed).split(" ").forEach((w, i) => { if (w !== want[i] && accentCounts(want[i])) pairs.push(`"${wantAs[i] ?? want[i]}", not "${typedAs[i] ?? w}"`); });
  };
  if (kind === "gaps") {
    // The blanks as typed, out of "Yo [esta] aquí." ([[…]] is the sheet's
    // underlining).
    const typed = [...text.matchAll(/\[\[[^\]]*\]\]|\[([^\]]*)\]/g)].filter((m) => m[1] !== undefined).map((m) => m[1]);
    item.gaps.forEach((list, i) => accents(typed[i] ?? "", list));
  } else if (kind === "truth") {
    accents(truthSentence(text), answersOf(item).map(truthSentence));
  } else {
    accents(text, answersOf(item));
  }
  if (!pairs.length) return "";
  return `Right but for ${pairs.length > 1 ? "the accents, which change the tense" : "the accent, which changes the tense"}: ${pairs.join("; ")}.`;
}

// The typed answer back out of the line it was kept as (typedText's), or
// null when it can't be read back.
function typedFromLine(item, line) {
  const kind = kindOf(item);
  const text = String(line ?? "");
  if (kind === "gaps") {
    const typed = [...text.matchAll(/\[\[[^\]]*\]\]|\[([^\]]*)\]/g)].filter((m) => m[1] !== undefined).map((m) => m[1]);
    return typed.length === item.gaps.length ? typed : null;
  }
  if (kind === "truth") {
    const truth = /^\s*verdadero\b/i.test(text) ? true : /^\s*falso\b/i.test(text) ? false : null;
    return truth === null ? null : { truth, text: truthSentence(text) };
  }
  return text;
}

// An answer the key marked Almost while every accent still counted (before
// 2026-10-26), shown with the verdict the key gives it now: "Hoy don Rafael
// esta de mal humor" was Almost and is Right. The row kept stays as it was.
export function markedNow(item, answer) {
  if (!item || answer?.markedBy !== "key" || answer.verdict !== "almost") return answer;
  const typed = typedFromLine(item, answer.typed);
  return typed !== null && markByKey(item, typed)?.verdict === "right" ? { ...answer, verdict: "right" } : answer;
}

// A hint for an item still to answer (owner, 2026-10-26: "exercises should
// have a hint option"). It is the key's first answer with only the first
// `level` letters of each word showing and the rest as _, so the words and
// their lengths show; punctuation, ¿ and ¡ stay. Each level shows one more
// letter of every word, and at hintLevels(item) the whole answer shows:
//   level 1   "Prefiero comer cosas dulces." → "P_______ c____ c____ d_____."
// A gap item hints each blank, numbered when it has more than one ("1. m_
// 2. n___"); a true-or-false item hints the key's sentence, Verdadero or
// Falso included. Nothing about it is kept or changes the marking.
const hintSources = (item) =>
  (kindOf(item) === "gaps" ? item.gaps.map((list) => list?.[0]) : [item?.answer]).map((s) => String(s ?? "").normalize("NFC"));

// A word keeps its apostrophe, which always shows: "It's" is "I_'_".
const WORD = /[\p{L}\p{N}]+(?:['’][\p{L}\p{N}]+)*/gu;
const LETTER = /[\p{L}\p{N}]/u;
const lettersOf = (w) => [...w].filter((c) => LETTER.test(c)).length;

export function hintLevels(item) {
  return Math.max(1, ...hintSources(item).flatMap((s) => s.match(WORD) || []).map(lettersOf));
}

export function hintText(item, level) {
  const show = Math.max(1, Math.floor(level) || 1);
  const masked = hintSources(item).map((s) =>
    s.replace(WORD, (w) => { let seen = 0; return [...w].map((c) => (!LETTER.test(c) || ++seen <= show ? c : "_")).join(""); })
  );
  return masked.length > 1 ? masked.map((m, i) => `${i + 1}. ${m}`).join("   ") : masked[0];
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
