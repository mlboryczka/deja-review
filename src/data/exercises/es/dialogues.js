// The Dialogues module's texts (Spanish, test app; owner, 2026-11-07): each
// lesson's text, sentence by sentence, the English from its sheet's Traducción
// page (dialogueTexts.js). Lesson 15 has no text, and Lesson 8's time-and-date
// sheet shares Lesson 8's.
//
// Each text is in the shape of an exercise sheet with one exercise, whose
// items are its sentences, so the answer key, Claude's marking and the hints
// work on it as they do on an exercise (src/lib/exerciseMarking.js). Its answer
// is the text's own Spanish; Claude accepts any other correct Spanish.
//
// `id` is what its answers are kept under, `lesson` the lesson it belongs to.

import { TITLES } from "./titles.js";
import { DIALOGUE_TEXTS } from "./dialogueTexts.js";
import { DIALOGUE_PREFIX } from "../../../lib/dialogueRounds.js";

const INSTRUCTION = "Traduce esta frase del diálogo de la lección al español.";
const ENGLISH = "Translate this sentence of the lesson's dialogue into Spanish. Any correct, natural Spanish that says the same thing is right, even if it isn't the dialogue's own wording.";

export const DIALOGUES = Object.keys(TITLES).filter((id) => DIALOGUE_TEXTS[id]).map((id) => {
  const text = DIALOGUE_TEXTS[id];
  const items = [];
  const lines = text.lines.map((line) => ({
    ...line,
    sentences: line.sentences.map((s) => {
      items.push({ prompt: s.en, answer: s.es, ...(line.who ? { who: line.who } : null) });
      return { ...s, index: items.length - 1 };
    }),
  }));
  return {
    id: `${DIALOGUE_PREFIX}${id}`,
    lesson: id,
    textOf: id,
    title: TITLES[id],
    ...(text.title ? { heading: text.title, headingEs: text.titleEs } : null),
    lines,
    items,
    exercises: [{ n: 1, number: 1, title: "Diálogo", instruction: INSTRUCTION, english: ENGLISH, items }],
  };
});

// By the id its answers are kept under, for findItem.
export const DIALOGUES_BY_ID = Object.fromEntries(DIALOGUES.map((d) => [d.id, d]));
// By its lesson, for the page.
export const DIALOGUE_OF = Object.fromEntries(DIALOGUES.map((d) => [d.lesson, d]));

export default DIALOGUES;
