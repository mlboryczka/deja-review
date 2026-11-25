// Code check of 7 November 2026, problems 163 to 188 (studying flashcards,
// tidy-ups). No browser, no database.
import { checker } from "../check.mjs";
import { placeRetry, withdrawRetry } from "../../src/lib/sessionQueue.js";
import { settingsKey } from "../../api/_lib/settingsKey.js";
import { itemKey } from "../../src/lib/directions.js";

const ck = checker();

// 180: a retry made from a retry that pushed a card out is taken back out
// with that card put back, so the set stays full.
const block = (n) => Array.from({ length: n }, (_, i) => ({ id: `b${i}` }));
const first = placeRetry(block(49), 5, { id: "b5" }, 20, 50);
ck("180 with room, the first miss adds a retry and the set grows to 50", first.length === 50 && first[26]?._added === true);
const again = placeRetry(first, 26, first[26], 20, 50);
ck("180 a miss of that retry with the set full pushes the last new card out", again.length === 50 && !again.some((c) => !c._retry && c.id === "b48"));
const back = withdrawRetry(again, 26, itemKey({ id: "b5" }));
ck("180 changing it to right puts the pushed-out card back, so 49 cards stay in the set", back.filter((c) => !c._retry).length === 49 && back.some((c) => c.id === "b48" && !c._retry));

// 185: the same fitting moment, written two ways, is one key.
ck("185 the database's and the fit's way of writing one moment give the same key",
  settingsKey("fit:2026-11-10T12:00:00.123+00:00") === settingsKey("fit:2026-11-10T12:00:00.123Z"));
ck("185 a different moment, or a starting-settings key, is left alone",
  settingsKey("fit:2026-11-10T12:00:01.000Z") !== settingsKey("fit:2026-11-10T12:00:00.123Z") && settingsKey("start:v1") === "start:v1" && settingsKey(null) === null);

const n = ck.fails();
console.log(n ? `\n  FAILED: ${n}` : "\n  all checks passed");
process.exit(n ? 1 : 0);
