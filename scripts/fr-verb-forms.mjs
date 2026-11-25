// Writes src/data/exercises/fr/verbForms.js for the French Exercises and
// Dialogues (test app, 2026-11-25; the same job as scripts/verb-forms.mjs
// does for Spanish, owner's rulings of 2026-10-26 and 2026-11-16):
//
//   VERB_FORMS   for every word of the answers that is a verb form, the other
//                forms of the same verb one letter away from it, accents and
//                the cedilla set aside. The answer key reads it to tell a
//                misspelling from a wrong verb form: another real form of the
//                verb, one letter off, is Wrong ("parles" for "parle"); a
//                letter off in a verb that makes no real form is Claude's to
//                judge (a typo is Almost, a made-up form Wrong); a letter off
//                in any other word is Almost ("maisn").
//   ACCENT_FORMS for every such word whose accents tell it from another form
//                of its verb, that other form: "parlé" and "parle", "chantée"
//                and "chante". Only there does an accent count; "a" for "à",
//                "ou" for "où", "ca" for "ça" and "ete" for "été" are no
//                mistake.
//
// The verb forms are the Lefff's French conjugations (npm package
// french-verbs-lefff 3.4.0, 7,826 verbs; LGPL-LR), read for the present and
// the subjunctive, the imperative, the imperfect, the past historic, the
// future, the conditional, the infinitive, the gerund and the past participle
// (its four forms), with the six persons. The imperfect subjunctive
// and the past historic are left out: no lesson teaches them, and their forms
// ("parlât", "fut") are rare and would mark a slip as Wrong where no learner
// meant them.
//
//   node scripts/fr-verb-forms.mjs path/to/conjugations.json
//
// Run it again when the exercises or the dialogues change.

import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "src/data/exercises/fr/verbForms.js");
const jsonPath = process.argv[2];
if (!jsonPath) {
  console.error("usage: node scripts/fr-verb-forms.mjs path/to/conjugations.json");
  process.exit(1);
}

const { bare } = await import(pathToFileURL(join(ROOT, "src/lib/exerciseMarking.js")).href);
const add = (map, k, v) => { if (!map.has(k)) map.set(k, new Set()); map.get(k).add(v); };
// ç is a c, and ñ an n, for the key's comparison (bare() leaves ç alone: NFD
// splits it into c + cedilla, which strips with the accents, so it is the
// same already).
const low = (s) => String(s ?? "").normalize("NFC").toLowerCase().trim();

// Modes kept: present, subjunctive, imperative, imperfect, future, conditional,
// infinitive, gerund, past participle.
const MODES = ["P", "S", "Y", "I", "F", "C", "W", "G", "K"];
const data = JSON.parse(readFileSync(jsonPath, "utf8"));

// Each verb's forms as typed (lower case, accents on) and bare.
const formsOf = new Map();
// The past participle's agreeing forms (parlés, parlée, parlées) are the verb's
// forms too, but a slip in agreement is not another form of the verb: it may
// be just as right (a woman says "je suis allée"), so only Claude can tell. They
// are looked up, never offered as the neighbour of another word.
const agreeing = new Set();
for (const [inf, modes] of Object.entries(data)) {
  for (const m of MODES) (modes[m] || []).forEach((f, i) => {
    const form = low(f);
    if (!form || form === "na" || /\s/.test(form)) return;
    add(formsOf, inf, form);
    if (m === "K" && i > 0) agreeing.add(inf + "\u0000" + form);
  });
}

// Words of the answers that are verb forms only in another sense, far more
// often meant as something else: a letter off in them is Almost, as in any
// other word; and an accent on them is no mistake. Function words, nouns and
// adjectives the Lefff also lists as forms of a verb.
const NOT_VERBS = new Set([
  "a", "ai", "as", "ont", "au", "aux", "ça", "ca", "ce", "ces", "cette", "cet", "ceux", "celle", "celui", "celles",
  "de", "des", "du", "la", "le", "les", "un", "une", "ou", "où", "et", "en", "y", "ne", "pas", "plus", "que", "qui",
  "quoi", "se", "me", "te", "nous", "vous", "lui", "leur", "leurs", "mon", "ma", "mes", "ton", "ta", "tes", "son",
  "sa", "ses", "notre", "nos", "votre", "vos", "sur", "sous", "dans", "par", "pour", "avec", "sans", "chez", "mais",
  "donc", "car", "ni", "si", "ici", "là", "là-bas", "très", "trop", "peu", "bien", "mal", "mieux", "tout", "tous",
  "toute", "toutes", "même", "autre", "autres", "tel", "telle", "quel", "quelle", "quels", "quelles", "pareil",
  "seul", "seule", "seuls", "seules", "vrai", "faux", "fort", "forte", "fortes", "forts", "libre", "libres",
  "tard", "tôt", "souvent", "jamais", "toujours", "encore", "déjà", "aussi", "alors", "après", "avant", "depuis",
  "pendant", "puis", "enfin", "ensuite", "vers", "entre", "contre", "selon", "malgré", "comme", "quand", "comment",
  "pourquoi", "combien", "parce", "quelque", "quelques", "chaque", "plusieurs", "rien", "personne", "aucun",
  "aucune", "gens", "monde", "fois", "temps", "heure", "heures", "jour", "jours", "an", "ans", "année", "années",
  "mois", "semaine", "semaines", "soir", "matin", "midi", "nuit", "fin", "début", "demain", "hier", "aujourd'hui",
  "marché", "côté", "pâtes", "pâte", "cote", "mur", "mûr", "sûr", "sur", "dû", "crû", "mû", "tâche", "tache",
  "sale", "sales", "mène", "ment", "mal", "pique", "porte", "portes", "livre", "livres", "voyage", "voyages",
  "chante", "danse", "joue", "pêche", "pêches", "cuisine", "cuisines", "classe", "classes", "chose", "choses",
  "casse", "boule", "course", "courses", "voile", "voiles", "visite", "visites", "ordre", "pause", "photo",
  "mode", "tour", "tours", "pense", "paie", "paye", "aide", "aides", "cours", "arrêt", "arrêts", "reste", "restes",
  "trace", "traces", "fête", "fêtes", "coupe", "coupes", "doute", "doutes", "reçu", "reçus", "rêve", "rêves",
  "regard", "regards", "retard", "retards", "gagne", "montre", "montres", "garde", "gardes", "marque", "marques",
  "étage", "étages", "bout", "chambre", "chambres", "rentre", "salle", "salles", "pièce", "pièces", "bain",
  "bains", "train", "trains", "vol", "vols", "vente", "ventes", "crise", "crises", "ligne", "lignes", "boîte",
  "valise", "valises", "ville", "villes", "rue", "rues", "chat", "chats", "pain", "pains",
  "banque", "came", "cause", "centre", "cheville", "coiffe", "drogue", "fenêtre", "fiche", "gare", "gauche",
  "grise", "lourde", "manière", "marre", "minute", "minutes", "mètre", "mètres", "neige", "panne", "peinture",
  "phrase", "place", "places", "police", "politique", "pratique", "retraite", "robe", "rose", "roses", "route",
  "seconde", "sièges", "terrasse", "terre", "toilettes", "type", "viande", "élèves", "carré", "carrés",
  "contes", "couples", "have", "like", "love", "bricole", "capte", "interviewe", "manage", "ménage",
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

// Which verbs have a form, bare: bare form -> Set of the verbs' infinitives.
const verbsOf = new Map();
for (const [inf, forms] of formsOf) for (const f of forms) add(verbsOf, bare(f), inf);

// The answers' words, as the key compares them.
const { EXERCISES_BY_ID } = await import(pathToFileURL(join(ROOT, "src/data/exercises/fr/index.js")).href);
const { DIALOGUES_BY_ID } = await import(pathToFileURL(join(ROOT, "src/data/exercises/fr/dialogues.js")).href);
const { plain } = await import(pathToFileURL(join(ROOT, "src/lib/exerciseMarking.js")).href);
const answerWords = new Set();
const answerTokens = new Set(); // as typed (accents on), lower case
// Words that follow a word that only goes before a noun ("une table", "mes
// clés") and never follow a subject pronoun, "ne" or a pronoun before a verb:
// they are nouns, adjectives or English words that the Lefff also lists as
// verb forms, so they are not checked as verbs.
const BEFORE_NOUN = new Set(["un", "une", "des", "du", "mon", "ma", "mes", "ton", "ta", "tes", "son", "sa", "ses", "notre", "nos", "votre", "vos", "ce", "cet", "cette", "ces", "leur", "leurs", "quel", "quelle", "quels", "quelles", "quelques", "chaque", "plusieurs", "the", "a", "an", "my", "your", "his", "her", "our", "their"]);
const BEFORE_VERB = new Set(["je", "j'", "tu", "il", "elle", "on", "nous", "vous", "ils", "elles", "ne", "n'", "qui", "ça", "ce", "c'", "t'", "m'", "s'", "se", "me", "te", "to", "i", "we", "you", "they"]);
const afterNoun = new Map(); // word -> [times after a determiner, times after a pronoun]
for (const sheet of [...Object.values(EXERCISES_BY_ID), ...Object.values(DIALOGUES_BY_ID)]) {
  for (const ex of sheet.exercises || []) for (const item of ex.items || []) {
    const strings = [...(Array.isArray(item.gaps) ? item.gaps.flat() : []), item.answer, ...(Array.isArray(item.also) ? item.also : [])];
    for (const s of strings) if (typeof s === "string") {
      const words = plain(s).split(" ").filter(Boolean);
      words.forEach((w, i) => {
        answerTokens.add(w);
        answerWords.add(bare(w));
        const c = afterNoun.get(w) || [0, 0];
        if (BEFORE_NOUN.has(words[i - 1])) c[0]++;
        else if (BEFORE_VERB.has(words[i - 1]) || BEFORE_VERB.has(w.slice(0, w.lastIndexOf("'") + 1))) c[1]++;
        afterNoun.set(w, c);
      });
    }
  }
}

// A token is its verb form with a clitic before it: "j'ai" is j' + ai, "m'a"
// m' + a, "qu'il" no verb at all. The part after the last apostrophe is what
// to look up; the part before is kept on the neighbours.
const split = (w) => { const i = w.lastIndexOf("'"); return i < 0 ? ["", w] : [w.slice(0, i + 1), w.slice(i + 1)]; };

// Not checked as a verb: a noun by its determiner, an elided d' + word, or a
// word the list above names.
const isNoun = (w) => { const c = afterNoun.get(w); return !!c && c[0] > 0 && c[1] === 0; };
const skip = (w, core) => NOT_VERBS.has(w) || NOT_VERBS.has(core) || core.length < 2 || isNoun(w) || w.startsWith("d'") || w.startsWith("l'agence") || isNoun(core);

const VERB_FORMS = {};
for (const w of [...answerWords].sort()) {
  const [pre, core] = split(w);
  if (skip(w, core)) continue;
  const verbs = verbsOf.get(core);
  if (!verbs) continue;
  const near = new Set();
  for (const inf of verbs) for (const f of formsOf.get(inf)) {
    const b = bare(f);
    if (b !== core && oneLetterOff(core, b) && !agreeing.has(inf + "\u0000" + f)) near.add(pre + b);
  }
  VERB_FORMS[w] = [...near].sort();
}

// A word of the answers whose accents tell it from another form of the same
// verb: its bare form is also a form of a verb it is one of, spelled
// differently. Keyed by the word as the answers have it, accents on.
const ACCENT_FORMS = {};
for (const t of [...answerTokens].sort()) {
  const [, core] = split(t);
  if (skip(t, core)) continue;
  const verbsHere = [...formsOf].filter(([, forms]) => forms.has(core)).map(([inf]) => inf);
  const others = new Set();
  for (const inf of verbsHere) for (const f of formsOf.get(inf)) if (f !== core && bare(f) === bare(core)) others.add(f);
  if (others.size) ACCENT_FORMS[t] = [...others].sort();
}

const render = (name, obj) =>
  `export const ${name} = {\n${Object.entries(obj).map(([k, v]) => `  ${JSON.stringify(k)}: [${v.map((x) => JSON.stringify(x)).join(",")}],`).join("\n")}\n};\n`;
writeFileSync(OUT,
`// For every word of the French exercises' and dialogues' answers that is a verb
// form, the other forms of the same verb one letter away from it, accents set
// aside, as the answer key compares words (VERB_FORMS); and for every such
// word whose accents tell it from another form of its verb, that form
// (ACCENT_FORMS). A word in the first is a verb form; one of its list typed in
// its place is another real form of the verb, so Wrong, not a slip: "parles"
// for "parle". An accent counts only for a word in the second: "parle" for
// "parlé".
//
// Made by scripts/fr-verb-forms.mjs from the Lefff's French conjugations
// (french-verbs-lefff 3.4.0, LGPL-LR) and the answers. Run it again when they
// change.

${render("VERB_FORMS", VERB_FORMS)}
${render("ACCENT_FORMS", ACCENT_FORMS)}`);
console.log(`${Object.keys(VERB_FORMS).length} verb words, ${Object.values(VERB_FORMS).filter((v) => v.length).length} with neighbours; ${Object.keys(ACCENT_FORMS).length} accent words`);
