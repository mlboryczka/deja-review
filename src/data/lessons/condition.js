// La condition — built 2026-11-15 from Laura Caufour's LFL METHOD sheets in
// Google Drive (Français / La condition): "Leçon - La condition" and
// "EXERCICES - La condition" (file ids in
// .claude/topic-lessons-draft/condition/sources.md). One of her topic
// lessons, in no stage (owner, 2026-11-13). She has no answer key for it:
// every answer here was written for the app and checked.
//
// Each entry is [front, back, category, section].
//
// Card shapes:
//   "rater → Qu'est-ce que tu vas faire si tu ___ ton train ?" / "rates"   a gap in her sentence
//   "aller (conditionnel passé) → je" / "je serais allé / je serais allée"   drill; its line comes from its shape
//   "Si j'étais français → en réalité" / "Je ne suis pas français / …"   what is really true
//   "Si tu veux savoir, appelle-moi" / "If you want to know, call me"   both ways round
//
// Her lesson has four parts, one per tense after si, and so do the notes and
// the cards: si + présent, si + passé composé, si + imparfait, si +
// plus-que-parfait. Leçon 19 already drills the present conditional and si +
// imparfait, and Le plus-que-parfait has three si gaps; no front here repeats
// one of theirs, and none of their sentences is used.
//
// WHY THE GAPS ARE ARROW CARDS. Phrase cards are marked with typo tolerance,
// and this lesson's mistakes are a letter or two long: si j'aurais for si
// j'avais, je serai for je serais, tu rateras for tu rates. On an arrow card
// the answer is marked exactly (accents aside), so each of those is wrong.
// The phrase cards are there for whole sentences and their meaning, as in
// Leçon 19, whose header lists what its phrase cards let through.
//
// WHAT WAS SAMPLED, AND WHAT WAS LEFT:
//   - Ex. 2, 4, 6 and 9 (translate, one per tense): five or six of each as
//     gap cards in French, with the gap on the verb after si or on the verb
//     that follows, and orders (appelle-moi, regarde) where her sentence has
//     one. Ex. 12 mixes the same sentences; six of them, not used in a gap,
//     are phrase cards, with "Si tu veux savoir, appelle-moi" from her
//     lesson.
//   - Without English, several of her sentences take two tenses ("S'il est
//     parti à l'heure" or "S'il part à l'heure, il sera là dans 2 heures"),
//     so their gaps gain a time word (ce matin, hier, demain, maintenant,
//     de l'été dernier), as Leçon 19's gained ce soir. Ex. 6 no. 15 (les gens
//     seraient plus gentils) is not used: étaient, a past habit, also fits.
//   - Ex. 11 (say what is really true) and her lesson's own pairs (« Si
//     j'étais français » → Je ne suis pas français): six reality cards, from
//     her lesson and ex. 11 no. 7.
//   - Four conditionnel passé drills: her sheets use the tense in ex. 8 and
//     9 but don't show how to make it.
//   - Left out: ex. 1, 5 and 8 (finish the sentence: no single answer); ex. 3,
//     7, 10, 13 and 14 (audio); ex. 11 items whose reality has several
//     wordings ("Si tu avais révisé plus, …").
//
// DEPARTURES FROM HER SHEETS:
//   - Her lesson says si becomes s' "devant une voyelle"; it becomes s' only
//     before il and ils (French Wiktionary, "si": "s' (devant il ou ils)"),
//     so si elle and si on stay as they are. The Use tab says so.
//   - Her ex. 6 no. 19 and ex. 12 no. 25 "I you were": If. Ex. 12 no. 14
//     drops "If"; ex. 12 no. 44 drops "I". Ex. 4 no. 10 "drunk": drank. No
//     card uses their English.
//   - Ex. 5 no. 10 "Si on avait pas d'enfants" drops the ne. Not a card.
//   - Ex. 8 no. 4 "S'il m'avaient": s'ils. Not a card.
//   - Her ex. 9 is headed "si + conditionnel passé"; the si takes the
//     plus-que-parfait and the conditionnel passé follows, as her lesson's
//     section 4 says.
//
// THE NOTES are her lesson in English: Use (her four-line summary), Maybe
// (si + présent), Maybe before (si + passé composé), Imagined (si +
// imparfait), Didn't happen (si + plus-que-parfait), each with her examples
// and her "what is really true" pairs. Not hers, though a card needs it said:
//   - Use: the trap, si never followed by the future or the conditional (her
//     tables show it; she doesn't state it).
//   - Maybe: the tu order of an -er verb has no -s (appelle, regarde).
//   - Imagined: how the imparfait, the conditional and the conditionnel
//     passé are made, with a table for the drills, and "je n'ai pas de four"
//     (her ex. 11 no. 7) as an example.
//   - Didn't happen: how the plus-que-parfait is made, its participles and
//     which verbs take être.

export const CARDS = [
  // ── Si + présent (her ex. 2)
  ["être → Si tu ___ libre pour déjeuner, on peut aller chez Georges", "es", "G", "maybe"],
  ["rater → Qu'est-ce que tu vas faire si tu ___ ton train demain ?", "rates", "G", "maybe"],
  ["ne pas marcher → Comment tu vas aller au travail si ta voiture ___ ?", "ne marche pas", "G", "maybe"],
  ["appeler → Si ton professeur est absent, ___-moi", "appelle / appelle-moi", "G", "maybe"],
  ["être → Si tu lui dis ça, il ___ très en colère", "va être / sera", "G", "maybe"],

  // ── Si + passé composé (her ex. 4)
  ["partir → S'il ___ à l'heure ce matin, il sera là dans 2 heures", "est parti", "G", "past"],
  ["envoyer → S'ils ___ la lettre hier, tu vas la recevoir demain", "ont envoyé", "G", "past"],
  ["ne pas comprendre → S'il ___ ça hier, il ne va pas comprendre le film", "n'a pas compris", "G", "past"],
  ["ne rien dire → S'ils ___ hier, c'est mieux d'attendre ici", "n'ont rien dit", "G", "past"],
  ["regarder → Si tu as déjà regardé la première partie, ___ la deuxième maintenant !", "regarde", "G", "past"],

  // ── The conditionnel passé
  ["aller (conditionnel passé) → je", "je serais allé / je serais allée", "G", "would"],
  ["pouvoir (conditionnel passé) → tu", "tu aurais pu", "G", "would"],
  ["faire (conditionnel passé) → nous", "nous aurions fait", "G", "would"],
  ["venir (conditionnel passé) → ils", "ils seraient venus", "G", "would"],

  // ── Si + imparfait (her lesson and ex. 6)
  ["avoir → Si j'___ plus d'argent, je voyagerais plus", "avais / j'avais", "G", "imagined"],
  ["pouvoir → Si tu ne fumais pas, tu ___ courir plus", "pourrais / aurais pu", "G", "imagined"],
  ["savoir → S'il ___ nager, il pourrait surfer avec moi", "savait", "G", "imagined"],
  ["vivre → S'ils n'étaient pas ensemble, ils ne ___ pas à la campagne maintenant", "vivraient", "G", "imagined"],
  ["acheter → Si j'aimais l'électro, j'___ des billets pour le festival de l'été dernier", "aurais acheté / j'aurais acheté", "G", "imagined"],

  // ── Si + plus-que-parfait (her ex. 9)
  ["savoir → Si j'___, je ne serais pas allé là-bas", "avais su / j'avais su", "G", "didnt"],
  ["ne pas rentrer → Si elle ___ à la maison, j'aurais appelé la police", "n'était pas rentrée", "G", "didnt"],
  ["dire → Si tu l'avais appelé hier, il te l'___", "aurait dit", "G", "didnt"],
  ["arriver → Si j'avais pu partir à l'heure hier, je ___ à l'heure", "serais arrivé / serais arrivée", "G", "didnt"],
  ["ne pas trouver → Si tu ne m'avais pas montré le chemin hier soir, je ___ ta maison", "n'aurais pas trouvé", "G", "didnt"],
  ["pouvoir → Si je n'avais pas porté cette chemise hier, je ___ la mettre aujourd'hui", "pourrais", "G", "didnt"],

  // ── What is really true (her lesson, ex. 11)
  ["Si tu as le temps → en réalité", "Il est possible que tu aies le temps / C'est possible que tu aies le temps / Tu as peut-être le temps / Peut-être que tu as le temps / Il se peut que tu aies le temps / Je ne sais pas si tu as le temps", "G", "reality"],
  ["S'il est parti à l'heure → en réalité", "Il est possible qu'il soit parti à l'heure / C'est possible qu'il soit parti à l'heure / Il est peut-être parti à l'heure / Peut-être qu'il est parti à l'heure / Il se peut qu'il soit parti à l'heure / Je ne sais pas s'il est parti à l'heure", "G", "reality"],
  ["Si j'étais français → en réalité", "Je ne suis pas français / Je ne suis pas française", "G", "reality"],
  ["Si j'avais un four, je ferais une tarte → en réalité", "Je n'ai pas de four / Je n'ai pas de four, donc je ne fais pas de tarte / Je n'ai pas de four, alors je ne fais pas de tarte / Je n'ai pas de four, donc je ne peux pas faire de tarte", "G", "reality"],
  ["Si j'avais su → en réalité", "Je n'ai pas su / Je ne savais pas / Je ne le savais pas / Je ne l'ai pas su", "G", "reality"],
  ["Si j'étais parti à l'heure → en réalité", "Je ne suis pas parti à l'heure / Je ne suis pas partie à l'heure / Je suis parti en retard / Je suis partie en retard", "G", "reality"],

  // ── Her sentences, both ways round (her lesson and ex. 12)
  ["Si tu veux savoir, appelle-moi", "If you want to know, call me / If you want to find out, call me (tu)", "E", "sentences"],
  ["Prends du pain si tu as très faim", "Take some bread if you're very hungry / Have some bread if you're very hungry / Take some bread if you're really hungry / Have some bread if you're really hungry (tu)", "E", "sentences"],
  ["Si tu n'as pas entendu, je peux répéter", "If you didn't hear, I can repeat / If you didn't hear, I can repeat it / If you didn't hear me, I can repeat / If you didn't hear me, I can repeat it / If you didn't hear, I can say it again (tu)", "E", "sentences"],
  ["Si j'avais le temps, je viendrais te voir", "If I had time, I would come to see you / If I had time, I'd come to see you / If I had time, I would come and see you / If I had time, I'd come and see you / If I had the time, I would come to see you / If I had the time, I'd come and see you / If I had time, I'd come see you / If I had time, I would come see you (tu)", "E", "sentences"],
  ["Si j'avais eu le temps, je t'aurais appelé", "If I had had the time, I would have called you / If I'd had the time, I would have called you / If I had had time, I would have called you / If I'd had time, I would have called you / If I'd had time, I'd have called you / If I'd had the time, I'd have called you (tu, to a man)", "E", "sentences"],
  ["Si tu avais été plus gentil avec lui, il aurait été plus gentil avec toi", "If you had been nicer to him, he would have been nicer to you / If you'd been nicer to him, he would have been nicer to you / If you'd been nicer to him, he'd have been nicer to you / If you had been kinder to him, he would have been kinder to you / If you'd been kinder to him, he'd have been kinder to you (tu, to a man)", "E", "sentences"],
  ["Je parlerais couramment français si je l'avais appris quand j'étais petit", "I would be fluent in French if I had learned it when I was a kid / I'd be fluent in French if I had learned it when I was a kid / I would speak French fluently if I had learned it when I was little / I'd speak French fluently if I'd learned it as a child / I would be fluent in French if I had learnt it when I was a child / I would speak fluent French if I had learned it as a child (said by a man)", "E", "sentences"],
];

export const NOTES = [
  {
    tab: "Use",
    h: "1 · What the tense after si tells you",
    blocks: [
      { t: "lead", v: "The tense after si, \"if\", says when the situation is and whether it is real: *si j'avais le temps*, \"if I had time\", means I don't have time." },
      { t: "table", caption: "What is really true", bold: 1,
        cols: ["Si …", "En réalité", "English"],
        rows: [
          ["Si tu as le temps", "Il est possible que tu aies le temps", "If you have time: maybe you do"],
          ["S'il est parti à l'heure", "Il est possible qu'il soit parti à l'heure", "If he left on time: maybe he did"],
          ["Si j'étais français", "Je ne suis pas français", "If I were French: I'm not"],
          ["Si j'avais le temps", "Je n'ai pas le temps", "If I had time: I don't"],
          ["Si j'avais su", "Je n'ai pas su", "If I had known: I didn't"],
          ["Si j'étais parti à l'heure", "Je ne suis pas parti à l'heure", "If I had left on time: I didn't"],
        ] },
      { t: "note", v: "Si becomes s' before il and ils only: *s'il pleut*, \"if it rains\", but *si elle vient*, \"if she comes\"." },
      { t: "note", v: "The trap: after si, never put the future or the conditional: *si tu rates ton train*, \"if you miss your train\", not si tu rateras; *si j'avais le temps*, \"if I had time\", not si j'aurais." },
    ],
  },
  {
    tab: "Maybe",
    h: "2 · Si and the present",
    blocks: [
      { t: "lead", v: "Si and the present is for something that may happen, now or later: *si tu as le temps*, \"if you have time\", means maybe you will." },
      { t: "note", v: "What follows can be in the present, the future or an order, as in English." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Si tu n'y vas pas, je préfère rester à la maison", "If you're not going, I prefer to stay at home"],
        ["Je te dirai demain si tu es à l'heure", "I'll tell you tomorrow if you're on time"],
        ["Si tu lui dis ça, il va être très en colère", "If you tell him that, he's going to be very angry"],
        ["Si tu veux savoir, appelle-moi", "If you want to know, call me"],
      ]},
      { t: "note", v: "An order to tu of a verb ending in -er has no -s: *appelle-moi*, \"call me\"; *regarde*, \"watch\"." },
    ],
  },
  {
    tab: "Maybe before",
    h: "3 · Si and the passé composé",
    blocks: [
      { t: "lead", v: "Si and the passé composé is for something that may have happened: *s'il est parti à l'heure*, \"if he left on time\", means maybe he did." },
      { t: "note", v: "What follows can be in the present, the future or an order, as in English." },
      { t: "note", v: "With the present: *si tu n'as pas entendu, je peux répéter*, \"if you didn't hear, I can repeat\"." },
      { t: "note", v: "With the future: *si tu as aimé la première partie, tu vas adorer la deuxième*, \"if you liked the first part, you're going to love the second one\"." },
      { t: "note", v: "With an order: *si tu n'as pas compris cette phrase, ne lis pas le livre*, \"if you didn't understand this sentence, don't read the book\"; *si tu as déjà regardé la première partie, regarde la deuxième*, \"if you've already watched the first part, watch the second\"." },
    ],
  },
  {
    tab: "Imagined",
    h: "4 · Si and the imparfait",
    blocks: [
      { t: "lead", v: "Si and the imparfait is for something imagined, that isn't so: *si j'étais français*, \"if I were French\", means I'm not French." },
      { t: "note", v: "What follows is in the conditional, as English uses would: *si je gagnais au loto, j'achèterais un bateau*, \"if I won the lottery, I would buy a boat\"." },
      { t: "note", v: "The imparfait is the nous form of the present without -ons, plus -ais, -ais, -ait, -ions, -iez or -aient: *nous savons → il savait*, \"he knew\". Être is the exception: *j'étais*, \"I was\". The conditional starts like the future and ends like the imparfait: *tu pourras → tu pourrais*, \"you could\"; *ils seront → ils seraient*, \"they would be\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Si j'avais plus d'argent, je voyagerais plus", "If I had more money, I would travel more"],
        ["S'il savait nager, il pourrait surfer avec moi", "If he could swim, he could surf with me"],
      ]},
      { t: "note", v: "*Si j'avais un four, je ferais une tarte*, \"if I had an oven, I would make a tart\", means *je n'ai pas de four*, \"I don't have an oven\"." },
      { t: "sub", v: "Would have" },
      { t: "note", v: "For what would have happened, use aurais or serais and the participle, as English uses would have: *si j'aimais l'électro, j'aurais acheté des billets pour le festival*, \"if I liked EDM, I would have bought tickets for the festival\"." },
      { t: "table", caption: "With avoir and with être", bold: 0,
        cols: ["acheter", "aller"],
        rows: [
          ["j'aurais acheté", "je serais allé(e)"],
          ["tu aurais acheté", "tu serais allé(e)"],
          ["il, elle aurait acheté", "il serait allé, elle serait allée"],
          ["nous aurions acheté", "nous serions allé(e)s"],
          ["vous auriez acheté", "vous seriez allé(e)(s)"],
          ["ils, elles auraient acheté", "ils seraient allés, elles seraient allées"],
        ] },
      { t: "note", v: "Verbs of coming and going, such as aller, venir, partir and arriver, take être: *ils seraient venus*, \"they would have come\". Pouvoir and faire take avoir: *tu aurais pu*, \"you could have\"; *nous aurions fait*, \"we would have done\"." },
    ],
  },
  {
    tab: "Didn't happen",
    h: "5 · Si and the plus-que-parfait",
    blocks: [
      { t: "lead", v: "Si and the plus-que-parfait is for something that didn't happen: *si j'étais parti à l'heure*, \"if I had left on time\", means I didn't leave on time." },
      { t: "note", v: "The plus-que-parfait is avoir or être in the imparfait, then the participle: *si j'avais su*, \"if I had known\"; *si elle n'était pas rentrée*, \"if she hadn't come home\"." },
      { t: "note", v: "For what would have happened, use aurais or serais and the participle: *si tu m'avais dit la vérité, j'aurais pu t'aider*, \"if you had told me the truth, I could have helped you\"." },
      { t: "note", v: "Verbs of coming and going, such as arriver, partir and rentrer, take être: *je serais arrivé à l'heure*, \"I would have arrived on time\"." },
      { t: "forms", label: "Participles", v: ["savoir → su", "pouvoir → pu", "dire → dit", "trouver → trouvé"] },
      { t: "pairs", head: ["French", "English"], v: [
        ["Si tu étais passé ici avant, j'y serais allé avec toi", "If you had come here before, I would have gone with you"],
        ["Si tu l'avais appelé, il te l'aurait dit", "If you had called him, he would have told you"],
      ]},
      { t: "note", v: "For what would be true now, use the conditional: *si tu étais venu, tu saurais ce qu'il s'est passé*, \"if you had come, you would know what happened\"; *si je n'avais pas porté cette chemise hier, je pourrais la mettre aujourd'hui*, \"if I hadn't worn that shirt yesterday, I could wear it today\"." },
    ],
  },
];

export const LESSON = {
  id: "condition",
  title: "La condition",
  subtitle: "Si and the tense after it: what may happen, what's imagined, and what didn't happen",
  source: "LFL METHOD by Laura Caufour",
  cards: CARDS,
  notes: NOTES,
  // The order a student meets NEW cards in (reviews are FSRS's), as the
  // notes tabs run: her four tenses after si in her order, with the
  // conditionnel passé drills before the first gap that needs them, then
  // what is really true, then her sentences.
  teachingOrder: ["maybe", "past", "would", "imagined", "didnt", "reality", "sentences"],
  // The line shown above a grammar card saying what to type (see
  // src/lib/cardInstruction.js). The drills get theirs from their shape
  // ("Past conditional, with je"). Every gap has the same line, so it never
  // says which tense the gap needs.
  instructions: {
    maybe: "Fill the gap with the verb given, in the tense that fits",
    past: "Fill the gap with the verb given, in the tense that fits",
    imagined: "Fill the gap with the verb given, in the tense that fits",
    didnt: "Fill the gap with the verb given, in the tense that fits",
    reality: "Say in a full sentence what is really true, or what may be",
  },
};

export default LESSON;
