// Code check of 7 November 2026, problems 64 to 75 (reading class notes from
// the linked Google Doc). No browser, no real database, no real Claude:
// functions are run with stand-in data, and what lives in a page or hook is
// checked in the source for the rule the fix put there.
import { readFileSync } from "node:fs";
import { checker } from "../check.mjs";
import { formsOfOneWord } from "../../src/lib/sameCard.js";
import { sliceCaderno, cadernoCardsFromExtracted } from "../../api/_lib/caderno.js";
import { cardsFromExtracted } from "../../api/parse-cahier.js";
import { docIdFrom } from "../../src/lib/docId.js";

const ck = checker();
const read = (f) => readFileSync(new URL(`../../${f}`, import.meta.url), "utf8");
const hook = read("src/useCahierSync.js");
const dialog = read("src/CahierUpload.jsx");
const parse = read("api/parse-cahier.js");

// 64
ck("64 'caro' and 'cara', 'invitados' and 'invitadas' are one Spanish word",
  formsOfOneWord("caro", "cara", "es") && formsOfOneWord("invitados", "invitadas", "es") && !formsOfOneWord("caro", "cama", "es"));
ck("64 French pairs still work, and the Spanish endings aren't used for French",
  formsOfOneWord("bon", "bonne") && !formsOfOneWord("caro", "cara"));

// 65
const table = (tense) => cardsFromExtracted([{ front: "aller", back: "x", category: "G", conjugation: true, infinitive: "aller", tense, forms: ["vais", "vas", "va", "allons", "allez", "vont"] }]);
const fronts = (cs) => cs.filter((c) => c.source === "conjugation-drill").map((c) => c.front);
ck("65 an 'unknown' table makes no drills", fronts(table("unknown")).length === 0, JSON.stringify(fronts(table("unknown"))));
ck("65 an imperative table is named as one", fronts(table("impératif"))[1] === "aller (impératif) → tu", JSON.stringify(fronts(table("impératif"))));
ck("65 the table prompt lists the imperative", /"impératif", or "unknown"/.test(parse));

// 66
const day = (head, body) => `${head}\n${body}\n`;
const homework = sliceCaderno(day("30 de octubre", "Vocabulario: contar, algo largo aquí\nLo dejamos para la próxima vez = lo hacemos luego\nOtra línea de la clase\nPara la próxima vez :\nAprender los números"), { now: new Date("2026-11-02T12:00:00Z") });
ck("66 a line that only mentions 'la próxima vez' doesn't end the class",
  /Otra línea/.test(homework[0].text) && !/Aprender/.test(homework[0].text), JSON.stringify(homework[0]?.text));

// 67
const long = (...d) => d.map((x) => day(x, "Vocabulario: algo largo que se escribió aquí")).join("\n");
const yrs = sliceCaderno(long("8 de noviembre", "20 de octubre", "9 de octubre", "9 de octubre", "16 de octubre", "28 de diciembre", "3 de marzo"), { now: new Date("2026-11-09T12:00:00Z") }).map((b) => b.date);
ck("67 each class takes its year from the class above it",
  yrs.join(" ") === "2026-11-08 2026-10-20 2026-10-09 2026-10-09 2026-10-16 2025-12-28 2025-03-03", yrs.join(" "));
const late = sliceCaderno(long("8 de octubre"), { now: new Date("2027-09-07T11:00:00Z") })[0].date;
ck("67 the top class keeps the old rule", late === "2026-10-08" || late === "2027-10-08");

// 68
const two = cadernoCardsFromExtracted([
  { front: "el tiempo.", back: "the weather", dates: ["2026-10-01"] },
  { front: "el tiempo", back: "the weather", dates: ["2026-10-02"] },
  { front: "el tiempo", back: "time", dates: ["2026-10-03"] },
  { front: "Es que...", back: "It's that", dates: ["2026-10-03"] },
]);
ck("68 one front with two meanings stays two cards, for the matching step to ask about; exact repeats join",
  two.length === 3 && two.find((c) => c.back === "the weather").dates.length === 2, JSON.stringify(two));
ck("68 a final full stop goes, an ellipsis stays", two.some((c) => c.front === "Es que..."), JSON.stringify(two.map((c) => c.front)));

// 69 to 73, 75: the hook and the dialog
ck("69 a failed later run keeps what came before and reports the link", /const partial = \{ ok: true/.test(hook) && /result\.error\) setError\(`Your \$\{notes\} is linked/.test(dialog));
ck("70 a failed check reads the link row again and the box shows the error", /await rereadLink\(\);\s*if \(added > 0\)/.test(hook) && /cahier\.error \|\| cahier\.link\.last_error/.test(dialog));
ck("71 the check on open is guarded in memory and keyed on the user, not the row", /checkedOnOpen\.current === mark/.test(hook) && /\[loaded, linkedUser, userId, sync, checkKey\]/.test(hook));
ck("72 the loop stops when a run leaves no fewer classes", /data\.remaining >= prevRemaining\) break/.test(hook));
ck("73 linking is disabled during a check, and a busy sync says so", /tab === "link" && !!cahier\?\.checking/.test(dialog) && /busy: true, error: `Your/.test(hook));

// 74
const id = "1AbC_-xyz";
ck("74 every form of a Google Doc link gives its id",
  ["https://docs.google.com/document/d/", "https://docs.google.com/document/u/1/d/", "https://docs.google.com/document/u/0/d/"].every((u) => docIdFrom(`${u}${id}/edit`) === id) && docIdFrom("https://example.com/x") === null);

// 75
ck("75 a failed link read keeps the link already known", /if \(!err \|\| noTable\) setLink\(data \|\| null\)/.test(hook));

ck.done();
