// Le subjonctif passé — built 2026-11-15 from Laura Caufour's LFL METHOD
// sheets in Google Drive (Français / Le subjonctif passé): "Le subjonctif
// passé" and "EXERCICES - Le subjonctif passé" (file ids in
// .claude/topic-lessons-draft/subjonctifpasse/sources.md). One of her topic
// lessons, in no stage (owner, 2026-11-13). She has no answer key for it:
// every answer here was written for the app and checked.
//
// Each entry is [front, back, category, section].
//
// Card shapes:
//   "prendre (subjonctif passé) → je" / "que j'aie pris"       drill; its line comes from its shape
//   "Léa est contente que tu l'aies appelée ? → Oui, …" / "Oui, elle est contente que je l'aie appelée"
//   "Je suis surpris qu'il soit arrivé → à la forme négative" / "Je suis surpris qu'il ne soit pas arrivé"
//   "prendre → Je suis désolé qu'il l'___ comme ça hier" / "ait pris"   present or past
//   "dire → Je suis désolé ___ ça" / "d'avoir dit"             de and the past infinitive
//   "Je regrette d'être parti si tôt" / "I regret leaving so early"   both ways round
//
// Every form is checked on an arrow card, marked exactly (accents aside):
// a phrase card's typo tolerance would pass "que j'ai pris" for "que j'aie
// pris" or "qu'elle soit parti" for "qu'elle soit partie". Typed in French,
// the phrase cards let those slips through ("J'ai peur qu'ils n'ait pas
// compris" passes, tried), so they are there for the meaning.
//
// WHAT WAS SAMPLED, AND WHAT WAS LEFT:
//   - Her two tables (prendre with avoir, aller with être): ten drills, on
//     those two and eight other verbs, each a different verb, with être (aller, partir, venir, se lever) and avoir
//     both represented, and the -e and -s after être.
//   - Ex. 1 (18 questions to answer yes): five, chosen for the person that
//     changes (tu → je, j' → tu) and a pronoun (l'aies appelée, lui aies
//     menti).
//   - Ex. 2 (10 sentences into the negative): five, with ne before a vowel
//     (n'aie), a verb with se and a pronoun (ne t'ait pas appelé).
//   - Her section 2 (present or past) and ex. 4: five gaps from her
//     sentences, each given a time word so the gap has one right answer (see
//     DEPARTURES).
//   - Her section 3 (past subjunctive or past infinitive): four gaps from her
//     lesson and ex. 4, all with the same person, so the answer is de and
//     the past infinitive.
//   - Ex. 3 and 4 (translate): six as phrase cards.
//   - Left out: ex. 4 sentences whose main verb is in the past ("Were you
//     afraid that her son had an accident?"), which her section 2 doesn't
//     cover; sentences with two right answers in French (ex. 4 no. 21, "I
//     will stay until they're done": aient fini and finissent are both
//     right). Ex. 3 nos. 11, 14 and 18 and ex. 4 no. 29 (à moins que),
//     ex. 4 nos. 4, 13 and 15 (a plain infinitive) and ex. 1 nos. 4, 9 and
//     13 (jusqu'à ce que, en admettant que) were not sampled; the
//     subjunctive after those words is the present lesson's.
//
// DEPARTURES FROM HER SHEETS:
//   - Ex. 1 no. 6, "que le bébé n'aies pas bien dormi": n'ait. Not a card.
//   - Her section 2's examples and ex. 4's sentences have no time words, and
//     without English a gap in them takes either tense ("Je suis désolé qu'il
//     t'ait dit ça" and "… qu'il te dise ça" are both right). The gap cards add one: hier, la
//     semaine dernière, hier soir (past), lundi prochain, maintenant
//     (present).
//   - Her ex. 2 example puts ne in brackets, "qu'il (ne) soit pas venu":
//     spoken French drops it. The cards keep it, and the Forms tab says so in
//     Detail · advanced.
//
// THE NOTES are her lesson in English: Use (her section 2), Forms (her
// tables and her remark on negatives, -e and -s, adverbs and pronouns, each
// with her example), Same person (her section 3 and its table). Not hers,
// though a card needs it said:
//   - Forms: the participles of the drilled verbs (she sends the reader to
//     her passé composé lesson), and verbs with se taking être.
//   - Same person: de after je suis content, j'ai peur and je regrette, and
//     ne pas before avoir (her example "de ne pas avoir parlé"), said as
//     rules; "de n'avoir pas parlé", the written order, is also accepted.
//   - Forms: ne before a pronoun, and the -e or -s with avoir when l' or les
//     comes first (ex. 1 no. 3, "que tu l'aies appelée").

export const CARDS = [
  // ── The forms (her tables)
  ["prendre (subjonctif passé) → je", "que j'aie pris", "G", "forms"],
  ["comprendre (subjonctif passé) → vous", "que vous ayez compris", "G", "forms"],
  ["faire (subjonctif passé) → il", "qu'il ait fait", "G", "forms"],
  ["pouvoir (subjonctif passé) → je", "que j'aie pu", "G", "forms"],
  ["avoir (subjonctif passé) → tu", "que tu aies eu", "G", "forms"],
  ["être (subjonctif passé) → nous", "que nous ayons été", "G", "forms"],
  ["aller (subjonctif passé) → nous", "que nous soyons allés / que nous soyons allées", "G", "forms"],
  ["partir (subjonctif passé) → elle", "qu'elle soit partie", "G", "forms"],
  ["venir (subjonctif passé) → ils", "qu'ils soient venus", "G", "forms"],
  ["se lever (subjonctif passé) → il", "qu'il se soit levé", "G", "forms"],

  // ── Yes (her ex. 1)
  ["Tu attends que j'aie fini mon projet ? → Oui, …", "Oui, j'attends que tu aies fini ton projet / J'attends que tu aies fini ton projet / Oui, j'attends que tu aies fini / J'attends que tu aies fini / Oui, j'attends que tu l'aies fini / J'attends que tu l'aies fini", "G", "yes"],
  ["Léa est contente que tu l'aies appelée ? → Oui, …", "Oui, elle est contente que je l'aie appelée / Elle est contente que je l'aie appelée / Oui, Léa est contente que je l'aie appelée / Léa est contente que je l'aie appelée", "G", "yes"],
  ["Il doute que tu aies été sincère ? → Oui, …", "Oui, il doute que j'aie été sincère / Il doute que j'aie été sincère", "G", "yes"],
  ["Il est encore énervé que tu lui aies menti ? → Oui, …", "Oui, il est encore énervé que je lui aie menti / Il est encore énervé que je lui aie menti", "G", "yes"],
  ["Marie est déçue que tu n'aies pas pu venir ? → Oui, …", "Oui, elle est déçue que je n'aie pas pu venir / Elle est déçue que je n'aie pas pu venir / Oui, Marie est déçue que je n'aie pas pu venir / Marie est déçue que je n'aie pas pu venir", "G", "yes"],

  // ── No (her ex. 2)
  ["Il est très étonné que j'aie bien compris la leçon → à la forme négative", "Il est très étonné que je n'aie pas bien compris la leçon", "G", "negative"],
  ["Je suis surpris qu'il soit arrivé → à la forme négative", "Je suis surpris qu'il ne soit pas arrivé", "G", "negative"],
  ["Je doute qu'il se soit levé avant 10h → à la forme négative", "Je doute qu'il ne se soit pas levé avant 10h / Je doute qu'il ne se soit pas levé avant 10 h", "G", "negative"],
  ["Je regrette qu'elle t'ait appelé pendant le cours → à la forme négative", "Je regrette qu'elle ne t'ait pas appelé pendant le cours / Je regrette qu'elle ne t'ait pas appelée pendant le cours", "G", "negative"],
  ["C'est mieux qu'elle ait lu le livre avant de partir → à la forme négative", "C'est mieux qu'elle n'ait pas lu le livre avant de partir", "G", "negative"],

  // ── Present or past (her section 2 and ex. 4)
  ["être → Quel dommage que tu ne ___ pas là lundi prochain", "sois", "G", "presentorpast"],
  ["prendre → Je suis désolé qu'il l'___ comme ça hier", "ait pris", "G", "presentorpast"],
  ["pouvoir → Je suis très content que vous ___ parler hier", "ayez pu", "G", "presentorpast"],
  ["pouvoir → C'est vraiment génial que tu ___ me parler maintenant", "puisses", "G", "presentorpast"],
  ["ne pas pouvoir → Je suis énervé qu'on ___ se voir hier soir", "n'ait pas pu", "G", "presentorpast"],

  // ── The same person: de and the past infinitive (her section 3 and ex. 4)
  ["dire → Je suis désolé ___ ça", "d'avoir dit", "G", "infinitive"],
  ["arriver → Je suis étonné ___ à l'heure", "d'être arrivé", "G", "infinitive"],
  ["ne pas parler → J'ai peur ___ assez fort", "de ne pas avoir parlé / de n'avoir pas parlé", "G", "infinitive"],
  ["rater → Je suis déçu ___ mon examen", "d'avoir raté", "G", "infinitive"],

  // ── Her sentences, both ways round (ex. 3 and 4)
  ["C'est génial qu'elle ait réussi ses examens !", "It's great that she passed her exams! / It's great she passed her exams! / It's great that she's passed her exams!", "E", "sentences"],
  ["J'ai peur qu'ils n'aient pas compris", "I'm afraid they didn't understand / I'm afraid they haven't understood / I'm worried they didn't understand / I'm afraid that they didn't understand / I'm worried they haven't understood (ils, with avoir peur)", "E", "sentences"],
  ["Quel dommage que tu n'aies pas pu voir le spectacle", "What a pity that you couldn't see the show / What a pity you couldn't see the show / What a shame that you couldn't see the show / What a shame you couldn't see the show / Too bad you couldn't see the show / What a shame you weren't able to see the show (tu)", "E", "sentences"],
  ["Je ne pense pas qu'il ait eu le temps de l'appeler", "I don't think he had time to call her / I don't think he had the time to call her / I don't think he's had time to call her (with penser)", "E", "sentences"],
  ["Je regrette d'être parti si tôt", "I regret leaving so early / I regret having left so early / I'm sorry I left so early (said by a man, with regretter)", "E", "sentences"],
  ["Je suis désolé de ne pas t'avoir appelé", "I'm sorry I didn't call you / I'm sorry for not calling you / I'm sorry I didn't call / I'm sorry I haven't called you / I'm sorry for not having called you (tu, said by a man to a man)", "E", "sentences"],
];

export const NOTES = [
  {
    tab: "Use",
    h: "1 · What the past subjunctive is for",
    blocks: [
      { t: "lead", v: "After the words that take the subjunctive, use the past subjunctive for something that is over before the time you're talking about: *je suis content que tu aies compris la leçon*, \"I'm glad you understood the lesson\"." },
      { t: "note", v: "For something happening at the same time or later, use the present subjunctive: *je suis content que tu viennes demain*, \"I'm glad you're coming tomorrow\"; *quel dommage que tu ne sois pas là lundi*, \"what a pity you won't be there on Monday\"; *c'est génial que tu puisses me parler maintenant*, \"it's great that you can talk to me now\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Je suis désolé qu'il t'ait dit ça", "I'm sorry he said that to you"],
        ["Je suis étonné qu'il soit arrivé à l'heure", "I'm surprised he arrived on time"],
        ["Je regrette que tu sois parti si tôt", "I'm sorry you left so early"],
        ["C'est super qu'il soit arrivé avant midi", "It's great that he arrived before noon"],
        ["Je vais rester jusqu'à ce qu'il ait fini", "I'll stay until he has finished"],
      ]},
      { t: "note", v: "Most of the time it's the present subjunctive. Use the past one when the first verb is in the present or the future, such as *je suis content*, \"I'm glad\", or *je vais rester*, \"I'll stay\", and the thing after que is over before it." },
    ],
  },
  {
    tab: "Forms",
    h: "2 · How to make it",
    blocks: [
      { t: "lead", v: "Put avoir or être in the present subjunctive, then the past participle: *que j'aie pris*, \"that I took\"." },
      { t: "table", caption: "With avoir and with être", bold: 0,
        cols: ["prendre", "aller"],
        rows: [
          ["que j'aie pris", "que je sois allé(e)"],
          ["que tu aies pris", "que tu sois allé(e)"],
          ["qu'il, qu'elle ait pris", "qu'il soit allé, qu'elle soit allée"],
          ["que nous ayons pris", "que nous soyons allé(e)s"],
          ["que vous ayez pris", "que vous soyez allé(e)(s)"],
          ["qu'ils, qu'elles aient pris", "qu'ils soient allés, qu'elles soient allées"],
        ] },
      { t: "note", v: "Verbs of coming and going, such as aller, venir, partir and arriver, take être, as do verbs with se: *je doute qu'il se soit levé avant 10h*, \"I doubt he got up before 10\"." },
      { t: "note", v: "With être, the participle takes -e for a woman and -s for several people: *il est étonné qu'elle soit partie à l'heure*, \"he's surprised she left on time\"." },
      { t: "note", v: "Ne goes before avoir or être, or before the pronoun in front of them, and pas goes after avoir or être: *je suis contente qu'il ne soit pas venu*, \"I'm glad he didn't come\". Before a vowel, ne becomes n': *que je n'aie pas compris*, \"that I didn't understand\"." },
      { t: "note", v: "With avoir, the participle takes -e or -s only when l' or les before it stands for a woman or for several things: *elle est contente que je l'aie appelée*, \"she's glad I called her\"." },
      { t: "note", v: "A pronoun goes before avoir or être: *je suis content qu'il lui ait parlé*, \"I'm glad he spoke to her\". A word like bien goes after them: *j'attends qu'il ait bien compris pour continuer*, \"I'm waiting until he has really understood before going on\"." },
      { t: "sub", v: "Irregular participles" },
      { t: "pairs", head: ["Verb", "English"], v: [
        ["prendre → pris", "to take → taken"],
        ["comprendre → compris", "to understand → understood"],
        ["faire → fait", "to do → done"],
        ["pouvoir → pu", "to be able to → been able to"],
        ["avoir → eu", "to have → had"],
        ["être → été", "to be → been"],
        ["venir → venu", "to come → come"],
        ["dire → dit", "to say → said"],
      ]},
      { t: "sub", v: "Detail · advanced" },
      { t: "note", v: "When people speak, they often leave out the ne: *je suis contente qu'il soit pas venu*, \"I'm glad he didn't come\". In writing, keep it." },
    ],
  },
  {
    tab: "Same person",
    h: "3 · When it's the same person",
    blocks: [
      { t: "lead", v: "After je suis content, j'ai peur, je regrette and the like, when the person is the same on both sides, use de, then avoir or être and the participle, with no que: *je regrette d'être parti si tôt*, \"I regret leaving so early\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Je suis content d'avoir compris la leçon", "I'm glad I understood the lesson"],
        ["Je suis content que tu aies compris la leçon", "I'm glad you understood the lesson"],
        ["Je suis désolé d'avoir dit ça", "I'm sorry I said that"],
        ["Je suis désolé qu'il t'ait dit ça", "I'm sorry he said that to you"],
        ["Je suis étonné d'être arrivé à l'heure", "I'm surprised I arrived on time"],
        ["Je suis étonné qu'il soit arrivé à l'heure", "I'm surprised he arrived on time"],
      ]},
      { t: "note", v: "De becomes d' before avoir and être. Ne pas goes before them both: *j'ai peur de ne pas avoir parlé assez fort*, \"I'm afraid I didn't speak loudly enough\"." },
      { t: "note", v: "The trap: *je regrette que je sois parti* is wrong. With the same person, say *je regrette d'être parti*, \"I regret leaving\"." },
    ],
  },
];

export const LESSON = {
  id: "subjonctifpasse",
  title: "Le subjonctif passé",
  subtitle: "Que j'aie compris, qu'il soit parti: the subjunctive for what is already over",
  source: "LFL METHOD by Laura Caufour",
  cards: CARDS,
  notes: NOTES,
  // The order a student meets NEW cards in (reviews are FSRS's): the forms
  // and her two exercises on them, then her two choices (present or past,
  // and the same person), then her sentences.
  teachingOrder: ["forms", "yes", "negative", "presentorpast", "infinitive", "sentences"],
  // The line shown above a grammar card saying what to type (see
  // src/lib/cardInstruction.js). The drills get theirs from their shape
  // ("Past subjunctive, with que je").
  instructions: {
    yes: "Answer yes in a full sentence",
    negative: "Make the verb after que negative, with ne … pas",
    presentorpast: "Fill the gap with the verb given, in the present or the past subjunctive",
    infinitive: "Fill the gap with the verb given, in the past, in the form that fits",
  },
};

export default LESSON;
