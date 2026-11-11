// Leçon 8 · On et faire — built from Laura Caufour's LFL METHOD Leçon 8
// sheets: the lesson (Maxime interviews James and Jessica, two Americans who
// learned French, for France 24; faire in the present and the passé composé;
// être, pouvoir, vouloir, savoir and venir in the passé composé; the pronoun
// on; adjectives in -ier; one verb after another; numbers 40–49) and the
// exercise sheet.
//
// LEÇON 8 HAS NO ANSWER KEY. Her folder has no "CORRECTION EXERCICES - Leçon
// 8", and her course for Spanish speakers has no Leçon 8 to borrow one from.
// Every answer on these cards was written for the app, from her lesson's own
// tables and examples, and each was checked with the app's marker
// (lessoncheck.mjs --try): the right answers a teacher would accept pass, the
// mistake the card is about fails.
//
// Each entry is [front, back, category, section].
//
// The students are beginners who have done Leçons 1–7 and nothing else:
// être, aller, avoir, -er verbs, vouloir and pouvoir, ne … pas, tu or vous,
// prendre and savoir, adjectives, and the passé composé with avoir and être
// (Leçon 7). No card asks for more than that plus this lesson. Questions are
// asked the way Laura asks them, by intonation — "Comment tu as fait ça ?",
// "Vous êtes partis en France ?" — never by inversion.
//
// Card shapes:
//   "faire (présent) → vous" / "vous faites"          drill; its line comes from its shape
//   "venir (passé composé) → elle" / "elle est venue"   drill in the passé composé
//   "Vous êtes partis en France ? → Oui, on …"         answer yes with on (her ex. 3)
//   "Tu fais quelque chose ce soir ? → Oui, …"          answer yes (her ex. 4)
//   "premier → La ___ fois, c'était difficile"          the -ier adjective in the form that fits
//   "apprendre → On a décidé ___ la langue"             the verb, with à or de if it needs one
//   "41 → en lettres" / "quarante-et-un / quarante et un"
//   "au début" / "in the beginning / …"                 words and phrases, both ways round
//
// WHY THE AGREEMENTS AND THE LITTLE WORDS ARE ON → CARDS. A word or phrase
// card is marked with typo tolerance: one letter passes from five letters
// up, two from nine, three from fifteen. "la premier fois" passes for "la
// première fois", "on a décidé de apprendre" for "on a décidé d'apprendre",
// "Comment tu as fais ça ?" and "Comment tu es fait ça ?" for "Comment tu
// as fait ça ?", and "décider à" and "commencer de" for "décider de" and
// "commencer à" (all tried with lessoncheck --try). Each of those is a point
// of this lesson, so each is also asked on an arrow card, which is marked
// exactly: the -ière / -iers / -ières endings, à / de / d' / nothing before
// the second verb, every present form of faire and "on a fait", être with
// avoir (j'ai été) and venir with être (elle est venue), and the il form
// after on. The phrase cards are there for the sentences as wholes.
//
// One gap of the same kind has no arrow card: shown "it became", "c'est
// venu" (it came) passes for "c'est devenu" as close enough. Devenir is a
// word on her list, not a verb her lesson conjugates, so nothing asks for
// devenu exactly.
//
// THE ÊTRE AND VENIR DRILLS NAME ONE PERSON. An "il/elle" or "ils/elles"
// drill also accepts its answer with the other pronoun swapped in and nothing
// else changed (personAlternates), which would pass "elle est venu". So the
// venir drills ask for "→ elle" and "→ ils"; the je card takes venu and
// venue.
//
// WHAT WAS SAMPLED, AND WHAT WAS LEFT:
//   - ex. 1 and 2 (write any sentence with each form) and ex. 6 (write five
//     sentences with each construction) have no single answer. The drills
//     ask for the forms; the gap cards in "twoverbs" ask for the
//     constructions, in her lesson's examples and her dialogue's sentences.
//   - Faire in the present is new, so it has all six persons. Its passé
//     composé has no drill: Leçon 7 asks for its participle ("faire →
//     participe passé" / "fait"), and her ex. 3 no. 7 card here asks for "on
//     a fait du sport hier" exactly.
//   - The other passé composé drills take the persons that teach something.
//     Être, pouvoir, vouloir and savoir: je only, which is where the
//     participle and the elision (j'ai, never je ai) are learned; the other
//     persons change only avoir, which Leçon 3 drilled. Venir: je, elle and
//     ils, for venu, venue and venus.
//   - ex. 3 (answer yes with on): 7 of her 20 questions, one for each thing
//     on does — an -er verb (no. 13, on travaille), an irregular present
//     (no. 16, on va), être with a plural word after it (no. 14, on est
//     fatigués), the passé composé with avoir (no. 7, on a fait), with
//     pouvoir (no. 8, on a pu partir), with être as the verb (no. 10, on a
//     été) and with être as the helper (no. 1, on est partis). The others
//     repeat one of these: nos. 2, 4 and 6 (on a + another participle), 3, 5
//     and 9 (on est + another participle), 11, 15, 17, 18 and 19 (on + the il
//     form again), 12 (on est mariés, like fatigués), 20 (on veut, like on va).
//   - ex. 4 (answer yes, any person): 2 of 15. No. 6, "Tu fais quelque chose
//     ce soir ?", for faire in the answer; no. 7, "Vous êtes revenus plusieurs
//     fois ?", for venir's family with nous or on. The rest switch the person
//     (tu → je, vous → nous, ton → mon, two names → ils) in tenses Leçons 2–7
//     drilled, or copy the question back (no. 15, "Elle a su pourquoi ?";
//     no. 13 hands over its "commences à").
//   - ex. 5 (write the question) is not used: with no key, each answer has
//     several right questions, and the marker can only take the ones listed.
//   - ex. 7 is the word list: all 30, in her order. "the last time – la
//     dernière fois" is also in Leçon 6 (her adjective table and ex. 3 no.
//     3), which has no card for it and leaves it to this list. "really" and
//     "it was" are on Leçon 9's list too; they are here, the earlier lesson.
//   - ex. 8 (translation): 5 of 18, each for something no other card asks:
//     nos. 3 (trouver ça + an adjective), 5 (décider de, with on), 7 (la
//     première fois … donc … plus facile), 11 (c'était super de …), 14
//     (Comment tu as fait ça ?). No. 8 is the Faire tab's first example and
//     not a card: faire du sport is Leçon 6's word card, plusieurs and deux
//     fois par semaine are word cards here, and je fais is the drill, which
//     the phrase card did not even check ("Je fait du sport …" passed as
//     close enough). The others repeat these or the ex. 3 cards, or are long
//     enough that the fuzzy marker would pass a wrong word (nos. 10, 13, 15,
//     16, 18). No. 12, "Did you guys start to take classes in 2018?", was
//     tried and dropped: guys or not, taking or to take, classes or lessons
//     make eight English answers, and the marker refused right ones it didn't
//     list; its point, commencer à prendre des cours, is the gap card and the
//     word card. No. 1
//     is not used: its English, "speak fluently French", is not English word
//     order, and the French could put couramment in two places.
//   - The -ier cards: three, one for each ending that changes the word —
//     première, derniers, particulières. Masculine premier is a Leçon 1 word
//     card. She has no exercise on these adjectives; the cards are built on
//     her table and her dialogue ("La première fois, … c'était difficile").
//     The derniers card says "Les ___ amis sont partis": amis and partis
//     show the noun is masculine (un ami is a Leçon 4 word card). Her
//     dialogue's cours would not: les hides its gender and no card shows it,
//     so a student applying the rule could type dernières.
//   - The two-verbs cards: one for each column of her table and one for the
//     passé composé — vouloir and pouvoir (nothing between), commencer à,
//     décider de (with its d'), essayer de. Continuer à has no card:
//     continuer de is just as correct, so a card could not test the à.
//   - Numbers: 40, the round ten; 41, the et-un; 44, 47 and 49 for the
//     pattern. 42, 43, 45, 46 and 48 are in the notes' table.
//   - ex. 9 (dictation) and ex. 10 and 11 (oral) need the audio.
//
// DEPARTURES FROM HER SHEETS:
//   - Her lesson says être in the passé composé "is always translated have /
//     has been, never was / were". That is not so: her own ex. 3 no. 10,
//     "Vous avez été malade la semaine dernière ?", is "were you sick last
//     week?" in English. The notes give j'ai été as "I have been, I was",
//     say it can also mean "I was" (j'ai été malade la semaine dernière, "I
//     was sick last week"), and give c'était for "it was", which keeps the
//     point of her warning. No card asks for the English of j'ai été.
//   - ex. 3 no. 10 asks "Vous avez été malade …" with malade singular, and is
//     answered with on, a group. The card's question has malades, and takes
//     only the answer with the -s, as the other on cards do.
//   - On with être: her dialogue writes "on est partis", "on est rentrés".
//     When on means "we", the word after on est takes the gender and number
//     of the people it stands for: Académie française, Questions de langue QDL059 ("l'accord se fait tout
//     naturellement en genre et en nombre" when on means particular people;
//     only an on that means people in general stays plain), Larousse, on
//     ("l'accord se fait en genre et en nombre avec le sujet représenté par
//     on"), and the OQLF Vitrine linguistique ("Mon ami et moi, on s'est
//     disputés").
//     So the cards take "on est partis" and refuse "on est parti" (changed
//     2026-10-20; the first build accepted both). ex. 3 shows "Oui, on …", so its cards want on:
//     nous is not taken there. ex. 4 shows only "Oui, …", so no. 7 takes
//     nous or on. Every yes card also takes its answer without the Oui the
//     prompt already shows, as in Leçons 2–5.
//   - She writes 41 "quarante-et-un", with hyphens (the 1990 spelling).
//     "quarante et un", the traditional spelling, is just as correct, and
//     hyphens are marked, so the card takes both and the notes say so.
//   - Her list's "Congratulation!" and her dialogue translation's
//     "Congratulation!" are "Congratulations!". Her ex. 8 no. 8, "I'm doing
//     exercise several time a week", is "I exercise several times a week" in
//     the notes. Her translation "How did you do?" (for "Comment vous avez
//     fait ?") is "How did you do it?" in the notes.
//   - Her ex. 8 no. 7 card carries "(with donc)" on its English side: alors
//     says the same and, typed, is marked wrong. It also takes "It is not the
//     first time so it is easier", which is four letters from the
//     contracted forms and was refused.
//   - Word list: "to go on holiday" carries "(with partir)", since aller en
//     vacances is also French and her dialogue says "on est partis en
//     vacances". "so / then" is donc, as in her dialogue, with "(not alors)",
//     which says the same. "to take classes / to take lessons" carries "(not
//     leçons)", since prendre des leçons is also French and the -ier card
//     and notes use leçons; Leçon 1's "cours de français" says "(not leçon)"
//     the same way. "a tutor" is un professeur particulier, her
//     dialogue's word. "to decide" and "to start" are carried with their
//     little word, décider de and commencer à, which is this lesson's point;
//     typing the verb alone, or with the other little word ("décider à",
//     "commencer de"), still passes as close enough, and the twoverbs arrow
//     cards check the à and the de exactly. "the progress" is
//     les progrès (m), as in her dialogue, with the gender shown because les
//     hides it. "un prof particulier", the everyday short form, is not taken
//     shown "a tutor": a second French form would show the student a slash.
//   - ex. 5 no. 3's "la culture français" (for française) is not carded.
//   - She writes "Il essaye de parler français". Il essaie is equally right;
//     the sentence is only on a card's front, so nothing needs accepting.
//
// SENTENCES IN THE NOTES THAT ARE NOT HERS. Her tables or her dialogue show
// each of these, but her lesson never says it, and a card relies on it:
//   - Faire: "Watch two forms: vous faites … not vous faisez; and ils font
//     … not ils faisent"; and "In the passé composé, faire takes avoir and becomes fait".
//   - Past: the lead (four verbs take avoir, venir takes être), "Only avoir
//     changes with the person", "The trap: … never je suis été", "J'ai été
//     can also mean 'I was'" and "I was" in the table (see DEPARTURES), and
//     "For 'it was', French usually says c'était" (her word list and
//     dialogue).
//   - Past, Venir: add -e for a woman, -s for two or more, -es for two or
//     more women, and the feminine column of the table. Her table shows the
//     masculine only; the rule is her Leçon 7's. "Revenir … also makes its
//     passé composé with être": her ex. 4 no. 7 uses it.
//   - On, "on est": "After on est, a word like fatigué or parti takes an
//     -s, because on means more than one person" and "If they are all women,
//     it takes -es". Her dialogue writes the plural (on est partis) without
//     saying why; the sources are under DEPARTURES.
//   - On, "Answering with on": both notes, on or nous for vous said to
//     several people. Her ex. 3 and 4 ask for it without saying how.
//   - Adjectives: where premier, dernier and particulier go, and dernier after
//     semaine or mois. Her Leçon 6 adjective table has premier and dernier
//     before the noun and dernier after a word for time; Leçon 8 doesn't say
//     it.
//   - Two verbs: the lead's "the second stays as you find it in the
//     dictionary" (her heading says "infinitif"), each sub's sentence naming
//     which verbs take what, "de becomes d' before a vowel" (her example
//     shows "décidé d'apprendre"), and "In the passé composé … not j'ai
//     commencé à mangé" (her example shows it).
//   - Numbers: the lead, and "quarante et un, without hyphens, is just as
//     correct".
// Also added: English beside every example (her lesson gives it only for
// the on examples), and the answer pairs under "Answering with on", which
// are her ex. 3 and 4 questions with our answers.

export const CARDS = [
  // ── Her word list (ex. 7), all 30, in her order
  ["au début", "in the beginning / at the beginning / at first / at the start", "V", "words"],
  ["partir en vacances", "to go on holiday / to go on vacation (with partir)", "V", "words"],
  ["cette fois", "this time", "V", "words"],
  ["un niveau", "a level", "V", "words"],
  ["Félicitations !", "Congratulations!", "E", "words"],
  ["couramment", "fluently", "V", "words"],
  ["deux fois par semaine", "twice a week / two times a week / twice per week", "V", "words"],
  ["difficile", "difficult / hard", "V", "words"],
  ["la dernière fois", "the last time / last time", "V", "words"],
  ["facile", "easy", "V", "words"],
  ["c'était", "it was", "V", "words"],
  ["prendre des cours", "to take classes / to take lessons (not leçons)", "V", "words"],
  ["plusieurs", "several", "V", "words"],
  ["décider de", "to decide", "V", "words"],
  ["impressionnant", "impressive (masc.)", "V", "words"],
  ["la première fois", "the first time", "V", "words"],
  ["vraiment", "really", "V", "words"],
  ["un professeur particulier", "a tutor / a private tutor / a private teacher", "V", "words"],
  ["donc", "so / then / therefore (not alors)", "V", "words"],
  ["une émission", "a TV program / a TV programme / a TV show", "V", "words"],
  ["la langue", "the language", "V", "words"],
  ["travailler dur", "to work hard", "V", "words"],
  ["plus facile", "easier", "V", "words"],
  ["commencer à", "to start / to begin", "V", "words"],
  ["avec le temps", "with time / over time", "V", "words"],
  ["les progrès (m)", "the progress", "V", "words"],
  ["trouver", "to find", "V", "words"],
  ["communiquer", "to communicate", "V", "words"],
  ["comment", "how", "V", "words"],
  ["c'est devenu", "it became / it has become", "V", "words"],

  // ── 1. Faire in the present: new, so all six persons. Its passé composé
  //    has no drill: Leçon 7 asks for fait, and "on a fait" is asked exactly
  //    below (her ex. 3 no. 7).
  ["faire (présent) → je", "je fais", "G", "faire"],
  ["faire (présent) → tu", "tu fais", "G", "faire"],
  ["faire (présent) → il/elle", "il fait", "G", "faire"],
  ["faire (présent) → nous", "nous faisons", "G", "faire"],
  ["faire (présent) → vous", "vous faites", "G", "faire"],
  ["faire (présent) → ils/elles", "ils font", "G", "faire"],

  // ── 1. Être, pouvoir, vouloir, savoir and venir in the passé composé.
  //    The avoir verbs once each, with je; venir with je, elle and ils, one
  //    person per card (see the header on il/elle drills).
  ["être (passé composé) → je", "j'ai été", "G", "past"],
  ["pouvoir (passé composé) → je", "j'ai pu", "G", "past"],
  ["vouloir (passé composé) → je", "j'ai voulu", "G", "past"],
  ["savoir (passé composé) → je", "j'ai su", "G", "past"],
  ["venir (passé composé) → je", "je suis venu / je suis venue", "G", "past"],
  ["venir (passé composé) → elle", "elle est venue", "G", "past"],
  ["venir (passé composé) → ils", "ils sont venus", "G", "past"],

  // ── 2. On. The word, then her ex. 3: answer yes with on. One card for each
  //    thing on does (see the header). With être the plural is taken with or
  //    without its -s; nous is not taken, as the prompt asks for on.
  ["on", "we (in everyday speech, not nous)", "V", "on"],
  ["Vous travaillez dur ? → Oui, on …", "Oui, on travaille dur / On travaille dur", "G", "on"],
  ["Vous allez souvent en France ? → Oui, on …", "Oui, on va souvent en France / On va souvent en France", "G", "on"],
  ["Vous êtes fatigués ? → Oui, on …", "Oui, on est fatigués / On est fatigués", "G", "on"],
  ["Vous avez fait du sport hier ? → Oui, on …", "Oui, on a fait du sport hier / On a fait du sport hier", "G", "on"],
  ["Vous avez pu partir en France ? → Oui, on …", "Oui, on a pu partir en France / On a pu partir en France", "G", "on"],
  ["Vous avez été malades la semaine dernière ? → Oui, on …", "Oui, on a été malades la semaine dernière / On a été malades la semaine dernière", "G", "on"],
  ["Vous êtes partis en France ? → Oui, on …", "Oui, on est partis en France / On est partis en France", "G", "on"],

  // ── Her ex. 4: answer yes, the person switching. Revenus is plural, so
  //    nous or on, never je.
  ["Tu fais quelque chose ce soir ? → Oui, …", "Oui, je fais quelque chose ce soir / Je fais quelque chose ce soir", "G", "yes"],
  ["Vous êtes revenus plusieurs fois ? → Oui, …", "Oui, nous sommes revenus plusieurs fois / Oui, on est revenus plusieurs fois / Nous sommes revenus plusieurs fois / On est revenus plusieurs fois", "G", "yes"],

  // ── 3. Adjectives in -ier: one card for each ending that changes the word
  ["premier → La ___ fois, c'était difficile", "première", "G", "adjectives"],
  ["dernier → Les ___ amis sont partis", "derniers", "G", "adjectives"],
  ["particulier → Elle prend des leçons ___", "particulières", "G", "adjectives"],

  // ── 4. One verb after another: nothing, à or de (d') before the second
  //    verb, which stays as it is, in the passé composé too
  ["aller → Je veux ___ à la plage", "aller", "G", "twoverbs"],
  ["communiquer → On a pu ___ un peu", "communiquer", "G", "twoverbs"],
  ["prendre → On a commencé ___ des cours deux fois par semaine", "à prendre", "G", "twoverbs"],
  ["apprendre → On a décidé ___ la langue", "d'apprendre", "G", "twoverbs"],
  ["parler → Il essaye ___ français", "de parler", "G", "twoverbs"],

  // ── Her ex. 8 translations, each for something no other card asks
  ["Je trouve ça très impressionnant", "I find that very impressive / I find it very impressive", "E", "phrases"],
  ["On a décidé d'apprendre le français quand on est allés à Paris", "We decided to learn French when we went to Paris (with on)", "E", "phrases"],
  ["Ce n'est pas la première fois donc c'est plus facile", "It's not the first time so it's easier / It isn't the first time so it's easier / It is not the first time so it is easier (with donc)", "E", "phrases"],
  ["C'était super de voir mes amis là-bas", "It was great to see my friends there / It was great to see my friends over there / It was great seeing my friends there", "E", "phrases"],
  ["Comment tu as fait ça ?", "How did you do that? / How did you do it? (tu)", "E", "phrases"],

  // ── 5. Numbers 40–49
  ["40 → en lettres", "quarante", "G", "numbers"],
  ["41 → en lettres", "quarante-et-un / quarante et un", "G", "numbers"],
  ["44 → en lettres", "quarante-quatre", "G", "numbers"],
  ["47 → en lettres", "quarante-sept", "G", "numbers"],
  ["49 → en lettres", "quarante-neuf", "G", "numbers"],
];

// The notes: her lesson translated into English and restructured on the
// impératif's model for a student stuck on a card. Her section 1 (irregular
// verbs) is two tabs, Faire and Past, so a student stuck on venir finds it
// without reading past faire; then one tab for each of her sections 2 to 5.
// There is no Use tab: what faire, on and each construction are for is the
// first line of its tab. No word list (owner, 2026-10-05), and the dialogue
// is left out: the word and phrase cards are how its words are learned.
export const NOTES = [
  {
    tab: "Faire",
    h: "1 · Faire in the present and the passé composé",
    blocks: [
      { t: "lead", v: "**Faire** means \"to do\" or \"to make\", and it is irregular: learn its forms by heart, like *je fais*, \"I do\"." },
      { t: "table", bold: 0,
        cols: ["Present", "Passé composé"],
        rows: [
          ["je fais", "j'ai fait"],
          ["tu fais", "tu as fait"],
          ["il, elle, on fait", "il, elle, on a fait"],
          ["nous faisons", "nous avons fait"],
          ["vous faites", "vous avez fait"],
          ["ils, elles font", "ils, elles ont fait"],
        ]},
      { t: "note", v: "Watch two forms: *vous faites*, \"you do\", not vous faisez; and *ils font*, \"they do\", not ils faisent." },
      { t: "note", v: "In the passé composé, faire takes avoir and becomes *fait*: *j'ai fait*, \"I did\" or \"I have done\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Je fais du sport plusieurs fois par semaine", "I exercise several times a week"],
        ["Tu fais quelque chose ce soir ?", "Are you doing anything tonight?"],
        ["Oui, je fais quelque chose ce soir", "Yes, I'm doing something tonight"],
        ["Comment vous avez fait ?", "How did you do it?"],
        ["On a fait du sport hier", "We exercised yesterday"],
      ]},
    ],
  },
  {
    tab: "Past",
    h: "2 · Être, pouvoir, vouloir, savoir and venir in the passé composé",
    blocks: [
      { t: "lead", v: "Être, pouvoir, vouloir and savoir make their passé composé with **avoir**, and venir with **être**: *j'ai pu*, \"I was able to\"; *je suis venu*, \"I came\"." },
      { t: "table", caption: "Passé composé · with avoir", bold: 1,
        cols: ["Verb", "Passé composé", "English"],
        rows: [
          ["être", "j'ai été", "I have been, I was"],
          ["pouvoir", "j'ai pu", "I was able to, I could"],
          ["vouloir", "j'ai voulu", "I wanted"],
          ["savoir", "j'ai su", "I found out"],
        ]},
      { t: "note", v: "Only avoir changes with the person: *ils ont pu*, \"they were able to\"; *nous avons voulu*, \"we wanted\"." },
      { t: "sub", v: "Être" },
      { t: "note", v: "**The trap:** être makes its passé composé with avoir: *j'ai été*, \"I have been\", never je suis été." },
      { t: "note", v: "*J'ai été* can also mean \"I was\": *j'ai été malade la semaine dernière*, \"I was sick last week\"." },
      { t: "note", v: "For \"it was\", French usually says *c'était*: *au début, c'était difficile*, \"in the beginning it was difficult\"." },
      { t: "sub", v: "Venir" },
      { t: "note", v: "Venir, \"to come\", makes its passé composé with être, so *venu* changes: add -e for a woman, -s for two or more people, and -es for two or more women." },
      { t: "table", caption: "Passé composé · venir", bold: 1,
        cols: ["Masculine", "Feminine"],
        rows: [
          ["je suis venu", "je suis venue"],
          ["tu es venu", "tu es venue"],
          ["il est venu", "elle est venue"],
          ["nous sommes venus", "nous sommes venues"],
          ["vous êtes venus", "vous êtes venues"],
          ["ils sont venus", "elles sont venues"],
        ]},
      { t: "note", v: "Revenir, \"to come back\", also makes its passé composé with être: *vous êtes revenus ?*, \"did you come back?\"; *nous sommes revenus*, \"we came back\"." },
    ],
  },
  {
    tab: "On",
    h: "3 · On, \"we\"",
    blocks: [
      { t: "lead", v: "In everyday French, **on** means \"we\", and its verb takes the same form as with il or elle: *on parle*, \"we are talking\"." },
      { t: "table", bold: 0,
        cols: ["With on", "With nous", "English"],
        rows: [
          ["On a travaillé", "Nous avons travaillé", "We worked"],
          ["On parle", "Nous parlons", "We are talking"],
          ["On est ici", "Nous sommes ici", "We are here"],
        ]},
      { t: "note", v: "When people speak, on is far more common than nous: it sounds more natural and more relaxed." },
      { t: "sub", v: "on est" },
      { t: "note", v: "After *on est*, a word like *fatigué* or *parti* takes an -s, because on means more than one person: *on est fatigués*, \"we are tired\"; *on est partis*, \"we left\"." },
      { t: "note", v: "If they are all women, it takes -es: *on est parties*, \"we left\"." },
      { t: "sub", v: "Answering with on" },
      { t: "note", v: "A question asked with vous to several people can be answered with on: the verb takes its il form and the rest of the sentence stays the same." },
      { t: "pairs", head: ["Question", "Answer"], v: [
        ["Vous travaillez dur ?", "Oui, on travaille dur"],
        ["Vous allez souvent en France ?", "Oui, on va souvent en France"],
        ["Vous avez fait du sport hier ?", "Oui, on a fait du sport hier"],
        ["Vous êtes partis en France ?", "Oui, on est partis en France"],
      ]},
      { t: "note", v: "Vous said to several people can be answered with nous as well as on: *vous êtes revenus plusieurs fois ?*, \"did you come back several times?\"; *oui, nous sommes revenus plusieurs fois*, \"yes, we came back several times\"." },
    ],
  },
  {
    tab: "Adjectives",
    h: "4 · Adjectives ending in -ier",
    blocks: [
      { t: "lead", v: "Adjectives ending in -ier, like *premier*, \"first\", end in -ière for a feminine noun, and add an -s in the plural." },
      { t: "table", dense: true,
        cols: ["Masculine", "Feminine", "Masc. plural", "Fem. plural"],
        rows: [
          ["premier", "première", "premiers", "premières"],
          ["dernier", "dernière", "derniers", "dernières"],
          ["particulier", "particulière", "particuliers", "particulières"],
        ]},
      { t: "pairs", head: ["French", "English"], v: [
        ["La première fois, c'était difficile", "The first time, it was difficult"],
        ["les derniers cours", "the last classes"],
        ["un professeur particulier", "a private tutor"],
        ["des leçons particulières", "private lessons"],
      ]},
      { t: "sub", v: "Where they go" },
      { t: "note", v: "Premier, \"first\", and dernier, \"last\", usually go before the noun: *la première fois*, \"the first time\"; *les derniers cours*, \"the last classes\"." },
      { t: "note", v: "Particulier, \"private\", goes after the noun: *un professeur particulier*, \"a private tutor\"." },
      { t: "sub", v: "Detail · advanced" },
      { t: "note", v: "With semaine, \"week\", or mois, \"month\", dernier goes after the noun and means the one just gone: *la semaine dernière*, \"last week\"." },
    ],
  },
  {
    tab: "Two verbs",
    h: "5 · One verb after another",
    blocks: [
      { t: "lead", v: "When one verb follows another, the second stays as you find it in the dictionary, and some verbs put **à** or **de** between the two." },
      { t: "note", v: "Each verb has its own way, so learn it with the verb: *commencer à*, \"to start\"; *décider de*, \"to decide\"." },
      { t: "sub", v: "Nothing between" },
      { t: "note", v: "After aimer, vouloir and pouvoir, the second verb comes straight after: *je veux aller*, \"I want to go\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["J'aime marcher", "I like walking"],
        ["Je veux aller à la plage", "I want to go to the beach"],
        ["Je peux essayer", "I can try"],
        ["On a pu communiquer un peu", "We were able to communicate a little"],
      ]},
      { t: "sub", v: "With à" },
      { t: "note", v: "After commencer, \"to start\", and continuer, \"to keep on\", put à: *il continue à parler*, \"he keeps talking\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["J'ai commencé à manger", "I started eating"],
        ["On a commencé à prendre des cours", "We started taking classes"],
        ["Il continue à parler", "He keeps talking"],
      ]},
      { t: "sub", v: "With de" },
      { t: "note", v: "After décider, \"to decide\", and essayer, \"to try\", put de, or d' before a vowel: *j'ai décidé d'apprendre*, \"I decided to learn\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["J'ai décidé d'apprendre", "I decided to learn"],
        ["On a décidé d'apprendre la langue", "We decided to learn the language"],
        ["Il essaye de parler français", "He is trying to speak French"],
      ]},
      { t: "sub", v: "In the passé composé" },
      { t: "note", v: "Only the first verb is in the passé composé, and the second stays as it is: *j'ai commencé à manger*, \"I started eating\", not j'ai commencé à mangé." },
    ],
  },
  {
    tab: "Numbers",
    h: "6 · Numbers 40 to 49",
    blocks: [
      { t: "lead", v: "From 42 to 49, write *quarante*, \"forty\", then a hyphen and the last figure in words: *quarante-deux*, \"forty-two\"." },
      { t: "note", v: "41 is *quarante-et-un*, \"forty-one\". Written *quarante et un*, without hyphens, it is just as correct." },
      { t: "table", bold: 1,
        cols: ["Number", "In words"],
        rows: [
          ["40", "quarante"],
          ["41", "quarante-et-un"],
          ["42", "quarante-deux"],
          ["43", "quarante-trois"],
          ["44", "quarante-quatre"],
          ["45", "quarante-cinq"],
          ["46", "quarante-six"],
          ["47", "quarante-sept"],
          ["48", "quarante-huit"],
          ["49", "quarante-neuf"],
        ]},
    ],
  },
];

export const LESSON = {
  id: "lecon8",
  title: "Lesson 8 · On and faire",
  subtitle: "On for we, faire, five verbs in the passé composé, -ier adjectives, one verb after another, and 40 to 49",
  source: "LFL METHOD by Laura Caufour",
  cards: CARDS,
  notes: NOTES,
  // The order a student meets NEW cards in (reviews are FSRS's). Her lesson
  // opens with the dialogue, so its words come first, as in Leçon 5: the
  // answers and the phrases are made of them. Then her grammar sections in
  // her order, each followed by the cards that practise it: faire; the five
  // verbs in the passé composé; on, then her ex. 3 (answer with on) and
  // ex. 4 (answer yes, which needs faire, revenir and on); the -ier
  // adjectives; one verb after another; then her ex. 8 translations, which
  // use all of these; the numbers last, on their own.
  teachingOrder: [
    "words",
    "faire", "past",
    "on", "yes",
    "adjectives",
    "twoverbs",
    "phrases",
    "numbers",
  ],
  // The line shown above a grammar card saying what to type (see
  // src/lib/cardInstruction.js). The drills get theirs from their shape;
  // words and phrases are two-way and carry none.
  instructions: {
    on: "Answer yes in a full sentence, using on",
    yes: "Answer yes in a full sentence",
    adjectives: "Fill the gap with the word given, in the form that fits",
    // "if it needs one" and not "with à or de": two of the five need neither.
    twoverbs: "Fill the gap with the verb given, and à or de if it needs one",
    numbers: "Write this number in French, in words",
  },
};

export default LESSON;
