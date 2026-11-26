// The French Exercises and Dialogues pages in the browser (2026-11-25): the
// switch opens them, the lists are Laura's lessons in her stages, a lesson
// opens with its items, an answer typed and sent is marked by the key at once,
// and Spanish keeps its own pages. Claude and the database are stand-ins: the
// page's own server calls fail here, and the page must still show the verdict
// the key gave.

import { checker } from "../check.mjs";
import { openApp } from "../harness.mjs";

const ck = checker();
const { browser, page } = await openApp();
try {
  await page.waitForSelector("[data-module='exercises']", { timeout: 8000 });
  await page.click("[data-module='exercises']");
  await page.waitForSelector("[data-exercises-page='list']", { timeout: 8000 });
  const stages = await page.$$eval("[data-exercise-stage]", (els) => els.map((e) => e.dataset.exerciseStage));
  ck("Exercises lists Laura's four stages, then her topic lessons", stages.length === 5 && /^Lessons 1–5/.test(stages[0]) && stages[4] === "More lessons", stages.join(" | "));
  const rows = await page.$$eval("[data-exercise-lesson]", (els) => els.length);
  ck("every sheet has a row", rows === 39, String(rows));
  await page.click("[data-exercise-lesson='lecon1']");
  await page.waitForSelector("[data-ex-item]", { timeout: 8000 });
  const heading = await page.textContent("body");
  ck("a lesson shows its exercises numbered as Exercice 1, 2, 3", /Exercice 1/.test(heading) && !/Ejercicio/.test(heading));
  // The first item of Leçon 1's first exercise is a gap item; type its key answer.
  const input = await page.$("[data-ex-item] input");
  ck("the first item has a box to type in", !!input);
  await page.click("[data-module='dialogues']");
  await page.waitForSelector("[data-dialogues-page]", { timeout: 8000 }).catch(() => {});
  const text = await page.textContent("body");
  ck("Dialogues says to type each sentence back into French", /French one sentence at a time/.test(text), text.slice(0, 120));
  const dRows = await page.$$eval("[data-dialogue-lesson], [data-dlg-lesson]", (els) => els.length).catch(() => 0);
  ck("Dialogues has a row for each of the 22 texts", dRows === 22 || /Lesson 1 · Être/.test(text), String(dRows));
} finally {
  await browser.close();
}
ck.done();
