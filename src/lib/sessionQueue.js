// Spaced-repetition block builder. Pure: no React, no Supabase.
//
// Inputs are the candidate cards (the whole deck, or one lesson's or one
// type's cards when the student has narrowed it) plus tuning knobs. Output is
// one BLOCK: up to 50 cards, after which the student sees how it went and can
// carry on with the next.
//
// A block is made of ITEMS: a card asked one way round. A word or phrase card
// is two items, "la pomme → ?" and "apple → ?", each with its own FSRS state
// (lib/directions.js); a grammar or pronunciation card is one. Every rule
// below — due, missed last time, new, well known, answered today — reads the
// item's own direction. The direction setting chooses which items of two-way
// cards are candidates: FR→EN the French-shown ones, EN→FR the English-shown
// ones, Mixed both. One-way cards are candidates in every setting.
//
// FSRS decides when a card the student has seen comes back. It has no opinion
// on which new card comes next or how many — those are this file's decisions,
// agreed with the owner on 2026-09-12 (see the context doc's History).
//
// What goes in, in this order:
//   1. Lapses       missed last time, due today.
//   2. Reviews      due today, most overdue first.
//   3. New          ONLY once the due cards run out. A student who isn't
//                   keeping up with reviews gets no new cards on top; one
//                   who learned a lot yesterday gets review-heavy blocks
//                   until those are done. That is the whole of the new-card
//                   limit — no daily number, no forecast.
//
// There are no spot-checks. Two well-known cards used to ride along in every
// block, ignoring their due date, as insurance against FSRS being
// over-confident. In the six-month simulation (2026-09-25) they were answered
// right 97% of the time and took about 3% of study time; without them a
// student knew about 3% more for the same time. FSRS's own schedule is the
// check: a card it misjudges comes back and is missed.
//
// "Due today" means due any time before the end of the student's own day, so
// the day's work doesn't grow while they study.
//
// This replaces the old rule of reserving new-card slots BEFORE due work.
// That rule existed so a 1,300-card backlog wouldn't starve new material; the
// owner's call is that a backlog is exactly when new material should wait.
//
// ORDER within the block is then randomised. Priority decides *which* cards
// make the block; presenting them in fixed runs (all lapses, then all new) is
// blocked practice, which tests worse than interleaved practice for long-term
// retention. So: pick by priority, then shuffle.
//
// Both of a new word's items are new from the start (agreed with the owner,
// 2026-09-14 — which way is harder differs per student), but a word is asked
// one way a day. Once a card has been answered one way today — a first
// meeting or a review — its other way waits for tomorrow, and a block never
// deals both ways of one card. The second answer the same day comes just
// after seeing the word, and FSRS would take an echo for a recall: on the
// owner's record (2026-10-14), a review whose other way had been answered
// earlier that day was right 90% of the time where FSRS expected 81% (63
// answers); otherwise 79% where it expected 82% (549). So the owner agreed to
// keep a word's two ways apart (2026-10-14); until then only its two FIRST
// meetings were. Of a card's two ways due on one day, the one the order below
// reaches first is dealt (missed last time, else the more overdue); the other
// is dealt tomorrow.
//
// This decides only when an item is shown; FSRS schedules nothing until it
// has been answered.
//
// Each entry is { ...card, shownDir: "fr" | "en", flippable, _bucket: "lapse" |
// "review" | "new" }, or "practice" in a lesson gone through again
// (practiceSession, below). FlashcardApp uses _bucket for the counter, and
// never counts a practice answer; otherwise scoring is driven entirely by FSRS
// state in applyAnswer().

import { State, scheduleAnswer } from "./spacedRepetition.js";
import { endOfLocalDay, localISODate, localISODateDaysAgo, reviewedToday } from "./studyDay.js";
import { lessonIdOf } from "./lessonSource.js";
import { sideOf, sideColumns, directionsOf, isTwoWay, otherDirection, itemKey } from "./directions.js";

// A block — the set of cards between checkpoints — is this many answers.
export const BLOCK_SIZE = 50;

const DEFAULTS = Object.freeze({
  target: BLOCK_SIZE,
  // A class within this many days is "recent": what the student is being
  // taught right now, so its words come before the older pile.
  recentDays: 14,
});

// These three read one direction's state: sideOf(card, dir), not the card.
function isNewCard(card) {
  // Never answered. fsrs_state is the only authority.
  //
  // This used to also require an empty `dates` array, on the assumption that
  // dates recorded past reviews. They don't — they're the LESSON dates a word
  // appeared on in the cahier, so every parsed card has them and no card ever
  // qualified as new. migration_007 fixes the stored data; this fixes the reader.
  return (card.fsrs_state ?? State.New) === State.New;
}

function dueMs(card) {
  if (!card.next_due_at) return 0;
  const t = new Date(card.next_due_at).getTime();
  return Number.isFinite(t) ? t : 0;
}

// The candidates' items under a direction setting ("fr" | "en" | "mix").
function itemDirections(card, direction) {
  const dirs = directionsOf(card);
  if (dirs.length === 1 || direction === "mix") return dirs;
  return [direction === "en" ? "en" : "fr"];
}

// This card was answered today the OTHER way round, for the first time or
// not. Its item this way waits for tomorrow — see the header.
function answeredOtherWayToday(card, dir, now) {
  if (!isTwoWay(card)) return false;
  const other = sideOf(card, otherDirection(dir));
  return (other.fsrs_state ?? State.New) !== State.New && reviewedToday(other.last_review, new Date(now));
}

function shuffleInPlace(arr, rng = Math.random) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const ISO_DAY = /^\d{4}-\d{2}-\d{2}$/;

// A card the student added themselves, from the tutor chat ("tutor-chat") or
// with "Add to my cards" under a podcast passage ("podcast:<episode id>",
// 2026-10-09). Neither came up in a class, so neither has class dates, and
// they are treated alike everywhere the app asks: dated by the day they were
// added (classDaysOf below, and so Stats' areas), left alone by "Replace my
// existing deck" (lib/replaceDeck.js), and given no uncertain class dates by
// the Morning check's new-card order (lib/statusChecks.js). One test, so a
// third way of adding a card can't be missed in one of those places.
export const addedByStudent = (card) =>
  card?.source === "tutor-chat" || (typeof card?.source === "string" && card.source.startsWith("podcast:"));

// The classes a card came up in, as YYYY-MM-DD strings.
//
// Notes cards carry them in `dates`. A card the student added themselves
// (addedByStudent: the tutor chat, a podcast passage) came up in no class, so
// it is dated by the day it was added: it counts as recent for two weeks,
// then joins the older pile as a word seen once.
export function classDaysOf(card) {
  if (addedByStudent(card) && card.created_at) {
    const t = new Date(card.created_at);
    if (!Number.isNaN(t.getTime())) return [localISODate(t)];
  }
  return (Array.isArray(card?.dates) ? card.dates : []).filter(
    (d) => typeof d === "string" && ISO_DAY.test(d)
  );
}

// How often a card's French is said, per million words; 0 when it can't be
// counted, or hasn't been.
export const saidOf = (card) => (Number.isFinite(card?.said) && card.said > 0 ? card.said : 0);

// The order a student meets never-seen cards in.
//
// Inside a lesson: the lesson's teaching order, via `lessonRank`.
//
// Otherwise, from their notes:
//   1. Recent classes (the last `recentDays`), newest class first — this
//      week's words are the most useful now, and will come up again in class.
//   2. Earlier notes, most said first (2026-10-14, the owner): a card's
//      `said` is how often its French is said, as a whole phrase, per million
//      words of French film and TV subtitles (scripts/count-phrases.mjs,
//      migration_019). The cards that have one take the places the old order
//      gives the counted cards, most said first; a card without one — most
//      full sentences, grammar drills, a card not counted yet — keeps its
//      place. The old order: the words that came up in the most classes
//      first, the older class first on a tie. Undated cards last.
//   3. Then unseen lesson cards, in lesson order. A student with notes will
//      rarely get this far; one with no notes yet still has something to
//      learn in normal study instead of an empty screen.
//
// Cards still tied after that are in random order (shuffled, then a stable
// sort), so two words from the same class don't always arrive in the same
// sequence.
export function orderNewCards(fresh, {
  now = Date.now(),
  lessonMode = false,
  lessonRank = () => null,
  recentDays = DEFAULTS.recentDays,
  rng = Math.random,
} = {}) {
  const pool = shuffleInPlace([...fresh], rng);
  const rankOf = (c) => {
    const r = lessonRank(c);
    return Number.isFinite(r) ? r : Infinity;
  };
  if (lessonMode) return pool.sort((a, b) => rankOf(a) - rankOf(b));

  const cutoff = localISODateDaysAgo(recentDays, new Date(now));
  const recent = [];
  const earlier = [];
  const undated = [];
  const lessons = [];
  for (const c of pool) {
    if (lessonIdOf(c)) { lessons.push(c); continue; }
    const days = classDaysOf(c);
    if (days.length === 0) { undated.push(c); continue; }
    const sorted = [...days].sort();
    const entry = { c, first: sorted[0], latest: sorted[sorted.length - 1], count: days.length };
    (entry.latest >= cutoff ? recent : earlier).push(entry);
  }
  recent.sort((a, b) => (a.latest < b.latest ? 1 : a.latest > b.latest ? -1 : b.count - a.count));
  earlier.sort((a, b) => b.count - a.count || (a.first < b.first ? -1 : a.first > b.first ? 1 : 0));
  const places = earlier.flatMap((e, i) => (saidOf(e.c) > 0 ? [i] : []));
  const mostSaid = places.map((i) => earlier[i]).sort((a, b) => saidOf(b.c) - saidOf(a.c));
  places.forEach((i, k) => { earlier[i] = mostSaid[k]; });
  lessons.sort((a, b) => rankOf(a) - rankOf(b));
  return [
    ...recent.map((e) => e.c),
    ...earlier.map((e) => e.c),
    ...undated,
    ...lessons,
  ];
}

// `opts.direction` is the direction setting ("mix" when omitted).
//
// `opts.inBlock` is for re-dealing the rest of a block when the setting
// changes mid-block: the entries staying in it. None of them is dealt again,
// and a card whose new item is among them gets no second new item.
export function buildSession(cards, opts = {}) {
  const { target, recentDays } = { ...DEFAULTS, ...opts };
  const now = opts.now ?? Date.now();
  const rng = opts.rng ?? Math.random;
  const direction = opts.direction ?? "mix";
  const endOfToday = endOfLocalDay(new Date(now));
  const inBlock = opts.inBlock || [];
  const taken = new Set(inBlock.map(itemKey));
  const cardKey = (c) => c.row_id ?? c.id;
  // The cards with a way in this block: their other way waits for tomorrow.
  const cardsTaken = new Set(inBlock.map(cardKey));

  const lapses = [];
  const reviews = [];
  const fresh = [];

  for (const card of cards) {
    const flippable = isTwoWay(card);
    for (const dir of itemDirections(card, direction)) {
      const item = { ...card, shownDir: dir, flippable };
      if (taken.has(itemKey(item))) continue;
      if (answeredOtherWayToday(card, dir, now)) continue;
      const side = sideOf(card, dir);
      const state = side.fsrs_state ?? State.New;
      if (isNewCard(side)) {
        fresh.push(item);
      } else if (dueMs(side) <= endOfToday) {
        // A card you missed last time. FSRS's Relearning state would say this
        // for us, but it only exists with minute-scale relearning steps turned
        // on, which this app doesn't use — so applyAnswer records the miss on
        // the row instead. (State is still checked for robustness in case the
        // scheduler config ever changes.)
        const missedLastTime =
          side.last_answer_correct === false ||
          state === State.Relearning ||
          state === State.Learning;
        (missedLastTime ? lapses : reviews).push({ item, due: dueMs(side) });
      }
    }
  }

  // Most overdue first, so the oldest reviews survive the cut.
  reviews.sort((a, b) => a.due - b.due);

  const due = [
    ...lapses.map(({ item }) => ({ ...item, _bucket: "lapse" })),
    ...reviews.map(({ item }) => ({ ...item, _bucket: "review" })),
  ];
  // One way of a card a day: of two due, the first in this order. A card
  // counts once towards today's work, whether this block takes it or a later
  // one does.
  const dueTaken = [];
  const counted = new Set(cardsTaken);
  let dueToday = 0;
  for (const item of due) {
    if (counted.has(cardKey(item))) continue;
    counted.add(cardKey(item));
    dueToday++;
    if (dueTaken.length >= Math.max(0, target)) continue;
    cardsTaken.add(cardKey(item));
    dueTaken.push(item);
  }

  // New cards only in the room the due cards left — and never a card that
  // already has a way in the block.
  const newSlots = Math.max(0, target - dueTaken.length);
  const newTaken = [];
  if (newSlots > 0) {
    const ordered = orderNewCards(fresh, {
      now,
      lessonMode: !!opts.lessonMode,
      lessonRank: opts.lessonRank,
      recentDays,
      rng,
    });
    for (const item of ordered) {
      if (newTaken.length >= newSlots) break;
      if (cardsTaken.has(cardKey(item))) continue;
      cardsTaken.add(cardKey(item));
      newTaken.push({ ...item, _bucket: "new" });
    }
  }

  const tagged = [...dueTaken, ...newTaken];

  // Interleave: selection above was by priority, presentation is mixed.
  shuffleInPlace(tagged, rng);

  return {
    queue: tagged,
    counts: countBuckets(tagged),
    // How much due work is left beyond this block. The checkpoint (stage 4)
    // uses it to say "the next blocks are reviews only". A card's other way,
    // waiting for tomorrow, isn't today's work.
    dueRemaining: dueToday - dueTaken.length,
    newAvailable: fresh.length,
  };
}

// Going through a lesson again, once nothing in it is due and none of its
// cards is new (the owner, 2026-10-27: "should be able to reset after getting
// through all cards"). Every card of the lesson, one way round each, whatever
// FSRS says about when it is next due.
//
// These answers are practice (`_bucket: "practice"`, which a retry keeps): they
// are recorded, and never counted, so going through a lesson again changes no
// card's schedule. Counting them would have FSRS take answers to cards that
// weren't due, which the status check rightly faults ("Nothing was asked
// before it was due"); its other checks read the set's record and know these
// cards were practice (lib/statusChecks.js).
//
// A lesson bigger than the set is gone through a set at a time, as it was the
// first time: `done` is the cards already gone through again, which wait for
// the next time round. A card shows the way round the direction setting says;
// under Mixed, the way it was last answered, which is the one the student has
// just been learning. `avoid` is the card answered last, which never comes
// first: the same word twice running.
export function practiceSession(cards, opts = {}) {
  const target = opts.target ?? BLOCK_SIZE;
  const rng = opts.rng ?? Math.random;
  const direction = opts.direction ?? "mix";
  const done = opts.done || new Set();
  const cardKey = (c) => c.row_id ?? c.id;
  const lastAt = (card, dir) => {
    const t = Date.parse(sideOf(card, dir).last_review ?? "");
    return Number.isFinite(t) ? t : -Infinity;
  };
  const items = [];
  for (const card of cards) {
    if (done.has(cardKey(card))) continue;
    const dirs = itemDirections(card, direction);
    let dir = dirs[0];
    if (dirs.length > 1) {
      const [a, b] = dirs.map((d) => lastAt(card, d));
      dir = a > b ? dirs[0] : b > a ? dirs[1] : dirs[Math.floor(rng() * dirs.length)];
    }
    items.push({ ...card, shownDir: dir, flippable: isTwoWay(card), _bucket: "practice" });
  }
  shuffleInPlace(items, rng);
  const queue = items.slice(0, Math.max(0, target));
  if (opts.avoid != null && queue.length > 1 && cardKey(queue[0]) === opts.avoid) {
    [queue[0], queue[queue.length - 1]] = [queue[queue.length - 1], queue[0]];
  }
  return { queue, counts: countBuckets(queue), dueRemaining: 0, newAvailable: 0 };
}

// What a block is made of, for the counter. Retries are the block's own cards
// again, not more of them.
export function countBuckets(entries) {
  // `spot` stays, always 0: there are no spot-checks, but the counter reads it.
  const counts = { lapse: 0, review: 0, new: 0, spot: 0 };
  for (const c of entries) if (!c._retry && c._bucket in counts) counts[c._bucket]++;
  return counts;
}

// Where a missed card goes for its retry, inside the block.
//
// A block is 50 ANSWERS, retries included. The missed card comes back `offset`
// cards later, or at the end of the block if fewer are left, and it takes the
// place of the last card in the block not yet shown — which is simply dealt
// in the next block instead, since it is still unanswered. So the block never
// grows and the checkpoint always comes after the block's own length.
//
// This replaces appending retries to the end. With blocks of 50, every miss
// after card 30 landed past the end, so a block with 21 misses ran to 71
// cards and read "Retry 1 of 21" before its checkpoint (2026-09-14, the
// owner's own deck).
//
// No retry when there is no room: the missed card is the last one, or every
// card still to come is itself a retry. It isn't lost — a miss is due again
// tomorrow and goes to the front of that day's first block.
//
// A block shorter than the set size (`room`) is the exception: the retry is
// added and nothing is pushed out, until the block reaches the set size. A
// lesson with 52 cards to give, dealt into a set of 100, used to lose a card
// to the next set with every miss: 14 misses, 14 of its cards never reached
// (the owner's Lesson 8, 2026-10-27). Such a retry is marked `_added`, so
// withdrawRetry takes it out without putting anything back.
//
// `deck` is the block, `idx` the position of the card just missed, `room` the
// set size (the block's own length when not given). Returns a new array, or
// the same array if there is no room. A retry that pushed a card out carries
// it (`_displaced`), for withdrawRetry. The retry of a card gone through again
// for practice is practice too (practiceSession).
export function placeRetry(deck, idx, card, offset = 20, room = deck.length) {
  const bucket = card._bucket === "practice" ? "practice" : "lapse";
  // Still one other card between the miss and its retry, as below.
  if (deck.length < room && deck.length - 1 - idx >= 1) {
    const next = [...deck];
    next.splice(Math.min(idx + 1 + offset, next.length), 0, { ...card, _retry: true, _bucket: bucket, _added: true, _displaced: undefined });
    return next;
  }
  let displace = -1;
  for (let j = deck.length - 1; j > idx; j--) {
    if (!deck[j]._retry) { displace = j; break; }
  }
  // Keep at least one other card between the miss and its retry: straight
  // back is massed practice, and proves nothing.
  if (displace === -1 || deck.length - 1 - idx < 2) return deck;
  const next = [...deck];
  const [pushedOut] = next.splice(displace, 1);
  const insertAt = Math.min(idx + 1 + offset, next.length);
  next.splice(insertAt, 0, { ...card, _retry: true, _bucket: bucket, _displaced: pushedOut });
  return next;
}

// A miss changed to right with Previous card takes its retry back out. It used
// to stay: the card came back later in the block although its answer was now
// right, and "retries to come" never went down (2026-09-27). The card the
// retry pushed out goes back in, at the end, so the block keeps its length.
// With nothing to put back — a block kept from before retries recorded it, or
// that card already back in the block — the retry stays, as it always did,
// rather than the block coming up a card short. A retry added to a block with
// room (`_added`, see placeRetry) pushed nothing out: it just comes out.
//
// `key` is the itemKey of the card at `idx`; only a retry still to come is
// taken out. Returns a new array, or the same array if nothing changes.
export function withdrawRetry(deck, idx, key) {
  const at = deck.findIndex((c, j) => j > idx && c._retry && itemKey(c) === key);
  if (at === -1) return deck;
  if (deck[at]._added) return deck.filter((_, j) => j !== at);
  const back = deck[at]._displaced;
  if (!back || deck.some((c) => !c._retry && itemKey(c) === itemKey(back))) return deck;
  return [...deck.filter((_, j) => j !== at), back];
}

// Compute the new scheduling state for a card after an answer.
//
// The app grades binary — you typed it right or you didn't — so we map onto
// two of FSRS's four ratings: Again for a miss, Good for a hit. Hard and Easy
// exist for apps where the user self-rates their own recall; here the typing
// check is the grade, and inventing a confidence signal the user never gave
// would only feed FSRS noise.
//
// `dir` is the way round the card was shown, and the answer is recorded to
// that direction's state only; it defaults to the item's own shownDir.
//
// Returns that direction's columns, exactly as user_cards accepts them, so
// callers can use the same object for the DB update and the optimistic
// in-memory patch.
export function applyAnswer(card, got, nowMs = Date.now(), dir = card?.shownDir ?? "fr") {
  return sideColumns(scheduleAnswer(sideOf(card, dir), got, nowMs), dir);
}

// Whether FSRS counts an answer to one way of a card, given now: the day's
// first answer to it, and since 2026-10-14 (the owner) the repeat after a
// miss counted today — a retry whose way was last answered today, wrong.
// Anything else shown again the same day is practice. `side` is that way's
// state as it stands when the answer is given (sideOf(card, dir)).
export function countsAnswer(side, { retry = false } = {}, nowMs = Date.now()) {
  if (!reviewedToday(side.last_review, new Date(nowMs))) return true;
  return retry && side.last_answer_correct === false;
}
