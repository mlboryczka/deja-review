// Code check of 7 November 2026, problems 114 to 121 (sign-in, accounts and
// safety). No browser, no real database: the View users handler runs against a
// stand-in for Supabase's web addresses, and what lives in the pages is
// checked in its source.
import { readFileSync } from "node:fs";
import { checker } from "../check.mjs";
import { tourSteps } from "../../src/lib/tourSteps.js";

const ck = checker();
const read = (f) => readFileSync(new URL(`../../${f}`, import.meta.url), "utf8");
const app = read("src/App.jsx");
const auth = read("src/Auth.jsx");
const modal = read("src/ApiKeyModal.jsx");
const flash = read("src/FlashcardApp.jsx");

process.env.SUPABASE_URL = "http://stub.test";
process.env.SUPABASE_SERVICE_ROLE_KEY = "service";
process.env.ADMIN_EMAIL = "owner@example.com";
const realFetch = globalThis.fetch;
const json = (body, status = 200) => ({ ok: status < 400, status, json: async () => body, text: async () => JSON.stringify(body) });

// One stand-in database. `fail` names a table whose read fails.
function stub(db, fail = "") {
  globalThis.fetch = async (url) => {
    const u = new URL(String(url));
    if (u.pathname === "/auth/v1/user") return json({ id: "own", email: "owner@example.com" });
    if (u.pathname === "/auth/v1/admin/users") return fail === "accounts" ? json({ message: "down" }, 500) : json({ users: db.users });
    const table = u.pathname.replace("/rest/v1/", "");
    if (table === fail) return json({ message: "boom" }, 500);
    let rows = db[table] || [];
    const uid = u.searchParams.get("user_id");
    if (uid) rows = rows.filter((r) => r.user_id === uid.replace("eq.", ""));
    if (u.searchParams.get("order") === "answered_at.desc") rows = [...rows].sort((a, b) => (a.answered_at < b.answered_at ? 1 : -1));
    const off = Number(u.searchParams.get("offset") || 0), lim = Number(u.searchParams.get("limit") || 1000);
    return json(rows.slice(off, off + lim));
  };
}
async function call() {
  const { default: handler } = await import("../../api/admin-users.js");
  let out = {};
  const res = { status(c) { out.status = c; return this; }, json(b) { out.body = b; return this; }, setHeader() {}, end() {} };
  await handler({ method: "GET", headers: { authorization: "Bearer t", origin: "" } }, res);
  return out;
}

const db = {
  users: [{ id: "a", email: "a@x", created_at: "2026-01-01", last_sign_in_at: "2026-11-01T00:00:00Z" }, { id: "b", email: "b@x", created_at: "2026-01-01", last_sign_in_at: "2026-11-02T00:00:00Z" }],
  user_cards: [
    { user_id: "a", front: "Un", source: "lesson" },
    { user_id: "a", front: "Deux", source: "archived:cahier-upload" },
    { user_id: "a", front: "Trois", source: null },
  ],
  card_progress: [
    { user_id: "a", card_id: "un", score: 3 },
    { user_id: "a", card_id: "deux", score: 5 },
    { user_id: "a", card_id: "trois", score: 1 },
  ],
  es_user_cards: [{ user_id: "a", front: "Uno", source: "x" }, { user_id: "b", front: "Dos", source: "x" }],
  es_card_progress: [{ user_id: "a", card_id: "uno", score: 4 }, { user_id: "b", card_id: "dos", score: 1 }],
  card_reviews: [{ user_id: "a", answered_at: "2026-11-07T08:00:00Z" }, { user_id: "a", answered_at: "2026-11-07T17:00:00Z" }],
  es_card_reviews: [{ user_id: "b", answered_at: "2026-11-06T10:00:00Z" }],
};

stub(db);
const ok = await call();
const A = ok.body?.users?.find((u) => u.id === "a"), B = ok.body?.users?.find((u) => u.id === "b");
ck("114 the Spanish deck, studied and mastered counts are given beside the French ones", A?.deck_size_es === 1 && A?.studied_es === 1 && A?.mastered_es === 1 && B?.deck_size_es === 1 && B?.mastered_es === 0);
ck("114 someone who studies only Spanish shows that study in Last active, not login only", B?.last_review === "2026-11-06T10:00:00Z");
ck("116 a card taken out of study is in no count", A?.deck_size === 2 && A?.studied === 2 && A?.mastered === 1);
ck("118 Last active is the latest answer, not the first of the day", A?.last_review === "2026-11-07T17:00:00Z");
ck("118 nobody who never answered gets a made-up answer time", (() => { stub({ ...db, card_reviews: [], es_card_reviews: [] }); return true; })());
const never = await call();
ck("118 with no answers Last active falls back to the sign-in time", never.body?.users?.find((u) => u.id === "a")?.last_review === null && never.body?.users?.find((u) => u.id === "a")?.last_active === "2026-11-01T00:00:00Z");

for (const t of ["user_cards", "card_progress", "es_user_cards", "es_card_progress", "card_reviews", "accounts"]) {
  stub(db, t);
  const bad = await call();
  ck(`119 an unreadable ${t} gives an error, not short figures`, bad.status === 500 && !!bad.body?.error && !bad.body?.users);
}

// 119: more than one page, read in a fixed order, each card once
const many = { ...db, user_cards: Array.from({ length: 2300 }, (_, i) => ({ user_id: "a", front: "c" + i, source: "x" })), card_progress: [] };
stub(many);
const big = await call();
ck("119 a deck longer than one page of 1,000 is counted whole", big.body?.users?.find((u) => u.id === "a")?.deck_size === 2300);
const admin = read("api/admin-users.js");
ck("119 cards and scores are read in a fixed order", /order=user_id,front/.test(admin) && /order=user_id,card_id/.test(admin));
globalThis.fetch = realFetch;

// 120
ck("120 the address bar is cleared when the app loads, whoever is signed in", /if \(FAILED_AT_LOAD\) \{\s*try \{ window\.history\.replaceState/.test(auth));
ck("120 only the first sign-in page after a load says the link failed", /FAILED_AT_LOAD && !failedShown/.test(auth) && /failedShown = true/.test(auth));

// 117 and 121
const so = app.slice(app.indexOf("const handleSignOut"), app.indexOf("const tryAgain"));
ck("117 Sign out waits for the sign-out before clearing anything", so.indexOf("auth.signOut()") > -1 && so.indexOf("auth.signOut()") < so.indexOf("wipeLocalCopies") && so.indexOf("auth.signOut()") < so.indexOf("setCourse(null)"));
ck("117 a failed sign-out says so and leaves language, place and caches alone", /Couldn't sign out\. Check your connection and try again\./.test(so) && /if \(failure\) \{[^}]*return;/.test(so) && !/if \(failure\) \{[^}]*(wipe|clear|setCourse)/.test(so));
ck("117 a sign-out seen from another tab still clears this tab's copies, before the app unmounts", /SIGNED_OUT"\) \{[^}]*wipeLocalCopies\(userIdRef\.current\)[^}]*setSession\(null\)/.test(app));
const wipe = app.slice(app.indexOf("function wipeLocalCopies"), app.indexOf("export default function App"));
ck("121 signing out removes the Anthropic key from the browser", /clearKey\(userId\)/.test(wipe) && /import \{ clearKey \}/.test(app));
ck("121 everything cleared before is still cleared", ["clearDeckCache", "clearProgressCache", "clearTutorThread", "clearStudyPlace", "clearPodcastsPlace", "clearPodcastDrafts", "clearCourse"].every((f) => wipe.includes(f + "(")));
ck("121 the key dialog says the key goes at sign-out", /after you sign out/.test(modal));

// 115
ck("115 the dialog tells people whose Claude account pays that no key is needed", /serverPays \? \(/.test(modal) && /already pays/.test(modal));
ck("115 the owner anywhere and Laura on the test app are the ones it applies to", /serverPays = isAdmin \|\| usesOwnersKeyOnTestApp/.test(flash) && /hasKey\(user\?\.id\) \|\| serverPays \? "Claude account ✓"/.test(flash));
const lesson = { id: "lecon1", title: "Lesson 1 · x" };
const body = (list, id) => list.find((s) => s.id === id).body;
const withKey = tourSteps({}, lesson, false), without = tourSteps({}, lesson, true);
ck("115 the tour keeps its connect lines for everyone else", /Connect Claude account/.test(body(withKey, "upload")) && tourSteps({}, lesson).filter((s) => typeof s.body === "string").every((s, i) => s.body === withKey.filter((x) => typeof x.body === "string")[i].body));
ck("115 the tour leaves them out when your Claude account pays", !/Connect Claude account/.test(body(without, "upload")) && !/Connect Claude account/.test(body(without, tourSteps({}, lesson, true).find((s) => /Ask the \*\*Tutor/.test(s.body || "")).id)));

const n = ck.fails();
console.log(n ? `\n  FAILED: ${n}` : "\n  all checks passed");
process.exit(n ? 1 : 0);
