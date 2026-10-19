// The owner's test app: the `testing` branch, which Vercel serves at these
// two addresses (owner, 2026-10-09). Pure, plain JS: the client reads it
// with the page's own address, the server (api/podcasts.js) with the
// request's.
//
// Whoever signs in on the test app gets everything being tried out there,
// Podcasts included (owner, 2026-10-19: "if i give laura access to -mlb
// then she should see everything in that version"). On the students' app,
// dejareview.vercel.app, Podcasts stays the owner's alone. The owner's own
// tools (feedback, Claude's marking, the status checks) are not part of
// "the version": they stay the owner's on both.
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

// Podcasts: the owner anywhere, and anyone signed in on the test app.
export const podcastsOpenTo = ({ isOwner, signedIn, host }) =>
  !!isOwner || (!!signedIn && isTestAppHost(host));

// Who else uses the owner's Claude account on the test app (owner,
// 2026-10-19: "she can just use mine ... only laura and I have access").
// By account id, not email: this repo is public, and an id names nobody.
// Anyone else who signs in there (any account can) still brings their own
// key, so the owner's account can't be spent by a stranger.
export const OWNERS_KEY_ON_TEST_APP = [
  "44097b1d-3321-4c7c-9585-f8a59de7c153", // Laura Caufour
];

export const usesOwnersKeyOnTestApp = ({ userId, host }) =>
  !!userId && OWNERS_KEY_ON_TEST_APP.includes(userId) && isTestAppHost(host);
