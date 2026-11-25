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

// `course` is "es" or "fr" (src/lib/exerciseApi.js).
export function useAnswerDispute({ user, answer, onAccepted, course = "es" }) {
  // null, or { step: "reviewing" | "accepted" | "declined" | "error", ... }
  const [state, setState] = useState(null);
  const send = async (force = false) => {
    setState({ step: "reviewing" });
    try {
      const r = await disputeAnswer({ key: answer.key, typed: answer.typed, verdict: answer.verdict, force, course }, { supabase, user });
      if (r.verdict === "accept") {
        const kept = r.saved !== false, missing = !!r.missing;
        // How it went is passed on, so the page keeps it with the answer: it
        // is still there when the lesson is opened again.
        onAccepted?.(answer.typed, missing ? "missing" : kept ? "kept" : "unkept");
        setState({ step: "accepted", kept, missing });
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
// `answer.accepted` is "missing" or "unkept" when it was not kept, and is read
// when the dispute's own state is gone (the lesson was opened again).
export function acceptedLine(state, answer) {
  const how = state?.missing ? "missing" : state && state.kept === false ? "unkept" : answer?.accepted;
  if (how === "missing") return "Accepted for now, but not kept: the database needs one update (migration_027).";
  if (how === "unkept") return "Accepted for now, but it couldn’t be kept. Try again later.";
  return "This answer will be accepted from now on.";
}
