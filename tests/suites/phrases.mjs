// How often a card's French is said, counted as a whole phrase
// (scripts/phrases.mjs, 2026-10-14), on a handful of Lexique's lines and of
// subtitles written for the test: a word in its dictionary form counted in all
// its forms, one written in a form in that form, the article dropped and the
// noun after it kept a noun, "se" and "son" standing for their kind, choices
// counted apart and the card taking the most said, a spelling shared between
// words counted by its share but in full where the card spells it so, "œ" as
// "oe", whoever or whatever after a verb ending the phrase, and drills, notes
// and patterns not counted. No browser, no files.

import { checker } from "../check.mjs";
import { readLexique, phrasesOf, phraseKey, counter, saidPerMillion, MIN_TIMES } from "../../scripts/phrases.mjs";

const ck = checker();

const LEXIQUE = [
  "ortho\tphon\tlemme\tcgram\tgenre\tnombre\tfreqlemfilms2\tfreqlemlivres\tfreqfilms2",
  "ai\te\tavoir\tAUX\t\t\t1\t1\t100", "ai\te\tavoir\tVER\t\t\t1\t1\t50", "avait\tavE\tavoir\tAUX\t\t\t1\t1\t30",
  "avoir\tavwaR\tavoir\tVER\t\t\t1\t1\t20", "a\ta\tavoir\tAUX\t\t\t1\t1\t200",
  "besoin\tb@zw5\tbesoin\tNOM\tm\ts\t1\t1\t10", "de\td@\tde\tPRE\t\t\t1\t1\t300", "je\tZ@\tje\tPRO:per\t\t\t1\t1\t300",
  "suis\ts8i\têtre\tAUX\t\t\t1\t1\t12", "suis\ts8i\têtre\tVER\t\t\t1\t1\t7", "suis\ts8i\tsuivre\tVER\t\t\t1\t1\t18",
  "est\te\têtre\tVER\t\t\t1\t1\t194", "est\tEst\test\tNOM\tm\ts\t1\t1\t0.8", "serais\ts@RE\têtre\tVER\t\t\t1\t1\t3",
  "suivre\ts8ivR\tsuivre\tVER\t\t\t1\t1\t5", "suit\ts8i\tsuivre\tVER\t\t\t1\t1\t6",
  "poste\tpOst\tposte\tNOM\tm\ts\t1\t1\t9", "postes\tpOst\tposte\tNOM\tm\tp\t1\t1\t2",
  "pouvoir\tpuvwaR\tpouvoir\tVER\t\t\t1\t1\t1.3", "pouvoir\tpuvwaR\tpouvoir\tNOM\tm\ts\t1\t1\t0.9",
  "peux\tp2\tpouvoir\tVER\t\t\t1\t1\t40", "pouvoirs\tpuvwaR\tpouvoir\tNOM\tm\tp\t1\t1\t0.5",
  "rendre\tR@dR\trendre\tVER\t\t\t1\t1\t3", "rends\tR@\trendre\tVER\t\t\t1\t1\t2", "compte\tk§t\tcompte\tNOM\tm\ts\t1\t1\t8",
  "me\tm@\tme\tPRO:per\t\t\t1\t1\t20", "se\ts@\tse\tPRO:per\t\t\t1\t1\t30",
  "aujourd'hui\toZuRd8i\taujourd'hui\tADV\t\t\t1\t1\t10", "énervé\tenERve\ténervé\tADJ\t\t\t1\t1\t1", "fâché\tfaSe\tfâché\tADJ\t\t\t1\t1\t1",
  "temps\tt@\ttemps\tNOM\tm\ts\t1\t1\t50", "perdre\tpERdR\tperdre\tVER\t\t\t1\t1\t5", "perds\tpER\tperdre\tVER\t\t\t1\t1\t2",
  "a\ta\ta\tNOM\tm\ts\t1\t1\t81", "as\tas\tas\tNOM\tm\ts\t1\t1\t19", "as\ta\tavoir\tAUX\t\t\t1\t1\t2144",
  "sens\ts@\tsentir\tVER\t\t\t1\t1\t241", "sens\ts@s\tsens\tNOM\tm\t\t1\t1\t118",
  "oeuf\t9f\toeuf\tNOM\tm\ts\t1\t1\t5", "oeufs\t2\toeuf\tNOM\tm\tp\t1\t1\t5",
  "appeler\tap@le\tappeler\tVER\t\t\t1\t1\t30", "attendre\tat@dR\tattendre\tVER\t\t\t1\t1\t40", "quelqu'un\tkElk1\tquelqu'un\tPRO:ind\t\t\t1\t1\t629",
  "mauvais\tmovE\tmauvais\tADJ\t\t\t1\t1\t50", "mauvais\tmovE\tmauvais\tNOM\tm\t\t1\t1\t1", "choix\tSwa\tchoix\tNOM\tm\t\t1\t1\t20",
].join("\n");
const lex = readLexique(LEXIQUE);

console.log("\n  a card's phrases");
{
  ck("a phrase is its words in order", phrasesOf("avoir besoin de", lex).length === 1 && phrasesOf("avoir besoin de", lex)[0].length === 3);
  ck("a drill, a note and a pattern have none",
     ["vivre (présent) → je", "cela = ça", "le/la seul(e) + nom"].every((f) => phrasesOf(f, lex).length === 0));
  ck("a slash inside a phrase swaps a word: two choices", phrasesOf("faire/avoir confiance", lex).length === 2);
  ck("a list of single words: each is a choice", phrasesOf("épais, épaisse", lex).length === 2);
  ck("a comma in a phrase is a pause, not a list", phrasesOf("ce qui compte, c'est …", lex).length === 1);
  ck("an article on its own isn't a choice: le/la peintre is peintre either way",
     new Set(phrasesOf("le/la peintre", lex).map(phraseKey)).size === 1 && phrasesOf("le/la peintre", lex)[0].length === 1);
  ck("a note in brackets is left out", phraseKey(phrasesOf("lourd (adj)", lex)[0]) === phraseKey(phrasesOf("lourd", lex)[0]));
  ck("a list of words with their articles: each is a choice", phrasesOf("un chien, une chienne", lex).length === 2 && phrasesOf("les bijoux, les genoux, les hiboux", lex).length === 3);
  const same = (a, b) => phrasesOf(a, lex).map(phraseKey).join("|") === phrasesOf(b, lex).map(phraseKey).join("|");
  ck("after a verb, whoever or whatever ends the phrase", same("appeler quelqu'un", "appeler") && same("s'attendre à quelque chose", "s'attendre à") && same("appeler qqn", "appeler"));
  ck("not after a verb, \"quelque chose\" is part of the phrase", phrasesOf("quelque chose d'autre", lex)[0].length === 4);
}

console.log("\n  counting in running French");
{
  const cards = ["avoir besoin de", "se rendre compte", "un poste", "le pouvoir", "je serais", "suivre", "énervé / fâché", "aujourd'hui", "perdre son temps"];
  const c = counter(cards.flatMap((f) => phrasesOf(f, lex)), lex);
  const lines = [
    "J'ai besoin de toi.", "Elle avait besoin d'aide.", "Je me rends compte que c'est tard.",
    "Le poste est libre, et deux postes encore.", "Je peux venir. Le pouvoir, c'est tout.",
    "Je suis là.", "Il suit la route.", "Aujourd'hui, je suis fâché.", "Je perds mon temps.",
  ];
  for (const l of lines) c.add(l);
  const r = c.result();
  const n = (f) => Math.max(...phrasesOf(f, lex).map((p) => r.counts.get(phraseKey(p)) || 0));
  ck("avoir besoin de: every form of avoir, d' for de", n("avoir besoin de") === 2, `${n("avoir besoin de")}`);
  ck("se rendre compte: \"me\" for \"se\", \"rends\" for \"rendre\"", n("se rendre compte") === 1, `${n("se rendre compte")}`);
  ck("un poste: the noun in both numbers, with or without an article", n("un poste") === 2, `${n("un poste")}`);
  ck("le pouvoir: the noun's share of \"pouvoir\", never \"je peux\"", Math.abs(n("le pouvoir") - 0.9 / (0.9 + 1.3)) < 1e-6, `${n("le pouvoir")}`);
  ck("je serais: a form counts as written, so \"je suis\" isn't it", n("je serais") === 0, `${n("je serais")}`);
  ck("suivre: \"suis\" is être's, so only \"suit\" counts", Math.abs(n("suivre") - 1) < 1e-9, `${n("suivre")}`);
  ck("énervé / fâché: the most said choice", n("énervé / fâché") === 1, `${n("énervé / fâché")}`);
  ck("aujourd'hui is one word, apostrophe and all", n("aujourd'hui") === 1, `${n("aujourd'hui")}`);
  ck("perdre son temps: \"mon\" for \"son\"", n("perdre son temps") === 1, `${n("perdre son temps")}`);
  ck("every word of every line is counted", r.words === lines.join(" ").match(/[a-zàâäæçéèêëîïôœùûüÿ0-9]+'|[a-zàâäæçéèêëîïôœùûüÿ0-9]+(?:-[a-zàâäæçéèêëîïôœùûüÿ0-9]+)*/gi).length - 1, `${r.words}`);
}

console.log("\n  a spelling shared between words");
{
  const cards = ["c'est vrai", "tu as raison", "il y a", "je sens", "le sens", "un œuf", "le mauvais choix", "un de plus"];
  const c = counter(cards.flatMap((f) => phrasesOf(f, lex)), lex);
  const lines = ["C'est vrai.", "Tu as raison.", "Il y a un as.", "Je sens que c'est vrai.", "Des œufs, et un oeuf.", "C'est un mauvais choix.", "Et de plus, il en faut un de plus."];
  for (const l of lines) c.add(l);
  const r = c.result();
  const n = (f) => Math.max(...phrasesOf(f, lex).map((p) => r.counts.get(phraseKey(p)) || 0));
  ck("\"est\" counts in full in \"c'est\", though Lexique also has \"est\" for the east", n("c'est vrai") === 2, `${n("c'est vrai")}`);
  ck("so do \"as\" and \"a\", though Lexique also has an ace and the letter a", n("tu as raison") === 1 && n("il y a") === 1, `${n("tu as raison")}, ${n("il y a")}`);
  ck("\"je sens\": spelled as the card spells it, in full", n("je sens") === 1, `${n("je sens")}`);
  ck("\"le sens\": the noun's share of \"sens\"", Math.abs(n("le sens") - 118 / (118 + 241)) < 1e-6, `${n("le sens")}`);
  ck("œ and oe are the same letters", n("un œuf") === 2, `${n("un œuf")}`);
  ck("\"le mauvais choix\": before more words the article stands for any, and \"mauvais\" is any \"mauvais\"", n("le mauvais choix") === 1, `${n("le mauvais choix")}`);
  ck("\"un de plus\" isn't \"de plus\"", n("un de plus") === 1, `${n("un de plus")}`);
}

console.log(`\n  said fewer than ${MIN_TIMES} times, a card isn't ordered by it`);
{
  const c = counter(["avoir besoin de", "un poste"].flatMap((f) => phrasesOf(f, lex)), lex);
  for (let i = 0; i < MIN_TIMES; i++) c.add("J'ai besoin de toi.");
  c.add("Le poste est libre.");
  const r = c.result();
  ck(`said ${MIN_TIMES} times: per million words`, Math.abs(saidPerMillion("avoir besoin de", lex, r) - (MIN_TIMES / r.words) * 1e6) < 1e-6, `${saidPerMillion("avoir besoin de", lex, r)}`);
  ck("said once: 0, and it keeps its place", saidPerMillion("un poste", lex, r) === 0);
  ck("a drill: 0", saidPerMillion("vivre (présent) → je", lex, r) === 0);
}

const n = ck.fails();
console.log(n ? `\n  FAILED: ${n}` : "\n  all checks passed");
process.exit(n ? 1 : 0);
