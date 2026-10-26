// Which accents count when a Spanish answer is marked (owner, 2026-10-26:
// "the accents shouldn't be a criteria for marking something incorrect,
// unless the word NEEDS the accent (for instance to determine the proper
// tense)", and of "Hoy don Rafael esta de mal humor": "this should be
// correct").
//
// An accent counts only on a verb form whose accent is all that tells it from
// another form of the same verb: "habló" (he spoke) is not "hablo" (I speak),
// "hablé" is not "hable", "hablará" is not "hablara". Anywhere else a missing
// or wrong accent, or a missing ñ, is no mistake: "estan" is están, "esta de
// mal humor" is "está de mal humor", "tu" is tú, "manana" is mañana.
//
// The words are listed in src/data/lessons/es/tenseAccents.js, made by
// scripts/tense-accents.mjs. The cards (FlashcardApp.jsx) and Exercises
// (exerciseMarking.js) both mark by it; Claude is told the same rule
// (api/_lib/exercises.js, api/_lib/answerChecks.js).

import { TENSE_ACCENT_WORDS } from "../data/lessons/es/tenseAccents.js";

// Whether a slip in the accents of `right`, a word of the right answer,
// makes the answer wrong.
export const accentCounts = (right) => TENSE_ACCENT_WORDS.has(String(right ?? "").normalize("NFC").toLowerCase());
