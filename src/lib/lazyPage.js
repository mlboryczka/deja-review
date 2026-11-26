// A page loaded only when it is opened (React's lazy), which survives an
// update to the app.
//
// Each page is a file whose name changes with every release. A tab opened
// before a release still asks for the old name, which the server no longer
// has, and the whole app went blank (owner, 2026-11-26: "test isn't even
// loading properly"; the console said "Failed to fetch dynamically imported
// module .../LessonTestPage-PWZlo5l3.js"). So a page that can't be fetched
// reloads the app, which fetches the new release. Once a minute at most, so a
// page that is really missing shows its error instead of reloading for ever.

import { lazy } from "react";

const KEY = "reloaded-for-update";

export function lazyPage(load) {
  return lazy(() => load().catch((err) => {
    let last = 0;
    try { last = Number(sessionStorage.getItem(KEY)) || 0; } catch { /* no storage: reload anyway */ }
    if (Date.now() - last > 60000) {
      try { sessionStorage.setItem(KEY, String(Date.now())); } catch { /* as above */ }
      window.location.reload();
      return new Promise(() => {});
    }
    throw err;
  }));
}
