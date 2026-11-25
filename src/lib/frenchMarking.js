// The answer key's marking for the French Exercises and Dialogues (test app,
// 2026-11-25; owner: "extend the spanish dialogue and exercises modules to
// french"). The same marking as Spanish (src/lib/exerciseMarking.js), with
// French words:
//
//   right    one of the key's answers, capitals, punctuation, hyphens and
//            spaces aside, and accents too but for those that count. As in
//            Spanish (owner, 2026-10-26: "the accents shouldn't be a
//            criteria for marking something incorrect, unless the word NEEDS
//            the accent (for instance to determine the proper tense)"), an
//            accent counts only when the word typed is then another real
//            form of the same verb: "parle" for "parlé" (present for past
//            participle) is Wrong, "ete" for "été" and "a" for "à" are right
//   almost   one of them with only small slips: a word that isn't a verb off
//            by one letter ("maisn"), an article or determiner of the wrong
//            gender or number ("le maison", "ces livre"), one word written as
//            two or two as one
//   wrong    one of them but for another real form of a verb, even one letter
//            off (owner, 2026-11-16, in Spanish: "you have to be able to
//            discern a misspelling from an inaccurate verb form"): "parles"
//            for "parle", "finissent" for "finissons"
//   null     Claude decides (api/_lib/exercises.js): a right answer the key
//            doesn't list, a verb a letter off that makes no real form (a
//            typo is Almost, a made-up form Wrong), an ending that says who
//            is meant ("allée" where the key has "allé", "contente" for
//            "content"), which may be just as right
//
// The verb forms are src/data/exercises/fr/verbForms.js, made by
// scripts/fr-verb-forms.mjs from the Lefff's French conjugations.

import { makeMarking } from "./exerciseMarking.js";
import { VERB_FORMS, ACCENT_FORMS } from "../data/exercises/fr/verbForms.js";

const low = (w) => String(w ?? "").normalize("NFC").toLowerCase();

// Whether a slip in the accents of `right`, a word of the right answer, makes
// the answer wrong: its accents are all that tells it from another form of the
// same verb ("parlé" and "parle", "achète" and "acheté"). Anywhere else an
// accent is no mistake: "a" for "à", "ou" for "où", "ca" for "ça", "ete" for
// "été", and a ç written as c. As in Spanish, whatever else is typed in place
// of the word is the slip; the key then marks it Wrong (another form of the
// verb), not Almost.
export const accentSlip = (typed, right) => {
  const [t, r] = [low(typed), low(right)];
  return t !== r && Object.hasOwn(ACCENT_FORMS, r);
};

// Words that are one word in another gender or number: "la" where the key has
// "le", "ces" where it has "cette". ("Le", "la" and "les" are pronouns too, as
// "la" and "las" are in Spanish: the same slip either way.)
const WORD_FAMILY = new Map(
  [
    ["le", "la", "les"], ["un", "une", "des"], ["ce", "cet", "cette", "ces"], ["mon", "ma", "mes"],
    ["ton", "ta", "tes"], ["son", "sa", "ses"], ["notre", "nos"], ["votre", "vos"], ["au", "aux"],
    ["quel", "quelle", "quels", "quelles"], ["tout", "toute", "tous", "toutes"],
  ].flatMap((family, n) => family.map((word) => [word, n]))
);

// An ending that says who is meant, which only Claude can judge: an e that
// makes a word feminine, with or without the plural s ("allé" and "allée",
// "contents" and "contentes", "pris" and "prise"). A plural s alone is a
// slip: "petits" where the key has "petit".
const plusE = (a, b) => a + "e" === b || b + "e" === a;
export const genderEnding = (a, b) =>
  plusE(a, b) || (a.endsWith("s") && b.endsWith("s") && plusE(a.slice(0, -1), b.slice(0, -1)));

// Nouns either gender can be, so "un" or "une" before them is Claude's to
// judge ("une élève", "un élève"). Compared without accents.
const EITHER_GENDER = /(iste|aire|eve|egue|ulte|ade|enfant|guide|juge|ministre)s?$/;

export const FRENCH_RULES = {
  accentSlip,
  verbForms: VERB_FORMS,
  wordFamily: WORD_FAMILY,
  genderEnding,
  eitherGender: EITHER_GENDER,
  truth: { yes: "Vrai", no: "Faux" },
  nothing: null,
  accentChanges: "verb form",
};
export const FRENCH_MARKING = makeMarking(FRENCH_RULES);
export const { isAnswered, markByKey, typedText, keyAnswer, keyReason, markedNow, acceptedNow, matchesAccepted, isAccepted } = FRENCH_MARKING;
