// The French Dialogues module's lessons, kept apart from the texts themselves
// (dialogues.js) so the sidebar can list them without loading the texts, which
// load only when Dialogues is opened (FlashcardApp's lazy DialoguesPage).
//
// Only a sheet with a text of hers and her English translation of it has a
// dialogue: Leçon 14 has no text, the annexes and the second sheet share their
// lesson's, and her topic lessons are grammar with examples only. The ids are
// written out so the sidebar needn't load the texts; tests/suites/
// fr-dialogues.mjs checks them against the texts.

import { EXERCISE_TITLES, frenchSheetStages } from "./titles.js";

const WITH_TEXT = new Set([
  "lecon1", "lecon2", "lecon3", "lecon4", "lecon5", "lecon6-1", "lecon6-2", "lecon6-3", "lecon7",
  "lecon8", "lecon9", "lecon10", "lecon11-1", "lecon11-2", "lecon12", "lecon13", "lecon15",
  "lecon16", "lecon17", "lecon18", "lecon19", "lecon20",
]);

export const DIALOGUE_TITLES = EXERCISE_TITLES.filter((l) => WITH_TEXT.has(l.id));
export const DIALOGUE_TITLE_OF = Object.fromEntries(DIALOGUE_TITLES.map((l) => [l.id, l.title]));
export const DIALOGUE_GROUPS = frenchSheetStages(DIALOGUE_TITLES);
