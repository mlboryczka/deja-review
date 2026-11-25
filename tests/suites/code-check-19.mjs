// Code check of 7 November 2026, problems 103 and 304 and tidy-ups 317, 347
// and 348, which each came with a database change (migrations 031 to 035).
// No browser, no database, no Claude call: a stand-in for the database.
import fs from "node:fs";
import { checker } from "../check.mjs";
import { localPostgres } from "../local-postgres.mjs";
import { ownerCall } from "../../api/_lib/answerChecks.js";
import { supabaseRepeatsStore } from "../../api/_lib/repeatsChecks.js";
import { CARDS } from "../../src/data/lessons/es/leccion18.js";

const ck = checker();
const sql = (n) => fs.readFileSync(new URL(`../../migrations/${n}`, import.meta.url), "utf8");

// 103: a verdict the script saved is nobody's call, even on the owner's answer.
const own = { user_email: "o@x.com", verdict: "accept", source: "asked" };
ck("103 an asked verdict on the owner's answer is still their call", ownerCall(own, "o@x.com")?.says === "accept");
ck("103 a script verdict is nobody's call", ownerCall({ ...own, source: "script" }, "o@x.com") === null);
ck("103 unless the owner marked it", ownerCall({ ...own, source: "script", owner_says: "reject" }, "o@x.com")?.says === "reject");
const m31 = sql("migration_031_script_verdicts.sql");
ck("103 migration 031 allows 'script' and keeps the other two", /'asked', 'kept', 'script'/.test(m31) && !/\bdelete\s+from\b|\bdrop\s+table\b/i.test(m31));
const resolver = fs.readFileSync(new URL("../../scripts/resolve-disputes.mjs", import.meta.url), "utf8");
ck("103 the script saves verdicts with verdictRow, marked script", /verdictRow\(/.test(resolver) && /source: "script"/.test(resolver));

// 304: only a card really put away, repeating a card of the same account.
const A = "a", B = "b";
const cards = [
  { id: 1, user_id: A, source: "archived:x", front: "f1", back: "b", merged_into: 2, archived_reason: "duplicate", archived_at: "2026-11-01" },
  { id: 2, user_id: A, source: "x", front: "f2", back: "b" },
  { id: 3, user_id: A, source: "x", front: "fake", back: "b", merged_into: 2, archived_reason: "duplicate" }, // not put away
  { id: 4, user_id: A, source: "archived:x", front: "f4", back: "b", merged_into: 5, archived_reason: "duplicate" }, // card of another account
  { id: 5, user_id: B, source: "x", front: "f5", back: "b" },
  { id: 6, user_id: A, source: "archived:x", front: "f6", back: "b", merged_into: null, archived_reason: "duplicate" },
];
const fakeDb = {
  from() {
    const q = { f: [], in: null };
    const b = {
      select() { return b; },
      eq(c, v) { q.f.push([c, v]); return b; },
      in(c, v) { q.in = [c, v]; return b; },
      order() { return b; },
      limit() { return b; },
      then(res) {
        let rows = cards.filter((r) => q.f.every(([c, v]) => r[c] === v) && (!q.in || q.in[1].includes(r[q.in[0]])));
        res({ data: rows, error: null });
      },
    };
    return b;
  },
};
const dup = await supabaseRepeatsStore(fakeDb).duplicates();
ck("304 only the card really put away, repeating a card of its own account", dup.rows?.length === 1 && dup.rows[0].id === 1, JSON.stringify(dup.rows?.map((r) => r.id)));
const m32 = sql("migration_032_guard_archive_columns.sql");
ck("304 migration 032 guards insert and update, and lets the server and emptying through",
  /before insert or update on public\.user_cards/.test(m32) && /not in \('authenticated', 'anon'\)/.test(m32) && /is not null/.test(m32) && !/\bupdate\s+public\./i.test(m32.replace(/--.*$/gm, "")));

// 317: the ten cards say (tú) and (ustedes).
const verbforms = CARDS.filter((c) => c[3] === "verbforms");
ck("317 no verb-form card says 'to a friend' or 'to several people'", !verbforms.some((c) => /to a friend|to several people/.test(c[1])));
ck("317 ten cards say (tú) or (ustedes)", verbforms.filter((c) => /\(tú\)|\(tú, with |\(ustedes\)/.test(c[1])).length === 10);
const m35 = sql("migration_035_lesson18_tu_ustedes.sql");
ck("317 migration 035 changes only es_user_cards.back of unedited lesson cards", /set back = v\.new_back/.test(m35) && /c\.back = v\.old_back/.test(m35) && /source like 'lesson:%'/.test(m35) && (m35.match(/^\s+\('/gm) || []).length === 10);

// 347 and 348.
const m33 = sql("migration_033_card_alternates_lookup.sql");
ck("347 migration 033 drops only a non-unique lookup on card_id, French and Spanish", /es_card_alternates/.test(m33) && /not like 'CREATE UNIQUE%'/.test(m33) && !/delete|truncate/i.test(m33.replace(/--.*$/gm, "")));
const schema = fs.readFileSync(new URL("../../supabase/schema.sql", import.meta.url), "utf8");
ck("347 a fresh build holds one unique rule on card_alternates, and no card_id lookup", /constraint card_alternates_owner_key unique/.test(schema) && !/card_alternates_card_id_idx/.test(schema));
const m34 = sql("migration_034_es_parse_corrections_user.sql");
ck("348 migration 034 links user_id to accounts, on delete set null", /es_parse_corrections_user_fk/.test(m34) && /references auth\.users\(id\) on delete set null/.test(m34));

// The real SQL, where this machine has Postgres: every migration loads (the
// helper builds from the schema and all of them), each of mine runs again
// harmlessly, and the guard refuses a browser's write and lets the rest by.
{
  const { db, why } = await localPostgres();
  if (!db) ck("the new migrations run on a real Postgres (skipped: " + why + ")", true);
  else {
    try {
      for (const n of ["031_script_verdicts", "032_guard_archive_columns", "033_card_alternates_lookup", "034_es_parse_corrections_user", "035_lesson18_tu_ustedes"]) {
        const r = db.sql(fs.readFileSync(new URL(`../../migrations/migration_${n}.sql`, import.meta.url), "utf8"));
        ck(`migration_${n} runs a second time`, r.ok, r.err);
      }
      const idx = db.sql("select count(*) from pg_indexes where tablename = 'card_alternates' and indexdef like '%(card_id)'");
      ck("347 no lookup on card_id alone is left, and the unique rule is one", idx.out === "0" && db.sql("select count(*) from pg_indexes where tablename='card_alternates' and indexdef like 'CREATE UNIQUE%user_id, card_id, direction, alternate_text)'").out === "1", idx.out);
      const u = "00000000-0000-0000-0000-0000000000a1";
      db.sql(`insert into auth.users (id, email) values ('${u}', 'a@x.com')`);
      const as = (role, q) => db.sql(`begin; select set_config('request.jwt.claims', '{"role":"${role}"}', true); ${q}; commit;`);
      ck("304 the server (service role) can mark a card a repeat", as("service_role", `insert into public.user_cards (user_id, front, back, source, archived_reason) values ('${u}', 'x', 'y', 'archived:z', 'duplicate')`).ok);
      ck("304 a student's browser cannot", !as("authenticated", `insert into public.user_cards (user_id, front, back, source, archived_reason) values ('${u}', 'x2', 'y', 'archived:z', 'duplicate')`).ok);
      ck("304 nor set it on an update", /server/.test(as("authenticated", `update public.user_cards set archived_reason = 'removed' where front = 'x'`).err) && /server/.test(as("authenticated", `update public.user_cards set merged_into = id where front = 'x'`).err));
      ck("304 but a card brought back loses it, as before", as("authenticated", `update public.user_cards set source = 'tutor' where front = 'x'`).ok && db.sql("select archived_reason is null from public.user_cards where front = 'x'").out === "t");
      ck("304 and an ordinary change by a student is fine", as("authenticated", `update public.user_cards set back = 'z' where front = 'x'`).ok);
    } finally { db.stop(); }
  }
}

ck.done();
