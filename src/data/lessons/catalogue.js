// A catalogue of lessons: the lessons, how they are shown, and what each
// lesson card needs from its lesson (its rank, its instruction line, its
// current answer). The French catalogue is index.js; the Spanish module's
// is es/index.js (2026-10-22). Both are built here, so the two can't differ
// in how a lesson works, only in which lessons there are.

import { drillInstruction } from "../../lib/cardInstruction.js";
import { lessonIdOf, lessonCardKeyOf, lessonCardKey } from "../../lib/lessonSource.js";

// lessons      in the order they were added: part of every card's rank, so
//              this list only ever grows at the end
// meetingOrder the lesson ids in the order a student meets their new cards;
//              a lesson not named comes after, in catalogue order
// groups       [{ title, folds, ids }]: how the Lessons page, the sidebar and
//              Stats show them. Every lesson not in a group follows, under
//              `moreTitle`
export function makeCatalogue({ lessons, meetingOrder = [], groups = [], moreTitle = "More lessons" }) {
  const LESSONS = lessons;
  const MEETING_ORDER = [...meetingOrder, ...LESSONS.map((l) => l.id).filter((id) => !meetingOrder.includes(id))];
  const lessonById = (id) => LESSONS.find((l) => l.id === id) || null;

  const grouped = new Set(groups.flatMap((g) => g.ids));
  const LESSON_GROUPS = [
    ...groups.map((g) => ({ title: g.title, folds: g.folds, lessons: g.ids.map(lessonById).filter(Boolean) })),
    { title: moreTitle, folds: false, lessons: LESSONS.filter((l) => !grouped.has(l.id)) },
  ].filter((g) => g.lessons.length > 0);
  const LESSONS_SHOWN = LESSON_GROUPS.flatMap((g) => g.lessons);

  // Where a lesson card sits in the order a student should meet it, or null for
  // a card that isn't a lesson card (or no longer matches one). Lower comes
  // first: lessons in meeting order, then each lesson's `teachingOrder` of
  // sections, then the card's place in the lesson's array.
  //
  // A row written before lesson keys existed is matched by its front, the same
  // fallback reconcileLessons uses.
  const RANKS = new Map();
  // And which section each lesson card is in, for its instruction line.
  const SECTIONS = new Map();
  // And the lesson's current answer, so one the lesson has since widened
  // ("N'en parlons pas / N'en parlons plus") is accepted on rows synced before.
  const BACKS = new Map();
  LESSONS.forEach((lesson) => {
    const li = MEETING_ORDER.indexOf(lesson.id);
    const order = lesson.teachingOrder || [];
    // Keyed by the card's identity, which is its FIRST front: a reworded card
    // carries that as its fifth element, and the sync keys its rows by it.
    // Keying by the current front alone left the 27 renamed impératif drills
    // unranked. The current front is kept too, for a row keyed that way.
    lesson.cards.forEach(([front, back, , section, was], ci) => {
      const si = order.indexOf(section);
      const rank = li * 1e8 + (si === -1 ? order.length : si) * 1e4 + ci;
      for (const f of new Set([was ?? front, front])) {
        const k = `${lesson.id}#${lessonCardKey(f)}`;
        RANKS.set(k, rank);
        SECTIONS.set(k, section);
        BACKS.set(k, back);
      }
    });
  });

  const lessonKeyOf = (card) => {
    const id = lessonIdOf(card);
    if (!id) return null;
    const key = lessonCardKeyOf(card) || lessonCardKey(card.f ?? card.front);
    return `${id}#${key}`;
  };

  function lessonRank(card) {
    const k = lessonKeyOf(card);
    return k ? RANKS.get(k) ?? null : null;
  }

  function lessonBackFor(card) {
    const k = lessonKeyOf(card);
    return k ? BACKS.get(k) ?? null : null;
  }

  // The line above a grammar card saying exactly what to type, or null.
  //
  // Only grammar cards get one: a word or phrase card is a translation, and its
  // input already says which language to type. A conjugation drill's line comes
  // from its own shape, because that names the tense and the person; any other
  // lesson card takes its section's line from LESSON.instructions.
  function cardInstructionFor(card) {
    if (!card || (card.cat !== "gram" && card.cat !== "pron")) return null;
    const front = card.f ?? card.front;
    const drill = drillInstruction(front);
    if (drill) return drill;
    const k = lessonKeyOf(card);
    if (!k) return null;
    const lesson = lessonById(k.split("#")[0]);
    return lesson?.instructions?.[SECTIONS.get(k)] || null;
  }

  return { LESSONS, LESSON_GROUPS, LESSONS_SHOWN, lessonById, lessonRank, lessonBackFor, cardInstructionFor };
}
