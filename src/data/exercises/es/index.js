// The Exercises module's lessons (Spanish, test app, owner 2026-10-24): the
// written exercises of each lesson's EJERCICIOS sheet, item by item, with an
// answer key written for the app (the sheets have none). One file per sheet,
// in course order; Lesson 8's time-and-date annex has a sheet, and so a file,
// of its own. The oral exercises (dictation, answering aloud) are left out:
// their recordings don't exist.
//
// Each file's format is in src/lib/exerciseMarking.js (the four kinds of
// item) and the top of any lesson's file.

import { TITLES, TEXT_OF } from "./titles.js";
import leccion1 from "./leccion1.js";
import leccion2 from "./leccion2.js";
import leccion3 from "./leccion3.js";
import leccion4 from "./leccion4.js";
import leccion5 from "./leccion5.js";
import leccion6 from "./leccion6.js";
import leccion7_1 from "./leccion7-1.js";
import leccion7_2 from "./leccion7-2.js";
import leccion7_3 from "./leccion7-3.js";
import leccion8 from "./leccion8.js";
import leccion8_anexo from "./leccion8-anexo.js";
import leccion9 from "./leccion9.js";
import leccion10 from "./leccion10.js";
import leccion11 from "./leccion11.js";
import leccion12_1 from "./leccion12-1.js";
import leccion12_2 from "./leccion12-2.js";
import leccion13 from "./leccion13.js";
import leccion14 from "./leccion14.js";
import leccion15 from "./leccion15.js";
import leccion16 from "./leccion16.js";
import leccion17 from "./leccion17.js";
import leccion18 from "./leccion18.js";
import leccion19 from "./leccion19.js";
import leccion20 from "./leccion20.js";
import leccion21 from "./leccion21.js";
import leccion22 from "./leccion22.js";
import leccion23 from "./leccion23.js";

// Left out at the owner's word, 2026-10-25. First (feedback #53–#56 on Lesson
// 7.1) every exercise that has no set answer for the key to check: "get rid
// of the exercises wherein a write a sentence of my own with. particular
// word", and of answering truthfully, writing the question, and answering
// about the text: "get rid of these types of exercises throughout lessons".
// Then, of Lesson 7.2's "Responder a las preguntas de forma afirmativa":
// "remove this type of lesson", so every answer to a question with yes or no
// in a full sentence goes too, whatever else it practises. Their files keep
// them as the sheets have them, numbered as on the sheet. Lesson 16's ex. 3,
// translating the lesson's text, stays: it is a translation.
//   your own sentences   5: 1, 2 · 7-1: 1 · 7-2: 1, 2 · 9: 1, 2 · 10: 1, 2, 11 ·
//                        11: 1, 2 · 12-1: 1, 5 (Paola's routine retold) ·
//                        12-2: 1, 11 · 13: 1 · 16: 1, 2, 7 · 17: 1, 2,
//                        6 (words of your own for a pronoun) · 18: 11 · 21: 1 ·
//                        22: 1, 4 (finish the sentence your way)
//   about yourself       6: 5 (react with your own opinion) · 7-1: 3 ·
//                        8 annex: 4 · 15: 3 · 21: 5
//   write the question   7-1: 4 · 7-2: 6 · 9: 6 · 10: 5 · 11: 8 · 14: 6 ·
//                        15: 4, 5 · 22: 5
//   about the text       1: 6 · 2: 7 · 3: 10 · 4: 9 · 5: 12 · 6: 10 · 7-1: 7 ·
//                        7-2: 9 · 14: 2 · 16: 4 · 18: 9
//   yes or no, in full   1: 2 · 2: 3 · 3: 2, 3 · 4: 2, 3 · 5: 4, 6 · 6: 3, 4 ·
//                        7-2: 4, 5 · 8: 3, 4 · 9: 4, 5 · 10: 3, 4 · 11: 6, 7 ·
//                        12-1: 2, 3 (ex. 2 again, in the plural), 7 ·
//                        12-2: 4, 5, 6 · 13: 7, 8 · 14: 4, 5 · 15: 2 · 16: 6 ·
//                        17: 5, 9, 11 · 21: 3, 4 · 23: 1, 2
export const LEFT_OUT = {
  leccion1: [2, 6], leccion2: [3, 7], leccion3: [2, 3, 10], leccion4: [2, 3, 9], leccion5: [1, 2, 4, 6, 12],
  leccion6: [3, 4, 5, 10], "leccion7-1": [1, 3, 4, 7], "leccion7-2": [1, 2, 4, 5, 6, 9], leccion8: [3, 4],
  "leccion8-anexo": [4], leccion9: [1, 2, 4, 5, 6], leccion10: [1, 2, 3, 4, 5, 11], leccion11: [1, 2, 6, 7, 8],
  "leccion12-1": [1, 2, 3, 5, 7], "leccion12-2": [1, 4, 5, 6, 11], leccion13: [1, 7, 8], leccion14: [2, 4, 5, 6],
  leccion15: [2, 3, 4, 5], leccion16: [1, 2, 4, 6, 7], leccion17: [1, 2, 5, 6, 9, 11], leccion18: [9, 11],
  leccion21: [1, 3, 4, 5], leccion22: [1, 4, 5], leccion23: [1, 2],
};

// The page numbers a lesson's exercises 1, 2, 3… as they now stand (owner,
// 2026-10-25: "renumber the exercises properly"). `n` stays the sheet's
// number, which every answer is kept under. An instruction pointing at
// another exercise ("del ejercicio 1", Lesson 18) points at its number on the
// page.
export function numbered(exercises) {
  const number = new Map(exercises.map((ex, i) => [ex.n, i + 1]));
  const renumber = (text) =>
    typeof text === "string"
      ? text.replace(/\b(ejercicio|exercise) (\d+)\b/gi, (all, word, n) => (number.has(Number(n)) ? `${word} ${number.get(Number(n))}` : all))
      : text;
  return exercises.map((ex, i) => ({ ...ex, number: i + 1, instruction: renumber(ex.instruction), english: renumber(ex.english) }));
}

export const EXERCISE_LESSONS = [
  leccion1, leccion2, leccion3, leccion4, leccion5, leccion6, leccion7_1, leccion7_2, leccion7_3,
  leccion8, leccion8_anexo, leccion9, leccion10, leccion11, leccion12_1, leccion12_2, leccion13,
  leccion14, leccion15, leccion16, leccion17, leccion18, leccion19, leccion20, leccion21, leccion22,
  leccion23,
].map((l) => ({
  ...l,
  title: TITLES[l.id] || l.id,
  textOf: TEXT_OF[l.id] || l.id,
  exercises: numbered(l.exercises.filter((ex) => !(LEFT_OUT[l.id] || []).includes(ex.n))),
}));

export const EXERCISES_BY_ID = Object.fromEntries(EXERCISE_LESSONS.map((l) => [l.id, l]));

export default EXERCISE_LESSONS;
