// Writes the French Dialogues module's data from the sheets' texts (test app,
// 2026-11-25; owner: "extend the spanish dialogue and exercises modules to
// french"):
//   src/data/exercises/fr/dialogueTexts.js  each lesson's text, sentence by
//       sentence, her French with her own English from the TRADUCTION page
//   src/data/exercises/fr/texts.js          the same text as lines for the
//       tutor and for Claude's marking (as Spanish's texts.js)
//
//   node scripts/fr-dialogues.mjs path/to/dialogues-folder
//
// The folder holds one JSON per text, written from Laura's sheets:
//   { id, title, titleFr, lines: [{ kind: "say"|"scene"|"question"|"para",
//     who?, whoFr?, sentences: [{ en, fr }] }] }
// (the copy used on 2026-11-25 is .claude/french-exercises/dialogues). Run it
// again if a text changes: a sentence's place is what its answers are kept
// under, so a sentence added or taken out moves the ones after it.

import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const dir = process.argv[2];
if (!dir) { console.error("usage: node scripts/fr-dialogues.mjs path/to/dialogues-folder"); process.exit(1); }

const { TITLES } = await import(join(ROOT, "src/data/exercises/fr/titles.js"));
const texts = {};
for (const id of Object.keys(TITLES)) {
  let d;
  try { d = JSON.parse(readFileSync(join(dir, `${id}.json`), "utf8")); } catch { continue; }
  texts[id] = {
    title: d.title,
    titleFr: d.titleFr,
    lines: d.lines.map((l) => ({
      kind: l.kind,
      ...(l.who ? { who: l.who, whoFr: l.whoFr } : null),
      sentences: l.sentences.map((s) => ({ en: s.en, fr: s.fr })),
    })),
  };
}
const unknown = readdirSync(dir).filter((f) => f.endsWith(".json") && !TITLES[f.replace(/\.json$/, "")]);
if (unknown.length) { console.error(`Texts for no sheet: ${unknown.join(", ")}`); process.exit(1); }

writeFileSync(join(ROOT, "src/data/exercises/fr/dialogueTexts.js"),
`// Each French lesson's text with her own English, sentence by sentence, for
// the Dialogues module (dialogues.js). Written by scripts/fr-dialogues.mjs from
// Laura Caufour's sheets; run it again if a text changes.
//
// A line is { kind, who, whoFr, sentences: [{ en, fr }] }, its kind "say",
// "scene", "question" or "para". A sentence's place here is what its answers
// are kept under, so a sentence added or taken out moves the ones after it.

export const DIALOGUE_TEXTS = ${JSON.stringify(texts, null, 1)};
`);

const lines = {};
for (const [id, t] of Object.entries(texts)) {
  const out = [{ title: t.titleFr }];
  for (const l of t.lines) {
    const text = l.sentences.map((s) => s.fr).join(" ");
    out.push(l.kind === "scene" ? { scene: text } : l.kind === "question" ? { question: text } : l.who ? { who: l.whoFr || l.who, text } : { text });
  }
  lines[id] = out;
}
writeFileSync(join(ROOT, "src/data/exercises/fr/texts.js"),
`// Each French lesson's text (its dialogue or story): given to the tutor, and
// to Claude when it marks a question about the text or a sentence of it
// (Dialogues). Written by scripts/fr-dialogues.mjs from the same texts as
// dialogueTexts.js; run it again if a text changes.
//
// Each line is { title }, { scene }, { question }, { who, text } or { text }.

export const LESSON_TEXTS = ${JSON.stringify(lines, null, 1)};
`);
console.log(`${Object.keys(texts).length} texts, ${Object.values(texts).reduce((n, t) => n + t.lines.reduce((m, l) => m + l.sentences.length, 0), 0)} sentences`);
