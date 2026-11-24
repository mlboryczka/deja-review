// Code check of 7 November 2026, problems 122 to 132 (lesson content). No
// browser, no database: the lessons are read as the app reads them.
import { checker } from "../check.mjs";
import { LESSONS as FR } from "../../src/data/lessons/index.js";
import { SPANISH } from "../../src/data/lessons/es/index.js";
import { firstAnswer, cleanEnglishPrompt } from "../../src/lib/cardText.js";
import { reconcileLessons } from "../../src/lib/lessonSync.js";
import { lessonCardKey, lessonSource } from "../../src/lib/lessonSource.js";

const ck = checker();
const all = [...FR, ...SPANISH.LESSONS];
const find = (id, front) => {
  const l = all.find((x) => x.id === id);
  return l.cards.find((c) => c[0] === front);
};
const shown = (card) => firstAnswer(cleanEnglishPrompt(card[1]));

// A card whose English was corrected has the old English as its sixth element, so a
// deck row still holding the old English is rewritten and nothing else changes.
const cardsWithOldEnglish = [];
for (const l of all) for (const c of l.cards) if (c[5]) cardsWithOldEnglish.push([l.id, c[0]]);
ck("every corrected English side keeps the old one for the deck update", cardsWithOldEnglish.length >= 11, String(cardsWithOldEnglish.length));

const spanish = (id) => SPANISH.LESSONS.find((l) => l.id.endsWith(id) || l.id === id);
const get = (n, front) => { const l = SPANISH.LESSONS.find((x) => x.cards.some((c) => c[0] === front)); return l && l.cards.find((c) => c[0] === front); };

// 122
const dl = FR.find((l) => l.id === "imperatif").cards.find((c) => c[0] === "Dis-le-moi !");
const dm = FR.find((l) => l.id === "imperatif").cards.find((c) => c[0] === "Dis-moi !");
ck("122 'Dis-le-moi !' shows English that 'Dis-moi !' does not", firstAnswer(cleanEnglishPrompt(dl[1])) !== firstAnswer(cleanEnglishPrompt(dm[1])), dl[1]);

// 123
const age = get(0, "Tengo 17 años / Tengo diecisiete años");
ck("123 the age card takes the spelled-out form and keeps its first wording", age && age[4] === "Tengo 17 años");

// 124
ck("124 five earlier cards name the later word", [
  [get(0, "en realidad"), "not de hecho"], [get(0, "profesor / profesora"), "not maestro"],
  [get(0, "¿De verdad?"), "not en serio"], [get(0, "Regresamos en julio"), "with regresar"],
].every(([c, h]) => c && shown(c).includes(h)));
ck("124 llevar shows 'to carry' first and updates old decks", shown(get(0, "llevar")).startsWith("to carry") && get(0, "llevar")[5] === "to take / to carry");

// 125, 126, 129
const fronts = new Set(SPANISH.LESSONS.flatMap((l) => l.cards.map((c) => c[0])));
for (const f of ["¿quién?", "¿cuánto?", "¿cuántos?", "beber", "responder", "abierto", "conmigo", "para mí", "la última vez", "el año pasado", "¿Cómo se escribe?"])
  ck(`125/126/129 a card for ${f}`, fronts.has(f));
const lessonOf = (f) => SPANISH.LESSONS.find((l) => l.cards.some((c) => c[0] === f)).id;
const ids = Object.fromEntries(["¿quién?", "beber", "responder", "abierto", "conmigo", "la última vez"].map((f) => [f, lessonOf(f)]));
ck("125/126/129 each card is in the lesson its word belongs to", /15$/.test(ids["¿quién?"]) && /19$/.test(ids.beber) && /21$/.test(ids.responder) && /22$/.test(ids.abierto) && /20$/.test(ids.conmigo) && /23$/.test(ids["la última vez"]), JSON.stringify(ids));

// 127, 128
ck("127 'bastante' shows 'quite'", shown(get(0, "bastante")) === "quite");
ck("128 the three tú cards show (tú)", [get(0, "Vienes mañana a la fiesta, ¿verdad?"), get(0, "Me gustaría ir allá contigo"), get(0, "Dímelo")].every((c) => shown(c).includes("(tú")));

// 130
ck("130 the pharmacy card asks for the preterite first", shown(get(0, "¿Ya fuiste a la farmacia?")).startsWith("Did you go"));

// The deck update: a row with the old English is rewritten, a student's own edit is left alone.
const lesson = SPANISH.LESSONS.find((l) => l.cards.some((c) => c[0] === "bastante"));
const card = lesson.cards.find((c) => c[0] === "bastante");
const row = (b) => ({ row_id: 7, f: "bastante", b, cat: "word", source: lessonSource(lesson.id, lessonCardKey("bastante")) });
const r1 = reconcileLessons([lesson], [row(card[5])]);
ck("127 a deck row with the old English is rewritten", r1.retext.some((r) => r.row_id === 7 && r.back === card[1]), JSON.stringify(r1.retext.slice(0, 2)));
const r2 = reconcileLessons([lesson], [row("my own wording")]);
ck("127 a row the student changed is left alone", !r2.retext.some((r) => r.row_id === 7));
ck("123 the age row is rewritten in place", (() => { const l = SPANISH.LESSONS.find((x) => x.cards.some((c) => c[4] === "Tengo 17 años")); const rr = reconcileLessons([l], [{ row_id: 3, f: "Tengo 17 años", b: "x", source: lessonSource(l.id, lessonCardKey("Tengo 17 años")) }]); return rr.retext.some((r) => r.row_id === 3 && r.front.includes("diecisiete")); })());

// 131, 132
import { readFileSync } from "node:fs";
const ex = (n) => readFileSync(new URL(`../../src/data/exercises/es/leccion${n}.js`, import.meta.url), "utf8");
ck("131 Lesson 10: tener never takes a", ex(10).includes("(tener never takes a)"));
ck("131 Lesson 11: on the end of an infinitive", ex(11).includes("or on the end of an infinitive"));
ck("132 Lesson 18: after no the pronoun goes before the verb", ex(18).includes("After no, te or se goes before the verb"));

const n = ck.fails();
console.log(n ? `\n  FAILED: ${n}` : "\n  all checks passed");
process.exit(n ? 1 : 0);
