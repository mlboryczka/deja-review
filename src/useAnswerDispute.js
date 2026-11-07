// "My answer should be accepted" under a marked answer on Exercises and
// Dialogues (owner, 2026-11-07: "instead of ask the tutor, this should be the
// same my answer should be correct button as we have for the flashcards").
// As on a card: Claude looks at the answer again (api/_lib/exercises.js,
// "dispute"). If it agrees, the answer is accepted from now on; if not, it
// says why, and Accept anyway accepts it without asking again. Every press is
// kept. `onAccepted(line)` tells the page, which shows the answer as Right.

import { useState } from "react";
import { supabase } from "./supabase";
import { disputeAnswer } from "./lib/exerciseApi.js";

export function useAnswerDispute({ user, answer, onAccepted }) {
  // null, or { step: "reviewing" | "accepted" | "declined" | "error", ... }
  const [state, setState] = useState(null);
  const send = async (force = false) => {
    setState({ step: "reviewing" });
    try {
      const r = await disputeAnswer({ key: answer.key, typed: answer.typed, verdict: answer.verdict, force }, { supabase, user });
      if (r.verdict === "accept") {
        onAccepted?.(answer.typed);
        setState({ step: "accepted", kept: r.saved !== false, missing: !!r.missing });
      } else {
        setState({ step: "declined", reasoning: r.reasoning || "" });
      }
    } catch (e) {
      setState({ step: "error", message: e?.message || "Couldn’t send that. Try again." });
    }
  };
  return { state, send };
}

// What an accepted answer says under it.
export function acceptedLine(state) {
  if (state?.missing) return "Accepted for now, but not kept: the database needs one update (migration_027).";
  if (state && state.kept === false) return "Accepted for now, but it couldn’t be kept. Try again later.";
  return "This answer will be accepted from now on.";
}
