// The French side of a card should be French.
//
// Cahier lines often carry an inline English gloss — "je suis allé (I went
// (passé composé))" — and the parser has sometimes kept that gloss on the
// front. When it does, the card hands you the answer before you've answered
// it, which is worse than useless: FSRS records a recall you never made.
//
// Rather than migrate thousands of existing rows (and risk mangling the ones
// that are fine), we strip the gloss at the moment the French side is used as
// a *prompt*. The stored row is untouched, and the answer side still shows
// everything.
//
// The test for "this is a gloss, not French" is overlap: if a parenthetical on
// the French side repeats a content word from the English side, it is giving
// the answer away. Grammar tags — (adj), (f), (pl), (passé composé) — are
// exempt, because they are legitimate disambiguators even when the English
// side happens to mention them too.

const GRAMMAR_TAG =
  /^(adj|adv|adje?ctif|n|nom|v|verbe?|f|m|fem|femin(in)?|masc(ulin)?|pl|plur(iel|al)?|sg|sing(ulier)?|nf|nm|inf|infinitif|pp|p\.p\.|part(icipe)?( passé)?|passé( composé)?|imparfait|futur|présent|conditionnel|subjonctif|impératif|fam|familier|litt|litteraire|littéraire)\.?$/i;

function contentWords(s) {
  return (s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .split(/[^a-z0-9']+/)
    .filter((w) => w.length >= 3);
}

// Top-level "(...)" spans, tolerant of the unbalanced parentheses these
// malformed cards tend to have ("je suis allé (I went (passé)" never closes
// its outer group). An unclosed group runs to the end of the string.
function parentheticals(text) {
  const spans = [];
  let depth = 0;
  let start = -1;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === "(") {
      if (depth === 0) start = i;
      depth++;
    } else if (ch === ")") {
      if (depth > 0) {
        depth--;
        if (depth === 0) {
          spans.push([start, i + 1]);
          start = -1;
        }
      }
    }
  }
  if (depth > 0 && start !== -1) spans.push([start, text.length]);
  return spans;
}

export function cleanFrenchPrompt(fr, en) {
  if (!fr || !en || !fr.includes("(")) return fr;

  const answerWords = new Set(contentWords(en));
  if (answerWords.size === 0) return fr;

  const spans = parentheticals(fr);
  let out = fr;
  let changed = false;

  // Right to left, so earlier spans keep their indices.
  for (let i = spans.length - 1; i >= 0; i--) {
    const [s, e] = spans[i];
    const inner = fr.slice(s + 1, e).replace(/[()]/g, "").trim();
    if (!inner || GRAMMAR_TAG.test(inner)) continue;
    if (!contentWords(inner).some((w) => answerWords.has(w))) continue;
    out = out.slice(0, s) + out.slice(e);
    changed = true;
  }

  if (!changed) return fr;
  // Tidy up the hole we just left, and any parenthesis orphaned by it.
  const tidied = out.replace(/\s{2,}/g, " ").replace(/\s+([,;.!?])/g, "$1").trim();
  return tidied || fr;
}

// The English side, when IT is the prompt, must not name the French answer.
//
// Cahier backs carry grammar notes like "to re-elect (past participle: réélu)".
// Shown after the French they are useful; shown as the question they hand you
// a French form of the word you are being asked to produce. Only notes of
// that shape go: a form note naming the form. "(past participle)" on its own,
// "(fam)" and "(of products)" are disambiguators and stay.
const FORM_NOTE = /\s*\((?:past participle|p\.?p\.?|participe(?: passé)?)\s*:[^)]*\)?/gi;

export function cleanEnglishPrompt(en) {
  if (!en) return en;
  const out = en.replace(FORM_NOTE, "").replace(/\s{2,}/g, " ").trim();
  return out || en;
}

// One answer shown on a Spanish card (owner, 2026-10-25: "one version of the
// correct translation is fine"). A lesson card lists every answer a teacher
// would accept, separated by " / ", so that any of them typed is marked right;
// shown on the card, the list is clutter: "¿Ustedes son de Nueva York?" showed
// six. Only the first is shown. Marking reads the card itself, so it still
// takes them all.
//
// A note in brackets after the last answer usually pins down the whole card:
// "What's your name? / What are you called? (tú)" keeps "(tú)". It stays
// unless it is about the last answer alone: "They are teachers / You are
// teachers (ustedes)" names who "you" is, "(US)" a usage and "to love
// (someone)" an object, so those go, as does a note the first answer already
// says ("It went well for me" needs no "(for me)").
const ALL_CARD_NOTE = /\(([^()]*)\)$/;
const YOU = /\byour?\b/i;

export function firstAnswer(text) {
  if (!text || !String(text).includes(" / ")) return text;
  const answers = String(text).split(" / ").map((a) => a.trim()).filter(Boolean);
  const first = answers[0];
  if (answers.length < 2 || ALL_CARD_NOTE.test(first)) return first;
  const last = answers[answers.length - 1];
  const note = last.match(ALL_CARD_NOTE);
  if (!note) return first;
  const inner = note[1].trim();
  const onlyLast =
    /^(US|UK|someone)$/.test(inner) ||
    first.toLowerCase().includes(inner.toLowerCase()) ||
    (/\b(tú|usted|ustedes)\b/i.test(inner) && YOU.test(last) && !YOU.test(first));
  return onlyLast ? first : `${first} ${note[0]}`;
}

// Cards are headwords and phrases, not prose, so a sentence-final full stop is
// noise — and an inconsistent one, since most cards never had it. Dropped at
// display time for the same reason the gloss is: no migration, and a lesson
// card's identity is a hash of its front, so editing the stored text would
// retire the card. Ellipses, "etc." and ? / ! are left alone, and so is a
// stop in the middle of a card.
export function dropFinalPeriod(text) {
  if (!text) return text;
  return String(text)
    .replace(/(?<![.…]|\betc)\.(?=\s*(?:\/|\(|$))/gi, "")
    .replace(/\s+(?=\/)/g, " ")
    .trim();
}
