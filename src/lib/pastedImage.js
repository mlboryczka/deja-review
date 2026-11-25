// A picture pasted into the tutor's box (owner, 2026-10-18: "i should be able
// to copy paste an image into the tutor so tutor can have context for what
// i'm talking about"). Usually a screenshot of the app.
//
// Pasting was the only way in, and a Mac screenshot is saved as a file on
// the desktop, not put on the clipboard, so most screenshots couldn't get to
// the tutor at all (owner, 2026-11-01: "screenshots need to be able to be
// added to the tutor"). They are added with the paperclip by the box or by
// dropping them on the page too, and a question can take several.
//
// It is shrunk here, before it goes anywhere: the tutor reads nothing finer
// than about 1,568 pixels on the long side (Anthropic's vision guidance), and
// a full-size Retina screenshot as PNG can run to several megabytes, while the
// whole request to Vercel must stay under 4.5 MB with a few pictures in it.
// JPEG at this size keeps text in a screenshot readable at a few hundred KB.

export const IMAGE_LONG_EDGE = 1568;
// Base64 characters, about 750 KB of picture. The server refuses more than
// IMAGE_MAX_CHARS in api/chat.js; this stays under it.
export const IMAGE_TARGET_CHARS = 1_000_000;

/**
 * The files in a paste or a drop: a screenshot on the clipboard, files copied
 * in Finder, or files dragged in, such as the thumbnail a Mac screenshot
 * leaves in the corner of the screen. `files` holds them where the browser
 * fills it; `items` is the fallback, and reading both would count a pasted
 * screenshot twice.
 */
export function filesFrom(dataTransfer) {
  const files = Array.from(dataTransfer?.files || []);
  if (files.length) return files;
  return Array.from(dataTransfer?.items || [])
    .filter((item) => item.kind === "file")
    .map((item) => item.getAsFile())
    .filter(Boolean);
}

export const isPicture = (file) => /^image\//.test(file?.type || "");

/** Whether what is being dragged over the page is files, not text. */
export function draggingFiles(e) {
  return Array.from(e?.dataTransfer?.types || []).includes("Files");
}

/** Whether the paste also carries text, which should still land in the box. */
export function pasteHasText(e) {
  const types = e?.clipboardData?.types;
  return !!types && Array.from(types).includes("text/plain");
}

async function load(file) {
  if (typeof createImageBitmap === "function") {
    try { return await createImageBitmap(file); } catch { /* fall back to <img> */ }
  }
  const url = URL.createObjectURL(file);
  try {
    const img = new Image();
    img.src = url;
    await img.decode();
    return img;
  } finally {
    URL.revokeObjectURL(url);
  }
}

/**
 * The picture, shrunk to fit IMAGE_LONG_EDGE and IMAGE_TARGET_CHARS, as
 * { media_type, data } (base64, no prefix) plus `url`, a data URL to show it
 * by. Throws when the browser can't read it.
 */
export async function shrinkImage(file) {
  const src = await load(file);
  const w = src.width || src.naturalWidth;
  const h = src.height || src.naturalHeight;
  if (!w || !h) throw new Error("That picture couldn't be read.");
  let scale = Math.min(1, IMAGE_LONG_EDGE / Math.max(w, h));
  for (let tries = 0; tries < 6; tries++) {
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(w * scale));
    canvas.height = Math.max(1, Math.round(h * scale));
    const ctx = canvas.getContext("2d");
    // JPEG has no transparency: a see-through screenshot would turn black.
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(src, 0, 0, canvas.width, canvas.height);
    const url = canvas.toDataURL("image/jpeg", 0.85);
    const data = url.slice(url.indexOf(",") + 1);
    if (data.length <= IMAGE_TARGET_CHARS) {
      src.close?.();
      return { media_type: "image/jpeg", data, url };
    }
    scale *= 0.75;
  }
  src.close?.();
  throw new Error("That picture is too big to send. Try a smaller part of the screen.");
}
