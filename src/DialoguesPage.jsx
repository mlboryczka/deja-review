// The Dialogues module (Spanish, test app). Laura's advice: go over each
// lesson's text several times, and a good way is to read the English and
// translate it back into Spanish (owner, 2026-11-07: "it's a third module.
// each dialogue from each lesson. let's do typing to start.").
//
// Two pages: Dialogues, the lessons' texts, and one lesson's text. It shows
// the sheet's English a sentence at a time. Type
// the Spanish and press Enter: the answer key marks it at once, Claude marks
// anything the key doesn't have (the same marking as Exercises,
// api/_lib/exercises.js), and the next sentence is ready, so the text builds
// up as you go. Any correct Spanish is Right, and the text's own wording always
// shows. A sentence that wasn't Right comes back once at the end of the round.
//
// The app never asks for a text to be done again (owner, 2026-11-07: "the app
// shouldn't ask me to do a dialogue again"): "Go again" is there for whenever
// the student wants it, and each morning every text starts from its first
// sentence. Rounds are worked out from the answers alone
// (src/lib/dialogueRounds.js), which are kept with the exercises'
// (es_exercise_answers) under keys of their own.
//
// As with Exercises, the shell (FlashcardApp) owns which page is showing and
// the Lesson notes panel, and a lesson's page tells the tutor what is on screen
// (onTutorContext), a text being told as an exercise with no number. A missed
// sentence has "Ask the tutor" beside "Why?", as a missed answer on Exercises
// does (openChat).

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, useSyncExternalStore, Fragment } from "react";
import { supabase } from "./supabase";
import { T } from "./theme";
import { DIALOGUES, DIALOGUES_BY_ID, DIALOGUE_OF } from "./data/exercises/es/dialogues.js";
import { DIALOGUE_GROUPS } from "./data/exercises/es/dialogueTitles.js";
import { stageIds } from "./data/lessons/es/stages.js";
import { itemKey, parseItemKey, isAnswered, markByKey, typedText, keyReason, hintText, hintLevels, plain, markedNow, findItem, countsAsRight } from "./lib/exerciseMarking.js";
import { markAnswer, loadAnswers } from "./lib/exerciseApi.js";
import { roundsOf, nextSentence, dialogueStatus, statusLine } from "./lib/dialogueRounds.js";
import { BYOK_REQUIRED, BAD_KEY } from "./lib/anthropicKey";
import { localISODate } from "./lib/studyDay";

// ── The answers, kept per user for as long as the page is open ───────────
// Outside React, as on Exercises, so a mark still on its way lands when it
// comes back even if the page was left meanwhile. Every answer is held, not
// only the latest, because a round is worked out from all of them.
const stores = new Map();
function storeFor(userId) {
  if (!stores.has(userId)) {
    const s = { rows: {}, problems: {}, loading: true, missing: false, error: null, listeners: new Set(), version: 0, started: false };
    s.emit = () => { s.version++; s.listeners.forEach((l) => l()); };
    // An answer given on this page carries a ticket: its mark replaces it.
    s.record = (row) => {
      const id = parseItemKey(row.key)?.lesson;
      if (!id) return;
      const list = s.rows[id] || [];
      const at = row.ticket ? list.findIndex((r) => r.ticket === row.ticket) : -1;
      s.rows = { ...s.rows, [id]: at >= 0 ? list.map((r, i) => (i === at ? row : r)) : [...list, row] };
      s.emit();
    };
    s.forget = (key, ticket) => {
      const id = parseItemKey(key)?.lesson;
      s.rows = { ...s.rows, [id]: (s.rows[id] || []).filter((r) => r.ticket !== ticket) };
      s.emit();
    };
    s.setProblem = (key, problem) => {
      s.problems = { ...s.problems, [key]: problem };
      s.emit();
    };
    stores.set(userId, s);
  }
  return stores.get(userId);
}
function useRows(userId) {
  const s = storeFor(userId);
  useSyncExternalStore(
    useCallback((l) => { s.listeners.add(l); return () => s.listeners.delete(l); }, [s]),
    () => s.version
  );
  useEffect(() => {
    if (s.started || !userId) return;
    s.started = true;
    loadAnswers({ supabase, userId, dialogues: true }).then(({ answers, missing, error }) => {
      // Oldest first; one answered on this page while they loaded is newer
      // than any of them. One kept under an earlier rule shows the verdict the
      // key gives it now (markedNow).
      const rows = {};
      for (const a of answers) {
        const k = parseItemKey(a.key);
        if (k) (rows[k.lesson] ||= []).push({ ...markedNow(findItem(DIALOGUES_BY_ID, a.key)?.item, a), index: k.index });
      }
      for (const [id, list] of Object.entries(s.rows)) rows[id] = [...(rows[id] || []), ...list];
      s.rows = rows;
      s.missing = missing;
      s.error = error ? "Your earlier answers couldn’t be loaded. Reload the page to try again." : null;
      s.loading = false;
      s.emit();
    });
  }, [s, userId]);
  return s;
}
// Signing out drops what this page holds in memory. Here rather than in
// App.jsx's sign-out, which would load this page, and every text with it, for
// everyone.
supabase.auth.onAuthStateChange((event) => {
  if (event !== "SIGNED_OUT") return;
  stores.clear();
  drafts.clear();
});

// What has been typed and not yet checked, so leaving the page loses nothing.
const drafts = new Map();
const NO_ROWS = [];

// ── What the tutor is told ───────────────────────────────────────────────
// The text as an exercise with no number (lib/deckContext.js, exerciseContext):
// every sentence, numbered as on the page, with its Spanish and how it was last
// answered this round. The tutor doesn't give a sentence's Spanish away before
// then (api/chat.js, "An exercise").
const missReason = (item, a) => (a.verdict === "right" ? "" : a.note || keyReason(item, a.typed));

function tutorDialogue(dialogue, tries, focus, asked) {
  let last = 0, lastAt = 0;
  const items = dialogue.items.map((item, i) => {
    const marked = (tries.get(i) || []).filter((r) => !r.pending);
    const a = marked[marked.length - 1] || null;
    const when = a ? Date.parse(a.answeredAt) || 1 : 0;
    if (when && when >= lastAt) { lastAt = when; last = i + 1; }
    return {
      number: i + 1,
      prompt: item.who ? `${item.who}: ${item.prompt}` : item.prompt,
      answer: item.answer,
      answered: !!a,
      ...(a ? { typed: a.typed, verdict: a.verdict, correct: a.verdict === "right" ? "" : item.answer, why: missReason(item, a) } : null),
    };
  });
  return {
    key: `dialogue:${dialogue.lesson}${focus ? `/${focus}` : ""}`,
    lesson: dialogue.title,
    number: 0,
    title: "The lesson's dialogue",
    instruction: dialogue.exercises[0].instruction,
    english: dialogue.exercises[0].english,
    items,
    ...(focus ? { focus } : null),
    ...(asked ? { asked } : null),
    ...(last ? { last } : null),
  };
}

// ── The page ─────────────────────────────────────────────────────────────
export default function DialoguesPage({ user, view, setView, onNeedKey, onTutorContext, openChat, notes = null }) {
  const store = useRows(user?.id);
  const dialogue = view?.lesson ? DIALOGUE_OF[view.lesson] : null;
  const scrollRef = useRef(null);
  useEffect(() => { scrollRef.current?.scrollTo?.(0, 0); }, [view?.lesson]);
  // On the list of lessons no text is on screen.
  useEffect(() => { if (!dialogue) onTutorContext?.(null); }, [dialogue, onTutorContext]);

  return (
    <div style={S.scroll} ref={scrollRef} data-dialogues-page={dialogue ? "lesson" : "list"}>
      <div style={S.page}>
        {store.missing && (
          <p style={S.notice} data-dialogues-missing>
            Your answers are marked but not kept yet: the database needs one update. Run migration_022_spanish_exercises.sql in Supabase, then reload.
          </p>
        )}
        {store.error && <p style={S.notice}>{store.error}</p>}
        {dialogue ? (
          <OneDialogue
            key={dialogue.id}
            user={user}
            dialogue={dialogue}
            store={store}
            scrollRef={scrollRef}
            onBack={() => setView({ lesson: null })}
            onNeedKey={onNeedKey}
            onTutorContext={onTutorContext}
            openChat={openChat}
            notes={notes}
          />
        ) : (
          <DialogueList store={store} onPick={(lesson) => setView({ lesson })} />
        )}
      </div>
    </div>
  );
}

// ── The list ─────────────────────────────────────────────────────────────
// Under the course's four stages, as on Exercises and on the Lessons page.
function DialogueList({ store, onPick }) {
  const today = localISODate();
  const status = useMemo(() => Object.fromEntries(DIALOGUES.map((d) => [
    d.lesson,
    dialogueStatus(d.items.length, store.rows[d.id] || NO_ROWS, today),
  ])), [store.rows, today]);
  const [closedStages, setClosedStages] = useState(() => new Set());
  const toggleStage = (title) => setClosedStages((prev) => {
    const next = new Set(prev);
    if (next.has(title)) next.delete(title); else next.add(title);
    return next;
  });
  const row = (d) => {
    const st = status[d.lesson];
    const count = d.items.length;
    return (
      <button key={d.id} type="button" style={S.row} onClick={() => onPick(d.lesson)} data-dialogue-lesson={d.lesson}>
        <span style={S.rowMain}>
          <span style={S.rowTitle}>{d.title}</span>
          <span style={S.rowCount}>{store.loading ? `${count} sentences` : statusLine(count, st, today)}</span>
        </span>
        {st.done > 0 && (
          <span style={S.bar} aria-hidden="true">
            <span style={{ ...S.barFill, width: `${Math.round((100 * st.done) / count)}%` }} />
          </span>
        )}
      </button>
    );
  };
  return (
    <>
      <h1 style={S.h1}>Dialogues</h1>
      <p style={S.intro}>
        Each lesson’s dialogue in English, to type back into Spanish one sentence at a time.
      </p>
      {DIALOGUE_GROUPS.map((stage) => {
        const closed = closedStages.has(stage.title);
        return (
          <Fragment key={stage.title}>
            <button type="button" style={S.stage} onClick={() => toggleStage(stage.title)} aria-expanded={!closed} data-dialogue-stage={stage.title}>
              {stage.title}
              <span style={closed ? S.stageChevron : { ...S.stageChevron, ...S.stageChevronOpen }} aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </span>
            </button>
            {!closed && stageIds(stage).map((id) => row(DIALOGUE_OF[id]))}
          </Fragment>
        );
      })}
    </>
  );
}

// ── One lesson's text ────────────────────────────────────────────────────
function OneDialogue({ user, dialogue, store, scrollRef, onBack, onNeedKey, onTutorContext, openChat, notes }) {
  const rows = store.rows[dialogue.id] || NO_ROWS;
  const count = dialogue.items.length;
  const today = localISODate();
  const { finished, tries } = useMemo(() => roundsOf(count, rows, today), [count, rows, today]);
  const last = finished[finished.length - 1] || null;
  // A round finished today stays on screen, with how it went, until "Go again"
  // (which notes how many rounds there were when it was pressed) or tomorrow.
  const [againAfter, setAgainAfter] = useState(-1);
  const showLast = !tries.size && !!last && againAfter !== finished.length && localISODate(new Date(last.at)) === today;
  const shown = showLast ? last.tries : tries;
  const next = showLast || store.loading ? null : nextSentence(count, tries);
  const [reading, setReading] = useState(false);

  // The sentence whose "Ask the tutor" was pressed, until the next one is
  // ready: it is what "this one" then means to the tutor. Otherwise that is
  // the sentence being answered.
  const [asked, setAsked] = useState(null);
  useEffect(() => { setAsked(null); }, [next?.index, next?.again]);
  const focus = asked !== null ? asked + 1 : next ? next.index + 1 : 0;
  const tutorCtx = useMemo(
    () => tutorDialogue(dialogue, shown, focus, asked !== null ? asked + 1 : 0),
    [dialogue, shown, focus, asked]
  );
  const tellRef = useRef(onTutorContext);
  tellRef.current = onTutorContext;
  const sentRef = useRef("");
  const tellTutor = useCallback((ctx) => {
    const sig = JSON.stringify(ctx);
    if (sig === sentRef.current) return;
    sentRef.current = sig;
    tellRef.current?.(ctx);
  }, []);
  useEffect(() => { tellTutor(tutorCtx); }, [tutorCtx, tellTutor]);
  // Leaving the lesson leaves no text on screen. What was sent is forgotten
  // too, so the lesson opened again sends its text afresh.
  useEffect(() => () => { sentRef.current = ""; tellRef.current?.(null); }, []);
  // The tutor is told about that sentence at once, and a thread about any other
  // is put away (ChatPanel's `thread`), as on Exercises.
  const askTutor = (index) => {
    setAsked(index);
    const ctx = tutorDialogue(dialogue, shown, index + 1, index + 1);
    tellTutor(ctx);
    openChat({ row_id: ctx.key });
  };

  const doneRef = useRef(null);
  const finishedHere = useRef(finished.length);
  useEffect(() => {
    if (finished.length > finishedHere.current && showLast) doneRef.current?.scrollIntoView?.({ block: "nearest", behavior: "smooth" });
    finishedHere.current = finished.length;
  }, [finished.length, showLast]);

  const goAgain = () => {
    setAgainAfter(finished.length);
    scrollRef.current?.scrollTo?.(0, 0);
  };

  // The sentences that were Wrong the first time, once the first time through
  // is over. They come back under the text, in its order. An Almost doesn’t.
  const firstTimeOver = dialogue.items.every((_, i) => shown.has(i));
  const missed = firstTimeOver
    ? dialogue.items.map((_, i) => i).filter((i) => {
        const first = shown.get(i)[0];
        return !first.pending && !countsAsRight(first.verdict);
      })
    : [];
  const missedShown = missed.filter((i) => shown.get(i).length > 1 || (next?.again && next.index === i));

  const sentence = (index) => ({
    item: dialogue.items[index],
    number: index + 1,
    itemKeyValue: itemKey(dialogue.id, 1, index),
    onAsk: openChat ? () => askTutor(index) : null,
  });

  return (
    <>
      <button type="button" style={S.back} onClick={onBack} data-dialogues-back>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        All dialogues
      </button>
      <h1 style={S.h1}>{dialogue.title}</h1>
      <div style={S.byline}>
        <span data-dialogue-count>
          {`${count} sentences${tries.size ? ` · ${tries.size} done` : ""}`}
        </span>
        <button type="button" style={reading ? { ...S.textBtn, ...S.textBtnOn } : S.textBtn} onClick={() => setReading((v) => !v)} aria-expanded={reading} title="The Spanish and the English, side by side" data-dialogue-read-btn>
          Read it
        </button>
        {notes && (
          <button
            type="button"
            ref={notes.toggleRef}
            style={notes.open ? { ...S.textBtn, ...S.textBtnOn } : S.textBtn}
            onClick={notes.onToggle}
            aria-expanded={notes.open}
            title="The lesson's rules, beside the dialogue"
            data-dialogues-notes-toggle
          >
            Lesson notes
          </button>
        )}
      </div>
      {reading && <ReadIt dialogue={dialogue} />}
      {!store.loading && (
        <section style={S.ex} data-dialogue={dialogue.lesson}>
          {dialogue.heading && <div style={S.exTitle}>{dialogue.heading}</div>}
          <ol style={S.items}>
            {dialogue.lines.map((line, li) => {
              const seen = line.sentences.filter((s) => shown.has(s.index) || (next && !next.again && next.index === s.index));
              if (!seen.length) return null;
              return (
                <Fragment key={li}>
                  {line.who && <li style={S.who} aria-hidden="true">{line.who}</li>}
                  {seen.map((s) => (
                    <SentenceRow
                      key={s.index}
                      {...sentence(s.index)}
                      kind={line.kind}
                      answer={shown.get(s.index)?.[0] || null}
                      user={user}
                      store={store}
                      onNeedKey={onNeedKey}
                    />
                  ))}
                </Fragment>
              );
            })}
          </ol>
        </section>
      )}
      {missedShown.length > 0 && (
        <section style={S.ex} data-dialogue-missed>
          <div style={S.exTitle}>The sentences you missed, once more</div>
          <ol style={S.items}>
            {missedShown.map((i) => (
              <SentenceRow
                key={i}
                {...sentence(i)}
                who={dialogue.items[i].who}
                answer={shown.get(i)[1] || null}
                user={user}
                store={store}
                onNeedKey={onNeedKey}
              />
            ))}
          </ol>
        </section>
      )}
      {showLast && (
        <div ref={doneRef} style={S.done} data-dialogue-done>
          <div style={S.doneLine}>
            {`You went through all ${last.total} sentences, and ${last.total - last.missed} were right the first time.`}
          </div>
          <button type="button" style={S.again} onClick={goAgain} data-dialogue-again>Go again</button>
        </div>
      )}
    </>
  );
}

// The Spanish and the English side by side, line for line. Two columns where
// there's room, one under the other where a side panel or a phone leaves none.
function ReadIt({ dialogue }) {
  return (
    <div style={S.read} data-dialogue-read>
      {dialogue.headingEs && (
        <div style={S.readRow}>
          <div style={S.readTitle} lang="es">{dialogue.headingEs}</div>
          <div style={S.readTitle}>{dialogue.heading}</div>
        </div>
      )}
      {dialogue.lines.map((line, i) => {
        const style = line.kind === "scene" ? S.readScene : line.kind === "question" ? S.readQuestion : S.readLine;
        const side = (who, key) => (
          <div style={style} {...(key === "es" ? { lang: "es" } : null)}>
            {who && <b style={S.readWho}>{who}</b>}{who && " "}
            {line.sentences.map((s) => s[key]).join(" ")}
          </div>
        );
        return (
          <div key={i} style={S.readRow}>
            {side(line.whoEs, "es")}
            {side(line.who, "en")}
          </div>
        );
      })}
    </div>
  );
}

let ticketSeq = 0;

function SentenceRow({ item, number, itemKeyValue: key, kind, who, answer, user, store, onNeedKey, onAsk }) {
  const state = !answer ? "open" : answer.pending ? "checking" : "done";
  const promptStyle = kind === "scene" ? { ...S.prompt, fontStyle: "italic" } : kind === "question" ? { ...S.prompt, fontWeight: 600 } : S.prompt;
  return (
    <li style={S.item} data-dialogue-item={key} data-dialogue-state={state}>
      <span style={S.itemNum}>{number}</span>
      <div style={S.itemBody}>
        {who && <div style={S.whoInline}>{who}</div>}
        <div style={promptStyle}>{item.prompt}</div>
        {answer ? (
          <Marked item={item} answer={answer} onAsk={onAsk} />
        ) : (
          <SentenceBox key={key} item={item} itemKeyValue={key} user={user} store={store} onNeedKey={onNeedKey} />
        )}
      </div>
    </li>
  );
}

function SentenceBox({ item, itemKeyValue: key, user, store, onNeedKey }) {
  const draftKey = `${user?.id}|${key}`;
  const [typed, setTypedState] = useState(() => drafts.get(draftKey) ?? "");
  const setTyped = (v) => { drafts.set(draftKey, v); setTypedState(v); };
  const [hint, setHint] = useState(0);
  const levels = hintLevels(item);
  const problem = store.problems[key] || null;
  const boxRef = useRef(null);

  // The next sentence takes the cursor, unless it's in another box (the
  // tutor's), and comes into view: a frame later, since opening a lesson first
  // scrolls the page to its top, and a round carried on is further down.
  useEffect(() => {
    const active = document.activeElement;
    const elsewhere = /^(INPUT|TEXTAREA)$/.test(active?.tagName || "") && !active.closest("[data-dialogues-page]");
    if (!elsewhere) boxRef.current?.focus({ preventScroll: true });
    const frame = requestAnimationFrame(() => {
      boxRef.current?.closest("li")?.scrollIntoView?.({ block: "nearest", behavior: "smooth" });
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  // A long sentence wraps, and the box grows with it.
  useLayoutEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight + 2}px`;
  }, [typed]);

  const moreHint = () => {
    setHint((h) => Math.min(h + 1, levels));
    boxRef.current?.focus({ preventScroll: true });
  };

  const check = async () => {
    if (!isAnswered(item, typed)) return;
    const index = parseItemKey(key).index;
    const ticket = ++ticketSeq;
    const now = new Date().toISOString();
    const line = typedText(item, typed);
    const byKey = markByKey(item, typed);
    const keyRow = byKey && { key, index, typed: line, verdict: byKey.verdict, markedBy: "key", note: "", correct: byKey.correct || "", answeredAt: now, ticket };
    if (store.problems[key]) store.setProblem(key, null);
    // The key's verdict is shown at once; Claude's is waited for, while the
    // next sentence is ready to type.
    store.record(keyRow || { key, index, typed: line, pending: true, answeredAt: now, ticket });
    drafts.delete(draftKey);
    try {
      const { answer: a, saved, missing } = await markAnswer({ key, typed: line, hints: hint }, { supabase, user });
      if (missing) store.missing = true;
      store.record({ ...a, index, answeredAt: a.answeredAt || now, ticket, unsaved: !saved && !missing });
    } catch (e) {
      if (keyRow) {
        store.record({ ...keyRow, unsaved: true });
      } else {
        // Nothing was marked: the answer goes back in the box to try again,
        // and that sentence is the one to answer again.
        drafts.set(draftKey, line);
        store.setProblem(key, { message: e?.message || "Couldn’t mark that. Try again.", code: e?.code || "" });
        store.forget(key, ticket);
      }
    }
  };

  const onKeyDown = (e) => {
    if (e.key !== "Enter" || e.shiftKey || e.nativeEvent?.isComposing) return;
    e.preventDefault();
    check();
  };

  const ready = isAnswered(item, typed);
  return (
    <>
      <div style={S.ansRow}>
        <textarea
          ref={boxRef}
          style={S.textarea}
          rows={1}
          value={typed}
          placeholder="In Spanish"
          onChange={(e) => setTyped(e.target.value)}
          onKeyDown={onKeyDown}
          lang="es"
          autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck={false}
          aria-label="Your answer, in Spanish"
          data-dialogue-box
        />
        <button
          type="button"
          style={{ ...S.btn, ...(ready ? null : S.btnOff) }}
          disabled={!ready}
          onClick={check}
          data-dialogue-check
        >
          Check
        </button>
      </div>
      {/* Hint under the answer, at its left edge, as on Exercises. */}
      <div style={S.hintRow}>
        {hint < levels && (
          <button
            type="button"
            style={S.hintBtn}
            onMouseDown={(e) => e.preventDefault()}
            onClick={moreHint}
            title="Shows the first letter of each word of the answer, then one more letter each time"
            data-dialogue-hint-btn
          >
            {hint ? "Show more" : "Hint"}
          </button>
        )}
        {hint > 0 && (
          <span style={S.hintLine} data-dialogue-hint>
            <b>Hint:</b> <span style={S.hintText}>{hintText(item, hint)}</span>
          </span>
        )}
      </div>
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
  );
}

const VERDICT_LABEL = { right: "Right", almost: "Almost", wrong: "Wrong" };

// What was typed, then the text's own Spanish, then the verdict and why, in the
// order Exercises shows them (owner, 2026-11-02). The Spanish is "Correct:"
// under a miss, and "In the text:" under an answer that is right in other
// words (or, say, without its accents), since those are the words to learn.
function Marked({ item, answer, onAsk }) {
  const [why, setWhy] = useState(false);
  if (answer.pending) {
    return (
      <>
        <div style={S.mine} lang="es">{answer.typed}</div>
        <div style={S.checking} data-dialogue-checking>Claude is checking this answer…</div>
      </>
    );
  }
  const v = answer.verdict;
  const reason = missReason(item, answer);
  const same = plain(answer.typed) === plain(item.answer);
  return (
    <>
      <div style={S.mine} lang="es" data-dialogue-typed>{answer.typed}</div>
      {v !== "right" && (
        <div style={S.line} lang="es" data-dialogue-correct><b>Correct:</b> {item.answer}</div>
      )}
      {v === "right" && !same && (
        <div style={S.line} lang="es" data-dialogue-text><b>In the text:</b> {item.answer}</div>
      )}
      <div style={S.fb}>
        <span style={{ ...S.verdict, ...VERDICT_STYLE[v] }} data-dialogue-verdict={v}>{VERDICT_LABEL[v]}</span>
        {reason && !why && (
          <button type="button" style={{ ...S.link, marginRight: 12 }} onClick={() => setWhy(true)} data-dialogue-why>Why?</button>
        )}
        {onAsk && v !== "right" && (
          <button type="button" style={S.link} onClick={onAsk} data-tutor-toggle data-dialogue-ask-tutor>Ask the tutor</button>
        )}
      </div>
      {why && reason && (
        <div style={S.line} data-dialogue-reason><b>Why:</b> {reason}</div>
      )}
      {answer.unsaved && <div style={S.unsaved}>This answer was marked but not saved, so it won’t be here next time.</div>}
    </>
  );
}

// ── Styles ───────────────────────────────────────────────────────────────
// The Exercises page's look (src/ExercisesPage.jsx): the same page width,
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

// A small underlined button that reads as a link: "Hint", "Why?".
const LINK = { padding: 0, border: "none", background: "transparent", fontFamily: T.font.sans, fontSize: 11.5, fontWeight: 600, color: T.color.onSurfaceVariant, cursor: "pointer", textDecoration: "underline", textDecorationColor: "rgba(3,22,50,0.25)", textUnderlineOffset: 2 };

const S = {
  scroll: { flex: 1, minHeight: 0, overflowY: "auto", boxSizing: "border-box" },
  page: { maxWidth: 760, marginTop: 0, marginRight: "auto", marginBottom: 0, marginLeft: "auto", paddingTop: 36, paddingRight: 32, paddingBottom: 90, paddingLeft: 32, boxSizing: "border-box", fontFamily: T.font.sans, color: T.color.onSurface },
  h1: { fontFamily: T.font.serif, fontWeight: 600, fontSize: 30, color: T.color.primary, letterSpacing: "-0.02em", margin: "0 0 20px", lineHeight: 1.2, paddingRight: 56 },
  intro: { margin: "-6px 0 22px", fontSize: 14, lineHeight: 1.55, color: T.color.onSurfaceVariant, maxWidth: 600 },
  notice: { margin: "0 0 18px", padding: "14px 18px", background: T.color.surfaceLowest, border: `1px solid ${LINE}`, borderRadius: T.radius.xl, fontSize: 13.5, lineHeight: 1.55, color: T.color.primary },

  // A stage's heading, the same as on Exercises and the Lessons page.
  stage: { display: "flex", alignItems: "center", gap: 10, padding: 0, border: "none", background: "transparent", cursor: "pointer", fontSize: 20, fontWeight: 600, color: T.color.primary, fontFamily: T.font.serif, margin: "32px 0 14px", textAlign: "left" },
  stageChevron: { display: "flex", opacity: 0.6, transition: "transform 0.2s" },
  stageChevronOpen: { transform: "rotate(180deg)" },

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

  read: { padding: "16px 20px", marginBottom: 20, background: T.color.surfaceLow, borderRadius: T.radius.xl, fontFamily: T.font.serif, fontSize: 15, lineHeight: 1.6, color: T.color.primary },
  readRow: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", columnGap: 24, rowGap: 2, marginBottom: 10 },
  readTitle: { fontWeight: 700, fontSize: 15.5 },
  readScene: { fontStyle: "italic", color: T.color.onSurfaceVariant, whiteSpace: "pre-wrap" },
  readQuestion: { fontWeight: 700, whiteSpace: "pre-wrap" },
  readLine: { whiteSpace: "pre-wrap" },
  readWho: { fontFamily: T.font.sans, fontSize: 12.5, color: T.color.secondary },

  ex: { padding: "20px 22px 18px", background: T.color.surfaceLowest, borderWidth: 1, borderStyle: "solid", borderColor: LINE, borderRadius: T.radius.xl, marginBottom: 16 },
  exTitle: { fontFamily: T.font.serif, fontSize: 16, fontWeight: 600, color: T.color.primary, marginBottom: 8 },
  items: { listStyle: "none", margin: 0, padding: 0 },
  who: { margin: "14px 0 0", fontSize: 11, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", color: T.color.secondary },
  whoInline: { fontSize: 11, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", color: T.color.secondary, marginBottom: 2 },
  item: { display: "flex", gap: 12, padding: "10px 0", borderBottom: `1px solid ${LINE}` },
  itemNum: { width: 22, flexShrink: 0, paddingTop: 3, fontSize: 12, fontWeight: 700, color: "rgba(3,22,50,0.4)", fontVariantNumeric: "tabular-nums" },
  itemBody: { flex: 1, minWidth: 0 },
  prompt: { fontFamily: T.font.serif, fontSize: 15.5, lineHeight: 1.6, color: T.color.primary },
  // Where a phone or a side panel leaves too little room, Check goes under the
  // box, so a sentence still has room to be typed.
  ansRow: { display: "flex", flexWrap: "wrap", justifyContent: "flex-end", gap: 10, marginTop: 8, alignItems: "flex-end" },
  textarea: { flex: "1 1 220px", minWidth: 0, resize: "none", overflow: "hidden", padding: "9px 12px", borderWidth: 1, borderStyle: "solid", borderColor: "rgba(3,22,50,0.14)", borderRadius: T.radius.lg, background: T.color.surfaceLowest, fontFamily: T.font.sans, fontSize: 14, lineHeight: 1.5, color: T.color.onSurface, outline: "none", boxSizing: "border-box" },
  btn: { padding: "9px 16px", border: "none", borderRadius: T.radius.md, background: T.gradient.ink, color: T.color.onPrimary, fontFamily: T.font.sans, fontWeight: 700, fontSize: 12.5, cursor: "pointer", whiteSpace: "nowrap", opacity: 1 },
  btnOff: { opacity: 0.35, cursor: "default" },
  hintRow: { display: "flex", alignItems: "baseline", flexWrap: "wrap", columnGap: 12, rowGap: 2, marginTop: 5 },
  hintBtn: { ...LINK, whiteSpace: "nowrap" },
  hintLine: { fontSize: 13.5, lineHeight: 1.6, color: T.color.primary },
  // Monospaced and spaced out, so every hidden letter is its own _ to count.
  hintText: { fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace", fontSize: 13.5, letterSpacing: "0.12em", whiteSpace: "pre-wrap" },
  inlineError: { marginTop: 8, fontSize: 12.5, color: T.color.error, lineHeight: 1.5 },
  errorAction: { marginLeft: 8, padding: "4px 10px", borderWidth: 1, borderStyle: "solid", borderColor: "rgba(3,22,50,0.2)", borderRadius: T.radius.md, background: T.color.surfaceLowest, color: T.color.primary, fontFamily: T.font.sans, fontSize: 11.5, fontWeight: 700, cursor: "pointer" },

  mine: { marginTop: 4, paddingLeft: 12, borderLeft: `3px solid ${T.color.surfaceHigh}`, fontFamily: T.font.serif, fontSize: 15, lineHeight: 1.6, color: T.color.onSurface, whiteSpace: "pre-wrap" },
  checking: { marginTop: 8, fontSize: 12.5, color: T.color.onSurfaceVariant, fontStyle: "italic" },
  fb: { marginTop: 6, fontSize: 13.5, lineHeight: 1.6, color: T.color.onSurface },
  verdict: { display: "inline-block", padding: "2px 10px", marginRight: 8, borderRadius: T.radius.full, fontSize: 11.5, fontWeight: 800 },
  line: { marginTop: 6, fontSize: 13.5, lineHeight: 1.55, color: T.color.primary },
  unsaved: { marginTop: 6, fontSize: 12, color: T.color.onSurfaceVariant },
  link: LINK,

  done: { padding: "18px 22px", background: T.color.surfaceLowest, borderWidth: 1, borderStyle: "solid", borderColor: LINE, borderRadius: T.radius.xl, marginBottom: 16 },
  doneLine: { fontSize: 14, lineHeight: 1.55, color: T.color.primary, marginBottom: 4 },
  again: { marginTop: 10, padding: "9px 16px", border: "none", borderRadius: T.radius.md, background: T.gradient.ink, color: T.color.onPrimary, fontFamily: T.font.sans, fontWeight: 700, fontSize: 12.5, cursor: "pointer" },
};
