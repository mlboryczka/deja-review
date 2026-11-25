// Le subjonctif présent — built 2026-11-15 from Laura Caufour's LFL METHOD
// sheets in Google Drive (Français / Le subjonctif présent): "Le subjonctif
// présent" and "EXERCICES - Le subjonctif présent" (file ids in
// .claude/topic-lessons-draft/subjonctif/sources.md). The "Subjunctive
// Lesson" doc in that folder is the owner's own notes and was not used. One
// of her topic lessons, in no stage (owner, 2026-11-13). She has no answer
// key for it: every answer here was written for the app and checked.
//
// Each entry is [front, back, category, section].
//
// Card shapes:
//   "prendre (subjonctif) → ils" / "qu'ils prennent"          drill; its line comes from its shape
//                                                            (que is optional when typed)
//   "Tu dois lui répondre → avec il faut que" / "Il faut que tu lui répondes"
//   "être → Je préfère que vous ___ honnêtes avec moi" / "soyez"   a gap in her sentence
//   "être → Je suis sûr qu'ils ___ là" / "seront / vont être / sont"   subjunctive or not
//   "Il faut que vous preniez le métro" / "You need to take the metro …"   both ways round
//
// WHY THE FORMS ARE ARROW CARDS. Phrase cards are marked with typo
// tolerance, and the subjunctive is often a letter or two from the present:
// finis / finisse, prends / prenne, regardons / regardions. On an arrow card
// the answer is marked exactly (accents aside), so each of those is wrong.
// Every gap gives the verb as a cue in front of the arrow, never in brackets.
// The phrase cards don't check the form: shown the English, "J'ai peur
// qu'ils sont en retard", "Qu'est-ce que tu veux que je fais ?", "Il faut que vous prenez le métro", "C'est génial qu'elle
// vient t'aider" and "Je suis désolé que tu as des problèmes" all pass as
// close enough (tried with lessoncheck --try). As in Leçon 19, the forms are
// checked exactly by the drills and gaps, and the phrase cards are there for
// whole sentences and their meaning. "Il veut me voir avant de commencer à
// travailler" is refused for "… avant que je commence …" (tried), so the
// avant cards do check the choice.
//
// WHAT WAS SAMPLED, AND WHAT WAS LEFT:
//   - Her verb list ("verbes à apprendre") and her tables: drills for the
//     -er nous form (regarder), finir, prendre (both stems) and venir (je;
//     its nous form is in the Forms tab), and
//     nine for her irregular verbs. Valoir and falloir have no drill (no
//     exercise of hers uses them); pleuvoir is in a gap (ex. 6 no. 24).
//     Mettre, dire, partir, sortir, attendre, répondre and traduire follow
//     the rule; they are in her sentences or the Forms tab's examples.
//   - Ex. 1 (20 sentences into il faut que): six, each a different verb,
//     with il, je, tu and vous, and the pronouns that go before the verb
//     (me, lui, y).
//   - Ex. 2 to 4 (translate): her English sentences, written in French as gap
//     cards sorted by what comes before que (wanting, feelings, pour que and
//     the other joining words), and a few as phrase cards.
//   - Ex. 5 (avant que or avant de): three phrase cards, and ex. 6 no. 23
//     ("I'd like to sing a song at the karaoke") for the same person after
//     aimer, the trap the Same person tab names. A gap after avant
//     would have two right answers when no English is shown (avant de
//     commencer and avant que je commence), so these show the English.
//   - Ex. 6 (subjunctive, ordinary form or infinitive): six gaps, chosen so
//     that the subjunctive is wrong in half of them.
//   - Left out: repeats of a shape another card has; ex. 6 sentences whose
//     answer is only an infinitive with the cue verb (the cue would be the
//     answer); no. 17 (see DEPARTURES).
//
// DEPARTURES FROM HER SHEETS:
//   - Her Niveau 3 list puts "il est probable que" with the subjunctive. It
//     takes the indicative; il est peu probable que takes the subjunctive, as
//     her own example "Il est peu probable que vous soyez accepté" shows
//     (CNRTL, "probable": "Il est probable que + ind. ou cond." and "il est
//     peu probable que + subj."). Ex. 6 no. 17 ("It's likely that Macron
//     will be re-elected") is not a card; the Not after tab says this in
//     Detail · advanced.
//   - Her lesson's "Il est certain qu'il n'as pas compris la leçon": n'a.
//   - Ex. 6 no. 26's "Jaques" (Jacques) is not used.
//   - Her lesson calls que a "préposition"; the notes don't name it.
//
// THE NOTES are her lesson in English, on the impératif's model: Use (her
// section 4, the uses with her examples), Forms (her three groups), Irregular
// (her ten verbs), Same person (her section B), Not after (her section D).
// Not hers, though a card needs it said:
//   - Forms: her three groups said as one rule (the ils form for je, tu, il
//     and ils; the nous form for nous and vous), which gives all three.
//   - Irregular: the tables of être, avoir, aller, faire, savoir, pouvoir and
//     vouloir (her sheet names them only).
//   - Forms: where me, lui and y go (ex. 1 nos. 1, 5 and 8).
//   - Irregular: pleuvoir and falloir only with il.
//   - Not after: every example (her section D lists the verbs with none),
//     "je suppose que" (ex. 6 no. 11, "I guess"), the contrast with être
//     étonné que, and je ne suis pas sûr que taking the subjunctive.

export const CARDS = [
  // ── The pattern (her tables)
  ["regarder (subjonctif) → nous", "que nous regardions", "G", "forms"],
  ["finir (subjonctif) → je", "que je finisse", "G", "forms"],
  ["prendre (subjonctif) → ils", "qu'ils prennent", "G", "forms"],
  ["prendre (subjonctif) → nous", "que nous prenions", "G", "forms"],
  ["venir (subjonctif) → je", "que je vienne", "G", "forms"],

  // ── Her irregular verbs
  ["être (subjonctif) → tu", "que tu sois", "G", "irregular"],
  ["être (subjonctif) → nous", "que nous soyons", "G", "irregular"],
  ["avoir (subjonctif) → il", "qu'il ait", "G", "irregular"],
  ["aller (subjonctif) → je", "que j'aille", "G", "irregular"],
  ["aller (subjonctif) → nous", "que nous allions", "G", "irregular"],
  ["faire (subjonctif) → vous", "que vous fassiez", "G", "irregular"],
  ["savoir (subjonctif) → nous", "que nous sachions", "G", "irregular"],
  ["pouvoir (subjonctif) → tu", "que tu puisses", "G", "irregular"],
  ["vouloir (subjonctif) → ils", "qu'ils veuillent", "G", "irregular"],

  // ── Il faut que (her ex. 1)
  ["Il doit me donner son adresse → avec il faut que", "Il faut qu'il me donne son adresse", "G", "ilfaut"],
  ["Tu dois faire tes devoirs avant ce soir → avec il faut que", "Il faut que tu fasses tes devoirs avant ce soir", "G", "ilfaut"],
  ["Je dois être là-bas à 10h → avec il faut que", "Il faut que je sois là-bas à 10h / Il faut que je sois là-bas à 10 h", "G", "ilfaut"],
  ["Tu dois y aller maintenant → avec il faut que", "Il faut que tu y ailles maintenant", "G", "ilfaut"],
  ["Tu dois lui répondre → avec il faut que", "Il faut que tu lui répondes", "G", "ilfaut"],
  ["Vous devez sortir par la porte de derrière → avec il faut que", "Il faut que vous sortiez par la porte de derrière", "G", "ilfaut"],

  // ── Wanting (her ex. 2)
  ["prendre → J'aimerais qu'il ___ une douche", "prenne", "G", "want"],
  ["être → Je préfère que vous ___ honnêtes avec moi", "soyez", "G", "want"],
  ["apprendre → Je veux qu'ils ___ leur leçon", "apprennent", "G", "want"],
  ["traduire → Tu veux que je ___ ?", "traduise", "G", "want"],
  ["arrêter → J'aimerais que tu ___ ça", "arrêtes", "G", "want"],

  // ── Feelings (her ex. 3)
  ["être → Je suis content que vous ___ à la maison", "soyez", "G", "feel"],
  ["écouter → C'est très important que vous ___", "écoutiez", "G", "feel"],
  ["fermer → J'ai peur qu'ils ne ___ pas la porte", "ferment", "G", "feel"],
  ["savoir → Il est très content que je le ___", "sache", "G", "feel"],
  ["vouloir → Je suis déçu que tu ne ___ pas m'aider", "veuilles", "G", "feel"],
  ["pouvoir → C'est génial qu'on ___ se voir", "puisse", "G", "feel"],

  // ── Pour que, jusqu'à ce que, à moins que (her ex. 4)
  ["partir → Je pense qu'il va arriver avant que tu ___", "partes / ne partes", "G", "conj"],
  ["dire → Je vais continuer jusqu'à ce qu'il me ___ d'arrêter", "dise", "G", "conj"],
  ["être → J'attendrai ici, à moins qu'il ___ en retard", "soit / ne soit", "G", "conj"],
  ["entrer → Je vais laisser la porte ouverte pour que tu ___", "entres / puisses entrer", "G", "conj"],
  ["comprendre → Je parle lentement pour qu'il ___", "comprenne", "G", "conj"],

  // ── Avant que or avant de (her ex. 5), both ways round
  ["Je dois arriver avant que la réunion commence", "I need to arrive before the meeting starts / I have to arrive before the meeting starts / I need to get there before the meeting starts / I have to get there before the meeting starts / I need to arrive before the meeting begins / I must arrive before the meeting starts", "E", "avant"],
  ["J'aimerais chanter une chanson au karaoké", "I'd like to sing a song at karaoke / I would like to sing a song at karaoke / I'd like to sing a song at the karaoke / I would like to sing a song at the karaoke (with aimer)", "E", "avant"],
  ["Je vais te dire ça avant d'oublier", "I'll tell you that before I forget / I will tell you that before I forget / I'll tell you before I forget / I'm going to tell you that before I forget (tu)", "E", "avant"],
  ["Il veut me voir avant que je commence à travailler", "He wants to see me before I start working / He wants to see me before I start work / He wants to see me before I begin working", "E", "avant"],

  // ── Subjunctive or not (her ex. 6)
  ["être → Je suis sûr qu'ils ___ là demain", "seront / vont être", "G", "choose"],
  ["ne pas être → Je suppose que le médecin ___ encore là", "n'est pas / ne sera pas / n'était pas", "G", "choose"],
  ["être → Je suis étonné que tu ne ___ pas fatigué", "sois", "G", "choose"],
  ["devoir → Mon médecin m'a dit que je ___ manger plus de légumes", "devrais / devais / dois", "G", "choose"],
  ["commander → Le serveur ne veut pas que je ___ la salade", "commande", "G", "choose"],
  ["ne plus pleuvoir → Je vais rester jusqu'à ce qu'il ___", "ne pleuve plus", "G", "choose"],

  // ── Her sentences, both ways round (ex. 2, 3 and 6, and her lesson)
  ["Il faut que vous preniez le métro", "You need to take the metro / You have to take the metro / You need to take the subway / You have to take the subway / You must take the metro / You've got to take the metro (vous, with il faut que)", "E", "sentences"],
  ["Ils veulent que je parle à leur conférence", "They want me to speak at their conference / They want me to talk at their conference (ils)", "E", "sentences"],
  ["Qu'est-ce que tu veux que je fasse ?", "What do you want me to do? (tu, with qu'est-ce que)", "E", "sentences"],
  ["J'ai peur qu'ils soient en retard", "I'm afraid they're going to be late / I'm afraid they'll be late / I'm afraid they will be late / I'm worried they'll be late / I'm afraid they're late / I'm scared they'll be late (with avoir peur)", "E", "sentences"],
  ["C'est génial qu'elle vienne t'aider", "It's great that she's coming to help you / It's great she's coming to help you (tu)", "E", "sentences"],
  ["Je suis désolé que tu aies des problèmes", "I'm sorry you're having problems / I'm sorry that you're having problems / I'm sorry you have problems / I'm sorry you've got problems (tu, said by a man)", "E", "sentences"],
];

export const NOTES = [
  {
    tab: "Use",
    h: "1 · What the subjunctive is for",
    blocks: [
      { t: "lead", v: "The subjunctive is the verb form used after que when the sentence is about what someone wants, needs, feels or doubts, not about what is certain: *il faut que nous parlions*, \"we need to talk\"." },
      { t: "note", v: "After wanting and feeling, it comes after que only when the person after que is not the person before it: *je veux que tu viennes*, \"I want you to come\"." },
      { t: "sub", v: "Wanting, needing and refusing" },
      { t: "pairs", head: ["French", "English"], v: [
        ["Il veut que tu sois là", "He wants you to be there"],
        ["J'aimerais qu'ils partent", "I'd like them to leave"],
        ["Tu as envie que nous allions au cinéma ?", "Do you want us to go to the cinema?"],
        ["Je lui ai proposé qu'on aille au parc ensemble", "I suggested to him that we go to the park together"],
        ["Je refuse qu'il vienne", "I won't let him come"],
        ["J'ordonne que vous sortiez", "I order you to leave"],
      ]},
      { t: "sub", v: "Feelings" },
      { t: "note", v: "After être and a word for a feeling, such as content, triste or inquiet, and after avoir peur que: *je suis heureux que tu viennes*, \"I'm happy you're coming\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["C'est génial que vous profitiez bien de vos vacances", "It's great that you're making the most of your holiday"],
        ["Je suis inquiet qu'elle ne rentre pas", "I'm worried she isn't coming home"],
        ["J'ai peur qu'ils soient en retard", "I'm afraid they'll be late"],
      ]},
      { t: "sub", v: "Doubt" },
      { t: "pairs", head: ["French", "English"], v: [
        ["Je doute qu'il soit à l'heure", "I doubt he'll be on time"],
        ["Il est peu probable que vous soyez accepté", "You're unlikely to be accepted"],
      ]},
      { t: "sub", v: "After pour que, avant que and others" },
      { t: "note", v: "Pour que, avant que, jusqu'à ce que, à moins que, bien que, sans que and à condition que always take the subjunctive: *je parle lentement pour qu'il comprenne*, \"I speak slowly so he understands\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Martin range la maison avant qu'elles arrivent", "Martin tidies the house before they arrive"],
        ["Je vais rester jusqu'à ce qu'il parte", "I'll stay until he leaves"],
        ["On part maintenant, à moins que tu veuilles attendre", "We're leaving now, unless you want to wait"],
      ]},
    ],
  },
  {
    tab: "Forms",
    h: "2 · How to make it",
    blocks: [
      { t: "lead", v: "Take the ils form of the present, drop the -ent and add -e, -es, -e or -ent: *ils prennent → que je prenne*, \"they take → that I take\"." },
      { t: "note", v: "For nous and vous, take the nous form of the present, drop the -ons and add -ions or -iez: *nous prenons → que nous prenions*, \"that we take\"." },
      { t: "table", caption: "Three verbs", bold: 0,
        cols: ["regarder", "finir", "prendre"],
        rows: [
          ["que je regarde", "que je finisse", "que je prenne"],
          ["que tu regardes", "que tu finisses", "que tu prennes"],
          ["qu'il regarde", "qu'il finisse", "qu'il prenne"],
          ["que nous regardions", "que nous finissions", "que nous prenions"],
          ["que vous regardiez", "que vous finissiez", "que vous preniez"],
          ["qu'ils regardent", "qu'ils finissent", "qu'ils prennent"],
        ] },
      { t: "note", v: "So for a regular verb ending in -er, je, tu, il and ils look like the present, and nous and vous look like the imparfait: *que nous regardions*, \"that we watch\"." },
      { t: "forms", label: "Examples", v: ["mettre → que je mette", "dire → que je dise", "partir → que je parte", "sortir → que je sorte", "attendre → que j'attende", "répondre → que je réponde", "traduire → que je traduise"] },
      { t: "sub", v: "Verbs like venir" },
      { t: "note", v: "When the ils and nous forms are different, so are the subjunctive's: *ils viennent → que je vienne*, \"that I come\", but *nous venons → que nous venions*, \"that we come\"." },
      { t: "note", v: "Learn each form with its que, as in *que je vienne*: that is how you meet it." },
      { t: "sub", v: "Me, lui and y" },
      { t: "note", v: "A word like me, lui or y goes between the person and the verb: *il faut que tu lui répondes*, \"you need to answer him\"; *il faut que tu y ailles*, \"you need to go there\"." },
    ],
  },
  {
    tab: "Irregular",
    h: "3 · Verbs with forms of their own",
    blocks: [
      { t: "lead", v: "Ten everyday verbs have forms of their own: être, avoir, aller, faire, savoir, pouvoir, vouloir, pleuvoir, valoir and falloir. *Il faut que tu sois là*, \"you need to be there\"." },
      { t: "table", caption: "Être and avoir", bold: 0,
        cols: ["être", "avoir"],
        rows: [
          ["que je sois", "que j'aie"],
          ["que tu sois", "que tu aies"],
          ["qu'il soit", "qu'il ait"],
          ["que nous soyons", "que nous ayons"],
          ["que vous soyez", "que vous ayez"],
          ["qu'ils soient", "qu'ils aient"],
        ] },
      { t: "table", caption: "Aller and faire", bold: 0,
        cols: ["aller", "faire"],
        rows: [
          ["que j'aille", "que je fasse"],
          ["que tu ailles", "que tu fasses"],
          ["qu'il aille", "qu'il fasse"],
          ["que nous allions", "que nous fassions"],
          ["que vous alliez", "que vous fassiez"],
          ["qu'ils aillent", "qu'ils fassent"],
        ] },
      { t: "table", caption: "Savoir, pouvoir and vouloir", bold: 0,
        cols: ["savoir", "pouvoir", "vouloir"],
        rows: [
          ["que je sache", "que je puisse", "que je veuille"],
          ["que tu saches", "que tu puisses", "que tu veuilles"],
          ["qu'il sache", "qu'il puisse", "qu'il veuille"],
          ["que nous sachions", "que nous puissions", "que nous voulions"],
          ["que vous sachiez", "que vous puissiez", "que vous vouliez"],
          ["qu'ils sachent", "qu'ils puissent", "qu'ils veuillent"],
        ] },
      { t: "note", v: "Pleuvoir and falloir are used only with il: *qu'il pleuve*, \"that it rains\", and *qu'il faille*, \"that it's necessary\"." },
    ],
  },
  {
    tab: "Same person",
    h: "4 · When it's the same person",
    blocks: [
      { t: "lead", v: "When the person is the same on both sides, use the infinitive, with no que: *je veux finir ça aujourd'hui*, \"I want to finish this today\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Je veux que tu finisses ça aujourd'hui", "I want you to finish this today"],
        ["Il aime danser", "He likes dancing"],
        ["Il aime que tu danses avec lui", "He likes you dancing with him"],
        ["Je suis content de pouvoir me reposer", "I'm glad I can rest"],
        ["Je suis content que Nathan puisse se reposer", "I'm glad Nathan can rest"],
        ["J'attends d'avoir plus de temps pour faire ça", "I'm waiting until I have more time to do that"],
        ["J'attends qu'il ait plus de temps pour lui demander", "I'm waiting until he has more time to ask him"],
      ]},
      { t: "note", v: "The trap: *je veux que je parte* is wrong. With the same person, say *je veux partir*, \"I want to leave\"." },
      { t: "sub", v: "avant de or avant que" },
      { t: "note", v: "Avant de takes the infinitive, and avant que takes the subjunctive: *je vais te dire ça avant d'oublier*, \"I'll tell you before I forget\"; *je dois arriver avant que la réunion commence*, \"I have to arrive before the meeting starts\"." },
      { t: "note", v: "Pour takes the infinitive, and pour que the subjunctive: *je pars maintenant pour arriver à l'heure*, \"I'm leaving now to get there on time\"; *je le laisse partir maintenant pour qu'il arrive à l'heure*, \"I'm letting him go now so he gets there on time\"." },
    ],
  },
  {
    tab: "Not after",
    h: "5 · When not to use it",
    blocks: [
      { t: "lead", v: "Verbs of saying, thinking and hoping take their ordinary forms, not the subjunctive: *j'espère que tu vas bien*, \"I hope you're well\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Il m'a dit qu'il était fatigué", "He told me he was tired"],
        ["Je pense qu'elle a raison", "I think she's right"],
        ["J'imagine qu'il est déjà parti", "I imagine he's already left"],
        ["Je suppose que le médecin n'est pas encore là", "I guess the doctor isn't here yet"],
        ["Il travaille alors que je me repose", "He's working while I rest"],
      ]},
      { t: "note", v: "After a verb of saying in the past, the verb can be in the conditional: *mon médecin m'a dit que je devrais manger plus de légumes*, \"my doctor told me I should eat more vegetables\"." },
      { t: "note", v: "Sûr and certain take the ordinary form: *je suis sûr qu'elle va venir*, \"I'm sure she's going to come\". With ne … pas they take the subjunctive: *je ne suis pas sûr qu'il vienne*, \"I'm not sure he's coming\"." },
      { t: "note", v: "Words for feelings take the subjunctive: *je suis étonné que tu ne sois pas fatigué*, \"I'm surprised you're not tired\"." },
      { t: "sub", v: "Detail · advanced" },
      { t: "note", v: "After je ne pense pas que and après que, the subjunctive and the ordinary form are both used: *je ne pense pas que ce soit une bonne idée*, \"I don't think it's a good idea\"." },
      { t: "note", v: "Il est peu probable que takes the subjunctive, but il est probable que takes the ordinary form: *il est probable qu'il viendra*, \"he'll probably come\"." },
    ],
  },
];

export const LESSON = {
  id: "subjonctif",
  title: "Le subjonctif présent",
  subtitle: "Que je sois, que tu ailles: after wanting, feeling, doubting, and pour que",
  source: "LFL METHOD by Laura Caufour",
  cards: CARDS,
  notes: NOTES,
  // The order a student meets NEW cards in (reviews are FSRS's), as the
  // notes tabs run: the forms, then her exercises in her order, then her
  // sentences.
  teachingOrder: ["forms", "irregular", "ilfaut", "want", "feel", "conj", "avant", "choose", "sentences"],
  // The line shown above a grammar card saying what to type (see
  // src/lib/cardInstruction.js). The drills get theirs from their shape
  // ("Present subjunctive, with que je"). The choose gaps share a line, so
  // it never says which of them takes the subjunctive.
  instructions: {
    ilfaut: "Say it again starting with il faut que",
    want: "Fill the gap with the verb given, in the present subjunctive",
    feel: "Fill the gap with the verb given, in the present subjunctive",
    conj: "Fill the gap with the verb given, in the present subjunctive",
    choose: "Fill the gap with the verb given, in the form that fits",
  },
};

export default LESSON;
