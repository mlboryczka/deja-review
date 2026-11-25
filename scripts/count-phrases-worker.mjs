// One of count-phrases.mjs's helpers: counts the cards' phrases in the lines
// of subtitles it is sent, and sends back what it counted. Each helper reads
// Lexique and works out the phrases itself, in the same order as the script,
// so a phrase has the same key in every helper.

import fs from "node:fs";
import { parentPort, workerData } from "node:worker_threads";
import { readLexique, phrasesOf, counter } from "./phrases.mjs";

const lex = readLexique(fs.readFileSync(workerData.lexique, "utf8"));
const count = counter(workerData.fronts.flatMap((f) => phrasesOf(f, lex)), lex);
parentPort.on("message", (lines) => {
  if (lines === null) {
    const { counts, words } = count.result();
    parentPort.postMessage({ counts: [...counts], words });
    return;
  }
  for (const line of lines) count.add(line);
  parentPort.postMessage("ready");
});
parentPort.postMessage("ready");
