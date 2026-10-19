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
// Who pays is unchanged: on either app a Claude call is the caller's own
// key, or for the owner the server's (api/_lib/anthropicKey.js).

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
