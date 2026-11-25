// The key kept in fsrs_settings.computed_with: which settings every card's
// scheduling state was last worked out with. A fitted set of weights is
// "fit:" plus the time it was fitted. The database prints that time as
// "2026-11-10T12:00:00.123+00:00" while the fit itself writes
// "2026-11-10T12:00:00.123Z"; both are the same moment, so keys are
// compared by that moment and not as text, or every fit would be
// recomputed a second time on the next call.
export function settingsKey(key) {
  if (typeof key !== "string" || !key.startsWith("fit:")) return key;
  const t = Date.parse(key.slice(4));
  return Number.isNaN(t) ? key : `fit:${new Date(t).toISOString()}`;
}
