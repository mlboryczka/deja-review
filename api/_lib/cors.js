// The iPhone app (ios/, src/lib/nativeApp.js) runs the app's pages from
// inside the app, at capacitor://localhost, and calls these routes on the
// site. A browser holds such a call back unless the site says that address
// may make it, and first asks with an OPTIONS request carrying no session.
// Only the app's address is let in, and only to make the calls the site's
// own pages make: every route still checks who is signed in.
//
// Returns true when it has answered the request itself (that first OPTIONS
// ask); the route then returns without doing anything else.
const APP_ORIGIN = "capacitor://localhost";

export function allowIphoneApp(req, res) {
  if (req.headers.origin !== APP_ORIGIN) return false;
  res.setHeader("Access-Control-Allow-Origin", APP_ORIGIN);
  res.setHeader("Vary", "Origin");
  if (req.method !== "OPTIONS") return false;
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Authorization, Content-Type, X-Anthropic-Key");
  res.setHeader("Access-Control-Max-Age", "86400");
  res.status(204).end();
  return true;
}
