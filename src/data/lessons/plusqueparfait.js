// Le plus-que-parfait — built 2026-11-13 from Laura Caufour's LFL METHOD
// sheets in Google Drive (Français / Le plus-que-parfait): "Le
// plus-que-parfait" and "EXERCICES - Le plus-que-parfait" (file ids in
// .claude/topic-lessons-draft/plusqueparfait/sources.md). One of her topic
// lessons, in no stage (owner, 2026-11-13). She has no answer key for it:
// every answer here was written for the app and checked.
//
// Each entry is [front, back, category, section].
//
// Card shapes:
//   "faire (plus-que-parfait) → je" / "j'avais fait"            drill; its line comes from its shape
//   "Il a pris le métro hier → au plus-que-parfait" / "Il avait pris le métro la veille"
//   "Tu avais reçu la lettre le matin même ? → Oui, …"           answer as shown, with a pronoun
//   "avoir → J'ai pensé qu'il ___ un problème" / "avait eu"      a gap in her sentence
//   "la voir → … Ça faisait longtemps que ___" / "je ne l'avais pas vue"
//   "J'étais parti trois minutes avant" / "I had left three minutes before"   both ways round
//
// Every answer that tests a form is on an arrow card, marked exactly
// (accents aside): a phrase card's typo tolerance would pass "j'avais
// acheté" for "je les avais achetées" or "il était arrivée".
//
// WHAT WAS SAMPLED, AND WHAT WAS LEFT:
//   - Ex. 1 (24 English forms to say aloud): ten as drills, each a different
//     verb, with avoir and être both represented and the agreement after être
//     (ils étaient allés, nous étions sortis).
//   - Ex. 2 (18 sentences into the plus-que-parfait): eight, chosen for the
//     time words that change (hier → la veille, il y a deux jours → deux
//     jours avant, l'année dernière → l'année précédente).
//   - Ex. 3 (finish the sentence) and ex. 8 nos. 2 to 20 (fill "Ça faisait
//     ... que ...") have no single answer. Ex. 8's pattern is drilled on her
//     lesson's own examples instead.
//   - Ex. 4 and 5 (answer yes, then no, with pronouns): four of each, chosen
//     for what the pronoun does to the participle: je les avais achetées,
//     je l'avais reçue (agrees), je leur avais répondu, je n'en avais pas
//     acheté (doesn't).
//   - Ex. 6 and 7 (translate): seven as phrase cards.
//   - Her lesson's sequence of tenses and si sections: a gap card each from
//     her examples.
//
// DEPARTURES FROM HER SHEETS:
//   - Ex. 2 no. 17, "Il a plus toute la journée": plu, as the card has it.
//   - Her lesson's "Mes amis ne savait pas": savaient.
//   - Her lesson's "S'ils étaient partis à l'heure, il serait arrivé à
//     temps" (ils, then il) is not used.
//   - Her ex. 1 "I had open": opened. Not a card.
//   - Her lesson's "l'on avait pas fait" drops the ne; not used.
//   - Her ex. 2 example's "il y deux jours": il y a.
//   - Her Forms table has only il and ils; the notes add elle était allée,
//     elles étaient allées and on avait regardé, and (e) and (s) for je, tu,
//     nous and vous.
//   - On meaning we takes the plural participle, "on était partis", the
//     form Leçons 8 and 9 were corrected to on 2026-10-20 (sources in their
//     headers); "on était parti" is not accepted.
//
// THE NOTES are her lesson in English: Use (her timeline and examples),
// Forms (her two tables and her rule that the passé composé's rules hold),
// After que (her sequence of tenses), If (her si section), Ça faisait (her last
// section). Not hers, though a card needs it said:
//   - Forms: "le, la, l' or les before the verb gives the participle the -e
//     or -s of what it stands for"
//     (her ex. 4 and 5, which ask for pronouns), with en and leur not
//     changing it.
//   - Forms: the time words table, from her list of "repères temporels",
//     and "dernier becomes précédent" (her ex. 2 nos. 12 and 14).
//   - Forms: "Verbs with être" and the irregular participles, for the
//     drills; her lesson sends the reader to her passé composé lesson.
//   - The two "Il m'a dit qu'il avait (eu) le temps" phrase cards are her
//     ATTENTION box, as cards.

export const CARDS = [
  // ── Her time words
  ["la veille", "the day before / the night before / the previous day", "V", "words"],
  ["l'année précédente", "the previous year / the year before", "V", "words"],
  ["à ce moment-là", "at that moment / at that time / at the time / then", "V", "words"],

  // ── The forms (her ex. 1)
  ["faire (plus-que-parfait) → je", "j'avais fait", "G", "forms"],
  ["être (plus-que-parfait) → il", "il avait été", "G", "forms"],
  ["aller (plus-que-parfait) → ils", "ils étaient allés", "G", "forms"],
  ["prendre (plus-que-parfait) → nous", "nous avions pris", "G", "forms"],
  ["sortir (plus-que-parfait) → nous", "nous étions sortis / nous étions sorties", "G", "forms"],
  ["entendre (plus-que-parfait) → tu", "tu avais entendu", "G", "forms"],
  ["pouvoir (plus-que-parfait) → vous", "vous aviez pu", "G", "forms"],
  ["venir (plus-que-parfait) → je", "j'étais venu / j'étais venue", "G", "forms"],
  ["ouvrir (plus-que-parfait) → je", "j'avais ouvert", "G", "forms"],
  ["mourir (plus-que-parfait) → il", "il était mort", "G", "forms"],

  // ── Into the plus-que-parfait, with the time words (her ex. 2)
  ["J'ai mangé une soupe il y a deux jours → au plus-que-parfait", "J'avais mangé une soupe deux jours avant / J'avais mangé une soupe deux jours plus tôt / J'avais mangé une soupe deux jours auparavant / J'avais mangé une soupe l'avant-veille", "G", "topqp"],
  ["Il a pris le métro hier → au plus-que-parfait", "Il avait pris le métro la veille", "G", "topqp"],
  ["Elle est arrivée à l'heure → au plus-que-parfait", "Elle était arrivée à l'heure", "G", "topqp"],
  ["J'ai mal dormi toute la semaine dernière → au plus-que-parfait", "J'avais mal dormi toute la semaine précédente / J'avais mal dormi toute la semaine d'avant", "G", "topqp"],
  ["On les a vus au supermarché → au plus-que-parfait", "On les avait vus au supermarché", "G", "topqp"],
  ["Il a plu toute la journée → au plus-que-parfait", "Il avait plu toute la journée", "G", "topqp"],
  ["Le bébé s'est réveillé il y a deux heures → au plus-que-parfait", "Le bébé s'était réveillé deux heures avant / Le bébé s'était réveillé deux heures plus tôt / Le bébé s'était réveillé deux heures auparavant", "G", "topqp"],
  ["Ils ont fait construire leur maison l'année dernière → au plus-que-parfait", "Ils avaient fait construire leur maison l'année précédente / Ils avaient fait construire leur maison l'année d'avant / Ils avaient fait construire leur maison un an auparavant / Ils avaient fait construire leur maison un an plus tôt", "G", "topqp"],

  // ── Yes, with a pronoun (her ex. 4)
  ["Tu avais acheté les fleurs au marché ? → Oui, …", "Oui, je les avais achetées au marché / Je les avais achetées au marché / Oui, je les avais achetées / Je les avais achetées", "G", "yes"],
  ["Tu avais reçu la lettre le matin même ? → Oui, …", "Oui, je l'avais reçue le matin même / Je l'avais reçue le matin même / Oui, je l'avais reçue / Je l'avais reçue", "G", "yes"],
  ["Tes amis avaient déjà vu le film ? → Oui, …", "Oui, ils l'avaient déjà vu / Ils l'avaient déjà vu / Oui, ils l'avaient vu / Ils l'avaient vu", "G", "yes"],
  ["Tu avais répondu à tes parents ? → Oui, …", "Oui, je leur avais répondu / Je leur avais répondu", "G", "yes"],

  // ── No (her ex. 5)
  ["Tu étais parti à l'heure ? → Non, …", "Non, je n'étais pas parti à l'heure / Je n'étais pas parti à l'heure / Non, je n'étais pas parti / Je n'étais pas parti", "G", "no"],
  ["Vous aviez tout bu ? → Non, …", "Non, nous n'avions pas tout bu / Nous n'avions pas tout bu / Non, on n'avait pas tout bu / On n'avait pas tout bu / Non, je n'avais pas tout bu / Je n'avais pas tout bu", "G", "no"],
  ["Tu avais acheté des noix de cajou au marché ? → Non, …", "Non, je n'en avais pas acheté au marché / Je n'en avais pas acheté au marché / Non, je n'en avais pas acheté / Je n'en avais pas acheté", "G", "no"],
  ["Tu t'étais endormi sur le canapé ? → Non, …", "Non, je ne m'étais pas endormi sur le canapé / Je ne m'étais pas endormi sur le canapé / Non, je ne m'étais pas endormi / Je ne m'étais pas endormi", "G", "no"],

  // ── After a verb in the past (her lesson, 3A)
  ["avoir → J'ai pensé qu'il ___ un problème", "avait eu", "G", "said"],
  ["ne pas pouvoir → Il m'a expliqué qu'il ___ faire l'exercice", "n'avait pas pu", "G", "said"],
  ["partir → Je lui ai dit qu'on ___ la veille", "était partis / était parties", "G", "said"],
  ["déménager → Mes amis ne savaient pas que j'___ l'année précédente", "avais déménagé", "G", "said"],

  // ── After si (her lesson, 3B)
  ["pouvoir → Si j'___ venir, tu aurais été content", "avais pu", "G", "if"],
  ["dire → Si tu m'___ ça, je serais parti plus tôt", "avais dit", "G", "if"],
  ["ne pas pleuvoir → S'il ___, on serait sortis", "n'avait pas plu", "G", "if"],

  // ── Ça faisait longtemps que (her lesson, 3C)
  ["la voir → J'ai déjeuné avec Liliane hier. Ça faisait longtemps que ___", "je ne l'avais pas vue", "G", "longtime"],
  ["y aller → Morgane est allée à Brest le week-end dernier. Ça faisait longtemps qu'___", "elle n'y était pas allée", "G", "longtime"],
  ["leur parler → J'ai eu mes parents au téléphone. Ça faisait longtemps que ___", "je ne leur avais pas parlé", "G", "longtime"],
  ["faire du vélo → J'ai fait du vélo hier. Ça faisait 20 ans que ___", "je n'avais pas fait de vélo / je n'en avais pas fait", "G", "longtime"],

  // ── Her sentences to translate (ex. 6 and 7), both ways round
  ["J'étais parti trois minutes avant", "I had left three minutes before / I had left 3 minutes before / I had left three minutes earlier / I had left 3 minutes earlier / I'd left three minutes before / I'd left three minutes earlier (said by a man)", "E", "sentences"],
  ["Je n'avais pas eu le temps", "I hadn't had the time / I had not had the time / I hadn't had time / I had not had time", "E", "sentences"],
  ["Il n'était pas encore arrivé quand je suis parti", "He hadn't arrived yet when I left / He had not arrived yet when I left / He hadn't yet arrived when I left / He had not yet arrived when I left / He still hadn't arrived when I left (said by a man)", "E", "sentences"],
  ["Ils s'étaient vus avant", "They had seen each other before / They'd seen each other before (ils)", "E", "sentences"],
  ["Je n'avais jamais vu la neige avant d'aller à Chamonix", "I had never seen snow before I went to Chamonix / I had never seen snow before going to Chamonix / I'd never seen snow before I went to Chamonix / I'd never seen snow before going to Chamonix (with avant de)", "E", "sentences"],
  ["Ils n'avaient pas beaucoup dormi la veille", "They hadn't slept a lot the night before / They hadn't slept much the night before / They had not slept much the night before / They had not slept a lot the night before / They hadn't slept much the previous night / They hadn't slept much the day before (ils)", "E", "sentences"],
  ["Il m'a dit qu'il avait eu le temps", "He told me he had had time / He told me he had had the time / He told me that he had had time", "E", "sentences"],
  ["Il m'a dit qu'il avait le temps", "He told me he had time / He told me he had the time / He told me that he had time", "E", "sentences"],
  ["J'en avais acheté au supermarché", "I had bought some at the supermarket / I'd bought some at the supermarket", "E", "sentences"],
];

export const NOTES = [
  {
    tab: "Use",
    h: "1 · What the plus-que-parfait is for",
    blocks: [
      { t: "lead", v: "The plus-que-parfait says what had already happened before something else in the past: *j'avais lu le livre*, \"I had read the book\"." },
      { t: "note", v: "It is the English \"had done\": *j'avais lu le livre donc je connaissais déjà l'histoire quand j'ai vu le film*, \"I had read the book, so I already knew the story when I saw the film\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Il m'a proposé d'aller au restaurant mais j'ai dit non car j'avais déjà mangé", "He suggested going to a restaurant but I said no because I had already eaten"],
        ["J'ai vu ton message mais j'étais parti", "I saw your message but I had left"],
        ["Je suis arrivé le 12. Mon ami était arrivé la veille", "I arrived on the 12th. My friend had arrived the day before"],
        ["Je suis allé le voir chez lui mais il était sorti 10 minutes avant", "I went to see him at his place but he had gone out 10 minutes before"],
      ]},
    ],
  },
  {
    tab: "Forms",
    h: "2 · How to make it",
    blocks: [
      { t: "lead", v: "Take the passé composé and put avoir or être in the imperfect: *j'ai regardé → j'avais regardé*, \"I had watched\"." },
      { t: "table", caption: "With avoir and with être",
        cols: ["regarder", "aller"],
        rows: [
          ["j'avais regardé", "j'étais allé(e)"],
          ["tu avais regardé", "tu étais allé(e)"],
          ["il, elle, on avait regardé", "il était allé, elle était allée"],
          ["nous avions regardé", "nous étions allé(e)s"],
          ["vous aviez regardé", "vous étiez allé(e)(s)"],
          ["ils, elles avaient regardé", "ils étaient allés, elles étaient allées"],
        ] },
      { t: "note", v: "Ne … pas goes around avoir or être: *on n'avait pas encore compris*, \"we hadn't understood yet\". A pronoun goes in front of them: *on les avait vus la veille*, \"we had seen them the day before\"." },
      { t: "sub", v: "Verbs with être" },
      { t: "note", v: "Verbs of coming and going, such as aller, venir, partir, sortir and arriver, and mourir, and every verb with se, take être, and the participle takes -e for a woman and -s for several people: *ma mère était arrivée deux jours avant*, \"my mother had arrived two days before\"; *on s'était vus*, \"we had seen each other\"." },
      { t: "sub", v: "Irregular participles" },
      { t: "pairs", head: ["Verb", "English"], v: [
        ["faire → fait", "to do → done"],
        ["être → été", "to be → been"],
        ["prendre → pris", "to take → taken"],
        ["pouvoir → pu", "to be able to → been able to"],
        ["ouvrir → ouvert", "to open → opened"],
        ["mourir → mort", "to die → died"],
        ["venir → venu", "to come → come"],
      ]},
      { t: "sub", v: "Le, la, les before the verb" },
      { t: "note", v: "With avoir, le, la, l' or les before the verb gives the participle the -e or -s of what it stands for: *les fleurs → je les avais achetées*, \"I had bought them\". En and leur don't: *je n'en avais pas acheté*, \"I hadn't bought any\"." },
      { t: "sub", v: "Time words" },
      { t: "note", v: "Told from the past, hier becomes la veille, dernier becomes précédent and il y a becomes avant: *il a pris le métro hier → il avait pris le métro la veille*, \"he had taken the metro the day before\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["la veille", "the day before"],
        ["la semaine précédente, l'année précédente", "the previous week, the previous year"],
        ["deux jours avant", "two days before"],
        ["à ce moment-là", "at that moment"],
        ["à cette époque-là", "at that time"],
      ]},
    ],
  },
  {
    tab: "After que",
    h: "3 · After a verb in the past",
    blocks: [
      { t: "lead", v: "After a verb in the past such as il m'a dit que, something that happened before it goes in the plus-que-parfait: *il m'a dit qu'il avait eu le temps*, \"he told me he had had time\"." },
      { t: "note", v: "With the imperfect it means something else: *il m'a dit qu'il avait le temps*, \"he told me he had time\", then, as he spoke." },
      { t: "pairs", head: ["French", "English"], v: [
        ["J'ai pensé qu'il avait eu un problème", "I thought he had had a problem"],
        ["Il m'a expliqué qu'il n'avait pas pu faire l'exercice", "He explained that he hadn't been able to do the exercise"],
        ["Je lui ai dit qu'on était partis la veille", "I told him we had left the day before"],
        ["Mes amis ne savaient pas que j'avais déménagé l'année précédente", "My friends didn't know I had moved the year before"],
      ]},
    ],
  },
  {
    tab: "If",
    h: "4 · If it had happened",
    blocks: [
      { t: "lead", v: "For something that didn't happen, put si and the plus-que-parfait, then what would have happened, with aurais or serais and the participle: *si j'avais pu venir, tu aurais été content*, \"if I had been able to come, you would have been happy\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Si tu m'avais dit ça, je serais parti plus tôt", "If you had told me that, I would have left earlier"],
        ["S'il n'avait pas plu, on serait sortis", "If it hadn't rained, we would have gone out"],
      ]},
    ],
  },
  {
    tab: "Ça faisait",
    h: "5 · Ça faisait longtemps que",
    blocks: [
      { t: "lead", v: "When you have just done something for the first time in a long while, say ça faisait longtemps que and the plus-que-parfait with ne … pas: *ça faisait longtemps que je ne l'avais pas vue*, \"I hadn't seen her in a long time\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["J'ai eu mes parents au téléphone. Ça faisait longtemps que je ne leur avais pas parlé", "I spoke to my parents on the phone. I hadn't talked to them in a long time"],
        ["Morgane est allée à Brest. Ça faisait longtemps qu'elle n'y était pas allée", "Morgane went to Brest. She hadn't been there in a long time"],
      ]},
      { t: "note", v: "Any length of time can take the place of longtemps: *ça faisait 20 ans que je n'avais pas fait de vélo*, \"I hadn't ridden a bike in 20 years\"." },
    ],
  },
];

export const LESSON = {
  id: "plusqueparfait",
  title: "Le plus-que-parfait",
  subtitle: "What had already happened: the plus-que-parfait, after si, and ça faisait longtemps que",
  source: "LFL METHOD by Laura Caufour",
  cards: CARDS,
  notes: NOTES,
  // The order a student meets NEW cards in (reviews are FSRS's), as the
  // notes tabs run: the words and forms, then her exercises on them, then
  // each of her three uses, then her sentences.
  teachingOrder: ["words", "forms", "topqp", "yes", "no", "said", "if", "longtime", "sentences"],
  // The line shown above a grammar card saying what to type (see
  // src/lib/cardInstruction.js). The drills get theirs from their shape
  // ("Pluperfect (plus-que-parfait), with je").
  instructions: {
    topqp: "Put this sentence in the plus-que-parfait, changing the time words to fit",
    yes: "Answer yes in a full sentence, with a pronoun where you can",
    no: "Answer no in a full sentence, with a pronoun where you can",
    said: "Fill the gap with the verb given, in the plus-que-parfait",
    if: "Fill the gap with the verb given, in the plus-que-parfait",
    longtime: "Finish the sentence in the plus-que-parfait, in the negative, with the words given",
  },
};

export default LESSON;
