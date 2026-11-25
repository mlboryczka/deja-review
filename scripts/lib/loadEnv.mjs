// Reads the Supabase settings for a script: this checkout's .env.local (then
// .env), else the main checkout's, because a worktree such as the testing
// folder has none of its own. A value already in the environment wins.
import fs from "node:fs";
import path from "node:path";

export function loadEnv(root) {
  const main = /[\\/]\.claude[\\/]worktrees[\\/][^\\/]+$/.test(root) ? path.resolve(root, "..", "..", "..") : null;
  for (const dir of [root, main].filter(Boolean)) {
    if (dir === main && process.env.SUPABASE_URL) break;
    for (const file of [".env.local", ".env"]) {
      const p = path.join(dir, file);
      if (!fs.existsSync(p)) continue;
      for (const line of fs.readFileSync(p, "utf8").split("\n")) {
        const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
        if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
      }
    }
  }
}
