// Code check of 7 November 2026, problems 20 to 38 (studying flashcards).
// No browser: what can be run as a function is run, and what lives in a page
// or a hook is checked in the source for the rule the fix put there.
process.env.TZ = "America/New_York";
import { readFileSync } from "node:fs";
import { checker } from "../check.mjs";
import { classifyCard } from "../../src/lib/cardTypes.js";
import { reconcileLessons } from "../../src/lib/lessonSync.js";
import { lessonSource, lessonCardKey } from "../../src/lib/lessonSource.js";
import { nextAutoTarget } from "../../src/lib/fsrsSettings.js";
import { localISODate } from "../../src/lib/studyDay.js";
import { testStart } from "../../api/fsrs-fit.js";

const ck = checker();
const read = (f) => readFileSync(new URL(`../../${f}`, import.meta.url), "utf8");
const app = read("src/FlashcardApp.jsx");
const settings = read("src/useFsrsSettings.js");
const deckHook = read("src/useUserDeck.js");
const appShell = read("src/App.jsx");

// 20: the Lessons page counted due cards the way the dealer does, until it stopped showing them.
// The Lessons page no longer shows a lesson's due count (owner, 2026-11-26:
// the note under a switched-off lesson went with the other grey explainer
// text), so there is no count to check.
ck("20 the Lessons page shows no due count of its own", !/dueRemaining/.test(app.slice(app.indexOf('if (mode === "lessons")'), app.indexOf('if (mode === "lessons")') + 12000)));

// 21: a new French student sees the lessons being added, not Welcome.
ck("21 'Adding the lessons' shows while the sync runs on an empty deck",
   /userCards\.length === 0 && deckFreshSeq > 0 && !lessonSyncDone/.test(app) && app.includes("setLessonSyncDone(true)"));

// 22: practice entries survive a direction change.
ck("22 a direction change keeps practice entries, turned", /c\._bucket === "practice"[^\n]*turned\.set/.test(app));

// 23: the day named is the study day.
ck("23 'Mark for review' names the study day", app.includes("new Date(`${localISODate(new Date(due))}T12:00:00`).toLocaleDateString"));

// 24: Auto-speak keyed on the slot, quiet once the set is done.
ck("24 auto-speak depends on the slot, not the card object",
   /\[autoSpeak, cardSlot, flipped, mode, sessionDone, oneAnswer\]/.test(app) && /!autoSpeak \|\| !c \|\| mode !== "study" \|\| sessionDone/.test(app));

// 25: a failed read of the settings is tried again.
ck("25 the settings read is retried after a failure", /setReadTry/.test(settings) && /failedRead\.current = true/.test(settings));

// 26: the study day is recorded on a page left open, from fresh settings.
ck("26 the day check runs again when a new day is seen",
   /dayTick/.test(settings) && /dailyRan\.current !== localISODate\(\)/.test(settings));
ck("26 the days list is read fresh before it is written back", /from\("fsrs_settings"\)\.select\("\*"\)\.eq\("user_id", userId\)\.maybeSingle\(\);\s*if \(error\) \{\s*\/\/ Not recorded/.test(settings));

// 27: the try is judged on answers neither set was made from.
{
  const t = (n) => Array.from({ length: n }, (_, i) => 1000 + i);
  ck("27 with starting settings the test is the newest fifth", testStart(t(100), NaN) === 80);
  ck("27 with a fit in use the test is the newest fifth of answers after it",
     testStart([...t(100), ...Array.from({ length: 100 }, (_, i) => 5000 + i)], 3000) === 100 + 80);
  ck("27 nothing after the fit: the try waits", testStart(t(100), 9999) === 100);
}

// 28: the one-week wait counts study days.
{
  // New York, 9pm on 7 Nov 2026 is already 8 Nov in UTC.
  const changedAt = localISODate(new Date("2026-11-08T02:00:00Z"));
  ck("28 a change made at 9pm counts as that evening's study day", changedAt === "2026-11-07", changedAt);
  const days = Array.from({ length: 14 }, (_, i) => ({ date: `2026-11-0${(i % 9) + 1}`, behind: true }));
  ck("28 the hook passes the study day", /localISODate\(new Date\(current\.target_changed_at\)\)/.test(settings));
  ck("28 the target still waits out the week", nextAutoTarget({ target: 0.9, days, changedAt: "2026-11-07", today: "2026-11-09" }) === 0.9);
}

// 29: pressing the chosen option again changes nothing.
ck("29 the chosen option pressed again saves nothing", /choice === choiceOf\(row\)\) return null/.test(settings));

// 30: archive.js no longer offers a bulk delete.
{
  const a = read("src/lib/archive.js");
  ck("30 archive.js has no delete command", !/delete from user_cards/.test(a) && /load-bearing|still used/.test(a));
}

// 31: a reload keeps the deck in memory.
ck("31 the browser's copy only seeds the first load", /const known = loadedForUser\.current === userId;\s*const cached = known \? null : readCache\(storeId\)/.test(deckHook));

// 32: Spanish cards are sorted by the type they were added with.
{
  ck("32 a Spanish word with a space is a word, not a phrase", classifyCard({ cat: "vocab", f: "el taco al pastor con piña y cebolla", b: "x" }, "es") === "vocab");
  ck("32 a Spanish expression is a phrase", classifyCard({ cat: "expr", f: "a", b: "b" }, "es") === "phrase");
  ck("32 a Spanish grammar card is grammar", classifyCard({ cat: "gram", f: "a", b: "b" }, "es") === "grammar");
  ck("32 the taco card is no longer grammar", classifyCard({ cat: "vocab", f: "la orden de tacos", b: "the order of tacos" }, "es") === "vocab");
  ck("32 French stays as it was", classifyCard({ cat: "vocab", f: "chat", b: "cat" }) === "vocab");
}

// 33: a reworded card whose new wording the deck has is not renamed.
{
  const lessons = [{ id: "t", cards: [["regarder (impératif) → tu", "regarde", "G", , "regarder → tu"]] }];
  const old = { f: "regarder → tu", b: "regarde", cat: "gram", row_id: 1, source: lessonSource("t", lessonCardKey("regarder → tu")) };
  const own = { f: "regarder (impératif) → tu", b: "regarde", cat: "gram", row_id: 2, source: "cahier-upload" };
  const r = reconcileLessons(lessons, [old, own], []);
  ck("33 no rename onto a front the deck has", r.retext.length === 0 && r.taken.length === 1, JSON.stringify(r.retext));
  const r2 = reconcileLessons(lessons, [old], []);
  ck("33 the rename still happens when the front is free", r2.retext.length === 1);
  ck("33 one refused rename does not stop the update", /rename refused/.test(app));
}

// 34: cards with answers on record are archived, not deleted.
ck("34 stale cards are checked against the answer record before any delete",
   app.indexOf('.from(tbl("card_reviews"))') > 0 && app.indexOf("const toDelete") > app.indexOf('.from(tbl("card_reviews"))') &&
   /toDelete\.slice/.test(app) && /for \(const rowId of toArchive\)/.test(app));

// 35: an unread deck is tried again and said so.
ck("35 the deck read is retried with a wait", /setReloadCounter\(\(n\) => n \+ 1\),\s*Math\.min\(300000/.test(deckHook) && /loadFailed/.test(deckHook));
ck("35 the page says so", /data-deck-unread/.test(app));
ck("35 coming back reads the deck again when none has landed", /if \(!deckFetchedAt\) \{ reloadDeck\(\); return; \}/.test(app));

// 36: answers waiting to be saved are not dropped by leaving.
ck("36 leaving tries the unsaved answers once more", /e\.failed\) \{ try \{ e\.send\(\)/.test(app));
ck("36 switching language or signing out asks first", /const onCourse = rawOnCourse/.test(app) && /const onSignOut = \(\) => \{ if \(confirmLeaveUnsaved\(\)\)/.test(app));

// 37: a tab keeps its language until its own flag is used.
ck("37 the stored language is read once per sign-in", /signInCourse\.current\.userId !== userId/.test(appShell) && !/course \|\| readCourse\(userId\)/.test(appShell));

// 38: quick switches are not undone by an earlier echo.
ck("38 an echo is ignored while saves are in flight", /choiceSavesRef\.current > 0\) return;/.test(app) && /choiceSavesRef\.current -= 1/.test(app));

ck.done();
