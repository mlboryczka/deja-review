// "Mastered": a Spanish lesson whose last lesson test was passed
// (lib/lessonTest.js). The owner asked for it wherever a lesson shows
// (2026-11-25): "mentally helpful if i'm looking at a bunch of lesson
// dialogues and considering how many more i need to do". The same shape as
// the Learned label on Stats, in the green the pages use for a right answer,
// so it reads as done.

import { T } from "./theme";

const GREEN = "#2f6f5e";

export default function MasteredBadge({ small = false, style }) {
  return (
    <span
      style={{ ...(small ? S.small : S.badge), ...style }}
      title="You passed this lesson's test"
      data-mastered-badge
    >
      <svg width={small ? 9 : 11} height={small ? 9 : 11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 6 9 17l-5-5" />
      </svg>
      Mastered
    </span>
  );
}

const base = {
  display: "inline-flex", alignItems: "center", gap: 4, fontFamily: T.font.sans, fontWeight: 600,
  color: GREEN, background: "rgba(47,111,94,0.12)", borderRadius: 999, whiteSpace: "nowrap",
  verticalAlign: "middle", lineHeight: 1.4, letterSpacing: 0, fontStyle: "normal",
};
const S = {
  badge: { ...base, fontSize: 11.5, padding: "2px 9px" },
  small: { ...base, fontSize: 10, padding: "1px 6px", gap: 3 },
};
