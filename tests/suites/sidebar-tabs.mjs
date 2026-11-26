// The sidebar in every tab (owner, 2026-11-26): "cards, exercises, dialogues
// change from tab to respective tab, but lessons, stats, and tutor should be
// the same for each ... for both spanish and french", and on Podcasts "my
// podcasts and episodes should all just be under my podcasts".
//
// What must hold, in plain words:
//   - Flashcards has Cards, Lessons, Stats, Tutor; Exercises has Exercises,
//     Lessons, Stats, Tutor; Dialogues has Dialogues, Lessons, Stats, Tutor;
//   - Lessons and Stats opened from Exercises leave the sidebar in Exercises,
//     and Exercises there opens its page again;
//   - a lesson picked under Lessons opens in the tab you are in: its sheet on
//     Exercises, its text on Dialogues, its cards on Flashcards;
//   - Podcasts (where shown) has My podcasts, with All episodes under it, and
//     no Episodes item of its own.

import { checker } from "../check.mjs";
import { openApp } from "../harness.mjs";

const ck = checker();
const items = (page) => page.$$eval(
  "[data-tour='nav-cards'], [data-ex-nav='all'], [data-dlg-nav='all'], [data-pod-nav='mine'], [data-pod-nav='episodes'], [data-tour='nav-lessons'], [data-tour='nav-stats'], [data-tutor-toggle]",
  (els) => els.map((e) => e.dataset.tour || (e.dataset.exNav && "exercises") || (e.dataset.dlgNav && "dialogues") || (e.dataset.podNav && `pod-${e.dataset.podNav}`) || "tutor")
);
const tabOn = (page) => page.$eval("[data-module][aria-pressed='true']", (e) => e.dataset.module);

const { browser, page } = await openApp();
try {
  ck("Flashcards: Cards, Lessons, Stats, Tutor", (await items(page)).join() === "nav-cards,nav-lessons,nav-stats,nav-tutor", (await items(page)).join());

  await page.click("[data-module='exercises']");
  await page.waitForSelector("[data-exercises-page]", { timeout: 8000 });
  ck("Exercises: Exercises, Lessons, Stats, Tutor", (await items(page)).join() === "exercises,nav-lessons,nav-stats,nav-tutor", (await items(page)).join());

  await page.click("[data-tour='nav-stats']");
  await page.waitForTimeout(400);
  ck("Stats from Exercises leaves the sidebar in Exercises", (await tabOn(page)) === "exercises" && (await items(page)).join() === "exercises,nav-lessons,nav-stats,nav-tutor", `${await tabOn(page)}: ${(await items(page)).join()}`);
  await page.click("[data-tour='nav-lessons']");
  await page.waitForSelector("[data-lesson-nav]", { timeout: 8000 });
  ck("Lessons from Exercises leaves the sidebar in Exercises", (await tabOn(page)) === "exercises");
  const first = await page.getAttribute("[data-lesson-nav]", "data-lesson-nav");
  await page.click(`[data-lesson-nav='${first}']`);
  await page.waitForSelector("[data-exercises-page='lesson']", { timeout: 8000 }).catch(() => {});
  ck("a lesson picked under Lessons on Exercises opens its sheet", (await page.$("[data-exercises-page='lesson']")) !== null, first);
  const marked = await page.$$eval("[data-lesson-nav][aria-current='page']", (els) => els.map((e) => e.dataset.lessonNav));
  ck("and that lesson is the one marked under Lessons", marked.join() === first, marked.join());
  if (process.env.SHOT) { await page.mouse.move(900, 450); await page.waitForTimeout(1000); await page.screenshot({ path: process.env.SHOT.replace(/\.png$/, "-exercises.png") }); }

  await page.click("[data-tour='nav-stats']");
  await page.waitForTimeout(300);
  await page.click("[data-ex-nav='all']");
  await page.waitForSelector("[data-exercises-page='list']", { timeout: 8000 }).catch(() => {});
  ck("Exercises on the Stats page opens the Exercises list", (await page.$("[data-exercises-page='list']")) !== null);

  await page.click("[data-module='dialogues']");
  await page.waitForSelector("[data-dialogues-page]", { timeout: 8000 });
  ck("Dialogues: Dialogues, Lessons, Stats, Tutor", (await items(page)).join() === "dialogues,nav-lessons,nav-stats,nav-tutor", (await items(page)).join());
  await page.click("[data-tour='nav-lessons']");
  await page.waitForSelector("[data-lesson-nav]", { timeout: 8000 });
  await page.click(`[data-lesson-nav='${first}']`);
  await page.waitForSelector("[data-dialogues-page='lesson']", { timeout: 8000 }).catch(() => {});
  ck("a lesson picked under Lessons on Dialogues opens its text", (await page.$("[data-dialogues-page='lesson']")) !== null);

  await page.click("[data-module='flashcards']");
  await page.waitForTimeout(400);
  ck("Flashcards opens Cards", (await tabOn(page)) === "flashcards" && (await items(page))[0] === "nav-cards");

  if (await page.$("[data-module='podcasts']")) {
    await page.click("[data-module='podcasts']");
    await page.waitForTimeout(600);
    const pod = (await items(page)).join();
    ck("Podcasts: My podcasts with All episodes under it, then Lessons, Stats, Tutor", pod === "pod-mine,pod-episodes,nav-lessons,nav-stats,nav-tutor", pod);
    if (process.env.SHOT) await page.screenshot({ path: process.env.SHOT.replace(/\.png$/, "-podcasts.png") });
  }
} finally {
  await browser.close();
}
ck.done();
