// Code check of 7 November 2026, problems 232 to 254 (class notes tidy-ups).
// No browser, no database, no Claude call.
import { checker } from "../check.mjs";
import { yourClasses } from "../../src/lib/uploadText.js";
import { normalizeLine } from "../../src/lib/notesLines.js";
import { plannedWrites } from "../../src/lib/cardMatch.js";
import { cleanFrenchFront } from "../../api/parse-cahier.js";
import { cleanFrenchPrompt } from "../../src/lib/cardText.js";

const ck = checker();

// 249: one wording of class dates.
ck("249 one class", /^Your class of /.test(yourClasses(["2026-11-11"])));
ck("249 two classes", /^Your classes of .* and /.test(yourClasses(["2026-11-11", "2026-11-18"])));

// 248: the hidden characters still go, written as escapes now.
const tidy = normalizeLine("a​b c﻿");
ck("248 zero-width and no-break space are tidied", tidy === "ab c", JSON.stringify(tidy));

// 240: the unused tallies are gone, the writes are not.
const ins = { front: "a", back: "b", dates: ["2026-11-11"] };
const w = plannedWrites([{ action: "insert", insert: ins, card: {} }]);
ck("240 plannedWrites returns inserts and updates only", w.inserts.length === 1 && Array.isArray(w.updates) && !("joined" in w) && !("rowsSeenAgain" in w));

// 245: one copy of the rule that takes English off the French side.
ck("245 parse-cahier uses cardText's rule", cleanFrenchFront === cleanFrenchPrompt);
ck("245 the gloss is taken off", cleanFrenchFront("je suis allé (I went)", "I went") === "je suis allé");

const n = ck.fails();
console.log(n ? `\n  FAILED: ${n}` : "\n  all checks passed");
process.exit(n ? 1 : 0);
