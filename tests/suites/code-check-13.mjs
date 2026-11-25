// Code check of 7 November 2026, problems 45 to 53, 76 to 79 and 133 to 139
// (Dialogues, Podcasts, Stats, the look of the app, the iPhone app, the
// database). No browser and no database: what lives in the pages is checked in
// its source, and the pure helpers are run.
import { readFileSync } from "node:fs";
import { checker } from "../check.mjs";
import { roundsOf, nextSentence } from "../../src/lib/dialogueRounds.js";
import { indexOfWord, phraseRanges } from "../../src/lib/podcastProgress.js";
import { statsOverTime } from "../../src/lib/progressHistory.js";
import { niceStep } from "../../src/lib/niceStep.js";
import { MARK_SYSTEM } from "../../api/_lib/podcastQuestions.js";

const ck = checker();
const read = (f) => readFileSync(new URL(`../../${f}`, import.meta.url), "utf8");
const dlg = read("src/DialoguesPage.jsx"), exs = read("src/ExercisesPage.jsx"), pod = read("src/PodcastsPage.jsx");
const srv = read("api/_lib/podcasts.js"), flash = read("src/FlashcardApp.jsx"), prog = read("src/useProgress.js");

// 45: where a finished round ended does not move when an answer is re-marked.
const day = "2026-11-07T10:00:00";
const row = (index, verdict, minute, extra = {}) => ({ index, verdict, keptVerdict: verdict, answeredAt: `2026-11-07T10:${String(minute).padStart(2, "0")}:00`, ...extra });
const answers = [];
for (let i = 0; i < 4; i++) answers.push(row(i, i === 2 ? "wrong" : "right", i));
answers.push(row(2, "right", 5)); // the retry of sentence 3
const asKept = roundsOf(4, answers, "2026-11-07");
ck("45 a round with one miss ends with its retry", asKept.finished.length === 1 && asKept.tries.size === 0);
// The key now marks that first answer Almost: the round must still end at the retry.
const remarked = answers.map((r, i) => (i === 2 ? { ...r, verdict: "almost" } : r));
const after = roundsOf(4, remarked, "2026-11-07");
ck("45 marking the missed answer Almost later leaves the finished round finished", after.finished.length === 1 && after.tries.size === 0, JSON.stringify(after.tries.size));
ck("45 the round's figures come up to date (no sentence counted missed)", after.finished[0].missed === 0);
// A round under way: the Wrong first try accepted before it came back is not asked again.
const underWay = [0, 1, 2, 3].map((i) => (i === 2 ? row(2, "wrong", 2) : row(i, "right", i)));
ck("45 a miss comes back while it is Wrong", nextSentence(4, roundsOf(4, underWay, "2026-11-07").tries)?.index === 2);
const accepted = underWay.map((r) => (r.index === 2 ? { ...r, verdict: "right" } : r));
ck("45 a miss accepted before it came back does not come back", roundsOf(4, accepted, "2026-11-07").finished.length === 1);

// 46: the hint is kept with the typed answer on both pages.
ck("46 Dialogues keeps the hint beside the draft and puts it back when marking fails", /hintsKept\.get\(draftKey\)/.test(dlg) && /if \(hintSent\) hintsKept\.set\(draftKey, hintSent\)/.test(dlg) && /hints: hintSent/.test(dlg));
ck("46 Exercises starts the box from the kept hint", /hintsKept\.get\(draftKey\)/.test(exs));

// 47: the Ask the tutor plumbing is gone from both pages.
ck("47 neither page has Ask the tutor code left", !/askTutor|askedKey|onAsk/.test(dlg + exs));

// 48-50: podcasts page.
ck("48 the end of the episode opens the first untimed question not yet come up", /stopsRef\.current\.find\(\(s\) => !Number\.isFinite\(s\.t\) && !stoppedOnce\.current\.has\(s\.key\)\)/.test(pod));
ck("49 the transcript is looked for again every few seconds", /EARLY_LOOK_MS/.test(pod) && /setTimeout\(read, EARLY_LOOK_MS\)/.test(pod) && /early\?\.stories/.test(pod));
ck("50 a question at the end of the episode has no Continue listening", /setWaitKey\(ended \? null : key\)/.test(pod));
ck("51 a waiting reply with a key message shows the key button", /data\?\.waiting && data\.code/.test(pod) && /AuthenticationError\) \{\s*keyProblem/.test(srv));

// 52: whole words only.
ck("52 été is not found inside société", indexOfWord("la société et cet été", "été") === indexOfWord("la société et cet été", "cet été") + 4);
const fr = "la société, cet été";
const [r] = phraseRanges(fr, [{ inText: "été" }]);
ck("52 the highlight lands on cet été", fr.slice(r.start, r.end) === "été" && r.start === fr.lastIndexOf("été"));
ck("52 a word only inside another word is not highlighted", phraseRanges("la société", [{ inText: "été" }]).length === 0);
ck("52 an apostrophe phrase still matches", phraseRanges("c’est l’été", [{ inText: "l'été" }]).length === 1);

// 53: Claude's marking.
ck("53 the marking instructions hold no double quotation marks", !MARK_SYSTEM.includes('"'));
ck("53 a whole reply that ran out of room is used", /JSON\.parse\(text\);\s*\} catch \{\s*if \(response\?\.stop_reason === "max_tokens"\)/.test(read("api/_lib/podcastQuestions.js")));

// 76: Stats after Reset all progress.
const D = (iso) => `${iso}T12:00:00`;
const card = { row_id: 1, cat: "vocab", fsrs_state: 2, en_fsrs_state: 2 };
const rec = (id, direction, iso, state_before) => ({ id, card_id: 1, direction, answered_at: D(iso), correct: true, counted: true, state_before, stability_after: 5 });
const rows = [rec(1, "fr", "2026-10-05", 0), rec(2, "en", "2026-10-05", 0), rec(3, "fr", "2026-10-27", 0), rec(4, "fr", "2026-10-31", 2)];
const h = statsOverTime({ cards: [card], rows, now: Date.parse(D("2026-11-03")) });
const dayOf = (iso) => h.days.find((d) => d.iso === iso);
ck("76 the first meeting shows as a new card", dayOf("2026-10-05").fresh === 1);
ck("76 the word met again after the reset shows as a new card", dayOf("2026-10-27").fresh === 1 && dayOf("2026-10-27").reviews === 0);
const gain = h.rememberedAt(Date.parse(D("2026-11-03"))).all;
ck("76 the old English answers no longer count for the other way", gain < 0.001, String(gain));

// 77: tallies.
ck("77 a failed load keeps the tallies and tries again", /if \(!cached\) setProgress\(\{\}\)/.test(prog) && /setAttempt\(\(n\) => n \+ 1\)/.test(prog));
ck("77 nothing is saved until the tallies are known", /userId && !talliesKnown\.current\) return/.test(prog));

// 78: the chart's side.
ck("78 the step is never under 1", niceStep(0) === 1 && niceStep(1.8) === 1 && niceStep(2) === 1 && niceStep(40) >= 10);

// 79: the study day is saved like an answer.
ck("79 the day is saved through the retrying save", /save\(`day:\$\{todayISO\}`/.test(flash));

// 133-135: look.
const styles = flash;
ck("133 the gear's outline is written as three longhands", /gearBtn: \{[^}]*borderWidth:1, borderStyle:"solid", borderColor:/.test(styles) && !/gearBtn: \{[^}]*border:"1px/.test(styles));
ck("134 the Lesson notes button's outline is written as three longhands", /chipToggle: \{[^}]*borderWidth:1, borderStyle:"solid", borderColor:/.test(styles));
ck("135 only the iPhone app runs to the screen's edges", !/viewport-fit/.test(read("index.html")) && /IN_IPHONE_APP && typeof document/.test(read("src/lib/nativeApp.js")) && /viewport-fit=cover/.test(read("src/lib/nativeApp.js")));

// 136-138: the iPhone app.
const plist = read("ios/App/App/Info.plist");
ck("136 the iPhone app is always light", /<key>UIUserInterfaceStyle<\/key>\s*<string>Light<\/string>/.test(plist));
const ipad = plist.match(/UISupportedInterfaceOrientations~ipad<\/key>\s*<array>([\s\S]*?)<\/array>/)[1];
ck("138 an iPad gets upright only", /Portrait</.test(ipad) && !/Landscape|UpsideDown/.test(ipad));
const auth = read("src/Auth.jsx");
ck("137 the app says only the code signs you in, the website stays as it was", /Email me a sign-in code/.test(auth) && /not in this app/.test(auth) && /Send login link/.test(auth) && /opens the app in a new tab/.test(auth));

// 139: database change 007.
const m7 = read("migrations/migration_007_fsrs_reseed.sql");
ck("139 database change 007 says never to run it again and no longer says it is safe", /Never run it again/.test(m7) && !/safe to run more than once/.test(m7));
ck("139 it stops when any answer is kept, and lets a fresh setup through", /to_regclass\('public\.card_reviews'\) is not null/.test(m7) && /raise exception 'migration_007 must never be run again/.test(m7));
ck("139 the note in change 006 agrees", !/re-runnable/.test(read("migrations/migration_006_fsrs.sql")));

ck.done();
