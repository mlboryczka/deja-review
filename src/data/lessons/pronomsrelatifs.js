// Les pronoms relatifs — built 2026-11-13 from Laura Caufour's LFL METHOD
// sheets in Google Drive (Français / Les pronoms relatifs): "Les pronoms
// relatifs" and "EXERCICES - Les pronoms relatifs" (file ids in
// .claude/topic-lessons-draft/pronomsrelatifs/sources.md). One of her topic
// lessons, in no stage (owner, 2026-11-13). She has no answer key for it:
// every answer here was written for the app and checked.
//
// Each entry is [front, back, category, section].
//
// Card shapes:
//   "qui ou que → C'est l'homme ___ j'aime" / "que"                pick the pronoun
//   "ce qui, ce que ou quoi → Je ne sais pas ___ te dire" / "quoi"
//   "J'adore les chaussures que tu as achetées" / "I love the shoes you bought"   both ways round
//
// The choices are arrow cards, marked exactly: on a phrase card "qui" and
// "que" are one letter apart, and typo tolerance would let either through.
// Each front names the pronouns to choose from, as her ex. 2 and 4 do, so
// the line above the card can be the same for all and give nothing away.
//
// WHAT WAS SAMPLED, AND WHAT WAS LEFT:
//   - Ex. 1 (circle the pronoun, underline what it stands for, say why) asks
//     for no typed answer, so its sentences became gap cards: "Le canapé où
//     il est assis", "Je ne trouve plus la rue où je suis garé", "C'est le
//     petit garçon dont la mère travaille pour L'Oréal" and "Le gilet dont
//     les boutons sont bleus a rétréci".
//   - Ex. 2 (qui or que): eight, among them her pair "C'est l'homme que
//     j'aime" and "C'est l'homme qui m'aime".
//   - Ex. 4 (ce qui, ce que or quoi): eight, none repeating a phrase card.
//     Ce dont, in her lesson's table, has one gap card ("Je ne comprends pas
//     ce dont il parle") and her phrase "C'est exactement ce dont j'avais
//     besoin".
//   - Ex. 7 (dont): seven dont gaps from her lesson and ex. 7, with one que
//     among them, so the answer isn't always dont.
//   - Ex. 3, 5, 6 and 8 (translate): her eight "phrases à apprendre par
//     cœur" as phrase cards, and five of ex. 6's où sentences.
//   - Left out, from the cards and the notes: her table's ways to ask
//     "what?" (qu'est-ce que, que + inversion, quoi at the end), which are
//     questions, not relative pronouns, and "dont" for "including", which is in the notes: as a
//     phrase card its comma would let "dont deux Français" alone pass.
//
// DEPARTURES FROM HER SHEETS:
//   - Her lesson's "J'aime bien les livres que tu m'a donnés": m'as.
//   - Her lesson's "il se traduit pas including": par.
//   - "la Révolution Française": française, as French writes the adjective.
//   - Ex. 2 no. 5, "J'ai mis l'argent … tu m'avais donné à la banque", reads as
//     if the money was given at the bank; the card puts à la banque first.
//   - Ex. 6's English drops the preposition ("The city I live is very nice",
//     "This is the school I went"); the cards' English has it.
//
// THE NOTES are her lesson in English: Use (her presentation and her table
// of the four pronouns), Qui, que, Où, Dont and What, one tab each. Her
// "sujet", "COD" and "COI" are said without the words: the one doing the
// action, the one it's done to, a verb with de. Not hers, though a card
// needs it said:
//   - Qui, que: "que becomes qu' before a vowel".
//   - Qui, que: "English can leave out that; French never leaves out que".
//     Her lesson says only that English sometimes leaves it out.
//   - Qui, que: "Qui never does" (become qu').
//   - Où: "for a time … French says où, never quand".
//   - Dont: "No de, no dont", for the risotto card, which sits among the
//     dont cards so that the answer isn't always dont.

export const CARDS = [
  // ── Qui or que (her ex. 2)
  ["qui ou que → Mon frère a pris l'argent ___ était dans le tiroir", "qui", "G", "quique"],
  ["qui ou que → C'est ton professeur ___ j'ai vu là-bas ?", "que", "G", "quique"],
  ["qui ou que → Au cinéma, j'ai vu un film ___ j'ai adoré", "que", "G", "quique"],
  ["qui ou que → C'est l'homme ___ j'aime", "que", "G", "quique"],
  ["qui ou que → C'est l'homme ___ m'aime", "qui", "G", "quique"],
  ["qui ou que → Le restaurant ___ Camille adorait a fermé", "que", "G", "quique"],
  ["qui ou que → C'est lui ___ est parti ou c'est elle ?", "qui", "G", "quique"],
  ["qui ou que → J'ai mis à la banque l'argent ___ tu m'avais donné", "que", "G", "quique"],

  // ── Où (her lesson and ex. 1)
  ["qui, que ou où → C'est l'année ___ je suis né", "où", "G", "ou"],
  ["qui, que ou où → Le canapé ___ il est assis n'est pas confortable", "où", "G", "ou"],
  ["qui, que ou où → Je ne trouve plus la rue ___ je suis garé", "où", "G", "ou"],

  // ── Dont (her lesson and ex. 1 and 7)
  ["que ou dont → Les patients ___ elle s'est occupée sont sur cette liste", "dont", "G", "dont"],
  ["que ou dont → C'est la voiture ___ j'ai besoin", "dont", "G", "dont"],
  ["que ou dont → C'est le chien ___ Maxime a peur", "dont", "G", "dont"],
  ["que ou dont → Le bateau ___ je rêve est très cher", "dont", "G", "dont"],
  ["que ou dont → C'est le petit garçon ___ la mère travaille pour L'Oréal", "dont", "G", "dont"],
  ["que ou dont → Le gilet ___ les boutons sont bleus a rétréci", "dont", "G", "dont"],
  ["que ou dont → Le risotto ___ j'ai mangé hier était délicieux", "que", "G", "dont"],

  // ── What: ce qui, ce que, quoi (her ex. 4)
  ["ce qui, ce que ou quoi → Je suis tout le temps fatigué, je ne sais pas ___ faire", "quoi", "G", "what"],
  ["ce qui, ce que ou quoi → Je ne comprends pas ___ tu veux dire", "ce que", "G", "what"],
  ["ce qui, ce que ou quoi → ___ me manque le plus, c'est le fromage !", "ce qui", "G", "what"],
  ["ce qui, ce que ou quoi → J'adore ___ tu portes", "ce que", "G", "what"],
  ["ce qui, ce que ou quoi → Oui, c'est justement ___ m'embête", "ce qui", "G", "what"],
  ["ce qui, ce que ou quoi → J'ai faim mais je ne sais pas ___ manger", "quoi", "G", "what"],
  ["ce qui, ce que ou quoi → C'est ___ m'a fait peur", "ce qui", "G", "what"],
  ["ce qui, ce que ou quoi → Tu peux répéter ___ tu as dit au début ?", "ce que", "G", "what"],
  // Ce dont (her lesson's table)
  ["ce que ou ce dont → Je ne comprends pas ___ il parle", "ce dont", "G", "what"],

  // ── Her phrases to learn by heart, both ways round
  ["J'adore les livres qui parlent de la Révolution française", "I love books that talk about the French Revolution / I love books about the French Revolution / I love the books that talk about the French Revolution / I love books that are about the French Revolution / I love books which talk about the French Revolution", "E", "phrases"],
  ["J'adore les chaussures que tu as achetées", "I love the shoes you bought / I love the shoes you've bought / I love the shoes that you bought / I love the shoes that you've bought / I love the shoes which you bought", "E", "phrases"],
  ["Je suis arrivé le jour où il est parti", "I arrived the day he left / I arrived on the day he left / I arrived the day that he left (said by a man)", "E", "phrases"],
  ["Je ne comprends pas ce qu'il veut", "I don't understand what he wants", "E", "phrases"],
  ["Je ne sais pas quoi dire", "I don't know what to say", "E", "phrases"],
  ["Je ne sais pas ce qui se passe", "I don't know what's happening / I don't know what is happening / I don't know what's going on / I don't know what is going on", "E", "phrases"],
  ["C'est la personne dont je t'ai parlé", "This is the person I told you about / That's the person I told you about / It's the person I told you about / That's the person I talked to you about / This is the person I talked to you about / It's the person I talked to you about", "E", "phrases"],
  ["C'est exactement ce dont j'avais besoin !", "This is exactly what I needed / That's exactly what I needed / It's exactly what I needed", "E", "phrases"],

  // ── Où, from her ex. 6, both ways round
  ["Je l'ai rencontré l'année où mon grand-père est mort", "I met him the year my grandfather died / I met him the year that my grandfather died", "E", "ousentences"],
  ["Il a commencé à pleuvoir au moment où je suis arrivé", "It started to rain the moment I arrived / It started raining the moment I arrived / It started to rain just as I arrived / It started raining just as I arrived / It started to rain when I arrived / It began to rain the moment I arrived (said by a man)", "E", "ousentences"],
  ["J'ai décidé d'arrêter le jour où j'ai rencontré Hugo", "I decided to stop the day I met Hugo / I decided to quit the day I met Hugo / I decided to stop on the day I met Hugo", "E", "ousentences"],
  ["Mes parents ont vendu la maison où nous sommes nés", "My parents sold the house we were born in / My parents sold the house where we were born", "E", "ousentences"],
  ["C'est l'école où je suis allé", "This is the school I went to / That's the school I went to / It's the school I went to (said by a man)", "E", "ousentences"],
];

export const NOTES = [
  {
    tab: "Use",
    h: "1 · What a relative pronoun does",
    blocks: [
      { t: "lead", v: "A relative pronoun joins two sentences about the same thing, so you don't say it twice: *tu connais le restaurant qui a ouvert hier ?*, \"do you know the restaurant that opened yesterday?\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Tu connais le restaurant qui a ouvert hier ?", "Do you know the restaurant that opened yesterday?"],
        ["J'aime bien les livres que tu m'as donnés", "I like the books you gave me"],
      ]},
      { t: "table", caption: "The four relative pronouns",
        cols: ["Pronoun", "Example", "English"],
        rows: [
          ["qui", "la fille qui est partie", "the girl who left"],
          ["que", "la fille que j'ai vue", "the girl I saw"],
          ["où", "l'endroit où je suis, le jour où il est arrivé", "the place where I am, the day he arrived"],
          ["dont", "la fille dont je t'ai parlé", "the girl I told you about"],
        ] },
    ],
  },
  {
    tab: "Qui, que",
    h: "2 · Qui and que",
    blocks: [
      { t: "lead", v: "Qui stands for whoever or whatever the next verb is about; que for what someone else's verb acts on: *c'est l'homme qui m'aime*, \"he's the man who loves me\"; *c'est l'homme que j'aime*, \"he's the man I love\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["J'adore les chemises qui sont arrivées hier", "I love the shirts that arrived yesterday"],
        ["C'est la fille qui m'a parlé au restaurant", "That's the girl who talked to me at the restaurant"],
        ["J'adore les chaussures que tu portes", "I love the shoes you're wearing"],
        ["C'est la personne que j'attendais", "That's the person I was waiting for"],
      ]},
      { t: "note", v: "English can leave out \"that\": \"the shoes you're wearing\". French never leaves out que: *les chaussures que tu portes*." },
      { t: "note", v: "Que becomes qu' before a vowel: *le film qu'il a vu*, \"the film he saw\". Qui never does: *la fille qui est partie*, \"the girl who left\"." },
    ],
  },
  {
    tab: "Où",
    h: "3 · Où: a place or a time",
    blocks: [
      { t: "lead", v: "Où stands for a place, and also for a time: *c'est la rue où j'habitais*, \"it's the street where I used to live\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["C'est l'endroit où j'aimerais habiter", "It's the place where I'd like to live"],
        ["C'est l'année où je suis né", "It's the year I was born"],
        ["Il est arrivé au moment où je partais", "He arrived just as I was leaving"],
        ["Il est arrivé le jour où je suis parti", "He arrived the day I left"],
      ]},
      { t: "note", v: "The trap: for a time, English says \"when\" or nothing, and French says où, never quand: *le jour où il est arrivé*, \"the day he arrived\"." },
    ],
  },
  {
    tab: "Dont",
    h: "4 · Dont",
    blocks: [
      { t: "lead", v: "Dont stands for something after a verb or phrase that takes de, such as parler de, avoir besoin de or avoir peur de: *la personne dont je t'ai parlé*, \"the person I told you about\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["La fourchette dont j'ai besoin est sur la table", "The fork I need is on the table"],
        ["C'est la fille dont la mère est médecin", "That's the girl whose mother is a doctor"],
        ["C'est le tableau dont je suis très fière", "That's the painting I'm very proud of"],
      ]},
      { t: "note", v: "Dont also means \"whose\": *la fille dont la mère est médecin*, \"the girl whose mother is a doctor\", from *la mère de la fille*, \"the girl's mother\"." },
      { t: "note", v: "No de, no dont: *j'ai mangé le risotto*, so *le risotto que j'ai mangé*, \"the risotto I ate\"." },
      { t: "sub", v: "Detail · advanced" },
      { t: "note", v: "Dont can also mean \"including\": *il y avait six personnes dans la salle, dont deux Français*, \"there were six people in the room, including two French people\"." },
    ],
  },
  {
    tab: "What",
    h: "5 · What: ce qui, ce que, quoi",
    blocks: [
      { t: "lead", v: "In a statement, not a question, \"what\" is ce qui when it does the action: *je ne sais pas ce qui se passe*, \"I don't know what's happening\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Je ne sais pas ce que tu veux", "I don't know what you want"],
        ["Je ne comprends pas ce dont il parle", "I don't understand what he's talking about"],
        ["Je ne sais pas quoi faire", "I don't know what to do"],
      ]},
      { t: "note", v: "\"What\" is ce que when someone does something to it: *ce que tu veux*, \"what you want\"; ce dont after a verb with de: *ce dont il parle*, \"what he's talking about\", from parler de; and quoi before an infinitive: *je ne sais pas quoi faire*, \"I don't know what to do\"." },
    ],
  },
];

export const LESSON = {
  id: "pronomsrelatifs",
  title: "Les pronoms relatifs",
  subtitle: "Who, that, where and what: qui, que, où, dont, ce qui and ce que",
  source: "LFL METHOD by Laura Caufour",
  cards: CARDS,
  notes: NOTES,
  // The order a student meets NEW cards in (reviews are FSRS's), as the
  // notes tabs run, each pronoun's sentences straight after its choices.
  teachingOrder: ["quique", "ou", "ousentences", "dont", "what", "phrases"],
  // The line shown above a grammar card saying what to type (see
  // src/lib/cardInstruction.js). The same line for every choice, so it
  // never says which one fits.
  instructions: {
    quique: "Fill the gap with one of the words given",
    ou: "Fill the gap with one of the words given",
    dont: "Fill the gap with one of the words given",
    what: "Fill the gap with one of the words given",
  },
};

export default LESSON;
