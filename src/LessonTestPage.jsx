// A Spanish lesson's test (owner, 2026-11-25): a sample of its flashcards,
// exercise items and dialogue sentences, answered in one sitting. Passing
// makes the lesson Mastered. The rules are in lib/lessonTest.js.
//
// Everything is answered on this page (owner, 2026-11-26: "the test should be
// self-contained"). The exercise items and sentences in the same boxes as on
// Exercises and Dialogues, kept in the same place. The flashcards one at a
// time, marked as Cards marks a typed answer and kept as practice; the shell
// (FlashcardApp) hands down how (`testCards`).
//
// Nothing takes the cursor when the page opens: a box that did scrolled the
// page down to the dialogue (owner, 2026-11-26: "it took me to part 4
// first"). Once you are answering, the next box takes it.

import { useEffect, useMemo, useRef, useState } from "react";
import { T } from "./theme";
import { EXERCISES_BY_ID } from "./data/exercises/es/index.js";
import { DIALOGUE_OF } from "./data/exercises/es/dialogues.js";
import { DIALOGUE_PREFIX } from "./lib/dialogueRounds.js";
import { PARTS, PER_PART, newTest, scoreTest, resultOf, toAsk, needed, withoutTextItems, allAsked } from "./lib/lessonTest.js";
import { useExerciseAnswers, testAnswer, TestExerciseItems, setExercisesPack } from "./ExercisesPage";
import { useDialogueRows, testSentenceAnswer, latestSentenceAnswer, TestSentences, setDialoguesPack } from "./DialoguesPage";
import { SPANISH_EXERCISES_PACK, SPANISH_DIALOGUES_PACK } from "./data/exercises/es/packs.js";
import MasteredBadge from "./MasteredBadge";

const LINE = "rgba(3,22,50,0.07)";
const GREEN = "#2f6f5e";
const RED = "#a3412e";
const plural = (n, one, many) => `${n.toLocaleString()} ${n === 1 ? one : many}`;
const dayOf = (iso) => new Date(iso).toLocaleDateString(undefined, { weekday: "long", day: "numeric", month: "long" });

// The lesson's exercise sheets: its own and any annex (Lesson 8's).
export const sheetsOf = (lessonId) =>
  [EXERCISES_BY_ID[lessonId], EXERCISES_BY_ID[`${lessonId}-anexo`]].filter(Boolean);

export default function LessonTestPage({ user, lesson, tests, saveTests, cards, sectionOf, direction, testCards, onBack, onNeedKey }) {
  // A lesson's test is Spanish only: the pages' pieces it draws use that course.
  setExercisesPack(SPANISH_EXERCISES_PACK);
  setDialoguesPack(SPANISH_DIALOGUES_PACK);
  const exStore = useExerciseAnswers(user?.id);
  const dgStore = useDialogueRows(user?.id);
  const kept = tests?.[lesson.id] || {};
  // Without exercises that need the lesson's text (lib/lessonTest.js), for a
  // test begun before they were left out.
  // And with every question asked, for a test begun when some weren't.
  const test = useMemo(() => allAsked(withoutTextItems(kept.test || null, EXERCISES_BY_ID)), [kept.test]);
  const result = kept.result || null;
  const loading = exStore.loading || dgStore.loading;

  const answerOf = (k) => (String(k).startsWith(DIALOGUE_PREFIX)
    ? testSentenceAnswer(dgStore, k, test?.started)
    : testAnswer(exStore, k, test?.started));
  const score = test ? scoreTest(test, answerOf) : null;

  // A test answered in full is finished: its result is kept and the test
  // cleared, once.
  const finishing = useRef(null);
  useEffect(() => {
    if (!test || !score?.complete || finishing.current === test.started) return;
    finishing.current = test.started;
    saveTests((all) => {
      const cur = all[lesson.id] || {};
      if (cur.test?.started !== test.started) return all;
      return { ...all, [lesson.id]: { test: null, result: resultOf(score) } };
    });
  });

  const start = () => {
    const t = newTest({
      lessonId: lesson.id,
      cards,
      sectionOf,
      sheets: sheetsOf(lesson.id),
      dialogue: DIALOGUE_OF[lesson.id] || null,
      latest: (k) => (String(k).startsWith(DIALOGUE_PREFIX) ? latestSentenceAnswer(dgStore, k) : exStore.latest[k] || null),
      direction,
    });
    saveTests((all) => ({ ...all, [lesson.id]: { ...(all[lesson.id] || {}), test: t } }));
  };
  const stop = () => {
    if (!window.confirm("Stop this test? The answers you've given are kept, but they won't make a result. Your last result stays as it is.")) return;
    saveTests((all) => ({ ...all, [lesson.id]: { ...(all[lesson.id] || {}), test: null } }));
  };

  const mastered = result?.passed === true;
  const itemKeys = useMemo(() => toAsk(test?.items).map((e) => e.k), [test?.items]);
  const sentenceKeys = useMemo(() => toAsk(test?.sentences).map((e) => e.k), [test?.sentences]);

  return (
    <div style={S.scroll} data-lesson-test-page={lesson.id}>
      <div style={S.page}>
        <button type="button" style={S.back} onClick={onBack} data-lesson-test-back>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          All lessons
        </button>
        <h1 style={S.h1}>
          {`Test: ${lesson.title}`}
          {mastered && <MasteredBadge style={{ marginLeft: 10, position: "relative", top: -3 }} />}
        </h1>

        {result && !test && <ResultCard result={result} lessonTitle={lesson.title} />}

        {!test && (
          <section style={S.card} data-lesson-test-intro>
            <p style={S.para}>
              {`This test asks up to ${PER_PART} of the lesson's flashcards, ${PER_PART} of its exercise items and ${PER_PART} of its dialogue sentences, picked from across the lesson. You pass with ${needed(PER_PART)} of ${PER_PART} or more right in each part, and the lesson is then Mastered.`}
            </p>
            <p style={S.para}>
              There is no Hint.
            </p>
            <p style={S.para}>
              Once the lesson is Mastered, each of its cards you get right comes back about 3.5 times later than before. A card you get wrong comes back as soon as it always did.
            </p>
            <button type="button" style={{ ...S.primary, ...(loading ? S.off : null) }} disabled={loading} onClick={start} data-lesson-test-start>
              {loading ? "Loading your answers…" : result ? "Take the test again" : "Start the test"}
            </button>
          </section>
        )}

        {test && (
          <>
            <div style={S.byline}>
              <span>{`Started ${dayOf(test.started)}`}</span>
              <button type="button" style={S.link} onClick={stop} data-lesson-test-stop>Stop this test</button>
            </div>
            {PARTS.map((p) => {
              const s = score.parts[p.id];
              if (!s.total) return null;
              return (
                <section key={p.id} style={S.card} data-lesson-test-part={p.id}>
                  <div style={S.partHead}>
                    <span style={S.partTitle}>{p.label}</span>
                    <span style={S.partFig} data-lesson-test-figure={p.id}>
                      {`${s.answered} of ${plural(s.total, p.one, p.many)} answered · ${s.right} right · ${needed(s.total)} needed`}
                    </span>
                  </div>
                  {p.id === "words" && (
                    <TestCards lessonId={lesson.id} test={test} cards={cards} testCards={testCards} />
                  )}
                  {p.id === "grammar" && itemKeys.length > 0 && (
                    <TestExerciseItems user={user} keys={itemKeys} since={test.started} onNeedKey={onNeedKey} />
                  )}
                  {p.id === "text" && sentenceKeys.length > 0 && (
                    <TestSentences user={user} keys={sentenceKeys} since={test.started} onNeedKey={onNeedKey} />
                  )}
                </section>
              );
            })}
            {score.complete && <p style={S.note}>Working out your result…</p>}
          </>
        )}
      </div>
    </div>
  );
}

// The flashcards still to ask, one at a time: type the answer, Check (or
// Enter), see the verdict and the answer, Next. Each answer is kept as soon as
// it is marked, so leaving halfway loses nothing.
function TestCards({ lessonId, test, cards, testCards }) {
  const byKey = useMemo(() => {
    const m = new Map();
    for (const c of cards || []) for (const d of ["fr", "en"]) m.set(`${c.row_id ?? c.id}:${d}`, c);
    return m;
  }, [cards]);
  const asked = test.cards || [];
  const left = toAsk(test.cards).filter((e) => byKey.has(e.k));
  const [shown, setShown] = useState(null); // { k, result, typed } of the card just marked
  const [typed, setTyped] = useState("");
  const [going, setGoing] = useState(false); // answering: the next box takes the cursor
  const inputRef = useRef(null);
  const nextRef = useRef(null);

  // The cards still to ask are recorded as a set dealt, once a page.
  const dealtRef = useRef(null);
  useEffect(() => {
    if (dealtRef.current === test.started || !left.length) return;
    dealtRef.current = test.started;
    testCards.deal(lessonId, test.started, cards, left.map((e) => e.k));
  });

  const entry = shown ? asked.find((e) => e.k === shown.k) : left[0];
  const card = entry ? byKey.get(entry.k) : null;
  const dir = entry ? entry.k.split(":")[1] : "fr";
  useEffect(() => {
    if (!going) return;
    (shown ? nextRef : inputRef).current?.focus({ preventScroll: true });
  }, [going, shown, entry?.k]);

  if (!asked.length) return null;
  if (!card) {
    return <p style={S.note} data-test-cards-done>{`All ${plural(asked.length, "card", "cards")} asked here are answered.`}</p>;
  }
  const p = testCards.promptOf(card, dir);
  const check = (giveUp = false) => {
    if (!giveUp && !typed.trim()) return;
    const { result, got } = giveUp ? { result: "revealed", got: false } : testCards.mark(card, dir, typed);
    testCards.record(lessonId, card, dir, got);
    setShown({ k: entry.k, result, typed: typed.trim() });
    setGoing(true);
  };
  const next = () => { setShown(null); setTyped(""); setGoing(true); };
  const ok = shown && (shown.result === "correct" || shown.result === "close");
  const number = asked.length - left.length + (shown ? 0 : 1);
  return (
    <div style={S.cardBox} data-test-card={entry.k} data-test-card-state={shown ? "marked" : "open"}>
      <div style={S.cardCount}>{`Card ${Math.min(number, asked.length)} of ${asked.length}`}</div>
      {p.instruction && <div style={S.cardInstr}>{p.instruction}</div>}
      <div style={S.cardFront}>{p.front}</div>
      {!shown ? (
        <>
          <div style={S.cardRow}>
            <input
              ref={inputRef}
              style={S.cardInput}
              value={typed}
              onChange={(e) => setTyped(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); check(); } }}
              onFocus={() => setGoing(true)}
              placeholder={`Type ${p.lang}…`}
              autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck={false}
              data-test-card-input
            />
            <button type="button" style={{ ...S.primary, ...(typed.trim() ? null : S.off) }} disabled={!typed.trim()} onClick={() => check()} data-test-card-check>Check</button>
          </div>
          <button type="button" style={{ ...S.link, marginTop: 10 }} onClick={() => check(true)} data-test-card-dontknow>I don't know</button>
        </>
      ) : (
        <>
          <div style={{ ...S.verdict, color: ok ? GREEN : RED }} data-test-card-verdict={shown.result}>
            {shown.result === "correct" && "✓ Correct!"}
            {shown.result === "close" && `✓ Close enough — you wrote: ${shown.typed}`}
            {shown.result === "wrongArticle" && `✗ Wrong article — you wrote: ${shown.typed}`}
            {shown.result === "wrongAccent" && `✗ The accent changes the tense — you wrote: ${shown.typed}`}
            {shown.result === "wrong" && `✗ You wrote: ${shown.typed}`}
            {shown.result === "revealed" && "Not answered"}
          </div>
          <div style={S.cardBack}>{`Answer: ${p.back}`}</div>
          <button
            ref={nextRef}
            type="button"
            style={{ ...S.primary, marginTop: 12 }}
            onClick={next}
            onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); next(); } }}
            data-test-card-next
          >
            Next
          </button>
        </>
      )}
    </div>
  );
}

// The last finished test: passed or not, and each part's figure.
function ResultCard({ result, lessonTitle }) {
  const order = PARTS.filter((p) => result.parts?.[p.id]);
  return (
    <section style={{ ...S.card, ...(result.passed ? S.passed : null) }} data-lesson-test-result={result.passed ? "passed" : "not-passed"}>
      <div style={S.partHead}>
        <span style={S.partTitle}>{result.passed ? "Passed" : "Not passed"}</span>
        <span style={S.partFig}>{dayOf(result.at)}</span>
      </div>
      <ul style={S.list}>
        {order.map((p) => {
          const r = result.parts[p.id];
          const ok = r.right >= needed(r.total);
          return (
            <li key={p.id} style={S.li} data-lesson-test-result-part={p.id}>
              {`${p.label}: ${r.right} of ${r.total} right${ok ? "" : `, where ${needed(r.total)} were needed`}.`}
            </li>
          );
        })}
      </ul>
      <p style={{ ...S.para, marginBottom: 0 }}>
        {result.passed
          ? `${lessonTitle} is Mastered. Its cards you get right now come back about 3.5 times later.`
          : "Take the test again whenever you like. It picks new questions each time."}
      </p>
    </section>
  );
}

const S = {
  scroll: { flex: 1, minHeight: 0, overflowY: "auto", boxSizing: "border-box" },
  page: { maxWidth: 760, margin: "0 auto", padding: "36px 32px 90px", boxSizing: "border-box", fontFamily: T.font.sans, color: T.color.onSurface },
  back: { display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 14px 6px 11px", marginBottom: 18, background: "transparent", borderWidth: 1, borderStyle: "solid", borderColor: LINE, borderRadius: T.radius.full, cursor: "pointer", fontFamily: T.font.sans, fontSize: 11.5, color: T.color.onSurface, fontWeight: 700, letterSpacing: "0.01em" },
  h1: { fontFamily: T.font.serif, fontWeight: 600, fontSize: 30, color: T.color.primary, letterSpacing: "-0.02em", margin: "0 0 20px", lineHeight: 1.2 },
  byline: { display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap", fontSize: 13, color: T.color.onSurfaceVariant, margin: "-12px 0 20px" },
  card: { padding: "20px 22px 18px", background: T.color.surfaceLowest, borderWidth: 1, borderStyle: "solid", borderColor: LINE, borderRadius: T.radius.xl, marginBottom: 16 },
  passed: { borderColor: "rgba(47,111,94,0.35)" },
  para: { margin: "0 0 12px", fontSize: 14, lineHeight: 1.55, color: T.color.onSurface, maxWidth: 620 },
  note: { margin: "0 0 12px", fontSize: 13, lineHeight: 1.5, color: T.color.onSurfaceVariant },
  partHead: { display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap", marginBottom: 10 },
  partTitle: { fontFamily: T.font.serif, fontSize: 18, fontWeight: 600, color: T.color.primary },
  partFig: { fontSize: 12.5, color: T.color.onSurfaceVariant, fontVariantNumeric: "tabular-nums" },
  list: { margin: "0 0 12px", paddingLeft: 18, fontSize: 14, lineHeight: 1.6 },
  li: { margin: 0 },
  primary: { padding: "9px 16px", border: "none", borderRadius: T.radius.md, background: T.gradient.ink, color: T.color.onPrimary, fontFamily: T.font.sans, fontWeight: 700, fontSize: 12.5, cursor: "pointer", whiteSpace: "nowrap" },
  off: { opacity: 0.5, cursor: "default" },
  cardBox: { padding: "18px 20px", border: `1px solid ${LINE}`, borderRadius: T.radius.lg, background: T.color.surface },
  cardCount: { fontSize: 12, color: T.color.onSurfaceVariant, marginBottom: 10, fontVariantNumeric: "tabular-nums" },
  cardInstr: { fontSize: 13, fontStyle: "italic", color: T.color.onSurfaceVariant, marginBottom: 6 },
  cardFront: { fontFamily: T.font.serif, fontSize: 22, color: T.color.primary, lineHeight: 1.3, marginBottom: 14 },
  cardRow: { display: "flex", gap: 10, alignItems: "center" },
  cardInput: { flex: 1, minWidth: 0, padding: "9px 12px", fontSize: 15, fontFamily: T.font.sans, border: `1px solid rgba(3,22,50,0.18)`, borderRadius: T.radius.md, background: T.color.surfaceLowest, color: T.color.onSurface, outline: "none" },
  verdict: { fontSize: 14, fontWeight: 600, marginBottom: 6 },
  cardBack: { fontSize: 15, color: T.color.onSurface },
  link: { padding: 0, border: "none", background: "transparent", fontFamily: T.font.sans, fontSize: 12, fontWeight: 600, color: T.color.onSurfaceVariant, cursor: "pointer", textDecoration: "underline", textUnderlineOffset: 2 },
};
