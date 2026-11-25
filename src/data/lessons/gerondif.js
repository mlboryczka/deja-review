// Le gérondif — built 2026-11-13 from Laura Caufour's LFL METHOD sheets in
// Google Drive (Français / Le gérondif): "Le gérondif - Leçon", "EXERCICES -
// Le gérondif" and "CORRECTION EXERCICES - Le gérondif", copied word for word
// to .claude/topic-lessons-draft/gerondif/sources.md. One of her topic
// lessons, outside her numbered course, so it is in no stage (owner,
// 2026-11-13: "they don't need to be bucketed because they are each their own
// category").
//
// Each entry is [front, back, category, section].
//
// Card shapes:
//   "regarder → en ___" / "regardant / en regardant"      the -ant form, with or without en
//   "lire → Elle s'est endormie ___ son livre" / "en lisant"   en + -ant in her sentence
//   "ne pas essayer → C'est ___ qu'on est sûr d'échouer" / "en n'essayant pas"
//   "se lever → Je les prends toujours ___" / "en me levant"
//   "la voir → Il est tombé amoureux ___ …" / "en la voyant"
//   "Elle parle toujours en dormant" / "She always talks in her sleep"   both ways round
//
// WHY THE GAPS ARE ARROW CARDS. Phrase cards are marked with typo tolerance,
// which would forgive this lesson's mistakes: "en regarder", "en finisant",
// "en ne essayant pas", "en se levant" for "en me levant". On an arrow card
// the answer is marked exactly (accents aside), so each of those is wrong.
// Every gap gives the verb as a cue in front of the arrow, never in
// brackets: the panel's prompt cleaner takes out a bracket that repeats a
// word of the answer.
//
// WHAT WAS SAMPLED, AND WHAT WAS LEFT:
//   - Her table of -ant forms: one card per kind of form: regarder and
//     essayer (-er, essayer keeps its y), finir (-issant), être, avoir and
//     savoir (the three that don't come from the nous form), and prendre,
//     faire, dire, voir and venir. Manger (her ex. 1 no. 12) is there for
//     the e it keeps. Choisir, agir, nourrir, aller, vouloir, pouvoir and
//     attendre follow a rule another card drills. Lire, courir, sortir,
//     partir, conduire, travailler, chercher and vendre are drilled only in
//     her sentences, so no verb has a form card and a gap card both.
//   - Phrase cards carry "(with en)" on the English side, because the
//     English also fits French without a gérondif ("dans son sommeil",
//     "quand tu arrives"), which the marker would refuse.
//   - Ex. 1 asks for an English translation and whether the gérondif says
//     "at the same time" or "how". The translation is the phrase cards; the
//     label is not a card, since naming it is reciting a rule.
//   - Ex. 2 and 3: gap cards from her sentences, sorted by what they test
//     (same time, how, negative, verbs with se, pronouns), and seven of her
//     sentences as phrase cards.
//   - Left out: ex. 3 nos. 2, 6 and 12, whose answers use réaliser for
//     "to realize" (see DEPARTURES); ex. 2 no. 22 (se faire mal au dos, a
//     second thing to learn); repeats of a sentence shape another card has.
//
// DEPARTURES FROM HER SHEETS:
//   - Her lesson's second negative example, "Tu ne vas pas arranger les
//     choses en répondant pas", has no ne; her key to ex. 2 no. 11 has
//     "en ne répondant pas à leurs messages", and that is the card. Her
//     "(ne)" in brackets is spoken French, said in the Negative tab's
//     Detail · advanced.
//   - Her key to ex. 3 no. 2, "Ils ont ça réalisé en se parlant", puts ça
//     before the participle; it goes after: "Ils ont réalisé ça". Not a card.
//   - Ex. 3 no. 1's English reads "He fell I love"; the card is in French
//     only.
//   - Her key to ex. 2 no. 20, "C'est en ne faisant rien que le problème a
//     empiré", gives the gérondif a different subject from its verb: it says
//     the problem did nothing. A gérondif has the subject of the verb it
//     goes with (French Wikipedia, "Gérondif": "son sujet étant toujours le
//     même que celui du verbe conjugué"),
//     so the card reads "C'est en ne faisant rien qu'on a laissé le problème
//     empirer", with her answer, "en ne faisant rien".
//   - Her lesson files "Je me suis cassé la jambe en faisant du ski" under
//     "le moyen ou la manière"; breaking a leg isn't done on purpose, so the
//     Use tab's heading is "How it happens", which fits it and "Il a gagné
//     de l'argent en travaillant très dur" alike. Her lesson gives three
//     English ways; the notes add "when working", which her own examples
//     use ("Close the door when leaving").
//   - Réaliser for "to realize, become aware" (her ex. 3 nos. 2, 6 and 12)
//     is often called an anglicism, with se rendre compte preferred; that
//     was not looked up for this lesson. None of those sentences is a card,
//     so nothing has to choose.
//
// THE NOTES are her lesson in English, on the impératif's model: Use (her
// two uses and the three English ways to say it, with her examples), Forms
// (her table, by kind of verb), Negative (her rule), Pronouns. Not hers,
// though her exercises show each one and a card needs it stated:
//   - Forms: "most other verbs: the nous form of the present, without -ons,
//     plus -ant" (her table says only "radical irrégulier"), and "être,
//     avoir and savoir don't follow the nous form".
//   - Forms, Detail · advanced: -ger verbs keep their e (mangeant, her ex. 1
//     no. 12), -cer verbs take a ç.
//   - Negative: n' before a vowel (her key, ex. 2 no. 7), and rien in place
//     of pas (her key, ex. 2 no. 20).
//   - Pronouns: the whole tab. Her key puts every pronoun between en and the
//     verb (en la voyant, en les vendant, en y allant, en en parlant, en
//     l'entendant), and a verb with se takes the person's me, te, se, nous
//     or vous (en me réveillant, en t'habillant, en vous parlant).

export const CARDS = [
  // ── The -ant form, from her table
  ["regarder → en ___", "regardant / en regardant", "G", "forms"],
  ["essayer → en ___", "essayant / en essayant", "G", "forms"],
  ["manger → en ___", "mangeant / en mangeant", "G", "forms"],
  ["finir → en ___", "finissant / en finissant", "G", "forms"],
  ["prendre → en ___", "prenant / en prenant", "G", "forms"],
  ["faire → en ___", "faisant / en faisant", "G", "forms"],
  ["dire → en ___", "disant / en disant", "G", "forms"],
  ["voir → en ___", "voyant / en voyant", "G", "forms"],
  ["venir → en ___", "venant / en venant", "G", "forms"],
  ["être → en ___", "étant / en étant", "G", "forms"],
  ["avoir → en ___", "ayant / en ayant", "G", "forms"],
  ["savoir → en ___", "sachant / en sachant", "G", "forms"],

  // ── At the same time (her ex. 1 and 2)
  ["lire → Elle s'est endormie ___ son livre", "en lisant", "G", "same"],
  ["courir → Il est arrivé ___ parce qu'il était en retard", "en courant", "G", "same"],
  ["partir → Tu peux laisser la clé là-bas ___ ?", "en partant", "G", "same"],
  ["conduire → Il est très dangereux de regarder son téléphone ___", "en conduisant", "G", "same"],
  ["sortir → Ferme la porte ___", "en sortant", "G", "same"],

  // ── How it's done (her ex. 1, 2 and 3)
  ["travailler → Elle est devenue riche ___ avec son père", "en travaillant", "G", "how"],
  ["vendre → L'entreprise gagne de l'argent ___ des données", "en vendant", "G", "how"],
  ["chercher → On a découvert ce petit restaurant ___ autre chose", "en cherchant", "G", "how"],

  // ── Negative (her lesson and ex. 2)
  ["ne pas essayer → C'est ___ qu'on est sûr d'échouer", "en n'essayant pas", "G", "negative"],
  ["ne pas répondre → Tu ne vas pas arranger les choses ___ à leurs messages", "en ne répondant pas", "G", "negative"],
  ["ne rien faire → C'est ___ qu'on a laissé le problème empirer", "en ne faisant rien", "G", "negative"],

  // ── Verbs with se (her ex. 2 and 3)
  ["se lever → Je les prends toujours ___", "en me levant", "G", "reflexive"],
  ["se réveiller → C'est la première chose à laquelle je pense ___", "en me réveillant", "G", "reflexive"],
  ["s'habiller → Tu te brosses les dents ___ ?", "en t'habillant", "G", "reflexive"],
  ["se parler → Vous avez compris ça ___ ?", "en vous parlant", "G", "reflexive"],
  ["se concentrer → Il a été élu ___ sur les jeunes", "en se concentrant", "G", "reflexive"],

  // ── Pronouns (her ex. 3)
  ["la voir → Il est tombé amoureux ___ pour la première fois", "en la voyant", "G", "pronouns"],
  ["les vendre → Il a gagné un peu d'argent ___", "en les vendant", "G", "pronouns"],
  ["y aller → Je l'ai vue ___", "en y allant", "G", "pronouns"],
  ["en parler → C'est ___ que tu peux comprendre", "en en parlant", "G", "pronouns"],
  ["l'entendre → J'ai sursauté ___ ouvrir la porte", "en l'entendant", "G", "pronouns"],
  ["les voir → ___ partir ensemble, elle a pleuré", "en les voyant", "G", "pronouns"],

  // ── Her sentences, both ways round (ex. 1 and 2, with her key's English)
  ["Prends tes clés en sortant", "Take your keys when you leave / Take your keys as you leave / Take your keys on your way out / Take your keys when you go out (tu, with en)", "E", "sentences"],
  ["Elle parle toujours en dormant", "She always talks in her sleep / She always talks while sleeping / She always talks while she sleeps / She always talks when she sleeps (with en)", "E", "sentences"],
  ["Je me suis coupé le doigt en coupant des légumes", "I cut my finger cutting vegetables / I cut my finger while cutting vegetables / I cut my finger while I was cutting vegetables / I cut my finger chopping vegetables / I cut my finger while chopping vegetables (with en)", "E", "sentences"],
  ["Elle a appris l'anglais en regardant des séries", "She learned English by watching series / She learned English by watching TV series / She learnt English by watching series / She learnt English by watching TV series / She learned English by watching shows / She learned English by watching TV shows (with en)", "E", "sentences"],
  ["Tu pourrais faire des économies en mangeant moins au restaurant", "You could save money by eating out less / You could save money by eating out less often / You could save money by eating at restaurants less (tu, with en)", "E", "sentences"],
  ["J'écoute souvent un podcast en prenant ma douche", "I often listen to a podcast while taking a shower / I often listen to a podcast while I take a shower / I often listen to a podcast while showering / I often listen to a podcast while having a shower (with en)", "E", "sentences"],
  ["Appelle-moi en arrivant", "Call me when you get there / Please call me when you get there / Call me when you arrive / Call me when you get here / Call me when you get in (tu, with en)", "E", "sentences"],
];

export const NOTES = [
  {
    tab: "Use",
    h: "1 · What the gérondif is for",
    blocks: [
      { t: "lead", v: "The gérondif, *en* and a verb ending in -ant, says that something happens at the same time as something else, or how it happens: *en travaillant*, \"while working\" or \"by working\"." },
      { t: "sub", v: "At the same time" },
      { t: "pairs", head: ["French", "English"], v: [
        ["Je l'ai appelé en allant au travail", "I called him while going to work"],
        ["Elle écoute toujours de la musique en travaillant", "She always listens to music while working"],
        ["Ferme la porte en partant", "Close the door when leaving"],
      ]},
      { t: "sub", v: "How it happens" },
      { t: "pairs", head: ["French", "English"], v: [
        ["Il a gagné de l'argent en travaillant très dur", "He earned money by working very hard"],
        ["Je me suis cassé la jambe en faisant du ski", "I broke my leg skiing"],
      ]},
      { t: "note", v: "English says it in several ways: *en travaillant* can be \"working\", \"by working\", \"while working\" or \"when working\"." },
    ],
  },
  {
    tab: "Forms",
    h: "2 · How to make it",
    blocks: [
      { t: "lead", v: "Put *en* in front of the verb's -ant form. For a verb ending in -er, take off the -er and add -ant: *regarder → en regardant*, \"while watching\"." },
      { t: "forms", label: "Examples", v: ["regarder → regardant", "chercher → cherchant", "essayer → essayant"] },
      { t: "sub", v: "Verbs like finir" },
      { t: "note", v: "For finir and choisir, take off the -ir and add -issant: *finir → en finissant*, \"while finishing\"." },
      { t: "forms", label: "Examples", v: ["finir → finissant", "choisir → choisissant", "agir → agissant", "nourrir → nourrissant"] },
      { t: "sub", v: "Verbs like prendre, faire and sortir" },
      { t: "note", v: "Verbs such as prendre, faire, voir and sortir take the nous form of the present, drop the -ons and add -ant: *nous prenons → en prenant*, \"while taking\". Sortir is not like finir: *nous sortons → en sortant*, \"while going out\"." },
      { t: "table", caption: "From the nous form", bold: 1,
        cols: ["Verb", "-ant form"],
        rows: [
          ["prendre (nous prenons)", "prenant"],
          ["faire (nous faisons)", "faisant"],
          ["dire (nous disons)", "disant"],
          ["voir (nous voyons)", "voyant"],
          ["venir (nous venons)", "venant"],
          ["lire (nous lisons)", "lisant"],
          ["sortir (nous sortons)", "sortant"],
          ["courir (nous courons)", "courant"],
        ] },
      { t: "note", v: "Three verbs don't follow the nous form: *être → étant*, *avoir → ayant* and *savoir → sachant*." },
      { t: "sub", v: "Detail · advanced" },
      { t: "note", v: "A verb ending in -ger keeps its e before -ant: *manger → en mangeant*, \"while eating\"." },
    ],
  },
  {
    tab: "Negative",
    h: "3 · Saying not",
    blocks: [
      { t: "lead", v: "Put *ne* after *en* and *pas* after the verb: *en ne répondant pas*, \"by not answering\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Tu empires la situation en ne prenant pas de décision", "You're making things worse by not deciding"],
        ["Tu ne vas pas arranger les choses en ne répondant pas", "You won't fix things by not answering"],
      ]},
      { t: "note", v: "Before a vowel, ne becomes n': *en n'essayant pas*, \"by not trying\"." },
      { t: "note", v: "To say \"nothing\", put rien where pas goes: *en ne faisant rien*, \"by doing nothing\"." },
      { t: "sub", v: "Detail · advanced" },
      { t: "note", v: "When people speak, they often leave out the ne: *en répondant pas*, \"by not answering\". In writing, keep it." },
    ],
  },
  {
    tab: "Pronouns",
    h: "4 · Him, her, it and them",
    blocks: [
      { t: "lead", v: "A pronoun such as la, \"her\", les, \"them\", y, \"there\", or en, \"about it\", goes between *en* and the verb: *en la voyant*, \"on seeing her\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Il a gagné un peu d'argent en les vendant", "He made a little money by selling them"],
        ["Je l'ai vue en y allant", "I saw her on my way there"],
        ["J'ai sursauté en l'entendant ouvrir la porte", "I jumped when I heard him open the door"],
      ]},
      { t: "note", v: "Two en in a row is right: the first is the gérondif's, the second means \"about it\": *c'est en en parlant que tu peux comprendre*, \"it's by talking about it that you can understand\"." },
      { t: "sub", v: "Verbs with se" },
      { t: "note", v: "With a verb like se lever, the se changes to match the person doing it: *je les prends en me levant*, \"I take them when I get up\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Je les prends en me levant", "I take them when I get up"],
        ["Tu te brosses les dents en t'habillant ?", "You brush your teeth while getting dressed?"],
        ["Il a été élu en se concentrant sur les jeunes", "He was elected by focusing on young people"],
        ["Vous avez compris ça en vous parlant ?", "Did you work that out by talking to each other?"],
      ]},
    ],
  },
];

export const LESSON = {
  id: "gerondif",
  title: "Le gérondif",
  subtitle: "En + -ant: doing two things at once, and how something happens",
  source: "LFL METHOD by Laura Caufour",
  cards: CARDS,
  notes: NOTES,
  // The order a student meets NEW cards in (reviews are FSRS's): the -ant
  // form first, then each use the Use tab gives, then the negative, then
  // pronouns and verbs with se, then her sentences, as the notes tabs run.
  teachingOrder: ["forms", "same", "how", "negative", "pronouns", "reflexive", "sentences"],
  // The line shown above a grammar card saying what to type (see
  // src/lib/cardInstruction.js). The sentences are two-way phrase cards and
  // carry none. Every gap has the same line, so the line never says which
  // part (ne, a pronoun, me or te) the answer needs.
  instructions: {
    forms: "Fill the gap with the verb's -ant form",
    same: "Fill the gap with en and the verb given, ending in -ant",
    how: "Fill the gap with en and the verb given, ending in -ant",
    negative: "Fill the gap with en and the verb given, ending in -ant",
    reflexive: "Fill the gap with en and the verb given, ending in -ant",
    pronouns: "Fill the gap with en and the verb given, ending in -ant",
  },
};

export default LESSON;
