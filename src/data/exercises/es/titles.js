// The Exercises lessons' ids and titles, in course order, kept apart from
// the exercises themselves (index.js) so the sidebar can list them without
// loading every sheet: the sheets load only when Exercises is opened
// (FlashcardApp's lazy ExercisesPage).

// The titles are the lessons' own (src/data/lessons/es), so a lesson reads
// the same on Lessons and on Exercises.
export const TITLES = {
  leccion1: "Lesson 1 · Ser",
  leccion2: "Lesson 2 · Estar and ir",
  leccion3: "Lesson 3 · Tener",
  leccion4: "Lesson 4 · Regular verbs",
  leccion5: "Lesson 5 · Querer and poder",
  leccion6: "Lesson 6 · Gustar",
  "leccion7-1": "Lesson 7 · Describing people, part 1",
  "leccion7-2": "Lesson 7 · Describing people, part 2",
  "leccion7-3": "Lesson 7 · Describing people, part 3",
  leccion8: "Lesson 8 · The preterite",
  "leccion8-anexo": "Lesson 8 · The time and the date",
  leccion9: "Lesson 9 · Hacer and irregular pasts",
  leccion10: "Lesson 10 · Ver and venir",
  leccion11: "Lesson 11 · Decir and deber",
  "leccion12-1": "Lesson 12 · Reflexive verbs, part 1",
  "leccion12-2": "Lesson 12 · Reflexive verbs, part 2",
  leccion13: "Lesson 13 · Conocer and poner",
  leccion14: "Lesson 14 · The imperfect",
  leccion15: "Lesson 15 · Questions",
  leccion16: "Lesson 16 · Preterite or imperfect",
  leccion17: "Lesson 17 · Him, her, it, them",
  leccion18: "Lesson 18 · Commands",
  leccion19: "Lesson 19 · Food",
  leccion20: "Lesson 20 · At the restaurant",
  leccion21: "Lesson 21 · Irse, ya, todavía and nunca",
  leccion22: "Lesson 22 · Would",
  leccion23: "Lesson 23 · Travel, por and para",
};

// The lesson whose text (texts.js) a sheet's questions are about: the annex's
// is Lesson 8's.
export const TEXT_OF = { "leccion8-anexo": "leccion8" };

// In course order, for the sidebar.
export const EXERCISE_TITLES = Object.entries(TITLES).map(([id, title]) => ({ id, title }));

// The sidebar's lessons in four stages of the course, one open at a time
// (owner, 2026-11-01: "a better grouping organization for these so that they
// are not all open at the same time"). A lesson with more than one sheet is
// one row that opens to its sheets. Every sheet is in exactly one place, in
// course order (tests/suites/es-exercises.mjs).
const one = (id) => ({ id, title: TITLES[id] });
const parts = (key, title, sheets) => ({ key, title, parts: sheets.map(([id, t]) => ({ id, title: t })) });
export const EXERCISE_GROUPS = [
  { title: "Lessons 1–6 · The present", rows: ["leccion1", "leccion2", "leccion3", "leccion4", "leccion5", "leccion6"].map(one) },
  {
    title: "Lessons 7–11 · People and the past",
    rows: [
      parts("leccion7", "Lesson 7 · Describing people", [["leccion7-1", "Part 1"], ["leccion7-2", "Part 2"], ["leccion7-3", "Part 3"]]),
      parts("leccion8", "Lesson 8 · The preterite", [["leccion8", "The preterite"], ["leccion8-anexo", "The time and the date"]]),
      ...["leccion9", "leccion10", "leccion11"].map(one),
    ],
  },
  {
    title: "Lessons 12–18 · Reflexives to commands",
    rows: [
      parts("leccion12", "Lesson 12 · Reflexive verbs", [["leccion12-1", "Part 1"], ["leccion12-2", "Part 2"]]),
      ...["leccion13", "leccion14", "leccion15", "leccion16", "leccion17", "leccion18"].map(one),
    ],
  },
  { title: "Lessons 19–23 · Food, travel and more", rows: ["leccion19", "leccion20", "leccion21", "leccion22", "leccion23"].map(one) },
];

// Which group holds a sheet, -1 for none (the list of all exercises).
export const exerciseGroupOf = (id) =>
  EXERCISE_GROUPS.findIndex((g) => g.rows.some((r) => r.id === id || r.parts?.some((p) => p.id === id)));
