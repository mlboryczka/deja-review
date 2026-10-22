// Writes src/data/lessons/es/index.js, the Spanish module's catalogue, from
// the lesson files in that folder, in course order. Run after adding a
// Spanish lesson file:  node scripts/es-lessons-index.mjs
import fs from "node:fs";
import path from "node:path";

const dir = path.resolve(path.dirname(new URL(import.meta.url).pathname), "../src/data/lessons/es");
// The course order: Lesson 7 and Lesson 12 are in parts, as Laura's Leçon 6
// and Leçon 11 are.
const ORDER = [
  "leccion1", "leccion2", "leccion3", "leccion4", "leccion5", "leccion6",
  "leccion7-1", "leccion7-2", "leccion7-3", "leccion8", "leccion9", "leccion10",
  "leccion11", "leccion12-1", "leccion12-2", "leccion13", "leccion14", "leccion15",
  "leccion16", "leccion17", "leccion18", "leccion19", "leccion20", "leccion21",
  "leccion22", "leccion23",
];
// ONLY=leccion1,leccion2 limits it to those, for a preview while the others
// are still being written.
const only = (process.env.ONLY || "").split(",").filter(Boolean);
const have = ORDER.filter((id) => fs.existsSync(path.join(dir, `${id}.js`)) && (!only.length || only.includes(id)));
const name = (id) => id.replace("-", "_");
const groups = [
  ["Lessons 1 to 8", (n) => n <= 8],
  ["Lessons 9 to 16", (n) => n >= 9 && n <= 16],
  ["Lessons 17 to 23", (n) => n >= 17],
].map(([title, test]) => ({ title, ids: have.filter((id) => test(Number(id.match(/\d+/)[0]))) }))
  .filter((g) => g.ids.length);

const out = `// The Spanish module's lessons (test app, owner 2026-10-22): the 23-lesson
// Latin American Spanish course adapted from Laura Caufour's LFL METHOD, in
// Google Drive under Español / "New Lessons to Review". Written by
// scripts/es-lessons-index.mjs; run it again after adding a lesson file.
//
// Every lesson starts in every Spanish deck, as the French ones do in the
// French deck. Lessons 1 to 6 come up on Cards without a choice
// (lib/lessonChoice.js): the owner has covered them with Laura.

${have.map((id) => `import ${name(id)} from "./${id}.js";`).join("\n")}
import { makeCatalogue } from "../catalogue.js";

export const SPANISH = makeCatalogue({
  lessons: [${have.map(name).join(", ")}],
  meetingOrder: ${JSON.stringify(have)},
  groups: ${JSON.stringify(groups.map((g) => ({ title: g.title, folds: true, ids: g.ids })))},
});

export default SPANISH;
`;
fs.writeFileSync(path.join(dir, "index.js"), out);
console.log(`es/index.js: ${have.length} of ${ORDER.length} lessons`);
