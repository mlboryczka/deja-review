// The page numbers a lesson's exercises 1, 2, 3… as they now stand, for the
// Spanish and French Exercises alike (it was src/data/exercises/es/index.js's).

// The page numbers a lesson's exercises 1, 2, 3… as they now stand (owner,
// 2026-10-25: "renumber the exercises properly"). `n` stays the sheet's
// number, which every answer is kept under. An instruction pointing at
// another exercise ("del ejercicio 1", Lesson 18) points at its number on the
// page.
export function numbered(exercises) {
  const number = new Map(exercises.map((ex, i) => [ex.n, i + 1]));
  const renumber = (text) =>
    typeof text === "string"
      ? text.replace(/\b(ejercicio|exercice|exercise) (\d+)\b/gi, (all, word, n) => (number.has(Number(n)) ? `${word} ${number.get(Number(n))}` : all))
      : text;
  return exercises.map((ex, i) => ({ ...ex, number: i + 1, instruction: renumber(ex.instruction), english: renumber(ex.english) }));
}
