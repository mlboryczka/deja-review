// Laura's French beginner course in four stages of five lessons, each moving
// on to a new kind of grammar, as the Spanish course has its four
// (es/stages.js; owner, 2026-11-13: "great do it"). Grouping only changes how
// lessons are shown, on the Lessons page, in the sidebar and on Stats: the
// order cards come in is the catalogue's `lessons` and `meetingOrder`.
// Lessons outside the course, such as L'impératif, are in no stage: each is
// its own subject (owner, 2026-11-13), so they follow the stages one by one.

const STAGES = [
  { title: "Lessons 1–5 · The present", lessons: [1, 2, 3, 4, 5] },
  { title: "Lessons 6–10 · Describing and the past", lessons: [6, 7, 8, 9, 10] },
  { title: "Lessons 11–15 · Se verbs and the imperfect", lessons: [11, 12, 13, 14, 15] },
  { title: "Lessons 16–20 · Pronouns to the conditional", lessons: [16, 17, 18, 19, 20] },
];

// `lessons` is the catalogue's lessons. The stages in the shape the sidebar
// takes for Spanish (es/stages.js): [{ title, rows: [{ id, title }] }].
export const frenchStagesOf = (lessons) =>
  STAGES.map((stage) => ({
    title: stage.title,
    rows: stage.lessons
      .map((n) => lessons.find((l) => l.id === `lecon${n}`))
      .filter(Boolean)
      .map(({ id, title }) => ({ id, title })),
  })).filter((stage) => stage.rows.length > 0);
