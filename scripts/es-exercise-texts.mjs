// Writes src/data/exercises/es/texts.js: each Spanish lesson's text (its
// dialogue, story or profile, the part of the lesson sheet before the
// grammar), for the Exercises page's "Lesson text" and for Claude when it
// marks a question about the text.
//
//   node scripts/es-exercise-texts.mjs [<folder of the lesson sheets' HTML>]
//
// The folder defaults to the main checkout's .claude/spanish-lessons/source,
// where the course's HTML sources are kept (they are not in the repository).

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const candidates = [
  process.argv[2],
  path.resolve(root, ".claude/spanish-lessons/source"),
  path.resolve(root, "../../spanish-lessons/source"),
].filter(Boolean);
const SRC = candidates.find((p) => fs.existsSync(path.join(p, "leccion1.html")));
if (!SRC) {
  console.error("Couldn't find the lesson sheets (leccion1.html). Pass their folder.");
  process.exit(1);
}

const decode = (s) => s
  .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
  .replace(/&quot;/g, '"').replace(/&#39;/g, "'");
const text = (html) => decode(html.replace(/<br\s*\/?>/g, "\n").replace(/<[^>]+>/g, ""))
  .replace(/[ \t]+/g, " ").replace(/ *\n */g, "\n").replace(/\n{2,}/g, "\n").trim();

const out = {};
for (const f of fs.readdirSync(SRC).filter((f) => /^leccion[\d-]+\.html$/.test(f)).sort()) {
  const id = f.replace(/\.html$/, "");
  const html = fs.readFileSync(path.join(SRC, f), "utf8");
  const start = html.lastIndexOf('class="objective"', html.indexOf('<h2 class="big"'));
  const end = html.indexOf('<h2 class="big"');
  if (start < 0 || end < 0) continue;
  const part = html.slice(html.indexOf("</p>", start) + 4, end);
  const lines = [];
  const re = /<div class="dialogue-title">([\s\S]*?)<\/div>|<div class="who[^"]*">([\s\S]*?)<\/div>\s*<div class="say[^"]*">([\s\S]*?)<\/div>|<div class="profile">([\s\S]*?)<\/div>\s*(?=<|$)|<p(?: class="([a-z-]+)")?>([\s\S]*?)<\/p>/g;
  let m;
  while ((m = re.exec(part))) {
    if (m[1] !== undefined) lines.push({ title: text(m[1]) });
    else if (m[2] !== undefined) lines.push({ who: text(m[2]), text: text(m[3]) });
    else if (m[4] !== undefined) {
      const name = /<div class="name">([\s\S]*?)<\/div>/.exec(m[4]);
      if (name) lines.push({ title: text(name[1]) });
      lines.push({ text: text(m[4].replace(/<div class="name">[\s\S]*?<\/div>/, "")) });
    } else if (m[5] === "scene") lines.push({ scene: text(m[6]) });
    else if (m[5] === "q") lines.push({ question: text(m[6]) });
    else if (!m[5] || m[5] === "a") lines.push({ text: text(m[6]) });
  }
  const kept = lines.filter((l) => Object.values(l).some((v) => v));
  if (kept.length) out[id] = kept;
}

const body = `// Each Spanish lesson's text (its dialogue, story or profile): the part of
// the lesson sheet before the grammar. Shown on the Exercises page as "Lesson
// text", and given to Claude when it marks a question about the text.
// Written by scripts/es-exercise-texts.mjs from the course's HTML sources;
// run it again if a lesson's text changes.
//
// Each line is { title }, { scene }, { question }, { who, text } or { text }.

export const LESSON_TEXTS = ${JSON.stringify(out, null, 1)};

export default LESSON_TEXTS;
`;
fs.writeFileSync(path.join(root, "src/data/exercises/es/texts.js"), body);
console.log(`Wrote texts for ${Object.keys(out).length} lessons from ${SRC}.`);
