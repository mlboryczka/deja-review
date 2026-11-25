// Code check of 7 November 2026, problems 54 to 63 (the tutor). No browser, no
// real database, no real Claude: functions run on stand-in data, and what
// lives inside the chat panel is checked in its source for the rule the fix
// put there. The panel's behaviour in a page (focus, scroll) is only checked
// here as source; GitHub's browser suites run the tutor panel itself.
import { readFileSync } from "node:fs";
import { checker } from "../check.mjs";
import { cardIndex } from "../../src/lib/sameCard.js";
import { findRelatedCards, buildTutorContext } from "../../src/lib/deckContext.js";
import { claudeProblem, OVERLOADED_TEXT, BILLING_TEXT } from "../../api/_lib/claudeProblem.js";
import { claudeError } from "../../api/_lib/podcasts.js";
import { aboutTheText, lessonTextOf } from "../../src/lib/exerciseMarking.js";
import { markPrompt } from "../../api/_lib/exercises.js";
import { EXERCISE_LESSONS } from "../../src/data/exercises/es/index.js";
import { LESSON_TEXTS } from "../../src/data/exercises/es/texts.js";

const ck = checker();
const read = (f) => readFileSync(new URL(`../../${f}`, import.meta.url), "utf8");
const panel = read("src/ChatPanel.jsx");
const chat = read("api/chat.js");
const app = read("src/FlashcardApp.jsx");

// 54
ck("54 opening the tutor focuses the box and scrolls once the panel is in the page",
  /if \(!open \|\| !mounted\) return;\s*inputRef\.current\?\.focus\(\);\s*const el = scrollRef\.current;\s*if \(el\) el\.scrollTop = el\.scrollHeight;\s*\}, \[open, mounted\]\)/.test(panel));

// 55
ck("55 a failed question takes back only its own two messages, and the box only if still empty",
  !/setMessages\(messages\)/.test(panel) && (panel.match(/m\.reqId !== reqId/g) || []).length === 2 &&
  /setInput\(\(cur\) => cur \|\| trimmed\)/.test(panel) && /setImages\(\(cur\) => \(cur\.length \? cur : pictures\)\)/.test(panel));

// 56
const glossed = [{ front: "tout d'un coup (suddenly; all at once)", back: "suddenly; all at once", source: null }];
const idx = cardIndex(glossed);
ck("56 the sure rule finds a glossed card for 'tout d'un coup' and 'tout d'un coup (suddenly)'",
  !!idx.sure({ front: "tout d'un coup", back: "suddenly" }) && !!idx.sure({ front: "tout d'un coup (suddenly)", back: "suddenly" }));
ck("56 the chip looks cards up through findExisting, not the exact stored front",
  /findExisting\(front, back, card\.front\)/.test(panel) && !/deckByFront\.get\(frontKey\(front\)\) \|\| null/.test(panel));

// 57
ck("57 Add upserts over a held row only when it is archived; a live card is left and the deck reloads",
  /if \(held\?\.\[0\] && !isArchived\(held\[0\]\)\) \{\s*onCardAdded\?\.\(null\);[\s\S]*?return;\s*\}[\s\S]*?\.upsert\(row/.test(panel));

// 58
const fr = [
  { f: "cours de français", b: "French class", freq: 1 },
  { f: "Je suis ici", b: "I am here", freq: 1 },
  { f: "aider", b: "to help", freq: 1 },
  { f: "la colline", b: "the hill", freq: 1 },
  { f: "sans", b: "without", freq: 1 },
];
const names = (q) => findRelatedCards(q, fr).map((c) => c.front);
ck("58 'What's the French for a hill?' sends the hill, not the français cards", names("What's the French for a hill?").join() === "la colline", names("What's the French for a hill?").join());
ck("58 'What kind of word am I looking for?' no longer matches every 'I am' back", names("What kind of word am I looking for?").length === 0);
ck("58 words a learner really looks up still count ('help' finds aider)", names("how do I say to help?").includes("aider"));
ck("58 a suggestion button's own words are kept out of matching",
  /fromChip = false/.test(panel) && /question: fromChip \? "" : trimmed/.test(panel) && /send\(s, true\)/.test(panel));

// 59
ck("59 the tutor is told an accepted answer counts as right",
  /result: disputeAccepted && typeResult !== "revealed" \? "accepted" : typeResult/.test(app) &&
  /accepted: "was marked wrong at first, then accepted on review, so it counts as right"/.test(chat) && /typedAnswer, disputeAccepted\]|revealed, disputeAccepted\]|cardSlot, disputeAccepted\]/.test(app));

// 60
ck("60 the Spanish tutor is told Almost counts as right, with the current Almost rule and no double quote added",
  /Almost right counts as right: the app scores it as a correct answer/.test(chat) &&
  /an article or adjective of the wrong gender or number, or one word written as two/.test(chat) &&
  /marked wrong\), which counts as right"/.test(chat));

// 61
const es = [
  { f: "el esposo", b: "the husband", row_id: 1, freq: 1 },
  { f: "Estoy aquí con mi esposo", b: "I am here with my husband", row_id: 2, freq: 1, last_answer_correct: false, last_answered: new Date().toISOString() },
  { f: "la casa", b: "the house", row_id: 3, freq: 1 },
];
const unanswered = { ...es[0], shownDir: "en", f: "esposo", b: "husband", answered: false };
const cur = { f: "el esposo", b: "the husband", row_id: 1, shownDir: "en", answered: false };
const ctx1 = buildTutorContext({ question: "What's the Spanish for husband?", cards: es, currentCard: cur, course: "es" });
const ctx2 = buildTutorContext({ question: "What's the Spanish for husband?", cards: es, currentCard: { ...cur, answered: true }, course: "es" });
const leaks = (ctx) => JSON.stringify([ctx?.relatedCards, ctx?.recentMisses]).includes("esposo");
ck("61 before the answer, no related card or miss carries the hidden word", !leaks(ctx1), JSON.stringify([ctx1?.relatedCards, ctx1?.recentMisses]));
ck("61 after the answer, those cards come back", leaks(ctx2));

// 62
const mid = { type: "error", error: { type: "overloaded_error", message: "Overloaded" } };
ck("62 an overload with no status is recognised", claudeProblem(mid) === "overloaded" && claudeProblem({ status: 529 }) === "overloaded");
ck("62 billing: a 402, a billing_error and a 400 about the credit balance",
  claudeProblem({ status: 402 }) === "billing" && claudeProblem({ error: { error: { type: "billing_error" } } }) === "billing" &&
  claudeProblem({ status: 400, message: "Your credit balance is too low to access the Anthropic API" }) === "billing" && claudeProblem({ status: 500 }) === "");
ck("62 the podcasts' error says it plainly too", claudeError({ status: 402 }, "mark").json.error === BILLING_TEXT && claudeError({ error: { error: { type: "overloaded_error" } } }, "mark").json.error === OVERLOADED_TEXT);
ck("62 the tutor sends the billing code and the panel offers the key dialog",
  /code = "billing"/.test(chat) && /errorCode === BILLING/.test(panel));

// 63
const texty = EXERCISE_LESSONS.flatMap((l) => l.exercises.map((ex) => ({ l, ex }))).filter(({ l, ex }) => aboutTheText(ex) && (LESSON_TEXTS[l.textOf || l.id] || []).length);
ck("63 one test decides: every such exercise sends the text to Claude's marking", texty.length > 7 &&
  texty.every(({ l, ex }) => markPrompt({ lesson: l, exercise: ex, item: ex.items[0], typed: "x" }).includes("The lesson's text:")));
ck("63 the page no longer has its own test or layout", !/lessonTextLines/.test(read("src/ExercisesPage.jsx")) && /aboutTheText\(ex\)/.test(read("src/ExercisesPage.jsx")));
ck("63 layout is one: titles with #, questions with a dash", lessonTextOf([{ title: "T" }, { who: "A", text: "hola" }, { question: "q" }]) === "# T\nA: hola\n– q");

const n = ck.fails();
console.log(n ? `\n  FAILED: ${n}` : "\n  all checks passed");
process.exit(n ? 1 : 0);
