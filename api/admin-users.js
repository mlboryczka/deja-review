// Vercel serverless function: GET /api/admin-users
//
// Returns aggregated user stats for the admin dashboard.
// Requires service role key (bypasses RLS) and admin auth check.
//
// "Last active" is the time of each person's latest answer, from
// card_reviews.answered_at (and es_card_reviews for Spanish), which holds one
// row per answer. Falls back to last_sign_in_at for users who have never
// answered a card. Deck, Studied and Mastered count French and Spanish
// separately and leave out cards taken out of study. If any part cannot be
// read the answer is an error, never short figures.

import { createClient } from "@supabase/supabase-js";
import { requireAdmin } from "./_lib/auth.js";
import { allowIphoneApp } from "./_lib/cors.js";
import { isArchived } from "../src/lib/archive.js";

// PostgREST caps unbounded queries at 1000 rows by default. With multiple
// active users, user_cards / card_progress / user_review_dates all exceed
// that. Paginate via offset/limit instead of truncating silently.
async function fetchAllRows(baseUrl, headers, pageSize = 1000) {
  const out = [];
  let offset = 0;
  // Safety cap: 200 pages = 200k rows. If we ever hit this, the underlying
  // query needs to be narrowed — but it avoids a runaway loop on a bug.
  for (let i = 0; i < 200; i++) {
    const sep = baseUrl.includes("?") ? "&" : "?";
    const url = `${baseUrl}${sep}offset=${offset}&limit=${pageSize}`;
    const res = await fetch(url, { headers });
    if (!res.ok) {
      let why = "";
      try { why = (await res.json())?.message || ""; } catch { /* no body */ }
      throw new Error(`Could not read the figures (${res.status}${why ? `: ${why}` : ""}).`);
    }
    const rows = await res.json();
    if (!Array.isArray(rows) || rows.length === 0) break;
    out.push(...rows);
    if (rows.length < pageSize) break;
    offset += pageSize;
  }
  return out;
}

export default async function handler(req, res) {
  if (allowIphoneApp(req, res)) return;
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } = process.env;
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    return res.status(500).json({ error: "Missing env vars" });
  }

  if (!(await requireAdmin(req, res))) return;

  const sbHeaders = {
    apikey: SUPABASE_SERVICE_ROLE_KEY,
    Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
    "Content-Type": "application/json",
  };

  try {
    // Get all users from auth.users via admin API
    const usersRes = await fetch(
      `${SUPABASE_URL}/auth/v1/admin/users?per_page=1000`,
      { headers: sbHeaders }
    );
    if (!usersRes.ok) {
      throw new Error(`Could not read the list of accounts (${usersRes.status}).`);
    }
    const usersData = await usersRes.json();
    const authUsers = usersData.users || usersData || [];
    if (!Array.isArray(authUsers)) {
      throw new Error("Could not read the list of accounts.");
    }

    // Deck, studied and mastered for one language. `prefix` is "" for French
    // and "es_" for Spanish. Cards taken out of study (archived) count in
    // nothing, and progress rows whose card is gone or out of study are
    // orphans. Both lists are read in a fixed order, so no row falls between
    // two 1000-row pages or is counted twice.
    const countLanguage = async (prefix) => {
      const stats = {};
      const validIdsByUser = {};
      const deckRows = await fetchAllRows(
        `${SUPABASE_URL}/rest/v1/${prefix}user_cards?select=user_id,front,source&order=user_id,front`,
        sbHeaders
      );
      for (const row of deckRows) {
        if (isArchived(row)) continue;
        if (!stats[row.user_id]) stats[row.user_id] = { deck: 0, studied: 0, mastered: 0 };
        stats[row.user_id].deck++;
        if (!validIdsByUser[row.user_id]) validIdsByUser[row.user_id] = new Set();
        // card_progress.card_id is the lowercased, trimmed front text.
        validIdsByUser[row.user_id].add(String(row.front || "").toLowerCase().trim());
      }
      const progRows = await fetchAllRows(
        `${SUPABASE_URL}/rest/v1/${prefix}card_progress?select=user_id,card_id,score&order=user_id,card_id`,
        sbHeaders
      );
      for (const row of progRows) {
        const validIds = validIdsByUser[row.user_id];
        if (!validIds) continue;
        const cid = String(row.card_id || "").toLowerCase().trim();
        if (!validIds.has(cid)) continue;
        stats[row.user_id].studied++;
        if (row.score >= 3) stats[row.user_id].mastered++;
      }
      return stats;
    };
    const fr = await countLanguage("");
    const es = await countLanguage("es_");

    // Time of each person's latest answer, French or Spanish.
    const latestAnswer = async (table, userId) => {
      const r = await fetch(
        `${SUPABASE_URL}/rest/v1/${table}?user_id=eq.${encodeURIComponent(userId)}&select=answered_at&order=answered_at.desc&limit=1`,
        { headers: sbHeaders }
      );
      if (!r.ok) throw new Error(`Could not read when ${userId} last answered (${r.status}).`);
      const rows = await r.json();
      return Array.isArray(rows) && rows[0] ? rows[0].answered_at : null;
    };
    const lastActiveByUser = {};
    await Promise.all(
      authUsers.map(async (u) => {
        const [a, b] = await Promise.all([
          latestAnswer("card_reviews", u.id),
          latestAnswer("es_card_reviews", u.id),
        ]);
        const times = [a, b].filter(Boolean).sort();
        lastActiveByUser[u.id] = times.length ? times[times.length - 1] : null;
      })
    );

    // Merge everything
    const users = authUsers.map((u) => {
      const lastReview = lastActiveByUser[u.id] || null;
      const lastSignIn = u.last_sign_in_at || null;
      // Prefer review timestamp (actual activity). Fall back to sign-in for
      // users who have never reviewed a card.
      const lastActive = lastReview || lastSignIn;
      return {
        id: u.id,
        email: u.email || "unknown",
        created: u.created_at,
        last_active: lastActive,
        last_sign_in: lastSignIn,
        last_review: lastReview,
        deck_size: fr[u.id]?.deck || 0,
        studied: fr[u.id]?.studied || 0,
        mastered: fr[u.id]?.mastered || 0,
        deck_size_es: es[u.id]?.deck || 0,
        studied_es: es[u.id]?.studied || 0,
        mastered_es: es[u.id]?.mastered || 0,
      };
    });

    // Sort by last active, most recent first
    users.sort(
      (a, b) => new Date(b.last_active || 0) - new Date(a.last_active || 0)
    );

    return res.status(200).json({ ok: true, users });
  } catch (err) {
    console.error("admin-users error:", err);
    return res.status(500).json({ error: err.message });
  }
}
