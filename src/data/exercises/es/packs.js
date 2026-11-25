// The Spanish course's side of the Exercises and Dialogues pages: what the
// pages need that differs by language. French's is
// src/data/exercises/fr/packs.js; the pages take one as their `pack`.
import { EXERCISES_BY_ID } from "./index.js";
import { EXERCISE_GROUPS } from "./titles.js";
import { LESSON_TEXTS } from "./texts.js";
import { DIALOGUES, DIALOGUES_BY_ID, DIALOGUE_OF } from "./dialogues.js";
import { DIALOGUE_GROUPS } from "./dialogueTitles.js";
import { SPANISH_MARKING } from "../../../lib/exerciseMarking.js";

const common = {
  course: "es",
  language: "Spanish",
  exerciseWord: "Ejercicio",
  lang: "es",
  side: "es",
  whoKey: "whoEs",
  headingKey: "headingEs",
  truth: { yes: "Verdadero", no: "Falso" },
  migration: "migration_022_spanish_exercises.sql",
  marking: SPANISH_MARKING,
};

export const SPANISH_EXERCISES_PACK = { ...common, againKey: "es-exercises-again:", EXERCISES_BY_ID, EXERCISE_GROUPS, LESSON_TEXTS };
export const SPANISH_DIALOGUES_PACK = { ...common, DIALOGUES, DIALOGUES_BY_ID, DIALOGUE_OF, DIALOGUE_GROUPS };
