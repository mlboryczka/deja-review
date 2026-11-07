// The Spanish caderno, linked (2026-11-02): Laura's doc of the owner's
// Spanish classes, read by the French sync on the Spanish tables
// (migration_023). No browser: syncUser runs with the stand-in database
// (tests/fake-supabase.mjs), a stand-in Google Doc and a stand-in Claude.
//
// What is checked is what the owner was told: each class Laura adds becomes
// Spanish cards on its own, a line is read once, a word they already have
// only gains the class date, and nothing reaches the French deck. Also how
// the caderno writes its dates ("27 de octubre", no year), and the classes of
// 8 to 27 October put in by hand on 2026-10-27, before there was a link:
// their lines on a card count as read, and a line Laura added since is read.
// And the real save on a real Postgres, with the live deck's date column.

import { createServer } from "node:http";
import { checker } from "../check.mjs";
import { fakeSupabase } from "../fake-supabase.mjs";
import { localPostgres } from "../local-postgres.mjs";

const ck = checker();

process.env.SUPABASE_URL = "http://127.0.0.1:9";
process.env.SUPABASE_SERVICE_ROLE_KEY = "service-role-key";

// What Claude makes of each line of the stand-in caderno.
const CARDS = {
  "contar": { front: "contar", back: "to count / to tell", category: "V" },
  "llueve mucho": { front: "Llueve mucho", back: "It's raining a lot / It rains a lot", category: "E" },
  "parar": { front: "parar", back: "to stop", category: "V" },
  "cocinar": { front: "cocinar", back: "to cook", category: "V" },
  "la fecha": { front: "la fecha", back: "the date", category: "V" },
  "me bañe": { front: "Me bañé", back: "I took a shower", category: "E" },
  "la niña": { front: "la niña", back: "the little girl", category: "V" },
  "pedir": { front: "pedir", back: "to order / to ask for", category: "V" },
};
const cardsFor = (lines) => lines.map((l) => CARDS[l.trim().toLowerCase()]).filter(Boolean);

let calls = { extract: 0, question: 0, spanishQuestion: 0, newLinesOnly: 0 };
// Every line Claude was told to make cards from on its own, this run.
let newLinesAsked = [];
const claude = createServer((req, res) => {
  let body = "";
  req.on("data", (c) => (body += c));
  req.on("end", () => {
    const json = JSON.parse(body || "{}");
    const reply = (text) => {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ id: "msg", type: "message", role: "assistant", model: "test",
        content: [{ type: "text", text }], stop_reason: "end_turn", usage: { input_tokens: 1, output_tokens: 1 } }));
    };
    if (String(json.system || "").includes("keep one flashcard for each thing they learn")) {
      calls.question++;
      if (json.system.includes("Latin American Spanish")) calls.spanishQuestion++;
      const pairs = [...json.messages[0].content.matchAll(/Pair (\d+)\n {2}A: (".*?") = ".*?"\n {2}B: (".*?") = /g)];
      const loose = (s) => JSON.parse(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/^(la|una|el|un) /, "");
      return reply(JSON.stringify({ verdicts: pairs.map((m) => ({ pair: Number(m[1]), verdict: loose(m[2]) === loose(m[3]) ? "same" : "different" })) }));
    }
    calls.extract++;
    const prompt = String(json.messages?.[0]?.content || "");
    const at = prompt.indexOf("New lines:");
    let lines;
    if (at !== -1) {
      calls.newLinesOnly++;
      lines = prompt.slice(at).split("\n").filter((l) => l.startsWith("- ")).map((l) => l.slice(2));
      newLinesAsked.push(...lines);
    } else {
      lines = (prompt.split("\n---\n")[1] || "").split("\n");
    }
    reply(JSON.stringify(cardsFor(lines)));
  });
});
await new Promise((r) => claude.listen(0, "127.0.0.1", r));
process.env.ANTHROPIC_BASE_URL = `http://127.0.0.1:${claude.address().port}`;

const doc = { text: "", status: 200 };
const realFetch = globalThis.fetch;
globalThis.fetch = async (url, init) => {
  if (String(url).includes("docs.google.com")) return new Response(doc.text, { status: doc.status, headers: { "content-type": "text/plain" } });
  return realFetch(url, init);
};

const { sliceCaderno } = await import("../../api/_lib/caderno.js");
const { syncUser } = await import("../../api/cahier-sync.js");

const USER = "00000000-0000-0000-0000-0000000000e5";
const URL = "https://docs.google.com/document/d/CADERNO1/edit";
const NOW = new Date("2026-11-02T15:00:00Z");
const sync = (admin, opts = {}) =>
  syncUser({ admin, apiKey: "sk-ant-server-key-0123456789abcdef", userId: USER, force: true, now: NOW, course: "es", ...opts })
    .catch((e) => ({ ok: false, error: e.message, threw: true }));

// Laura's template, as the doc's text export gives it: her French headings,
// a tab before each cell, homework at the end.
const klass = (date, vocab, expr = []) =>
  `${date}\r\n\r\n\r\nVocabulario\r\n\tExpresiones\r\n\t${vocab.join(" \r\n")}\r\n\t${expr.join("\r\n")}\r\n\tGramatica\r\n\tGramatica \r\n\t\r\n\tPara la próxima vez : \r\nAprender los números\r\n\r\n`;
const caderno = (...classes) => `﻿Cahier de français \r\n\r\n${classes.join("\r\n")}`;

// ── How the caderno writes its dates ──────────────────────────────────────
{
  const blocks = sliceCaderno(caderno(
    klass("30 de octubre ", ["contar"], ["llueve mucho"]),
    klass("27 de octubre", ["la fecha"], ["me bañe"]),
    klass("9 de octubre", ["un ojo"]),
    klass("9 de octubre", ["sobre"]),
  ), { now: NOW });
  ck("each class is found under its date line, with this year", blocks.map((b) => b.date).join(" ") === "2026-10-30 2026-10-27 2026-10-09 2026-10-09", blocks.map((b) => b.date).join(" "));
  ck("the homework is cut off", blocks.every((b) => !/próxima|Aprender/.test(b.text)), JSON.stringify(blocks[0].text));
  const odd = sliceCaderno([
    "El lunes 3 de noviembre", "Vocabulario la tarea, algo largo",
    "Lunes 28 y 29 de diciembre", "Vocabulario el año nuevo, algo largo",
    "Le 2 octobre 2025", "Vocabulaire une ligne française assez longue",
    "5 de setiembre de 2025", "Vocabulario otra clase, algo largo",
  ].join("\n"), { now: new Date("2027-01-04T12:00:00Z") });
  ck("\"El lunes 3 de noviembre\" read on 4 January is last November; a class over two days takes its first day; a year written out is kept",
    odd.map((b) => b.date).join(" ") === "2026-11-03 2026-12-28 2025-09-05", odd.map((b) => b.date).join(" "));
  ck("a French date line is not a class of the caderno: its lines stay with the class above", odd[1].text.includes("une ligne française"), JSON.stringify(odd[1].text));
}

// ── Before migration_023 ─────────────────────────────────────────────────
{
  calls = { extract: 0, question: 0, spanishQuestion: 0, newLinesOnly: 0 };
  const admin = fakeSupabase({ caderno: false });
  doc.text = caderno(klass("30 de octubre", ["contar"]));
  const r = await sync(admin, { url: URL });
  ck("before migration_023, linking says which migration to run", !r.ok && /migration_023/.test(r.error || ""), JSON.stringify(r));
  ck("and reads nothing, writes nothing", calls.extract === 0 && admin.tables.es_user_cards.length === 0 && admin.tables.cahier_links.length === 0,
    `${calls.extract} calls, ${admin.tables.es_user_cards.length} cards`);
}

// ── The owner's deck: lessons, and the classes put in by hand ─────────────
function ownersDeck() {
  return fakeSupabase({
    tables: {
      es_user_cards: [
        { id: 7001, user_id: USER, front: "una niña", back: "a girl / a little girl", category: "V", dates: [], source: "lesson:leccion4#abc", fsrs_state: 2, en_fsrs_state: 0 },
        { id: 7002, user_id: USER, front: "pedir", back: "to order / to ask for", category: "V", dates: ["2026-10-21"], source: "lesson:leccion20#def", fsrs_state: 0, en_fsrs_state: 0 },
        { id: 7003, user_id: USER, front: "la fecha", back: "the date", category: "V", dates: ["2026-10-27"], source: "cahier-upload", fsrs_state: 1, en_fsrs_state: 0 },
        { id: 7004, user_id: USER, front: "Me bañé", back: "I took a shower", category: "E", dates: ["2026-10-27"], source: "cahier-upload", fsrs_state: 0, en_fsrs_state: 0 },
      ],
    },
  });
}
const V1 = caderno(
  klass("30 de octubre", ["contar"], ["llueve mucho"]),
  klass("27 de octubre", ["la fecha", "cocinar"], ["me bañe"]),
  klass("21 de octubre", ["pedir", "la niña"]),
);

{
  calls = { extract: 0, question: 0, spanishQuestion: 0, newLinesOnly: 0 };
  newLinesAsked = [];
  const admin = ownersDeck();
  doc.text = V1;
  const r = await sync(admin, { url: URL });
  const es = admin.tables.es_user_cards;
  const byFront = (f) => es.find((c) => c.front === f);
  ck("linking the caderno reads it", r.ok && r.linked, JSON.stringify(r));
  ck("the new class becomes cards in the Spanish deck, dated", byFront("contar")?.dates?.join() === "2026-10-30" && byFront("Llueve mucho")?.source === "cahier-upload",
    JSON.stringify(es.filter((c) => c.id > 7004)));
  ck("a line Laura added to a class put in by hand is read, on its own", byFront("cocinar")?.dates?.join() === "2026-10-27" && newLinesAsked.includes("cocinar") &&
    !newLinesAsked.some((l) => /fecha|bañe/.test(l)), `new lines asked: ${JSON.stringify(newLinesAsked)}`);
  ck("that class's lines already on a card aren't made again", es.filter((c) => /fecha|bañ/i.test(c.front)).length === 2 && byFront("la fecha").dates.join() === "2026-10-27",
    JSON.stringify(es.filter((c) => /fecha|bañ/i.test(c.front)).map((c) => c.front)));
  ck("\"la niña\" from a class is put to Claude beside the lesson's \"una niña\", in Spanish, and only gains the date",
    calls.spanishQuestion >= 1 && !byFront("la niña") && byFront("una niña").dates.join() === "2026-10-21",
    `${calls.spanishQuestion} Spanish questions; una niña ${JSON.stringify(byFront("una niña")?.dates)}`);
  ck("a word already in a lesson keeps its card, history and all", es.filter((c) => c.front === "pedir").length === 1 && byFront("una niña").fsrs_state === 2);
  ck("nothing reaches the French deck, record, verdicts or link",
    admin.tables.user_cards.length === 0 && (admin.tables.notes_read || []).length === 0 && (admin.tables.card_pairs || []).length === 0 && admin.tables.cahier_links.length === 0,
    `${admin.tables.user_cards.length} French cards, ${(admin.tables.card_pairs || []).length} verdicts`);
  ck("the link and the record of lines read are the caderno's own",
    admin.tables.es_cahier_links.length === 1 && admin.tables.es_cahier_links[0].doc_id === "CADERNO1" &&
    admin.tables.es_notes_read.length === 1 && Object.keys(admin.tables.es_notes_read[0].classes).sort().join() === "2026-10-21,2026-10-27,2026-10-30",
    JSON.stringify(admin.tables.es_notes_read[0]?.classes && Object.keys(admin.tables.es_notes_read[0].classes)));

  // Opening the app again: nothing new.
  const before = es.length;
  calls = { extract: 0, question: 0, spanishQuestion: 0, newLinesOnly: 0 };
  const again = await sync(admin);
  ck("the next check reads nothing and adds nothing", again.ok && calls.extract === 0 && es.length === before && again.cardsAdded === 0,
    `${calls.extract} calls, ${es.length - before} cards`);

  // Laura adds a line to the 30 October class.
  doc.text = V1.replace("\tcontar\r\n", "\tcontar \r\nparar\r\n");
  ck("(the stand-in doc did change)", doc.text !== V1);
  calls = { extract: 0, question: 0, spanishQuestion: 0, newLinesOnly: 0 };
  newLinesAsked = [];
  const added = await sync(admin);
  ck("a line added later is read once, on its own", added.ok && calls.extract === 1 && calls.newLinesOnly === 1 && newLinesAsked.join() === "parar" && byFront("parar")?.dates?.join() === "2026-10-30",
    `${calls.extract} calls, new lines ${JSON.stringify(newLinesAsked)}`);
  ck("and the cards it had are left alone", es.filter((c) => c.front === "contar").length === 1);
}

// ── The French cahier is untouched by a Spanish link ──────────────────────
{
  const admin = ownersDeck();
  admin.tables.cahier_links.push({ user_id: USER, doc_id: "FRENCH", doc_url: "https://docs.google.com/document/d/FRENCH/edit", classes: {} });
  doc.text = V1;
  const r = await sync(admin, { url: URL });
  ck("linking the caderno leaves the French link as it was", r.ok && admin.tables.cahier_links.length === 1 && admin.tables.cahier_links[0].doc_id === "FRENCH");
}

// ── The caderno's functions, on a real Postgres ───────────────────────────
{
  const { db: pg, why } = await localPostgres();
  if (!pg) console.log(`  (not run here: the caderno's save on a local Postgres; ${why})`);
  else {
    try {
      const U = "00000000-0000-0000-0000-0000000000e6", RUN = "22222222-2222-2222-2222-222222222222";
      const q = (t) => pg.sql(t);
      // The live deck keeps class dates as text[]: migration_023's save, written
      // for jsonb, failed on it at the first real read (2026-11-07).
      const LONG = Array.from({ length: 700 }, () => Math.random().toString(36).slice(2, 10)).join("");
      const setup = q(`insert into auth.users (id) values ('${U}');
        insert into public.es_user_cards (id, user_id, front, back, source, dates) values
          (5001, '${U}', 'una niña', 'a girl', 'lesson:leccion4#x', '{}'),
          (5002, '${U}', 'ayer', 'yesterday', 'lesson:leccion8#y', '{2026-10-23}');`);
      const claimed = q(`select public.claim_es_notes_reading('${U}', '${RUN}', 'sync', 360, false) ->> 'claimed'`);
      const taken = q(`select public.claim_es_notes_reading('${U}', '33333333-3333-3333-3333-333333333333', 'sync', 360, false) ->> 'claimed'`);
      const saved = q(`select public.save_es_notes_reading('${U}', '${RUN}',
        '[{"front":"la fecha","back":"the date","category":"V","dates":["2026-10-27"],"source":"cahier-upload"},
          {"front":"ayer","back":"yesterday","category":"V","dates":["2026-10-30"],"source":"cahier-upload"}]'::jsonb,
        '[{"id":5001,"dates":["2026-10-21"]}]'::jsonb, '[]'::jsonb, '[]'::jsonb, '[{"verdict":"same","a_front":"una niña"}]'::jsonb,
        '{"2026-10-27":["abc"]}'::jsonb, true)::text`);
      const es = q(`select string_agg(front || ' ' || dates::text, ' | ' order by front) from public.es_user_cards`);
      const french = q(`select (select count(*) from public.user_cards) + (select count(*) from public.card_pairs) + (select count(*) from public.notes_read)`);
      const record = q(`select classes::text || ' ' || coalesce(run_id::text, 'free') from public.es_notes_read`);
      ck("on a local Postgres with the live date column, the caderno's save takes the turn, adds cards and dates and the lines read on the Spanish tables, and touches nothing French",
        setup.ok && claimed.out === "true" && taken.out === "false" && /"inserted": 1/.test(saved.out) && /"joined": 1/.test(saved.out) && /"dated": 1/.test(saved.out) &&
        es.out === "ayer {2026-10-23,2026-10-30} | la fecha {2026-10-27} | una niña {2026-10-21}" && french.out === "0" && record.out === '{"2026-10-27": ["abc"]} free',
        [setup.err, claimed.out, taken.out, saved.out || saved.err, es.out, french.out, record.out].join(" / "));
      // A front too long for the index: named, and the rest saved.
      const again = q(`select public.claim_es_notes_reading('${U}', '${RUN}', 'sync', 360, false) ->> 'claimed'`);
      const refused = q(`select public.save_es_notes_reading('${U}', '${RUN}',
        '[{"front":"${LONG}","back":"too long","dates":["2026-11-02"],"source":"cahier-upload"},
          {"front":"descansar","back":"to rest","dates":["2026-11-06"],"source":"cahier-upload"}]'::jsonb) ->> 'inserted'`);
      const list = q(`select dates::text from public.es_user_cards where front = 'descansar'`);
      ck("a card the database refuses is left out and the others are saved", again.out === "true" && refused.out === "1" && list.out === "{2026-11-06}",
        [again.out, refused.out || refused.err, list.out].join(" / "));
    } finally {
      pg.stop();
    }
  }
}

claude.close();
const n = ck.fails();
console.log(n ? `\n  FAILED: ${n}` : "\n  all checks passed");
process.exit(n ? 1 : 0);
