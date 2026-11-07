// The Spanish caderno: Laura's Google Doc of the owner's Spanish classes
// ("Caderno español"), read by the same sync as the French cahier
// (api/cahier-sync.js with course "es", 2026-11-02: the owner, of a caderno
// that keeps itself up to date, "Yes, build it").
//
// What differs from the French cahier is here: how a class's date is
// written, and what Claude is asked to make of a class. Everything else, the
// record of lines read, the turn, the matching against the deck and the one
// step that saves, is the French code on the Spanish tables
// (api/_lib/notesReading.js, NOTES_TABLES.es).
//
// The doc is Laura's French template filled in Spanish: one table per class,
// newest first, under a date line such as "27 de octubre", with no year.
// Its headings are sometimes French ("Vocabulaire", "Grammaire"), sometimes
// Spanish ("Vocabulario", "Gramatica"), and each class ends with "Para la
// próxima vez", the homework. Laura's notes have slips, as class notes do: a
// French word ("30 = trente"), a dropped accent ("me bañe"), a mistake
// crossed out and the correction written after it ("Fui a el al
// restaurante"; the doc's plain text keeps both).
//
// What becomes a card follows the Spanish flashcards (owner, 2026-10-25:
// "the flashcards module for the spanish section should be all words and
// phrases, no grammar… i have the exercises for those"): words and phrases
// only, no conjugation tables, rules or sound notes, no card whose only job
// is the masculine or feminine, and no question to answer with yes or no.

import { NEW_LINES_NOTE } from "../parse-cahier.js";

const MONTHS_ES = {
  enero: "01", febrero: "02", marzo: "03", abril: "04", mayo: "05", junio: "06",
  julio: "07", agosto: "08", septiembre: "09", setiembre: "09", octubre: "10",
  noviembre: "11", diciembre: "12",
};

// A class's date line: "27 de octubre", "El 27 de octubre", "Lunes 27 de
// octubre", "27 de octubre de 2026", and a class over two days, "27 y 28 de
// octubre", dated its first day as in French.
const DATE_LINE = /^(?:(?:el|los)\s+)?(?:(?:lunes|martes|mi[eé]rcoles|jueves|viernes|s[aá]bado|domingo),?\s+)?(\d{1,2})(?:\s*(?:,|y|&|-)\s*\d{1,2})*\s+de\s+([a-z]+)(?:\s+(?:de|del)?\s*(\d{4}))?\s*$/i;

// The year of a date line that gives none: this year, unless that puts the
// class more than a month after today, as "28 de diciembre" read on 3
// January would. A class can't be from the future.
function yearFor(month, day, now) {
  const year = now.getFullYear();
  const then = new Date(`${year}-${month}-${day}T12:00:00`);
  return then.getTime() - now.getTime() > 31 * 24 * 3600 * 1000 ? year - 1 : year;
}

// The caderno's classes, as [{ date: "2026-10-27", text }], in the order the
// doc gives them, like sliceIntoBlocks for the French cahier.
export function sliceCaderno(rawText, { now = new Date() } = {}) {
  const blocks = [];
  let current = null;
  for (const line of String(rawText || "").split(/\r?\n/)) {
    const m = line.trim().normalize("NFC").match(DATE_LINE);
    const month = m && MONTHS_ES[m[2].toLowerCase()];
    if (m && month) {
      if (current) blocks.push(current);
      const day = m[1].padStart(2, "0");
      current = { date: `${m[3] || yearFor(month, day, now)}-${month}-${day}`, text: "" };
    } else if (current) {
      current.text += line + "\n";
    }
  }
  if (current) blocks.push(current);
  return blocks
    .map((b) => ({ date: b.date, text: withoutHomework(b.text).trim() }))
    .filter((b) => b.text.length > 20);
}

function withoutHomework(text) {
  const at = text.search(/Para la pr[oó]xima vez\s*:?/i);
  return at === -1 ? text : text.slice(0, at);
}

export const CADERNO_PROMPT = `You are making flashcards from one class of an English speaker's Spanish lessons. The notes are the teacher's: Latin American Spanish, the Spanish of Mexico (ustedes, never vosotros).

The class is set out in a table with headings such as "Vocabulario" / "Vocabulaire", "Expresiones" / "Expressions", "Gramática" / "Grammaire" and "Prononciation". The headings may be in French; the lesson is Spanish. Do not decide anything by which heading an item sits under.

The student sees one side of a card and TYPES the other, and the app checks it. Every card is a Spanish word, phrase or sentence on the front and its English on the back.

WHAT BECOMES A CARD:
- Every Spanish word, expression, phrase or example sentence in the notes, wherever it sits, including the example sentences under a grammar heading ("ser (permanent) Soy americano" gives "Soy americano").
- A list of separate words on one line (the days of the week, "allá, ahí") gives one card per word. Numbers written "30 = treinta" give the Spanish word: front "treinta", back "thirty / 30".
- Two ways of saying ONE thing stay one card, joined by " / ": "de nuevo / otra vez" = "again".

WHAT NEVER BECOMES A CARD (the grammar is practised elsewhere in the app):
- A conjugation table or a list of one verb's forms ("quiero, quieres, quiere…", "cantar canto cantas…"). Make no card from any of its lines, not even the infinitive heading it.
- A rule, pattern or formula: "de + el = del", "Futuro: yo voy a + infinitivo", "Presente = yo hablo", lists of possessives such as "mi, mis / tu, tus / su, sus", a gustar table such as "(a mí) me gusta, (a ti) te gusta…", a contrast such as "Es/Está" or "Fue/Estuvo". A full example sentence a rule gives is still a card ("yo voy a comer" = "I'm going to eat").
- A pronunciation note ("b / v").
- A card whose only point is the masculine or feminine form, or a question answered with yes or no.
- Headings, the notebook's title, homework and the teacher's notes to the student.

WRITE EACH CARD CORRECTLY:
- Spanish exactly right, with every accent, ñ, ¿ and ¡. Class notes have slips: correct them. "me bañe" is "Me bañé", "Que hiciste ?" is "¿Qué hiciste?", "una preguntas" is "una pregunta", "un parillada" is "una parrillada", "restaurant" is "restaurante". A French word slipped in is put in Spanish: "30 = trente" is "treinta". A word struck through in the notes still shows in the text, followed by its correction: "Fui a el al restaurante" is "Fui al restaurante". A grammar slip is corrected too: "I have danced: He bailando" is "He bailado", "la viaje" is "el viaje", "es una viaje muy larga" is "Es un viaje muy largo", "prefiro" is "Prefiero", "2 veces al dia" is "dos veces al día". Check every word's spelling and gender against standard Spanish: never copy a mistake, however it is written in the notes.
- Each answer between " / " is a whole answer the student could type on its own: "Le dije eso" = "I told him that / I told her that / I told you that (usted)", never "I told him / her / you that". Give only true translations, never an awkward or literal one: "¿Estás viendo?" = "Are you watching? (tú)".
- A brackets note such as (tú) goes at the end of an answer, never inside it.
- A sentence starts with a capital; a word or short expression does not.
- A noun keeps the article the notes give it ("la niña", "un hijo"). A verb is given as the notes give it, usually the infinitive.
- The English back lists the answers to accept, separated by " / ", the most natural one FIRST: the app shows only the first. "Tuve una reunión" = "I had a meeting". Where "you" could be tú, usted or ustedes, say which in brackets at the end of the first answer: "¿Qué hiciste?" = "What did you do? (tú)".
- "category": "V" for a single word or a short expression of up to three words ("la fecha", "andar en bici", "ni tanto"), "E" for a phrase or sentence ("Fui al trabajo caminando").
- No full stop at the end of either side. Keep ? and ! where the Spanish has them.
- Do not invent cards: only what the notes teach.

Return ONLY a JSON array, no preamble and no markdown fences: [{"front": "...", "back": "...", "category": "V" | "E"}, ...]. If the class has nothing to make a card from, return [].

Here is the class:

---
{BLOCK_TEXT}
---`;

// Not Haiku, as the French reading is: nobody looks over what this adds, and
// in its first real read Haiku kept Laura's "la viaje" and "prefiro" and wrote
// "I told him / her / you that" (2026-11-07).
export const CADERNO_MODEL = "claude-sonnet-5-5";

export function cadernoPrompt(block) {
  const prompt = CADERNO_PROMPT.replace("{BLOCK_TEXT}", block.text);
  const lines = Array.isArray(block.newLines) ? block.newLines.filter((l) => typeof l === "string" && l.trim()) : [];
  if (!lines.length) return prompt;
  return `${prompt}\n\n${NEW_LINES_NOTE.replace("{NEW_LINES}", lines.map((l) => `- ${l.trim()}`).join("\n"))}`;
}

// One class read by Claude, as cards carrying its date.
export async function extractCadernoCards(anthropic, block) {
  const response = await anthropic.messages.create({
    model: CADERNO_MODEL,
    max_tokens: 4000,
    messages: [{ role: "user", content: cadernoPrompt(block) }],
  });
  const text = (response.content || []).find((c) => c.type === "text")?.text;
  if (!text) throw new Error("Claude returned no text block");
  let parsed;
  try {
    parsed = JSON.parse(text.trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, ""));
  } catch {
    throw new Error(`Claude returned non-JSON: ${text.slice(0, 200)}`);
  }
  if (!Array.isArray(parsed)) throw new Error("Claude did not return a JSON array");
  return parsed
    .filter((c) => c && typeof c.front === "string" && typeof c.back === "string")
    .map((c) => ({ front: c.front.trim(), back: c.back.trim(), category: c.category === "V" ? "V" : "E", dates: [block.date] }))
    .filter((c) => c.front && c.back);
}

const noFinalStop = (s) => String(s).replace(/\s*\.+$/, "").trim();

// What Claude made, as the cards that are written: no full stop at the end,
// nothing whose two sides are the same, and one card per Spanish side (the
// deck holds one card per front, and a save holding two is refused whole).
// A front made twice in one reading keeps its first English and every class
// date.
export function cadernoCardsFromExtracted(raw) {
  const byFront = new Map();
  for (const c of raw || []) {
    const front = noFinalStop(c?.front || "");
    const back = noFinalStop(c?.back || "");
    if (!front || !back || front.toLowerCase() === back.toLowerCase()) continue;
    const have = byFront.get(front);
    if (have) { have.dates = [...new Set([...have.dates, ...(c.dates || [])])].sort(); continue; }
    byFront.set(front, { front, back, category: c.category === "V" ? "V" : "E", dates: [...new Set(c.dates || [])].sort(), source: "cahier-upload" });
  }
  return [...byFront.values()];
}
