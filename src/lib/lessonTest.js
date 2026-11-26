// A lesson test (Spanish; owner, 2026-11-25): one sitting that samples a
// lesson's three parts, so passing it says the lesson is known, and the
// lesson is then Mastered. Pure: no React, no Supabase.
//
// The owner's words: a way "to take a test and evaluate my knowledge for a
// certain lesson so that I can 'pass' or 'clear' it and then those cards are
// automatically removed and only retested much more rarely", the test being
// a "representative sampling of exercises, vocab, and dialogue", and a
// Mastered badge wherever the lesson shows, "less intimidating and gives me
// optimism for having completed goals".
//
// What was agreed with the owner, the same day:
//   - PER_PART questions from each part: the lesson's flashcards (Words), its
//     exercise items (Grammar) and its dialogue's sentences (Text). A part
//     with fewer is asked in full. Exercise items come from every sheet, at
//     least one each, the rest in proportion to each sheet's size; dialogue
//     sentences are spread from the start of the text to its end; cards
//     across the lesson's sections.
//   - Something answered in the last RECENT_DAYS isn't asked again: that
//     answer counts. Asked again so soon it would mostly show short-term
//     memory (the same reason Stats waits a week before a redo counts,
//     lib/lessonMastery.js).
//   - Marking as everywhere else: Right and Almost are right; first try only.
//     The test shows no Hint, so nothing is typed with one.
//   - Passing: PASS_AT or more right in every part (the line Stats calls
//     Learned, and like Stats the weakest part decides).
//   - On a pass the lesson's cards are scheduled with a target of
//     PASSED_TARGET instead of the student's own, so a card got right comes
//     back about 3.5 times later; one got wrong is scheduled as before. From
//     each card's next answer, not at once (owner, 2026-11-25: "agree on
//     this"): every due date stays the result of its card's last answer,
//     which the status check holds the app to.
//   - The badge stays until a later test on that lesson fails.
//
// Two things follow from the app's own rules rather than the owner's choice:
//   - A card is asked as practice (practiceSession in lib/sessionQueue.js): the
//     answer is kept and changes no schedule, as for every card answered
//     before it is due ("Nothing was asked before it was due").
//   - A card never answered isn't asked: it counts as not known. Meeting a
//     new word in a test is a guess, and dealing it as practice would be the
//     word's first meeting.
//
// Kept on the student's account (Supabase's user_metadata, TESTS_KEY), as the
// lesson switches are: { [lessonId]: { test, result } }, `test` the one under
// way (null when none) and `result` the last one finished.

import { sideOf, directionsOf, isTwoWay } from "./directions.js";
import { countsAsRight } from "./exerciseMarking.js";
import { LEARNED_AT } from "./lessonMastery.js";

export const TESTS_KEY = "es_lesson_tests";
export const PER_PART = 20;
export const RECENT_DAYS = 7;
export const PASS_AT = LEARNED_AT;
export const PASSED_TARGET = 0.8;
const DAY_MS = 86400000;

export const PARTS = Object.freeze([
  { id: "words", label: "Words", list: "cards", one: "card", many: "cards" },
  { id: "grammar", label: "Grammar", list: "items", one: "exercise item", many: "exercise items" },
  { id: "text", label: "Text", list: "sentences", one: "dialogue sentence", many: "dialogue sentences" },
]);

// The student's tests as kept, { [lessonId]: { test, result } }.
export function testsOf(user) {
  const t = user?.user_metadata?.[TESTS_KEY];
  return t && typeof t === "object" && !Array.isArray(t) ? t : {};
}

// The lessons whose last finished test was passed.
export function masteredOf(tests) {
  const out = new Set();
  for (const [id, t] of Object.entries(tests || {})) if (t?.result?.passed === true) out.add(id);
  return out;
}

const indexed = (list) => list.map((value, i) => ({ value, i }));

function shuffledIn(list, rng) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// `n` picks spread over groups (arrays): one from each group while `n`
// allows (the biggest groups first), the rest in proportion to what each has
// left, by largest remainder; chosen at random inside a group. Everything
// when the groups hold `n` or fewer. Each group's picks keep their order.
export function spreadPick(groups, n, rng = Math.random) {
  const live = groups.filter((g) => g.length > 0);
  const total = live.reduce((s, g) => s + g.length, 0);
  if (total <= n) return live.flat();
  const take = live.map(() => 0);
  let left = n;
  for (const i of live.map((_, i) => i).sort((a, b) => live[b].length - live[a].length)) {
    if (left === 0) break;
    take[i] = 1;
    left--;
  }
  if (left > 0) {
    const room = live.map((g, i) => g.length - take[i]);
    const roomTotal = room.reduce((a, b) => a + b, 0);
    const exact = room.map((r) => (r * left) / roomTotal);
    const whole = exact.map(Math.floor);
    let given = whole.reduce((a, b) => a + b, 0);
    for (const [, i] of exact.map((e, i) => [e - whole[i], i]).sort((a, b) => b[0] - a[0])) {
      if (given >= left) break;
      if (whole[i] < room[i]) { whole[i]++; given++; }
    }
    whole.forEach((w, i) => { take[i] += w; });
  }
  return live.flatMap((g, gi) =>
    shuffledIn(indexed(g), rng).slice(0, take[gi]).sort((a, b) => a.i - b.i).map((x) => x.value)
  );
}

// `count` positions split into `n` runs, one from each, so the picks reach
// from the first sentence to the last.
export function spreadIndexes(count, n, rng = Math.random) {
  if (count <= n) return Array.from({ length: count }, (_, i) => i);
  const runs = Array.from({ length: n }, (_, r) => {
    const from = Math.floor((r * count) / n), to = Math.floor(((r + 1) * count) / n);
    return Array.from({ length: to - from }, (_, k) => from + k);
  });
  return spreadPick(runs, n, rng);
}

const recentAt = (iso, now) => {
  const t = Date.parse(iso ?? "");
  return Number.isFinite(t) && now - t < RECENT_DAYS * DAY_MS && t <= now;
};

// The way round a card is asked: the direction setting's, and under Mixed
// the way answered longer ago, which is more of a test.
function wayOf(card, direction) {
  const dirs = directionsOf(card);
  if (dirs.length === 1 || !isTwoWay(card)) return dirs[0];
  if (direction === "fr" || direction === "en") return dirs.includes(direction) ? direction : dirs[0];
  const at = (d) => {
    const t = Date.parse(sideOf(card, d).last_review ?? "");
    return Number.isFinite(t) ? t : -Infinity;
  };
  return at(dirs[1]) < at(dirs[0]) ? dirs[1] : dirs[0];
}

// One card as the test holds it: `k` its row and way round ("12:fr"), and
// `r` its result when it isn't asked: a recent answer's (`why: "recent"`), or
// not known for a card never answered (`why: "unseen"`).
function cardEntry(card, direction, now) {
  const dir = wayOf(card, direction);
  const side = sideOf(card, dir);
  const k = `${card.row_id ?? card.id}:${dir}`;
  if (!side.last_review || (side.fsrs_state ?? 0) === 0) return { k, r: false, why: "unseen" };
  if (recentAt(side.last_review, now)) return { k, r: side.last_answer_correct === true, why: "recent" };
  return { k };
}

// An item or sentence: its latest answer, if recent, counts.
function itemEntry(k, latest, now) {
  const a = latest(k);
  if (a && !a.pending && recentAt(a.answeredAt, now)) return { k, r: countsAsRight(a.verdict) && !(a.hints > 0), why: "recent" };
  return { k };
}

// A new test.
//   cards       the lesson's cards in the deck, with their schedule
//   sectionOf   card -> the lesson section it is from (for the spread)
//   sheets      the lesson's exercise sheets ([{ id, exercises }]: the
//               lesson's own and any annex, as EXERCISES_BY_ID has them)
//   dialogue    the lesson's dialogue (DIALOGUE_OF), or null
//   latest      key -> the latest answer kept for that item or sentence
export function newTest({ lessonId, cards, sectionOf = () => "", sheets = [], dialogue = null, latest = () => null, direction = "mix", now = Date.now(), rng = Math.random }) {
  const bySection = new Map();
  for (const c of cards || []) {
    const s = sectionOf(c) || "";
    if (!bySection.has(s)) bySection.set(s, []);
    bySection.get(s).push(c);
  }
  const pickedCards = spreadPick([...bySection.values()], PER_PART, rng);
  const sheetGroups = [];
  for (const sheet of sheets) {
    for (const ex of sheet.exercises || []) sheetGroups.push(ex.items.map((_, i) => `${sheet.id}/${ex.n}/${i + 1}`));
  }
  const pickedItems = spreadPick(sheetGroups, PER_PART, rng);
  const ex = dialogue?.exercises?.[0];
  const sentenceKeys = ex?.items?.length ? ex.items.map((_, i) => `${dialogue.id}/${ex.n}/${i + 1}`) : [];
  const pickedSentences = spreadIndexes(sentenceKeys.length, PER_PART, rng).map((i) => sentenceKeys[i]);
  return {
    lesson: lessonId,
    started: new Date(now).toISOString(),
    direction,
    cards: pickedCards.map((c) => cardEntry(c, direction, now)),
    items: pickedItems.map((k) => itemEntry(k, latest, now)),
    sentences: pickedSentences.map((k) => itemEntry(k, latest, now)),
  };
}

// The entries still to ask in a part.
export const toAsk = (entries) => (entries || []).filter((e) => typeof e.r !== "boolean");

// A card answered in the test: its first answer counts, and a correction to
// that answer (Previous card) replaces it.
export function withCardAnswer(test, k, got, { correction = false } = {}) {
  if (!test) return test;
  let changed = false;
  const cards = test.cards.map((e) => {
    if (e.k !== k || e.why) return e;
    if (typeof e.r === "boolean" && !correction) return e;
    changed = true;
    return { ...e, r: !!got };
  });
  return changed ? { ...test, cards } : test;
}

// How the test stands. `answerOf(k)` gives an item's or sentence's first
// answer since the test started (or null), as { verdict, pending?, hints? }.
// Each part: { total, right, answered, pending, recent, unseen }.
export function scoreTest(test, answerOf = () => null) {
  const part = (entries, isCard) => {
    let right = 0, answered = 0, pending = 0, recent = 0, unseen = 0;
    for (const e of entries || []) {
      let r = e.r;
      if (e.why === "recent") recent++;
      if (e.why === "unseen") unseen++;
      if (typeof r !== "boolean" && !isCard) {
        const a = answerOf(e.k);
        if (a?.pending) { pending++; continue; }
        if (a) r = countsAsRight(a.verdict) && !(a.hints > 0);
      }
      if (typeof r !== "boolean") continue;
      answered++;
      if (r) right++;
    }
    return { total: (entries || []).length, right, answered, pending, recent, unseen };
  };
  const parts = {
    words: part(test?.cards, true),
    grammar: part(test?.items, false),
    text: part(test?.sentences, false),
  };
  const used = Object.values(parts).filter((p) => p.total > 0);
  const complete = used.length > 0 && used.every((p) => p.answered === p.total);
  const passed = complete && used.every((p) => p.right / p.total >= PASS_AT);
  return { parts, complete, passed };
}

// The figure each part needs: 16 of 20.
export const needed = (total) => Math.ceil(PASS_AT * total - 1e-9);

// The result kept when a test is finished.
export function resultOf(score, at = Date.now()) {
  const parts = {};
  for (const [id, p] of Object.entries(score.parts)) if (p.total > 0) parts[id] = { right: p.right, total: p.total };
  return { passed: !!score.passed, at: new Date(at).toISOString(), parts };
}
