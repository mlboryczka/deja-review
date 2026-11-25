// Writes src/data/exercises/es/texts.js: each Spanish lesson's text (its
// dialogue, story or profile, the part of the lesson sheet before the
// grammar), for the tutor and for Claude when it marks a question about the
// text.
//
//   node scripts/es-exercise-texts.mjs [<folder of the lesson sheets' HTML>]
//
// The folder defaults to the main checkout's .claude/spanish-lessons/source,
// where the course's HTML sources are kept (they are not in the repository).

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { findSheets, linesOf } from "./lib/lessonSheets.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const SRC = findSheets(root, process.argv[2]);

const out = {};
for (const f of fs.readdirSync(SRC).filter((f) => /^leccion[\d-]+\.html$/.test(f)).sort()) {
  const id = f.replace(/\.html$/, "");
  const html = fs.readFileSync(path.join(SRC, f), "utf8");
  const start = html.lastIndexOf('class="objective"', html.indexOf('<h2 class="big"'));
  const end = html.indexOf('<h2 class="big"');
  if (start < 0 || end < 0) continue;
  const part = html.slice(html.indexOf("</p>", start) + 4, end);
  const kept = linesOf(part).map((l) =>
    l.kind === "title" ? { title: l.text } : l.kind === "scene" ? { scene: l.text } : l.kind === "question" ? { question: l.text }
      : l.kind === "say" ? { who: l.who, text: l.text } : { text: l.text });
  if (kept.length) out[id] = kept;
}

const body = `// Each Spanish lesson's text (its dialogue, story or profile): the part of
// the lesson sheet before the grammar. Given to the tutor, and to Claude when it
// marks a question about the text or a sentence of it (Dialogues).
// Written by scripts/es-exercise-texts.mjs from the course's HTML sources;
// run it again if a lesson's text changes.
//
// Each line is { title }, { scene }, { question }, { who, text } or { text }.

export const LESSON_TEXTS = ${JSON.stringify(out, null, 1)};

export default LESSON_TEXTS;
`;
fs.writeFileSync(path.join(root, "src/data/exercises/es/texts.js"), body);
console.log(`Wrote texts for ${Object.keys(out).length} lessons from ${SRC}.`);
