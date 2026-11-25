// The French course's side of the Exercises and Dialogues pages (test app,
// 2026-11-25): what the pages need that differs by language. Spanish's is
// src/data/exercises/es/packs.js; the pages take one as their `pack`.
import { EXERCISES_BY_ID } from "./index.js";
import { EXERCISE_GROUPS } from "./titles.js";
import { LESSON_TEXTS } from "./texts.js";
import { DIALOGUES, DIALOGUES_BY_ID, DIALOGUE_OF } from "./dialogues.js";
import { DIALOGUE_GROUPS } from "./dialogueTitles.js";
import { FRENCH_MARKING } from "../../../lib/frenchMarking.js";

const common = {
  course: "fr",
  language: "French",
  exerciseWord: "Exercice",
  lang: "fr",
  // The text's side of a sentence, and its speaker and heading, in the data.
  side: "fr",
  whoKey: "whoFr",
  headingKey: "headingFr",
  truth: { yes: "Vrai", no: "Faux" },
  migration: "migration_036_french_exercises.sql",
  marking: FRENCH_MARKING,
};

export const FRENCH_EXERCISES_PACK = { ...common, againKey: "fr-exercises-again:", EXERCISES_BY_ID, EXERCISE_GROUPS, LESSON_TEXTS };
export const FRENCH_DIALOGUES_PACK = { ...common, DIALOGUES, DIALOGUES_BY_ID, DIALOGUE_OF, DIALOGUE_GROUPS };
