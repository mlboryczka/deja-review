import { useState, useEffect, useCallback, useRef } from "react";
import { supabase } from "./supabase";
import { courseOf } from "./lib/course";

// The linked cahier: the Google Doc the student and their teacher actually
// write in, read again whenever they open the app so a class added after the
// lesson is already cards by the time they study.
//
// The work is the server's (api/cahier-sync.js). This is the client side of
// it: what is linked, when it was last read, what arrived, and the loop that
// keeps asking for more while classes are left — a run parses a limited number
// of classes so it can't time out, and reports how many remain, so linking a
// year-old cahier is several runs rather than one that dies.
//
// Reading the doc costs nothing and takes a second; only a class that has
// never been read costs anything at all. So checking on open is cheap, and the
// server refuses to check twice within half a minute anyway.
//
// The Spanish module has its own (2026-11-02): the caderno, Laura's doc of
// the owner's Spanish classes, kept in es_cahier_links (migration_023) and
// read by the same route with `course: "es"`. `course` is "fr" or "es".

// Don't check more than once an hour per browser. The daily job reads the
// French cahier only (the caderno is read only when Spanish is opened), and a
// student reloading the page ten times should not mean ten checks.
const CHECK_EVERY_MS = 60 * 60 * 1000;
const LAST_CHECK_KEY = "cahier-checked:";

export function useCahierSync(user, course = "fr") {
  const userId = user?.id ?? null;
  const spanish = course === "es";
  const table = courseOf(course).table("cahier_links");
  // The browser's note of the last check, per language.
  const checkKey = LAST_CHECK_KEY + courseOf(course).store(userId);
  const [link, setLink] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [checking, setChecking] = useState(false);
  const [error, setError] = useState("");
  // What the last run brought in, for the app to tell the student about:
  // { dates: ["2026-09-24"], cards: 31 }
  const [arrived, setArrived] = useState(null);
  const running = useRef(false);
  // That the check on open has run for this user, kept in memory too so that
  // blocked browser storage can't make it repeat.
  const checkedOnOpen = useRef(null);

  useEffect(() => {
    let cancelled = false;
    if (!userId) { setLink(null); setLoaded(true); return; }
    (async () => {
      const { data, error: err } = await supabase
        .from(table).select("*").eq("user_id", userId).maybeSingle();
      if (cancelled) return;
      // Before migration_023 there is no caderno table: nothing is linked.
      const noTable = err && spanish && /PGRST205|42P01/.test(String(err.code));
      if (err && !noTable) console.error("Couldn't read the cahier link:", err);
      // A failed read is not "nothing linked": keep the link already known.
      if (!err || noTable) setLink(data || null);
      setLoaded(true);
    })();
    return () => { cancelled = true; };
  }, [userId, table, spanish]);

  // Read the link row again; a failed read keeps the link already shown.
  const rereadLink = useCallback(async () => {
    if (!userId) return;
    const { data, error: err } = await supabase.from(table).select("*").eq("user_id", userId).maybeSingle();
    if (!err) setLink(data || null);
  }, [userId, table]);

  // One run of the sync, repeated while classes are left to read.
  //
  // `onProgress` is called with each run's summary so a caller can say
  // "class 12 of 40" while a long backlog is worked through.
  const sync = useCallback(async ({ url, force = false, onProgress } = {}) => {
    if (running.current) return { ok: false, busy: true, error: `Your ${spanish ? "caderno" : "cahier"} is being checked right now. Try again in a moment.` };
    running.current = true;
    setChecking(true);
    setError("");
    let added = 0;
    const dates = [];
    let last = null;
    let prevRemaining = Infinity;
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) throw new Error("Not signed in");
      for (let run = 0; run < 40; run++) {
        const res = await fetch("/api/cahier-sync", {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${session.access_token}` },
          body: JSON.stringify({ ...(run === 0 && url ? { url } : null), force: force || run > 0, ...(spanish ? { course: "es" } : null) }),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok || data.error) throw new Error(data.error || `Couldn't read your ${spanish ? "caderno" : "cahier"} (HTTP ${res.status})`);
        last = data;
        added += data.cardsAdded || 0;
        dates.push(...(data.newClasses || []));
        onProgress?.({ ...data, addedSoFar: added });
        if (!data.remaining) break;
        // Stop when a run left no fewer classes than the one before: classes
        // that wait for the next check would be read again at once.
        if (data.remaining >= prevRemaining) break;
        prevRemaining = data.remaining;
      }
      if (userId) {
        try { localStorage.setItem(checkKey, String(Date.now())); } catch { /* storage blocked */ }
      }
      // Re-read the row rather than assembling it here, so what the app shows
      // is what was actually stored.
      await rereadLink();
      // `busy`: another reading of the student's notes (an upload, or the
      // daily check) had the turn, so this one read nothing (2026-10-06).
      const summary = { ok: true, cards: added, dates: [...new Set(dates)].sort(), linked: last?.linked !== false, busy: !!last?.busy };
      if (added > 0) setArrived(summary);
      return summary;
    } catch (e) {
      // Returned as well as stored: a caller that acts on the result reads a
      // stale `error` from the render it was called in, and said "Couldn't
      // read that cahier" while the server had explained exactly what was
      // wrong (2026-09-25).
      setError(e.message);
      // The server has said why on the link (and may have saved the link and
      // some classes before failing): show that, and keep what arrived.
      await rereadLink();
      if (added > 0) {
        const partial = { ok: true, cards: added, dates: [...new Set(dates)].sort(), linked: true, busy: false, error: e.message };
        setArrived(partial);
        return partial;
      }
      return { ok: false, error: e.message };
    } finally {
      running.current = false;
      setChecking(false);
    }
  }, [userId, table, spanish, checkKey, rereadLink]);

  const linkedUser = link?.user_id || null;
  // The check on open. Once the link is known, and at most hourly.
  useEffect(() => {
    if (!loaded || !linkedUser || !userId) return;
    const mark = `${checkKey}:${linkedUser}`;
    if (checkedOnOpen.current === mark) return;
    checkedOnOpen.current = mark;
    let lastLocal = 0;
    try { lastLocal = Number(localStorage.getItem(checkKey)) || 0; } catch { /* storage blocked */ }
    if (Date.now() - lastLocal < CHECK_EVERY_MS) return;
    sync();
  }, [loaded, linkedUser, userId, sync, checkKey]);

  // Unlinking removes only the link. What the student's notes have had read,
  // line by line, is their own record (notes_read, migration_016), shared
  // with uploads, so relinking, or linking a copy of the doc, reads only what
  // is new. Unlink used to erase that record with the link row, and the next
  // link read again any class none of whose cards were left (2026-10-06).
  // Before migration_016 the link row is still the only record; since a
  // removed card now stays in the deck, out of study, with its dates, its
  // class still counts as read when the doc is linked again.
  const unlink = useCallback(async () => {
    if (!userId) return;
    const { error: err } = await supabase.from(table).delete().eq("user_id", userId);
    if (err) { setError(err.message); return false; }
    setLink(null);
    setArrived(null);
    return true;
  }, [userId, table]);

  return {
    link, loaded, checking, error, arrived,
    dismissArrived: () => setArrived(null),
    sync, unlink,
  };
}
