// Code check of 7 November 2026, problems 189 to 197 and 206 to 222 (flashcards
// and Podcasts tidy-ups). No browser, no database.
import { checker } from "../check.mjs";
import { classifyCard } from "../../src/lib/cardTypes.js";
import { storyAt, transcriptSections } from "../../src/lib/podcastProgress.js";
import { fetchText } from "../../api/_lib/podcastSource.js";

const ck = checker();

// 191: "ce matin" is Vocab like "cette semaine"; a clause with "ce" stays a Phrase.
const type = (f) => classifyCard({ f, b: "x", cat: "vocab" });
ck("191 ce matin is Vocab", type("ce matin") === "vocab");
ck("191 cette semaine is Vocab", type("cette semaine") === "vocab");
ck("191 ce sont is a Phrase", type("ce sont") === "phrase");
ck("191 ce n’est pas is a Phrase", type("ce n’est pas") === "phrase");

// 209: a story with no start time has no time, not 0:00.
const secs = transcriptSections(["a", "b"], [{ t: null, title: "x", p: 0 }, { t: 30, title: "y", p: 1 }], [0, 1]);
ck("209 a story with no time comes out with t null", secs[0].t === null && secs[1].t === 30, JSON.stringify(secs.map((s) => s.t)));
ck("209 the story playing at 10 s is not the one with no time", storyAt([{ t: null }, { t: 30 }], 10) === -1);

// 220: a broken forwarding address gets a plain sentence.
try {
  await fetchText("https://francaisfacile.rfi.fr/x", { fetchImpl: async () => ({ status: 302, ok: false, headers: { get: () => "https://exa mple.com:99999999" }, body: null }) });
  ck("220 a broken forwarding address is refused", false);
} catch (e) {
  ck("220 a broken forwarding address gets a plain sentence, not Invalid URL", e.code === "bad_url" && !/Invalid URL/.test(e.message), e.message);
}

ck.done();
