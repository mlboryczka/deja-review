// The words a typed answer on a Spanish card must have exactly, accents
// included, while a slip anywhere else is still forgiven (matchAnswer in
// src/FlashcardApp.jsx, `exactWords`). Each maps to the spellings that count
// as typing it: a number word in English may also be typed as its figure,
// "two" or "2".
//
// The Spanish grammar cards went from the flashcards on 2026-10-25, and the
// word and phrase cards that took their place forgive a letter or two. Without
// this, "Ayer poní la computadora en la sala" passed for "Ayer puse…",
// "setenta" for sesenta, "julio" for junio, and, typing English, "July 30th"
// for "June 30th" and "It's 8:45" for 8:15. So, typing Spanish: every
// irregular verb form of the lessons (irregularForms.js), the numbers, first
// to tenth, the months, and the verbs four sentences to translate turn on
// (llovía, estaba, tenía, pude: "Llovió cuando llegó" is the wrong tense).
// Typing English: the numbers, the ordinals and the months. And either way,
// any word with a figure in it.
//
// un and una are left out: they are also "a", and a slip on them is the
// article's, not the number's.

import { IRREGULAR_FORMS } from "./irregularForms.js";

const NUMBERS_ES = [
  "cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez",
  "once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve",
  "veinte", "veintiuno", "veintiún", "veintidós", "veintitrés", "veinticuatro", "veinticinco",
  "veintiséis", "veintisiete", "veintiocho", "veintinueve",
  "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa",
  "cien", "ciento", "doscientos", "doscientas", "trescientos", "trescientas", "cuatrocientos",
  "cuatrocientas", "quinientos", "quinientas", "seiscientos", "seiscientas", "setecientos",
  "setecientas", "ochocientos", "ochocientas", "novecientos", "novecientas",
  "mil", "millón", "millones",
];
const ORDINALS_ES = [
  "primero", "primera", "primer", "segundo", "segunda", "tercero", "tercera", "tercer",
  "cuarto", "cuarta", "quinto", "quinta", "sexto", "sexta", "séptimo", "séptima", "sétimo",
  "sétima", "octavo", "octava", "noveno", "novena", "décimo", "décima",
];
const MONTHS_ES = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre",
  "setiembre", "octubre", "noviembre", "diciembre",
];
const TENSE_TURNS_ON = ["llovía", "estaba", "tenía", "pude"];

const same = (words) => words.map((w) => [w, [w]]);
export const SPANISH_EXACT = new Map([
  ...same([...IRREGULAR_FORMS]), ...same(NUMBERS_ES), ...same(ORDINALS_ES), ...same(MONTHS_ES), ...same(TENSE_TURNS_ON),
]);

// English: each number and ordinal with its figure, twenty-one to
// ninety-nine and twenty-first to ninety-ninth included.
const UNITS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
  "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const TENS = { 20: "twenty", 30: "thirty", 40: "forty", 50: "fifty", 60: "sixty", 70: "seventy", 80: "eighty", 90: "ninety" };
const UNIT_ORDINALS = ["zeroth", "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth",
  "eleventh", "twelfth", "thirteenth", "fourteenth", "fifteenth", "sixteenth", "seventeenth", "eighteenth", "nineteenth"];
const TENS_ORDINALS = { 20: "twentieth", 30: "thirtieth", 40: "fortieth", 50: "fiftieth", 60: "sixtieth", 70: "seventieth", 80: "eightieth", 90: "ninetieth" };
const suffix = (n) => (n % 10 === 1 && n % 100 !== 11 ? "st" : n % 10 === 2 && n % 100 !== 12 ? "nd" : n % 10 === 3 && n % 100 !== 13 ? "rd" : "th");
const english = [];
UNITS.forEach((w, n) => english.push([w, [w, String(n)]]));
UNIT_ORDINALS.forEach((w, n) => english.push([w, [w, `${n}${suffix(n)}`]]));
for (const [t, w] of Object.entries(TENS)) {
  english.push([w, [w, t]], [TENS_ORDINALS[t], [TENS_ORDINALS[t], `${t}th`]]);
  for (let u = 1; u <= 9; u++) {
    const n = Number(t) + u;
    english.push([`${w}-${UNITS[u]}`, [`${w}-${UNITS[u]}`, String(n)]], [`${w}-${UNIT_ORDINALS[u]}`, [`${w}-${UNIT_ORDINALS[u]}`, `${n}${suffix(n)}`]]);
  }
}
for (const w of ["hundred", "thousand", "million", "billion", "hundredth"]) english.push([w, [w]]);
const MONTHS_EN = ["january", "february", "march", "april", "may", "june", "july", "august", "september",
  "october", "november", "december"];
export const ENGLISH_EXACT = new Map([...english, ...same(MONTHS_EN)]);
