// The iPhone app (ios/, built with Capacitor; owner, 2026-10-27: "i want it to
// be a proper application, so will need to go through the app store"). It
// runs these same pages from inside the app, where the page's address is
// capacitor://localhost rather than the site's. So its calls to /api go to
// the site it was built for, and it counts as that site wherever the app asks
// which one it is on (the test app's Podcasts, whose Claude account pays).
//
// `npm run ios` builds it for the test app; `npm run ios:students` for the
// students' app, which needs api/_lib/cors.js released to main first.

import { Capacitor } from "@capacitor/core";

export const IN_IPHONE_APP = Capacitor.isNativePlatform();

// Pages run to the very edges of the screen only inside the iPhone app, whose
// phone layout keeps clear of the clock and the home bar itself. In Safari or
// Chrome a sideways iPhone keeps the page clear of the camera cut-out.
if (IN_IPHONE_APP && typeof document !== "undefined") {
  const meta = document.querySelector('meta[name="viewport"]');
  if (meta && !/viewport-fit/.test(meta.content)) meta.setAttribute("content", `${meta.content}, viewport-fit=cover`);
}

export const SERVER = IN_IPHONE_APP
  ? (import.meta.env.VITE_API_BASE || "https://dejareview-mlb.vercel.app").replace(/\/$/, "")
  : "";

// The host the app is on: the page's own, or in the iPhone app its server's.
export const appHost = () =>
  IN_IPHONE_APP ? new URL(SERVER).hostname : typeof window !== "undefined" ? window.location.hostname : "";

// Every call to the server is a fetch of "/api/…". In the iPhone app that
// path means the app's own files, so it is sent to the site instead.
export function sendApiToServer() {
  if (!IN_IPHONE_APP) return;
  const send = window.fetch.bind(window);
  window.fetch = (input, init) =>
    send(typeof input === "string" && input.startsWith("/api/") ? SERVER + input : input, init);
}
