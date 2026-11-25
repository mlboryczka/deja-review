// The French Dialogues module's texts (test app, 2026-11-25; the Spanish
// module's, owner 2026-11-07, in French): each lesson's text, sentence by
// sentence, the English from her sheet's TRADUCTION page (dialogueTexts.js).
// A lesson with no text of hers to translate has none here (dialogueTitles.js
// says which).
//
// Each text is in the shape of an exercise sheet with one exercise, whose
// items are its sentences, so the answer key, Claude's marking and the hints
// work on it as they do on an exercise (src/lib/exerciseMarking.js). Its
// answer is the text's own French; Claude accepts any other correct French.
//
// `id` is what its answers are kept under, `lesson` the lesson it belongs to.

import { TITLES } from "./titles.js";
import { DIALOGUE_TEXTS } from "./dialogueTexts.js";
import { DIALOGUE_PREFIX } from "../../../lib/dialogueRounds.js";

const INSTRUCTION = "Traduis cette phrase du dialogue de la leçon en français.";
const ENGLISH = "Translate this sentence of the lesson's dialogue into French. Any correct, natural French that says the same thing is right, even if it isn't the dialogue's own wording.";

export const DIALOGUES = Object.keys(TITLES).filter((id) => DIALOGUE_TEXTS[id]).map((id) => {
  const text = DIALOGUE_TEXTS[id];
  const items = [];
  const lines = text.lines.map((line) => ({
    ...line,
    sentences: line.sentences.map((s) => {
      items.push({ prompt: s.en, answer: s.fr, ...(line.who ? { who: line.who } : null) });
      return { ...s, index: items.length - 1 };
    }),
  }));
  return {
    id: `${DIALOGUE_PREFIX}${id}`,
    lesson: id,
    textOf: id,
    title: TITLES[id],
    ...(text.title ? { heading: text.title, headingFr: text.titleFr } : null),
    lines,
    items,
    exercises: [{ n: 1, number: 1, title: "Dialogue", instruction: INSTRUCTION, english: ENGLISH, items }],
  };
});

// By the id its answers are kept under, for findItem.
export const DIALOGUES_BY_ID = Object.fromEntries(DIALOGUES.map((d) => [d.id, d]));
// By its lesson, for the page.
export const DIALOGUE_OF = Object.fromEntries(DIALOGUES.map((d) => [d.lesson, d]));

export default DIALOGUES;
