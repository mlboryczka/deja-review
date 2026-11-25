// Assertion helper, kept free of any browser import so the pure-logic suite
// can run without playwright installed.
export function checker() {
  const state = { fails: 0 };
  const ck = (name, ok, detail = "") => {
    console.log((ok ? "  ✓ " : "  ✗ ") + name + (detail ? "  — " + detail : ""));
    if (!ok) state.fails++;
  };
  ck.fails = () => state.fails;
  // The closing tally every suite ends with: say how it went and exit.
  ck.done = () => {
    const n = state.fails;
    console.log(n ? `\n  FAILED: ${n}` : "\n  all checks passed");
    process.exit(n ? 1 : 0);
  };
  return ck;
}
