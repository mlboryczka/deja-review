// How a marked answer looks on Exercises and Dialogues (owner, 2026-11-07,
// from a mockup): a mark before the answer, a green tick for Right, an amber
// wavy line for Almost and a red cross for Wrong, with the answer written in
// the same colour. It replaced the grey bar beside the answer and the Right /
// Almost / Wrong pill under it. Under a miss, the right answer in italics, then
// a gap before Why? and My answer should be accepted, and the same gap before
// what either says ("add a break between correct answer and why/my answer
// should be accepted", "any answer from why or my answer should be accepted
// should have a similar line break").

import { T } from "./theme";

export const VERDICT_INK = { right: "#2f6f5e", almost: "#b06a00", wrong: T.color.error };
const PATH = {
  right: "M4 12.5l5 5L20 6.5",
  almost: "M4 13.5c2.2-3.6 4.8-3.6 8 0s5.8 3.6 8 0",
  wrong: "M6 6l12 12M18 6L6 18",
};
const LABEL = { right: "Right", almost: "Almost", wrong: "Wrong" };

export function VerdictMark({ verdict }) {
  if (!PATH[verdict]) return null;
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"
      role="img" aria-label={LABEL[verdict]} style={{ flexShrink: 0, marginTop: 4 }}>
      <title>{LABEL[verdict]}</title>
      <path d={PATH[verdict]} />
    </svg>
  );
}

// Everything under a marked answer starts where the answer does, past its mark.
const UNDER = 26;
// The gap the owner asked for, before the links and before what they say.
const BREAK = 14;

export const MARKED_STYLE = {
  answer: { display: "flex", alignItems: "flex-start", gap: 8, marginTop: 4, fontFamily: T.font.serif, fontSize: 15, lineHeight: 1.6, whiteSpace: "pre-wrap" },
  correct: { marginTop: 3, marginLeft: UNDER, fontFamily: T.font.serif, fontStyle: "italic", fontSize: 15, lineHeight: 1.55, color: T.color.primary },
  links: { display: "flex", flexWrap: "wrap", alignItems: "baseline", columnGap: 14, rowGap: 4, marginTop: BREAK, marginLeft: UNDER },
  says: { marginTop: BREAK, marginLeft: UNDER, fontSize: 13.5, lineHeight: 1.55, color: T.color.primary },
  quiet: { marginTop: BREAK, marginLeft: UNDER, fontSize: 12, color: T.color.onSurfaceVariant },
  error: { marginTop: BREAK, marginLeft: UNDER, fontSize: 12.5, lineHeight: 1.5, color: T.color.error },
  reviewing: { fontSize: 12, color: T.color.onSurfaceVariant, fontStyle: "italic" },
};
