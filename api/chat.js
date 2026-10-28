// Vercel serverless function: POST /api/chat
//
// A French tutor chat. The user asks about a word, phrase, or grammar
// point; Claude explains it and — when there's something worth drilling —
// proposes flashcards via a tool call. The client renders those proposals
// as "Add to deck" chips; nothing is written to user_cards here. Asked to
// change a card the student already has, it calls edit_flashcard, and the
// client makes the change through the card editor's own endpoint. Asked to
// remove one, it calls remove_flashcard, and the client removes it as the
// card editor's Remove does (owner, 2026-10-28: "the tutor should be able to
// remove cards").
//
// Keeping the write on the client matters: user_cards is RLS-protected
// (migration_003), so the insert runs as the signed-in user with their own
// anon-key session. This endpoint never touches the service role key and
// so can't write to another user's deck even if the JWT check were wrong.
//
// The Spanish module has a tutor too (owner, 2026-10-26: "tutor needs to be
// added to spanish module"). A request with `course: "es"` gets a Spanish
// tutor: its own prompt (Mexican Spanish, a deck of words and phrases only),
// its own tools, and on Exercises the exercise on screen in place of a card.
//
// Request body (JSON):
//   {
//     course?: "es",                               // the Spanish module; French when absent
//     messages: [
//       { role: "user", content: "...", about?: "..." },  // about: what was on screen when asked
//         // a user turn may also carry image?: { media_type, data } (a pasted
//         // picture, base64) or imageDropped?: true (one too old to resend)
//       { role: "assistant", content: "...", cards?: [{ front, back }],
//         edits?: [{ was, now, status, removed? }] }, // cards it changed or removed: "front — back" each
//     ],
//     context?: {
//       currentCard?: {                           // the card on screen
//         prompt, answer,                         // as the card shows them
//         front?, back?,                          // as the deck stores it, to edit it by
//         answered,                               // has the answer been shown yet
//         result?, typed?,                        // this attempt, after a typed answer
//         missedLastTime,
//       },
//       podcast?: {                               // on Podcasts, instead of a card
//         title, date, show,                      // the RFI episode
//         passage: {                              // the passage being answered, or null
//           number?,                              // "Question 2" on the page
//           fr, kind: "gist" | "translate",
//           answered,                             // has it been checked yet
//           typed?, verdict?,                     // once answered: "got" | "partly" | "missed"
//         } | null,
//         questions?: [{ number, fr, kind, answered, typed?, verdict? }],
//                                                 // every passage, numbered as on the page
//         transcript,                             // RFI's transcript, clipped
//       },
//       exercise?: {                              // Spanish, on Exercises, instead of a card
//         lesson, number, title,                  // "Ejercicio 2" of the lesson, as on the page
//         instruction, english, example?,
//         items: [{ number, prompt, answer,       // numbered as on the page; the key's answer
//                   answered, typed?, verdict?,   // "right" | "almost" | "wrong"
//                   correct? }],                  // the "Correct:" line under a miss
//         focus?, last?,                          // the item with the cursor, the one answered last
//         text?,                                  // the lesson's text, when the exercise is about it
//       },
//       relatedCards?: [{ front, back }],         // deck matches for the question
//       recentMisses?: [{ front, back }],         // misses that bear on the question
//     }
//   }
//
// Response: an SSE stream of JSON events, one per `data:` line —
//   { type: "text",  delta: "..." }              prose, as it is generated
//   { type: "cards", cards: [...] }              card proposals, once complete
//   { type: "edits", edits: [...] }              changes to cards they have, and removals
//   { type: "done" }                            the answer is complete
//   { type: "error", error: "...", code?: "..." }
// A stream that ends without "done" was cut off — the function ran out of
// time, or the connection dropped — and the client says so.
// Failures BEFORE the stream opens — not signed in, no key, empty body —
// answer in JSON with a 4xx status, so the client's key prompt still fires on
// a 402. A key Anthropic rejects can only be discovered once generation has
// started, so that one arrives as an error EVENT carrying the same code.
//
// Who pays: the caller's own Anthropic key, sent in an x-anthropic-key
// header and never stored server-side. Without one this answers 402. The
// deploy owner (ADMIN_EMAIL) falls back to the server's ANTHROPIC_API_KEY.
// See api/_lib/anthropicKey.js.
//
// Environment variables:
//   SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY — to VERIFY the caller's token
//   ADMIN_EMAIL                             — the one account that may fall back
//   ANTHROPIC_API_KEY                       — optional, owner's requests only

import Anthropic from "@anthropic-ai/sdk";
import { requireUser } from "./_lib/auth.js";
import { requireAnthropicKey } from "./_lib/anthropicKey.js";
import { allowIphoneApp } from "./_lib/cors.js";

// The answer streams, so the wall-clock limit is no longer a cliff — but the
// function still needs room. Vercel's default is 10s.
// Room for three pasted pictures (MAX_IMAGES) with the thread; Vercel itself
// stops at 4.5 MB.
export const config = { api: { bodyParser: { sizeLimit: "4.5mb" } }, maxDuration: 60 };

// Sonnet rather than Opus. Answering "what's the difference between amener and
// apporter" is not a hard inference problem, and this endpoint is on the
// latency path — you are waiting at the panel for it.
const MODEL = "claude-sonnet-5";

// Effort is a CEILING on how much reasoning the model may spend; adaptive
// thinking then varies underneath it, per question. A lookup costs almost
// nothing while a nuance question still gets more thought than the lookup did
// — compute matched to the question, decided by something that has read the
// question rather than by a router guessing from its surface form.
//
// This used to be absent, which is not the same as off: with no `thinking` and
// no `output_config`, Opus 5 runs adaptive thinking at effort HIGH, so every
// vocabulary lookup was getting a maximum-depth reasoning pass. That was the
// bulk of the latency, and it read as "the tutor is slow".
const EFFORT = "low";

// Cost guardrails. The client sends the whole visible thread on every turn,
// so without a cap a long session grows the bill quadratically.
//
// Past the cap the oldest turns go TRIM_STEP at a time rather than one per
// turn. The conversation is cached (see the breakpoint in the handler), and
// a window sliding by one message changes the start of the prefix on every
// request, which would miss the cache every time.
const MAX_TURNS = 20;
const TRIM_STEP = 10;
const MAX_CHARS_PER_MESSAGE = 4000;
const MAX_CONTEXT_CARDS = 12;
// Pasted pictures (owner, 2026-10-18). The client shrinks each to about
// 1,568 pixels and under a million base64 characters (src/lib/pastedImage.js)
// and sends only the latest three; the same limits hold here, so a request
// stays under the 4.5 MB Vercel takes. An older picture is replaced by a
// note that there was one.
const MAX_IMAGES = 3;
const IMAGE_MAX_CHARS = 1_200_000;
const IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/gif", "image/webp"]);

// Kept deliberately short and free of a per-answer checklist. The previous
// version demanded register, gender, an example sentence and a false-friend
// warning on EVERY answer, which is why a two-word lookup came back as five
// bullets: a checklist cannot be proportional to the question.
//
// This text is the cached prefix — it must not carry anything that varies per
// request. Deck context goes in the user turn instead; see buildContextBlock.
const SYSTEM_PROMPT = `You are helping an English-speaking learner of French. They keep a spaced-repetition flashcard deck and are asking you about something they've hit.

Answer the question that was asked, at the length it deserves. A word lookup is a line. A question about a distinction between two words is a short paragraph. Nobody wants a lesson they didn't ask for.

Add register, gender, an example sentence, or a false-friend warning ONLY when it changes the answer — not as a matter of routine. If the learner's question rests on a wrong assumption, say so first.

Write plain prose. No bullet lists, headings or tables — they are not rendered and the symbols show. Italics or bold on a French word are fine, sparingly. French in French, everything else in English.

## Context you may be given

The latest user turn may carry a "[Context]" block: the card on their screen, cards already in their deck that relate to the question, and recent misses that bear on it. Use it — refer to their actual cards, tell them when they already have something, point out when your answer contradicts a card they own. Never mention the block itself or that you were given it.

Earlier turns may carry bracketed notes — what was on their screen when they asked (a card, or a podcast passage), the cards you proposed, the cards you changed. They are for your reference. Never write notes like them yourself.

They may paste a picture with a question, usually a screenshot of this app or of their notes. It shows what they are asking about, so read it before answering. A card or passage in it that they haven't answered yet is under the same rules as one on their screen.

## The card on screen

They study by recalling the answer before it is shown, and the app records each attempt to decide when they see the card again. So:
- If the card has NOT been answered yet, never state the expected answer, or a form of it, or a word that gives it away — not even if they ask outright. Help them recall it instead: the gender, a related word, a context it turns up in, the first letter. If they want the answer itself, tell them to reveal it on the card.
- If they typed an answer, you are told what they typed and how it was marked. When they ask why, compare what they wrote with the expected answer — that is the question.

## A podcast episode

Instead of a card, the [Context] block may name an episode of an RFI podcast for learners that they are working through, with RFI's transcript of it, and the passage on their screen. Each passage asks them either to give the idea in English or to translate it into English, and their answer is then marked.
- If the passage has NOT been answered yet, do not translate it, summarise it or give its gist — not even if they ask outright, because that is the exercise. Help with a single word, a grammar point or how something is said instead, and tell them that checking their answer shows a good one.
- Once it has been answered, you may explain the passage in full and say what their answer missed.
- When they ask about a word or phrase from the episode, quote the transcript where it comes up.
- The questions are numbered on their screen (Question 1, Question 2, …) and the [Context] block lists them all. "Question 2" or "number 2" means that one, even when another passage is on their screen, and whether that question has been answered decides what you may say about it, as above.

## Proposing flashcards

Call propose_flashcards when the exchange contains something worth drilling.
- Explain in text FIRST, then call the tool. Never call it without explaining.
- Every card is a thing to produce: the learner sees one side and types the other. Never a rule to recite — a front like "bien que takes the subjunctive" has nothing to type.
- vocab and expr cards: the front is French, the back is English. Bare vocabulary carries a gendered article ("une colline"), adjectives are tagged ("ennuyeux (adj)"), verbs stay in the infinitive ("décharger").
- gram cards teach a grammar point through one example to produce. The front says what to do with " → " and the back is the FRENCH answer: "venir (subjonctif) → que je" / "vienne", "Il pleut. → bien que" / "bien qu'il pleuve". The arrow is required; it is how the app knows to expect French.
- A vocab or expr back is a short gloss, not a sentence — "a hill", "to unload / to discharge". Use " / " between near-synonyms.
- One card per thing to learn. Propose 1-4; one good card beats four redundant ones. A phrase they asked about is one card — don't also split out its words.
- Never propose a card whose front teaches two different words (les frais "costs" and frais "fresh" are two cards, not one) — there'd be no single right answer to type.
- category: "vocab" single words, "expr" multi-word expressions and idioms, "gram" an arrow drill as above. Pronunciation can't be typed, so it is explained, never carded.
- note: one line on why this card earns its place. Shown to the learner, not stored.
- If a card in their deck already covers it, say so instead of proposing a duplicate.
- If they're just chatting, or nothing in the answer is drillable, don't call the tool at all.

## Changing or removing a card they already have

You can change the cards in their deck, and remove them. When they ask you to change one — "take 'just as' off that card", "make it 'to unload'", "fix the spelling" — call edit_flashcard. When they ask you to remove one — "remove it", "take that card out", "I don't want this card" — call remove_flashcard: the card leaves their study, and the answers they gave on it are kept. Either is made as soon as you call it and they can undo it, so never tell them to do it themselves, and don't ask them to confirm what they just asked for.
- Say in one line what you are changing or removing, then call the tool.
- front is the card's French side exactly as their deck has it: the card on screen, a related card, a recent miss, or one they added from this chat.
- new_back and new_front are written whole — the complete new side, keeping everything they didn't ask to change exactly as it was. Leave out the side that stays the same.
- Only when they ask. If you notice a card of theirs is wrong, say so and offer to change it; if one seems out of place, say why and offer to remove it.
- If you can't tell which card they mean, ask which.`;

const EDIT_TOOL = {
  name: "edit_flashcard",
  description:
    "Change a card already in the learner's deck, when they ask you to. The change is made at once, and they can undo it.",
  input_schema: {
    type: "object",
    properties: {
      front: {
        type: "string",
        description: "The card's French side exactly as it is in their deck now.",
      },
      new_front: {
        type: "string",
        description: "The whole new French side. Leave out to keep it.",
      },
      new_back: {
        type: "string",
        description:
          "The whole new English side (on a grammar drill, the French answer). Leave out to keep it.",
      },
    },
    required: ["front"],
  },
};

const REMOVE_TOOL = {
  name: "remove_flashcard",
  description:
    "Take a card out of the learner's deck, when they ask you to. It leaves their study at once, the answers they gave on it are kept, and they can undo it.",
  input_schema: {
    type: "object",
    properties: {
      front: {
        type: "string",
        description: "The card's French side exactly as it is in their deck now.",
      },
    },
    required: ["front"],
  },
};

const PROPOSE_TOOL = {
  name: "propose_flashcards",
  description:
    "Propose flashcards for the learner to add to their French deck. Call this only when the conversation contains something worth drilling, and only after explaining it in text.",
  input_schema: {
    type: "object",
    properties: {
      cards: {
        type: "array",
        description: "The proposed cards, 1-4 of them.",
        items: {
          type: "object",
          properties: {
            front: {
              type: "string",
              description:
                "What the learner is shown: 'une colline', 'ennuyeux (adj)', or for gram a drill with ' → ' like 'venir (subjonctif) → que je'.",
            },
            back: {
              type: "string",
              description:
                "What the learner types: the English gloss ('a hill', 'boring / annoying'), or for gram the French answer ('vienne').",
            },
            category: {
              type: "string",
              enum: ["vocab", "expr", "gram"],
              description: "Which part of the deck this belongs to.",
            },
            note: {
              type: "string",
              description:
                "One line on why this card earns its place. Shown to the learner, not stored.",
            },
          },
          required: ["front", "back", "category"],
        },
      },
    },
    required: ["cards"],
  },
};

// The Spanish module's tutor (2026-10-26). The course is Latin American
// Spanish with Mexican settings and words, ustedes and never vosotros, the
// preterite as the main past (memory: the Spanish course), and its marking
// counts an accent only where it changes a verb's tense (owner, 2026-10-26,
// lib/spanishAccents.js), which the tutor is told so that it never calls a
// forgiven accent a mistake. Its deck is words and phrases only and
// the grammar is on Exercises (owner, 2026-10-26), so it proposes no grammar
// drills. Written out whole rather than built from the French: each prompt
// is its own cached prefix, and the French one stays exactly as it was.
const SPANISH_PROMPT = `You are helping an English-speaking learner of Spanish: the Spanish of Mexico and Latin America. They keep a spaced-repetition flashcard deck of Spanish words and phrases, they work through the written exercises of their lesson sheets, and they are asking you about something they've hit.

Answer the question that was asked, at the length it deserves. A word lookup is a line. A question about a distinction between two words is a short paragraph. Nobody wants a lesson they didn't ask for.

Add register, gender, an example sentence, or a false-friend warning ONLY when it changes the answer — not as a matter of routine. If the learner's question rests on a wrong assumption, say so first.

Teach the Spanish of Mexico: ustedes for "you" to several people, never vosotros; the preterite for a finished past action; Mexican words where they differ ("el departamento", "la recámara", "el carro"). Say how Spain differs only when it matters to the question.

Always write Spanish with its accents, its ñ, and its ¿ and ¡. When the app marks their answers, it forgives a missing accent or ñ unless the accent changes a verb's tense or person: "hablo" for "habló" is marked wrong, "esta" for "está" is not. So never call a forgiven accent a mistake; you may show the spelling in passing.

Write plain prose. No bullet lists, headings or tables — they are not rendered and the symbols show. Italics or bold on a Spanish word are fine, sparingly. Spanish in Spanish, everything else in English.

## Context you may be given

The latest user turn may carry a "[Context]" block: the card or the exercise on their screen, cards already in their deck that relate to the question, and recent misses that bear on it. Use it — refer to their actual cards and exercises, tell them when they already have something, point out when your answer contradicts a card they own. Never mention the block itself or that you were given it.

Earlier turns may carry bracketed notes — what was on their screen when they asked (a card, or an exercise), the cards you proposed, the cards you changed. They are for your reference. Never write notes like them yourself.

They may paste a picture with a question, usually a screenshot of this app or of their notes. It shows what they are asking about, so read it before answering. A card or an exercise in it that they haven't answered yet is under the same rules as one on their screen.

## The card on screen

They study by recalling the answer before it is shown, and the app records each attempt to decide when they see the card again. So:
- If the card has NOT been answered yet, never state the expected answer, or a form of it, or a word that gives it away — not even if they ask outright. Help them recall it instead: the gender, a related word, a context it turns up in, the first letter. If they want the answer itself, tell them to reveal it on the card.
- If they typed an answer, you are told what they typed and how it was marked. When they ask why, compare what they wrote with the expected answer — that is the question.

## An exercise

Instead of a card, the [Context] block may name the exercise on their screen, from their lesson's exercise sheet: its instruction, and its items, numbered as on their screen, each with its expected answer and whether they have answered it. An answer is marked right, almost right (right but for one small slip: an accent that changes a verb's tense or person, or one wrong letter in an otherwise right word) or wrong. In a fill-in-the-blank item, what they typed in each blank is in square brackets.
- If an item has NOT been answered yet, never state its answer, or a form of it, or a word that gives it away — not even if they ask outright, because finding it is the exercise. Help them work it out instead: the rule the exercise practises, the person and tense needed, a verb like it, the first letter. If they want the answer itself, tell them that checking an answer shows the correct one.
- Once an item has been answered, you may explain it in full: compare what they typed with the correct answer and say what the difference is.
- "Number 3" means item 3 of this exercise. "This one" with no number means the item the cursor is on, unless they are plainly asking about the answer just marked, which is the item answered last.

## Proposing flashcards

Call propose_flashcards when the exchange contains something worth drilling.
- Explain in text FIRST, then call the tool. Never call it without explaining.
- Their Spanish deck is words and phrases only; grammar is practised in the exercises. So every card is a word or a phrase to produce, never a grammar drill or a rule to recite. A verb form worth knowing goes in a short phrase that uses it ("Fui al mercado" / "I went to the market"), never alone.
- The front is Spanish, the back is English. Nouns carry their article ("una colina", "el departamento"). An adjective that changes for a woman is in the masculine, with "(masc.)" in the English ("alto" / "tall (masc.)"). Verbs stay in the infinitive ("subir").
- The back is a short gloss, not a sentence — "a hill", "to go up / to climb". Use " / " between near-synonyms: the card shows only the first, and any of them typed is right.
- One card per thing to learn. Propose 1-4; one good card beats four redundant ones. A phrase they asked about is one card — don't also split out its words.
- Never propose a card whose front teaches two different words — there'd be no single right answer to type.
- category: "vocab" single words, "expr" multi-word expressions, phrases and idioms. Pronunciation can't be typed, so it is explained, never carded.
- note: one line on why this card earns its place. Shown to the learner, not stored.
- If a card in their deck already covers it, say so instead of proposing a duplicate.
- If they're just chatting, or nothing in the answer is drillable, don't call the tool at all.

## Changing or removing a card they already have

You can change the cards in their deck, and remove them. When they ask you to change one — "take 'to climb' off that card", "make it 'to go up'", "fix the accent" — call edit_flashcard. When they ask you to remove one — "remove it", "take that card out", "I don't want this card" — call remove_flashcard: the card leaves their study, and the answers they gave on it are kept. Either is made as soon as you call it and they can undo it, so never tell them to do it themselves, and don't ask them to confirm what they just asked for.
- Say in one line what you are changing or removing, then call the tool.
- front is the card's Spanish side exactly as their deck has it: the card on screen, a related card, a recent miss, or one they added from this chat.
- new_back and new_front are written whole — the complete new side, keeping everything they didn't ask to change exactly as it was. Leave out the side that stays the same.
- Only when they ask. If you notice a card of theirs is wrong, say so and offer to change it; if one seems out of place, say why and offer to remove it.
- If you can't tell which card they mean, ask which.`;

const SPANISH_EDIT_TOOL = {
  name: "edit_flashcard",
  description:
    "Change a card already in the learner's deck, when they ask you to. The change is made at once, and they can undo it.",
  input_schema: {
    type: "object",
    properties: {
      front: {
        type: "string",
        description: "The card's Spanish side exactly as it is in their deck now.",
      },
      new_front: {
        type: "string",
        description: "The whole new Spanish side. Leave out to keep it.",
      },
      new_back: {
        type: "string",
        description: "The whole new English side. Leave out to keep it.",
      },
    },
    required: ["front"],
  },
};

const SPANISH_REMOVE_TOOL = {
  name: "remove_flashcard",
  description:
    "Take a card out of the learner's deck, when they ask you to. It leaves their study at once, the answers they gave on it are kept, and they can undo it.",
  input_schema: {
    type: "object",
    properties: {
      front: {
        type: "string",
        description: "The card's Spanish side exactly as it is in their deck now.",
      },
    },
    required: ["front"],
  },
};

const SPANISH_PROPOSE_TOOL = {
  name: "propose_flashcards",
  description:
    "Propose flashcards for the learner to add to their Spanish deck. Call this only when the conversation contains something worth drilling, and only after explaining it in text.",
  input_schema: {
    type: "object",
    properties: {
      cards: {
        type: "array",
        description: "The proposed cards, 1-4 of them.",
        items: {
          type: "object",
          properties: {
            front: {
              type: "string",
              description: "What the learner is shown, in Spanish: 'una colina', 'alto', 'estar de buen humor'.",
            },
            back: {
              type: "string",
              description: "What the learner types, in English: 'a hill', 'tall (masc.)', 'to be in a good mood'.",
            },
            category: {
              type: "string",
              enum: ["vocab", "expr"],
              description: "Which part of the deck this belongs to.",
            },
            note: {
              type: "string",
              description:
                "One line on why this card earns its place. Shown to the learner, not stored.",
            },
          },
          required: ["front", "back", "category"],
        },
      },
    },
    required: ["cards"],
  },
};

// Which tutor a request gets, by its course.
const TUTORS = {
  fr: { system: SYSTEM_PROMPT, tools: [PROPOSE_TOOL, EDIT_TOOL, REMOVE_TOOL], categories: ["vocab", "expr", "gram"] },
  es: { system: SPANISH_PROMPT, tools: [SPANISH_PROPOSE_TOOL, SPANISH_EDIT_TOOL, SPANISH_REMOVE_TOOL], categories: ["vocab", "expr"] },
};
export const tutorFor = (body) => (body?.course === "es" ? TUTORS.es : TUTORS.fr);

// Trim the thread to something bounded before it reaches the API. Keeps the
// most recent turns — the front of a long conversation matters least for a
// lookup, and dropping it keeps latency and cost flat as the session runs on.
//
// Each earlier turn also gets back what grounded it. Deck context rides only
// on the LATEST question and is never stored, so a follow-up used to arrive
// with nothing to say what the earlier "why?" was about — and once the student
// had moved on, "another example?" was answered about the new card. A user
// turn carries the prompt of the card that was on screen when it was asked,
// and an assistant turn the cards it proposed, so "change the second card"
// means something, and the cards it changed, so "put it back" does. Both are
// fixed when the turn is written, so the history stays byte-identical from
// turn to turn and keeps its cache — except an edit the student undoes later,
// which changes that one note once.
function sanitizeMessages(raw) {
  if (!Array.isArray(raw)) return [];
  const cleaned = [];
  for (const m of raw) {
    const role = m?.role === "assistant" ? "assistant" : "user";
    const content = typeof m?.content === "string" ? m.content.trim() : "";
    const image = role === "user" ? imageOf(m.image) : null;
    const imageDropped = role === "user" && !image && (m.imageDropped === true || !!m.image);
    // A picture with nothing typed is a question in itself.
    if (!content && !image && !imageDropped) continue;
    const about = role === "user" && typeof m.about === "string" ? m.about.trim().slice(0, 200) : "";
    const proposed = role === "assistant" ? cardList(m.cards).slice(0, 4) : [];
    const changed = role === "assistant" ? editList(m.edits) : [];
    cleaned.push({
      role,
      content: content.slice(0, MAX_CHARS_PER_MESSAGE),
      about,
      proposed,
      changed,
      image,
      imageDropped,
    });
  }
  const over = cleaned.length - MAX_TURNS;
  const trimmed = over > 0 ? cleaned.slice(Math.ceil(over / TRIM_STEP) * TRIM_STEP) : cleaned;
  // The Messages API requires the first message to be from the user.
  while (trimmed.length && trimmed[0].role !== "user") trimmed.shift();
  // The newest pictures go; any older one becomes a note that it was there.
  let pictures = 0;
  for (let i = trimmed.length - 1; i >= 0; i--) {
    if (!trimmed[i].image) continue;
    if (++pictures > MAX_IMAGES) trimmed[i] = { ...trimmed[i], image: null, imageDropped: true };
  }
  return trimmed;
}

// A pasted picture as the client sends it, or null when it isn't one.
function imageOf(raw) {
  if (!raw || typeof raw !== "object") return null;
  const type = typeof raw.media_type === "string" ? raw.media_type : "";
  const data = typeof raw.data === "string" ? raw.data : "";
  if (!IMAGE_TYPES.has(type) || !data || data.length > IMAGE_MAX_CHARS) return null;
  if (!/^[A-Za-z0-9+/]+={0,2}$/.test(data)) return null;
  return { type: "image", source: { type: "base64", media_type: type, data } };
}

// The text a turn is sent as. The latest user turn skips its note: the
// [Context] block describes the same card in full.
//
// "this", not "this card": on Podcasts the note is the episode and the start
// of the passage (owner, 2026-10-09), and calling that a card would mislead.
function renderTurn(m, isLatest) {
  if (m.role === "user") {
    const said = m.content || (m.image ? "[They sent this picture with nothing typed.]" : "");
    const text = m.imageDropped
      ? `[They pasted a picture here; it is no longer attached.]${said ? `\n${said}` : ""}`
      : said;
    return m.about && !isLatest
      ? `[Asked while this was on screen: "${m.about}"]\n${text}`
      : text;
  }
  const notes = [];
  if (m.proposed.length) notes.push(`[Cards you proposed: ${m.proposed.join("; ")}]`);
  if (m.changed.length) notes.push(`[Cards you changed: ${m.changed.join("; ")}]`);
  return notes.length ? `${m.content}\n\n${notes.join("\n")}` : m.content;
}

const EDIT_OUTCOME = {
  undone: " (they undid this)",
  failed: " (this could not be made; the card is unchanged)",
};

// An edit as the client reports it back: what the card was, what it became
// (or that it was removed), and whether it stuck.
function editList(raw) {
  if (!Array.isArray(raw)) return [];
  return raw
    .slice(0, 4)
    .map((e) => {
      const was = clip(e?.was);
      const now = e?.removed ? "removed from their deck" : clip(e?.now);
      if (!was && !now) return "";
      return `${was || "?"} → ${now || "?"}${EDIT_OUTCOME[e?.status] || ""}`;
    })
    .filter(Boolean);
}

function cardLine(c) {
  const front = String(c?.front ?? "").trim().slice(0, 200);
  const back = String(c?.back ?? "").trim().slice(0, 200);
  if (!front) return "";
  return back ? `${front} — ${back}` : front;
}

function cardList(raw) {
  if (!Array.isArray(raw)) return [];
  return raw.map(cardLine).filter(Boolean).slice(0, MAX_CONTEXT_CARDS);
}

// Render the deck context as a block prefixed to the learner's own question.
//
// It goes in the USER TURN, not appended to the system prompt. Caching is a
// prefix match, so per-request text in the system prompt would invalidate the
// cached prefix every single turn — which is what the previous version did,
// concatenating the deck onto the end of SYSTEM_PROMPT. Sonnet also does not
// accept mid-conversation system messages, so the user turn is the channel.
//
// Only the LAST user message is augmented, and the client never sees the
// augmented copy, so context is rebuilt fresh each turn and never piles up.
function buildContextBlock(ctx) {
  if (!ctx || typeof ctx !== "object") return "";
  const parts = [];

  const cur = ctx.currentCard;
  const line = cur && typeof cur === "object" ? currentCardLines(cur) : "";
  if (line) parts.push(line);

  const pod = ctx.podcast && typeof ctx.podcast === "object" ? podcastLines(ctx.podcast) : "";
  if (pod) parts.push(pod);

  const ex = ctx.exercise && typeof ctx.exercise === "object" ? exerciseLines(ctx.exercise) : "";
  if (ex) parts.push(ex);

  const related = cardList(ctx.relatedCards);
  if (related.length) {
    parts.push(`Cards already in their deck related to this:\n${related.join("\n")}`);
  }

  const misses = cardList(ctx.recentMisses);
  if (misses.length) {
    parts.push(`Cards they have recently got wrong:\n${misses.join("\n")}`);
  }

  if (!parts.length) return "";
  return `[Context]\n${parts.join("\n\n")}\n[/Context]`;
}

const clip = (v) => String(v ?? "").trim().slice(0, 200);

const RESULT_TEXT = {
  wrong: "was marked wrong",
  wrongArticle: "has the right word with the wrong article",
  // Spanish: "✗ The accent changes the tense" on the card.
  wrongAccent: "was marked wrong because an accent that changes the verb's tense is missing or misplaced",
  close: "was accepted as close enough",
  correct: "was marked correct",
};

// The card on screen, and where the student is with it. Whether it has been
// answered decides what the tutor may say (see "The card on screen" in the
// system prompt), so it is stated, never left to inference.
function currentCardLines(cur) {
  const prompt = clip(cur.prompt);
  const answer = clip(cur.answer);
  if (!prompt) return "";
  const lines = [`Card on screen: it shows "${prompt}"; the expected answer is "${answer}".`];
  const front = clip(cur.front);
  if (front) lines.push(`In their deck it is the card "${front}" — "${clip(cur.back)}".`);
  const typed = clip(cur.typed);
  if (!cur.answered) {
    lines.push("They have NOT answered it yet — do not reveal the expected answer.");
  } else if (cur.result === "revealed") {
    lines.push("They couldn't recall it and revealed the answer.");
  } else if (typed && RESULT_TEXT[cur.result]) {
    lines.push(`They typed "${typed}", which ${RESULT_TEXT[cur.result]}.`);
  } else {
    lines.push("The answer is showing.");
  }
  if (cur.missedLastTime) lines.push("They also missed it the last time it came up.");
  return lines.join("\n");
}

// The podcast episode on screen, on Podcasts (owner only, 2026-10-09). Like
// the card, whether the passage has been answered decides what the tutor may
// say (see "A podcast episode" in the system prompt), so it is stated.
//
// Its own clip limits: the shared clip() stops at 200 characters, which would
// cut a passage of four sentences in half and leave nothing of the transcript.
// A Journal en français facile transcript came to 9,000–9,700 characters on
// seven saved episode pages (measured roughly, 2026-10-09); 12,000 keeps one
// whole. It rides only on the latest question, so it is paid for once per
// question and never piles up in the history.
const PODCAST_TEXT_MAX = 200;
const PODCAST_PASSAGE_MAX = 800;
const PODCAST_TRANSCRIPT_MAX = 12000;
const clipTo = (v, n) => (typeof v === "string" ? v.trim().slice(0, n) : "");

const PASSAGE_TASK = {
  gist: "they are asked to give the idea of it in English",
  translate: "they are asked to translate it into English",
};
const VERDICT_TEXT = {
  got: "was marked as understood",
  partly: "was marked as partly right",
  missed: "was marked as missed",
};

function podcastLines(pod) {
  const title = clipTo(pod.title, PODCAST_TEXT_MAX);
  const show = clipTo(pod.show, PODCAST_TEXT_MAX);
  const date = clipTo(pod.date, PODCAST_TEXT_MAX);
  const transcript = clipTo(pod.transcript, PODCAST_TRANSCRIPT_MAX);
  const p = pod.passage && typeof pod.passage === "object" ? pod.passage : null;
  const fr = p ? clipTo(p.fr, PODCAST_PASSAGE_MAX) : "";
  const name = title || [show, date].filter(Boolean).join(", ");
  if (!name && !fr && !transcript) return "";

  const about = [show && show !== title ? show : "", date && date !== title ? date : ""].filter(Boolean).join(", ");
  const lines = [
    name
      ? `Podcast episode on screen: "${name}"${about ? ` (${about})` : ""}.`
      : "Podcast episode on screen.",
  ];
  if (fr) {
    const task = PASSAGE_TASK[p.kind] || PASSAGE_TASK.gist;
    const n = questionNo(p);
    lines.push(`The passage on their screen${n ? ` (Question ${n})` : ""}, where ${task}: "${fr}"`);
    const typed = clipTo(p.typed, PODCAST_PASSAGE_MAX);
    if (!p.answered) {
      lines.push("They have NOT answered it yet — do not translate or summarise it.");
    } else if (typed && VERDICT_TEXT[p.verdict]) {
      lines.push(`They answered "${typed}", which ${VERDICT_TEXT[p.verdict]}.`);
    } else {
      lines.push("They have answered it.");
    }
  }
  const list = questionLines(pod.questions);
  if (list) lines.push(`All the questions in this episode, numbered as on their screen:\n${list}`);
  if (transcript) lines.push(`The episode's transcript (RFI's own):\n${transcript}`);
  return lines.join("\n");
}

// Every question, numbered as on the page, so "question 2" can be answered
// whichever passage is on screen (owner, 2026-10-18). About eight an episode.
const PODCAST_QUESTIONS_MAX = 20;
const PASSAGE_KIND = { gist: "give the idea in English", translate: "translate into English" };
const questionNo = (q) => {
  const n = Number(q?.number);
  return Number.isInteger(n) && n > 0 && n <= 99 ? n : 0;
};

function questionLines(list) {
  if (!Array.isArray(list)) return "";
  const out = [];
  for (const q of list.slice(0, PODCAST_QUESTIONS_MAX)) {
    if (!q || typeof q !== "object") continue;
    const n = questionNo(q);
    const fr = clipTo(q.fr, PODCAST_PASSAGE_MAX);
    if (!n || !fr) continue;
    const kind = PASSAGE_KIND[q.kind] || PASSAGE_KIND.gist;
    const typed = q.answered ? clipTo(q.typed, PODCAST_PASSAGE_MAX) : "";
    const state = !q.answered
      ? "NOT answered yet — do not translate or summarise it"
      : typed && VERDICT_TEXT[q.verdict]
        ? `answered "${typed}", which ${VERDICT_TEXT[q.verdict]}`
        : "answered";
    out.push(`Question ${n} (${kind}; ${state}): "${fr}"`);
  }
  return out.join("\n");
}

// The exercise on screen, on the Spanish module's Exercises (2026-10-26). As
// with a card, whether each item has been answered decides what the tutor may
// say (see "An exercise" in the Spanish prompt), so it is stated item by item.
// The page sends the same limits (src/lib/deckContext.js). Measured on the
// exercise files (2026-10-26): the longest exercise has 41 items (Lesson 15's
// third), the longest item 308 characters, the longest lesson text 1,536.
const EXERCISE_TEXT_MAX = 800;
const EXERCISE_ITEMS_MAX = 60;
const EXERCISE_LESSON_TEXT_MAX = 4000;
const EXERCISE_VERDICT_TEXT = {
  right: "was marked right",
  // As api/_lib/exercises.js marks it: one small slip.
  almost: "was marked almost right (right but for one small slip: an accent that changes a verb's tense or person, or one wrong letter in an otherwise right word)",
  wrong: "was marked wrong",
};

function exerciseLines(ex) {
  const items = [];
  for (const it of Array.isArray(ex.items) ? ex.items.slice(0, EXERCISE_ITEMS_MAX) : []) {
    if (!it || typeof it !== "object") continue;
    const n = questionNo(it);
    const prompt = clipTo(it.prompt, EXERCISE_TEXT_MAX);
    if (!n || !prompt) continue;
    const answer = clipTo(it.answer, EXERCISE_TEXT_MAX);
    const typed = it.answered ? clipTo(it.typed, EXERCISE_TEXT_MAX) : "";
    const verdict = it.answered ? EXERCISE_VERDICT_TEXT[it.verdict] : "";
    const correct = clipTo(it.correct, EXERCISE_TEXT_MAX);
    if (!it.answered) {
      items.push(`${n}. "${prompt}" — NOT answered yet, so do not give its answer away. Its expected answer: "${answer}".`);
    } else if (typed && verdict) {
      const fix = it.verdict !== "right" && correct ? ` The correct answer: "${correct}".` : "";
      items.push(`${n}. "${prompt}" — they answered "${typed}", which ${verdict}.${fix}`);
    } else {
      items.push(`${n}. "${prompt}" — answered. Its expected answer: "${answer}".`);
    }
  }
  if (!items.length) return "";

  const lesson = clipTo(ex.lesson, PODCAST_TEXT_MAX);
  const title = clipTo(ex.title, PODCAST_TEXT_MAX);
  const number = questionNo(ex);
  const instruction = clipTo(ex.instruction, EXERCISE_TEXT_MAX);
  const english = clipTo(ex.english, EXERCISE_TEXT_MAX);
  const example = clipTo(ex.example, EXERCISE_TEXT_MAX);
  const name = [number ? `Ejercicio ${number}` : "An exercise", title ? `"${title}"` : ""].filter(Boolean).join(", ");
  const lines = [`Exercise on screen: ${name}${lesson ? `, from ${lesson}` : ""}.`];
  if (instruction) lines.push(`Its instruction: "${instruction}"${english ? ` (in English: "${english}")` : ""}`);
  if (example) lines.push(`The sheet's example: "${example}"`);
  lines.push(`Its items, numbered as on their screen:\n${items.join("\n")}`);
  const focus = questionNo({ number: ex.focus });
  const last = questionNo({ number: ex.last });
  if (focus) lines.push(`The cursor is on item ${focus}.`);
  if (last) lines.push(`The item they answered last is ${last}.`);
  const text = clipTo(ex.text, EXERCISE_LESSON_TEXT_MAX);
  if (text) lines.push(`The lesson's text, which the exercise is about:\n${text}`);
  return lines.join("\n");
}

// Attach the context to the final user turn, leaving the caller's array alone.
// A turn with a picture goes as the picture, then the text.
function withContext(messages, contextBlock) {
  const rendered = messages.map((m, i) => {
    const text = renderTurn(m, i === messages.length - 1);
    return {
      role: m.role,
      content: m.image ? [m.image, { type: "text", text }] : text,
    };
  });
  const last = rendered[rendered.length - 1];
  if (!contextBlock || !last || last.role !== "user") return rendered;
  if (Array.isArray(last.content)) {
    const [picture, said] = last.content;
    last.content = [picture, { type: "text", text: `${contextBlock}\n\n${said.text}` }];
  } else {
    last.content = `${contextBlock}\n\n${last.content}`;
  }
  return rendered;
}

// Cache the conversation, not just the system prompt.
//
// The system prompt and tool schema come to roughly 900 tokens, under the
// 1,024-token minimum Sonnet 5 will cache, so a breakpoint on them alone
// silently cached nothing — while up to twenty turns of history went out at
// full price on every question. The breakpoint goes on the turn BEFORE the
// latest question: that question carries this turn's [Context] block, which
// is gone from it by the next request, so everything up to the turn before it
// is exactly what the next request will send again.
//
// The podcast section (2026-10-09) added about 850 characters to the system
// prompt, which by the same reckoning puts the pair near 1,050 tokens: an
// estimate, not measured, and close enough to the line that this breakpoint
// stays the one that matters. The edit tool and its section (2026-10-18) add
// roughly 1,300 characters more, likely enough for the system breakpoint to
// cache on its own (also unmeasured).
function withHistoryCache(messages) {
  if (messages.length < 2) return messages;
  const i = messages.length - 2;
  const copy = messages.slice();
  const blocks = Array.isArray(copy[i].content)
    ? copy[i].content.slice()
    : [{ type: "text", text: copy[i].content }];
  blocks[blocks.length - 1] = { ...blocks[blocks.length - 1], cache_control: { type: "ephemeral" } };
  copy[i] = { role: copy[i].role, content: blocks };
  return copy;
}

// Validate the model's tool input rather than trusting it toward the DB. The
// client lets the learner edit a proposal before adding it, so this is the
// floor on shape, not on quality. `categories` are the course's: a Spanish
// grammar drill is dropped like a made-up category, since the Spanish deck
// is words and phrases only.
export function normalizeCards(input, categories = TUTORS.fr.categories) {
  const proposed = Array.isArray(input?.cards) ? input.cards : [];
  return proposed
    .filter((c) => c && typeof c.front === "string" && typeof c.back === "string")
    .slice(0, 4)
    .map((c) => ({
      front: c.front.trim(),
      back: c.back.trim(),
      // Anything else — "pron" from an older prompt, a made-up category — is a
      // card with nothing sensible to type, and falling back to vocab used to
      // file it as a word.
      category: categories.includes(c.category) ? c.category : "",
      note: typeof c.note === "string" ? c.note.trim() : "",
    }))
    // A grammar card without its arrow asks for English (answerLang reads the
    // arrow) and is usually a rule to recite. Neither can be studied.
    .filter((c) => c.front && c.back && c.category && (c.category !== "gram" || c.front.includes("→")));
}

// The same floor for a change to a card the student has, or its removal
// (`remove`, set by the handler for remove_flashcard). Which card it is, and
// whether the change is real, is the client's to settle against the deck.
export function normalizeEdits(inputs) {
  const text = (v) => (typeof v === "string" ? v.trim() : "");
  const seen = new Set();
  const out = [];
  for (const input of Array.isArray(inputs) ? inputs : []) {
    const front = text(input?.front);
    const remove = input?.remove === true;
    const newFront = remove ? "" : text(input?.new_front);
    const newBack = remove ? "" : text(input?.new_back);
    if (!front || (!remove && !newFront && !newBack)) continue;
    const key = front.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(remove ? { front, remove: true } : { front, newFront, newBack });
  }
  return out.slice(0, 4);
}

// Everything the model is sent as `messages`, from the request body. Exported
// so the logic suite can check what a turn actually becomes without a model.
export function buildRequestMessages(body) {
  const messages = sanitizeMessages(body?.messages);
  if (!messages.length) return [];
  return withHistoryCache(withContext(messages, buildContextBlock(body?.context)));
}

export default async function handler(req, res) {
  if (allowIphoneApp(req, res)) return;
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Signed in, with something to pay with. The token is verified against
  // Supabase, not just decoded — and the key that pays is the caller's own
  // unless the caller is the deploy owner.
  const user = await requireUser(req, res);
  if (!user) return;
  const apiKey = requireAnthropicKey(req, res, user);
  if (!apiKey) return;

  const messages = buildRequestMessages(req.body);
  if (!messages.length) {
    return res.status(400).json({ error: "No message to answer." });
  }

  // Everything above can still answer in JSON — including the 402 that makes
  // the client offer its "connect a key" button. From here the stream is open,
  // so failures have to travel as SSE events instead.
  res.writeHead(200, {
    "Content-Type": "text/event-stream; charset=utf-8",
    "Cache-Control": "no-cache, no-transform",
    Connection: "keep-alive",
    // Vercel's edge buffers proxied responses by default, which would hold the
    // whole stream until it finished and undo the point of streaming.
    "X-Accel-Buffering": "no",
  });

  // Closing the panel aborts the browser's fetch. Without passing that on, the
  // generation keeps running upstream and keeps spending the caller's credit
  // on an answer nobody will read.
  //
  // This hangs off the RESPONSE, not the request: Vercel parses req.body before
  // the handler runs, so by now the request stream is already destroyed and has
  // emitted its own "close". Listening there would arm nothing.
  let clientGone = false;
  let upstream = null;
  res.on("close", () => {
    if (res.writableEnded) return; // finished normally
    clientGone = true;
    upstream?.abort();
  });

  const send = (event) => {
    if (clientGone) return;
    res.write(`data: ${JSON.stringify(event)}\n\n`);
  };

  const tutor = tutorFor(req.body);

  try {
    const anthropic = new Anthropic({ apiKey });
    const stream = anthropic.messages.stream({
      model: MODEL,
      // Generous because streaming took the HTTP timeout off the table, and
      // because this ceiling covers the thinking blocks as well as the answer
      // and the tool call. The prompt is what keeps answers short; a low
      // max_tokens would only truncate one mid-sentence.
      max_tokens: 8000,
      // Explicit rather than implied. An absent `thinking` is not "off" — it is
      // the model's default, and that default has already changed once
      // underneath this file.
      thinking: { type: "adaptive" },
      output_config: { effort: EFFORT },
      // Breakpoint at the end of the stable prefix (tools render before the
      // system prompt, so this covers both). Too short to cache by itself —
      // see withHistoryCache — but on the first question it is the only
      // prefix there is, and once history is added it costs nothing. Each
      // course's prompt is a prefix of its own.
      system: [
        { type: "text", text: tutor.system, cache_control: { type: "ephemeral" } },
      ],
      tools: tutor.tools,
      messages,
    });
    upstream = stream;

    stream.on("text", (delta) => send({ type: "text", delta }));

    const final = await stream.finalMessage();

    let cards = [];
    const editInputs = [];
    for (const block of final.content || []) {
      if (block.type === "tool_use" && block.name === "propose_flashcards") {
        cards = normalizeCards(block.input, tutor.categories);
      } else if (block.type === "tool_use" && block.name === "edit_flashcard") {
        editInputs.push({ ...block.input, remove: false });
      } else if (block.type === "tool_use" && block.name === "remove_flashcard") {
        editInputs.push({ front: block.input?.front, remove: true });
      }
    }
    if (cards.length) send({ type: "cards", cards });
    // Not sent from an answer that was cut off: a tool call that stopped
    // short could carry half the English it meant to write.
    const edits = final.stop_reason === "max_tokens" ? [] : normalizeEdits(editInputs);
    if (edits.length) send({ type: "edits", edits });

    // An answer that stopped for any reason other than finishing is not a
    // finished answer, however much of it arrived.
    if (final.stop_reason === "max_tokens") {
      send({ type: "error", error: "The answer ran too long and was cut off. Try a narrower question." });
      return res.end();
    }
    if (final.stop_reason === "refusal") {
      send({ type: "error", error: "The tutor couldn't help with that one. Try rephrasing it." });
      return res.end();
    }

    send({ type: "done" });
    res.end();
  } catch (err) {
    // An abort we asked for is the expected end of a cancelled request, and
    // there is nobody left to tell either way.
    if (clientGone) return res.end();
    console.error("chat failed:", err);

    let message = err?.message || "Chat failed";
    let code = "";
    if (err instanceof Anthropic.RateLimitError) {
      message = "Rate limited — give it a moment and try again.";
    } else if (err instanceof Anthropic.AuthenticationError) {
      // Almost always the caller's own key. It cannot be checked before the
      // request, so unlike the missing-key 402 this arrives mid-stream — the
      // code is what lets the client offer the same "fix your key" action.
      message = "Anthropic rejected that API key. Check it in your profile menu.";
      code = "bad_key"; // matches resolveAnthropicKey's code for a rejected key
    } else if (err instanceof Anthropic.APIError && err.status === 529) {
      message = "Claude is overloaded right now — give it a minute and try again.";
    } else if (err instanceof Anthropic.APIError) {
      // The raw API message is for the log above, not for a student.
      message = `The tutor couldn't answer (error ${err.status ?? "unknown"}). Try again.`;
    } else {
      message = "The tutor couldn't answer. Try again.";
    }
    send({ type: "error", error: message, ...(code ? { code } : null) });
    res.end();
  }
}
