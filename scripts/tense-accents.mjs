// Writes src/data/lessons/es/tenseAccents.js: the Spanish words whose accent
// counts when an answer is marked (owner, 2026-10-26: "the accents shouldn't
// be a criteria for marking something incorrect, unless the word NEEDS the
// accent (for instance to determine the proper tense)"). They are the words
// of the Spanish lessons and exercises that are a verb form spelled like
// another form of the same verb but for an accent: "habló" (he spoke) and
// "hablo" (I speak), "hablé" and "hable", "hablará" and "hablara", "envió"
// and "envío". Every other accent, and the ñ, is forgiven: "estan" is right
// for están, "esta de mal humor" for "está de mal humor".
//
// The verb forms are Fred Jehle's Spanish verb conjugation database (637
// verbs; CC BY-NC-SA 3.0, github.com/ghidinelli/fred-jehle-spanish-verbs),
// every simple tense but the future subjunctive ("hablare", which nobody
// writes now, so it can only be hablaré), and without vosotros, as in the
// lessons. An -ar verb of the lessons that the database doesn't have is
// conjugated here as a regular verb, and printed so it can be checked.
//
//   node scripts/tense-accents.mjs path/to/jehle_verb_database.csv
//
// Run it again when the lessons or the exercises change.

import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "src/data/lessons/es/tenseAccents.js");
const csvPath = process.argv[2];
if (!csvPath) {
  console.error("usage: node scripts/tense-accents.mjs path/to/jehle_verb_database.csv");
  process.exit(1);
}

const low = (s) => String(s ?? "").normalize("NFC").toLowerCase();
const bare = (s) => low(s).normalize("NFD").replace(/[̀-ͯ]/g, "").normalize("NFC");
const add = (map, k, v) => { if (!map.has(k)) map.set(k, new Set()); map.get(k).add(v); };

// ── The database's simple tenses, verb by verb ───────────────────────────
function parseCsv(text) {
  const rows = [];
  let row = [], field = "", quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') quoted = false;
      else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ",") { row.push(field); field = ""; }
    else if (c === "\n") { row.push(field); rows.push(row); row = []; field = ""; }
    else if (c !== "\r") field += c;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  return rows;
}

const TENSES = new Set([
  "Indicative/Present", "Indicative/Preterite", "Indicative/Imperfect", "Indicative/Future", "Indicative/Conditional",
  "Subjunctive/Present", "Subjunctive/Imperfect",
  "Imperative Affirmative/Present", "Imperative Negative/Present",
]);
const PERSONS = ["form_1s", "form_2s", "form_3s", "form_1p", "form_3p"];

const [head, ...rows] = parseCsv(readFileSync(csvPath, "utf8")).filter((r) => r.length > 1);
const col = Object.fromEntries(head.map((h, i) => [h, i]));
const formsOf = new Map();
for (const r of rows) {
  if (!TENSES.has(`${r[col.mood_english]}/${r[col.tense_english]}`)) continue;
  for (const p of PERSONS) {
    // "no te acuestes" → acuestes, "me acuesto" → acuesto.
    const form = low(r[col[p]]).trim().replace(/^no\s+/, "").replace(/^(me|te|se|nos|os)\s+/, "");
    if (form && !/\s/.test(form)) add(formsOf, low(r[col.infinitive]), form);
  }
}

// ── The lessons' and exercises' words, and their verbs ───────────────────
async function stringsIn(dir) {
  const out = [];
  const seen = new WeakSet();
  const walk = (v) => {
    if (typeof v === "string") { out.push(v); return; }
    if (!v || typeof v !== "object" || seen.has(v)) return;
    seen.add(v);
    for (const x of v instanceof Map || v instanceof Set ? v.values() : Object.values(v)) walk(x);
  };
  for (const f of readdirSync(dir).filter((f) => f.endsWith(".js") && f !== "tenseAccents.js").sort()) {
    walk(await import(pathToFileURL(join(dir, f)).href));
  }
  return out;
}
const lessonStrings = await stringsIn(join(ROOT, "src/data/lessons/es"));
const exerciseStrings = await stringsIn(join(ROOT, "src/data/exercises/es"));
const words = new Set([...lessonStrings, ...exerciseStrings].flatMap((s) => low(s).match(/\p{L}+/gu) || []));

// The lessons' verbs: a card "trabajar" = "to work" ("cambiar de opinión" =
// "to change your mind" gives cambiar), a verb an exercise names in
// brackets, "(preferir)", and the regular -ar verbs below.
const INF = /^[a-zñáéíóúü]+(?:ar|er|ir)(?:se)?$/;
const verbs = new Set();
for (const s of exerciseStrings) for (const m of low(s).matchAll(/\(([a-zñáéíóúü]+(?:ar|er|ir)(?:se)?)\)/g)) verbs.add(m[1]);
const lessonDir = join(ROOT, "src/data/lessons/es");
for (const f of readdirSync(lessonDir).filter((f) => /^leccion/.test(f))) {
  const mod = await import(pathToFileURL(join(lessonDir, f)).href);
  for (const card of mod.CARDS || []) {
    const first = Array.isArray(card) ? low(card[0]).trim().split(/\s+/)[0] : "";
    if (INF.test(first) && /^to /i.test(String(card[1] || "").trim())) verbs.add(first);
  }
}
// Regular -ar verbs of the lessons and exercises that the database doesn't
// have, found by a word of theirs ("engordé", "revisé", "rentar"). encerrar
// isn't here: it is encierro in the present, so encerró has no twin there.
// When the lessons change, words ending in -ar that the database lacks are
// printed below, to add the verbs among them.
const MORE_AR = [
  "actualizar", "apurar", "bromear", "cambiar", "comparar", "completar", "concentrar", "documentar",
  "engordar", "imaginar", "ordenar", "pasear", "preocupar", "quitar", "reaccionar", "reemplazar",
  "rentar", "revisar", "surfear", "transformar",
];
for (const v of MORE_AR) verbs.add(v);
// Words of the lessons that are a verb form with a twin, but in another
// sense: "frío" is cold there, not "I fry" (freír).
const OTHER_SENSE = new Set(["frío"]);

// An -ar verb the database lacks, as a regular verb: c, g and z change
// before e (busqué, llegué, crucé).
function regularAr(inf) {
  const stem = inf.replace(/se$/, "").slice(0, -2);
  const e = stem.endsWith("c") ? stem.slice(0, -1) + "qu" : stem.endsWith("g") ? stem + "u" : stem.endsWith("z") ? stem.slice(0, -1) + "c" : stem;
  return [
    ...["o", "as", "a", "amos", "an"].map((x) => stem + x),
    e + "é", ...["aste", "ó", "amos", "aron"].map((x) => stem + x),
    ...["e", "es", "emos", "en"].map((x) => e + x),
    ...["aba", "abas", "ábamos", "aban"].map((x) => stem + x),
    ...["aré", "arás", "ará", "aremos", "arán"].map((x) => stem + x),
    ...["aría", "arías", "aríamos", "arían"].map((x) => stem + x),
    ...["ara", "aras", "áramos", "aran"].map((x) => stem + x),
  ];
}
const conjugated = [];
for (const v of [...verbs].sort()) {
  const inf = v.replace(/se$/, "");
  if (formsOf.has(v) || formsOf.has(inf) || formsOf.has(inf + "se")) continue;
  if (!inf.endsWith("ar")) continue;
  for (const f of regularAr(inf)) add(formsOf, inf, f);
  conjugated.push(inf);
}

// ── The forms spelled like another form of their verb but for an accent ──
const twinsOf = new Map();
for (const [inf, forms] of formsOf) {
  const byBare = new Map();
  for (const f of forms) add(byBare, bare(f), f);
  for (const group of byBare.values()) {
    if (group.size < 2) continue;
    for (const f of group) for (const g of group) if (g !== f) add(twinsOf, f, `${g} (${inf})`);
  }
}
const found = [...words].filter((w) => twinsOf.has(w) && !OTHER_SENSE.has(w)).sort((a, b) => bare(a).localeCompare(bare(b)) || a.localeCompare(b));

console.log(`${formsOf.size} verbs, ${twinsOf.size} forms with a twin, ${found.length} of them in the lessons and exercises`);
if (conjugated.length) console.log(`conjugated as regular -ar verbs (not in the database): ${conjugated.join(", ")}`);
const unknownAr = [...words].filter((w) => /^[a-zñáéíóúü]{3,}ar$/.test(w) && !formsOf.has(w) && !formsOf.has(w + "se")).sort();
if (unknownAr.length) console.log(`words ending in -ar that are no verb here (add any verb among them to MORE_AR): ${unknownAr.join(", ")}`);
for (const w of found) console.log(`  ${w}  ~  ${[...twinsOf.get(w)].join(", ")}`);

const lines = [];
let line = "";
for (const w of found) {
  const item = `"${w}", `;
  if ((line + item).length > 78) { lines.push(line.trimEnd()); line = ""; }
  line += item;
}
if (line) lines.push(line.trimEnd());
writeFileSync(OUT, `// The Spanish words whose accent counts when an answer is marked (owner,
// 2026-10-26: "the accents shouldn't be a criteria for marking something
// incorrect, unless the word NEEDS the accent (for instance to determine the
// proper tense)"): each is a verb form spelled like another form of the same
// verb but for an accent, "habló" (he spoke) and "hablo" (I speak), "hablé"
// and "hable", "hablará" and "hablara". Any other accent, and the ñ, is
// forgiven (src/lib/spanishAccents.js).
//
// Made by scripts/tense-accents.mjs from Fred Jehle's Spanish verb
// conjugation database (CC BY-NC-SA 3.0) and the words of the Spanish lessons
// and exercises. Run it again when they change.

export const TENSE_ACCENT_WORDS = new Set([
${lines.map((l) => "  " + l).join("\n")}
]);
`);
console.log(`wrote ${OUT}`);
