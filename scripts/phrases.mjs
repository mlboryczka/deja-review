// How often a card's French is said, counted as a whole phrase (2026-10-14).
// Pure: no files, no database. scripts/count-phrases.mjs feeds it Lexique and
// the subtitles; tests/suites/phrases.mjs feeds it a few lines of each.
//
// The owner: older cards come most-said first, each card "considered as a
// whole phrase as 'avoir besoin de' is a very common phrase". So a card is
// matched in running French as the sequence of its words:
//
//   "avoir besoin de"     a word in its dictionary form counts in all its
//                         forms: "j'ai besoin de", "elle avait besoin d'aide"
//   "je serais"           a word written in a particular form counts in that
//                         form: "je serais", not "je suis"
//   "un poste"            an article and one word: the article only shows
//                         the gender, and the word is the noun in all its
//                         forms, "le poste", "des postes"; "le pouvoir"
//                         counts "pouvoirs", not "je peux". Before more words
//                         the article stands for any: "le mauvais choix"
//                         counts "un mauvais choix", "un de plus" never
//                         counts "de plus"
//   "se rendre compte"    in a phrase, "se" stands for any of me/te/se/nous/
//                         vous ("je me rends compte"), and "son/sa/ses" for any
//                         possessive ("perdre son temps", "perdre mon temps")
//   "appeler quelqu'un"   after a verb, "quelqu'un" or "quelque chose" (qqn,
//                         qqch) stands for whoever or whatever: the phrase
//                         ends before it, "appeler"
//   "énervé / fâché"      choices, each counted; the card takes the most said.
//                         So are a list of single words, with or without an
//                         article ("épais, épaisse", "un chien, une chienne"),
//                         and a slash inside a phrase ("faire/avoir confiance"
//                         is "faire confiance" or "avoir confiance"); an
//                         article on its own ("le/la peintre") isn't a choice
//
// A spelling that is a form of more than one word ("suis": être or suivre)
// counts for each by its share of that spelling in the subtitles, from
// Lexique, so "suivre" isn't credited with every "je suis". A word spelled
// as the card spells it always counts in full: "est" in "c'est" though
// Lexique also has "est" for the east, "sens" in "je sens" though it has "le
// sens". "œ" and "oe" are the same letters.
//
// What isn't matched: a word put between the card's words, as a compound tense
// does ("j'ai eu besoin de"). Every card is undercounted that way alike.
// A grammar drill ("vivre (présent) → je"), a note ("cela = ça") or a pattern
// ("le/la seul(e) + nom") isn't a phrase, and isn't counted.

const LETTERS = "a-zàâäæçéèêëîïôœùûüÿ0-9";
const WORD = new RegExp(`[${LETTERS}]+'|[${LETTERS}]+(?:-[${LETTERS}]+)*`, "g");

// An elided word and the word it stands for.
const ELISION = new Map(Object.entries({
  "j'": "je", "l'": "le", "d'": "de", "qu'": "que", "n'": "ne", "s'": "se", "c'": "ce", "m'": "me", "t'": "te",
  "jusqu'": "jusque", "lorsqu'": "lorsque", "puisqu'": "puisque", "quoiqu'": "quoique", "presqu'": "presque",
}));
// A card's first word that only shows the gender or number.
const ARTICLES = new Set(["le", "la", "les", "l'", "un", "une", "des", "du"]);
// Words that change with the person. In a card's phrase the dictionary form,
// "se" or "son/sa/ses", stands for all of its kind in running French.
const REFLEXIVE = new Set(["me", "m'", "te", "t'", "se", "s'", "nous", "vous"]);
const POSSESSIVE = new Set(["mon", "ton", "son", "ma", "ta", "sa", "mes", "tes", "ses", "notre", "votre", "leur", "nos", "vos", "leurs"]);
const AS_REFLEXIVE = new Set(["se", "s'"]);
const AS_POSSESSIVE = new Set(["son", "sa", "ses"]);
// Any article, or any word in its place, before more words of a card.
const DETERMINERS = new Set([...ARTICLES, "de", "d'", "au", "aux", "ce", "cet", "cette", "ces", ...POSSESSIVE]);
const CLASS_REFLEXIVE = -1, CLASS_POSSESSIVE = -2, CLASS_DETERMINER = -3;
// Whoever or whatever, after a verb.
const PLACEHOLDERS = new Set(["quelqu'un", "qqn", "qqch", "qn", "qch", "qqc"]);

// Lower case, one way of writing each letter.
const plain = (text) => String(text || "").toLowerCase().normalize("NFC").replace(/[’‘`]/g, "'").replace(/œ/g, "oe").replace(/æ/g, "ae");

// Running French as words: lower case, curly apostrophes straightened, an
// elided word kept with its apostrophe ("j'" then "ai"), except where the
// whole is a word of its own ("aujourd'hui").
export function words(text, lex) {
  const s = plain(text);
  const out = s.match(WORD) || [];
  for (let i = 0; i + 1 < out.length; i++) {
    if (out[i].endsWith("'") && lex?.spellings.has(out[i] + out[i + 1])) out.splice(i, 2, out[i] + out[i + 1]);
  }
  return out;
}

// Lexique (its TSV, columns named in the first line) as what matching needs.
// Every word Lexique knows has an id, and so does every noun ("N|" before it)
// and every spelling ("=" before it). For each spelling: the ids it counts
// for, each with its share of that spelling (freqfilms2, the spelling's
// frequency in subtitles as that word): a word's share among the words it can
// be, a noun's share of every use of the spelling; the word it is the
// dictionary form of, and the spelling itself, with a share of 1. And the
// noun each spelling most often is, and the verbs.
export function readLexique(tsv) {
  const lines = tsv.split("\n");
  const head = lines[0].split("\t");
  const col = (name) => head.indexOf(name);
  const [ORTHO, LEMME, CGRAM, FREQ] = [col("ortho"), col("lemme"), col("cgram"), col("freqfilms2")];
  const ids = new Map();
  const id = (key) => { let i = ids.get(key); if (i === undefined) { i = ids.size; ids.set(key, i); } return i; };
  // spelling -> { plain: Map(id -> frequency), noun: Map(id -> frequency), all: frequency, n: readings }
  const raw = new Map();
  const lemmas = new Set(); // words that are their own dictionary form
  const verbs = new Set(); // verbs, in their dictionary form
  const nouns = new Map(); // spelling -> { id, f }
  for (let k = 1; k < lines.length; k++) {
    const c = lines[k].split("\t");
    if (c.length <= Math.max(ORTHO, LEMME, CGRAM, FREQ)) continue;
    const form = plain(c[ORTHO]), lemma = plain(c[LEMME]), f = Number(c[FREQ]) || 0;
    if (!form || !lemma) continue;
    if (form === lemma) lemmas.add(lemma);
    if (form === lemma && (c[CGRAM] === "VER" || c[CGRAM] === "AUX")) verbs.add(lemma);
    if (!raw.has(form)) raw.set(form, { plain: new Map(), noun: new Map(), all: 0, n: 0, nouns: 0 });
    const r = raw.get(form);
    r.all += f;
    r.n++;
    const i = id(lemma);
    r.plain.set(i, (r.plain.get(i) || 0) + f);
    if (c[CGRAM] === "NOM") {
      const n = id(`N|${lemma}`);
      r.noun.set(n, (r.noun.get(n) || 0) + f);
      r.nouns++;
      const b = nouns.get(form);
      if (!b || f > b.f) nouns.set(form, { id: n, f });
    }
  }
  // Lexique's tagging gives "suis" to suivre nearly half the time; in speech
  // it is almost always être. So a spelling that can be être or avoir counts
  // for them alone, apart from its nouns ("été", the summer, keeps its share).
  const AUX = new Set([id("être"), id("avoir")]);
  const spellings = new Map();
  for (const [form, r] of raw) {
    const out = new Map();
    if ([...r.plain.keys()].some((i) => AUX.has(i))) {
      for (const i of [...r.plain.keys()]) if (!AUX.has(i)) r.plain.delete(i);
    }
    const total = [...r.plain.values()].reduce((s, f) => s + f, 0);
    for (const [i, f] of r.plain) out.set(i, total > 0 ? f / total : 1 / r.plain.size);
    for (const [i, f] of r.noun) out.set(i, r.all > 0 ? f / r.all : r.nouns / r.n);
    if (lemmas.has(form)) out.set(id(form), 1);
    out.set(id(`=${form}`), 1);
    spellings.set(form, out);
  }
  return { ids, id, spellings, lemmas, verbs, nouns };
}

// What a word of running French counts for, with its share.
function sharesOfWord(w, lex) {
  const full = ELISION.get(w) || w;
  return lex.spellings.get(full) || new Map([[lex.id(`=${full}`), 1]]);
}

// What a word of a card stands for: its kind, for a word that changes with the
// person; the noun, right after an article; the word in all its forms, when
// written in its dictionary form; else that spelling.
function cardElement(w, lex, inPhrase, asNoun) {
  if (inPhrase && AS_REFLEXIVE.has(w)) return CLASS_REFLEXIVE;
  if (inPhrase && AS_POSSESSIVE.has(w)) return CLASS_POSSESSIVE;
  const full = ELISION.get(w) || w;
  if (asNoun && lex.nouns.has(full)) return lex.nouns.get(full).id;
  if (lex.lemmas.has(full)) return lex.id(full);
  return lex.id(`=${full}`);
}

// One word, or an article and one word: an item of a list.
const listItem = (piece) => {
  const ws = piece.trim().split(/\s+/).filter(Boolean);
  return ws.length === 1 || (ws.length === 2 && ARTICLES.has(plain(ws[0])));
};

// A card's phrases: one per choice, each a list of what its words stand for.
// None for a drill, a note or a pattern.
export function phrasesOf(front, lex) {
  const text = String(front || "").replace(/\([^)]*\)|\[[^\]]*\]/g, " ");
  if (/[→=+]/.test(text)) return [];
  // Choices: " / " or ";" between whole phrases; a comma between the items
  // of a list.
  const choices = [];
  for (const part of text.split(/\s+\/\s+|\s*;\s*/)) {
    const pieces = part.split(",");
    const list = pieces.length > 1 && pieces.every((p) => p.trim() && listItem(p));
    for (const p of list ? pieces : [part]) choices.push(p);
  }
  // A slash inside a phrase swaps one word: every combination is a choice.
  const variants = [];
  for (const c of choices) {
    let ways = [""];
    for (const token of c.trim().split(/\s+/)) {
      const alts = token.split("/").filter(Boolean);
      ways = ways.flatMap((w) => alts.map((a) => `${w} ${a}`)).slice(0, 16);
    }
    variants.push(...ways);
  }
  const out = [];
  for (const v of variants) {
    let ws = words(v, lex);
    if (ws.length === 1 && ARTICLES.has(ws[0])) continue;
    // An article and one word: the noun.
    if (ws.length === 2 && ARTICLES.has(ws[0])) { out.push([cardElement(ws[1], lex, false, true)]); continue; }
    // After a verb, whoever or whatever ends the phrase.
    const verb = AS_REFLEXIVE.has(ws[0]) ? 1 : 0;
    if (lex.verbs.has(ws[verb])) {
      const at = ws.findIndex((w, i) => i > verb && (PLACEHOLDERS.has(w) || (w === "quelque" && ws[i + 1] === "chose")));
      if (at > 0) ws = ws.slice(0, at);
    }
    // Before more words, an article stands for any.
    const article = ws.length > 2 && ARTICLES.has(ws[0]);
    if (ws.length && ws.length <= 10) out.push(ws.map((w, i) => (article && i === 0 ? CLASS_DETERMINER : cardElement(w, lex, ws.length > 1, false))));
  }
  return out;
}

export const phraseKey = (phrase) => phrase.join(",");

// Counts each phrase in lines of running French, every place its words follow
// one another, each place weighted by the shares of the spellings it takes.
// `phrases` is [phrase]; result() gives { counts: Map key -> n, words }.
export function counter(phrases, lex) {
  // Phrases by their first word. One starting with a kind of word ("se",
  // "son", any article) by the kind and its second word, so a common
  // "le" or "de" doesn't try every phrase that starts with any article.
  const byFirst = new Map();
  const byKindThen = new Map();
  const counts = new Map();
  const file = (map, k, e) => { if (!map.has(k)) map.set(k, []); map.get(k).push(e); };
  for (const p of phrases) {
    const key = phraseKey(p);
    if (counts.has(key)) continue;
    counts.set(key, 0);
    if (p[0] >= 0) file(byFirst, p[0], { p, key });
    else {
      if (!byKindThen.has(p[0])) byKindThen.set(p[0], new Map());
      file(byKindThen.get(p[0]), p[1], { p, key });
    }
  }
  const KINDS = [[CLASS_REFLEXIVE, REFLEXIVE], [CLASS_POSSESSIVE, POSSESSIVE], [CLASS_DETERMINER, DETERMINERS]];
  const shareOf = (el, w, shares) =>
    el === CLASS_REFLEXIVE ? (REFLEXIVE.has(w) ? 1 : 0)
    : el === CLASS_POSSESSIVE ? (POSSESSIVE.has(w) ? 1 : 0)
    : el === CLASS_DETERMINER ? (DETERMINERS.has(w) ? 1 : 0)
    : shares.get(el) || 0;
  let total = 0;
  const cache = new Map();
  const sharesOf = (w) => { let r = cache.get(w); if (!r) { r = sharesOfWord(w, lex); if (cache.size < 2e6) cache.set(w, r); } return r; };
  return {
    add(line) {
      const ws = words(line, lex);
      total += ws.length;
      const shares = ws.map(sharesOf);
      for (let i = 0; i < ws.length; i++) {
        const starts = [];
        for (const [x, share] of shares[i]) { const s = byFirst.get(x); if (s) for (const e of s) starts.push([e, share]); }
        for (const [kind, words] of KINDS) {
          const then = byKindThen.get(kind);
          if (!then || !words.has(ws[i]) || i + 1 >= ws.length) continue;
          for (const [x] of shares[i + 1]) { const s = then.get(x); if (s) for (const e of s) starts.push([e, 1]); }
          for (const [kind2, words2] of KINDS) if (words2.has(ws[i + 1])) for (const e of then.get(kind2) || []) starts.push([e, 1]);
        }
        for (const [{ p, key }, first] of starts) {
          if (i + p.length > ws.length) continue;
          let weight = first;
          for (let j = 1; j < p.length && weight > 0; j++) weight *= shareOf(p[j], ws[i + j], shares[i + j]);
          if (weight > 0) counts.set(key, counts.get(key) + weight);
        }
      }
    },
    result: () => ({ counts, words: total }),
  };
}

// Fewer than this many times in the subtitles, and a card can't be ordered by
// how often it's said: it keeps its place (src/lib/sessionQueue.js).
export const MIN_TIMES = 5;

// A card's number: per million words, from its most-said choice; 0 when that
// choice is said fewer than MIN_TIMES times, or the card has no phrase.
export function saidPerMillion(front, lex, { counts, words: total }) {
  let best = 0;
  for (const p of phrasesOf(front, lex)) best = Math.max(best, counts.get(phraseKey(p)) || 0);
  return best >= MIN_TIMES && total > 0 ? (best / total) * 1e6 : 0;
}
