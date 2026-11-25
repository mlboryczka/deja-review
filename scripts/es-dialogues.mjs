// Writes src/data/exercises/es/dialogueTexts.js: each Spanish lesson's text
// (its dialogue, story or profile) with the sheet's own English, sentence by
// sentence, for the Dialogues module (owner, 2026-11-07).
//
//   node scripts/es-dialogues.mjs [<folder of the lesson sheets' HTML>]
//
// The folder defaults to the main checkout's .claude/spanish-lessons/source,
// where the course's HTML sources are kept (they are not in the repository).
//
// A line of the text and the same line of the sheet's Traducción page are cut
// into sentences the same way, and paired in order. A line whose two sides
// don't come out with the same number of sentences stops the script: pairing
// them by guesswork would ask for the wrong Spanish.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { findSheets, linesOf } from "./lib/lessonSheets.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const SRC = findSheets(root, process.argv[2]);

// A sentence ends at . ! ? or … before a capital, with any ¿ ¡ or quotation
// mark in between: "Ay, qué mal… Pero a ver" is two, "Pero espere… ¿usted me
// dio esos expedientes?" one. "Mr." and the like end nothing, and nor does …
// before the English "I" ("Hmm… I think"), whose capital says nothing. A line
// break ends one too (a profile's "Edad: 28 años").
const TITLE_DOT = /\b(?:Mr|Mrs|Ms|Dr|Sr|Sra|Srta|Dra)\.$/;
function sentencesOf(line) {
  const out = [];
  for (const row of line.split("\n")) {
    let open = false;
    for (const piece of row.split(/(?<=[.!?…])\s+(?=[¿¡"“]*[A-ZÁÉÍÓÚÑ])/u)) {
      const goesOn = open || (out.length > 0 && out[out.length - 1].endsWith("…") && /^I\b/.test(piece));
      if (goesOn) out[out.length - 1] += ` ${piece}`;
      else out.push(piece);
      open = TITLE_DOT.test(piece);
    }
  }
  return out;
}

// A one-word sentence ("¡Claro!", "Okay.") goes with the sentence after it,
// or the one before it at the end of a line: on its own it would be a box to
// type one word into. A line of nothing else stays as it is.
const oneWord = (s) => s.trim().split(/\s+/).length === 1;
function joinShort(pairs) {
  const out = [];
  let held = null;
  for (const p of pairs) {
    const cur = held ? { en: `${held.en} ${p.en}`, es: `${held.es} ${p.es}` } : p;
    held = null;
    if (oneWord(cur.en) || oneWord(cur.es)) held = cur;
    else out.push(cur);
  }
  if (held) {
    const last = out[out.length - 1];
    if (last) { last.en += ` ${held.en}`; last.es += ` ${held.es}`; }
    else out.push(held);
  }
  return out;
}

const problems = [];
const out = {};
const files = fs.readdirSync(SRC)
  .filter((f) => /^leccion[\d-]+\.html$/.test(f))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
for (const f of files) {
  const id = f.replace(/\.html$/, "");
  const html = fs.readFileSync(path.join(SRC, f), "utf8");
  const firstHeading = html.indexOf('<h2 class="big"');
  const start = html.lastIndexOf('class="objective"', firstHeading);
  if (start < 0 || firstHeading < 0) continue;
  const spanish = linesOf(html.slice(html.indexOf("</p>", start) + 4, firstHeading));
  const translation = html.search(/<h2 class="big">\s*Traducci/i);
  if (!spanish.length || translation < 0) continue; // Lesson 15 has no text.
  const after = html.slice(translation + 10);
  const next = after.search(/<h2 class="big"/);
  const english = linesOf(next >= 0 ? after.slice(0, next) : after);

  const titleEs = spanish.find((l) => l.kind === "title");
  const titleEn = english.find((l) => l.kind === "title");
  const es = spanish.filter((l) => l.kind !== "title");
  const en = english.filter((l) => l.kind !== "title");
  if (es.length !== en.length) {
    problems.push(`${id}: ${es.length} lines of Spanish, ${en.length} of English`);
    continue;
  }
  const lines = es.map((l, i) => {
    const s = sentencesOf(l.text);
    const t = sentencesOf(en[i].text);
    if (l.kind !== en[i].kind || s.length !== t.length) {
      const kinds = l.kind !== en[i].kind ? `a ${l.kind} line in Spanish, a ${en[i].kind} line in English; ` : "";
      problems.push(`${id}, line ${i + 1}: ${kinds}${s.length} sentences of Spanish, ${t.length} of English\n  ${l.text}\n  ${en[i].text}`);
    }
    return {
      kind: l.kind,
      ...(l.who ? { who: en[i].who, whoEs: l.who } : null),
      sentences: joinShort(s.map((sentence, j) => ({ en: t[j] ?? "", es: sentence }))),
    };
  });
  out[id] = {
    ...(titleEs ? { title: titleEn?.text || titleEs.text, titleEs: titleEs.text } : null),
    lines,
  };
}

if (problems.length) {
  console.error(`The English and the Spanish don't pair:\n${problems.join("\n")}`);
  process.exit(1);
}

const body = `// Each Spanish lesson's text with the sheet's own English, sentence by
// sentence, for the Dialogues module (dialogues.js). Written by
// scripts/es-dialogues.mjs from the course's HTML sources; run it again if a
// lesson's text changes.
//
// A line is { kind, who, whoEs, sentences: [{ en, es }] }, its kind "say",
// "scene", "question" or "para". A sentence's place here is what its answers
// are kept under, so a sentence added or taken out moves the ones after it.

export const DIALOGUE_TEXTS = ${JSON.stringify(out, null, 1)};

export default DIALOGUE_TEXTS;
`;
const target = path.join(root, "src/data/exercises/es/dialogueTexts.js");
fs.writeFileSync(target, body);
const counts = Object.entries(out).map(([id, t]) => [id, t.lines.reduce((n, l) => n + l.sentences.length, 0)]);
console.log(`Wrote ${Object.keys(out).length} texts, ${counts.reduce((n, [, c]) => n + c, 0)} sentences.`);
console.log(counts.map(([id, c]) => `${id}:${c}`).join("  "));
