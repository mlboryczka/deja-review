// The French Exercises' and Dialogues' lessons: ids and titles in course order,
// kept apart from the sheets themselves (index.js) so the sidebar can list them
// without loading every sheet (FlashcardApp's lazy pages). Test app,
// 2026-11-25; owner: "extend the spanish dialogue and exercises modules to
// french".
//
// One id for each sheet of Laura's: a lesson with parts has one sheet for each
// ("lecon6-1"), and Leçons 7, 15 and 16 have a second sheet. Her topic lessons
// (the gérondif and so on) have one each. "Adjectif ou adverbe ?" has no sheet
// of hers (it was written for the app), so it is not here.
//
// The titles are the lessons' own (src/data/lessons), so a lesson reads the
// same on Lessons and on Exercises.

export const TITLES = {
  lecon1: "Lesson 1 · Être",
  lecon2: "Lesson 2 · Aller",
  lecon3: "Lesson 3 · Avoir",
  lecon4: "Lesson 4 · -er verbs",
  lecon5: "Lesson 5 · Vouloir and pouvoir",
  "lecon6-1": "Lesson 6 · Adjectives, part 1",
  "lecon6-2": "Lesson 6 · Adjectives, part 2",
  "lecon6-3": "Lesson 6 · Adjectives, part 3",
  lecon7: "Lesson 7 · The passé composé",
  "lecon7-annexe": "Lesson 7 · Telling the time",
  lecon8: "Lesson 8 · On and faire",
  lecon9: "Lesson 9 · Voir and venir",
  lecon10: "Lesson 10 · Dire and devoir",
  "lecon11-1": "Lesson 11 · Verbs with se, part 1",
  "lecon11-2": "Lesson 11 · Verbs with se, part 2",
  lecon12: "Lesson 12 · Connaître and mettre",
  lecon13: "Lesson 13 · The imperfect",
  lecon14: "Lesson 14 · Asking questions",
  lecon15: "Lesson 15 · Imparfait or passé composé",
  "lecon15-2": "Lesson 15 · Harder exercises",
  lecon16: "Lesson 16 · Recevoir and entendre",
  "lecon16-annexe": "Lesson 16 · Me, te, nous and vous",
  lecon17: "Lesson 17 · Sortir and boire",
  lecon18: "Lesson 18 · Répondre and partir",
  lecon19: "Lesson 19 · The conditional",
  lecon20: "Lesson 20 · Lire and écrire",
  imperatif: "L'impératif",
  gerondif: "Le gérondif",
  plusqueparfait: "Le plus-que-parfait",
  voiepassive: "La voie passive",
  pronomsrelatifs: "Les pronoms relatifs",
  subjonctif: "Le subjonctif présent",
  subjonctifpasse: "Le subjonctif passé",
  condition: "La condition",
  communication: "Communication",
  demonstratifs: "Les démonstratifs",
  negation: "La négation",
  pronomen: "Le pronom EN",
  pronoms: "Les pronoms",
};

// The lesson whose text (texts.js) a sheet's questions are about, and whose
// notes open beside it: a second sheet or an annex is its lesson's.
export const TEXT_OF = { "lecon7-annexe": "lecon7", "lecon15-2": "lecon15", "lecon16-annexe": "lecon16" };

// In course order, for the sidebar.
export const EXERCISE_TITLES = Object.entries(TITLES).map(([id, title]) => ({ id, title }));

// The lessons in the course's four stages, as on Flashcards (stages.js), then
// her topic lessons, which are in no stage and follow as "More lessons"
// (owner, 2026-11-13 and 2026-11-25). A lesson with more than one sheet is one
// row that opens to its sheets, as in Spanish. Every sheet is in exactly one
// place, in course order (tests/suites/fr-exercises.mjs).
const STAGES = [
  { title: "Lessons 1–5 · The present", lessons: [1, 2, 3, 4, 5] },
  { title: "Lessons 6–10 · Describing and the past", lessons: [6, 7, 8, 9, 10] },
  { title: "Lessons 11–15 · Se verbs and the imperfect", lessons: [11, 12, 13, 14, 15] },
  { title: "Lessons 16–20 · Pronouns to the conditional", lessons: [16, 17, 18, 19, 20] },
];
const lessonNumber = (id) => Number(/^lecon(\d+)/.exec(id)?.[1]);
// Under its lesson's row, "Lesson 6 · Adjectives, part 2" is "Part 2" and
// "Lesson 7 · Telling the time" is "Telling the time".
const partName = (title) => {
  const part = /, part (\d+)$/.exec(title);
  return part ? `Part ${part[1]}` : title.split(" · ")[1];
};
export const frenchSheetStages = (sheets) => {
  const numbered = STAGES.map((stage) => ({
    title: stage.title,
    rows: stage.lessons.flatMap((n) => {
      const parts = sheets.filter((l) => lessonNumber(l.id) === n);
      if (parts.length < 2) return parts.map(({ id, title }) => ({ id, title }));
      return [{
        key: `lecon${n}`,
        title: parts[0].title.replace(/ · .*$/, "") + " · " + parts[0].title.split(" · ")[1].replace(/, part \d+$/, ""),
        parts: parts.map(({ id, title }) => ({ id, title: partName(title) })),
      }];
    }),
  }));
  const topics = sheets.filter((l) => Number.isNaN(lessonNumber(l.id))).map(({ id, title }) => ({ id, title }));
  return [...numbered, ...(topics.length ? [{ title: "More lessons", rows: topics }] : [])].filter((stage) => stage.rows.length > 0);
};
export const EXERCISE_GROUPS = frenchSheetStages(EXERCISE_TITLES);
