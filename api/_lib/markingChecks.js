// The test of how the app marks the owner's Spanish answers (2026-11-26): the
// first test of the evaluation harness for Spanish.
//
// The flashcard test (api/_lib/answerChecks.js) puts each disputed card answer
// to Claude again and compares with what the owner did. This does the same for
// the Spanish Exercises, Dialogues and class sentences, and re-marks each
// answer the whole way the app marks one: the answer key first
// (src/lib/exerciseMarking.js, free and the same every time), then Claude with
// the app's own instructions (MARK_SYSTEM in api/_lib/exercises.js) for an
// answer the key can't settle, three times over, since Claude can answer
// differently each time.
//
// What the owner counted, and where it comes from:
//
//   exercises  an Exercises answer he pressed "My answer should be accepted" on
//   dialogues  the same on a Dialogues sentence (es_exercise_disputes,
//              migration_027). Accepted, by Claude or by his Accept anyway:
//              he counts it right. Refused, and he moved on without Accept
//              anyway: he counts it wrong, as the flashcard test reads a
//              refusal he left.
//   class      a sentence from his class with Laura where he chose Count as
//              Right or Count as Wrong on the morning review: kept in
//              es_exercise_answers with marked_by 'class' and "the owner's
//              call" in its note (scripts/class-check.mjs save).
//
// Only the owner's own answers count. Answers he accepted are left out of the
// re-marking's answer key, so an answer is judged by the marking itself, not
// by his having accepted it.
//
// A case agrees when the app marks Right what he counted right, and Wrong or
// Almost what he counted wrong. Each run counts apart, for each of the three:
// answers he counted right that the app marks Wrong or Almost, and answers he
// counted wrong that the app marks Right. The red dot follows the flashcard
// test's rule (api/_lib/evalRuns.js): only a case that passed before a change
// to the marking and fails after it.
//
// It runs on the server's own schedule (api/cahier-daily.js), kept in
// eval_runs with kind 'marks' (migration_037).

import { createHash } from "node:crypto";
import { EXERCISES_BY_ID } from "../../src/data/exercises/es/index.js";
import { DIALOGUES_BY_ID } from "../../src/data/exercises/es/dialogues.js";
import { findItem, kindOf, plain, makeMarking, SPANISH_RULES, SPANISH_MARKING } from "../../src/lib/exerciseMarking.js";
import { DIALOGUE_PREFIX } from "../../src/lib/dialogueRounds.js";
import { MARK_MODEL, MARK_SYSTEM, MARK_VERSION, markPrompt, askMark, readMark } from "./exercises.js";
import { missingTable } from "../../src/lib/dealLog.js";
import { pooled, outcome, tally } from "./evalRuns.js";

export const MARKS_KIND = "marks";
export const ASKS_PER_CASE = 3;
export const MAX_CASES = 120;
const AT_ONCE = 8;
export const SOURCES = ["exercises", "dialogues", "class"];

// Seven characters that change when Claude's instructions or model change
// (MARK_VERSION) or when the answer key's rules do, since both mark.
const ruleText = (k, v) => (v instanceof RegExp || typeof v === "function" ? String(v) : v instanceof Map ? [...v] : v);
export const MARKS_VERSION = createHash("sha1")
  .update(MARK_VERSION)
  .update(makeMarking.toString())
  .update(JSON.stringify(SPANISH_RULES, ruleText))
  .digest("hex")
  .slice(0, 7);

const WAITING = "Waiting for the database update (migration_037).";
const { markByKey, typedText, typedFromLine } = SPANISH_MARKING;

export const sourceOfKey = (key) => (String(key).startsWith(DIALOGUE_PREFIX) ? "dialogues" : "exercises");

export function lookup(key) {
  return findItem(String(key).startsWith(DIALOGUE_PREFIX) ? DIALOGUES_BY_ID : EXERCISES_BY_ID, key);
}

// What he said in class, as the key reads it (the same reading as
// scripts/class-check.mjs): for a sentence with blanks, the words in each
// blank found by lining what he said up with the sentence around them; null
// when they don't line up, or for a true-or-false item.
export function typedFromSpoken(item, said) {
  if (kindOf(item) !== "gaps") return kindOf(item) === "truth" ? null : said;
  const GAP = "zzgapzz";
  const prompt = plain(String(item.prompt).replace(/\s*\([^)]*\)\s*$/, "").replace(/___/g, ` ${GAP} `));
  const esc = prompt.split(" ").map((w) => (w === GAP ? "(.+?)" : w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))).join(" ");
  const m = new RegExp(`(?:^| )${esc}(?: |$)`).exec(plain(said)) || new RegExp(`^${esc.replace(/^.*?\(\.\+\?\)/, "(.+?)")}`).exec(plain(said));
  if (!m) return null;
  const fills = m.slice(1).map((s) => s.trim());
  return fills.length === item.gaps.length ? fills : null;
}

// A key answer ending "(tú)", "(usted)" or "(ustedes)" is compared without the
// label for a spoken sentence: in class he says the sentence, not the label.
const noLabel = (a) => String(a).replace(/\s*\((?:informal|formal|tú|usted|ustedes|plural)(?:,\s*(?:tú|usted|ustedes))?\)\s*$/i, "");
const unlabelled = (item) => (kindOf(item) === "gaps" || kindOf(item) === "truth" ? item
  : { ...item, answer: noLabel(item.answer ?? ""), ...(item.also ? { also: item.also.map(noLabel) } : {}) });

// The answer the way the app marks it: { by: "key", verdict } when the answer
// key settles it, else { by: "claude", prompt } to put to Claude.
export function remark({ key, typed, spoken }) {
  const found = lookup(key);
  if (!found) return null;
  const { lesson, exercise, item } = found;
  const shaped = spoken ? typedFromSpoken(item, typed) : typedFromLine(item, typed);
  const byKey = shaped === null ? null : markByKey(spoken ? unlabelled(item) : item, shaped);
  if (byKey) return { by: "key", verdict: byKey.verdict };
  const line = shaped === null ? String(typed ?? "") : typedText(item, shaped);
  return { by: "claude", prompt: markPrompt({ lesson, exercise, item, typed: line, course: "es" }) };
}

// Whether the app's mark is the owner's: Right for right; Wrong or Almost for wrong.
export const agrees = (says, verdict) => (says === "right") === (verdict === "right");

export function marksJudge(c) {
  const asked = (c.got || []).filter((v) => v !== "error");
  return outcome(asked.filter((v) => agrees(c.says, v)).length, asked.length);
}

// A run's cases counted, all together and for each of the three. `rightMarkedDown`:
// counted right by him, marked Wrong or Almost by the app most of the time;
// `wrongMarkedRight`: counted wrong, marked Right most of the time.
export function summarize(cases) {
  const count = (list) => ({
    ...tally(list, marksJudge),
    rightMarkedDown: list.filter((c) => c.says === "right" && marksJudge(c) === "fail").length,
    wrongMarkedRight: list.filter((c) => c.says === "wrong" && marksJudge(c) === "fail").length,
  });
  return { ...count(cases), bySource: Object.fromEntries(SOURCES.map((s) => [s, count(cases.filter((c) => c.source === s))])) };
}

// The owner's call on one press of "My answer should be accepted".
export function disputeCall(row) {
  if (row.forced) return { says: "right", from: "accept-anyway" };
  if (row.accepted) return { says: "right", from: "asked" };
  return { says: "wrong", from: "left" };
}

// The same answer disputed more than once on the same item is one case: the
// first press's id, so it stays the same case from run to run, and the
// strongest call (an accept beats a refusal he moved on from).
const STRENGTH = { "accept-anyway": 2, asked: 2, left: 1 };
export function disputeCases(rows) {
  const groups = new Map();
  for (const r of rows) {
    const k = [r.user_id, r.item_key, plain(r.typed)].join("|");
    const call = disputeCall(r);
    const g = groups.get(k);
    if (!g) { groups.set(k, { first: r, call, latest: r.created_at }); continue; }
    if (Date.parse(r.created_at) < Date.parse(g.first.created_at)) g.first = r;
    if (STRENGTH[call.from] > STRENGTH[g.call.from]) g.call = call;
    if (Date.parse(r.created_at) > Date.parse(g.latest)) g.latest = r.created_at;
  }
  return [...groups.values()].map((g) => ({
    id: g.first.id, source: sourceOfKey(g.first.item_key), key: g.first.item_key, typed: g.first.typed,
    says: g.call.says, from: g.call.from, at: g.latest, spoken: false,
  }));
}

// Class sentences he decided himself (Count as Right or Count as Wrong).
export const isOwnersClassCall = (row) => row.marked_by === "class" && /the owner's call/.test(String(row.note || ""));
export function classCases(rows) {
  return rows.filter(isOwnersClassCall).filter((r) => r.verdict === "right" || r.verdict === "wrong").map((r) => ({
    id: r.id, source: "class", key: r.item_key, typed: r.typed, says: r.verdict, from: "class", at: r.answered_at, spoken: true,
  }));
}

// The whole test: every case (the most recent MAX_CASES), the key's mark once
// or Claude's ASKS_PER_CASE times, and the run saved. `ask` stands in for
// askMark in the tests. Returns { run, summary } or { skipped }.
export async function runMarksTest({ store, apiKey, adminEmail, deadline = Infinity, ask = askMark }) {
  const runs = await store.runs();
  if (runs.missing) return { skipped: WAITING };
  // Before migration_037 a run couldn't be kept: find out before paying Claude.
  const can = await store.canSave();
  if (can.missing) return { skipped: WAITING };
  if (can.error) return { skipped: `couldn't check where runs are kept: ${can.error}` };
  const owner = await store.ownerId(adminEmail);
  if (owner.error) return { skipped: `couldn't find the owner's account: ${owner.error}` };
  if (!owner.id) return { skipped: "No owner account to test." };
  const disputes = await store.disputes(owner.id);
  if (disputes.error) return { skipped: `couldn't read the disputed answers: ${disputes.error}` };
  const classes = await store.classAnswers(owner.id);
  if (classes.error) return { skipped: `couldn't read the class answers: ${classes.error}` };

  const all = [...disputeCases(disputes.rows || []), ...classCases(classes.rows || [])]
    .sort((a, b) => Date.parse(b.at) - Date.parse(a.at));
  const marked = all.map((c) => ({ c, m: remark(c) }));
  const gone = marked.filter((x) => !x.m).length;
  const chosen = marked.filter((x) => x.m).slice(0, MAX_CASES);
  if (!chosen.length) return { skipped: "No answers to test yet." };

  const toClaude = chosen.filter((x) => x.m.by === "claude");
  const asks = await pooled(
    toClaude.flatMap(({ m }) => Array.from({ length: ASKS_PER_CASE }, () => async () => {
      const mark = readMark(await ask({ apiKey, prompt: m.prompt, system: MARK_SYSTEM }));
      return mark ? mark.verdict : "error";
    })),
    AT_ONCE,
    deadline,
  );
  if (toClaude.length && asks.every((v) => typeof v !== "string" || v === "error")) {
    const reason = asks.find((v) => v && v.error)?.error?.message || "no answer";
    return { skipped: `Claude couldn't be asked: ${reason}` };
  }
  const results = chosen.map(({ c, m }) => {
    const got = m.by === "key" ? [m.verdict]
      : asks.slice(toClaude.findIndex((x) => x.c === c) * ASKS_PER_CASE).slice(0, ASKS_PER_CASE).map((v) => (typeof v === "string" ? v : "error"));
    return { id: c.id, source: c.source, key: c.key, typed: c.typed, says: c.says, from: c.from, by: m.by, got };
  });
  const summary = { ...summarize(results), left_out: all.length - gone - chosen.length, gone };
  const saved = await store.saveRun({
    kind: MARKS_KIND, version: MARKS_VERSION, model: MARK_MODEL,
    cases: summary.cases, passed: summary.every, summary, results,
  });
  if (saved.missing) return { skipped: WAITING };
  if (saved.error) throw new Error(saved.error);
  return { run: saved.row, summary };
}

// One case the change made wrong, in plain words for the morning check.
const VERDICT_WORD = { right: "Right", almost: "Almost", wrong: "Wrong" };
const SOURCE_WORD = { exercises: "Exercises answer", dialogues: "Dialogues sentence", class: "class sentence" };
export function marksSlip(c) {
  const usable = (c.got || []).filter((v) => v !== "error");
  const most = ["right", "almost", "wrong"].map((v) => [v, usable.filter((x) => x === v).length]).sort((a, b) => b[1] - a[1])[0][0];
  return `Since the last change to the marking, the app marks your ${SOURCE_WORD[c.source] || "answer"} “${c.typed}” (${c.key}) ${VERDICT_WORD[most]}, where you counted it ${c.says === "right" ? "Right" : "Wrong"}; it agreed with you before.`;
}

// A check constraint refusing kind 'marks': migration_037 not run yet.
const notAllowedYet = (error) => error && (error.code === "23514" || /eval_runs_kind_check/.test(String(error.message || "")));

// The store on Supabase, with the service role.
export function supabaseMarksStore(db) {
  const out = ({ data, error }) => (missingTable(error) ? { missing: true } : error ? { error: error.message } : { rows: data || [] });
  return {
    async ownerId(email) {
      const want = String(email || "").trim().toLowerCase();
      if (!want) return { id: null };
      for (let page = 1; page < 20; page++) {
        const { data, error } = await db.auth.admin.listUsers({ page, perPage: 200 });
        if (error) return { error: error.message };
        const u = (data?.users || []).find((x) => String(x.email || "").toLowerCase() === want);
        if (u) return { id: u.id };
        if ((data?.users || []).length < 200) break;
      }
      return { id: null };
    },
    async disputes(userId) {
      const r = out(await db.from("es_exercise_disputes").select("id, user_id, item_key, typed, marked, review, accepted, forced, created_at")
        .eq("user_id", userId).order("created_at", { ascending: false }).limit(2000));
      return r.missing ? { rows: [] } : r;
    },
    async classAnswers(userId) {
      const r = out(await db.from("es_exercise_answers").select("id, item_key, typed, verdict, marked_by, note, answered_at")
        .eq("user_id", userId).eq("marked_by", "class").order("answered_at", { ascending: false }).limit(2000));
      return r.missing ? { rows: [] } : r;
    },
    async runs() {
      return out(await db.from("eval_runs").select("id, kind, ran_at, version, model, cases, passed, summary, results")
        .eq("kind", MARKS_KIND).order("ran_at", { ascending: false }).limit(10));
    },
    // Whether eval_runs takes kind 'marks' (migration_037): an empty row put in
    // and taken out again at once. A row left behind has no version, so the
    // next run is still due and finds nothing to compare it with.
    async canSave() {
      const { data, error } = await db.from("eval_runs").insert({ kind: MARKS_KIND, cases: 0, passed: 0, summary: { probe: true }, results: [] }).select("id").single();
      if (missingTable(error) || notAllowedYet(error)) return { missing: true };
      if (error) return { error: error.message };
      await db.from("eval_runs").delete().eq("id", data.id);
      return { ok: true };
    },
    async saveRun(row) {
      const { data, error } = await db.from("eval_runs").insert(row).select("id, kind, ran_at, version, model, cases, passed, summary, results").single();
      return missingTable(error) || notAllowedYet(error) ? { missing: true } : error ? { error: error.message } : { row: data };
    },
  };
}
