// Whether a request a script sends to Supabase could change anything, judged
// by its kind. The tests of scripts that must only read (the morning check,
// scripts/status-check.mjs; a dry run of scripts/record-cleanup-reasons.mjs)
// used one blanket rule, "every request a GET", which called the free plans'
// size question (2026-10-14) a write: the database answers a question of one
// of its own functions only through a POST. The owner: "it needs to be
// different for each type of question". So each kind has its own rule:
//
//   reading a table                  GET  /rest/v1/<table>      a read
//   reading the list of accounts     GET  /auth/v1/admin/users  a read
//   asking one of the database's     POST /rest/v1/rpc/<name>   a read only if
//   own functions                                                its migration
//     declares it stable or immutable (Postgres then refuses any change made
//     inside it) and its body has no insert, update, delete or other change;
//     plan_usage (migration_018) is one, apply_memory_estimates is not
//   anything else                                               a write
//
// The functions are read from migrations/, the last definition of each.
import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

// Each function a migration defines: true when it can't change anything.
export const READ_ONLY = (() => {
  const out = new Map();
  const dir = join(ROOT, "migrations");
  for (const file of readdirSync(dir).filter((f) => f.endsWith(".sql")).sort()) {
    const sql = readFileSync(join(dir, file), "utf8").replace(/--[^\n]*/g, "");
    for (const part of sql.split(/create\s+or\s+replace\s+function\s+/i).slice(1)) {
      const name = part.match(/^(?:public\.)?(\w+)\s*\(/i)?.[1];
      const [head, body = ""] = part.split("$$");
      if (!name) continue;
      const declared = /\b(stable|immutable)\b/i.test(head);
      const changes = /\b(insert|update|delete|truncate|alter|drop|create|grant|revoke)\b/i.test(body);
      out.set(name.toLowerCase(), declared && !changes);
    }
  }
  return out;
})();

// "read" or "write", for a request recorded as { method, path }.
export function whatItDoes(q) {
  if (q.method === "GET" && /^\/rest\/v1\/\w+$/.test(q.path)) return "read";
  if (q.method === "GET" && q.path === "/auth/v1/admin/users") return "read";
  const fn = q.method === "POST" && q.path.match(/^\/rest\/v1\/rpc\/(\w+)$/)?.[1];
  if (fn && READ_ONLY.get(fn.toLowerCase()) === true) return "read";
  return "write";
}

// The requests that could change something, as "METHOD /path".
export const writes = (requests) => requests.filter((q) => whatItDoes(q) !== "read").map((q) => `${q.method} ${q.path}`);
