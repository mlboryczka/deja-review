// The Spanish course in four stages: how its lessons are grouped wherever they
// are listed, on Flashcards and on Exercises alike (owner, 2026-11-07: "make
// sure lessons are grouped the same way"). The stages are named once, here,
// so the two can't drift apart. Grouping only changes how lessons are shown:
// the order cards come in is the catalogue's `lessons` and `meetingOrder`.

const STAGES = [
  { title: "Lessons 1–6 · The present", lessons: [1, 2, 3, 4, 5, 6] },
  { title: "Lessons 7–11 · People and the past", lessons: [7, 8, 9, 10, 11] },
  { title: "Lessons 12–18 · Reflexives to commands", lessons: [12, 13, 14, 15, 16, 17, 18] },
  { title: "Lessons 19–23 · Food, travel and more", lessons: [19, 20, 21, 22, 23] },
];

// leccion7-2 and leccion8-anexo are parts of Lessons 7 and 8.
const lessonNumber = (id) => Number(/^leccion(\d+)/.exec(id)?.[1]);

// Under its lesson's row, "Lesson 7 · Describing people, part 2" is "Part 2"
// and "Lesson 8 · The time and the date" is "The time and the date".
const partName = (title) => {
  const part = /, part (\d+)$/.exec(title);
  return part ? `Part ${part[1]}` : title.split(" · ")[1];
};

// `lessons` is [{ id, title }], in course order. A lesson with more than one
// part (Lessons 7 and 12 on both sides, and Lesson 8 on Exercises, which has a
// sheet for the time and the date) is one row that opens to its parts:
//   [{ title, rows: [{ id, title } | { key, title, parts: [{ id, title }] }] }]
export const stagesOf = (lessons) =>
  STAGES.map((stage) => ({
    title: stage.title,
    rows: stage.lessons.flatMap((n) => {
      const parts = lessons.filter((l) => lessonNumber(l.id) === n);
      if (parts.length < 2) return parts.map(({ id, title }) => ({ id, title }));
      return [{
        key: `leccion${n}`,
        title: parts[0].title.replace(/, part \d+$/, ""),
        parts: parts.map(({ id, title }) => ({ id, title: partName(title) })),
      }];
    }),
  })).filter((stage) => stage.rows.length > 0);

// Every lesson in a stage, parts and all, in course order.
export const stageIds = (stage) => stage.rows.flatMap((r) => (r.parts ? r.parts.map((p) => p.id) : [r.id]));

// Which stage holds a lesson, -1 for none.
export const stageOf = (stages, id) => (stages || []).findIndex((stage) => stageIds(stage).includes(id));
