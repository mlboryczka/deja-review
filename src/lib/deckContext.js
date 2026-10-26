// Picking the slice of the deck that is relevant to a tutor question.
//
// The tutor used to be sent `deckFronts.slice(0, 60)` — sixty French strings
// chosen by array position, with no backs and no history. As duplicate
// detection on a deck in the thousands that is a lottery, and as context it is
// nothing. Everything needed is already in the browser: useUserDeck shapes
// every row with its back, its lapses and its last result.
//
// Matching is a filter over an array already in memory — no API call, no
// embeddings, no index. The question is short and the deck is a few thousand
// rows, so a scan per question is far cheaper than the request it rides on.

import { cleanFrenchPrompt, cleanEnglishPrompt, dropFinalPeriod } from "./cardText.js";
import { sideOf, directionsOf } from "./directions.js";

// Function words carry no signal and match everything. English and French
// together, since a question mixes both ("what does chouette mean"). Checked
// against the accent-folded form too, so "où" is as dead as "ou".
const ENGLISH_STOP = [
  "a", "an", "the", "is", "are", "was", "were", "be", "do", "does", "did",
  "how", "what", "when", "where", "which", "who", "why", "can", "could",
  "would", "should", "i", "you", "it", "to", "of", "in", "on", "for", "and",
  "or", "but", "with", "say", "says", "said", "mean", "means", "meaning",
  "use", "uses", "using", "used", "difference", "between", "my", "me",
  "there", "this", "that", "these", "those", "some", "any", "not", "no",
];
const STOP = new Set([
  ...ENGLISH_STOP,
  // French
  "le", "la", "les", "un", "une", "des", "du", "de", "et", "ou", "est",
  "sont", "que", "qui", "quoi", "pour", "avec", "dans", "sur", "je", "tu",
  "il", "elle", "on", "nous", "vous", "ils", "elles", "ce", "cette", "ces",
  "au", "aux", "en", "ne", "pas", "se", "sa", "son", "ses",
  // What an apostrophe leaves behind once elision is split off: qu'il, jusqu'à.
  "qu", "jusqu", "lorsqu", "puisqu",
]);
// The Spanish module's tutor (2026-10-26): English and Spanish, since a
// question there mixes those ("what does ya mean"). Unaccented, as the check
// folds accents: "qué", "él" and "está" go with "que", "el" and "esta". Ser,
// estar and hay stay in: they are what a question is often about.
const SPANISH_STOP = new Set([
  ...ENGLISH_STOP, "spanish",
  "el", "la", "los", "las", "lo", "un", "una", "unos", "unas", "de", "del",
  "al", "es", "son", "que", "quien", "como", "cual", "donde", "cuando", "en",
  "por", "para", "con", "sin", "se", "le", "les", "me", "te", "nos", "mi",
  "mis", "tu", "tus", "su", "sus", "yo", "ella", "ellos", "ellas", "usted",
  "ustedes", "nosotros", "nosotras", "este", "esta", "esto", "estos", "estas",
  "ese", "esa", "eso", "esos", "esas", "si", "muy", "mas", "pero", "porque",
  "espanol",
]);
const stopFor = (course) => (course === "es" ? SPANISH_STOP : STOP);

// Accents and ligatures off. Learners on an English keyboard type "ecole" and
// "soeur", and a match that needs the accent finds nothing for them.
export function fold(word) {
  return String(word || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/œ/g, "oe")
    .replace(/æ/g, "ae");
}

// Split on anything that isn't a letter. Accented letters and the ligatures
// œ/æ are letters — `sœur` used to fall apart into "s" and "ur". Apostrophes
// split too, straight or curly, so the elided article comes off and "l'école"
// is the word "école" (the "l" is then too short to count). Both the question
// and the card go through this, so "aujourd'hui" splitting in two still matches
// itself.
function words(text, stop = STOP) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFC")
    .split(/[^a-zà-öø-ÿœæ]+/)
    .filter((w) => w.length >= 2 && !stop.has(w) && !stop.has(fold(w)));
}

/**
 * Cards in the deck that relate to what was just asked.
 *
 * Scored by shared content words. A hit on the French side outweighs one on
 * the English: if the learner typed a French word, the card carrying that word
 * is the one they mean, whereas a shared English word is often incidental ("to
 * go" matches hundreds of backs). An exact French hit beats one that only
 * matches with the accents off, since `à` and `a`, `sale` and `salé` are
 * different words — but the unaccented match still counts, because that is
 * how most learners type.
 *
 * @param {string} question   what the learner typed
 * @param {Array}  cards      shaped deck rows from useUserDeck ({ f, b, ... })
 * @param {number} limit      how many to return
 * @param {string} course     "fr", or "es" for the Spanish module's deck
 * @returns {Array<{front: string, back: string}>}
 */
export function findRelatedCards(question, cards, limit = 8, course = "fr") {
  const stop = stopFor(course);
  const askedWords = words(question, stop);
  if (!askedWords.length || !Array.isArray(cards)) return [];
  const asked = new Set(askedWords);
  const askedFolded = new Set(askedWords.map(fold));

  const scored = [];
  for (const c of cards) {
    if (!c?.f) continue;
    let score = 0;
    for (const w of words(c.f, stop)) {
      if (asked.has(w)) score += 3;
      else if (askedFolded.has(fold(w))) score += 2;
    }
    for (const w of words(c.b, stop)) if (asked.has(w) || askedFolded.has(fold(w))) score += 1;
    if (score > 0) scored.push({ card: c, score });
  }

  // Highest score first; ties go to the card seen in more lessons, which is
  // the deck's own signal for how central a word is.
  scored.sort((a, b) => b.score - a.score || (b.card.freq || 0) - (a.card.freq || 0));

  return scored.slice(0, limit).map(({ card }) => ({ front: card.f, back: card.b }));
}

// When a card was last missed, either way round, or null if its last answer
// both ways was not a miss. `last_answer_correct` is null on rows that predate
// FSRS and on a direction never answered, and false only on a real miss, so
// the strict comparison matters — a falsy test would sweep in every
// unreviewed card.
function lastMissedAt(card) {
  let at = null;
  for (const dir of directionsOf(card)) {
    const side = sideOf(card, dir);
    if (side.last_answer_correct !== false) continue;
    const t = side.last_review ? new Date(side.last_review).getTime() : 0;
    if (at === null || t > at) at = t;
  }
  return at;
}

/**
 * The cards most recently got wrong, either way round.
 *
 * @param {Array}  cards  shaped deck rows from useUserDeck
 * @param {number} limit  how many to return
 * @returns {Array<{front: string, back: string}>}
 */
export function recentMisses(cards, limit = 6) {
  if (!Array.isArray(cards)) return [];
  return cards
    .filter((c) => c?.f && lastMissedAt(c) !== null)
    .sort((a, b) => lastMissedAt(b) - lastMissedAt(a))
    .slice(0, limit)
    .map((c) => ({ front: c.f, back: c.b }));
}

const MISS_WINDOW_DAYS = 30;

/**
 * Misses worth telling the tutor about for THIS question: recent, and sharing
 * a word with the question or the card on screen.
 *
 * Sending every miss on every turn, under a prompt that says "use it", was an
 * invitation to answer a question about amener with "by the way, you keep
 * missing la colline". A miss from last spring is not what they keep getting
 * wrong either.
 */
export function relevantMisses({ question, currentCard, cards, now = Date.now(), limit = 6, course = "fr" }) {
  if (!Array.isArray(cards)) return [];
  const stop = stopFor(course);
  const topic = new Set(
    words(`${question || ""} ${currentCard?.f || ""} ${currentCard?.b || ""}`, stop).map(fold)
  );
  if (!topic.size) return [];
  const since = now - MISS_WINDOW_DAYS * 24 * 60 * 60 * 1000;
  return cards
    .filter((c) =>
      c?.f &&
      c.row_id !== currentCard?.row_id &&
      (lastMissedAt(c) ?? 0) >= since &&
      words(`${c.f} ${c.b}`, stop).some((w) => topic.has(fold(w)))
    )
    .sort((a, b) => lastMissedAt(b) - lastMissedAt(a))
    .slice(0, limit)
    .map((c) => ({ front: c.f, back: c.b }));
}

/**
 * What the card on screen is asking, as the card face shows it: the French
 * with its gloss stripped, or the English with any note naming the French form
 * stripped. The tutor's header shows this, never the raw front — on an
 * English-prompt card the front IS the answer.
 */
export function cardPrompt(card) {
  if (!card) return "";
  return dropFinalPeriod(
    card.shownDir === "en" ? cleanEnglishPrompt(card.b) : cleanFrenchPrompt(card.f, card.b)
  );
}

/** The side the student is being asked for. */
export function cardAnswer(card) {
  if (!card) return "";
  return dropFinalPeriod(card.shownDir === "en" ? card.f : card.b);
}

// ── A podcast episode instead of a card (owner, 2026-10-09) ───────────────
// On Podcasts (owner only for now) there is no card on screen. What the tutor
// is told instead is the RFI episode being worked through: its name, RFI's own
// transcript, and the passage being answered, with whether it has been
// answered yet. The podcasts page hands it up as
//   { key, episode: { title, date, show },
//     passage: { number, fr, kind, answered, typed, verdict } | null,
//     questions: [{ number, fr, kind, answered, typed, verdict }],
//     transcript }
// (build spec §11) and FlashcardApp passes it to the tutor as `podcast`.
//
// Kept apart from the card on purpose: cardPrompt, cardAnswer and "don't give
// the answer away" are about a flashcard, and the passage has a rule of its
// own (api/chat.js, "A podcast episode"): until it is answered, the tutor
// doesn't translate or summarise it, since that is the exercise.

// What goes to the tutor, at most. A Journal en français facile transcript
// came to between 9,000 and 9,700 characters on seven saved episode pages
// (measured roughly, tags stripped, 2026-10-09), so this keeps all of one; it
// costs the asker a few thousand input tokens per question (an estimate),
// which is the price of answers that quote the episode rather than guess at
// it. The server clips to the same.
export const PODCAST_TRANSCRIPT_MAX = 12000;
// A passage is 1–4 sentences; this is room for four long ones.
export const PODCAST_PASSAGE_MAX = 800;
const PODCAST_VERDICTS = new Set(["got", "partly", "missed"]);

const textOf = (v) => (typeof v === "string" ? v.trim() : "");

/** The episode, named: RFI's title, else the show and its date. */
export function podcastLabel(podcast) {
  const ep = podcast?.episode && typeof podcast.episode === "object" ? podcast.episode : {};
  return textOf(ep.title) || [textOf(ep.show), textOf(ep.date)].filter(Boolean).join(" · ");
}

/**
 * What a question asked on Podcasts was about, kept on the turn as its
 * `about` (the server clips it to 200 characters): the episode and the start
 * of the passage, never the transcript.
 */
export function podcastAbout(podcast) {
  const label = podcastLabel(podcast).slice(0, 70);
  const fr = textOf(podcast?.passage?.fr);
  if (!fr) return label;
  const head = fr.length > 110 ? `${fr.slice(0, 109).trimEnd()}…` : fr;
  const q = questionNumber(podcast.passage);
  const passage = q ? `Question ${q}, « ${head} »` : `« ${head} »`;
  return label ? `${label}: ${passage}` : passage;
}

// The passage's number as the page shows it ("Question 2"), or 0.
export function questionNumber(passage) {
  const n = Number(passage?.number);
  return Number.isInteger(n) && n > 0 ? n : 0;
}

// Every question of the episode goes to the tutor, numbered as on the page,
// so "question 2" means the second whichever passage is on screen (owner,
// 2026-10-18). Each with whether it has been answered, under the same rule
// as the passage on screen. An episode has about eight.
const PODCAST_QUESTIONS_MAX = 20;

function questionsOf(list) {
  if (!Array.isArray(list)) return [];
  const out = [];
  for (const q of list.slice(0, PODCAST_QUESTIONS_MAX)) {
    const number = questionNumber(q);
    const fr = textOf(q?.fr).slice(0, PODCAST_PASSAGE_MAX);
    if (!number || !fr) continue;
    const answered = !!q.answered;
    const typed = answered ? textOf(q.typed).slice(0, PODCAST_PASSAGE_MAX) : "";
    out.push({
      number,
      fr,
      kind: q.kind === "translate" ? "translate" : "gist",
      answered,
      ...(typed ? { typed } : null),
      ...(answered && PODCAST_VERDICTS.has(q.verdict) ? { verdict: q.verdict } : null),
    });
  }
  return out;
}

/**
 * The episode as sent in the request's `context.podcast`, or null when there
 * is nothing to send. What the student typed goes only once the passage has
 * been answered: a draft half-typed in the box is theirs, and a tutor that
 * corrected it would be answering the question for them.
 */
export function podcastContext(podcast) {
  if (!podcast || typeof podcast !== "object") return null;
  const ep = podcast.episode && typeof podcast.episode === "object" ? podcast.episode : {};
  const p = podcast.passage && typeof podcast.passage === "object" ? podcast.passage : null;
  const fr = p ? textOf(p.fr).slice(0, PODCAST_PASSAGE_MAX) : "";
  const answered = !!p?.answered;
  const typed = answered ? textOf(p.typed).slice(0, PODCAST_PASSAGE_MAX) : "";
  const out = {
    title: textOf(ep.title).slice(0, 200),
    date: textOf(ep.date).slice(0, 200),
    show: textOf(ep.show).slice(0, 200),
    passage: fr
      ? {
          ...(questionNumber(p) ? { number: questionNumber(p) } : null),
          fr,
          kind: p.kind === "translate" ? "translate" : "gist",
          answered,
          ...(typed ? { typed } : null),
          ...(answered && PODCAST_VERDICTS.has(p.verdict) ? { verdict: p.verdict } : null),
        }
      : null,
    questions: questionsOf(podcast.questions),
    transcript: textOf(podcast.transcript).slice(0, PODCAST_TRANSCRIPT_MAX),
  };
  return out.title || out.show || out.passage || out.transcript ? out : null;
}

// ── An exercise instead of a card (Spanish, 2026-10-26) ───────────────────
// On the Spanish module's Exercises there is no card on screen either. What
// the tutor is told instead is the exercise being worked on, from the lesson's
// exercise sheet: its instruction and every item, numbered as on the page,
// with the key's answer and whether it has been answered. The exercises page
// hands it up as
//   { key, lesson, number, title, instruction, english, example,
//     items: [{ number, prompt, answer, answered, typed, verdict, correct }],
//     focus, last, text }
// (focus: the item with the cursor; last: the one answered last; text: the
// lesson's text, when the exercise is about it) and FlashcardApp passes it to
// the tutor as `exercise`. As with a card, an item's answer is not given away
// before it has been answered (api/chat.js, "An exercise"). The server clips
// to the same limits, which leave room: the longest exercise has 41 items,
// the longest lesson text 1,536 characters (measured 2026-10-26).
const EXERCISE_TEXT_MAX = 800;
const EXERCISE_ITEMS_MAX = 60;
const EXERCISE_LESSON_TEXT_MAX = 4000;
const EXERCISE_VERDICTS = new Set(["right", "almost", "wrong"]);

const exerciseItems = (exercise) => (Array.isArray(exercise?.items) ? exercise.items : []);

/** The item with the cursor, or null. */
export function exerciseFocus(exercise) {
  const n = questionNumber({ number: exercise?.focus });
  return (n && exerciseItems(exercise).find((it) => questionNumber(it) === n)) || null;
}

/** The exercise as the panel's header names it: its item with the cursor, or its title. */
export function exerciseLabel(exercise) {
  const n = questionNumber(exercise);
  const name = n ? `Ejercicio ${n}` : "Ejercicio";
  const item = exerciseFocus(exercise);
  if (item) return `${name}, ${questionNumber(item)}: ${textOf(item.prompt)}`;
  return textOf(exercise?.title) ? `${name} · ${textOf(exercise.title)}` : name;
}

/**
 * What a question asked on Exercises was about, kept on the turn as its
 * `about` (the server clips it to 200 characters): the exercise and the start
 * of the item with the cursor.
 */
export function exerciseAbout(exercise) {
  const n = questionNumber(exercise);
  const title = textOf(exercise?.title);
  const name = `${n ? `Ejercicio ${n}` : "An exercise"}${title ? ` (${title})` : ""}`;
  const item = exerciseFocus(exercise);
  if (!item) return name;
  const p = textOf(item.prompt);
  const head = p.length > 110 ? `${p.slice(0, 109).trimEnd()}…` : p;
  return `${name}, number ${questionNumber(item)}: « ${head} »`;
}

/**
 * The exercise as sent in the request's `context.exercise`, or null when
 * there is nothing to send. What the student typed goes only once an item
 * has been answered, as on Podcasts: a draft still in the box is theirs.
 */
export function exerciseContext(exercise) {
  if (!exercise || typeof exercise !== "object") return null;
  const clip = (v) => textOf(v).slice(0, EXERCISE_TEXT_MAX);
  const items = [];
  for (const it of exerciseItems(exercise).slice(0, EXERCISE_ITEMS_MAX)) {
    const number = questionNumber(it);
    const prompt = clip(it?.prompt);
    if (!number || !prompt) continue;
    const answered = !!it.answered;
    const typed = answered ? clip(it.typed) : "";
    const verdict = answered && EXERCISE_VERDICTS.has(it.verdict) ? it.verdict : null;
    const correct = verdict && verdict !== "right" ? clip(it.correct) : "";
    items.push({
      number,
      prompt,
      answer: clip(it.answer),
      answered,
      ...(typed ? { typed } : null),
      ...(verdict ? { verdict } : null),
      ...(correct ? { correct } : null),
    });
  }
  if (!items.length) return null;
  const has = (n) => n > 0 && items.some((it) => it.number === n);
  const focus = questionNumber({ number: exercise.focus });
  const last = questionNumber({ number: exercise.last });
  const example = clip(exercise.example);
  const text = textOf(exercise.text).slice(0, EXERCISE_LESSON_TEXT_MAX);
  return {
    lesson: textOf(exercise.lesson).slice(0, 200),
    number: questionNumber(exercise),
    title: textOf(exercise.title).slice(0, 200),
    instruction: clip(exercise.instruction),
    english: clip(exercise.english),
    ...(example ? { example } : null),
    items,
    ...(has(focus) ? { focus } : null),
    ...(has(last) ? { last } : null),
    ...(text ? { text } : null),
  };
}

/**
 * Assemble everything the tutor endpoint is given about the learner's deck.
 * Returns undefined when there is nothing worth sending, so the request body
 * stays clean rather than carrying three empty arrays.
 *
 * @param {object} opts
 * @param {string} opts.question          what the learner typed
 * @param {string} [opts.previousQuestion] their question before this one, for
 *   follow-ups with no content words of their own ("and the feminine?")
 * @param {Array}  opts.cards             shaped deck rows
 * @param {object} [opts.currentCard]     the card on screen, with the study
 *   view's live state: `answered`, and after a typed answer `typed` and `result`
 * @param {object} [opts.podcast]         on Podcasts, the episode on screen and
 *   the passage being answered (see podcastContext). Sent as `podcast`.
 * @param {object} [opts.exercise]        on the Spanish Exercises, the exercise
 *   being worked on (see exerciseContext). Sent as `exercise`.
 * @param {string} [opts.course]          "es" in the Spanish module
 */
export function buildTutorContext({ question, previousQuestion, cards, currentCard, podcast, exercise, course = "fr" }) {
  const ctx = {};

  if (currentCard?.f) {
    ctx.currentCard = {
      prompt: cardPrompt(currentCard),
      answer: cardAnswer(currentCard),
      // The card as the deck stores it, so "change that card" names a card
      // the tutor can edit (edit_flashcard goes by the stored French).
      front: String(currentCard.f).slice(0, 200),
      back: String(currentCard.b ?? "").slice(0, 200),
      // Until the answer has been shown, the tutor must not be the thing that
      // shows it: a recall FSRS records after the tutor said the word is a
      // recall that never happened.
      answered: !!currentCard.answered,
      // What happened THIS time, from the study view — not from the row. The
      // row's last_answer_correct is the previous session's result, and
      // reading it as "they just got this wrong" told the tutor that about
      // every lapse card before the student had answered it.
      ...(currentCard.result ? { result: currentCard.result } : null),
      ...(currentCard.typed ? { typed: String(currentCard.typed).slice(0, 200) } : null),
      // The way round it is being asked now: missing "apple → ?" last time
      // says nothing about "la pomme → ?".
      missedLastTime: sideOf(currentCard, currentCard.shownDir).last_answer_correct === false,
    };
  }

  // Only ever one of the two: there is no card on screen on Podcasts. A card,
  // if both came, wins, as the thing the study view is asking right now.
  const pod = currentCard?.f ? null : podcastContext(podcast);
  if (pod) ctx.podcast = pod;
  // Nor on Exercises, which is Spanish and so never shows an episode either.
  const ex = currentCard?.f || pod ? null : exerciseContext(exercise);
  if (ex) ctx.exercise = ex;

  let related = findRelatedCards(question, cards, 8, course);
  if (!related.length && previousQuestion) related = findRelatedCards(previousQuestion, cards, 8, course);
  // "What's the French for a hill?" matches the card being asked, and the
  // related list would hand over its answer beside the instruction not to.
  if (currentCard?.f && !currentCard.answered) {
    related = related.filter((c) => c.front !== currentCard.f);
  }
  if (related.length) ctx.relatedCards = related;

  const misses = relevantMisses({ question, currentCard, cards, course });
  if (misses.length) ctx.recentMisses = misses;

  return Object.keys(ctx).length ? ctx : undefined;
}
