// The reading of the Spanish lesson sheets (HTML) that scripts/es-exercise-texts.mjs
// and scripts/es-dialogues.mjs share, so a change to the sheets' markup is
// followed in one place.
import fs from "node:fs";
import path from "node:path";

// The folder of the sheets: the one given on the command line, else the main
// checkout's .claude/spanish-lessons/source (the sources aren't in the repository).
export function findSheets(root, given) {
  const candidates = [
    given,
    path.resolve(root, ".claude/spanish-lessons/source"),
    path.resolve(root, "../../spanish-lessons/source"),
  ].filter(Boolean);
  const SRC = candidates.find((p) => fs.existsSync(path.join(p, "leccion1.html")));
  if (!SRC) {
    console.error("Couldn't find the lesson sheets (leccion1.html). Pass their folder.");
    process.exit(1);
  }
  return SRC;
}

const decode = (s) => s
  .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
  .replace(/&quot;/g, '"').replace(/&#39;/g, "'");
export const text = (html) => decode(html.replace(/<br\s*\/?>/g, "\n").replace(/<[^>]+>/g, ""))
  .replace(/[ \t]+/g, " ").replace(/ *\n */g, "\n").replace(/\n{2,}/g, "\n").trim();

// The lines of a sheet's text, each { kind, text, who? }: kind is "title",
// "say" (with who), "para", "scene" or "question". Lines with no text are left out.
export function linesOf(part) {
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
