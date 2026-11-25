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
//   almost   it is one of them with only small slips, however many (owner,
//            2026-11-07): a word that isn't a verb off by one letter
//            ("quando" for "cuando"), an article or demonstrative of the
//            wrong gender or number ("la despertador", "este días"), one
//            word written as two or two as one ("por que" for "porque").
//            Almost counts as right in every figure: countsAsRight, below
//   wrong    it is one of them but for another real form of a verb, even one
//            letter off, or an accent that makes one (owner, 2026-11-16, of
//            "pones" for "pone": "you have to be able to discern a
//            misspelling from an inaccurate verb form"): "pones" for "pone",
//            "trabajo" for "trabajé", "se vistan" for "se visten", "llego"
//            for "llegó" (src/data/lessons/es/verbForms.js)
//   null     the key doesn't have it: Claude decides (api/_lib/exercises.js),
//            so a right answer the key doesn't list is still right. So does
//            a verb off by one letter that makes no real form: a typo
//            ("caminaro") is Almost, a made-up form ("fuemos") Wrong
//
// A true-or-false item pressed the wrong way is wrong without asking anyone.
// A free-writing item ("Escribir una frase con…") has no key to match but its
// one example: it goes to Claude unless it is that example word for word (or
// the same but for punctuation, capitals and accents that change no tense).
//
// Pure, plain JS: the page imports it, and so do the server and the tests.

import { accentSlip, OLD_ACCENTS } from "./spanishAccents.js";
import { VERB_FORMS } from "../data/lessons/es/verbForms.js";

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
    // a.m. and p.m. in any spelling are one word, am or pm: "2:39 pm" is
    // "2:39 p.m." (code check 2026-11-07, no. 41).
    .replace(/(^|[^\p{L}])([ap])\.\s?m\.?(?!\p{L})/gu, "$1$2m")
    .replace(/[¿¡?!.,;:"“”«»()\[\]…–—\-/|]+/g, " ")
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
// Whether an exercise is about the lesson's text, so that its text goes to
// Claude's marking AND to the tutor by one test: the sheet's title or
// instruction names the text, or an item is true-or-false or free writing.
// (Marking and the tutor used to use two tests and agreed on only 7 of 14.)
export function aboutTheText(exercise) {
  if (/comprensi|diálogo|dialogo|texto|lección|leccion/i.test(`${exercise?.title} ${exercise?.instruction}`)) return true;
  return (exercise?.items || []).some((it) => {
    const k = kindOf(it);
    return k === "truth" || k === "open";
  });
}

// The lesson's text as lines, one way for both.
export function lessonTextOf(lines) {
  return (Array.isArray(lines) ? lines : [])
    .map((l) => l.title ? `# ${l.title}` : l.scene ? `(${l.scene})` : l.question ? `– ${l.question}` : l.who ? `${l.who}: ${l.text}` : l.text)
    .filter(Boolean)
    .join("\n");
}

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
  return t.split(" ").map((w, i) => [w, want[i]]).filter(([w, r]) => w !== r && accentSlip(w, r));
}

// One wrong, missing, extra or swapped letter between two different words.
function oneLetterOff(a, b) {
  const [s, l] = a.length <= b.length ? [a, b] : [b, a];
  if (a === b || l.length - s.length > 1) return false;
  let i = 0;
  while (i < s.length && s[i] === l[i]) i++;
  if (s.length < l.length) return s.slice(i) === l.slice(i + 1);
  return s.slice(i + 1) === l.slice(i + 1) || (s[i] === l[i + 1] && s[i + 1] === l[i] && s.slice(i + 2) === l.slice(i + 2));
}

// Words that are one word in another gender or number: "la" where the key has
// "el", "este" where it has "estos". (The key's "está" and "él" aren't here.)
const WORD_FAMILY = new Map(
  [["el", "la", "los", "las"], ["un", "una", "unos", "unas"], ["este", "esta", "estos", "estas"], ["ese", "esa", "esos", "esas"], ["aquel", "aquella", "aquellos", "aquellas"]]
    .flatMap((family, n) => family.map((word) => [word, n]))
);
// What only Claude can tell from a slip, because it may be just as right as
// the key's word: an ending that says who is meant ("cansada" where the key
// has "cansado", "doctora" for "doctor"), and an article on a noun either
// gender can be ("una turista" where the key has "un turista").
const genderEnding = (a, b) => a.replace(/(ora|or|o|a)(s?)$/, "$2") === b.replace(/(ora|or|o|a)(s?)$/, "$2");
const EITHER_GENDER = /(ista|nte)s?$/;

// What a typed word is against the key's word (both plain()): "slip", a word
// that isn't a verb off by a letter or an article of the wrong gender
// (Almost); "form", another real form of the key's verb, even one letter off
// (Wrong: "pones" for "pone"); "verb", a verb off by a letter that makes no
// real form, a typo ("caminaro") or a made-up form ("fuemos"), which only
// Claude can tell apart; or null, another word. A word of one to three letters
// off by a letter isn't for the key to say: "se" for "te" is another word.
function slipKind(typed, want, after) {
  const [t, w] = [bare(typed), bare(want)];
  const family = WORD_FAMILY.get(want);
  if (family !== undefined && WORD_FAMILY.get(t) === family) return EITHER_GENDER.test(bare(after)) ? null : "slip";
  const forms = Object.hasOwn(VERB_FORMS, w) ? VERB_FORMS[w] : null;
  if (forms?.includes(t)) return "form";
  if (Math.min(t.length, w.length) < 4 || !oneLetterOff(t, w) || genderEnding(t, w)) return null;
  return forms ? "verb" : "slip";
}

// A typed text against one right answer (both plain()), word by word, or null
// when anything else differs: a different word, or one left out or added.
// What differs, each as the places of its words in the two ({ t: [..], a:
// [..] }): `slips` (Almost), `forms` (another form of a verb, Wrong; `accent`
// when an accent that changes the tense makes it, "llego" for "llegó") and
// `verbs` (Claude's to judge).
function slipsAgainst(typed, answer) {
  const [t, a] = [typed.split(" "), answer.split(" ")];
  const found = { slips: [], forms: [], verbs: [] };
  let i = 0, j = 0;
  while (i < t.length && j < a.length) {
    const [x, y] = [bare(t[i]), bare(a[j])];
    if (x === y) {
      if (t[i] !== a[j] && accentSlip(t[i], a[j])) found.forms.push({ t: [i], a: [j], accent: true });
      i++; j++;
      continue;
    }
    const kind = slipKind(t[i], a[j], a[j + 1]);
    if (kind) {
      found[kind === "form" ? "forms" : kind === "verb" ? "verbs" : "slips"].push({ t: [i], a: [j] });
      i++; j++;
    } else if (i + 1 < t.length && x + bare(t[i + 1]) === y) {
      found.slips.push({ t: [i, i + 1], a: [j] });
      i += 2; j++;
    } else if (j + 1 < a.length && x === y + bare(a[j + 1])) {
      found.slips.push({ t: [i], a: [j, j + 1] });
      i++; j += 2;
    } else {
      return null;
    }
  }
  return i === t.length && j === a.length ? found : null;
}

// One typed text against a list of right answers: { mark: "right" }, { mark:
// "accents", answer } (only an accent that changes the tense is off: Wrong),
// { mark: "slips", answer, slips } (Almost), { mark: "forms", answer, forms,
// slips } (another form of a verb: Wrong), or null. The answer it comes
// closest to: one it matches with only slips, else one that only Claude can
// judge (null), else one it matches but for another form of a verb. Free
// writing has only an example to go by, so `slips` is off for it: "Mi hermano
// es alto" for an example "Mi hermana es alta" is as good a sentence.
function against(typed, answers, { slips = true } = {}) {
  const t = plain(typed);
  if (!t) return null;
  if (answers.some((a) => plain(a) === t)) return { mark: "right" };
  const b = bare(typed);
  const near = answers.filter((a) => bare(a) === b);
  if (near.length) return near.some((a) => !countingSlips(t, plain(a)).length) ? { mark: "right" } : { mark: "accents", answer: near[0] };
  if (!slips) return null;
  let best = null, wrong = null, unsure = false;
  for (const answer of answers) {
    const found = slipsAgainst(t, plain(answer));
    if (!found) continue;
    if (found.forms.length) {
      if (!wrong || found.forms.length + found.slips.length < wrong.forms.length + wrong.slips.length) wrong = { mark: "forms", answer, forms: found.forms, slips: found.slips };
    } else if (found.verbs.length) unsure = true;
    else if (!best || found.slips.length < best.slips.length) best = { mark: "slips", answer, slips: found.slips };
  }
  return best || (unsure ? null : wrong);
}

// A true-or-false answer's sentence, with or without the "Verdadero." or
// "Falso." the key's answers start with.
const truthSentence = (s) => String(s ?? "").replace(/^\s*(verdadero|falso)\s*[.,:;!]?\s*/i, "");

// What the student typed for an item, in the shape its kind takes:
//   gaps    ["soy", "…"]  one per blank
//   truth   { truth: true|false, text: "…" }
//   other   "…"
// Whether it is complete enough to mark.
// A dash alone in a blank is "nada" (code check 2026-11-07, no. 40): the keys
// list "—" and "-" for it, and plain() would set it aside as punctuation.
const gapText = (t) => (/^\s*[-–—]+\s*$/.test(String(t ?? "")) ? "nada" : t);
export function isAnswered(item, typed) {
  const kind = kindOf(item);
  if (kind === "gaps") return Array.isArray(typed) && typed.length === item.gaps.length && typed.every((t) => plain(gapText(t)));
  if (kind === "truth") return typeof typed?.truth === "boolean" && !!plain(typed?.text);
  return !!plain(typed);
}

// The key's verdict: { verdict: "right" }, { verdict: "almost", slips: true },
// { verdict: "wrong", form: true } (another form of a verb, or an accent that
// makes one), { verdict: "wrong", truth: true } (pressed the wrong way), or
// null when Claude has to decide. A miss in one box says which of the key's
// answers it comes closest to (`correct`).
const isForm = (v) => v?.mark === "forms" || v?.mark === "accents";
const verdictOf = (found) =>
  found.some(isForm) ? { verdict: "wrong", form: true }
    : found.some((f) => f.mark === "slips") ? { verdict: "almost", slips: true }
    : { verdict: "right" };

export function markByKey(item, typed) {
  if (!isAnswered(item, typed)) return null;
  const kind = kindOf(item);
  if (kind === "gaps") {
    const each = item.gaps.map((list, i) => against(gapText(typed[i]), list));
    // Another form of a verb in one blank is Wrong, whatever the others are.
    if (each.some(isForm)) return verdictOf(each.filter(Boolean));
    if (each.some((v) => v === null)) return null;
    return verdictOf(each);
  }
  if (kind === "truth") {
    if (typed.truth !== item.truth) return { verdict: "wrong", truth: true };
    const v = against(truthSentence(typed.text), answersOf(item).map(truthSentence));
    if (!v) return null;
    if (v.mark === "right") return { verdict: "right" };
    // The key's own answer it comes closest to, with its Verdadero. or Falso.,
    // so the correction shown is the student's sentence put right (no. 39).
    const correct = v.answer === undefined ? undefined : answersOf(item).find((a) => truthSentence(a) === v.answer);
    return { ...verdictOf([v]), ...(correct ? { correct } : {}) };
  }
  // Free writing matches only its own example word for word: anything else
  // is Claude's to judge.
  const v = against(typed, answersOf(item), { slips: kind !== "open" });
  return !v ? null : v.mark === "right" ? { verdict: "right" } : { ...verdictOf([v]), correct: v.answer };
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
// misses are an answer right but for its slips, an accent that changes a
// verb's tense among them, and a true-or-false pressed the wrong way. `line`
// is the answer as kept (typedText). "" when the key has nothing to say.
export function keyReason(item, line) {
  const kind = kindOf(item);
  const text = String(line ?? "");
  if (kind === "truth") {
    const chose = /^\s*verdadero\b/i.test(text) ? true : /^\s*falso\b/i.test(text) ? false : null;
    if (chose !== null && chose !== item.truth) {
      return item.truth ? "The statement is true, so the answer is Verdadero." : "The statement is false, so the answer is Falso.";
    }
  }
  // Word by word against the key's answer it comes closest to: another form of
  // a verb, an accent that changes the tense, and every slip. They are quoted
  // as written ("Habló", not "habló").
  const forms = [], accents = [], slipPairs = [];
  const written = (s) => String(s ?? "").normalize("NFC")
    .replace(/(^|[^\p{L}])([ap])\.\s?[mM]\.?(?!\p{L})/gu, "$1$2m")
    .replace(/[¿¡?!.,;:"“”«»()\[\]…–—\-/|]+/g, " ").trim().split(/\s+/);
  const name = (typed, answers) => {
    const found = against(typed, answers, { slips: kind !== "open" });
    if (!found?.answer) return;
    const [want, got] = [plain(found.answer).split(" "), plain(typed).split(" ")];
    const [wantAs, typedAs] = [written(found.answer), written(typed)];
    const pair = ({ t, a }) => `"${a.map((j) => wantAs[j] ?? want[j]).join(" ")}", not "${t.map((i) => typedAs[i] ?? got[i]).join(" ")}"`;
    if (found.mark === "accents") {
      got.forEach((w, i) => { if (w !== want[i] && accentSlip(w, want[i])) accents.push(pair({ t: [i], a: [i] })); });
      return;
    }
    for (const f of found.forms || []) (f.accent ? accents : forms).push(pair(f));
    for (const s of found.slips || []) slipPairs.push(pair(s));
  };
  if (kind === "gaps") {
    // The blanks as typed, out of "Yo [esta] aquí." ([[…]] is the sheet's
    // underlining).
    const typed = [...text.matchAll(/\[\[[^\]]*\]\]|\[([^\]]*)\]/g)].filter((m) => m[1] !== undefined).map((m) => m[1]);
    item.gaps.forEach((list, i) => name(typed[i] ?? "", list));
  } else if (kind === "truth") {
    name(truthSentence(text), answersOf(item).map(truthSentence));
  } else {
    name(text, answersOf(item));
  }
  const wrongs = [
    forms.length && `${forms.length > 1 ? "Other forms of the verb" : "Another form of the verb"}: ${forms.join("; ")}.`,
    accents.length && `${accents.length > 1 ? "The accents change the tense" : "The accent changes the tense"}: ${accents.join("; ")}.`,
  ].filter(Boolean);
  if (wrongs.length) return [...wrongs, slipPairs.length && `Also ${slipPairs.length > 1 ? `${slipPairs.length} slips` : "a slip"}: ${slipPairs.join("; ")}.`].filter(Boolean).join(" ");
  if (slipPairs.length) return `Right but for ${slipPairs.length > 1 ? `${slipPairs.length} words` : "one word"}: ${slipPairs.join("; ")}.`;
  return "";
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

// An answer kept under an earlier rule, shown with the verdict the key gives it
// now. The key's Almost while every accent still counted (before 2026-10-26):
// "Hoy don Rafael esta de mal humor" was Almost and is Right. A Wrong before
// slips were Almost (2026-11-07): "la despertador" was Wrong and is Almost; or
// before the key took the answer: "veo" for "I see." was Wrong and is Right. An
// Almost, whoever marked it, before another form of a verb was Wrong
// (2026-11-16): "pones" for "pone" and "se vistan" were Almost and are Wrong. An
// Almost the key can't settle now (a verb a letter off, only Claude's to
// judge) keeps its verdict. The row kept stays as it was.
export function markedNow(item, answer) {
  const v = answer?.verdict;
  if (!item || !(v === "almost" || v === "wrong")) return answer;
  const typed = typedFromLine(item, answer.typed);
  const now = typed === null ? null : markByKey(item, typed)?.verdict;
  if (v === "almost") {
    if (now === "wrong") return { ...answer, verdict: "wrong" };
    return answer.markedBy === "key" && now === "right" ? { ...answer, verdict: "right" } : answer;
  }
  return now === "almost" || now === "right" ? { ...answer, verdict: now } : answer;
}

// An answer the student had accepted with "My answer should be accepted"
// (es_exercise_disputes) shows as Right. `accepted` is { [item key]: Set of
// lines as kept }, as exerciseApi's loadAccepted gives it. The row kept stays
// as it was.
export function acceptedNow(answer, accepted) {
  if (!answer || answer.pending || answer.verdict === "right") return answer;
  return isAccepted(accepted, answer.key, answer.typed) ? { ...answer, verdict: "right", accepted: true } : answer;
}
// Whether a line is one the student had accepted: the same words, compared as
// the key's own answers are (accents aside, but for one that changes a verb's
// tense).
export const matchesAccepted = (lines, line) => !!lines?.length && against(line, lines, { slips: false })?.mark === "right";
export const isAccepted = (accepted, key, line) => matchesAccepted([...(accepted?.[key] || [])], line);

// A hint for an item still to answer (owner, 2026-10-26: "exercises should
// have a hint option"). It is the key's first answer with only the first
// `level` letters of each word showing and the rest as _, so the words and
// their lengths show; punctuation, ¿ and ¡ stay. Each level shows one more
// letter of every word, and at hintLevels(item) the whole answer shows:
//   level 1   "Prefiero comer cosas dulces." → "P_______ c____ c____ d_____."
// A gap item hints each blank, numbered when it has more than one ("1. m_
// 2. n___"); a true-or-false item hints the key's sentence, Verdadero or
// Falso included. How far it went is kept with the answer (migration_026); it
// never changes the marking.
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
// Almost counts as right in every figure on Exercises and Dialogues (owner,
// 2026-11-07): the figures say what the student knows, and the Almost badge and
// the correction show the slip. The verdict kept stays "almost", so what is
// counted can change without losing anything. A card is marked by its own rules.
export const countsAsRight = (verdict) => verdict === "right" || verdict === "almost";
