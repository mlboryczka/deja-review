// Les démonstratifs — built 2026-11-15 from Laura Caufour's LFL METHOD
// sheets in Google Drive (Français / Les démonstratifs): "Les démonstratifs"
// and "EXERCICES - Les démonstratifs" (file ids in
// .claude/topic-lessons-draft/demonstratifs/sources.md). One of her topic
// lessons, in no stage (owner, 2026-11-13). She has no answer key for it:
// every answer here was written for the app and checked.
//
// Each entry is [front, back, category, section].
//
// Card shapes:
//   "ce, cet, cette ou ces → J'aime ___ pull" / "ce"                    pick the word
//   "ça, ce ou c' → ___ serait mieux comme ça" / "ce"
//   "celui, celle, ceux ou celles → … ___ de ta sœur" / "celle"
//   "celui-là, celle-là, ceux-là ou celles-là → … ___ est mieux" / "celle-là / celle-ci"
//   "Je suis né cette année-là" / "I was born that year …"             both ways round
//
// The choices are arrow cards, marked exactly: on a phrase card "ce" and
// "ces", or "celle" and "celles", are one letter apart, and typo tolerance
// would let either through; exact marking also holds the hyphen of
// celui-là. Each front names the words to choose from, so the line above the
// card can be the same for all and give nothing away.
//
// WHAT WAS SAMPLED, AND WHAT WAS LEFT:
//   - Ex. 2 (ce, cette, ces or ce …-là): nine gap cards for this + noun,
//     from her lesson's table, ex. 1 and ex. 2, among them three cet
//     (ordinateur, exercice, été).
//     For that + noun, three exact choice cards (cette année or cette
//     année-là, ce jour or ce jour-là), because typo tolerance on a phrase
//     card lets "Je suis né cette année" pass for "… cette année-là". French
//     alone can't say whether "cette année" means this year or that year, so
//     these three sentences are written for the app around hers (ex. 2 nos.
//     8 and 12, her lesson's "Il est parti ce jour-là"), with a date or a
//     tense that decides it. Then ex. 2 nos. 2 and 12 and ex. 1 nos. 15 and
//     17 as phrase cards with -là: deliberate repeats of the point, the
//     other way round. Ex. 2 no. 6, "That bag is
//     bigger", was left: in speech, pointing, "ce sac" says it too.
//   - Ex. 3 (ça, ce or c'): eight gap cards from ex. 3 and her lesson's
//     remark, among them "Ça a été difficile" and "Ça va être facile", where
//     ça stays though être follows. Every ça answer also accepts cela. Her
//     "Ce serait mieux comme ça" is in the notes, not a card: "Ça serait"
//     is common in speech, so a teacher would pass it.
//   - Ex. 5 (celui and its forms + qui, que, de): eight gap cards, five from
//     ex. 5, one from her lesson (celle de Jess), two from ex. 1 (nos. 7 and
//     12). Ex. 1 no. 7 accepts ceux and celles, since nothing in the
//     sentence says who.
//   - Ex. 4 (celui-là and its forms): six gap cards, four from ex. 4 and two
//     from ex. 1 (nos. 4 and 8); each also accepts the -ci form, which her
//     advanced remark says is right but rarer, and the horses card accepts
//     ceux-là, since "regarde ceux-là" fits the plural too.
//   - Ex. 1 (translate into English): five of her sentences as phrase cards,
//     none repeating a gap card.
//   - Ex. 6 mixes ex. 1 to 5 again; nothing new to sample.
//   - Left out: ex. 1 no. 11 ("Cela dit, …"), whose short comma piece would
//     let "Cela dit" alone pass as the whole sentence; ex. 1 no. 18 ("Celles
//     qui veulent participer"), where ceux fits the gap as well as celles;
//     ex. 1 no. 14 and ex. 5 nos. 4, 5, 7, 8, 10, 11 and 12, whose point a
//     card already tests.
//   - The phrase cards' English goes beyond her sheet where common English
//     says it another way: "Whoever stole my pen", "the girl in the red
//     coat", "this one is my favourite".
//
// DEPARTURES FROM HER SHEETS:
//   - Her table gives ce, cette, ces only. Ex. 2 nos. 4, 9 and 10 (été,
//     computer, exercise) need cet, so the notes give it: "cet before a
//     masculine word starting with a vowel or h". Not hers.
//   - Ex. 5 no. 6: "better that the ones": than. Ex. 5 no. 10 "go this
//     restaurant": go to (ex. 6 no. 22 has it). Neither is a card.
//   - Her advanced remark, "dans les grande majorité": la grande majorité.
//
// THE NOTES are her lesson in English: Use (her table, this + noun, that +
// noun), Ça (ça, cela, and her remark on ce before être), Celui (the
// one(s) + qui, que, de) and Celui-là (this one, that one), with her
// advanced remark on ceci and celui-ci under Detail · advanced. Not hers,
// though a card needs it said:
//   - Use: cet, as above.
//   - Use: "For a day or a year in a past you're telling about, add -là",
//     for the three choice cards.
//   - Ça: "When another verb comes before être, ça stays", from her own
//     examples "Ça a été difficile" and "Ça va être super"; "ne doesn't
//     count"; and "ça serait" in speech.
//   - Celui: "English says my sister's; French says celle de ma sœur", from
//     ex. 5 no. 2.
//   - Celui: the table of which form goes with which noun is hers; the
//     sentence "it takes the form of the noun it stands for" is not.

export const CARDS = [
  // ── This + noun: ce, cet, cette, ces (her table, ex. 1 and 2)
  ["ce, cet, cette ou ces → J'aime ___ pull", "ce", "G", "determiners"],
  ["ce, cet, cette ou ces → Je connais ___ librairie", "cette", "G", "determiners"],
  ["ce, cet, cette ou ces → Tu aimes ___ chaussures ?", "ces", "G", "determiners"],
  ["ce, cet, cette ou ces → Je ne sais pas vraiment quoi penser de ___ nouveau projet", "ce", "G", "determiners"],
  ["ce, cet, cette ou ces → ___ situation commence vraiment à devenir compliquée", "cette", "G", "determiners"],
  ["ce, cet, cette ou ces → ___ café est beaucoup trop froid pour moi", "ce", "G", "determiners"],
  ["ce, cet, cette ou ces → ___ ordinateur est cassé", "cet", "G", "determiners"],
  ["ce, cet, cette ou ces → Tu as fait ___ exercice ou ces exercices ?", "cet", "G", "determiners"],
  ["ce, cet, cette ou ces → Je n'oublierai jamais ___ été-là", "cet", "G", "determiners"],

  // ── That + noun: ce …-là (her ex. 2). Exact cards first: typo tolerance
  // on a phrase card lets "ce jour" pass for "ce jour-là".
  ["cette année ou cette année-là → En 2015, j'habitais à Londres. ___, j'ai travaillé chez L'Oréal", "cette année-là", "G", "la"],
  ["cette année ou cette année-là → ___, je travaille chez L'Oréal", "cette année", "G", "la"],
  ["ce jour ou ce jour-là → C'était le 3 mai. Il est parti ___ et je ne l'ai jamais revu", "ce jour-là", "G", "la"],
  ["J'étais vraiment épuisé ce jour-là", "I was really exhausted that day / I was so exhausted that day / I was really worn out that day (said by a man, with -là)", "E", "lasentences"],
  ["Je suis né cette année-là", "I was born that year (said by a man, with -là)", "E", "lasentences"],
  ["On n'est pas partis en vacances cette année-là", "We didn't go on holiday that year / We didn't go on vacation that year / We did not go on holiday that year / We didn't go away on holiday that year / We didn't go away on vacation that year (with on and -là)", "E", "lasentences"],
  ["Je n'aime pas trop ces gens-là, ils passent leur temps à se plaindre", "I don't really like those people, they spend their time complaining / I don't really like those people, they spend all their time complaining / I don't like those people much, they spend their time complaining / I don't really like those people, they're always complaining (with -là)", "E", "lasentences"],

  // ── Ça, ce or c' (her ex. 3 and her lesson's remark)
  ["ça, ce ou c' → Tu as vu ___ ?", "ça / cela", "G", "ca"],
  ["ça, ce ou c' → ___ est vraiment génial", "c'", "G", "ca"],
  ["ça, ce ou c' → ___ n'est pas ici", "ce", "G", "ca"],
  ["ça, ce ou c' → ___ était intéressant", "c'", "G", "ca"],
  ["ça, ce ou c' → ___ est devenu plus facile", "c'", "G", "ca"],
  ["ça, ce ou c' → ___ a été difficile", "ça / cela", "G", "ca"],
  ["ça, ce ou c' → ___ va être facile", "ça / cela", "G", "ca"],
  ["ça, ce ou c' → ___ me rappelle ma mère", "ça / cela", "G", "ca"],

  // ── The one(s): celui, celle, ceux, celles (her lesson, ex. 1 and 5)
  ["celui, celle, ceux ou celles → C'est ta chemise ? Non, c'est ___ de Jess", "celle", "G", "celui"],
  ["celui, celle, ceux ou celles → Regarde ce livre, c'est ___ que j'ai lu l'année dernière", "celui", "G", "celui"],
  ["celui, celle, ceux ou celles → J'aime bien ta voiture mais je préfère ___ de ta sœur", "celle", "G", "celui"],
  ["celui, celle, ceux ou celles → Ces légumes sont meilleurs que ___ du marché", "ceux", "G", "celui"],
  ["celui, celle, ceux ou celles → Ses nouvelles chansons sont meilleures que ___ qu'elle a écrites l'année dernière", "celles", "G", "celui"],
  ["celui, celle, ceux ou celles → Ton texte est plus intéressant que ___ de Melissa", "celui", "G", "celui"],
  ["celui, celle, ceux ou celles → Tu vas prendre quel chemin ? Moi, je vais prendre ___ qui passe par Carcassonne", "celui", "G", "celui"],
  ["celui, celle, ceux ou celles → ___ qui n'ont pas encore rendu leur dossier doivent le faire avant demain", "ceux / celles", "G", "celui"],

  // ── This one, that one: celui-là and its forms (her ex. 4), with the -ci form she calls rarer
  ["celui-là, celle-là, ceux-là ou celles-là → J'aime bien ta montre mais ___ est mieux", "celle-là / celle-ci", "G", "celuila"],
  ["celui-là, celle-là, ceux-là ou celles-là → Ces lunettes sont plus jolies mais ___ sont moins chères", "celles-là / celles-ci", "G", "celuila"],
  ["celui-là, celle-là, ceux-là ou celles-là → Ces biscuits sont trop sucrés, tu devrais acheter ___", "ceux-là / ceux-ci", "G", "celuila"],
  ["celui-là, celle-là, ceux-là ou celles-là → Les chevaux sont tellement beaux, regarde ___ !", "celui-là / celui-ci / ceux-là / ceux-ci", "G", "celuila"],
  ["celui-là, celle-là, ceux-là ou celles-là → Entre tous ces gâteaux, je vais choisir ___, il a l'air délicieux", "celui-là / celui-ci", "G", "celuila"],
  ["celui-là, celle-là, ceux-là ou celles-là → J'aime beaucoup ces chaussures, mais je préfère nettement ___", "celles-là / celles-ci", "G", "celuila"],

  // ── Her ex. 1 sentences, both ways round
  ["Est-ce que tu pourrais me passer ça ? C'est un peu trop loin pour moi", "Could you pass me that? It's a bit too far for me / Can you pass me that? It's a bit too far for me / Could you pass me that? It's a little too far for me / Could you hand me that? It's a bit too far for me (tu)", "E", "phrases"],
  ["Ça ne me dérange pas du tout de t'aider pour ton déménagement", "It doesn't bother me at all to help you with your move / I don't mind helping you with your move at all / I don't mind at all helping you with your move / It's no trouble at all to help you with your move / I don't mind helping you move at all (tu)", "E", "phrases"],
  ["Celle qui porte un manteau rouge là-bas, c'est ma cousine", "The one wearing a red coat over there is my cousin / The one who's wearing a red coat over there is my cousin / The girl in the red coat over there is my cousin / The woman in the red coat over there is my cousin / The one in the red coat over there is my cousin (with celle)", "E", "phrases"],
  ["Celui qui a volé mon stylo a intérêt à me le rendre rapidement", "Whoever stole my pen had better give it back to me quickly / The one who stole my pen had better give it back to me quickly / Whoever stole my pen had better give it back quickly / Whoever stole my pen better give it back to me fast / The person who stole my pen had better give it back to me quickly (with celui)", "E", "phrases"],
  ["De tous mes souvenirs d'enfance, celui-là est mon préféré", "Of all my childhood memories, that one is my favorite / Of all my childhood memories, that one is my favourite / Of all my childhood memories, this one is my favorite / Of all my childhood memories, this one is my favourite / Of all my childhood memories, that's my favorite / Of all my childhood memories, that's my favourite", "E", "phrases"],
];

export const NOTES = [
  {
    tab: "Use",
    h: "1 · This and that before a noun",
    blocks: [
      { t: "lead", v: "Ce, cet, cette and ces mean \"this\" or \"these\" before a noun, and take the form of the noun: *j'aime ce pull*, \"I like this sweater\"." },
      { t: "table", caption: "This, these",
        cols: ["Noun", "French", "English"],
        rows: [
          ["masculine", "ce pull", "this sweater"],
          ["masculine, vowel or h", "cet ordinateur", "this computer"],
          ["feminine", "cette librairie", "this bookshop"],
          ["plural", "ces chaussures", "these shoes"],
        ] },
      { t: "note", v: "Cet is for a masculine word starting with a vowel, and most words starting with h: *cet exercice*, \"this exercise\"; *cet hôtel*, \"this hotel\"; but *ce héros*, \"this hero\". A feminine word keeps cette: *cette année*, \"this year\"." },
      { t: "sub", v: "That, those: -là after the noun" },
      { t: "note", v: "For \"that\" or \"those\", put -là after the noun: *ce jour-là*, \"that day\"; *cette année-là*, \"that year\"; *ces chemises-là*, \"those shirts\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Il est parti ce jour-là", "He left that day"],
        ["On s'est mariés cette année-là", "We got married that year"],
        ["Je préfère ces chemises-là", "I prefer those shirts"],
      ]},
      { t: "note", v: "For a day or a year in a past you're telling about, add -là: *en 2015, j'habitais à Londres. Cette année-là, j'ai travaillé chez L'Oréal*, \"in 2015 I lived in London. That year I worked at L'Oréal\". *Cette année* on its own is \"this year\": *cette année, je travaille chez L'Oréal*, \"this year I'm working at L'Oréal\"." },
    ],
  },
  {
    tab: "Ça",
    h: "2 · Ça: this or that on its own",
    blocks: [
      { t: "lead", v: "On its own, with no noun after it, \"this\" or \"that\" is ça: *tu as vu ça ?*, \"did you see that?\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Tu as vu ça ?", "Did you see that?"],
        ["J'ai acheté ça", "I bought that"],
        ["Ça me rappelle ma mère", "This reminds me of my mom"],
      ]},
      { t: "note", v: "Cela means the same as ça and is more formal: *je n'aime pas cela*, \"I don't like that\"." },
      { t: "sub", v: "Ce or c' straight before être" },
      { t: "note", v: "The trap: right before a form of être, ça becomes ce, or c' before a vowel: *c'est intéressant*, \"it's interesting\"; *ce serait mieux comme ça*, \"it would be better like that\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["C'est intéressant", "It's interesting"],
        ["C'était intéressant", "It was interesting"],
        ["Ce n'est pas ici", "It's not here"],
        ["Ce serait mieux comme ça", "It would be better like that"],
        ["C'est devenu plus facile", "It's become easier"],
      ]},
      { t: "note", v: "When another verb comes before être, ça stays: *ça a été difficile*, \"it was difficult\"; *ça va être super*, \"it's going to be great\". Ne doesn't count: *ce n'est pas ici*, \"it's not here\"." },
      { t: "note", v: "In speech you'll also hear *ça serait*, \"that would be\"." },
    ],
  },
  {
    tab: "Celui",
    h: "3 · The one, the ones: celui, celle, ceux, celles",
    blocks: [
      { t: "lead", v: "\"The one\" or \"the ones\" is celui, celle, ceux or celles, in the form of the noun it stands for, followed by qui, que or de: *c'est celui que je préfère*, \"it's the one I prefer\"." },
      { t: "table", caption: "The one, the ones",
        cols: ["Stands for", "French", "English"],
        rows: [
          ["masculine", "celui", "the one"],
          ["feminine", "celle", "the one"],
          ["masculine plural", "ceux", "the ones"],
          ["feminine plural", "celles", "the ones"],
        ] },
      { t: "pairs", head: ["French", "English"], v: [
        ["C'est celui que je préfère", "It's the one I prefer"],
        ["C'est ta chemise ? Non, c'est celle de Jess", "Is it your shirt? No, it's Jess's"],
        ["Tu aimes ceux qui sont en or ?", "Do you like the ones made of gold?"],
        ["J'ai pris celles qui étaient plus chères", "I took the ones that were more expensive"],
      ]},
      { t: "note", v: "English says \"my sister's\"; French says celle de ma sœur, \"the one of my sister\": *j'aime ta voiture mais je préfère celle de ta sœur*, \"I like your car but I prefer your sister's\"." },
    ],
  },
  {
    tab: "Celui-là",
    h: "4 · This one, that one: celui-là",
    blocks: [
      { t: "lead", v: "\"This one\" or \"that one\" is celui-là, celle-là, ceux-là or celles-là, in the form of the noun it stands for: *j'adore celui-là*, \"I love that one\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["J'adore celui-là", "I love that one"],
        ["Tu préfères celle-là ?", "Do you prefer that one?"],
        ["Ceux-là sont moins chers", "Those ones are cheaper"],
        ["Tu as vu celles-là ?", "Have you seen those ones?"],
      ]},
      { t: "note", v: "Celui-là is used for both \"this one\" and \"that one\": *j'aime bien ta montre mais celle-là est mieux*, \"I like your watch but that one is better\"." },
      { t: "sub", v: "Detail · advanced" },
      { t: "note", v: "Strictly, \"this one\" is celui-ci, celle-ci, ceux-ci or celles-ci, and \"this\" on its own is ceci: *prends celui-ci*, \"take this one\". You'll meet them in writing, but in speech celui-là and ça cover both." },
    ],
  },
];

export const LESSON = {
  id: "demonstratifs",
  title: "Les démonstratifs",
  subtitle: "This, that, the one: ce, cette, ces, ça, celui and celui-là",
  source: "LFL METHOD by Laura Caufour",
  cards: CARDS,
  notes: NOTES,
  // The order a student meets NEW cards in (reviews are FSRS's), as the
  // notes tabs run, her sentences last.
  teachingOrder: ["determiners", "la", "lasentences", "ca", "celui", "celuila", "phrases"],
  // The line shown above a grammar card saying what to type (see
  // src/lib/cardInstruction.js). The same line for every choice, so it
  // never says which one fits.
  instructions: {
    determiners: "Fill the gap with one of the words given",
    la: "Fill the gap with one of the words given",
    ca: "Fill the gap with one of the words given",
    celui: "Fill the gap with one of the words given",
    celuila: "Fill the gap with one of the words given",
  },
};

export default LESSON;
