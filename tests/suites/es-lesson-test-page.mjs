// A Spanish lesson's test in the browser (2026-11-26): everything is answered
// on the test page itself, flashcards too (owner: "the test should be
// self-contained"), and opening it leaves the page at its top (owner: "it
// took me to part 4 first").
//
// What must hold, in plain words:
//   - Lessons has "Test this lesson" on a Spanish lesson, and it opens the test;
//   - after Start, the page is still at its top and no answer box has the
//     cursor;
//   - the flashcards are asked on the page, one at a time: the right answer is
//     marked Correct, a wrong one is not, and Next moves to the next card;
//   - there is no button sending you to Cards, and no Hint anywhere.
//
// The Spanish deck is a stand-in: Lesson 1's first 25 cards, each studied
// Spanish side up 30 days ago, so every one of them is asked.

import { checker } from "../check.mjs";
import { openApp, pageOf } from "../harness.mjs";
import leccion1 from "../../src/data/lessons/es/leccion1.js";

const ck = checker();
const DAY = 86400000, now = Date.now();
const USER = "00000000-0000-0000-0000-000000000001";
const deck = leccion1.cards.slice(0, 25).map(([front, back, category], i) => ({
  id: 9000 + i, front, back, category, dates: [], flagged_for_review: false, batch_id: null, source: "lesson:leccion1",
  next_due_at: new Date(now + 10 * DAY).toISOString(), lapses: 0, stability: 20, difficulty: 5, fsrs_state: 2, reps: 3,
  last_review: new Date(now - 30 * DAY).toISOString(), last_answer_correct: true,
  en_stability: null, en_difficulty: null, en_fsrs_state: 0, en_reps: 0, en_lapses: 0, en_next_due_at: null, en_last_review: null, en_last_answer_correct: null,
}));
const byId = new Map(deck.map((c) => [c.id, c]));

const { browser, page } = await openApp({
  ready: "[data-module]",
  route: async (p) => {
    await p.evaluate((u) => localStorage.setItem(`course:${u}`, "es"), USER);
    await p.route("**/rest/v1/es_user_cards*", (r) =>
      r.request().method() === "GET" ? r.fulfill({ json: pageOf(r.request().url(), deck) }) : r.fulfill({ json: [] }));
  },
});
try {
  await page.click('[data-tour="nav-lessons"]');
  await page.waitForSelector("[data-lesson-test-open='leccion1']", { timeout: 10000 });
  ck("Lessons has Test on Lesson 1", true);
  const row = await page.$eval("[data-tour-lesson='leccion1']", (el) => ({ h: Math.round(el.getBoundingClientRect().height), count: el.querySelector("[data-lesson-count]")?.textContent, text: el.textContent }));
  ck("the lesson card is one row, under 90px tall", row.h < 90, `${row.h}px`);
  ck("it says 43 cards, not N of M cards in your deck", row.count === "43 cards" && !/in your deck/.test(row.text), row.count);
  if (process.env.SHOT) await page.screenshot({ path: process.env.SHOT.replace(/\.png$/, "-lessons.png") });
  await page.click("[data-lesson-test-open='leccion1']");
  await page.waitForSelector("[data-lesson-test-start]:not([disabled])", { timeout: 10000 });
  await page.click("[data-lesson-test-start]");
  await page.waitForSelector("[data-test-card-input]", { timeout: 10000 });
  await page.waitForTimeout(800);

  const top = await page.$eval("[data-lesson-test-page]", (el) => el.scrollTop);
  ck("after Start the page is still at its top", top === 0, `scrolled ${top}px`);
  const focused = await page.evaluate(() => document.activeElement?.tagName || "");
  ck("no answer box has the cursor", !/INPUT|TEXTAREA/.test(focused), focused);
  ck("nothing sends you to Cards", (await page.$$("[data-lesson-test-cards]")).length === 0);
  const hints = await page.$$("[data-ex-hint-btn], [data-dialogue-hint-btn]");
  ck("no Hint button anywhere", hints.length === 0, String(hints.length));

  const count = await page.textContent("[data-test-card] >> nth=0");
  ck("the first card says Card 1 of 20", /Card 1 of 20/.test(count), count.slice(0, 40));
  const key = await page.getAttribute("[data-test-card]", "data-test-card");
  const [id, dir] = key.split(":");
  const c = byId.get(Number(id));
  const right = (dir === "fr" ? c.back : c.front).split(/[;,(]/)[0].trim();
  await page.fill("[data-test-card-input]", right);
  await page.press("[data-test-card-input]", "Enter");
  await page.waitForSelector("[data-test-card-verdict]", { timeout: 5000 });
  const v1 = await page.getAttribute("[data-test-card-verdict]", "data-test-card-verdict");
  ck("the right answer is marked Correct", v1 === "correct" || v1 === "close", `${v1} for "${right}"`);
  await page.click("[data-test-card-next]");
  await page.waitForSelector("[data-test-card-input]", { timeout: 5000 });
  const count2 = await page.textContent("[data-test-card]");
  ck("Next shows Card 2 of 20", /Card 2 of 20/.test(count2), count2.slice(0, 40));
  await page.fill("[data-test-card-input]", "zzzz");
  await page.press("[data-test-card-input]", "Enter");
  await page.waitForSelector("[data-test-card-verdict]", { timeout: 5000 });
  const v2 = await page.getAttribute("[data-test-card-verdict]", "data-test-card-verdict");
  ck("a wrong answer is marked wrong", v2 === "wrong", v2);
  ck("and offers My answer should be accepted, as Cards does", (await page.$("[data-test-card-accept]")) !== null);
  ck("the card still says Card 2 of 20 until Next", /Card 2 of 20/.test(await page.textContent("[data-test-card]")));
  // SHOT=<file>: a picture of the page with the wrong answer marked.
  if (process.env.SHOT) await page.screenshot({ path: process.env.SHOT });
  await page.click("[data-test-card-next]");
  await page.waitForSelector("[data-test-card-input]", { timeout: 5000 });
  const fig = await page.textContent("[data-lesson-test-figure='words']");
  ck("Words counts both answers, one right", /^2 of 20 cards answered · 1 right/.test(fig), fig);
} finally {
  await browser.close();
}
ck.done();
