// Single source of truth for spaced-repetition tuning, now backed by FSRS
// (Free Spaced Repetition Scheduler) instead of a fixed Leitner ladder.
//
// Why the change: the old ladder capped intervals at 21 days, gave the same
// credit for an answer whether it was on time or three weeks late, and reset
// a card to day one on a single miss. FSRS models each card's *stability*
// (how slowly you forget it) and *difficulty* (how hard it is for you), so
// intervals keep growing, a late-but-correct answer earns a longer gap, and
// a lapse cuts stability proportionally rather than wiping it.
//
// See migrations/migration_006_fsrs.sql for the columns this reads and
// writes, and for how existing Leitner boxes were seeded into FSRS state.

import { fsrs, State, Rating } from "ts-fsrs";
import { DAY_STARTS_AT_HOUR } from "./studyDay.js";
import { STARTING_WEIGHTS, usableWeights } from "./fsrsSettings.js";

export { State, Rating };

// Tuning knobs.
//
//   requestRetention — the probability you want of recalling a card at the
//     moment it comes up. This is *the* dial: it trades daily review count
//     against how much you remember. 0.9 is the FSRS default and the starting
//     point; each student can change it, or leave it on automatic, which
//     eases it down to 0.85 while they're behind (lib/fsrsSettings.js).
//
//   enableShortTerm — OFF deliberately. With it on, FSRS inserts minute-scale
//     learning steps (see a new card again in 10 minutes), which suits an app
//     you dip into all day. This app is session-shaped: you sit down, work a
//     queue, and leave. Same-session repetition is already handled by
//     re-queueing wrong answers (RE_QUEUE_OFFSET below), so minute-scale
//     steps would just mean cards the session builder can't schedule properly.
//     Since 2026-10-14 that repeat counts (nextCard below): FSRS's rule for a
//     second answer on the same day, without its minute-scale steps.
//
//   maximumInterval — 10 years. Effectively "no ceiling", which is the whole
//     point; the old 21-day cap is what made you re-review words you'd known
//     for a year.
//
//   enableFuzz — spreads due dates by a few percent so cards learned on the
//     same day don't clump into one giant review day months later.
export const FSRS_CONFIG = Object.freeze({
  requestRetention: 0.9,
  maximumInterval: 3650,
  enableFuzz: true,
  enableShortTerm: false,
});

// A scheduler for one set of settings: the 21 weights (the student's own
// once fitted, the starting ones until then) and the target.
export function makeScheduler({ weights, retention } = {}) {
  return fsrs({
    w: [...(usableWeights(weights) || STARTING_WEIGHTS)],
    request_retention: Number.isFinite(retention) ? retention : FSRS_CONFIG.requestRetention,
    maximum_interval: FSRS_CONFIG.maximumInterval,
    enable_fuzz: FSRS_CONFIG.enableFuzz,
    enable_short_term: FSRS_CONFIG.enableShortTerm,
  });
}

// The scheduler in use: the signed-in student's settings once the app has
// loaded them (applySettings), the starting ones before. Everything that
// schedules an answer or estimates what is remembered reads this binding, so
// setting it is the whole of switching a student over.
export let scheduler = makeScheduler();

export function applySettings({ weights, retention } = {}) {
  scheduler = makeScheduler({ weights, retention });
  return scheduler;
}

// What the scheduler in use schedules with, as ts-fsrs holds it: the target
// and the 21 weights. Saved with each counted answer (lib/reviewLog.js).
export function settingsInUse(sched = scheduler) {
  const p = sched.parameters;
  return { target: p.request_retention, weights: Array.from(p.w) };
}

// When a wrong-answer card is re-queued in the same session, insert it this
// many positions after the current index.
//
// This was 5, which is close to massed practice — five cards later you're
// still holding the answer in your head, so getting it "right" proves
// nothing. Karpicke & Roediger (2007) found that what makes a retrieval
// stick is having to work for it. 20 puts real cards in between.
export const RE_QUEUE_OFFSET = 20;

// ── Conversion between the DB row shape and ts-fsrs's Card ─────────────
//
// These take and return ONE direction's state under the plain field names
// (stability, difficulty, fsrs_state, reps, lapses, next_due_at, last_review):
// sideOf() in lib/directions.js reads a direction off a card, and sideColumns()
// maps the result back to that direction's columns. ts-fsrs wants a Card with
// Date objects and its own field names; these two functions are the only place
// that mapping lives.

export function toFsrsCard(card) {
  const state = card.fsrs_state ?? State.New;
  const lastReview = card.last_review ? new Date(card.last_review) : undefined;
  return {
    due: card.next_due_at ? new Date(card.next_due_at) : new Date(),
    stability: card.stability ?? 0,
    difficulty: card.difficulty ?? 0,
    // elapsed_days / scheduled_days / learning_steps are outputs — ts-fsrs
    // recomputes elapsed time from last_review and the review timestamp, so
    // seeding them with 0 is correct, not a shortcut.
    elapsed_days: 0,
    scheduled_days: 0,
    learning_steps: 0,
    reps: card.reps ?? 0,
    lapses: card.lapses ?? 0,
    state,
    last_review: lastReview,
  };
}

// The inverse: an FSRS Card back into one direction's state, under the plain
// field names. sideColumns() turns it into that direction's columns.
//
// `got` is carried through as last_answer_correct because FSRS itself can't
// tell us. Its Relearning state would be the natural place to read "you just
// missed this", but that state only exists when short-term relearning steps
// are enabled — and those reschedule in minutes, which this app can't use
// (see enableShortTerm above). So the miss is recorded explicitly. The
// session builder reads it to surface recently-missed cards first.
//
// Stability and difficulty are kept as the database keeps them, in single
// precision (real columns). An answer later the same day — the repeat after a
// miss, counted since 2026-10-14 — then starts from exactly what was saved,
// and FSRS draws the same spread for it as the status check does from the
// record; from the unrounded figures it drew another, a day out.
export function fromFsrsCard(fsrsCard, got) {
  return {
    last_answer_correct: got,
    stability: Math.fround(fsrsCard.stability),
    difficulty: Math.fround(fsrsCard.difficulty),
    fsrs_state: fsrsCard.state,
    reps: fsrsCard.reps,
    lapses: fsrsCard.lapses,
    next_due_at: new Date(fsrsCard.due).toISOString(),
    last_review: fsrsCard.last_review
      ? new Date(fsrsCard.last_review).toISOString()
      : null,
  };
}

// ── Days, as the student lives them ────────────────────────────────────
//
// ts-fsrs counts the days between two answers by their UTC dates: midnight in
// London, which is 8pm in New York (7pm in winter). A word answered at 9pm and
// again the next morning was "0 days apart", so a right answer earned nothing;
// in the simulated student test (2026-09-25) half of all reviews were counted
// a day long or a day short. So ts-fsrs is handed times re-expressed so that
// their UTC date IS the student's day (4am to 4am, lib/studyDay.js), and what
// it hands back is turned into real times again.
const HOUR_MS = 3600000;
const DAY_MS = 24 * HOUR_MS;

// `timeZone` (an IANA name) is for the server, which runs in UTC and works out
// a student's days from their answers; the app leaves it out and uses the
// browser's own clock.
export function toFsrsTime(ms, timeZone) {
  const p = timeZone ? zonedParts(ms, timeZone) : localParts(ms);
  return Date.UTC(p.year, p.month - 1, p.day, p.hour, p.minute, p.second, p.ms) - DAY_STARTS_AT_HOUR * HOUR_MS;
}

function localParts(ms) {
  const d = new Date(ms);
  return {
    year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate(),
    hour: d.getHours(), minute: d.getMinutes(), second: d.getSeconds(), ms: d.getMilliseconds(),
  };
}

const zoneFormats = new Map();
function zonedParts(ms, timeZone) {
  let f = zoneFormats.get(timeZone);
  if (!f) {
    f = new Intl.DateTimeFormat("en-US", {
      timeZone, hourCycle: "h23",
      year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric",
    });
    zoneFormats.set(timeZone, f);
  }
  const p = {};
  for (const { type, value } of f.formatToParts(new Date(ms))) p[type] = Number(value);
  return { year: p.year, month: p.month, day: p.day, hour: p.hour, minute: p.minute, second: p.second, ms: ((ms % 1000) + 1000) % 1000 };
}

export function fromFsrsTime(ms) {
  const d = new Date(ms + DAY_STARTS_AT_HOUR * HOUR_MS);
  return new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(),
    d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds()).getTime();
}

// ── The repeat after a miss (2026-10-14) ──────────────────────────────
//
// A missed card comes back RE_QUEUE_OFFSET cards later in the same set. That
// answer used to be practice only: FSRS counted the day's first answer and no
// other. Since 2026-10-14 (the owner) it counts too, by FSRS's own rule for a
// second answer on the same study day, its "short-term" stability (weights
// w17–w19): a right repeat can only keep or slightly raise the card's memory
// estimate, a missed one lowers it again, and either moves its difficulty.
// ts-fsrs applies that rule only with its minute-scale steps switched on, so
// the new estimate is worked out by a second scheduler with them on, and the
// gap, as for every answer, from the estimate: never under a day. The repeat
// is then the card's latest answer, and its due date the one that stands.
//
// In the FSRS team's records, counting same-day repeats made FSRS's
// predictions more accurate for about 85% of users; no study shows whether
// students learn more for it. With FSRS's own same-day weights, a new word
// missed twice in one set came back after 1, 1, 3 and 6 days instead of 1,
// 3, 11 and 33 (2026-10-14).
const sameDayOf = new WeakMap();
function sameDay(sched) {
  let s = sameDayOf.get(sched);
  if (!s) {
    const p = sched.parameters;
    s = fsrs({ w: Array.from(p.w), request_retention: p.request_retention, maximum_interval: p.maximum_interval, enable_fuzz: false, enable_short_term: true });
    sameDayOf.set(sched, s);
  }
  return s;
}

// One answer through FSRS, as the app counts it: ts-fsrs's next(), with the
// same-day rule for a second answer on the same study day. Card and times are
// ts-fsrs's, in FSRS time (toFsrsTime). The replay of a card's answers
// (lib/fsrsHistory.js) goes through this too, so both always agree.
export function nextCard(card, now, rating, sched = scheduler) {
  const { card: next } = sched.next(card, now, rating);
  const last = card.last_review ? new Date(card.last_review).getTime() : NaN;
  const sameStudyDay = Number.isFinite(last) && Math.floor(last / DAY_MS) === Math.floor(new Date(now).getTime() / DAY_MS);
  if ((card.state ?? State.New) === State.New || !sameStudyDay) return next;
  const m = sameDay(sched).next_state({ difficulty: card.difficulty, stability: card.stability }, 0, rating);
  return { ...next, stability: m.stability, difficulty: m.difficulty };
}

// One answer, scheduled: one direction's state (plain field names) in, the
// same shape out.
//
// The answer is right or wrong — Good or Again — and nothing else. FSRS was
// built for four buttons, and ts-fsrs keeps their gaps in order: Good at
// least a day past Hard, Hard at least a day past Again. With Again at one
// day, every right answer waited at least three, however shaky; in the test,
// 601 of 922 right answers got exactly three days. This app has no Hard, so
// the gap after either answer comes from the card's own new estimate: the day
// its chance of being remembered falls to the target. The fuzz is the one
// ts-fsrs drew for this answer, so the gap is still spread a little.
export function scheduleAnswer(side, got, nowMs = Date.now(), sched = scheduler) {
  const card = toFsrsCard(side);
  if (card.last_review) card.last_review = new Date(toFsrsTime(card.last_review.getTime()));
  card.due = new Date(toFsrsTime(card.due.getTime()));
  const now = toFsrsTime(nowMs);
  const next = nextCard(card, new Date(now), got ? Rating.Good : Rating.Again, sched);
  const days = sched.next_interval(next.stability, next.elapsed_days ?? 0);
  return fromFsrsCard({
    ...next,
    scheduled_days: days,
    due: new Date(fromFsrsTime(now + days * DAY_MS)),
    last_review: new Date(nowMs),
  }, got);
}
