// The test of how the app marks the owner's Spanish answers
// (api/_lib/markingChecks.js): what he counted, taken from what he already did;
// each answer re-marked the app's way, answer key first and Claude only when
// the key can't settle it, three times; the counts kept apart for Exercises,
// Dialogues and class sentences; the red dot only for a case that passed
// before a change to the marking; and nothing asked or kept before
// migration_037. Against an in-memory store and a stand-in for Claude. No
// browser, nothing leaves the machine.

import { checker } from "../check.mjs";
import {
  runMarksTest, disputeCases, classCases, disputeCall, remark, agrees, marksJudge, summarize, marksSlip,
  typedFromSpoken, MARKS_KIND, MARKS_VERSION, ASKS_PER_CASE, sourceOfKey,
} from "../../api/_lib/markingChecks.js";
import { MARK_SYSTEM, REVIEW_SYSTEM, EITHER_YOU_RULE } from "../../api/_lib/exercises.js";
import { markByKey } from "../../src/lib/exerciseMarking.js";
import { FRENCH_MARKING } from "../../src/lib/frenchMarking.js";
import { regressions } from "../../api/_lib/evalRuns.js";
import { lookup } from "../../api/_lib/markingChecks.js";

const ck = checker();
const OWNER = "owner-id";

function memoryStore({ disputes = [], classes = [], migrated = true } = {}) {
  const saved = [];
  return {
    saved,
    ownerId: async () => ({ id: OWNER }),
    disputes: async (id) => ({ rows: disputes.filter((r) => r.user_id === id) }),
    classAnswers: async () => ({ rows: classes }),
    runs: async () => ({ rows: saved }),
    canSave: async () => (migrated ? { ok: true } : { missing: true }),
    saveRun: async (row) => { if (!migrated) return { missing: true }; const r = { id: `run${saved.length + 1}`, ran_at: new Date().toISOString(), ...row }; saved.push(r); return { row: r }; },
  };
}

// The stand-in for Claude: `say` maps a prompt's answer line to its verdicts,
// call after call.
let calls = [];
const asker = (say) => async ({ prompt, system }) => {
  calls.push({ prompt, system });
  const line = prompt.split("<answer>\n")[1].split("\n</answer>")[0];
  const list = say[line] || ["wrong"];
  const n = calls.filter((c) => c.prompt === prompt).length - 1;
  const v = list[n % list.length];
  if (v === "throw") throw new Error("busy");
  return { verdict: v, note: "", correct: "" };
};

const dispute = (id, key, typed, extra = {}) => ({ id, user_id: OWNER, item_key: key, typed, marked: "wrong", review: "reject", accepted: false, forced: false, created_at: `2026-11-2${id.length}T10:00:00Z`, ...extra });
const classRow = (id, key, typed, verdict, owners = true) => ({ id, item_key: key, typed, verdict, marked_by: "class", note: owners ? "Class with Laura, 2026-11-17; the owner's call" : "Class with Laura, 2026-11-17", answered_at: "2026-11-17T17:00:00Z" });

console.log("\n  what the owner counted, from what he already did");
{
  ck("Accept anyway: right", disputeCall({ forced: true, accepted: true }).says === "right");
  ck("Claude accepting his dispute: right", JSON.stringify(disputeCall({ accepted: true })) === '{"says":"right","from":"asked"}');
  ck("a refusal he moved on from: wrong", JSON.stringify(disputeCall({ accepted: false })) === '{"says":"wrong","from":"left"}');
  const grouped = disputeCases([
    dispute("a", "leccion1/4/1", "Me llamo Nico"),
    dispute("bb", "leccion1/4/1", "me llamo nico", { forced: true, accepted: true }),
    dispute("ccc", "dialogo-leccion13/1/3", "Y quieres comprar"),
  ]);
  ck("the same answer disputed twice is one case, with its first press's id and the strongest call",
     grouped.length === 2 && grouped.find((c) => c.key === "leccion1/4/1").id === "a" && grouped.find((c) => c.key === "leccion1/4/1").says === "right",
     JSON.stringify(grouped));
  ck("an Exercises key and a Dialogues key are told apart",
     sourceOfKey("leccion1/4/1") === "exercises" && sourceOfKey("dialogo-leccion13/1/3") === "dialogues");
  const cls = classCases([classRow("x", "leccion13/9/8", "Hay mucha luz", "right"), classRow("y", "leccion13/9/8", "Hay luz", "wrong", false)]);
  ck("only class sentences he decided himself are cases; those Laura's reaction decided are not",
     cls.length === 1 && cls[0].id === "x" && cls[0].source === "class" && cls[0].spoken);
}

console.log("\n  re-marked the way the app marks");
{
  const byKey = remark({ key: "leccion13/9/8", typed: "Hay mucha luz, es muy bonito.", spoken: true });
  ck("an answer the key has is marked by the key, Right, with nothing for Claude", byKey.by === "key" && byKey.verdict === "right");
  const gap = remark({ key: "leccion1/1/1", typed: "Yo [soy] estadounidense, ¿y tú? ¿De dónde eres?", spoken: false });
  ck("a gap answer kept as a line is read back into its blanks", gap.by === "key" && gap.verdict === "right", JSON.stringify(gap));
  const spokenGap = typedFromSpoken(lookup("leccion1/1/1").item, "Yo soy estadounidense, y tú, de dónde eres");
  ck("a gap sentence said in class is lined up with its blanks", JSON.stringify(spokenGap) === '["soy"]', JSON.stringify(spokenGap));
  const tu = remark({ key: "dialogo-leccion13/1/3", typed: "Y quieres comprar… verdad.", spoken: true });
  ck("the tú form where the English says only 'you' goes to Claude, not Wrong by the key (owner, 2026-11-26)", tu.by === "claude");
  const form = remark({ key: "dialogo-leccion13/1/3", typed: "Y quieren comprar, verdad?", spoken: true });
  ck("another form of the verb is still Wrong by the key", form.by === "key" && form.verdict === "wrong");
  const toClaude = remark({ key: "leccion1/4/1", typed: "Soy Nicolás.", spoken: false });
  ck("an answer the key doesn't have goes to Claude, with the app's own prompt",
     toClaude?.by === "claude" && toClaude.prompt.includes("<answer>\nSoy Nicolás.\n</answer>"), toClaude?.by);
  ck("an item no longer in the app can't be re-marked", remark({ key: "leccion99/1/1", typed: "x" }) === null);
}

console.log("\n  tú or usted where the English doesn't say which you");
{
  const item = (prompt) => ({ prompt, answer: "Quiere comprar la casa." });
  ck("'you' with no label: the tú form is Claude's to judge, either way round",
     markByKey(item("You want to buy the house."), "Quieres comprar la casa.") === null &&
     markByKey({ prompt: "You want to buy the house.", answer: "Quieres comprar la casa." }, "Quiere comprar la casa.") === null);
  ck("the key's own form is still Right", markByKey(item("You want to buy the house."), "Quiere comprar la casa.").verdict === "right");
  ck("'(usted)' or '(formal)' says which: the tú form stays Wrong",
     markByKey(item("You want to buy the house. (usted)"), "Quieres comprar la casa.")?.verdict === "wrong" &&
     markByKey(item("You want to buy the house (formal)."), "Quieres comprar la casa.")?.verdict === "wrong");
  ck("no 'you' at all: 'quieres' for 'he wants' stays Wrong", markByKey(item("He wants to buy the house."), "Quieres comprar la casa.")?.verdict === "wrong");
  ck("French is untouched: 'parles' for 'parle' is still Wrong",
     FRENCH_MARKING.markByKey({ prompt: "You speak French.", answer: "Il parle français." }, "Il parles français.")?.verdict === "wrong");
  ck("Claude is told both are right, when marking and when looking again",
     MARK_SYSTEM.includes(EITHER_YOU_RULE) && REVIEW_SYSTEM.includes(EITHER_YOU_RULE));
}

console.log("\n  agreeing with the owner");
{
  ck("Right agrees with right; Almost and Wrong agree with wrong",
     agrees("right", "right") && !agrees("right", "almost") && !agrees("right", "wrong") && agrees("wrong", "almost") && agrees("wrong", "wrong") && !agrees("wrong", "right"));
  ck("a failed ask counts for nothing", marksJudge({ says: "right", got: ["right", "error", "right"] }) === "pass" && marksJudge({ says: "right", got: ["error"] }) === "untried");
  const s = summarize([
    { source: "exercises", says: "right", got: ["almost", "almost", "almost"] },
    { source: "dialogues", says: "wrong", got: ["right", "right", "wrong"] },
    { source: "class", says: "right", got: ["right"] },
    { source: "class", says: "wrong", got: ["right", "almost", "wrong"] },
  ]);
  ck("counted apart for each of the three: right marked down, and wrong marked Right",
     s.bySource.exercises.rightMarkedDown === 1 && s.bySource.dialogues.wrongMarkedRight === 1 &&
     s.bySource.class.every === 1 && s.bySource.class.sometimes === 1 && s.cases === 4, JSON.stringify(s.bySource));
}

console.log("\n  the test, as the server runs it");
{
  const store = memoryStore({
    disputes: [
      dispute("a", "leccion1/4/1", "Soy Nicolás.", { accepted: true, review: "accept" }), // Claude to judge; he counted it right
      dispute("bb", "dialogo-leccion13/1/3", "Y quiere comprar, verdad?"),               // the key's own answer; he left a refusal
      { ...dispute("ccc", "leccion1/4/1", "x"), user_id: "student" },                     // another student: not a case
    ],
    classes: [classRow("k", "leccion13/9/8", "Hay mucha luz, es muy bonito.", "right")],
  });
  calls = [];
  const done = await runMarksTest({ store, apiKey: "k", adminEmail: "o", ask: asker({ "Soy Nicolás.": ["right", "almost", "right"] }) });
  ck("only the owner's cases, Claude asked three times only where the key can't settle it",
     done.summary.cases === 3 && calls.length === ASKS_PER_CASE && calls.every((c) => c.system === MARK_SYSTEM), `${done.summary.cases} cases, ${calls.length} calls`);
  const run = store.saved[0];
  ck("the run is kept as kind marks, with its version, and each case says who marked it",
     run.kind === MARKS_KIND && run.version === MARKS_VERSION && run.results.find((c) => c.id === "a").by === "claude" &&
     run.results.find((c) => c.id === "bb").by === "key" && run.results.find((c) => c.id === "a").got.length === 3);
  ck("the key's own answer he left wrong is a disagreement: the key marks it Right",
     run.summary.bySource.dialogues.wrongMarkedRight === 1 && run.summary.bySource.exercises.sometimes === 1 && run.summary.bySource.class.every === 1,
     JSON.stringify(run.summary.bySource));
}

console.log("\n  before migration_037, and when Claude can't be asked");
{
  const store = memoryStore({ disputes: [dispute("a", "leccion1/4/1", "Soy Nicolás.", { accepted: true })], migrated: false });
  calls = [];
  const r = await runMarksTest({ store, apiKey: "k", adminEmail: "o", ask: asker({}) });
  ck("nothing is asked and nothing kept until the database takes the run", /migration_037/.test(r.skipped) && calls.length === 0 && !store.saved.length);
  const busy = memoryStore({ disputes: [dispute("a", "leccion1/4/1", "Soy Nicolás.", { accepted: true })] });
  const b = await runMarksTest({ store: busy, apiKey: "k", adminEmail: "o", ask: asker({ "Soy Nicolás.": ["throw"] }) });
  ck("no run is kept when every ask to Claude failed", /Claude couldn't be asked/.test(b.skipped) && !busy.saved.length);
  const empty = await runMarksTest({ store: memoryStore(), apiKey: "k", adminEmail: "o", ask: asker({}) });
  ck("with nothing to test, nothing runs", empty.skipped === "No answers to test yet.");
}

console.log("\n  the red dot: only what a change to the marking broke");
{
  const results = (got) => [{ id: "a", source: "class", key: "leccion13/9/8", typed: "Hay luz", says: "right", got }];
  const before = { version: "v1", results: results(["right", "right", "right"]) };
  const sameVersion = { version: "v1", results: results(["wrong", "wrong", "almost"]) };
  const after = { version: "v2", results: results(["almost", "almost", "almost"]) };
  ck("two runs of the same marking light nothing", regressions(sameVersion, before, marksJudge, (c) => c.says).length === 0);
  ck("a case right before a change and wrong after it is named",
     JSON.stringify(regressions(after, before, marksJudge, (c) => c.says)) === '["a"]');
  const line = marksSlip(after.results[0]);
  ck("named in plain words: what he said, the item, the app's mark and his",
     /class sentence “Hay luz” \(leccion13\/9\/8\) Almost, where you counted it Right/.test(line), line);
}

ck.done();
