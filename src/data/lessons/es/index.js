// The Spanish module's lessons (test app, owner 2026-10-22): the 23-lesson
// Latin American Spanish course adapted from Laura Caufour's LFL METHOD, in
// Google Drive under Español / "New Lessons to Review". Written by
// scripts/es-lessons-index.mjs; run it again after adding a lesson file.
//
// Every lesson starts in every Spanish deck, as the French ones do in the
// French deck. Lessons 1 to 6 come up on Cards without a choice
// (lib/lessonChoice.js): the owner has covered them with Laura.

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
import { makeCatalogue } from "../catalogue.js";

export const SPANISH = makeCatalogue({
  lessons: [leccion1, leccion2, leccion3, leccion4, leccion5, leccion6, leccion7_1, leccion7_2, leccion7_3, leccion8, leccion9, leccion10, leccion11, leccion12_1, leccion12_2, leccion13, leccion14, leccion15, leccion16, leccion17, leccion18, leccion19, leccion20, leccion21, leccion22, leccion23],
  meetingOrder: ["leccion1","leccion2","leccion3","leccion4","leccion5","leccion6","leccion7-1","leccion7-2","leccion7-3","leccion8","leccion9","leccion10","leccion11","leccion12-1","leccion12-2","leccion13","leccion14","leccion15","leccion16","leccion17","leccion18","leccion19","leccion20","leccion21","leccion22","leccion23"],
  groups: [{"title":"Lessons 1 to 8","folds":true,"ids":["leccion1","leccion2","leccion3","leccion4","leccion5","leccion6","leccion7-1","leccion7-2","leccion7-3","leccion8"]},{"title":"Lessons 9 to 16","folds":true,"ids":["leccion9","leccion10","leccion11","leccion12-1","leccion12-2","leccion13","leccion14","leccion15","leccion16"]},{"title":"Lessons 17 to 23","folds":true,"ids":["leccion17","leccion18","leccion19","leccion20","leccion21","leccion22","leccion23"]}],
});

export default SPANISH;
