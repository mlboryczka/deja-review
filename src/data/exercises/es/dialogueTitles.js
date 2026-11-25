// The Dialogues module's lessons, kept apart from the texts themselves
// (dialogues.js) so the sidebar can list them without loading the texts, which
// load only when Dialogues is opened (FlashcardApp's lazy DialoguesPage).
//
// Every lesson's sheet but two has a text to go over: Lesson 15 has none, and
// Lesson 8's time-and-date sheet shares Lesson 8's. They are in the course's
// four stages, as everywhere (data/lessons/es/stages.js).

import { EXERCISE_TITLES } from "./titles.js";
import { stagesOf } from "../../lessons/es/stages.js";

const NO_TEXT = new Set(["leccion8-anexo", "leccion15"]);

export const DIALOGUE_TITLES = EXERCISE_TITLES.filter((l) => !NO_TEXT.has(l.id));
export const DIALOGUE_TITLE_OF = Object.fromEntries(DIALOGUE_TITLES.map((l) => [l.id, l.title]));
export const DIALOGUE_GROUPS = stagesOf(DIALOGUE_TITLES);
