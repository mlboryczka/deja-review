// The owner's test app: the `testing` branch, which Vercel serves at these
// two addresses (owner, 2026-10-09). Pure, plain JS: the client reads it
// with the page's own address, the server (api/podcasts.js,
// api/review-answer.js) with the request's.
//
// Whoever signs in on the test app gets everything being tried out there,
// Podcasts, the Spanish module, Exercises and Dialogues included (owner, 2026-10-19: "if i give laura access to -mlb
// then she should see everything in that version"). (Until 2026-11-25 they stayed the owner's alone on the students' app,
// dejareview.vercel.app.) The owner's own
// tools (feedback, Claude's marking, the status checks) are not part of
// "the version": they stay the owner's on both.
// Since 2026-11-25 the students' app shows the Spanish module, Exercises and
// Dialogues to every student (testAppModulesOpenTo below); Podcasts and the
// owner's tools stay the owner's (podcastsOpenTo below).
//
// Who pays: the caller's own key, or the server's (the owner's Claude
// account) for the owner anywhere and for the people named below on the test
// app (api/_lib/anthropicKey.js).

export const TEST_APP_HOSTS = [
  "dejareview-mlb.vercel.app",
  "french-flashcards-git-testing-mlboryczkas-projects.vercel.app",
];

// A host as a browser or a request names it, port and case aside.
export const isTestAppHost = (host) =>
  TEST_APP_HOSTS.includes(String(host || "").trim().toLowerCase().replace(/:\d+$/, ""));

// The Spanish module (language choice, Exercises, Dialogues) and Claude's
// marking of Exercises and Dialogues: open to everyone signed in, on the
// students' app and the test app alike (owner, 2026-11-25: "do it!").
// The address no longer matters; `host` is still passed by every caller.
export const testAppModulesOpenTo = ({ isOwner, signedIn }) =>
  !!isOwner || !!signedIn;

// Podcasts: the owner alone, on both apps (owner, 2026-11-25: "Podcasts mine
// only"). The app's switch and api/podcasts.js read this rule.
export const podcastsOpenTo = ({ isOwner }) => !!isOwner;

// Who else uses the owner's Claude account on the test app (owner,
// 2026-10-19: "she can just use mine ... only laura and I have access").
// By account id, not email: this repo is public, and an id names nobody.
// Anyone else who signs in there (any account can) still brings their own
// key for everything they ask Claude. The one thing the owner's account pays
// for, for anyone, is Claude's review of feedback, and that is held to a few
// reviews a day per sender (SENDER_DAILY_REVIEWS, api/_lib/feedbackReview.js).
export const OWNERS_KEY_ON_TEST_APP = [
  "44097b1d-3321-4c7c-9585-f8a59de7c153", // Laura Caufour
];

export const usesOwnersKeyOnTestApp = ({ userId, host }) =>
  !!userId && OWNERS_KEY_ON_TEST_APP.includes(userId) && isTestAppHost(host);
