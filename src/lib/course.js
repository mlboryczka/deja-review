// Which language's cards the app is showing (the Spanish module, test app,
// owner 2026-10-22).
//
// French is the app as it always was. Spanish is a deck of its own, in
// tables of its own (migration_020: es_user_cards and the rest), so a Spanish
// card can never come up in French study, nor reach the morning check, the
// cahier sync or the students' app, which read only the French tables. The
// study code is the same for both: it asks this file which table to use and
// under which name to keep things in the browser.
//
// Inside the app the side of a card in the language being learned is the
// "fr" side, whatever the language: the columns, the directions and the code
// keep that name. Only what the student reads says "Spanish".

export const COURSES = Object.freeze({
  fr: Object.freeze({
    id: "fr",
    language: "French",
    // The browser voice (src/audio.js).
    speech: "fr",
    table: (name) => name,
    // The key a user's things are kept under in this browser.
    store: (userId) => userId,
  }),
  es: Object.freeze({
    id: "es",
    language: "Spanish",
    speech: "es",
    table: (name) => `es_${name}`,
    store: (userId) => (userId ? `es:${userId}` : userId),
  }),
});

export const courseOf = (id) => COURSES[id] || COURSES.fr;

// The language the app opens on, kept in this browser per user: the one used
// last, as Duolingo and Babbel open on the course you were in (owner,
// 2026-10-22, choosing the flag in the top-right corner over a screen that
// asks every time). Only read for someone who has Spanish.
const PLACE_KEY = "course:";
export function readCourse(userId) {
  try {
    return userId && localStorage.getItem(PLACE_KEY + userId) === "es" ? "es" : "fr";
  } catch {
    return "fr";
  }
}
export function writeCourse(userId, course) {
  try {
    if (userId) localStorage.setItem(PLACE_KEY + userId, course === "es" ? "es" : "fr");
  } catch { /* storage blocked: opens on French next time */ }
}
export function clearCourse(userId) {
  try {
    if (userId) localStorage.removeItem(PLACE_KEY + userId);
  } catch {}
}
