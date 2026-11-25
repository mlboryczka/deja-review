// The writing step of scripts/fix-multi-sense.mjs (scripts/lib/multiSenseWrites.mjs),
// run against a stand-in for the database's REST interface, never the live one:
// which category a card gets, new senses before the original is rewritten, the
// original left alone when it changed meanwhile, and the check for a card the
// deck already has. Then the corrections log (api/parse-corrections.js).
import { readFileSync } from 'node:fs';
import { checker } from '../check.mjs';
import { applySplit, holderOf, dbCategory } from '../../scripts/lib/multiSenseWrites.mjs';
import { cardIndex } from '../../src/lib/sameCard.js';

const ck = checker();
process.env.SUPABASE_URL = 'http://x';
process.env.SUPABASE_SERVICE_ROLE_KEY = 'k';
function mkRes(){ const r={code:null,body:null}; r.status=(c)=>{r.code=c;return r;}; r.json=(o)=>{r.body=o;return r;}; return r; }

// A stand-in `db(path, init)`: records the calls, answers as set per test.
function standIn({ insertOk = true, patchRows = [{ id: 1 }], patchOk = true } = {}) {
  const calls = [];
  const db = async (p, init = {}) => {
    calls.push({ p, method: init.method || 'GET', body: init.body ? JSON.parse(init.body) : null });
    if (init.method === 'POST') return { ok: insertOk, status: insertOk ? 201 : 409, text: async () => 'duplicate key', json: async () => [] };
    return { ok: patchOk, status: patchOk ? 200 : 500, text: async () => 'boom', json: async () => patchRows };
  };
  return { db, calls };
}
const original = { id: 1, user_id: 'u', front: 'les frais', back: 'the costs; fresh', category: 'V', dates: ['2025-05-01'] };
const first = { front: 'les frais', back: 'the costs', category: 'vocab' };
const sense = { front: 'frais (adj)', back: 'fresh', category: 'gram' };

console.log('\n  the kind saved for each card');
ck('Claude\'s long names become the stored codes', dbCategory('vocab', 'E') === 'V' && dbCategory('expr', 'V') === 'E' && dbCategory('gram', 'V') === 'G' && dbCategory('pron', 'V') === 'P');
ck('a code already stored is kept, and an unknown word falls back to the card\'s own', dbCategory('G', 'V') === 'G' && dbCategory('nonsense', 'E') === 'E' && dbCategory(undefined, 'P') === 'P');
{
  const { db, calls } = standIn();
  await applySplit(db, original, first, [sense]);
  ck('the new card is saved as G, not "gram"', calls[0].body[0].category === 'G', JSON.stringify(calls[0].body));
  ck('the rewritten card is saved as V', calls[1].body.category === 'V', JSON.stringify(calls[1].body));
}

console.log('\n  new cards first');
{
  const { db, calls } = standIn();
  const r = await applySplit(db, original, first, [sense]);
  ck('the senses are inserted before the original is changed', calls[0].method === 'POST' && calls[1].method === 'PATCH', calls.map((c) => c.method).join());
  ck('the new card takes the class dates and no history', JSON.stringify(calls[0].body[0].dates) === '["2025-05-01"]' && !('stability' in calls[0].body[0]) && calls[0].body[0].user_id === 'u');
  ck('the original is changed only while it has the front it had', /front=eq\.les%20frais/.test(calls[1].p), calls[1].p);
  ck('a finished split reports no half', r.added === 1 && r.half === null);
}
{
  const { db, calls } = standIn({ insertOk: false });
  let err = null;
  try { await applySplit(db, original, first, [sense]); } catch (e) { err = e; }
  ck('if the insert fails the original is not touched', !!err && calls.length === 1 && calls[0].method === 'POST');
}
{
  const { db } = standIn({ patchRows: [] });
  const r = await applySplit(db, original, first, [sense]);
  ck('a card that changed meanwhile is reported as half done', r.added === 1 && /changed since the deck was read/.test(r.half), JSON.stringify(r));
}
{
  const { db } = standIn({ patchOk: false });
  const r = await applySplit(db, original, first, [sense]);
  ck('a failed rewrite is reported as half done, not as nothing', r.added === 1 && /^the other senses were added/.test(r.half), JSON.stringify(r));
}

console.log('\n  a card the deck already has');
{
  const deck = [original, { id: 2, user_id: 'u', front: 'frais', back: 'fresh', category: 'V' }, { id: 3, user_id: 'u', front: 'le fils', back: 'the son', category: 'V' }];
  const index = cardIndex(deck);
  ck('"frais (adj)" is the deck\'s own "frais"', holderOf(index, original, { front: 'frais (adj)', back: 'fresh' })?.id === 2);
  ck('"un fils" is the deck\'s own "le fils"', holderOf(index, original, { front: 'un fils', back: 'the son' })?.id === 3);
  ck('the card being split is not its own clash', holderOf(index, original, { front: 'les frais', back: 'the costs' }) === null);
  ck('a sense the deck lacks is free', holderOf(index, original, { front: 'la voile', back: 'the sail' }) === null);
}

// ── The corrections log (api/parse-corrections.js) ──────────────────────────
// handlePost read `admin_user` from handler's scope, which it can't see, so
// every correction the admin logged threw and was lost, 2026-09-08 to
// 2026-09-29. The app ignores the log's errors, so nothing showed it.
console.log('\n  the corrections log saves a correction');
{
  const logged = [];
  globalThis.__fakeCorrections = {
    from: (table) => ({
      insert: (row) => { logged.push({ table, row }); return { select: () => ({ single: async () => ({ data: { id: 7 }, error: null }) }) }; },
    }),
  };
  globalThis.__fakeAdminUser = { id: 'admin-1', email: 'owner@example.com' };
  const src = readFileSync(new URL('../../api/parse-corrections.js', import.meta.url), 'utf8')
    .replace('import { createClient } from "@supabase/supabase-js";', 'const createClient = () => globalThis.__fakeCorrections;')
    .replace('import { requireAdmin } from "./_lib/auth.js";', 'const requireAdmin = async () => globalThis.__fakeAdminUser;')
    .replace('import { allowIphoneApp } from "./_lib/cors.js";', 'const allowIphoneApp = () => false;');
  const { default: corrections } = await import('data:text/javascript;base64,' + Buffer.from(src).toString('base64'));
  const r = mkRes();
  await corrections({ method: 'POST', headers: { authorization: 'Bearer good' }, query: {},
    body: { category: 'front', action: 'edit', original_front: 'la moitie', corrected_front: 'la moitié' } }, r);
  ck('saved, not an error', r.code === 200 && r.body?.ok === true, `HTTP ${r.code} ${JSON.stringify(r.body)}`);
  ck('as the signed-in admin', logged.length === 1 && logged[0].table === 'parse_corrections' && logged[0].row.user_id === 'admin-1',
     JSON.stringify(logged));
}

ck.done();
