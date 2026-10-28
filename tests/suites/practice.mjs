// Going through a lesson again (the owner, 2026-10-27): "should be able to
// reset after getting through all cards", "and should reload automatically
// when you navigate away from the lesson".
//
// A lesson of eight cards, six studied and not due for days, two due: the
// lesson's set is those two. Once they are answered the checkpoint offers to
// go through the lesson again; that set is every card of it, as practice,
// which writes no card's schedule. A finished set of the lesson is never
// waiting when the student comes back: from Stats, from Cards, or a reload.
import { openApp, finish, checker, sessionCounter } from "../harness.mjs";
import LESSON from "../../src/data/lessons/lecon1.js";
import { lessonCardKey } from "../../src/lib/lessonSource.js";

const ck = checker();
const CORS = { "access-control-allow-origin": "*", "access-control-allow-headers": "*", "access-control-expose-headers": "*" };
const DAY = 86400000;
const now = Date.now();
const iso = (t) => new Date(t).toISOString();

// Six words, studied both ways and not due for days; two grammar cards, due.
const words = LESSON.cards.filter((c) => c[2] === "V").slice(0, 6);
const rules = LESSON.cards.filter((c) => c[2] === "G").slice(0, 2);
const row = ([front, back, category], i, due) => ({
  id: i + 1, front, back, category, dates: [], flagged_for_review: false, batch_id: null,
  source: `lesson:${LESSON.id}#${lessonCardKey(front)}`,
  fsrs_state: 2, stability: 6, difficulty: 5, reps: 2, lapses: 0,
  next_due_at: iso(due ? now - DAY : now + 5 * DAY), last_review: iso(now - (due ? 7 : 1) * DAY), last_answer_correct: true,
  en_fsrs_state: 2, en_stability: 4, en_difficulty: 5, en_reps: 2, en_lapses: 0,
  en_next_due_at: iso(now + 4 * DAY), en_last_review: iso(now - 2 * DAY), en_last_answer_correct: true,
});
const rows = [...words.map((c, i) => row(c, i, false)), ...rules.map((c, i) => row(c, words.length + i, true))];

const writes = { cards: 0, reviews: [], deals: [] };
const { browser, page } = await openApp({
  route: async (p) => {
    await p.route("**/rest/v1/user_cards*", (r) => {
      const m = r.request().method();
      if (m === "GET") return r.fulfill({ status: 200, contentType: "application/json", headers: CORS, body: JSON.stringify(rows) });
      // Kept, as the database keeps them, so a reload reads them back.
      if (m === "PATCH") {
        writes.cards++;
        const id = Number((r.request().url().match(/[?&]id=eq\.(\d+)/) || [])[1]);
        const at = rows.findIndex((x) => x.id === id);
        if (at >= 0) rows[at] = { ...rows[at], ...JSON.parse(r.request().postData() || "{}") };
      }
      return r.fulfill({ status: 200, contentType: "application/json", headers: CORS, body: "[]" });
    });
    await p.route("**/rest/v1/card_reviews*", (r) => {
      if (r.request().method() === "POST") writes.reviews.push(...[].concat(JSON.parse(r.request().postData() || "[]")));
      return r.fulfill({ status: 201, headers: CORS, body: "" });
    });
    await p.route("**/rest/v1/dealt_sets*", (r) => {
      if (r.request().method() === "POST") writes.deals.push(JSON.parse(r.request().postData() || "{}"));
      return r.fulfill({ status: 201, headers: CORS, body: "" });
    });
  },
});

const counterLine = () => page.evaluate(() => (document.body.innerText.match(/Card \d+ of \d+[^\n]*/i) || [""])[0].trim());
const tapCard = () => page.evaluate(() => {
  [...document.querySelectorAll("div")].find((d) => getComputedStyle(d).transformStyle === "preserve-3d")?.click();
});
// Flip mode: Got It and Again are offered once the card is turned.
async function answer(label) {
  if (!(await page.$(`button:has-text("${label}")`))) { await tapCard(); await page.waitForTimeout(150); }
  await page.click(`button:has-text("${label}")`);
  await page.waitForTimeout(250);
}
const checkpoint = () => page.$("[data-checkpoint]");
async function answerAll() {
  for (let i = 0; i < 30 && !(await checkpoint()); i++) await answer("Got It");
}
const clickAside = (title) => page.evaluate((t) => {
  const n = [...document.querySelectorAll("aside *")].filter((x) => x.textContent.trim() === t && !x.children.length).pop();
  for (let el = n; el; el = el.parentElement) { el.click(); if (el.tagName === "BUTTON") break; }
}, title);
const nav = async (which) => { await page.click(`aside [data-tour="nav-${which}"]`); await page.waitForTimeout(500); };
const enterLesson = async () => {
  if (!(await page.evaluate((t) => [...document.querySelectorAll("aside button")].some((b) => b.textContent.trim() === t), LESSON.title))) await nav("lessons");
  await clickAside(LESSON.title);
  await page.waitForTimeout(700);
};

console.log(`\n  ${LESSON.title}: ${words.length} cards studied and not due, ${rules.length} due`);
await enterLesson();
ck("the lesson's set is the two cards due", (await sessionCounter(page))?.total === 2, await counterLine());
await answerAll();
const caughtUp = await page.evaluate(() => document.querySelector("[data-checkpoint]")?.innerText || "");
ck("after them, the lesson is caught up", /all caught up/i.test(caughtUp), caughtUp.replace(/\n+/g, " | "));
ck("and offers to go through it again", !!(await page.$("[data-go-again]")));
const cardWritesBefore = writes.cards;
ck("(the two answers wrote their schedules)", cardWritesBefore >= 2, `${cardWritesBefore}`);

console.log("\n  going through the lesson again");
await page.click("[data-go-again]");
await page.waitForTimeout(600);
ck("every card of the lesson comes up", (await sessionCounter(page))?.total === rows.length, await counterLine());
ck("and the counter says it is practice", /· practice/i.test(await counterLine()), await counterLine());
const practiceDeal = writes.deals.at(-1);
ck("its set is on record as practice", practiceDeal?.items?.length === rows.length && practiceDeal.items.every((x) => x.b === "practice"),
   JSON.stringify(practiceDeal?.items?.map((x) => x.b)));
const reviewsBefore = writes.reviews.length;
await answer("Again");
await answer("Got It");
ck("a miss comes back later in the set", /1 retry to come/i.test(await counterLine()), await counterLine());
const practiced = writes.reviews.slice(reviewsBefore);
ck("both answers are recorded, neither counted", practiced.length === 2 && practiced.every((r) => r.counted === false), JSON.stringify(practiced.map((r) => r.counted)));
ck("and no card's schedule is written", writes.cards === cardWritesBefore, `${writes.cards - cardWritesBefore} written`);

console.log("\n  leaving a set of it under way, and coming back");
await nav("stats");
await enterLesson();
const back = await counterLine();
ck("the set carries on where it was", /^Card 3 of 9 · practice/i.test(back), back);
await answerAll();
const summary = await page.evaluate(() => document.querySelector("[data-checkpoint]")?.innerText.split("\n")[0] || "");
ck("its end says how the first answers went", summary === `${rows.length + 1} answers, ${rows.length - 1} right first time`, summary);
ck("and offers to go through it again", !!(await page.$("[data-go-again]")));
ck("still no card's schedule is written", writes.cards === cardWritesBefore, `${writes.cards - cardWritesBefore} written`);

console.log("\n  leaving the lesson finished, and coming back");
await nav("stats");
await enterLesson();
ck("from Stats: the lesson starts again", !(await checkpoint()) && /^Card 1 of 8 · practice/i.test(await counterLine()), await counterLine());
await answerAll();
await nav("cards");
await enterLesson();
ck("from Cards: the lesson starts again", !(await checkpoint()) && /^Card 1 of 8 · practice/i.test(await counterLine()), await counterLine());
await answerAll();
ck("(finished again)", !!(await checkpoint()));
await page.reload();
await page.waitForSelector('button:has-text("Previous card")', { timeout: 15000 }).catch(() => {});
await page.waitForTimeout(800);
ck("after a reload: the lesson starts again", !(await checkpoint()) && /^Card 1 of 8 · practice/i.test(await counterLine()), await counterLine());
ck("and through all of it, no card's schedule is written", writes.cards === cardWritesBefore, `${writes.cards - cardWritesBefore} written`);

await finish(browser, ck);
