#!/usr/bin/env node
// Test runner: starts the mock Supabase and the Vite dev server, runs every
// suite in tests/suites, and cleans up.
//
//   npm test                 all suites
//   npm test -- layout       only suites whose name contains "layout"
//
// Suites that need no browser run first and fast. A suite needs one exactly
// when it imports ../harness.mjs (see NEEDS_BROWSER below).

import { spawn } from "node:child_process";
import { readdirSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const HERE = dirname(fileURLToPath(import.meta.url));
// Ports: 5999 (mock Supabase) and 5173 (the app) unless the environment names
// others, so two checkouts can run the suites at once.
const MOCK_PORT = Number(process.env.MOCK_PORT) || 5999;
const APP_PORT = Number(process.env.APP_PORT) || 5173;
const ROOT = join(HERE, "..");
// A suite needs the browser exactly when it imports the browser harness.
const NEEDS_BROWSER = (name) => /from\s+["']\.\.\/harness\.mjs["']/.test(readFileSync(join(HERE, "suites", `${name}.mjs`), "utf8"));

const filter = process.argv.slice(2).filter((a) => !a.startsWith("-"));
const suites = readdirSync(join(HERE, "suites"))
  .filter((f) => f.endsWith(".mjs"))
  .map((f) => f.replace(/\.mjs$/, ""))
  .filter((n) => filter.length === 0 || filter.some((f) => n.includes(f)))
  .sort((a, b) => Number(NEEDS_BROWSER(a)) - Number(NEEDS_BROWSER(b)));

if (suites.length === 0) {
  console.error(`No suites match ${JSON.stringify(filter)}`);
  process.exit(1);
}

const children = [];

function cleanup() {
  for (const c of children) {
    try { process.kill(-c.pid, "SIGKILL"); } catch {}
  }
}
process.on("exit", cleanup);
for (const sig of ["SIGINT", "SIGTERM"]) process.on(sig, () => { cleanup(); process.exit(130); });

function background(cmd, args, opts = {}) {
  const c = spawn(cmd, args, { cwd: ROOT, detached: true, stdio: ["ignore", "ignore", "pipe"], ...opts });
  // If it exits before it answers (its port already taken, say), waitFor stops
  // the run and shows what it said, instead of driving someone else's server.
  c.exitedWith = null;
  c.stderrText = "";
  c.stderr.on("data", (d) => { c.stderrText = (c.stderrText + d).slice(-2000); });
  c.on("exit", (code) => { c.exitedWith = code ?? "a signal"; });
  children.push(c);
  return c;
}

async function waitFor(url, label, child, timeoutMs = 45000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (child.exitedWith !== null) {
      throw new Error(`${label} stopped (exit ${child.exitedWith}) before it answered at ${url}. Something else may be using that port.\n${child.stderrText.trim()}`);
    }
    try {
      await fetch(url);
      // Answered, but make sure it is ours: it may have died just now because
      // another server already held the port.
      await new Promise((r) => setTimeout(r, 300));
      if (child.exitedWith !== null) continue;
      return;
    } catch {
      await new Promise((r) => setTimeout(r, 300));
    }
  }
  throw new Error(`${label} did not come up at ${url} within ${timeoutMs}ms`);
}

function runSuite(name) {
  return new Promise((resolve) => {
    const c = spawn(process.execPath, [join(HERE, "suites", `${name}.mjs`)], {
      cwd: ROOT,
      stdio: "inherit",
      env: { ...process.env, NO_PROXY: "*", APP_URL: `http://localhost:${APP_PORT}`, MOCK_URL: `http://127.0.0.1:${MOCK_PORT}` },
    });
    c.on("exit", (code) => resolve(code === 0));
  });
}

if (suites.some(NEEDS_BROWSER)) {
  const mock = background(process.execPath, [join(HERE, "mock-supabase.mjs")]);
  await waitFor(`http://127.0.0.1:${MOCK_PORT}/rest/v1/user_cards`, "mock Supabase", mock);

  // The app is pointed at the mock through the environment, not a settings
  // file: a checkout's own .env.local is never touched, and nothing is left
  // behind if the run is killed. The four VITE_ variables the app reads are all
  // set here, so a real .env.local can't leak in.
  const vite = background("npx", ["vite", "--port", String(APP_PORT), "--strictPort"], {
    env: { ...process.env, VITE_SUPABASE_URL: `http://127.0.0.1:${MOCK_PORT}`, VITE_SUPABASE_ANON_KEY: "test.key", VITE_ADMIN_EMAIL: "", VITE_API_BASE: "" },
  });
  await waitFor(`http://localhost:${APP_PORT}/`, "vite dev server", vite);
}

// A browser suite that fails gets one more try. Their timing checks can fail
// on a busy machine and pass on unchanged code (reflow's first check does, on
// the owner's Mac): one more go keeps a hiccup from emailing
// the owner about a fault that isn't there, and the summary still names the
// suite, so one that fails now and then is seen rather than lost. A suite that
// fails twice fails.
const failed = [];
const secondTry = [];
for (const name of suites) {
  console.log(`\n\x1b[1m▸ ${name}\x1b[0m`);
  if (await runSuite(name)) continue;
  if (NEEDS_BROWSER(name)) {
    console.log(`\n\x1b[1m▸ ${name}, second try\x1b[0m`);
    if (await runSuite(name)) { secondTry.push(name); continue; }
  }
  failed.push(name);
}

console.log("");
if (secondTry.length) {
  console.log(`\x1b[33mPassed on a second try: ${secondTry.join(", ")}\x1b[0m`);
}
if (failed.length) {
  console.log(`\x1b[31m${failed.length} of ${suites.length} suites failed: ${failed.join(", ")}\x1b[0m`);
  process.exit(1);
}
console.log(`\x1b[32mall ${suites.length} suites passed\x1b[0m`);
process.exit(0);
