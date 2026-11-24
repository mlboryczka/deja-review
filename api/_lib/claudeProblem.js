// Two Anthropic problems the student can act on, told apart from the rest by
// what the error says, not by its HTTP status alone. A mid-stream overload
// reaches the SDK with no status, and a billing problem may come back as a 402
// or as a 400 about the credit balance. Shared by the tutor (api/chat.js) and
// the podcasts (api/_lib/podcasts.js).

export const OVERLOADED_TEXT = "Claude is overloaded right now. Give it a minute and try again.";
export const BILLING_TEXT = "Your Anthropic account has run out of credit or has a billing problem. Add credit in your Anthropic account, then try again.";

// "overloaded", "billing", or "" for anything else.
export function claudeProblem(err) {
  const types = [err?.type, err?.error?.type, err?.error?.error?.type];
  const text = String(err?.error?.error?.message ?? err?.error?.message ?? err?.message ?? "").toLowerCase();
  if (err?.status === 529 || types.includes("overloaded_error")) return "overloaded";
  if (err?.status === 402 || types.includes("billing_error") || text.includes("credit balance")) return "billing";
  return "";
}
