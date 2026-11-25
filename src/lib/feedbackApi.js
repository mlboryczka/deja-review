// The one request that asks Claude to review feedback, or to act on a review
// (api/review-answer.js, body { feedback }). Used by View feedback and by
// the Send feedback panel.
import { supabase } from "../supabase";

export async function feedbackRequest(feedback) {
  const { data: { session } } = await supabase.auth.getSession();
  const res = await fetch("/api/review-answer", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${session?.access_token || ""}` },
    body: JSON.stringify({ feedback }),
  });
  let body = null;
  try { body = await res.json(); } catch {}
  if (!res.ok) {
    const err = new Error(body?.error || `The server answered ${res.status}.`);
    err.code = body?.code;
    throw err;
  }
  return body;
}
