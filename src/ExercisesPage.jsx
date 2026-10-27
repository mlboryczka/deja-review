// The Exercises module (Spanish, test app; owner 2026-10-24: "create a new
// module only in the spanish module for quizzing me on the exercises you put
// together for each lesson").
//
// Two pages: Exercises, the lessons with how far you are in each, and a
// lesson's exercises, the sheet's written exercises one under another, each
// item answered in place. Type an answer and press Enter: the answer key
// marks it at once (src/lib/exerciseMarking.js), Claude marks anything the
// key doesn't have (api/_lib/exercises.js), and the next item is ready to
// type. Every answer is kept (es_exercise_answers, migration_022); an item
// shows its latest one from today, so every exercise starts fresh each day
// (owner, 2026-10-27: "reset all exercise answers at the end of a day"). The
// day is the app's study day, from 4am. "Try again" and "Start again" add
// answers, they never remove any. "Hint" on an item still to answer shows the key's answer a
// letter at a time (hintText in exerciseMarking.js); it isn't kept and
// doesn't change the marking.
//
// The shell (FlashcardApp) owns which page is showing, so the sidebar can
// mark it and the page opens where you left it.
//
// The tutor (2026-10-26) is told the exercise being worked on, as Podcasts
// tells it the episode: a lesson's page hands it up (onTutorContext).

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, useSyncExternalStore, Fragment } from "react";
import { supabase } from "./supabase";
import { T } from "./theme";
import { EXERCISE_LESSONS, EXERCISES_BY_ID } from "./data/exercises/es/index.js";
import { LESSON_TEXTS } from "./data/exercises/es/texts.js";
import { itemKey, kindOf, isAnswered, markByKey, typedText, keyAnswer, keyReason, hintText, hintLevels, markedNow, findItem } from "./lib/exerciseMarking.js";
import { markAnswer, loadAnswers } from "./lib/exerciseApi.js";
import { BYOK_REQUIRED, BAD_KEY } from "./lib/anthropicKey";
import { startOfLocalDay } from "./lib/studyDay";

// ── The answers, kept per user for as long as the page is open ───────────
// Outside React, so a mark still on its way lands when it comes back, even if
// the page was left meanwhile, and coming back doesn't read them all again.
const stores = new Map();
function storeFor(userId) {
  if (!stores.has(userId)) {
    const s = { latest: {}, loading: true, missing: false, error: null, listeners: new Set(), version: 0, started: false };
    s.emit = () => { s.version++; s.listeners.forEach((l) => l()); };
    // An answer given on this page carries a ticket, newer ones higher: a
    // result that comes back after the item was answered again is dropped.
    s.record = (answer) => {
      if (!answer?.key) return;
      const prev = s.latest[answer.key];
      if (prev?.ticket && answer.ticket && answer.ticket < prev.ticket) return;
      s.latest = { ...s.latest, [answer.key]: answer };
      s.emit();
    };
    // "Start again": what this page holds for one exercise goes, but for an
    // answer still being marked. The saved rows stay; shownAnswer hides them.
    s.clearExercise = (prefix) => {
      const kept = {};
      for (const [k, a] of Object.entries(s.latest)) if (!k.startsWith(prefix) || a.pending) kept[k] = a;
      s.latest = kept;
      s.emit();
    };
    s.forget = (key, ticket) => {
      if (s.latest[key]?.ticket !== ticket) return;
      const { [key]: _gone, ...rest } = s.latest;
      s.latest = rest;
      s.emit();
    };
    stores.set(userId, s);
  }
  return stores.get(userId);
}
function useAnswers(userId) {
  const s = storeFor(userId);
  useSyncExternalStore(
    useCallback((l) => { s.listeners.add(l); return () => s.listeners.delete(l); }, [s]),
    () => s.version
  );
  useEffect(() => {
    if (s.started || !userId) return;
    s.started = true;
    loadAnswers({ supabase, userId }).then(({ answers, missing, error }) => {
      // Oldest first, so each item ends on its latest; one answered on this
      // page while they loaded is newer than any of them. One the key marked
      // Almost for an accent that no longer counts shows as Right
      // (markedNow).
      const latest = {};
      for (const a of answers) latest[a.key] = markedNow(findItem(EXERCISES_BY_ID, a.key)?.item, a);
      for (const [k, a] of Object.entries(s.latest)) latest[k] = a;
      s.latest = latest;
      s.missing = missing;
      s.error = error ? "Your earlier answers couldn’t be loaded. Reload the page to try again." : null;
      s.loading = false;
      s.emit();
    });
  }, [s, userId]);
  return s;
}
// Signing out drops what this page holds in memory, the answers and the
// unsent ones. (Its place and its "Start again" times, kept in the browser,
// go with Podcasts' place: clearPodcastsPlace in FlashcardApp.) Here rather
// than in App.jsx's sign-out, which would load this page, and every sheet
// with it, for everyone.
supabase.auth.onAuthStateChange((event) => {
  if (event !== "SIGNED_OUT") return;
  stores.clear();
  drafts.clear();
});

// What has been typed and not yet checked, so leaving the page loses nothing.
const drafts = new Map();

// "Start again" on an exercise: answers given before it are kept, but no
// longer shown. Kept in this browser, per user.
const AGAIN_KEY = "es-exercises-again:";
function readAgain(userId) {
  try {
    const v = JSON.parse(localStorage.getItem(AGAIN_KEY + userId) || "{}");
    return v && typeof v === "object" ? v : {};
  } catch { return {}; }
}
function writeAgain(userId, value) {
  try { localStorage.setItem(AGAIN_KEY + userId, JSON.stringify(value)); } catch {}
}

// An item's answer as the page shows it: its latest, unless it was given
// before today (the page starts fresh each day) or the exercise was started
// again after it. One still being marked is always shown.
const at = (iso) => Date.parse(iso) || 0;
const shownAnswer = (latest, again, lessonId, n, key, today = startOfLocalDay()) => {
  const a = latest[key];
  if (!a) return null;
  if (a.pending) return a;
  const from = again[`${lessonId}/${n}`];
  return at(a.answeredAt) < today || (from && at(a.answeredAt) <= at(from)) ? null : a;
};

function tally(lesson, latest, again) {
  let items = 0, answered = 0, right = 0;
  for (const ex of lesson.exercises) {
    ex.items.forEach((_, i) => {
      items++;
      const a = shownAnswer(latest, again, lesson.id, ex.n, itemKey(lesson.id, ex.n, i));
      if (a && !a.pending) { answered++; if (a.verdict === "right") right++; }
    });
  }
  return { items, answered, right };
}

const countLine = ({ items, answered, right }) =>
  answered ? `${items} questions · ${answered} answered, ${right} right` : `${items} questions`;

// ── What the tutor is told ───────────────────────────────────────────────
// The exercise being worked on: the one whose item has the cursor, else the
// one answered last, else the lesson's first. Every item goes, numbered as on
// the page, with the key's answer and whether it has been answered; the tutor
// doesn't give an answer away before then (api/chat.js, "An exercise"). Shape:
// lib/deckContext.js, exerciseContext.
const plainLine = (s) => String(s ?? "").replace(/\[\[([^\]]*)\]\]/g, "$1").replace(/\s*\n\s*/g, " / ").trim();
const lessonTextLines = (lines) =>
  (Array.isArray(lines) ? lines : [])
    .map((l) => l.title || (l.scene ? `(${l.scene})` : "") || l.question || (l.who ? `${l.who}: ${l.text}` : l.text || ""))
    .filter(Boolean)
    .join("\n");
const exerciseOfKey = (lesson, key) =>
  key ? lesson.exercises.find((ex) => String(key).startsWith(`${lesson.id}/${ex.n}/`)) || null : null;

function tutorExercise(lesson, latest, again, focusKey, textShown) {
  const shownOf = (ex, i) => shownAnswer(latest, again, lesson.id, ex.n, itemKey(lesson.id, ex.n, i));
  const doneAt = (a) => (a && !a.pending ? at(a.answeredAt) || 1 : 0);
  let ex = exerciseOfKey(lesson, focusKey);
  if (!ex) {
    let when = 0;
    for (const e of lesson.exercises) e.items.forEach((_, i) => {
      const t = doneAt(shownOf(e, i));
      if (t > when) { when = t; ex = e; }
    });
  }
  ex = ex || lesson.exercises[0];
  if (!ex) return null;
  let last = 0, lastAt = 0;
  const items = ex.items.map((item, i) => {
    const a = shownOf(ex, i);
    const t = doneAt(a);
    if (t && t >= lastAt) { lastAt = t; last = i + 1; }
    return {
      number: i + 1,
      prompt: plainLine(item.prompt),
      answer: plainLine(keyAnswer(item)),
      answered: !!t,
      ...(t ? { typed: plainLine(a.typed), verdict: a.verdict, correct: a.verdict === "right" ? "" : plainLine(a.correct || keyAnswer(item)) } : null),
    };
  });
  const focus = exerciseOfKey(lesson, focusKey) === ex ? Number(String(focusKey).split("/").pop()) || 0 : 0;
  // The lesson's text goes when the exercise is about it (true or false
  // about the dialogue, translating the text) or it is open on the page.
  const aboutText = textShown || ex.items.some((it) => kindOf(it) === "truth" || kindOf(it) === "open");
  const text = aboutText ? lessonTextLines(LESSON_TEXTS[lesson.textOf]) : "";
  return {
    key: `ex:${lesson.id}/${ex.n}${focus ? `/${focus}` : ""}`,
    lesson: lesson.title,
    number: ex.number,
    title: ex.title,
    instruction: plainLine(ex.instruction),
    english: ex.english,
    ...(ex.example ? { example: plainLine(ex.example) } : null),
    items,
    ...(focus ? { focus } : null),
    ...(last ? { last } : null),
    ...(text ? { text } : null),
  };
}

// ── The page ─────────────────────────────────────────────────────────────
export default function ExercisesPage({ user, view, setView, onNeedKey, onTutorContext }) {
  const store = useAnswers(user?.id);
  const [again, setAgain] = useState(() => readAgain(user?.id));
  const startAgain = (lessonId, n) => {
    const next = { ...again, [`${lessonId}/${n}`]: new Date().toISOString() };
    setAgain(next);
    writeAgain(user?.id, next);
    store.clearExercise(`${lessonId}/${n}/`);
  };
  const lesson = view?.lesson ? EXERCISES_BY_ID[view.lesson] : null;
  const scrollRef = useRef(null);
  useEffect(() => { scrollRef.current?.scrollTo?.(0, 0); }, [view?.lesson]);
  // On the list of lessons no exercise is on screen.
  useEffect(() => { if (!lesson) onTutorContext?.(null); }, [lesson, onTutorContext]);

  return (
    <div style={S.scroll} ref={scrollRef} data-exercises-page={lesson ? "lesson" : "list"}>
      <div style={S.page}>
        {store.missing && (
          <p style={S.notice} data-exercises-missing>
            Your answers are marked but not kept yet: the database needs one update. Run migration_022_spanish_exercises.sql in Supabase, then reload.
          </p>
        )}
        {store.error && <p style={S.notice}>{store.error}</p>}
        {lesson ? (
          <LessonExercises
            key={lesson.id}
            user={user}
            lesson={lesson}
            store={store}
            again={again}
            startAgain={startAgain}
            onBack={() => setView({ lesson: null })}
            onNeedKey={onNeedKey}
            onTutorContext={onTutorContext}
          />
        ) : (
          <>
            <h1 style={S.h1}>Exercises</h1>
            <p style={S.intro}>
              The written exercises from each lesson’s sheet. Type your answer and press Enter: the answer key marks it straight away, and Claude marks any answer the key doesn’t have.
            </p>
            {EXERCISE_LESSONS.map((l) => {
              const t = tally(l, store.latest, again);
              return (
                <button key={l.id} type="button" className="ex-row" style={S.row} onClick={() => setView({ lesson: l.id })} data-exercise-lesson={l.id}>
                  <span style={S.rowMain}>
                    <span style={S.rowTitle}>{l.title}</span>
                    <span style={S.rowCount}>{store.loading ? `${t.items} questions` : countLine(t)}</span>
                  </span>
                  <span style={S.bar} aria-hidden="true">
                    <span style={{ ...S.barFill, width: `${t.items ? Math.round((100 * t.answered) / t.items) : 0}%` }} />
                  </span>
                </button>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

// ── One lesson's exercises ───────────────────────────────────────────────
function LessonExercises({ user, lesson, store, again, startAgain, onBack, onNeedKey, onTutorContext }) {
  const [showText, setShowText] = useState(false);
  const text = LESSON_TEXTS[lesson.textOf] || null;
  const t = tally(lesson, store.latest, again);
  const listRef = useRef(null);

  // The item with the cursor, which the tutor is told about with its
  // exercise. Kept when the cursor goes to the tutor's own box.
  const [focusKey, setFocusKey] = useState(null);
  const onFocusItem = (e) => {
    const key = e.target?.closest?.("[data-ex-item]")?.dataset?.exItem;
    if (key) setFocusKey(key);
  };
  const tutorFor = useCallback(
    (key) => tutorExercise(lesson, store.latest, again, key, showText),
    [lesson, store.latest, again, showText]
  );
  const tutorCtx = useMemo(() => tutorFor(focusKey), [tutorFor, focusKey]);
  const tellRef = useRef(onTutorContext);
  tellRef.current = onTutorContext;
  const sentRef = useRef("");
  const tellTutor = useCallback((ctx) => {
    const sig = ctx ? JSON.stringify(ctx) : "";
    if (sig === sentRef.current) return;
    sentRef.current = sig;
    tellRef.current?.(ctx);
  }, []);
  useEffect(() => { tellTutor(tutorCtx); }, [tutorCtx, tellTutor]);
  // Leaving the lesson leaves no exercise on screen. What was sent is
  // forgotten too, so the lesson opened again sends its exercise afresh.
  useEffect(() => () => { sentRef.current = ""; tellRef.current?.(null); }, []);

  // After an answer is sent, the next item still to answer gets the cursor.
  const focusNext = useCallback((fromKey) => {
    const items = [...(listRef.current?.querySelectorAll("[data-ex-item]") || [])];
    const at = items.findIndex((el) => el.dataset.exItem === fromKey);
    const next = items.slice(at + 1).find((el) => el.dataset.exState === "open");
    const input = next?.querySelector("input, textarea, button[data-truth]");
    if (input) {
      input.focus({ preventScroll: true });
      input.scrollIntoView?.({ block: "nearest", behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <button type="button" style={S.back} onClick={onBack} data-exercises-back>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        All exercises
      </button>
      <h1 style={S.h1}>{lesson.title}</h1>
      <div style={S.byline}>
        <span data-exercises-count>{countLine(t)}</span>
        {text && (
          <button type="button" style={showText ? { ...S.textBtn, ...S.textBtnOn } : S.textBtn} onClick={() => setShowText((v) => !v)} aria-expanded={showText} data-lesson-text-toggle>
            {showText ? "Hide the lesson text" : "Lesson text"}
          </button>
        )}
      </div>
      {showText && text && <LessonText lines={text} />}
      <div ref={listRef} onFocus={onFocusItem}>
        {lesson.exercises.map((ex) => (
          <ExerciseBlock
            key={ex.n}
            user={user}
            lesson={lesson}
            exercise={ex}
            store={store}
            again={again}
            onStartAgain={() => startAgain(lesson.id, ex.n)}
            focusNext={focusNext}
            onNeedKey={onNeedKey}
          />
        ))}
      </div>
    </>
  );
}

function LessonText({ lines }) {
  return (
    <div style={S.text} data-lesson-text>
      {lines.map((l, i) =>
        l.title ? <div key={i} style={S.textTitle}>{l.title}</div>
        : l.scene ? <p key={i} style={S.textScene}>{l.scene}</p>
        : l.question ? <p key={i} style={S.textQ}>{l.question}</p>
        : l.who ? <p key={i} style={S.textLine}><b style={S.textWho}>{l.who}</b> {l.text}</p>
        : <p key={i} style={S.textLine}>{l.text}</p>
      )}
    </div>
  );
}

// Underlining on the sheet is kept as [[…]], and line breaks as \n.
function Rich({ text }) {
  const parts = String(text || "").split(/(\[\[[^\]]*\]\])/);
  return parts.map((p, i) => {
    const u = /^\[\[([^\]]*)\]\]$/.exec(p);
    const body = u ? u[1] : p;
    const lines = body.split("\n");
    const out = lines.map((ln, j) => <Fragment key={j}>{j > 0 && <br />}{ln}</Fragment>);
    return u ? <u key={i}>{out}</u> : <Fragment key={i}>{out}</Fragment>;
  });
}

function ExerciseBlock({ user, lesson, exercise, store, again, onStartAgain, focusNext, onNeedKey }) {
  let answered = 0, right = 0;
  const keys = exercise.items.map((_, i) => itemKey(lesson.id, exercise.n, i));
  const shown = keys.map((k) => shownAnswer(store.latest, again, lesson.id, exercise.n, k));
  for (const a of shown) if (a && !a.pending) { answered++; if (a.verdict === "right") right++; }
  return (
    <section style={S.ex} data-exercise={exercise.n}>
      <div style={S.exHead}>
        <span style={S.exNum}>Ejercicio {exercise.number}</span>
        <span style={S.exTitle}>{exercise.title}</span>
        {answered > 0 && (
          <span style={S.exScore} data-exercise-score>{`${right} of ${exercise.items.length} right`}</span>
        )}
      </div>
      <div style={S.exInstr}><Rich text={exercise.instruction} /></div>
      <div style={S.exEnglish}>{exercise.english}</div>
      {exercise.example && <div style={S.exExample}><Rich text={exercise.example} /></div>}
      <ol style={S.items}>
        {exercise.items.map((item, i) => (
          <Fragment key={keys[i]}>
            {item.heading && <li style={S.heading} aria-hidden="true">{item.heading}</li>}
            <Item
              user={user}
              item={item}
              itemKeyValue={keys[i]}
              number={i + 1}
              answer={shown[i]}
              store={store}
              focusNext={focusNext}
              onNeedKey={onNeedKey}
            />
          </Fragment>
        ))}
      </ol>
      {exercise.footnote && <div style={S.footnote}>{exercise.footnote}</div>}
      {answered > 0 && (
        <button type="button" style={S.again} onClick={onStartAgain} title="Your earlier answers are kept" data-exercise-again>
          Start this exercise again
        </button>
      )}
    </section>
  );
}

const emptyTyped = (item) => {
  const kind = kindOf(item);
  return kind === "gaps" ? item.gaps.map(() => "") : kind === "truth" ? { truth: null, text: "" } : "";
};

// Every short gap is the same width, so its size doesn't give the answer
// away; a long answer gets the room it needs.
const gapWidth = (list) => `${Math.max(9, Math.min(24, Math.max(...list.map((s) => s.length)) + 2))}ch`;

let ticketSeq = 0;

function Item({ user, item, itemKeyValue: key, number, answer, store, focusNext, onNeedKey }) {
  const kind = kindOf(item);
  const draftKey = `${user?.id}|${key}`;
  const [typed, setTypedState] = useState(() => drafts.get(draftKey) ?? emptyTyped(item));
  const setTyped = (v) => { drafts.set(draftKey, v); setTypedState(v); };
  const [problem, setProblem] = useState(null);
  const [retrying, setRetrying] = useState(false);
  // How much of the hint shows: none, then one more letter of each word per
  // press. It goes once the item is answered, so "Try again" starts without.
  const [hint, setHint] = useState(0);
  const levels = hintLevels(item);
  const firstInput = useRef(null);
  const itemRef = useRef(null);
  const open = !answer || retrying;
  // "Try again" puts the cursor straight back in the item.
  useLayoutEffect(() => { if (retrying) firstInput.current?.focus(); }, [retrying]);

  // The cursor stays where it was typing; pressed from outside the item, it
  // goes to the item's first empty box.
  const moreHint = () => {
    setHint((h) => Math.min(h + 1, levels));
    const li = itemRef.current;
    if (li && !li.contains(document.activeElement)) {
      const boxes = [...li.querySelectorAll("input, textarea")];
      (boxes.find((el) => !el.value.trim()) || boxes[0])?.focus({ preventScroll: true });
    }
  };

  const check = async () => {
    if (!isAnswered(item, typed)) return;
    setProblem(null);
    setRetrying(false);
    setHint(0);
    const ticket = ++ticketSeq;
    const now = new Date().toISOString();
    const line = typedText(item, typed);
    const byKey = markByKey(item, typed);
    // The key's verdict is shown at once; Claude's is waited for.
    store.record(byKey
      ? { key, typed: line, verdict: byKey.verdict, markedBy: "key", note: "", correct: "", answeredAt: now, ticket, saving: true }
      : { key, typed: line, pending: true, answeredAt: now, ticket });
    const sent = typed;
    drafts.delete(draftKey);
    setTypedState(emptyTyped(item));
    focusNext(key);
    try {
      const { answer: a, saved, missing } = await markAnswer({ key, typed: sent }, { supabase, user });
      if (missing) { store.missing = true; }
      store.record({ ...a, answeredAt: a.answeredAt || now, ticket, unsaved: !saved && !missing });
    } catch (e) {
      if (byKey) {
        store.record({ key, typed: line, verdict: byKey.verdict, markedBy: "key", note: "", correct: "", answeredAt: now, ticket, unsaved: true });
      } else {
        // Nothing was marked: the answer goes back in the box to try again.
        store.forget(key, ticket);
        drafts.set(draftKey, sent);
        setTypedState(sent);
        setProblem({ message: e?.message || "Couldn’t mark that. Try again.", code: e?.code || "" });
      }
    }
  };

  const onEnter = (e) => {
    if (e.key !== "Enter" || e.shiftKey) return;
    if (item.long && !(e.metaKey || e.ctrlKey)) return;
    e.preventDefault();
    if (kind === "gaps") {
      const i = Number(e.currentTarget.dataset.gap);
      const empty = typed.findIndex((v, j) => j > i && !v.trim());
      if (!typed[i]?.trim()) return;
      if (empty >= 0 && !typed.every((v) => v.trim())) {
        e.currentTarget.parentElement?.querySelectorAll("input[data-gap]")?.[empty]?.focus();
        return;
      }
    }
    check();
  };

  const state = !open ? (answer.pending ? "checking" : "done") : "open";
  return (
    <li ref={itemRef} style={S.item} data-ex-item={key} data-ex-state={state} data-ex-kind={kind}>
      <span style={S.itemNum}>{number}</span>
      <div style={S.itemBody}>
        {open ? (
          <>
            {kind === "gaps" ? (
              <div style={S.prompt}>
                {String(item.prompt).split("___").map((part, i, all) => (
                  <Fragment key={i}>
                    <Rich text={part} />
                    {i < all.length - 1 && (
                      <input
                        ref={i === 0 ? firstInput : undefined}
                        style={{ ...S.gap, width: gapWidth(item.gaps[i]) }}
                        value={typed[i] || ""}
                        onChange={(e) => setTyped(typed.map((v, j) => (j === i ? e.target.value : v)))}
                        onKeyDown={onEnter}
                        data-gap={i}
                        aria-label={`Blank ${i + 1}`}
                        autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck={false}
                        lang="es"
                      />
                    )}
                  </Fragment>
                ))}
              </div>
            ) : (
              <div style={S.prompt}><Rich text={item.prompt} /></div>
            )}
            {kind === "truth" && (
              <div style={S.truthRow}>
                {[[true, "Verdadero"], [false, "Falso"]].map(([v, label]) => (
                  <button
                    key={label}
                    ref={v ? firstInput : undefined}
                    type="button"
                    data-truth={String(v)}
                    aria-pressed={typed.truth === v}
                    style={{ ...S.truthBtn, ...(typed.truth === v ? S.truthBtnOn : S.truthBtnOff) }}
                    onClick={() => setTyped({ ...typed, truth: v })}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
            {kind !== "gaps" && (
              <div style={S.ansRow}>
                {item.long ? (
                  <textarea
                    ref={kind === "truth" ? undefined : firstInput}
                    style={S.textarea}
                    rows={6}
                    value={typed}
                    placeholder="Your answer (⌘ Enter to check)"
                    onChange={(e) => setTyped(e.target.value)}
                    onKeyDown={onEnter}
                    lang="es"
                    spellCheck={false}
                    aria-label="Your answer"
                  />
                ) : (
                  <input
                    ref={kind === "truth" ? undefined : firstInput}
                    style={S.input}
                    value={kind === "truth" ? typed.text : typed}
                    placeholder={kind === "truth" ? "A sentence that confirms or corrects it" : "Your answer"}
                    onChange={(e) => setTyped(kind === "truth" ? { ...typed, text: e.target.value } : e.target.value)}
                    onKeyDown={onEnter}
                    autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck={false}
                    lang="es"
                    aria-label="Your answer"
                  />
                )}
                <button
                  type="button"
                  style={{ ...S.btn, ...(isAnswered(item, typed) ? null : S.btnOff) }}
                  disabled={!isAnswered(item, typed)}
                  onClick={check}
                  data-ex-check
                >
                  Check
                </button>
              </div>
            )}
            {hint > 0 && (
              <div style={S.hintLine} data-ex-hint>
                <b>Hint:</b> <span style={S.hintText}>{hintText(item, hint)}</span>
              </div>
            )}
            {/* Only once something is typed: a sheet of empty gaps each with
                its own button was a wall of buttons. */}
            {kind === "gaps" && typed.some((v) => v.trim()) && (
              <div style={S.gapCheck}>
                <button
                  type="button"
                  style={{ ...S.btnSmall, ...(isAnswered(item, typed) ? null : S.btnOff) }}
                  disabled={!isAnswered(item, typed)}
                  onClick={check}
                  data-ex-check
                >
                  Check
                </button>
                <span style={S.hint}>or press Enter</span>
              </div>
            )}
            {problem && (
              <div style={S.inlineError} role="alert">
                {problem.message}
                {(problem.code === BYOK_REQUIRED || problem.code === BAD_KEY) && onNeedKey && (
                  <button type="button" style={S.errorAction} onClick={onNeedKey}>
                    {problem.code === BAD_KEY ? "Update your key" : "Connect Claude account"}
                  </button>
                )}
              </div>
            )}
          </>
        ) : (
          <Marked item={item} answer={answer} onRetry={() => setRetrying(true)} />
        )}
      </div>
      {/* Still there, unseen, once the whole answer shows, so the sentence
          beside it doesn't move. */}
      {open && (
        <button
          type="button"
          style={{ ...S.hintBtn, ...(hint >= levels ? S.hintBtnGone : null) }}
          onMouseDown={(e) => e.preventDefault()}
          onClick={moreHint}
          disabled={hint >= levels}
          title="Shows the first letter of each word of the answer, then one more letter each time"
          data-ex-hint-btn
        >
          {hint ? "Show more" : "Hint"}
        </button>
      )}
    </li>
  );
}

const VERDICT_LABEL = { right: "Right", almost: "Almost", wrong: "Wrong" };

// The answer as typed, the blanks' words picked out.
function TypedLine({ text }) {
  // Underlining from the sheet ([[…]]) is left to Rich.
  const parts = String(text || "").split(/(\[\[[^\]]*\]\]|\[[^\]]*\])/);
  return parts.map((p, i) => {
    const m = !p.startsWith("[[") && /^\[([^\]]*)\]$/.exec(p);
    return m ? <b key={i} style={S.typedGap}>{m[1]}</b> : <Fragment key={i}><Rich text={p} /></Fragment>;
  });
}

function Marked({ item, answer, onRetry }) {
  const kind = kindOf(item);
  const [why, setWhy] = useState(false);
  if (answer.pending) {
    return (
      <>
        {kind !== "gaps" && <div style={S.prompt}><Rich text={item.prompt} /></div>}
        <div style={S.mine}><TypedLine text={answer.typed} /></div>
        <div style={S.checking} data-ex-checking>Claude is checking this answer…</div>
      </>
    );
  }
  const v = answer.verdict;
  // The verdict alone, and under a miss one line, the answer corrected (owner,
  // 2026-10-25: "get rid of the description after the right/wrong tag", "only
  // need corrected, not the answer. change to correct:"). The two used to
  // differ: "Corrected: alrededor del mundo", "The answer: por el mundo". It
  // is Claude's correction of what was typed, or, where there is none (an
  // accent the key caught, a true-or-false pressed the wrong way), the key's
  // answer. Claude's sentence saying why is still kept with the answer, and
  // shows under a miss only when "Why?" is pressed (owner, 2026-10-26:
  // "there should also be a "why was my answer wrong" option"); for a miss
  // the key marked, the key says why (keyReason).
  const correct = v === "right" ? "" : answer.correct || keyAnswer(item);
  const reason = v === "right" ? "" : answer.note || keyReason(item, answer.typed);
  return (
    <>
      {kind !== "gaps" && <div style={S.prompt}><Rich text={item.prompt} /></div>}
      <div style={S.mine} data-ex-typed><TypedLine text={answer.typed} /></div>
      <div style={S.fb}>
        <span style={{ ...S.verdict, ...VERDICT_STYLE[v] }} data-ex-verdict={v}>{VERDICT_LABEL[v]}</span>
        {reason && !why && (
          <button type="button" style={S.link} onClick={() => setWhy(true)} data-ex-why>Why?</button>
        )}
      </div>
      {correct && (
        <div style={S.line} data-ex-correct><b>Correct:</b> {correct}</div>
      )}
      {why && reason && (
        <div style={S.line} data-ex-reason><b>Why:</b> {reason}</div>
      )}
      {answer.unsaved && <div style={S.unsaved}>This answer was marked but not saved, so it won’t be here next time.</div>}
      <button type="button" style={S.retry} onClick={onRetry} data-ex-retry>Try again</button>
    </>
  );
}

// ── Styles ───────────────────────────────────────────────────────────────
// The Podcasts page's look (src/PodcastsPage.jsx): the same page width,
// headings, verdict colours and buttons.
const LINE = "rgba(3,22,50,0.07)";
const OK_INK = "#2f6f5e";
const OK_BG = "#e3efe9";
const PART_INK = "#8a5a00";
const PART_BG = "#fbe9d0";
const VERDICT_STYLE = {
  right: { background: OK_BG, color: OK_INK },
  almost: { background: PART_BG, color: PART_INK },
  wrong: { background: T.color.errorContainer, color: T.color.onErrorContainer },
};

// A small underlined button that reads as a link: "Try again", "Hint", "Why?".
const LINK = { padding: 0, border: "none", background: "transparent", fontFamily: T.font.sans, fontSize: 11.5, fontWeight: 600, color: T.color.onSurfaceVariant, cursor: "pointer", textDecoration: "underline", textDecorationColor: "rgba(3,22,50,0.25)", textUnderlineOffset: 2 };

const S = {
  scroll: { flex: 1, minHeight: 0, overflowY: "auto", boxSizing: "border-box" },
  page: { maxWidth: 760, marginTop: 0, marginRight: "auto", marginBottom: 0, marginLeft: "auto", paddingTop: 36, paddingRight: 32, paddingBottom: 90, paddingLeft: 32, boxSizing: "border-box", fontFamily: T.font.sans, color: T.color.onSurface },
  h1: { fontFamily: T.font.serif, fontWeight: 600, fontSize: 30, color: T.color.primary, letterSpacing: "-0.02em", margin: "0 0 20px", lineHeight: 1.2, paddingRight: 56 },
  intro: { margin: "-6px 0 22px", fontSize: 14, lineHeight: 1.55, color: T.color.onSurfaceVariant, maxWidth: 600 },
  notice: { margin: "0 0 18px", padding: "14px 18px", background: T.color.surfaceLowest, border: `1px solid ${LINE}`, borderRadius: T.radius.xl, fontSize: 13.5, lineHeight: 1.55, color: T.color.primary },

  row: { display: "flex", alignItems: "center", gap: 18, width: "100%", padding: "14px 18px", background: T.color.surfaceLowest, borderWidth: 1, borderStyle: "solid", borderColor: LINE, borderRadius: T.radius.xl, marginBottom: 8, cursor: "pointer", textAlign: "left", fontFamily: T.font.sans, boxSizing: "border-box" },
  rowMain: { display: "block", flex: 1, minWidth: 0 },
  rowTitle: { display: "block", fontFamily: T.font.serif, fontSize: 15, fontWeight: 600, color: T.color.primary, lineHeight: 1.35 },
  rowCount: { display: "block", marginTop: 4, fontSize: 12, color: T.color.onSurfaceVariant, fontVariantNumeric: "tabular-nums" },
  bar: { position: "relative", display: "block", width: 90, height: 6, flexShrink: 0, background: T.color.surfaceHigh, borderRadius: 3, overflow: "hidden" },
  barFill: { position: "absolute", left: 0, top: 0, bottom: 0, background: T.color.secondary, borderRadius: 3 },

  back: { display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 14px 6px 11px", marginBottom: 18, background: "transparent", borderWidth: 1, borderStyle: "solid", borderColor: LINE, borderRadius: T.radius.full, cursor: "pointer", fontFamily: T.font.sans, fontSize: 11.5, color: T.color.onSurface, fontWeight: 700, letterSpacing: "0.01em" },
  byline: { display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap", fontSize: 13, color: T.color.onSurfaceVariant, margin: "-12px 0 20px", fontVariantNumeric: "tabular-nums" },
  textBtn: { padding: "5px 12px", borderWidth: 1, borderStyle: "solid", borderColor: "rgba(3,22,50,0.15)", borderRadius: T.radius.full, background: T.color.surfaceLowest, fontFamily: T.font.sans, fontSize: 11.5, fontWeight: 700, color: T.color.primary, cursor: "pointer" },
  textBtnOn: { background: T.color.primary, borderColor: T.color.primary, color: T.color.onPrimary },
  text: { padding: "16px 20px", marginBottom: 20, background: T.color.surfaceLow, borderRadius: T.radius.xl, fontFamily: T.font.serif, fontSize: 15, lineHeight: 1.65, color: T.color.primary },
  textTitle: { fontWeight: 700, fontSize: 15.5, margin: "0 0 8px" },
  textScene: { margin: "0 0 10px", fontStyle: "italic", color: T.color.onSurfaceVariant },
  textQ: { margin: "10px 0 2px", fontWeight: 700 },
  textLine: { margin: "0 0 6px", whiteSpace: "pre-wrap" },
  textWho: { fontFamily: T.font.sans, fontSize: 12.5, color: T.color.secondary, marginRight: 4 },

  ex: { padding: "20px 22px 18px", background: T.color.surfaceLowest, borderWidth: 1, borderStyle: "solid", borderColor: LINE, borderRadius: T.radius.xl, marginBottom: 16 },
  exHead: { display: "flex", alignItems: "baseline", gap: 10, marginBottom: 8 },
  exNum: { fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: T.color.secondary },
  exTitle: { fontFamily: T.font.serif, fontSize: 16, fontWeight: 600, color: T.color.primary },
  exScore: { marginLeft: "auto", fontSize: 12, fontWeight: 700, color: OK_INK, fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" },
  exInstr: { fontFamily: T.font.serif, fontSize: 14.5, fontStyle: "italic", color: T.color.primary, lineHeight: 1.5 },
  exEnglish: { fontSize: 12.5, color: T.color.onSurfaceVariant, marginTop: 3, lineHeight: 1.5 },
  exExample: { marginTop: 10, padding: "8px 12px", background: T.color.surfaceLow, borderRadius: T.radius.lg, fontSize: 13.5, color: T.color.primary, lineHeight: 1.5 },
  footnote: { marginTop: 8, fontSize: 12, color: T.color.onSurfaceVariant },
  items: { listStyle: "none", margin: "14px 0 0", padding: 0 },
  heading: { margin: "14px 0 2px", fontSize: 12, fontWeight: 800, letterSpacing: "0.06em", color: T.color.primary },
  item: { display: "flex", gap: 12, padding: "12px 0", borderTop: `1px solid ${LINE}` },
  itemNum: { width: 22, flexShrink: 0, paddingTop: 2, fontSize: 12, fontWeight: 700, color: "rgba(3,22,50,0.4)", fontVariantNumeric: "tabular-nums" },
  itemBody: { flex: 1, minWidth: 0 },
  prompt: { fontFamily: T.font.serif, fontSize: 15.5, lineHeight: 1.9, color: T.color.primary },
  gap: { display: "inline-block", margin: "0 4px", padding: "1px 6px", borderWidth: 0, borderBottomWidth: 2, borderStyle: "solid", borderColor: "rgba(3,22,50,0.25)", borderRadius: 0, background: "rgba(3,22,50,0.035)", fontFamily: T.font.serif, fontSize: 15.5, color: T.color.primary, outline: "none", boxSizing: "content-box" },
  gapCheck: { display: "flex", alignItems: "center", gap: 10, marginTop: 6 },
  hint: { fontSize: 11.5, color: T.color.onSurfaceVariant },
  btnSmall: { padding: "6px 13px", border: "none", borderRadius: T.radius.md, background: T.gradient.ink, color: T.color.onPrimary, fontFamily: T.font.sans, fontWeight: 700, fontSize: 11.5, cursor: "pointer", whiteSpace: "nowrap", opacity: 1 },
  ansRow: { display: "flex", gap: 10, marginTop: 8, alignItems: "flex-end" },
  input: { flex: 1, minWidth: 0, padding: "9px 12px", borderWidth: 1, borderStyle: "solid", borderColor: "rgba(3,22,50,0.14)", borderRadius: T.radius.lg, background: T.color.surfaceLowest, fontFamily: T.font.sans, fontSize: 14, color: T.color.onSurface, outline: "none", boxSizing: "border-box" },
  textarea: { flex: 1, minWidth: 0, resize: "vertical", padding: "10px 12px", borderWidth: 1, borderStyle: "solid", borderColor: "rgba(3,22,50,0.14)", borderRadius: T.radius.lg, background: T.color.surfaceLowest, fontFamily: T.font.sans, fontSize: 14, lineHeight: 1.5, color: T.color.onSurface, outline: "none", boxSizing: "border-box" },
  btn: { padding: "9px 16px", border: "none", borderRadius: T.radius.md, background: T.gradient.ink, color: T.color.onPrimary, fontFamily: T.font.sans, fontWeight: 700, fontSize: 12.5, cursor: "pointer", whiteSpace: "nowrap", opacity: 1 },
  btnOff: { opacity: 0.35, cursor: "default" },
  truthRow: { display: "flex", gap: 8, marginTop: 8 },
  truthBtn: { padding: "6px 14px", borderWidth: 1, borderStyle: "solid", borderRadius: T.radius.full, fontFamily: T.font.sans, fontSize: 12, fontWeight: 700, cursor: "pointer" },
  truthBtnOn: { background: T.color.primary, borderColor: T.color.primary, color: T.color.onPrimary },
  truthBtnOff: { background: T.color.surfaceLowest, borderColor: "rgba(3,22,50,0.15)", color: T.color.primary },
  hintBtn: { ...LINK, flexShrink: 0, alignSelf: "flex-start", marginTop: 7, whiteSpace: "nowrap" },
  hintBtnGone: { visibility: "hidden" },
  hintLine: { marginTop: 8, fontSize: 13.5, lineHeight: 1.6, color: T.color.primary },
  // Monospaced and spaced out, so every hidden letter is its own _ to count.
  hintText: { fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace", fontSize: 13.5, letterSpacing: "0.12em", whiteSpace: "pre-wrap" },
  inlineError: { marginTop: 8, fontSize: 12.5, color: T.color.error, lineHeight: 1.5 },
  errorAction: { marginLeft: 8, padding: "4px 10px", borderWidth: 1, borderStyle: "solid", borderColor: "rgba(3,22,50,0.2)", borderRadius: T.radius.md, background: T.color.surfaceLowest, color: T.color.primary, fontFamily: T.font.sans, fontSize: 11.5, fontWeight: 700, cursor: "pointer" },

  mine: { marginTop: 4, paddingLeft: 12, borderLeft: `3px solid ${T.color.surfaceHigh}`, fontFamily: T.font.serif, fontSize: 15, lineHeight: 1.6, color: T.color.onSurface, whiteSpace: "pre-wrap" },
  typedGap: { color: T.color.secondary, fontWeight: 700 },
  checking: { marginTop: 8, fontSize: 12.5, color: T.color.onSurfaceVariant, fontStyle: "italic" },
  fb: { marginTop: 8, fontSize: 13.5, lineHeight: 1.6, color: T.color.onSurface },
  verdict: { display: "inline-block", padding: "2px 10px", marginRight: 8, borderRadius: T.radius.full, fontSize: 11.5, fontWeight: 800 },
  line: { marginTop: 6, fontSize: 13.5, lineHeight: 1.55, color: T.color.primary },
  unsaved: { marginTop: 6, fontSize: 12, color: T.color.onSurfaceVariant },
  link: LINK,
  retry: { ...LINK, marginTop: 6 },
  again: { marginTop: 12, padding: "7px 14px", borderWidth: 1, borderStyle: "solid", borderColor: "rgba(3,22,50,0.15)", borderRadius: T.radius.md, background: "transparent", color: T.color.primary, fontFamily: T.font.sans, fontWeight: 700, fontSize: 12, cursor: "pointer" },
};
