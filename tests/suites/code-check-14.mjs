// Code check of 7 November 2026, problems 84, 103, 111 and 112 (the parts
// batches 6 and 7 left open). No browser, no database.
import { readFileSync, existsSync } from "node:fs";
import { checker } from "../check.mjs";
import { repeatsCases } from "../../api/_lib/repeatsChecks.js";

const ck = checker();
const read = (f) => readFileSync(new URL(`../../${f}`, import.meta.url), "utf8");

// 84: with the database change, put-aways are told apart by the mark, not the date.
const kept = [{ id: "k", front: "le cas", back: "case" }];
const dup = (id, extra) => ({ id, front: "un cas", back: "a case", merged_into: "k", ...extra });
const ids = (d) => repeatsCases({ duplicates: d, kept }).map((c) => c.id).filter((i) => i.startsWith("dup:"));
ck("84 once archived_by exists, the daily run's own put-away is left out whatever its date", ids([dup("a", { archived_at: "2026-10-07T10:00:00Z", archived_by: "daily-run" })]).length === 0);
ck("84 and the owner's clean-up is kept even if dated after 12 October", ids([dup("b", { archived_at: "2026-10-20T10:00:00Z", archived_by: null })]).join() === "dup:b");
ck("84 before the change (no archived_by) the date rule still holds", ids([dup("c", { archived_at: "2026-10-07T10:00:00Z" }), dup("d", { archived_at: "2026-10-20T10:00:00Z" })]).join() === "dup:c");
const mig = read("migrations/migration_029_archived_by.sql");
ck("84 the database change adds the column and marks the daily run's rows, and touches no answers", /add column if not exists archived_by/.test(mig) && /archived_by = 'daily-run'/.test(mig) && !/card_reviews|delete\s+from|truncate/i.test(mig));
ck("84 schema.sql lists it", /migration_029/.test(read("supabase/schema.sql")));
const sd = read("api/_lib/statusDaily.js");
ck("84 the daily run marks its put-aways and falls back when the column is missing", /archived_by: "daily-run"/.test(sd) && /PGRST204/.test(sd));

// 103: the script asks the app's own question and says it saves no verdicts.
const rd = read("scripts/resolve-disputes.mjs");
ck("103 the script uses the app's own question and says why it keeps no verdict", /askClaude/.test(rd) && /not written to answer_reviews/.test(rd) && /since 2026-04-15/.test(rd));

// 111: a class that can't be read shows a plain line with nothing about an account.
const sync = read("api/cahier-sync.js");
ck("111 a linked notebook shows one plain line, and the raw error goes to the log", /CLASS_NOT_READ = "A class couldn't be read just now\. It will be tried again\."/.test(sync) && /return \{ error: CLASS_NOT_READ \}/.test(sync) && /isClaudeFailure\(e\) \? CLASS_NOT_READ/.test(sync));
const cp = read("api/_lib/claudeProblem.js");
ck("111 out of credit has its own sentence, apart from overloaded", /BILLING_TEXT = "Your Anthropic account has run out of credit/.test(cp) && /OVERLOADED_TEXT/.test(cp));
ck("111 the answer review and the class upload use those sentences", /claudeError\(err, "look at your answer"\)/.test(read("api/review-answer.js")) && /claudeError\(e, "read this class"\)/.test(read("api/cahier-parse.js")));

// 112: an accepted answer's kept-or-not state is held with it.
const ua = read("src/useAnswerDispute.js");
ck("112 the page keeps with each accepted answer whether it was kept, and the line is read from it", /how === "missing"/.test(ua) && /how === "unkept"/.test(ua) && /answer\?\.accepted/.test(ua) && /accepted: how/.test(read("src/ExercisesPage.jsx")) && /accepted: how/.test(read("src/DialoguesPage.jsx")));

ck.done();
