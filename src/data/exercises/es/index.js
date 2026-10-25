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

export const EXERCISE_LESSONS = [
  leccion1, leccion2, leccion3, leccion4, leccion5, leccion6, leccion7_1, leccion7_2, leccion7_3,
  leccion8, leccion8_anexo, leccion9, leccion10, leccion11, leccion12_1, leccion12_2, leccion13,
  leccion14, leccion15, leccion16, leccion17, leccion18, leccion19, leccion20, leccion21, leccion22,
  leccion23,
].map((l) => ({ ...l, title: TITLES[l.id] || l.id, textOf: TEXT_OF[l.id] || l.id }));

export const EXERCISES_BY_ID = Object.fromEntries(EXERCISE_LESSONS.map((l) => [l.id, l]));

export default EXERCISE_LESSONS;
