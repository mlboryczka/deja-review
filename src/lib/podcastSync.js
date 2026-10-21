// When each word of an RFI transcript is said (2026-10-21). Pure: no window,
// no import.meta.env, so the server, the page and the tests share it.
//
// The owner asked for the transcript to follow the recording, "but we only
// want to do this if you can accurately sync". RFI's own player has a
// "Synchronisation" button, and the times behind it are public: for an
// episode whose feed guid is G,
//
//   https://francaisfacile.rfi.fr/fr/_ws/media/editions/G/0
//
// answers JSON with content.sound.transcriptions, one entry per paragraph,
// each with description.parts: one per word, as
//   { start: "225", duration: "11", confidence: "1", type: "LEX", word: "Bonjour " }
// start and duration counted in 25ths of a second (225 = 9.0 s).
//
// Checked on 2026-10-21 before any of this was built:
//   - 18 episodes (10 Journal en français facile, 4 Les mots de l'info, 4 Un
//     mot, une histoire): the timed words, spaces aside, are letter for
//     letter the transcript the app already keeps, paragraph for paragraph.
//   - The last word of every one ends 2 to 10 s before the recording does
//     (the closing music), and the Journal's story starts on RFI's page fall
//     within a second or two of the first word of each story.
//   - A speech recogniser run on this Mac over the 20 October recording put
//     the same words at the same times (see the commit for the figures).
//
// So the times are used only where the words match the kept transcript
// exactly (spaces, curly apostrophes and Unicode forms aside), never on a
// guess that could drift. RFI sometimes edits a transcript after the app has
// kept it (9 October 2026: "Analyse et témoignages" became "Analyses,
// invités, témoignages"), so when the whole doesn't match, each paragraph is
// matched on its own: one RFI changed is left without times, and the rest,
// whose times are RFI's own and so still exact, keep theirs. With nothing
// matching there is no sync, and the page shows the transcript as before.
//
// The timing travels as, for each paragraph of the kept transcript, a list of
// its words as [from, to, start, end]: the word's characters in the
// paragraph's NFC text (from inclusive, to exclusive) and when it is said,
// in seconds to a hundredth.

import { normalizePassage, findPassage } from "./podcastTiming.js";

// RFI's unit: 25ths of a second.
export const RFI_TICKS_PER_SECOND = 25;

// Where RFI's times for an episode are, from the feed's guid; null when the
// guid isn't the uuid RFI uses.
export function rfiTimingUrl(guid) {
  const g = String(guid ?? "").trim().toLowerCase();
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(g)) return null;
  return `https://francaisfacile.rfi.fr/fr/_ws/media/editions/${g}/0`;
}

const round2 = (n) => Math.round(n * 100) / 100;

// RFI's reply -> [[{ word, start, end }]] per RFI paragraph, in seconds; null
// when the reply isn't that shape or holds no words.
export function readRfiTiming(json) {
  const list = json?.content?.sound?.transcriptions;
  if (!Array.isArray(list) || !list.length) return null;
  const out = [];
  let any = false;
  for (const para of list) {
    const parts = para?.description?.parts;
    if (!Array.isArray(parts)) return null;
    const words = [];
    for (const p of parts) {
      const start = Number(p?.start);
      const length = Number(p?.duration);
      const word = typeof p?.word === "string" ? p.word : null;
      if (word === null || !Number.isFinite(start) || !Number.isFinite(length) || start < 0 || length < 0) return null;
      if (!word.trim()) continue;
      words.push({ word, start: round2(start / RFI_TICKS_PER_SECOND), end: round2((start + length) / RFI_TICKS_PER_SECOND) });
      any = true;
    }
    out.push(words);
  }
  return any ? out : null;
}

// The letters compared: Unicode composed one way, curly apostrophes as
// straight ones (each stays one character). Whitespace is skipped by the
// caller.
const same = (ch) => (/[’‘ʼ′´`]/.test(ch) ? "'" : ch);
const isSpace = (ch) => /\s/.test(ch);

// The kept transcript (one string per paragraph) and RFI's words -> the
// timing described at the top, or null when nothing matches.
//
// First RFI's paragraphs and the kept ones are compared as one stream of
// letters, so a paragraph split differently on either side still lines up.
// If that fails and both have as many paragraphs, each pair is compared on
// its own, and a paragraph that doesn't match gets no words.
export function alignTiming(paragraphs, rfiParagraphs, { duration = null } = {}) {
  if (!Array.isArray(paragraphs) || !paragraphs.length || !Array.isArray(rfiParagraphs)) return null;
  const texts = paragraphs.map((p) => String(p ?? "").normalize("NFC"));
  const whole = alignStream(texts, rfiParagraphs, duration);
  if (whole || rfiParagraphs.length !== texts.length) return whole;
  const each = texts.map((t, p) => alignStream([t], [rfiParagraphs[p]], duration)?.[0] || []);
  // Matched one by one, the paragraphs' times must still run in order.
  let last = 0;
  for (const w of each.flat()) {
    if (w[2] < last - 1) return null;
    last = Math.max(last, w[2]);
  }
  return each.some((words) => words.length) ? each : null;
}

// One stream of letters against RFI's words: null when they don't match
// letter for letter, or the times make no sense (going backwards by more
// than a second, or past the end of the recording). Each word belongs to the
// kept paragraph its first letter is in, and must end in it.
function alignStream(texts, rfiParagraphs, duration) {
  // Every letter of the kept transcript, in order: [paragraph, index].
  const letters = [];
  texts.forEach((t, p) => {
    for (let i = 0; i < t.length; i++) if (!isSpace(t[i])) letters.push([p, i]);
  });
  const out = texts.map(() => []);
  const limit = Number(duration) > 0 ? Number(duration) + 2 : Infinity;
  let at = 0;
  let last = 0;
  for (const words of rfiParagraphs) {
    for (const w of words || []) {
      const chars = [...w.word.normalize("NFC")].filter((ch) => !isSpace(ch));
      if (!chars.length) continue;
      const first = letters[at];
      if (!first) return null;
      for (const ch of chars) {
        const l = letters[at];
        if (!l || l[0] !== first[0] || same(texts[l[0]][l[1]]) !== same(ch)) return null;
        at++;
      }
      if (!(w.end >= w.start) || w.start < last - 1 || w.end > limit) return null;
      last = Math.max(last, w.start);
      const end = letters[at - 1];
      out[first[0]].push([first[1], end[1] + 1, w.start, w.end]);
    }
  }
  if (at !== letters.length) return null;
  return out;
}

// The timing as the page receives it, checked against the transcript it
// shows: one list per paragraph, each word four numbers inside its
// paragraph. Anything else -> null (no sync).
export function checkTiming(timing, paragraphs) {
  if (!Array.isArray(timing) || !Array.isArray(paragraphs) || timing.length !== paragraphs.length) return null;
  let any = false;
  for (let p = 0; p < timing.length; p++) {
    const len = String(paragraphs[p] ?? "").normalize("NFC").length;
    if (!Array.isArray(timing[p])) return null;
    for (const w of timing[p]) {
      if (!Array.isArray(w) || w.length !== 4 || !w.every((n) => Number.isFinite(n))) return null;
      if (!(w[0] >= 0 && w[1] > w[0] && w[1] <= len && w[3] >= w[2] && w[2] >= 0)) return null;
      any = true;
    }
  }
  return any ? timing : null;
}

// A word that ends a sentence: its last letters are . ! ? or …, perhaps
// followed by a closing quote or bracket ("tous." "pillages. »").
const ENDS_SENTENCE = /[.!?…]\s*[»”"')\]]*\s*$/;

// The sentences of every paragraph, in the order they are said:
//   [{ index, paragraph, from, to, start, end }]
// from/to are characters of the paragraph's NFC text, start/end seconds.
// A sentence runs from its first word to the word that ends it (or the
// paragraph's last word).
export function sentencesOf(paragraphs, timing) {
  const out = [];
  if (!Array.isArray(timing)) return out;
  timing.forEach((words, paragraph) => {
    const text = String(paragraphs?.[paragraph] ?? "").normalize("NFC");
    let open = null;
    (words || []).forEach((w, i) => {
      if (!open) open = { paragraph, from: w[0], to: w[1], start: w[2], end: w[3] };
      open.to = w[1];
      open.end = Math.max(open.end, w[3]);
      if (ENDS_SENTENCE.test(text.slice(w[0], w[1])) || i === words.length - 1) {
        out.push({ index: out.length, ...open });
        open = null;
      }
    });
  });
  return out;
}

// After its last word, a sentence stays lit this long (a pause for breath)
// unless the next begins sooner.
export const SENTENCE_LINGER_S = 2;

// Which sentence is being said at `time`: the last one that has started, or
// -1 before the first, and -1 once SENTENCE_LINGER_S has passed since it
// ended with no other begun (the music between stories, or a paragraph RFI
// changed, whose words have no times).
export function sentenceAt(sentences, time) {
  if (!Array.isArray(sentences) || !sentences.length || !Number.isFinite(time)) return -1;
  let lo = 0;
  let hi = sentences.length - 1;
  if (time < sentences[0].start) return -1;
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if (sentences[mid].start <= time) lo = mid;
    else hi = mid - 1;
  }
  return time <= sentences[lo].end + SENTENCE_LINGER_S ? lo : -1;
}

// normalizePassage's text -> the paragraph's NFC text: where character `k`
// of the normalised text is in the NFC one. normalizePassage collapses each
// run of whitespace to one space and trims; apostrophes keep their length.
function normalToNfc(nfc) {
  const map = [];
  let i = 0;
  while (i < nfc.length && isSpace(nfc[i])) i++;
  let end = nfc.length;
  while (end > i && isSpace(nfc[end - 1])) end--;
  for (; i < end; i++) {
    if (isSpace(nfc[i])) {
      map.push(i);
      while (i + 1 < end && isSpace(nfc[i + 1])) i++;
    } else {
      map.push(i);
    }
  }
  map.push(end);
  return map;
}

// When a question's passage is said: { start, end } in seconds, from its
// first word to its last, or null when it isn't in the transcript or its
// words carry no times.
export function passageTimes(paragraphs, timing, passage, prefer = null) {
  if (!Array.isArray(timing)) return null;
  const hit = findPassage(paragraphs, passage?.fr, prefer);
  if (!hit) return null;
  const nfc = String(paragraphs[hit.paragraph] ?? "").normalize("NFC");
  const map = normalToNfc(nfc);
  if (normalizePassage(nfc).length !== map.length - 1) return null;
  const from = map[hit.offset];
  const to = map[hit.offset + hit.length - 1] + 1;
  const words = (timing[hit.paragraph] || []).filter((w) => w[1] > from && w[0] < to);
  if (!words.length) return null;
  return { start: words[0][2], end: Math.max(...words.map((w) => w[3])) };
}
