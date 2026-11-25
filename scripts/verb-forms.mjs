// Writes src/data/lessons/es/verbForms.js: for every word of the Spanish
// exercises' and dialogues' answers that is a verb form, the other forms of
// the same verb one letter away from it. The answer key reads it to tell a
// misspelling from a wrong verb form (owner, 2026-11-15, of "pones" marked
// Almost where usted needs "pone": "you have to be able to discern a
// misspelling from an inaccurate verb form"; 2026-11-16, the rule agreed):
//
//   another real form of the verb, one letter off, is Wrong: "pones" for
//   "pone", "trabajo" for "trabajé", "se vistan" for "se visten"
//   a letter off in a verb that makes no real form is Claude's to judge: a
//   typo ("caminaro") is Almost, a made-up form ("fuemos") is Wrong
//   a letter off in any other word is Almost, as before ("quando")
//
// The verb forms are Fred Jehle's Spanish verb conjugation database (637
// verbs; CC BY-NC-SA 3.0, github.com/ghidinelli/fred-jehle-spanish-verbs),
// read as scripts/tense-accents.mjs reads it: every simple tense, the
// imperative, the infinitive, the gerund and the past participle, without
// vosotros, as in the lessons. A regular -ar verb of the lessons that the
// database lacks is conjugated here.
//
//   node scripts/verb-forms.mjs path/to/jehle_verb_database.csv
//
// Run it again when the exercises or the dialogues change.

import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "src/data/lessons/es/verbForms.js");
const csvPath = process.argv[2];
if (!csvPath) {
  console.error("usage: node scripts/verb-forms.mjs path/to/jehle_verb_database.csv");
  process.exit(1);
}

const { plain, bare } = await import(pathToFileURL(join(ROOT, "src/lib/exerciseMarking.js")).href);
const low = (s) => String(s ?? "").normalize("NFC").toLowerCase().trim();
const add = (map, k, v) => { if (!map.has(k)) map.set(k, new Set()); map.get(k).add(v); };

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

// Each verb's forms, accents and the ñ's tilde set aside, as the key compares.
const formsOf = new Map();
const [head, ...rows] = parseCsv(readFileSync(csvPath, "utf8")).filter((r) => r.length > 1);
const col = Object.fromEntries(head.map((h, i) => [h, i]));
for (const r of rows) {
  const inf = low(r[col.infinitive]);
  for (const k of ["infinitive", "gerund", "pastparticiple"]) if (low(r[col[k]])) add(formsOf, inf, bare(r[col[k]]));
  if (!TENSES.has(`${r[col.mood_english]}/${r[col.tense_english]}`)) continue;
  for (const p of PERSONS) {
    // "no te acuestes" → acuestes, "me acuesto" → acuesto.
    const form = low(r[col[p]]).replace(/^no\s+/, "").replace(/^(me|te|se|nos|os)\s+/, "");
    if (form && !/\s/.test(form)) add(formsOf, inf, bare(form));
  }
}
// The regular -ar verbs of the lessons the database lacks (tense-accents.mjs).
const MORE_AR = [
  "actualizar", "apurar", "bromear", "cambiar", "comparar", "completar", "concentrar", "documentar",
  "engordar", "imaginar", "ordenar", "pasear", "preocupar", "quitar", "reaccionar", "reemplazar",
  "rentar", "revisar", "surfear", "transformar",
];
for (const inf of MORE_AR) {
  if (formsOf.has(inf)) continue;
  const stem = inf.slice(0, -2);
  const e = stem.endsWith("c") ? stem.slice(0, -1) + "qu" : stem.endsWith("g") ? stem + "u" : stem.endsWith("z") ? stem.slice(0, -1) + "c" : stem;
  for (const f of [
    inf, stem + "ando", stem + "ado",
    ...["o", "as", "a", "amos", "an"].map((x) => stem + x),
    e + "é", ...["aste", "ó", "amos", "aron"].map((x) => stem + x),
    ...["e", "es", "emos", "en"].map((x) => e + x),
    ...["aba", "abas", "ábamos", "aban"].map((x) => stem + x),
    ...["aré", "arás", "ará", "aremos", "arán"].map((x) => stem + x),
    ...["aría", "arías", "aríamos", "arían"].map((x) => stem + x),
    ...["ara", "aras", "áramos", "aran"].map((x) => stem + x),
  ]) add(formsOf, inf, bare(f));
}

// Words of the answers that are verb forms only in another sense, far more
// often meant as something else: "para" (for), "libres" (free), "tarde"
// (late). A letter off in them is Almost, as in any other word.
const NOT_VERBS = new Set([
  "para", "como", "entre", "sobre", "bajo", "baja", "bajos", "bajas", "solo", "sola", "nada", "cerca",
  "media", "medio", "tarde", "tardes", "libre", "libres", "claro", "clara", "junto", "juntos", "junta",
  "juntas", "listo", "lista", "listos", "listas", "casa", "casas", "cuenta", "seco", "seca", "lleno",
  "llena", "limpio", "limpia", "vale", "mira", "oye", "pues", "cama", "camas", "planta", "plantas",
  "carga", "cargo", "paso", "pasos", "peso", "pesos", "cambio", "trabajo", "trabajos", "viaje", "viajes",
  "baile", "bailes", "regreso", "estudio", "estudios", "dibujo", "dibujos", "pago", "gasto", "gastos",
  "desayuno", "almuerzo", "cena", "cenas", "compra", "compras", "vuelta", "vuelo", "vuelos", "llegada",
  "salida", "comida", "comidas", "bebida", "bebidas", "visita", "visitas", "pregunta", "preguntas",
  "respuesta", "respuestas", "ayuda", "llamada", "fin", "duda", "dudas", "queja", "quejas", "cuento",
  "cuentos", "nado", "beso", "besos", "abrazo", "abrazos", "plano", "planes", "copia", "copias",
]);

// Every verb form one letter from another of the same verb.
function oneLetterOff(a, b) {
  const [s, l] = a.length <= b.length ? [a, b] : [b, a];
  if (a === b || l.length - s.length > 1) return false;
  let i = 0;
  while (i < s.length && s[i] === l[i]) i++;
  if (s.length < l.length) return s.slice(i) === l.slice(i + 1);
  return s.slice(i + 1) === l.slice(i + 1) || (s[i] === l[i + 1] && s[i + 1] === l[i] && s.slice(i + 2) === l.slice(i + 2));
}
const allForms = new Set();
const neighbours = new Map();
for (const forms of formsOf.values()) {
  const list = [...forms];
  for (const f of list) allForms.add(f);
  for (let i = 0; i < list.length; i++) for (let j = i + 1; j < list.length; j++) {
    if (oneLetterOff(list[i], list[j])) { add(neighbours, list[i], list[j]); add(neighbours, list[j], list[i]); }
  }
}

// The answers' words, as the key compares them.
const { EXERCISES_BY_ID } = await import(pathToFileURL(join(ROOT, "src/data/exercises/es/index.js")).href);
const { DIALOGUES_BY_ID } = await import(pathToFileURL(join(ROOT, "src/data/exercises/es/dialogues.js")).href);
const answerWords = new Set();
for (const sheet of [...Object.values(EXERCISES_BY_ID), ...Object.values(DIALOGUES_BY_ID)]) {
  for (const ex of sheet.exercises || []) for (const item of ex.items || []) {
    const strings = [...(Array.isArray(item.gaps) ? item.gaps.flat() : []), item.answer, ...(Array.isArray(item.also) ? item.also : [])];
    for (const s of strings) if (typeof s === "string") for (const w of bare(s).split(" ")) if (w) answerWords.add(w);
  }
}

// A word with pronouns on its end is its verb's form with them: "levantate"
// (levántate) is levanta + te, "sentirse" sentir + se, "damelo" da + me + lo.
const CLITIC = /(me|te|se|nos|lo|la|le|los|las|les)$/;
function formWithClitics(w) {
  if (allForms.has(w)) return { base: w, end: "" };
  for (let rest = w, end = ""; CLITIC.test(rest) && rest.length > 4; ) {
    const c = rest.match(CLITIC)[1];
    rest = rest.slice(0, -c.length);
    end = c + end;
    if (allForms.has(rest)) return { base: rest, end };
  }
  return null;
}

const entries = [];
for (const w of [...answerWords].sort()) {
  if (NOT_VERBS.has(w) || w.length < 2 || /\d/.test(w)) continue;
  const found = formWithClitics(w);
  if (!found) continue;
  const near = [...(neighbours.get(found.base) || [])].map((n) => n + found.end).filter((n) => n !== w).sort();
  entries.push([w, near]);
}

const body = entries.map(([w, near]) => `  ${JSON.stringify(w)}: ${JSON.stringify(near)},`).join("\n");
writeFileSync(OUT, `// For every word of the Spanish exercises' and dialogues' answers that is a
// verb form, the other forms of the same verb one letter away from it, accents
// and the ñ's tilde set aside, as the answer key compares words. A word here
// is a verb form; one of its list typed in its place is another real form of
// the verb, so Wrong, not a slip (owner, 2026-11-16): "pones" for "pone".
//
// Made by scripts/verb-forms.mjs from Fred Jehle's Spanish verb conjugation
// database (CC BY-NC-SA 3.0) and the answers. Run it again when they change.

export const VERB_FORMS = {
${body}
};
`);
const pairs = entries.reduce((n, [, near]) => n + near.length, 0);
console.log(`${formsOf.size} verbs; ${answerWords.size} answer words, ${entries.length} of them verb forms, ${pairs} forms one letter away`);
for (const w of ["pone", "visten", "trabaje", "fuimos", "caminaron", "sentirse", "levanto", "debe", "sabe", "quiere"]) console.log(" ", w, "→", JSON.stringify(entries.find(([x]) => x === w)?.[1] ?? "not a verb form here"));
console.log(`wrote ${OUT}`);
