#!/usr/bin/env node
// How often each of a student's cards is said, counted as a whole phrase in
// French film and TV subtitles (scripts/phrases.mjs says how), saved with the
// card (migration_019) so their older cards can come most-said first
// (src/lib/sessionQueue.js). The owner, 2026-10-14.
//
//   node scripts/count-phrases.mjs --email x@y.z            count their cards not counted yet; print, write nothing
//   node scripts/count-phrases.mjs --email x@y.z --apply    and save each card's number
//   node scripts/count-phrases.mjs --email x@y.z --all      count every card again
//   --lines 20000000                                         read only the first lines of the subtitles
//   --save <file>                                            and write each card's number to a file, to look over
//   --lexique <file> --subtitles <file>                      the data, if not where it is kept
//   --helpers 2                                              how many of the Mac's processors to use (default half)
//
// The reading is shared between helpers (count-phrases-worker.mjs). It is
// slow and keeps those processors busy throughout: the first full count of
// the owner's 3,867 cards took 19 minutes on 7 of the Mac's 8, before a
// speed-up not yet timed.
//
// The data is on this Mac, too big for the repo:
//   Lexique 3.83 (CC BY-SA 4.0, New & Pallier, lexique.org), the forms of
//     French words: ~/.claude/scheduled-tasks/morning-check/data/lexique/Lexique383.tsv
//   OpenSubtitles 2018, French (P. Lison & J. Tiedemann 2016, from the OPUS
//     project, opus.nlpl.eu), the subtitles:
//     ~/.claude/scheduled-tasks/morning-check/data/opensubtitles/fr.txt.gz
//
// Without --apply it only reads. With it, it writes said_per_million and
// said_counted_at on the student's own cards, through set_said(), and nothing
// else.

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import zlib from "node:zlib";
import readline from "node:readline";
import { Worker } from "node:worker_threads";
import { fileURLToPath } from "node:url";
import { readLexique, phrasesOf, phraseKey, saidPerMillion, MIN_TIMES } from "./phrases.mjs";
import { isArchived } from "../src/lib/archive.js";
import { lessonIdOf } from "../src/lib/lessonSource.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const argVal = (k) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : null; };
const APPLY = args.includes("--apply");
const ALL = args.includes("--all");
const LINES = Number(argVal("--lines")) || Infinity;
const SAVE = argVal("--save");
const DATA = path.join(os.homedir(), ".claude", "scheduled-tasks", "morning-check", "data");
const LEXIQUE = argVal("--lexique") || path.join(DATA, "lexique", "Lexique383.tsv");
const SUBTITLES = argVal("--subtitles") || path.join(DATA, "opensubtitles", "fr.txt.gz");

// Settings: this checkout's .env.local, else the main checkout's (a worktree
// has none of its own).
const MAIN = /[\\/]\.claude[\\/]worktrees[\\/][^\\/]+$/.test(ROOT) ? path.resolve(ROOT, "..", "..", "..") : null;
for (const dir of [ROOT, MAIN].filter(Boolean)) {
  if (dir === MAIN && process.env.SUPABASE_URL) break;
  for (const file of [".env.local", ".env"]) {
    const p = path.join(dir, file);
    if (!fs.existsSync(p)) continue;
    for (const line of fs.readFileSync(p, "utf8").split("\n")) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
  }
}
const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, ADMIN_EMAIL } = process.env;
if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY. Put them in .env.local or the environment.");
  process.exit(1);
}
const tidy = (s) => String(s || "").trim().toLowerCase();
const EMAIL = tidy(argVal("--email")) || tidy(ADMIN_EMAIL) || tidy(process.env.VITE_ADMIN_EMAIL);
if (!EMAIL) { console.error("Whose cards? Pass --email."); process.exit(1); }
for (const [what, file] of [["Lexique", LEXIQUE], ["the subtitles", SUBTITLES]]) {
  if (!fs.existsSync(file)) { console.error(`Can't find ${what} at ${file}.`); process.exit(1); }
}

const H = { apikey: SUPABASE_SERVICE_ROLE_KEY, Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}` };
async function get(p) {
  const r = await fetch(`${SUPABASE_URL}${p}`, { headers: H });
  const body = await r.json().catch(() => null);
  return { ok: r.ok, status: r.status, body };
}

// The student.
let user = null;
for (let page = 1; page < 50 && !user; page++) {
  const r = await get(`/auth/v1/admin/users?page=${page}&per_page=200`);
  const users = r.body?.users || [];
  user = users.find((u) => tidy(u.email) === EMAIL) || null;
  if (users.length < 200) break;
}
if (!user) { console.error(`No account for ${EMAIL}.`); process.exit(1); }

// Their cards in study. said_counted_at is migration_019's: without it every
// card is counted, and nothing can be saved.
async function readCards(withCounted) {
  const out = [];
  for (let from = 0; ; from += 1000) {
    const cols = `id,front,category,source,archived_at,merged_into${withCounted ? ",said_counted_at" : ""}`;
    const r = await get(`/rest/v1/user_cards?select=${cols}&user_id=eq.${user.id}&order=id&limit=1000&offset=${from}`);
    if (!r.ok) return { error: r.body };
    out.push(...r.body);
    if (r.body.length < 1000) return { cards: out };
  }
}
let migrated = true;
let read = await readCards(true);
if (read.error) {
  if (!/said_counted_at/.test(JSON.stringify(read.error))) { console.error("Couldn't read the cards:", read.error); process.exit(1); }
  migrated = false;
  read = await readCards(false);
  if (read.error) { console.error("Couldn't read the cards:", read.error); process.exit(1); }
}
if (APPLY && !migrated) {
  console.error("Nothing saved: the database needs migration_019 first (migrations/migration_019_said_per_million.sql).");
  process.exit(1);
}
// The cards the order puts by how often they're said: the student's own, in
// study. Lesson cards keep their lesson's order and grammar cards their place
// (the owner, 2026-10-14), so neither is counted.
const inStudy = read.cards.filter((c) => !isArchived(c) && !c.archived_at && !c.merged_into);
const counted = inStudy.filter((c) => !lessonIdOf(c) && c.category !== "G");
const todo = counted.filter((c) => ALL || !c.said_counted_at);
console.log(`${EMAIL}: ${inStudy.length} cards in study, ${counted.length} of their own words and phrases, ${todo.length} to count.`);
if (!todo.length) { console.log("Nothing to count."); process.exit(0); }

// Lexique, then every phrase, then one pass through the subtitles, shared out
// in batches of lines to the helpers, each counting its own; then their counts
// added up.
const lex = readLexique(fs.readFileSync(LEXIQUE, "utf8"));
const fronts = todo.map((c) => c.front);
const keys = new Set(fronts.flatMap((f) => phrasesOf(f, lex)).map(phraseKey));
const started = Date.now();
const HELPERS = Number(argVal("--helpers")) || Math.max(1, Math.floor(os.cpus().length / 2));
const helpers = Array.from({ length: HELPERS }, () => {
  const w = new Worker(new URL("./count-phrases-worker.mjs", import.meta.url), { workerData: { lexique: LEXIQUE, fronts } });
  const h = { w, ready: false, done: null };
  w.on("error", (e) => { console.error("A helper stopped:", e); process.exit(1); });
  w.on("message", (m) => {
    if (m === "ready") { h.ready = true; wake(); } else h.done(m);
  });
  return h;
});
const waiters = new Set();
const wake = () => { for (const r of [...waiters]) { waiters.delete(r); r(); } };
const nextMessage = () => new Promise((r) => waiters.add(r));
async function freeHelper() {
  for (;;) {
    const h = helpers.find((x) => x.ready);
    if (h) { h.ready = false; return h; }
    await nextMessage();
  }
}
let lines = 0;
let batch = [];
const rl = readline.createInterface({ input: fs.createReadStream(SUBTITLES).pipe(zlib.createGunzip()), crlfDelay: Infinity });
for await (const line of rl) {
  batch.push(line);
  if (++lines % 10000000 === 0) console.error(`  ${lines / 1e6}M lines read, ${Math.round((Date.now() - started) / 1000)}s`);
  if (batch.length === 20000) { (await freeHelper()).w.postMessage(batch); batch = []; }
  if (lines >= LINES) break;
}
rl.close();
if (batch.length) (await freeHelper()).w.postMessage(batch);
const parts = await Promise.all(helpers.map(async (h) => {
  while (!h.ready) await nextMessage();
  const part = await new Promise((r) => { h.done = r; h.w.postMessage(null); });
  await h.w.terminate();
  return part;
}));
const counts = new Map([...keys].map((k) => [k, 0]));
let total = 0;
for (const part of parts) {
  total += part.words;
  for (const [k, n] of part.counts) {
    if (!counts.has(k)) { console.error("A helper counted a phrase the script doesn't know. Nothing saved."); process.exit(1); }
    counts.set(k, counts.get(k) + n);
  }
}
const result = { counts, words: total };
console.log(`Read ${lines.toLocaleString()} lines of subtitles, ${total.toLocaleString()} words, in ${Math.round((Date.now() - started) / 1000)}s.`);

// Each card's number.
const at = new Date().toISOString();
const rows = todo.map((c) => ({ id: c.id, front: c.front, said: saidPerMillion(c.front, lex, result) }));
const scored = rows.filter((r) => r.said > 0).sort((a, b) => b.said - a.said);
const show = (r) => `  ${r.front} — ${r.said >= 10 ? Math.round(r.said) : r.said.toFixed(2)} per million`;
console.log(`\n${scored.length} of ${rows.length} said at least ${MIN_TIMES} times; the other ${rows.length - scored.length} keep their place.`);
console.log("\nMost said:"); for (const r of scored.slice(0, 15)) console.log(show(r));
console.log("\nLeast said, of those counted:"); for (const r of scored.slice(-15)) console.log(show(r));
const notCounted = rows.filter((r) => r.said === 0);
console.log(`\nSaid fewer than ${MIN_TIMES} times, for example:`); for (const r of notCounted.slice(0, 10)) console.log(`  ${r.front}`);

if (SAVE) {
  fs.writeFileSync(SAVE, JSON.stringify(rows.map(({ id, front, said }) => ({ id, front, said }))));
  console.log(`\nEach card's number is in ${SAVE}.`);
}
if (!APPLY) { console.log("\nNothing written to the database (no --apply)."); process.exit(0); }
let written = 0;
for (let i = 0; i < rows.length; i += 500) {
  const batch = rows.slice(i, i + 500).map((r) => ({ id: r.id, said: r.said, at }));
  const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/set_said`, {
    method: "POST", headers: { ...H, "Content-Type": "application/json" },
    body: JSON.stringify({ p_user_id: user.id, p_rows: batch }),
  });
  if (!res.ok) { console.error(`Saving stopped after ${written} cards:`, await res.text()); process.exit(1); }
  written += Number(await res.json()) || 0;
}
console.log(`\nSaved the number on ${written} cards.`);
