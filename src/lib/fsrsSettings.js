// A student's own FSRS settings, and the rules that change them. Pure: no
// React, no Supabase, so the app and the server read the same rules.
//
// Two things are adjusted, and they are different kinds of thing:
//
//   the memory settings  FSRS's 21 numbers for how fast this student forgets
//                        and how much each right answer helps. Nobody could
//                        set them by hand; they are fitted to the student's own
//                        answers by the server (api/fsrs-fit.js), and only
//                        once there are enough answers to fit them well.
//   the target           how sure the student wants to be of remembering a
//                        card when it comes back. A real preference: more
//                        remembered against more reviews. The student can pick
//                        it, or leave it on automatic.
//
// Agreed with the owner on 2026-09-26.

// The settings every student starts with, until their own are fitted.
//
// ts-fsrs's own defaults were measured on people pressing four buttons, whose
// "Good" leaves out both the easy answers and the shaky ones; this app's
// "right" includes both. These were measured on right/wrong answers instead:
// the median of per-user fits (official optimizer, short-term off, one answer
// per card per day, Hard and Easy counted as right) over 32 users of the FSRS
// team's open fsrs-dataset (MIT; 3.1M answers), 2026-09-26. The FSRS team's
// own right/wrong fits of 9,999 other users give nearly the same numbers. On
// 32 held-out users they predict as well as ts-fsrs's defaults overall, and a
// little better over a student's first 1,000 answers, which is when starting
// settings matter. The values for Hard, Easy and same-day reviews (w1, w3,
// w15–w19) are never used here.
export const STARTING_WEIGHTS = Object.freeze([
  0.2474, 1.1246, 3.7039, 10.0193, 6.4509, 0.8317, 3.0979, 0.0011, 1.738, 0.2089,
  0.7597, 1.507, 0.0421, 0.3452, 1.7235, 0.6014, 1.8729, 0, 0, 0, 0.1459,
]);
// Which settings a student's memory estimates were worked out with. When this
// changes, the server works every card's estimate out again from its answers.
export const STARTING_VERSION = "right-wrong-2026-09-26";

// ── The target ─────────────────────────────────────────────────────────
export const TARGET_CHOICES = Object.freeze({
  auto: null,     // automatic: 90%, easing off to 85% while the student is behind
  light: 0.85,
  standard: 0.9,
  more: 0.95,
});
export const DEFAULT_TARGET = 0.9;
export const AUTO_FLOOR = 0.85;
export const AUTO_STEP = 0.02;
// Of the student's last WINDOW study days, how many must agree before the
// automatic target moves, and how long it then waits before moving again.
const WINDOW = 7;
const AGREE = 5;
const WAIT_DAYS = 7;
const KEEP_DAYS = 14;

const round2 = (x) => Math.round(x * 100) / 100;

// The target in use for a settings row (or none yet). The column is a
// single-precision real, which reads 0.85 back as 0.8500000238, so it is
// rounded to whole percents.
export function targetOf(row) {
  const t = Number(row?.target);
  return Number.isFinite(t) && t > 0 ? round2(t) : DEFAULT_TARGET;
}

// One study day's record: did the student start it with due cards left over
// from earlier days? Kept once per day, first open wins, last KEEP_DAYS days.
export function recordStudyDay(days, date, behind) {
  const list = Array.isArray(days) ? days.filter((d) => d && typeof d.date === "string") : [];
  if (list.some((d) => d.date === date)) return list;
  return [...list, { date, behind: !!behind }].sort((a, b) => (a.date < b.date ? -1 : 1)).slice(-KEEP_DAYS);
}

// The automatic target after today's record. Due cards left over on most of
// the last week's study days: two points lower, not below 85%, so the gaps
// stretch and the student can catch up instead of reviewing everything late
// (in the simulated student test, a card answered more than a day late was
// right only 36% of the time). Keeping up on most of them: two points back up,
// to 90% at most. Never more than one step a week.
export function nextAutoTarget({ target = DEFAULT_TARGET, days = [], changedAt = null, today }) {
  const recent = days.slice(-WINDOW);
  if (recent.length < WINDOW) return target;
  if (changedAt && daysBetween(changedAt.slice(0, 10), today) < WAIT_DAYS) return target;
  const behind = recent.filter((d) => d.behind).length;
  if (behind >= AGREE && target > AUTO_FLOOR) return round2(Math.max(AUTO_FLOOR, target - AUTO_STEP));
  if (WINDOW - behind >= AGREE && target < DEFAULT_TARGET) return round2(Math.min(DEFAULT_TARGET, target + AUTO_STEP));
  return target;
}

function daysBetween(fromIso, toIso) {
  return Math.round((Date.parse(`${toIso}T12:00:00Z`) - Date.parse(`${fromIso}T12:00:00Z`)) / 86400000);
}

// ── Fitting the memory settings ────────────────────────────────────────
// A student's own settings are first tried at FIRST_FIT answers, and again
// once there are REFIT_ANSWERS more and REFIT_DAYS have passed. A fit is only
// used if it predicts the student's latest answers better than the settings
// in use (api/fsrs-fit.js).
//
// Two kinds of fit are tried (owner, 2026-10-14: "the gaps should be based
// individually on each student"):
//
//   "first-gaps"  the starting settings with the student's own numbers for how
//                 long a word lasts after its first answer, right or wrong
//                 (FIRST_GAP_WEIGHTS). Every word answered twice says
//                 something about these, so a student's answers pin them down
//                 early.
//   "own"         every number fitted to the student. Most of them are about
//                 gaps of weeks and months, which a student's answers only
//                 cover later.
//
// On the owner's 809 answers (2026-10-14), words right the first time came
// back right 112 of 119 times where the starting settings expected 88%, and
// words missed the first time 60 of 103 times where they expected 71%. On
// their newest answers the full fit predicted slightly worse than the starting
// settings, and "first-gaps" slightly better than both. Until then a fit was
// first tried at 1,000 answers, then every 500 answers and 30 days.
export const FIRST_FIT = 350;
export const REFIT_ANSWERS = 50;
export const REFIT_DAYS = 7;
// w[0]: how long a word lasts after a first answer that was wrong; w[2]: after
// one that was right. (w[1] and w[3] are Hard and Easy, which this app hasn't.)
export const FIRST_GAP_WEIGHTS = Object.freeze([0, 2]);

export function fitDue({ answers, checkedAt = null, checkedAnswers = null, now = Date.now() }) {
  if (!(answers >= FIRST_FIT)) return false;
  if (!checkedAt) return true;
  const days = (now - new Date(checkedAt).getTime()) / 86400000;
  return answers - (checkedAnswers || 0) >= REFIT_ANSWERS && days >= REFIT_DAYS;
}

// The starting settings with a fit's numbers for the first gaps.
export function withFirstGaps(fitted, base = STARTING_WEIGHTS) {
  const w = [...base];
  for (const i of FIRST_GAP_WEIGHTS) w[i] = fitted[i];
  return w;
}

// Which settings a student is on: "start", "first-gaps" or "own". The server
// keeps the kind in use in fit_result.inUse; a fit from before 2026-10-14 was
// always a full one.
export function settingsKind(row) {
  if (!usableWeights(row?.weights)) return "start";
  return row?.fit_result?.inUse === "first-gaps" ? "first-gaps" : "own";
}

// A set of 21 weights that ts-fsrs can use, or null.
export function usableWeights(w) {
  return Array.isArray(w) && w.length === 21 && w.every((x) => Number.isFinite(x)) ? w.map(Number) : null;
}
