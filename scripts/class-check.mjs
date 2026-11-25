// The Spanish class check (owner, 2026-11-25): the exercises and dialogue
// sentences the owner says in his live classes with Laura, recorded in Wispr,
// kept as answers so they count on Spanish Stats.
//
// The morning review's nightly run reads each new class in the Wispr folder
// "Spanish (Laura)", matches each sentence he said to its app item, and marks
// it from Laura's reaction (her last word decides: accepted or moved on is
// Right; corrected, gave him a word, or he asked for help is Wrong). This
// script does the parts that need no judgment:
//
//   node scripts/class-check.mjs items <lesson number> [exercise number]
//       every item of the lesson's exercise sheets, with its key and the
//       answer key's first answer, to match what he said to (dialogue
//       sentences too, keyed dialogo-leccionN/1/<sentence>)
//   node scripts/class-check.mjs check <class.json>
//       runs the app's own marking (src/lib/exerciseMarking.js) on every
//       sentence Laura accepted, and writes each one's `keyCheck` back into
//       the file: "right" or "almost" (the key agrees), "wrong" (the key
//       finds another form of a word), "no-match" (the words differ from
//       every answer the key has, so the key can't tell), or "unknown-item"
//   node scripts/class-check.mjs save <class.json> [--dry-run]
//       keeps every sentence with a final verdict as an es_exercise_answers
//       row: marked_by 'class' (migration_030), the class's date and time as
//       answered_at, hints 0. Refuses if a sentence still needs the owner's
//       call, or if the class was already saved.
//
// class.json:
//   { "date": "2026-11-25", "start": "17:00", "title": "Wispr title",
//     "sentences": [ { "key": "leccion14/9/14", "asked": "…", "said": "…",
//       "laura": "right" | "wrong", "lauraSaid": "…",
//       "keyCheck": (written by check),
//       "final": "right" | "wrong" | null (null: the owner decides),
//       "why": "…", "matt": "right" | "wrong" (his call, from the page) } ] }
//
// Environment for save (a .env.local in the repo root is read automatically):
//   SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, ADMIN_EMAIL (the owner)

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadEnv } from "./lib/loadEnv.mjs";
import { EXERCISES_BY_ID } from "../src/data/exercises/es/index.js";
import { DIALOGUES_BY_ID } from "../src/data/exercises/es/dialogues.js";
import { findItem, kindOf, keyAnswer, markByKey, plain } from "../src/lib/exerciseMarking.js";
import { DIALOGUE_PREFIX } from "../src/lib/dialogueRounds.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const [cmd, arg, arg2] = process.argv.slice(2);
const DRY = process.argv.includes("--dry-run");

const lookup = (key) => {
  const isDialogue = String(key).startsWith(DIALOGUE_PREFIX);
  const found = findItem(isDialogue ? DIALOGUES_BY_ID : EXERCISES_BY_ID, key);
  return found ? { ...found, lessonId: key.split("/")[0] } : null;
};

// What he said, as the key reads it. For a sentence with blanks, the words
// in each blank are found by lining what he said up with the sentence around
// them; null when they don't line up.
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

export function keyCheck(key, said) {
  const found = lookup(key);
  if (!found) return { keyCheck: "unknown-item" };
  const typed = typedFromSpoken(found.item, said);
  // A key answer that ends "(tú)", "(usted)" or "(ustedes)" (Lesson 15
  // exercise 1) is compared without that ending: in class he says the
  // sentence, not the label.
  const noLabel = (a) => String(a).replace(/\s*\((?:informal|formal|tú|usted|ustedes|plural)(?:,\s*(?:tú|usted|ustedes))?\)\s*$/i, "");
  const item = kindOf(found.item) === "gaps" || kindOf(found.item) === "truth" ? found.item
    : { ...found.item, answer: noLabel(found.item.answer ?? ""), ...(found.item.also ? { also: found.item.also.map(noLabel) } : {}) };
  const v = typed === null ? null : markByKey(item, typed);
  return { keyCheck: v ? v.verdict : "no-match", keyAnswer: keyAnswer(found.item) };
}

if (cmd === "items") {
  const n = Number(arg);
  const ids = Object.keys(EXERCISES_BY_ID).filter((id) => new RegExp(`^leccion${n}(-|$)`).test(id));
  for (const id of ids) {
    for (const e of EXERCISES_BY_ID[id].exercises) {
      if (arg2 && e.n !== Number(arg2)) continue;
      console.log(`\n## ${id} exercise ${e.n}: ${e.title} — ${e.english || e.instruction}`);
      e.items.forEach((it, i) => console.log(`${id}/${e.n}/${i + 1}\t${it.prompt}\t→ ${keyAnswer(it)}`));
    }
  }
  const d = DIALOGUES_BY_ID[`${DIALOGUE_PREFIX}leccion${n}`];
  if (d && !arg2) {
    console.log(`\n## ${d.id}: ${d.title}`);
    d.items.forEach((it, i) => console.log(`${d.id}/1/${i + 1}\t${it.prompt}\t→ ${it.answer}`));
  }
} else if (cmd === "check") {
  const file = JSON.parse(fs.readFileSync(arg, "utf8"));
  for (const s of file.sentences) {
    if (s.laura !== "right" && s.laura !== "wrong") continue;
    Object.assign(s, keyCheck(s.key, s.said));
    console.log(`${s.key}\tLaura ${s.laura}\tkey ${s.keyCheck}\t${s.said}${s.keyCheck === "right" ? "" : `\t[key: ${s.keyAnswer ?? "-"}]`}`);
  }
  fs.writeFileSync(arg, JSON.stringify(file, null, 2) + "\n");
  const checked = file.sentences.filter((s) => s.keyCheck).length;
  console.log(`${checked} sentence(s) checked; ${file.sentences.length - checked} left out of the check.`);
} else if (cmd === "save") {
  const file = JSON.parse(fs.readFileSync(arg, "utf8"));
  const verdictOf = (s) => s.matt || s.final;
  const open = file.sentences.filter((s) => s.laura !== "out" && !verdictOf(s));
  if (open.length) {
    console.error(`Not saved: ${open.length} sentence(s) still need the owner's call: ${open.map((s) => s.key).join(", ")}`);
    process.exit(1);
  }
  const keep = file.sentences.filter((s) => verdictOf(s) === "right" || verdictOf(s) === "wrong");
  const bad = keep.filter((s) => !lookup(s.key));
  if (bad.length) { console.error(`Not saved: no app item for ${bad.map((s) => s.key).join(", ")}`); process.exit(1); }
  // The class's start in Los Angeles time, one second apart per sentence so
  // they keep the order he said them in.
  const start = new Date(`${file.date}T${file.start || "17:00"}:00${laOffset(file.date)}`);
  const rows = keep.map((s, i) => {
    const f = lookup(s.key);
    return {
      item_key: s.key, lesson: f.lessonId, prompt: f.item.prompt, typed: s.said || "",
      verdict: verdictOf(s), marked_by: "class", note: s.matt ? `Class with Laura, ${file.date}; the owner's call` : `Class with Laura, ${file.date}`,
      answered_at: new Date(start.getTime() + i * 1000).toISOString(), hints: 0,
    };
  });
  const right = rows.filter((r) => r.verdict === "right").length;
  console.log(`${file.date}: ${rows.length} sentences to keep (${right} Right, ${rows.length - right} Wrong); ${file.sentences.length - rows.length} left out.`);
  if (DRY) { rows.forEach((r) => console.log(`  ${r.item_key}\t${r.verdict}\t${r.typed}`)); process.exit(0); }
  loadEnv(ROOT);
  const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, ADMIN_EMAIL } = process.env;
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY || !ADMIN_EMAIL) { console.error("Missing SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY or ADMIN_EMAIL."); process.exit(1); }
  const { createClient } = await import("@supabase/supabase-js");
  const db = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false, autoRefreshToken: false } });
  let owner = null;
  for (let page = 1; !owner && page < 20; page++) {
    const { data, error } = await db.auth.admin.listUsers({ page, perPage: 200 });
    if (error) { console.error(`Couldn't read the accounts: ${error.message}`); process.exit(1); }
    owner = data.users.find((u) => u.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase());
    if (data.users.length < 200) break;
  }
  if (!owner) { console.error("The owner's account wasn't found."); process.exit(1); }
  const dayStart = new Date(start.getTime() - 12 * 3600e3).toISOString(), dayEnd = new Date(start.getTime() + 12 * 3600e3).toISOString();
  const { data: already, error: e1 } = await db.from("es_exercise_answers").select("item_key").eq("user_id", owner.id).eq("marked_by", "class").gte("answered_at", dayStart).lte("answered_at", dayEnd);
  if (e1) { console.error(`Couldn't check for this class: ${e1.message}${/check|constraint/i.test(e1.message) ? "" : ""}`); process.exit(1); }
  if (already.length) { console.error(`Not saved: ${already.length} class answers are already kept for ${file.date}.`); process.exit(1); }
  const { error } = await db.from("es_exercise_answers").insert(rows.map((r) => ({ ...r, user_id: owner.id })));
  if (error) {
    console.error(/marked_by_check/.test(error.message) ? "Not saved: migration_030 hasn't been run, so the table doesn't accept marked_by 'class' yet." : `Not saved: ${error.message}`);
    process.exit(1);
  }
  console.log("Saved.");
} else if (cmd) {
  console.error("Use: items <lesson> [exercise] | check <class.json> | save <class.json> [--dry-run]");
  process.exit(1);
}

// Los Angeles's offset from UTC on a day: -08:00 in winter, -07:00 in summer.
function laOffset(date) {
  const noon = new Date(`${date}T12:00:00Z`);
  const la = new Date(noon.toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));
  const h = Math.round((la - new Date(noon.toLocaleString("en-US", { timeZone: "UTC" }))) / 3600e3);
  return `${h < 0 ? "-" : "+"}${String(Math.abs(h)).padStart(2, "0")}:00`;
}
