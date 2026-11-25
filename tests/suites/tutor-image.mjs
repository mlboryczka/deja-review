// A picture pasted into the tutor's box (owner, 2026-10-18: "i should be able
// to copy paste an image into the tutor so tutor can have context for what
// i'm talking about"), and since 2026-11-01 one saved as a file, added with
// the paperclip or dropped on the page, up to three to a question (owner:
// "screenshots need to be able to be added to the tutor"). A Mac screenshot
// is a file on the desktop, not something on the clipboard.
//
// The paste is a real paste event carrying a picture file, the way a
// screenshot arrives from the clipboard; the drop is a real drop carrying
// one. /api/chat is answered here, so nothing reaches Anthropic; what the
// page sent is read from the request.
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

// A screenshot-sized picture drawn in the page, as a File there.
const MAKE_PICTURE = `async (w, h) => {
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
  return new File([blob], "Screenshot 2026-11-01 at 10.02.11.png", { type: "image/png" });
}`;

// Pasted into the box, or with `where` ("body") with nothing focused.
const paste = (w, h, where = "box") =>
  page.evaluate(async ([w, h, where, make]) => {
    const file = await (0, eval)(make)(w, h);
    const dt = new DataTransfer();
    dt.items.add(file);
    const box = document.querySelector("[data-tutor-panel] textarea");
    let target = box;
    if (where === "body") {
      box.blur();
      target = document.body;
    } else {
      box.focus();
    }
    target.dispatchEvent(new ClipboardEvent("paste", { clipboardData: dt, bubbles: true, cancelable: true }));
  }, [w, h, where, MAKE_PICTURE]);

// Dragged onto the page and dropped there, outside the panel: the drag's
// enter and moves, then (unless `hold`) the drop. Says whether the page took
// the drop, which is what stops the browser opening the file in the tab.
const drop = (selector, { type = "image/png", hold = false } = {}) =>
  page.evaluate(async ([selector, type, hold, make]) => {
    const file = type === "image/png"
      ? await (0, eval)(make)(1200, 800)
      : new File(["%PDF-1.4"], "notes.pdf", { type });
    const dt = new DataTransfer();
    dt.items.add(file);
    const el = document.querySelector(selector);
    const fire = (name) => el.dispatchEvent(new DragEvent(name, { dataTransfer: dt, bubbles: true, cancelable: true }));
    fire("dragenter");
    fire("dragover");
    if (hold) return null;
    return !fire("drop");
  }, [selector, type, hold, MAKE_PICTURE]);

// Picked with the paperclip: its file picker, given `n` screenshots.
const pngs = async (n) => {
  const b64 = await page.evaluate(async ([n, make]) => {
    const out = [];
    for (let i = 0; i < n; i++) {
      const file = await (0, eval)(make)(1000 + i * 10, 700);
      const buf = new Uint8Array(await file.arrayBuffer());
      let s = "";
      for (const b of buf) s += String.fromCharCode(b);
      out.push(btoa(s));
    }
    return out;
  }, [n, MAKE_PICTURE]);
  return b64.map((d, i) => ({ name: `Screenshot ${i + 1}.png`, mimeType: "image/png", buffer: Buffer.from(d, "base64") }));
};
const pick = async (n) => {
  const [chooser] = await Promise.all([page.waitForEvent("filechooser"), page.click("[data-tutor-attach]")]);
  await chooser.setFiles(await pngs(n));
};

const waiting = () => page.$$eval("[data-tutor-pasted] img", (els) => els.length);
const waitFor = (n) =>
  page.waitForFunction((n) => document.querySelectorAll("[data-tutor-pasted] img").length === n, n, { timeout: 8000 });
const panelText = () => page.$eval("[data-tutor-panel]", (el) => el.innerText);
// Each answer's bubble, plus the screen reader's copy of the latest one.
const answers = () =>
  page.$eval("[data-tutor-panel]", (el) => el.innerText.split("passage about the protests").length - 1);
const sendAndWait = async () => {
  const before = await answers();
  await page.click("button:text-is('Send')");
  await page.waitForFunction(
    (n) => document.querySelector("[data-tutor-panel]").innerText.split("passage about the protests").length - 1 > n,
    before,
    { timeout: 8000 }
  );
};

await page.click("[data-tutor-toggle]");
await page.waitForSelector("[data-tutor-panel] textarea", { timeout: 8000 });

console.log("\n  pasting a picture");
{
  const placeholder = await page.$eval("[data-tutor-panel] textarea", (t) => t.placeholder);
  ck("the box says a screenshot can be added", /add a screenshot/i.test(placeholder), placeholder);

  await paste(3024, 1964);
  await waitFor(1);
  ck("the pasted picture shows above the box", true);
  const sendOn = await page.$eval("[data-tutor-panel] button:text-is('Send')", (b) => !b.disabled);
  ck("Send can go with only a picture, nothing typed", sendOn);

  await page.click("[data-tutor-pasted-remove]");
  ck("its ✕ takes it away", !(await page.$("[data-tutor-pasted]")));

  await paste(3024, 1964);
  await waitFor(1);
  await page.fill("[data-tutor-panel] textarea", "what does this one mean?");
  await sendAndWait();

  ck("once sent, the picture is in your message", !!(await page.$("[data-tutor-panel] [data-tutor-image]")));
  ck("and no longer waiting above the box", !(await page.$("[data-tutor-pasted]")));

  const last = requests.at(-1)?.messages?.at(-1) || {};
  const sent = last.images?.[0];
  ck("the question goes with the picture", last.content === "what does this one mean?" && last.images?.length === 1 && sent?.media_type === "image/jpeg",
     JSON.stringify({ content: last.content, n: last.images?.length, type: sent?.media_type }));
  ck("shrunk to under a million characters", typeof sent?.data === "string" && sent.data.length > 0 && sent.data.length <= 1_000_000,
     String(sent?.data?.length));
  const size = await page.evaluate(async (d) => {
    const img = new Image();
    img.src = `data:image/jpeg;base64,${d}`;
    await img.decode();
    return [img.naturalWidth, img.naturalHeight];
  }, sent?.data || "");
  ck("and to 1,568 pixels on the long side", size[0] === 1568 && size[1] <= 1568, size.join("×"));
  ck("without the copy the page shows it by", !("url" in (sent || {})) && !("id" in (sent || {})), Object.keys(sent || {}).join(", "));

  await paste(800, 500, "body");
  await waitFor(1);
  ck("a picture pasted with the cursor outside the box still goes to the tutor", true);
  await page.click("[data-tutor-pasted-remove]");
}

console.log("\n  a screenshot saved as a file, added with the paperclip");
{
  const label = await page.$eval("[data-tutor-attach]", (b) => b.getAttribute("aria-label"));
  ck("a paperclip by the box adds a screenshot", label === "Add a screenshot", label);

  await pick(2);
  await waitFor(2);
  ck("two picked at once both wait above the box", (await waiting()) === 2);
  ck("and say they go with the question", /These two pictures go with your question/.test(await panelText()));

  await page.click("[data-tutor-pasted-remove] >> nth=0");
  await waitFor(1);
  ck("one ✕ takes away only that picture", /This picture goes with your question/.test(await panelText()));

  await pick(2);
  await waitFor(3);
  await paste(800, 500);
  await page.waitForFunction(() => /three pictures at most/.test(document.querySelector("[data-tutor-panel]").innerText), null, { timeout: 8000 });
  ck("a fourth is left out, and a line says why", (await waiting()) === 3);

  await page.fill("[data-tutor-panel] textarea", "compare these");
  await sendAndWait();
  const last = requests.at(-1)?.messages?.at(-1) || {};
  ck("all three go with the question", last.content === "compare these" && last.images?.length === 3, String(last.images?.length));
  ck("and all three show in your message",
     (await page.$$eval("[data-tutor-panel] [data-tutor-image]", (els) => els.length)) === 4,
     String(await page.$$eval("[data-tutor-panel] [data-tutor-image]", (els) => els.length)));
  const users = (last && requests.at(-1).messages.filter((m) => m.role === "user")) || [];
  ck("the earlier picture goes as a note that it was there", users[0]?.imagesDropped === 1 && !users[0].images, JSON.stringify(Object.keys(users[0] || {})));
}

console.log("\n  a screenshot dropped on the page");
{
  await drop("main", { hold: true });
  ck("dragging one over the page says where it goes", !!(await page.$("[data-tutor-drop]")));
  const url = page.url();
  const taken = await drop("main");
  await waitFor(1);
  ck("dropped outside the panel, it waits above the box", true);
  ck("the page takes the drop, so the file doesn't open in its place", taken === true && page.url() === url, `${taken} ${page.url()}`);
  ck("and the outline goes", !(await page.$("[data-tutor-drop]")));

  await drop("[data-tutor-panel] textarea", { type: "application/pdf" });
  await page.waitForFunction(() => /Only a picture can go with a question/.test(document.querySelector("[data-tutor-panel]").innerText), null, { timeout: 8000 });
  ck("a file that isn't a picture is turned away with a line saying so", (await waiting()) === 1);
  await page.click("[data-tutor-pasted-remove]");
}

console.log("\n  a thread of pictures");
{
  for (let i = 0; i < 3; i++) {
    await paste(800, 500);
    await waitFor(1);
    await sendAndWait();
  }
  const users = (requests.at(-1)?.messages || []).filter((m) => m.role === "user");
  const pictured = users.filter((m) => m.images?.length);
  ck("the latest three pictures go with the history", pictured.length === 3 && pictured.every((m) => m.images.length === 1), String(pictured.length));
  ck("older ones go as a count of what was there", users[0]?.imagesDropped === 1 && users[1]?.imagesDropped === 3,
     JSON.stringify(users.slice(0, 2).map((m) => m.imagesDropped)));
}

await finish(browser, ck);
