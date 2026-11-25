// The French Exercises module's sheets (test app, 2026-11-25; owner: "extend
// the spanish dialogue and exercises modules to french"): the written
// exercises of each of Laura Caufour's sheets, item by item, with her answer
// key where she has one and one written for the app where she hasn't. One file
// for each sheet, named by its id (titles.js). Each file's header says what it
// leaves out and where its key comes from; the format of an item is in
// src/lib/exerciseMarking.js.
//
// What is left out, as in Spanish (owner's rulings of 2026-10-25): sentences
// of your own, answers about yourself, writing the question, every answer to a
// yes-or-no question in a full sentence, and the dictation and oral exercises,
// which need her audio. The files don't have them at all: they were left out
// when the sheets were turned into files, so there is no list here.

import { TITLES, TEXT_OF } from "./titles.js";
import { numbered } from "../../../lib/numberedExercises.js";
import lecon1 from "./lecon1.js";
import lecon2 from "./lecon2.js";
import lecon3 from "./lecon3.js";
import lecon4 from "./lecon4.js";
import lecon5 from "./lecon5.js";
import lecon6_1 from "./lecon6-1.js";
import lecon6_2 from "./lecon6-2.js";
import lecon6_3 from "./lecon6-3.js";
import lecon7 from "./lecon7.js";
import lecon7_annexe from "./lecon7-annexe.js";
import lecon8 from "./lecon8.js";
import lecon9 from "./lecon9.js";
import lecon10 from "./lecon10.js";
import lecon11_1 from "./lecon11-1.js";
import lecon11_2 from "./lecon11-2.js";
import lecon12 from "./lecon12.js";
import lecon13 from "./lecon13.js";
import lecon14 from "./lecon14.js";
import lecon15 from "./lecon15.js";
import lecon15_2 from "./lecon15-2.js";
import lecon16 from "./lecon16.js";
import lecon16_annexe from "./lecon16-annexe.js";
import lecon17 from "./lecon17.js";
import lecon18 from "./lecon18.js";
import lecon19 from "./lecon19.js";
import lecon20 from "./lecon20.js";
import imperatif from "./imperatif.js";
import gerondif from "./gerondif.js";
import plusqueparfait from "./plusqueparfait.js";
import voiepassive from "./voiepassive.js";
import pronomsrelatifs from "./pronomsrelatifs.js";
import subjonctif from "./subjonctif.js";
import subjonctifpasse from "./subjonctifpasse.js";
import condition from "./condition.js";
import communication from "./communication.js";
import demonstratifs from "./demonstratifs.js";
import negation from "./negation.js";
import pronomen from "./pronomen.js";
import pronoms from "./pronoms.js";

export const EXERCISE_LESSONS = [
  lecon1, lecon2, lecon3, lecon4, lecon5, lecon6_1, lecon6_2, lecon6_3, lecon7, lecon7_annexe,
  lecon8, lecon9, lecon10, lecon11_1, lecon11_2, lecon12, lecon13, lecon14, lecon15, lecon15_2,
  lecon16, lecon16_annexe, lecon17, lecon18, lecon19, lecon20,
  imperatif, gerondif, plusqueparfait, voiepassive, pronomsrelatifs, subjonctif, subjonctifpasse,
  condition, communication, demonstratifs, negation, pronomen, pronoms,
].map((l) => ({
  ...l,
  title: TITLES[l.id] || l.id,
  textOf: TEXT_OF[l.id] || l.id,
  exercises: numbered(l.exercises),
}));

export const EXERCISES_BY_ID = Object.fromEntries(EXERCISE_LESSONS.map((l) => [l.id, l]));

export default EXERCISE_LESSONS;
