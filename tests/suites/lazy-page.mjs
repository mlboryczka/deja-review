// A page loaded on demand that can't be fetched, as after a release when a
// tab still knows the old file's name (2026-11-26: the lesson test went blank,
// "Failed to fetch dynamically imported module"): the app reloads instead of
// going blank (src/lib/lazyPage.js).

import { checker } from "../check.mjs";
import { openApp, pageOf } from "../harness.mjs";
import leccion1 from "../../src/data/lessons/es/leccion1.js";

const ck = checker();
const USER = "00000000-0000-0000-0000-000000000001";
const deck = leccion1.cards.slice(0, 5).map(([front, back, category], i) => ({
  id: 9100 + i, front, back, category, dates: [], flagged_for_review: false, batch_id: null, source: "lesson:leccion1",
  next_due_at: new Date(Date.now() + 864e6).toISOString(), lapses: 0, stability: 20, difficulty: 5, fsrs_state: 2, reps: 3,
  last_review: new Date(Date.now() - 2592e6).toISOString(), last_answer_correct: true,
  en_stability: null, en_difficulty: null, en_fsrs_state: 0, en_reps: 0, en_lapses: 0, en_next_due_at: null, en_last_review: null, en_last_answer_correct: null,
}));
let refused = 0;
const { browser, page } = await openApp({
  ready: "[data-module]",
  route: async (p) => {
    await p.evaluate((u) => { localStorage.setItem(`course:${u}`, "es"); sessionStorage.removeItem("reloaded-for-update"); }, USER);
    await p.route("**/rest/v1/es_user_cards*", (r) =>
      r.request().method() === "GET" ? r.fulfill({ json: pageOf(r.request().url(), deck) }) : r.fulfill({ json: [] }));
    // The test page's file, refused once: what a tab from before a release gets.
    await p.route("**/LessonTestPage.jsx*", (r) => (refused++ === 0 ? r.abort() : r.continue()));
  },
});
try {
  await page.click('[data-tour="nav-lessons"]');
  await page.waitForSelector("[data-lesson-test-open='leccion1']", { timeout: 10000 });
  const reloaded = page.waitForEvent("load", { timeout: 15000 }).then(() => true).catch(() => false);
  await page.click("[data-lesson-test-open='leccion1']");
  ck("the app reloads when the page can't be fetched", await reloaded);
  await page.waitForSelector("[data-module]", { timeout: 15000 }).catch(() => {});
  ck("and shows the app again, not a blank page", (await page.$("[data-module]")) !== null);
  await page.click('[data-tour="nav-lessons"]');
  await page.waitForSelector("[data-lesson-test-open='leccion1']", { timeout: 10000 });
  await page.click("[data-lesson-test-open='leccion1']");
  await page.waitForSelector("[data-lesson-test-page]", { timeout: 10000 }).catch(() => {});
  ck("after the reload the test page opens", (await page.$("[data-lesson-test-page]")) !== null);
} finally {
  await browser.close();
}
ck.done();
