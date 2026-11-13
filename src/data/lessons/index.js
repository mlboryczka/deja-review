// The lesson catalogue.
//
// A lesson is a fixed set of cards built from a teacher's materials, the same
// for everyone who studies it — as opposed to the deck, which is one person's
// own cahier. Adding a lesson copies its cards into your user_cards so they
// schedule through FSRS like anything else; the copy is what makes the
// scheduling personal while the lesson itself stays shared.
//
// Cards are tagged with source = `lesson:<id>#<cardKey>` on insert. That column
// already exists (the cahier parser writes "cahier-upload", the tutor writes
// "tutor-chat"), so a lesson needs no schema change.

import imperatif from "./imperatif.js";
import adverbes from "./adverbes.js";
import lecon1 from "./lecon1.js";
import lecon2 from "./lecon2.js";
import lecon3 from "./lecon3.js";
import lecon4 from "./lecon4.js";
import lecon5 from "./lecon5.js";
import lecon6 from "./lecon6.js";
import lecon7 from "./lecon7.js";
import lecon8 from "./lecon8.js";
import lecon9 from "./lecon9.js";
import lecon10 from "./lecon10.js";
import lecon11 from "./lecon11.js";
import lecon12 from "./lecon12.js";
import lecon13 from "./lecon13.js";
import lecon14 from "./lecon14.js";
import lecon15 from "./lecon15.js";
import lecon16 from "./lecon16.js";
import lecon17 from "./lecon17.js";
import lecon18 from "./lecon18.js";
import lecon19 from "./lecon19.js";
import lecon20 from "./lecon20.js";
import gerondif from "./gerondif.js";
import { makeCatalogue } from "./catalogue.js";
import { frenchStagesOf } from "./stages.js";
import { stageIds } from "./es/stages.js";

// How a stored card names which lesson card it is. Defined in src/lib, not
// here, so the sync reconciler can use it without importing every lesson's
// cards; re-exported so callers still reach it through the catalogue.
export {
  LESSON_SOURCE_PREFIX,
  lessonSource,
  lessonIdOf,
  lessonCardKeyOf,
  lessonCardKey,
} from "../../lib/lessonSource.js";

// New lessons go at the end. Where a lesson's cards come in the order a
// student meets them is the meeting order, below, not its place here.
const ALL = [
  imperatif, adverbes, lecon2, lecon3, lecon4, lecon5, lecon1, lecon6, lecon7, lecon8, lecon9, lecon10,
  lecon11, lecon12, lecon13, lecon14, lecon15, lecon16, lecon17, lecon18, lecon19, lecon20,
  gerondif,
];

// The order a student meets the lessons' new cards in on Cards: part of every
// lesson card's rank (lessonRank). Leçon 1 comes before Leçons 2 to 5, though
// it was added after them (owner, 2026-10-06). L'impératif and the adverbs
// keep their place ahead, so a student studying them saw no change. A lesson
// not named here comes after, in catalogue order.
//
// How the catalogue is shown: on the Lessons page, in the sidebar and on
// Stats. Separate from the list above, whose order is part of every card's
// rank (lessonRank), so that list only ever grows at the end. Laura's
// numbered beginner lessons come first, in number order, though Leçon 1 was
// added after Leçons 2 to 5 (owner, 2026-10-06): since 2026-11-13 in four
// stages of five (./stages.js), as the Spanish lessons are, where they were
// all under "Basic Lessons". Every other lesson follows, each on its own. In
// the sidebar a stage opens and closes as Spanish's do; the other lessons sit
// after the stages at the usual indent. On the Lessons page they have the
// heading "More lessons".
const LESSON_STAGES = frenchStagesOf(ALL);

export const FRENCH = {
  ...makeCatalogue({
    lessons: ALL,
    meetingOrder: [
      "imperatif", "adverbes", "lecon1", "lecon2", "lecon3", "lecon4", "lecon5",
      "lecon6", "lecon7", "lecon8", "lecon9", "lecon10",
      "lecon11", "lecon12", "lecon13", "lecon14", "lecon15", "lecon16", "lecon17", "lecon18", "lecon19", "lecon20",
    ],
    groups: LESSON_STAGES.map((stage) => ({ title: stage.title, folds: true, ids: stageIds(stage) })),
  }),
  LESSON_STAGES,
};

export const {
  LESSONS, LESSON_GROUPS, LESSONS_SHOWN, lessonById, lessonRank, lessonBackFor, cardInstructionFor,
} = FRENCH;
