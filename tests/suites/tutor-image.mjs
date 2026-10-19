// A picture pasted into the tutor's box (owner, 2026-10-18: "i should be able
// to copy paste an image into the tutor so tutor can have context for what
// i'm talking about").
//
// The paste is a real paste event carrying a picture file, the way a
// screenshot arrives from the clipboard. /api/chat is answered here, so
// nothing reaches Anthropic; what the page sent is read from the request.
import { openApp, finish, checker } from "../harness.mjs";

const ck = checker();
const requests = [];
const SSE = [
  { type: "text", delta: "That is the passage about the protests." },
  { type: "done" },
].map((e) => `data: ${JSON.stringify(e)}\n\n`).join("");

const { browser, page } = await openApp({
  route: async (p) => {
    await p.route("**/api/chat", async (r) => {
      requests.push(r.request().postDataJSON());
      await r.fulfill({
        status: 200,
        headers: { "Access-Control-Allow-Origin": "*" },
        contentType: "text/event-stream; charset=utf-8",
        body: SSE,
      });
    });
  },
});

// A screenshot-sized picture, bigger than the tutor reads, pasted into the box.
const paste = (w, h) =>
  page.evaluate(async ([w, h]) => {
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#f4efe6";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "#111";
    ctx.font = "64px serif";
    ctx.fillText("Question 2 — Translate into English.", 80, 200);
    const blob = await new Promise((r) => canvas.toBlob(r, "image/png"));
    const dt = new DataTransfer();
    dt.items.add(new File([blob], "screenshot.png", { type: "image/png" }));
    const box = document.querySelector("[data-tutor-panel] textarea");
    box.focus();
    box.dispatchEvent(new ClipboardEvent("paste", { clipboardData: dt, bubbles: true, cancelable: true }));
  }, [w, h]);

await page.click("[data-tutor-toggle]");
await page.waitForSelector("[data-tutor-panel] textarea", { timeout: 8000 });

console.log("\n  pasting a picture");
{
  const placeholder = await page.$eval("[data-tutor-panel] textarea", (t) => t.placeholder);
  ck("the box says a screenshot can be pasted", /paste a screenshot/i.test(placeholder), placeholder);

  await paste(3024, 1964);
  await page.waitForSelector("[data-tutor-pasted] img", { timeout: 8000 });
  ck("the pasted picture shows above the box", true);
  const sendOn = await page.$eval("[data-tutor-panel] button:text-is('Send')", (b) => !b.disabled);
  ck("Send can go with only a picture, nothing typed", sendOn);

  await page.click("[data-tutor-pasted-remove]");
  ck("Remove takes it away", !(await page.$("[data-tutor-pasted]")));

  await paste(3024, 1964);
  await page.waitForSelector("[data-tutor-pasted] img", { timeout: 8000 });
  await page.fill("[data-tutor-panel] textarea", "what does this one mean?");
  await page.click("button:text-is('Send')");
  await page.waitForFunction(() => /passage about the protests/.test(document.body.innerText), null, { timeout: 8000 });

  ck("once sent, the picture is in your message", !!(await page.$("[data-tutor-panel] [data-tutor-image]")));
  ck("and no longer waiting above the box", !(await page.$("[data-tutor-pasted]")));

  const last = requests.at(-1)?.messages?.at(-1) || {};
  ck("the question goes with the picture", last.content === "what does this one mean?" && last.image?.media_type === "image/jpeg",
     JSON.stringify({ content: last.content, type: last.image?.media_type }));
  ck("shrunk to under a million characters", typeof last.image?.data === "string" && last.image.data.length > 0 && last.image.data.length <= 1_000_000,
     String(last.image?.data?.length));
  const size = await page.evaluate(async (d) => {
    const img = new Image();
    img.src = `data:image/jpeg;base64,${d}`;
    await img.decode();
    return [img.naturalWidth, img.naturalHeight];
  }, last.image?.data || "");
  ck("and to 1,568 pixels on the long side", size[0] === 1568 && size[1] <= 1568, size.join("×"));
  ck("without the copy the page shows it by", !("url" in (last.image || {})), Object.keys(last.image || {}).join(", "));
}

console.log("\n  a thread of pictures");
{
  for (let i = 0; i < 3; i++) {
    await paste(800, 500);
    await page.waitForSelector("[data-tutor-pasted] img", { timeout: 8000 });
    await page.click("button:text-is('Send')");
    // Each answer's bubble, plus the screen reader's copy of the latest one.
    await page.waitForFunction(
      (n) => document.querySelector("[data-tutor-panel]").innerText.split("passage about the protests").length - 1 === n + 1,
      i + 2,
      { timeout: 8000 }
    );
  }
  const users = (requests.at(-1)?.messages || []).filter((m) => m.role === "user");
  ck("four pictures in, the latest three go with the history", users.filter((m) => m.image).length === 3, String(users.filter((m) => m.image).length));
  ck("the oldest goes as a note that it was there", users[0]?.imageDropped === true && !users[0].image, JSON.stringify(Object.keys(users[0] || {})));
}

await finish(browser, ck);
