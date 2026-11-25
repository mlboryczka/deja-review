import { useState, useEffect, useCallback, useRef } from "react";
import { supabase } from "./supabase";
import { applySettings } from "./lib/spacedRepetition";
import {
  TARGET_CHOICES, DEFAULT_TARGET, targetOf, recordStudyDay, nextAutoTarget, settingsKind,
} from "./lib/fsrsSettings";
import { leftDueCards } from "./lib/sessionQueue";
import { localISODate, browserTimeZone } from "./lib/studyDay";
import { missingTable } from "./lib/dealLog";

// The student's own FSRS settings (migration_012), applied to the scheduler.
//
// Once a study day, after the deck has come fresh from the server:
//   • the day is recorded — did it start with due cards left over from
//     earlier days? — and the automatic target moves if a week says so
//     (lib/fsrsSettings.js)
//   • the server is asked to fit the student's settings or bring their cards'
//     estimates up to date (api/fsrs-fit.js); if it changed anything, the
//     settings and the deck are read again.
//
// Without migration_012 the table isn't there: the starting settings are used
// and nothing is written.

const DAILY_KEY = "fsrs-daily:";

// The choice a row stands for: "auto", or the fixed target's name.
export function choiceOf(row) {
  if ((row?.target_mode ?? "auto") !== "fixed") return "auto";
  const hit = Object.entries(TARGET_CHOICES).find(([k, v]) => k !== "auto" && Math.abs(v - row.target) < 0.001);
  return hit ? hit[0] : "standard";
}

// `dealtFromRef.current`, once set, picks the cards a set is dealt from out of
// the deck (the Cards page's candidatesFrom: lessons switched off left out).
export function useFsrsSettings(user, { cards, freshSeq, dir, dealtFromRef, onEstimatesChanged, daily = true }) {
  const userId = user?.id ?? null;
  const [row, setRow] = useState(null);
  const [setUp, setSetUp] = useState(false);
  const [readSeq, setReadSeq] = useState(0);
  const [lastFit, setLastFit] = useState(null);
  const dailyRan = useRef(null);
  // Bumped to read the settings again after a failed read, and when the page
  // comes back into view, so a dropped connection doesn't leave the whole
  // session on the starting settings.
  const [readTry, setReadTry] = useState(0);
  const [dayTick, setDayTick] = useState(0);
  const failedRead = useRef(false);
  const readFailures = useRef(0);

  useEffect(() => {
    let cancelled = false;
    let retryTimer = null;
    setRow(null);
    setSetUp(false);
    if (!userId) return;
    (async () => {
      const { data, error } = await supabase
        .from("fsrs_settings").select("*").eq("user_id", userId).maybeSingle();
      if (cancelled) return;
      if (error) {
        if (!missingTable(error)) {
          console.error("Load FSRS settings failed:", error);
          failedRead.current = true;
          // 5s, 10s, 20s ... up to five minutes between tries.
          const wait = Math.min(300000, 5000 * 2 ** readFailures.current);
          readFailures.current += 1;
          retryTimer = setTimeout(() => setReadTry((n) => n + 1), wait);
        }
        return;
      }
      failedRead.current = false;
      readFailures.current = 0;
      setRow(data || null);
      setSetUp(true);
      setReadSeq((n) => n + 1);
    })();
    return () => { cancelled = true; clearTimeout(retryTimer); };
  }, [userId, readTry]);

  // Coming back to the page: read the settings again if the last read failed,
  // and look at whether a new study day has begun while it stood open.
  useEffect(() => {
    const onBack = () => {
      if (document.visibilityState === "hidden") return;
      if (failedRead.current) setReadTry((n) => n + 1);
      if (dailyRan.current && dailyRan.current !== localISODate()) setDayTick((n) => n + 1);
    };
    document.addEventListener("visibilitychange", onBack);
    window.addEventListener("focus", onBack);
    return () => {
      document.removeEventListener("visibilitychange", onBack);
      window.removeEventListener("focus", onBack);
    };
  }, []);

  const reread = useCallback(async () => {
    if (!userId) return;
    const { data, error } = await supabase
      .from("fsrs_settings").select("*").eq("user_id", userId).maybeSingle();
    if (!error) setRow(data || null);
  }, [userId]);

  // Every answer from here on is scheduled with these.
  useEffect(() => {
    applySettings({ weights: row?.weights, retention: targetOf(row) });
  }, [row]);

  const save = useCallback(async (fields) => {
    if (!userId) return null;
    const { data, error } = await supabase
      .from("fsrs_settings")
      .upsert({ user_id: userId, ...fields, updated_at: new Date().toISOString() }, { onConflict: "user_id" })
      .select()
      .maybeSingle();
    if (error) { console.error("Save FSRS settings failed:", error); return null; }
    // The row as saved; or, if the database didn't send it back, what was sent.
    setRow((prev) => data || { ...(prev || {}), user_id: userId, ...fields });
    return data;
  }, [userId]);

  // Once a study day, once the deck has come fresh from the server — a copy
  // saved in the browser can be a day old and show yesterday's work as undone.
  useEffect(() => {
    if (!daily || !userId || !setUp || !readSeq || !freshSeq) return;
    const today = localISODate();
    let stored = null;
    try { stored = localStorage.getItem(DAILY_KEY + userId); } catch {}
    if (dailyRan.current === today || stored === today) return;
    dailyRan.current = today;
    try { localStorage.setItem(DAILY_KEY + userId, today); } catch {}

    (async () => {
      // The settings as they are now: another device may have recorded days
      // since this page read them, and the whole list is written back.
      let current = row;
      {
        const { data, error } = await supabase
          .from("fsrs_settings").select("*").eq("user_id", userId).maybeSingle();
        if (error) {
          // Not recorded: let the next look at the day try again.
          dailyRan.current = null;
          try { localStorage.removeItem(DAILY_KEY + userId); } catch {}
          return;
        }
        current = data || null;
        setRow(current);
      }
      // Due cards left over from earlier days that the app would have dealt
      // (leftDueCards): the way the student is studying (in EN→FR, a word due
      // only French side up isn't waiting), a word's other way held back for
      // the next day isn't, and nor is a lesson switched off (`dealtFromRef`,
      // the Cards page's own choice of cards).
      const dealtFrom = dealtFromRef?.current;
      const behind = leftDueCards(dealtFrom ? dealtFrom(cards) : cards, { direction: dir });
      const days = recordStudyDay(current?.days, today, behind);
      const fields = { days };
      if ((current?.target_mode ?? "auto") === "auto") {
        const target = targetOf(current);
        // The wait is counted in the student's study days, like `today`.
        const changedAt = current?.target_changed_at ? localISODate(new Date(current.target_changed_at)) : null;
        const next = nextAutoTarget({ target, days, changedAt, today });
        if (next !== target) Object.assign(fields, { target: next, target_changed_at: new Date().toISOString() });
      }
      await save(fields);

      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) return;
        const res = await fetch("/api/fsrs-fit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${session.access_token}` },
          body: JSON.stringify({ timeZone: browserTimeZone() || undefined }),
        });
        const result = await res.json().catch(() => null);
        if (!res.ok || !result?.ok) return;
        setLastFit(result);
        if (result.recomputed > 0 || result.status === "fitted") {
          await reread();
          onEstimatesChanged?.();
        }
      } catch (e) {
        // Background work: the student is studying with the settings they had.
        console.warn("FSRS fit check failed:", e?.message || e);
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, setUp, readSeq, freshSeq, daily, dayTick]);

  // The student's own choice. Automatic starts again from 90%.
  const setChoice = useCallback((choice) => {
    if (!(choice in TARGET_CHOICES)) return null;
    // Pressing the option already chosen changes nothing: an automatic target
    // that has eased keeps its place, and the week's wait isn't restarted.
    if (row && choice === choiceOf(row)) return null;
    if (choice === "auto") {
      return save({ target_mode: "auto", target: DEFAULT_TARGET, target_changed_at: new Date().toISOString() });
    }
    return save({ target_mode: "fixed", target: TARGET_CHOICES[choice], target_changed_at: new Date().toISOString() });
  }, [save, row]);

  return {
    setUp,
    choice: choiceOf(row),
    target: targetOf(row),
    fittedAt: row?.weights ? row.fitted_at : null,
    fittedKind: settingsKind(row),
    answers: lastFit?.answers ?? row?.fit_checked_answers ?? null,
    setChoice,
  };
}
