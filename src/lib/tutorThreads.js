// The tutor's conversation, kept outside the panel component.
//
// ChatPanel's own state dies with the component, and the component is not as
// long-lived as it looks: the onboarding screen and the main app each render
// their own, so adding the first card from the tutor swapped one for the other
// and wiped the thread mid-conversation. Keyed by user, in memory only — it
// never touches storage, and sign-out drops it. The Spanish tutor's thread
// (2026-10-26) is kept apart, under "es:<user>" (lib/course.js), so that a
// question about Spanish never arrives as turn nine of one about French.

const threads = new Map();

// A remount can land mid-answer. A half-written bubble must not come back
// blinking its caret forever, and an empty one must not go out as history.
export function readThread(userId) {
  return (threads.get(userId) || [])
    .filter((m) => m.role === "user" || m.content)
    .map((m) => (m.streaming ? { ...m, streaming: false } : m));
}

export function writeThread(userId, messages) {
  if (userId) threads.set(userId, messages);
}

// Both of the user's threads, French and Spanish.
export function clearTutorThread(userId) {
  if (!userId) return;
  for (const key of [...threads.keys()]) {
    if (key === userId || key.endsWith(`:${userId}`)) threads.delete(key);
  }
}
