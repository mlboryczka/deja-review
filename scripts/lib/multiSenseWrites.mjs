// The writing side of scripts/fix-multi-sense.mjs, kept apart so the tests
// (tests/suites/apply-splits.mjs) can run it against a stand-in database.
// `db(path, init)` is the script's own fetch to Supabase's REST interface.
import { CAT_UI_TO_DB } from "../../src/lib/cardCategories.js";

// user_cards.category holds V/E/G/P. Claude reports vocab/expr/gram/pron, so
// its word is turned into the code; anything else keeps the card's own code.
export const dbCategory = (category, fallback) =>
  CAT_UI_TO_DB[category] || (["V", "E", "G", "P"].includes(category) ? category : fallback);

// The card in `index` that `card` surely is, other than the one being split.
// This is the rule the lesson sync and the notes reading use, so "frais (adj)"
// is found beside "frais" and "un fils" beside "le fils".
export function holderOf(index, original, card) {
  const found = index.sureAll({ front: card.front.trim(), back: card.back.trim() })
    .filter((c) => String(c.id) !== String(original.id));
  return found[0] || null;
}

// Writes one split. The new senses go in FIRST: if that fails, the original
// card has lost nothing. Then the original is rewritten as the first sense, but
// only while it still has the front it had when the deck was read.
// Returns { added, half }: `half` is a sentence when the senses were added and
// the original could not be rewritten (it still has all its glosses, so the
// card is on screen twice over, nothing is lost); otherwise null.
export async function applySplit(db, original, first, adds) {
  let added = 0;
  if (adds.length) {
    // A plain insert, never an upsert: a front that is already there makes this
    // fail instead of overwriting that card's answer, dates and source.
    const ins = await db("user_cards", {
      method: "POST",
      headers: { Prefer: "return=minimal" },
      body: JSON.stringify(
        adds.map((c) => ({
          user_id: original.user_id,
          front: c.front.trim(),
          back: c.back.trim(),
          category: dbCategory(c.category, original.category),
          dates: Array.isArray(original.dates) ? original.dates : [],
          source: "sense-split",
        }))
      ),
    });
    if (!ins.ok) throw new Error(`insert for ${original.id}: ${ins.status} ${await ins.text()}`);
    added = adds.length;
  }
  const upd = await db(`user_cards?id=eq.${original.id}&front=eq.${encodeURIComponent(original.front)}`, {
    method: "PATCH",
    headers: { Prefer: "return=representation" },
    body: JSON.stringify({
      front: first.front.trim(),
      back: first.back.trim(),
      category: dbCategory(first.category, original.category),
    }),
  });
  let half = null;
  if (!upd.ok) half = `update ${original.id}: ${upd.status} ${await upd.text()}`;
  else {
    const rows = await upd.json().catch(() => []);
    if (!rows.length) half = `${original.id} changed since the deck was read, so it was left as it is`;
  }
  return { added, half: half && `the other senses were added, but ${half}` };
}
