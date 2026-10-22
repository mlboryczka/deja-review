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
import { makeCatalogue } from "./catalogue.js";

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
const ALL = [imperatif, adverbes, lecon2, lecon3, lecon4, lecon5, lecon1];

// The order a student meets the lessons' new cards in on Cards: part of every
// lesson card's rank (lessonRank). Leçon 1 comes before Leçons 2 to 5, though
// it was added after them (owner, 2026-10-06). L'impératif and the adverbs
// keep their place ahead, so a student studying them saw no change. A lesson
// not named here comes after, in catalogue order.
//
// How the catalogue is shown: on the Lessons page, in the sidebar and on
// Stats. Separate from the list above, whose order is part of every card's
// rank (lessonRank), so that list only ever grows at the end. Laura's
// numbered beginner lessons come first, together under one heading and in
// number order, though Leçon 1 was added after Leçons 2 to 5 (owner,
// 2026-10-06). Every other lesson follows. In the sidebar only a group that
// `folds` gets a heading, with its lessons indented beneath it; the rest sit
// at the usual indent, which is enough to set them apart. On the Lessons
// page, where the cards are all the same width, they need their heading.
export const FRENCH = makeCatalogue({
  lessons: ALL,
  meetingOrder: ["imperatif", "adverbes", "lecon1", "lecon2", "lecon3", "lecon4", "lecon5"],
  groups: [{ title: "Basic Lessons", folds: true, ids: ["lecon1", "lecon2", "lecon3", "lecon4", "lecon5"] }],
});

export const {
  LESSONS, LESSON_GROUPS, LESSONS_SHOWN, lessonById, lessonRank, lessonBackFor, cardInstructionFor,
} = FRENCH;
