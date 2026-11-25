// La négation — built 2026-11-15 from Laura Caufour's LFL METHOD sheets in
// Google Drive (Français / La négation): "Leçon - La négation" and
// "EXERCICES - La négation" (file ids in
// .claude/topic-lessons-draft/negation/sources.md). One of her topic
// lessons, in no stage (owner, 2026-11-13). She has no answer key for it:
// every answer here was written for the app and checked.
//
// Each entry is [front, back, category, section].
//
// Card shapes:
//   "Il m'a répondu → au négatif" / "Il ne m'a pas répondu / Il m'a pas répondu"
//   "jamais, m'appeler → Je lui ai dit de ___ le midi" / "ne jamais m'appeler"
//   "Tu vas souvent au cinéma ? → Non, …" / "Non, je ne vais jamais au cinéma / …"
//   "Tout le monde a compris → avec personne" / "Personne n'a compris"
//   "du lait → Il n'y a plus ___ dans le frigo" / "de lait"
//   "Il n'y a jamais personne ici" / "There's never anyone here"   both ways round
//
// Every grammar answer is an arrow card, marked exactly: typo tolerance would pass
// "je ne vais pas jamais", "du lait" for "de lait", "aucun idée".
//
// OVERLAP WITH HER NUMBERED COURSE. Leçon 5 has ne … pas in the present,
// Leçon 9 in the passé composé, Leçon 17 du / de la / des → de. This lesson
// keeps a few ne … pas cards for where ne goes among pronouns, and spends
// the rest on what those don't teach: jamais, pas encore, plus, rien,
// personne, aucun, ne pas + infinitive, and the article after jamais and
// plus. No front repeats one of theirs.
//
// NE OR NO NE. Her ex. 1 lets the student choose whether to write ne, so
// its cards (section "pas") accept both. Everywhere else ne is required, as
// in Leçons 5 and 9; the notes say French people mostly drop it in speech.
//
// WHAT WAS SAMPLED, AND WHAT WAS LEFT:
//   - Ex. 1 (make negative with pas): five, each with a pronoun (m', lui,
//     y, me) or un → de, so the card tests where ne goes. Its nos. 6
//     and 11 (d'être parti, de m'appeler) became the infinitive cards, with
//     her lesson's "ne jamais m'appeler", "ne plus faire ça", "ne rien
//     jeter".
//   - Ex. 2 (jamais): four. Ex. 3 (pas encore): three. Ex. 4 (plus): four.
//     Ex. 5 (rien): four, among them "Je ne me souviens de rien", where rien
//     comes after de.
//   - Ex. 8 (personne, translate): four, as "→ avec personne" cards built
//     from her English, and her lesson's "Tout le monde a compris".
//   - Ex. 9 (aucun, translate): four "→ avec aucun" cards and her two
//     answers with en (nos. 11 and the turtles of her lesson).
//   - Ex. 7 and her lesson's Remarque 2 (un, des, du → de, but assez de and
//     beaucoup de stay): four gap cards. Leçons 5, 9 and 17 already drill
//     un, des and du after pas, so these use jamais and plus.
//   - Her lesson's combined examples: two exact cards for the order, each
//     cue giving the words the wrong way round (personne, jamais → jamais
//     personne; rien, plus → plus rien), since typo tolerance on a phrase
//     card lets "personne jamais" through. "Plus jamais" has no card:
//     "jamais plus" is correct too. "Rien à personne" and "Personne n'a
//     rien vu" are phrase cards.
//   - Ex. 6, 7 and 10 (translate): three more phrase cards.
//   - Answers with y or en are accepted where they fit ("je n'y vais
//     jamais", "je n'en ai plus"), as a teacher would.
//   - Left out: ex. 11 (audio); ex. 1 no. 3 ("Si j'avais le temps, je
//     jouerais au foot"), where either verb could be the negative one;
//     ex. 2 no. 14 ("Vous avez toujours habité à Londres ?"), which jamais
//     doesn't answer.
//
// DEPARTURES FROM HER SHEETS:
//   - Her lesson's "Si je ne lui avait pas dit": avais. "Il important de ne
//     rien jeter": Il est important. "Je lui ai dit ne jamais m'appeler": de
//     ne jamais m'appeler. "PERSONNE peut de combiner": se combiner.
//   - Her lesson's present examples include a pas next to jamais, rien and
//     plus to show what not to write ("Je ne travaille pas jamais"); the
//     notes give the right form and call the wrong one the trap.
//   - Ex. 6 no. 5 "I haven't done anything yesterday" and ex. 9 no. 6 "I
//     haven't see any turtle": English slips, not cards.
//   - "Je regrette de ne pas être parti" also accepts the formal "de n'être
//     pas parti", which French allows with être and avoir.
//   - Her aucun example "Je n'en ai aucune idée" is "Je n'ai aucune idée" in
//     the card and notes, the usual form.
//   - Her rien examples include "Il n'a pas compris"; the notes have "Il
//     n'a rien compris", which is what that list shows.
//   - Her Remarque 2's "Ils ont eu 5 enfants" became "Ils ont des enfants",
//     so the pair shows des becoming de.
//   - Ex. 6 no. 20 "I can't find my keys" is "Je ne trouve pas mes clés".
//
// THE NOTES are her lesson in English: Use (her table of negative words, and
// ne in speech), Forms (her part 2: simple tenses, compound tenses, the
// infinitive, ne before pronouns), Jamais (her part 3, and combining
// words), Personne (her part 4), Aucun (her part 5) and "Un, du, des" (her
// Remarque 2). Not hers, though a card needs it said:
//   - Forms: "aller goes negative, the infinitive after it doesn't", for
//     "Je ne vais pas partir", which she files under the futur simple.
//   - Aucun: "the noun after aucun is singular", for "Elle ne prend aucun
//     médicament" (ex. 9 no. 7, "any medication").
//   - Use: "ne becomes n' before a vowel or h".
//   - Un, du, des: "after être they stay".

export const CARDS = [
  // ── Ne … pas, with pronouns (her ex. 1): ne may be left out, as she allows
  ["Il m'a répondu → au négatif", "Il ne m'a pas répondu / Il m'a pas répondu", "G", "pas"],
  ["Je lui ai dit ça → au négatif", "Je ne lui ai pas dit ça / Je lui ai pas dit ça", "G", "pas"],
  ["J'y vais la semaine prochaine → au négatif", "Je n'y vais pas la semaine prochaine / J'y vais pas la semaine prochaine", "G", "pas"],
  ["Je me lève avant 10h → au négatif", "Je ne me lève pas avant 10h / Je me lève pas avant 10h / Je ne me lève pas avant 10 h / Je me lève pas avant 10 h", "G", "pas"],
  ["Mon chef m'a envoyé un mail → au négatif", "Mon chef ne m'a pas envoyé de mail / Mon chef m'a pas envoyé de mail", "G", "pas"],

  // ── Ne pas + infinitive (her lesson and ex. 1)
  ["pas, être parti → Je regrette de ___ plus tôt", "ne pas être parti / n'être pas parti", "G", "infinitive"],
  ["jamais, m'appeler → Je lui ai dit de ___ le midi", "ne jamais m'appeler", "G", "infinitive"],
  ["plus, faire ça → Il m'a demandé de ___", "ne plus faire ça", "G", "infinitive"],
  ["rien, jeter → Il est important de ___ ici", "ne rien jeter", "G", "infinitive"],

  // ── Two negative words, in order (her lesson's examples)
  ["personne, jamais → Il n'y a ___ ici", "jamais personne", "G", "together"],
  ["rien, plus → Ils n'avaient ___ quand on est arrivés", "plus rien", "G", "together"],

  // ── Jamais (her ex. 2)
  ["Tu vas souvent au cinéma ? → Non, …", "Non, je ne vais jamais au cinéma / Je ne vais jamais au cinéma / Non, je n'y vais jamais / Je n'y vais jamais", "G", "jamais"],
  ["Il te parle souvent de ses enfants ? → Non, …", "Non, il ne me parle jamais de ses enfants / Il ne me parle jamais de ses enfants / Non, il ne m'en parle jamais / Il ne m'en parle jamais", "G", "jamais"],
  ["Tu es déjà allé au Mozambique ? → Non, …", "Non, je ne suis jamais allé au Mozambique / Non, je ne suis jamais allée au Mozambique / Je ne suis jamais allé au Mozambique / Je ne suis jamais allée au Mozambique / Non, je n'y suis jamais allé / Non, je n'y suis jamais allée / Je n'y suis jamais allé / Je n'y suis jamais allée", "G", "jamais"],
  ["Tu as déjà mangé des cuisses de grenouille ? → Non, …", "Non, je n'ai jamais mangé de cuisses de grenouille / Je n'ai jamais mangé de cuisses de grenouille / Non, je n'en ai jamais mangé / Je n'en ai jamais mangé", "G", "jamais"],

  // ── Pas encore (her ex. 3)
  ["Son fils marche déjà ? → Non, …", "Non, il ne marche pas encore / Non, son fils ne marche pas encore / Il ne marche pas encore / Son fils ne marche pas encore", "G", "pasencore"],
  ["Tu lui as déjà dit ? → Non, …", "Non, je ne lui ai pas encore dit / Je ne lui ai pas encore dit / Non, je ne le lui ai pas encore dit / Je ne le lui ai pas encore dit", "G", "pasencore"],
  ["Il est déjà sorti de chez lui ? → Non, …", "Non, il n'est pas encore sorti de chez lui / Il n'est pas encore sorti de chez lui / Non, il n'est pas encore sorti / Il n'est pas encore sorti", "G", "pasencore"],

  // ── Plus (her ex. 4)
  ["Tu travailles encore chez L'Oréal ? → Non, …", "Non, je ne travaille plus chez L'Oréal / Je ne travaille plus chez L'Oréal / Non, je n'y travaille plus / Je n'y travaille plus", "G", "plus"],
  ["Il t'écoute encore ? → Non, …", "Non, il ne m'écoute plus / Il ne m'écoute plus", "G", "plus"],
  ["Tu as encore des problèmes d'argent ? → Non, …", "Non, je n'ai plus de problèmes d'argent / Non, je n'ai plus de problème d'argent / Je n'ai plus de problèmes d'argent / Je n'ai plus de problème d'argent / Non, je n'en ai plus / Je n'en ai plus", "G", "plus"],
  ["Vous vous voyez toujours tous les étés ? → Non, …", "Non, nous ne nous voyons plus tous les étés / Non, on ne se voit plus tous les étés / Nous ne nous voyons plus tous les étés / On ne se voit plus tous les étés", "G", "plus"],

  // ── Rien (her ex. 5)
  ["Tu vois quelque chose ? → Non, …", "Non, je ne vois rien / Je ne vois rien", "G", "rien"],
  ["Tu as vu quelque chose ? → Non, …", "Non, je n'ai rien vu / Je n'ai rien vu", "G", "rien"],
  ["Vous avez fait quelque chose hier ? → Non, …", "Non, nous n'avons rien fait hier / Non, on n'a rien fait hier / Non, je n'ai rien fait hier / Nous n'avons rien fait hier / On n'a rien fait hier / Je n'ai rien fait hier", "G", "rien"],
  ["Tu te souviens de quelque chose ? → Non, …", "Non, je ne me souviens de rien / Je ne me souviens de rien", "G", "rien"],

  // ── Personne (her ex. 8, from her English)
  ["Tout le monde a compris → avec personne", "Personne n'a compris", "G", "personne"],
  ["Quelqu'un a répondu → avec personne", "Personne n'a répondu", "G", "personne"],
  ["J'ai vu quelqu'un là-bas → avec personne", "Je n'ai vu personne là-bas", "G", "personne"],
  ["J'ai parlé à quelqu'un → avec personne", "Je n'ai parlé à personne", "G", "personne"],
  ["Il y a quelqu'un au supermarché → avec personne", "Il n'y a personne au supermarché", "G", "personne"],

  // ── Aucun (her ex. 9, from her English)
  ["Il y a un problème → avec aucun", "Il n'y a aucun problème", "G", "aucun"],
  ["J'ai une idée → avec aucun", "Je n'ai aucune idée", "G", "aucun"],
  ["Un professeur a parlé → avec aucun", "Aucun professeur n'a parlé", "G", "aucun"],
  ["Elle prend des médicaments → avec aucun", "Elle ne prend aucun médicament", "G", "aucun"],
  ["Tu as vu des tortues ? → Non, …", "Non, je n'en ai vu aucune / Je n'en ai vu aucune", "G", "aucunen"],
  ["Tu as lu un livre de Victor Hugo ? → Non, …", "Non, je n'en ai lu aucun / Je n'en ai lu aucun", "G", "aucunen"],

  // ── Un, du, des → de, but beaucoup de and assez de stay (her Remarque 2 and ex. 7)
  ["du lait → Il n'y a plus ___ dans le frigo", "de lait", "G", "articles"],
  ["des enfants → Ils n'ont jamais eu ___", "d'enfants", "G", "articles"],
  ["un film d'horreur → Elle n'a jamais vu ___", "de film d'horreur / de films d'horreur", "G", "articles"],
  ["assez de citron → Tu n'as pas mis ___", "assez de citron", "G", "articles"],

  // ── Her sentences, both ways round (ex. 6, 7 and 10, and her lesson)
  ["Margaux ne travaille plus ici", "Margaux doesn't work here anymore / Margaux no longer works here / Margaux does not work here anymore / Margaux doesn't work here any more / Margaux doesn't work here any longer", "E", "phrases"],
  ["Elle n'a pas encore répondu à mon message", "She hasn't replied to my message yet / She has not yet replied to my message / She hasn't answered my message yet / She hasn't responded to my message yet / She hasn't replied to my text yet", "E", "phrases"],
  ["Je ne trouve pas mes clés", "I can't find my keys / I cannot find my keys / I don't find my keys", "E", "phrases"],
  ["Personne n'a rien vu", "Nobody saw anything / No one saw anything / Nobody has seen anything / No one has seen anything", "E", "phrases"],
  ["Il n'a rien dit à personne", "He didn't say anything to anyone / He didn't tell anyone anything / He didn't say anything to anybody / He said nothing to anyone / He didn't tell anybody anything", "E", "phrases"],
];

export const NOTES = [
  {
    tab: "Use",
    h: "1 · Saying no: ne and a negative word",
    blocks: [
      { t: "lead", v: "To make a sentence negative, put ne before the verb and add a negative word such as pas; the verb itself doesn't change: *je comprends*, \"I understand\"; *je ne comprends pas*, \"I don't understand\"." },
      { t: "table", caption: "The negative words",
        cols: ["Word", "Example", "English"],
        rows: [
          ["pas", "je ne comprends pas", "I don't understand"],
          ["jamais", "on n'a jamais aimé voyager", "we've never liked travelling"],
          ["pas encore", "il n'est pas encore arrivé", "he hasn't arrived yet"],
          ["plus", "Margaux ne travaille plus ici", "Margaux doesn't work here anymore"],
          ["rien", "il n'a rien vu", "he didn't see anything"],
          ["personne", "personne n'a compris", "nobody understood"],
          ["aucun, aucune", "il n'y a aucun problème", "there's no problem"],
        ] },
      { t: "note", v: "Ne becomes n' before a vowel or h: *il n'a rien vu*, \"he didn't see anything\"; *il n'habite pas ici*, \"he doesn't live here\"." },
      { t: "sub", v: "Ne in speech" },
      { t: "note", v: "In conversation and in texts, French people mostly leave out the ne: *tu m'as pas appelé hier ?*, \"didn't you call me yesterday?\"; *non, j'ai pas eu le temps*, \"no, I didn't have time\". In writing, keep it." },
    ],
  },
  {
    tab: "Forms",
    h: "2 · Where ne and pas go",
    blocks: [
      { t: "lead", v: "Ne goes straight after the subject, even before me, te, le, lui, y or en: *je ne lui parle jamais*, \"I never talk to him\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Je ne lui parle jamais", "I never talk to him"],
        ["On ne l'a pas vu hier", "We didn't see him yesterday"],
        ["Je ne me lève jamais avant 8h", "I never get up before 8"],
      ]},
      { t: "sub", v: "One verb: pas after it" },
      { t: "note", v: "With one verb, pas goes after it: *mon téléphone ne marche pas*, \"my phone doesn't work\"; *je n'aimais pas les chiens avant*, \"I didn't use to like dogs\"." },
      { t: "note", v: "With aller and an infinitive, aller goes negative and the infinitive stays after it: *je ne vais pas partir maintenant*, \"I'm not going to leave now\"." },
      { t: "sub", v: "Passé composé: pas after avoir or être" },
      { t: "note", v: "In the passé composé and other tenses with avoir or être, pas goes after avoir or être, before the past participle: *le réveil n'a pas sonné*, \"the alarm didn't go off\"." },
      { t: "sub", v: "Infinitive: ne pas together, before it" },
      { t: "note", v: "Before an infinitive, ne pas go together in front of it: *il est important de ne pas parler trop vite*, \"it's important not to speak too fast\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Je t'ai dit de ne pas venir avant 17h", "I told you not to come before 5 pm"],
        ["Elle est partie pour ne pas me déranger", "She left so as not to disturb me"],
        ["Je regrette de ne pas être parti plus tôt", "I regret not leaving sooner"],
        ["Ne jamais m'appeler le midi", "Never to call me at lunchtime"],
      ]},
    ],
  },
  {
    tab: "Jamais, rien",
    h: "3 · Jamais, pas encore, plus, rien",
    blocks: [
      { t: "lead", v: "Jamais, pas encore, plus and rien take the place of pas, in every tense: *je ne travaille jamais le week-end*, \"I never work at the weekend\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Son fils ne marche pas encore", "His son isn't walking yet"],
        ["Elle ne mange plus de viande", "She doesn't eat meat anymore"],
        ["Il n'a jamais aimé les animaux", "He's never liked animals"],
        ["Je n'ai pas encore trouvé la solution", "I haven't found the solution yet"],
        ["Il n'a rien compris", "He didn't understand anything"],
        ["Il m'a demandé de ne plus faire ça", "He asked me to stop doing that"],
      ]},
      { t: "note", v: "The trap: these words take the place of pas, so don't add pas as well: *je ne travaille jamais*, \"I never work\", not ne pas jamais." },
      { t: "sub", v: "Rien after à or de" },
      { t: "note", v: "After a verb with à or de, rien goes after the à or de: *je ne me souviens de rien*, \"I don't remember anything\"; *je n'ai pensé à rien*, \"I didn't think about anything\"." },
      { t: "sub", v: "Two negative words together" },
      { t: "note", v: "Two negative words can go together: jamais and plus come before rien, personne or aucun, and plus jamais is the usual order of those two: *je ne mangerai plus jamais comme ça*, \"I'll never eat like that again\". Pas and pas encore never go with another one." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Il n'y a jamais personne ici", "There's never anyone here"],
        ["Ils n'avaient plus rien quand on est arrivés", "They had nothing left when we arrived"],
      ]},
    ],
  },
  {
    tab: "Personne",
    h: "4 · Personne: nobody",
    blocks: [
      { t: "lead", v: "Personne, \"nobody\", goes where the person would go in the sentence, with ne before the verb: *personne n'est venu*, \"nobody came\"." },
      { t: "sub", v: "Nobody does it: personne first" },
      { t: "pairs", head: ["French", "English"], v: [
        ["Personne ne travaille le 1er mai", "Nobody works on 1 May"],
        ["Personne n'a parlé", "Nobody spoke"],
      ]},
      { t: "sub", v: "It's done to nobody: personne after the verb" },
      { t: "note", v: "In the passé composé, personne comes after the past participle and rien before it: *je n'ai vu personne*, \"I didn't see anyone\"; *je n'ai rien vu*, \"I didn't see anything\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Il n'écoute personne", "He doesn't listen to anyone"],
        ["Je n'ai vu personne là-bas", "I didn't see anyone there"],
      ]},
      { t: "sub", v: "After à, de, pour or avec" },
      { t: "pairs", head: ["French", "English"], v: [
        ["Il n'a parlé à personne", "He didn't talk to anyone"],
        ["Il ne parle avec personne", "He doesn't talk with anyone"],
        ["Il n'est là pour personne", "He isn't here for anyone"],
      ]},
      { t: "note", v: "Personne goes with jamais, rien and plus too, each in its own place: *personne n'a rien vu*, \"nobody saw anything\"; *il n'a rien dit à personne*, \"he didn't say anything to anyone\"; *il n'y a plus personne ici*, \"there's nobody here anymore\"." },
    ],
  },
  {
    tab: "Aucun",
    h: "5 · Aucun: no, not any",
    blocks: [
      { t: "lead", v: "Aucun, or aucune before a feminine noun, goes in front of the noun, with ne before the verb, and means \"no\" or \"not any\": *je n'ai aucun problème*, \"I have no problem\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Je n'ai aucun problème", "I have no problem"],
        ["Je n'ai aucune idée", "I have no idea"],
        ["Aucun élève n'est venu", "No student came"],
      ]},
      { t: "note", v: "The noun after aucun is singular, even where English says \"any\" with a plural: *elle ne prend aucun médicament*, \"she doesn't take any medication\"." },
      { t: "sub", v: "With en" },
      { t: "note", v: "To avoid saying the noun again, put en before the verb and aucun after it, or aucune if the noun is feminine, like tortues: *tu as vu des tortues ? Non, je n'en ai vu aucune*, \"did you see any turtles? No, I didn't see any\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Je n'en ai aucun", "I don't have any (problems)"],
      ]},
    ],
  },
  {
    tab: "Un, du, des",
    h: "6 · Un, du, des become de",
    blocks: [
      { t: "lead", v: "After a negative, un, une, des, du and de la become de, or d' before a vowel: *il y a du lait*, \"there's milk\"; *il n'y a pas de lait*, \"there's no milk\"." },
      { t: "table", bold: 1,
        cols: ["Yes", "No", "English"],
        rows: [
          ["Ils ont des enfants", "Ils n'ont pas d'enfants", "They have children → They don't have children"],
          ["J'ai des problèmes de santé", "Je n'ai plus de problème de santé", "I have health problems → I don't have health problems anymore"],
        ] },
      { t: "note", v: "After être they stay: *ce n'est pas un problème*, \"it's not a problem\"." },
      { t: "note", v: "Beaucoup de, assez de and trop de stay as they are: *tu n'as pas mis assez de citron*, \"you didn't put in enough lemon\"." },
    ],
  },
];

export const LESSON = {
  id: "negation",
  title: "La négation",
  subtitle: "Not, never, not yet, no longer, nothing, nobody, none",
  source: "LFL METHOD by Laura Caufour",
  cards: CARDS,
  notes: NOTES,
  // The order a student meets NEW cards in (reviews are FSRS's), as the
  // notes tabs run, her sentences last.
  teachingOrder: ["pas", "infinitive", "jamais", "pasencore", "plus", "rien", "together", "personne", "aucun", "aucunen", "articles", "phrases"],
  // The line shown above a grammar card saying what to type (see
  // src/lib/cardInstruction.js).
  instructions: {
    pas: "Make this sentence negative",
    infinitive: "Fill the gap with the verb given, made negative with the word given",
    jamais: "Answer no in a full sentence, with jamais",
    pasencore: "Answer no in a full sentence, with pas encore",
    plus: "Answer no in a full sentence, with plus",
    rien: "Answer no in a full sentence, with rien",
    together: "Fill the gap with the words given, in the right order",
    personne: "Make this sentence negative with personne",
    aucun: "Make this sentence negative with aucun or aucune",
    aucunen: "Answer no in a full sentence, with en and aucun or aucune",
    articles: "Fill the gap with the words given, in the form that fits after the negative",
  },
};

export default LESSON;
