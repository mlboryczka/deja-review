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

// The same reading of a sheet's text as scripts/es-exercise-texts.mjs, for
// either page of it.
function linesOf(part) {
  const lines = [];
  const re = /<div class="dialogue-title">([\s\S]*?)<\/div>|<div class="who[^"]*">([\s\S]*?)<\/div>\s*<div class="say[^"]*">([\s\S]*?)<\/div>|<div class="profile">([\s\S]*?)<\/div>\s*(?=<|$)|<p(?: class="([a-z-]+)")?>([\s\S]*?)<\/p>/g;
  let m;
  while ((m = re.exec(part))) {
    if (m[1] !== undefined) lines.push({ kind: "title", text: text(m[1]) });
    else if (m[2] !== undefined) lines.push({ kind: "say", who: text(m[2]), text: text(m[3]) });
    else if (m[4] !== undefined) {
      const name = /<div class="name">([\s\S]*?)<\/div>/.exec(m[4]);
      if (name) lines.push({ kind: "title", text: text(name[1]) });
      lines.push({ kind: "para", text: text(m[4].replace(/<div class="name">[\s\S]*?<\/div>/, "")) });
    } else if (m[5] === "scene") lines.push({ kind: "scene", text: text(m[6]) });
    else if (m[5] === "q") lines.push({ kind: "question", text: text(m[6]) });
    else if (!m[5] || m[5] === "a") lines.push({ kind: "para", text: text(m[6]) });
  }
  return lines.filter((l) => l.text);
}

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
      problems.push(`${id}, line ${i + 1}: ${s.length} sentences of Spanish, ${t.length} of English\n  ${l.text}\n  ${en[i].text}`);
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
