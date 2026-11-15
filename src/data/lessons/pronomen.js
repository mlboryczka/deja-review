// Le pronom EN — built 2026-11-15 from Laura Caufour's LFL METHOD sheets in
// Google Drive (Français / Le pronom EN): "Le pronom EN" and "EXERCICES - Le
// pronom EN" (file ids in .claude/topic-lessons-draft/pronomen/sources.md).
// One of her topic lessons, in no stage (owner, 2026-11-13). She has no
// answer key for it: every answer here was written for the app and checked.
//
// Each entry is [front, back, category, section].
//
// Card shapes:
//   "Je parle souvent de mon voyage au Mexique → avec en" / "J'en parle souvent"
//   "Tu as besoin de te reposer ? → Oui, …" / "Oui, j'en ai besoin / J'en ai besoin"
//   "Il y a des plages là-bas ? → beaucoup" / "Oui, il y en a beaucoup / …"
//   "Je m'en souviens" / "I remember it / I remember (with en)"           both ways round
//
// Every grammar card is an arrow card, marked exactly: typo tolerance would
// pass "Je n'en ai pas un", "J'ai en besoin", "Je m'en vais débarrasser".
//
// OVERLAP: Leçon 20 has y and "je m'en vais" as an answer to "je pars";
// Leçon 17 has amounts with de; Les pronoms has en among the other pronouns.
// No front here is used by another lesson.
//
// WHAT WAS SAMPLED, AND WHAT WAS LEFT:
//   - Ex. 3 (replace a group with de by en): eight, among them a verb with se
//     in the passé composé (m'en suis), two verbs (vais m'en débarrasser)
//     and a second pronoun (m'en ont parlé); one adjective with de from her
//     lesson (fier de).
//   - Ex. 4 and 5 (answer yes, answer no): four yes, three no.
//   - Ex. 6 (replace an amount by en): five, one of each kind in her table
//     (a number, beaucoup, une, du, assez).
//   - Ex. 7 (answer with the amount given): five; ex. 8 (answer no): three,
//     among them "un lion", whose answer has no un.
//   - Her "phrases à apprendre par cœur" (ten) and seven of her table of
//     expressions, as phrase cards. "Il s'en fiche" is in the notes only:
//     her phrase "Il s'en fout !" says the same.
//   - Ex. 1 and 2 ask for spoken translation and for the group en stands
//     for, which can't be marked; ex. 9 and 10 (translate) repeat ex. 6 to 8
//     in English. Left out, with the audio exercises.
//   - Her lesson's pronunciation part (en has no n sound, and always takes
//     liaison) is not a card and not in the notes: it helps no typed answer.
//   - En raz-le-bol: left out; J'en ai marre says the same and is a card.
//
// DEPARTURES FROM HER SHEETS:
//   - Her phrase "Combien tu en a pris ?": as.
//   - Her ex. 7 no. 3, "Combien d'exercices tu as fait ?": faits, since
//     combien d'exercices comes before the verb. The answer, "J'en ai fait
//     5", has no -s: en never makes the participle change.
//   - Her expression "En avoir raz-le-bol": ras-le-bol. Not a card.
//   - Her expression "En être quelque part": the notes give it as "en être
//     (où)", the way it's said.
//   - Her list of verbs with de is in the notes whole: it is the rule's
//     reach, not words to learn.
//   - "La préposition « de » est généralement induite par un verbe à un
//     verbe": by a verb. Not quoted.
//
// THE NOTES are her lesson in English: Use (her synthesis: what en stands
// for, where it goes), After de (her part 2, verbs and adjectives with de,
// and de + a person under Detail · advanced), Amounts (her part 3 and her
// reminder on the negative) and Expressions (her part 4). Not hers, though
// a card needs it said:
//   - Use: "with two verbs, en goes before the second" (Je vais m'en
//     débarrasser, Je vais m'en occuper), and "with avoir or être + past
//     participle, before avoir or être" (her examples show it: Il en a
//     acheté, Il m'en a parlé).
//   - Use: "en never makes the past participle change".
//   - Amounts: "ne goes before en and any pronoun with it, and pas after
//     the verb", for the answer-no cards.

export const CARDS = [
  // ── En for de + a thing, an idea or an action (her ex. 3 and her lesson)
  ["Je parle souvent de mon voyage au Mexique → avec en", "J'en parle souvent", "G", "de"],
  ["Tu as besoin des écouteurs ? → avec en", "Tu en as besoin ?", "G", "de"],
  ["Tu as déjà fait du surf ? → avec en", "Tu en as déjà fait ?", "G", "de"],
  ["Elle joue de la guitare depuis 10 ans → avec en", "Elle en joue depuis 10 ans / Elle en joue depuis dix ans", "G", "de"],
  ["Qu'est-ce que ton chef a pensé de ton idée ? → avec en", "Qu'est-ce que ton chef en a pensé ? / Qu'est-ce qu'il en a pensé ?", "G", "de"],
  ["Je me suis débarrassé de mes vieux vêtements → avec en", "Je m'en suis débarrassé", "G", "de"],
  ["Je vais me débarrasser de mes chaussures → avec en", "Je vais m'en débarrasser", "G", "de"],
  ["Mes amis m'ont parlé de ce restaurant → avec en", "Mes amis m'en ont parlé / Ils m'en ont parlé", "G", "de"],
  ["Il est très fier de sa carrière → avec en", "Il en est très fier", "G", "de"],

  // ── Answer yes (her ex. 4)
  ["Tu as besoin de te reposer ? → Oui, …", "Oui, j'en ai besoin / J'en ai besoin", "G", "yes"],
  ["Tu lui as parlé de ton problème ? → Oui, …", "Oui, je lui en ai parlé / Je lui en ai parlé", "G", "yes"],
  ["Tu vas t'occuper des cadeaux demain ? → Oui, …", "Oui, je vais m'en occuper demain / Je vais m'en occuper demain / Oui, je vais m'en occuper / Je vais m'en occuper", "G", "yes"],
  ["Tu as envie de fraises maintenant ? → Oui, …", "Oui, j'en ai envie maintenant / J'en ai envie maintenant / Oui, j'en ai envie / J'en ai envie", "G", "yes"],

  // ── Answer no (her ex. 5)
  ["Vous avez besoin du couteau ? → Non, …", "Non, je n'en ai pas besoin / Non, nous n'en avons pas besoin / Non, on n'en a pas besoin / Je n'en ai pas besoin / Nous n'en avons pas besoin / On n'en a pas besoin", "G", "no"],
  ["Il se souvient du code ? → Non, …", "Non, il ne s'en souvient pas / Il ne s'en souvient pas", "G", "no"],
  ["Ils t'ont parlé de l'événement ? → Non, …", "Non, ils ne m'en ont pas parlé / Ils ne m'en ont pas parlé / Non, ils ne m'en ont jamais parlé / Ils ne m'en ont jamais parlé", "G", "no"],

  // ── En for an amount (her ex. 6)
  ["Natacha a 3 chiens → avec en", "Natacha en a 3 / Natacha en a trois / Elle en a 3 / Elle en a trois", "G", "amounts"],
  ["J'ai acheté beaucoup de fruits au marché → avec en", "J'en ai acheté beaucoup au marché / J'en ai acheté beaucoup", "G", "amounts"],
  ["On a une voiture → avec en", "On en a une", "G", "amounts"],
  ["J'ai du café dans le placard → avec en", "J'en ai dans le placard / J'en ai", "G", "amounts"],
  ["Il y a assez d'eau là → avec en", "Il y en a assez là / Il y en a assez", "G", "amounts"],

  // ── Answer with the amount given (her ex. 7)
  ["Combien d'exercices tu as faits ? → 5", "J'en ai fait 5 / J'en ai fait cinq", "G", "amountanswers"],
  ["Il y a des plages là-bas ? → beaucoup", "Oui, il y en a beaucoup / Il y en a beaucoup / Oui, il y en a beaucoup là-bas / Il y en a beaucoup là-bas", "G", "amountanswers"],
  ["Tu vas acheter des chaises ? → 4", "Oui, je vais en acheter 4 / Oui, je vais en acheter quatre / Je vais en acheter 4 / Je vais en acheter quatre", "G", "amountanswers"],
  ["Elle a de l'argent ? → un peu", "Oui, elle en a un peu / Elle en a un peu", "G", "amountanswers"],
  ["Tu as trouvé des assiettes ? → assez", "Oui, j'en ai trouvé assez / J'en ai trouvé assez", "G", "amountanswers"],

  // ── Answer no, with an amount (her ex. 8)
  ["Tu as des fruits ? → Non, …", "Non, je n'en ai pas / Je n'en ai pas", "G", "amountno"],
  ["Tu as déjà vu un lion ? → Non, …", "Non, je n'en ai jamais vu / Non, je n'en ai pas encore vu / Non, je n'en ai pas vu / Non, je n'en ai encore jamais vu / Je n'en ai jamais vu / Je n'en ai pas encore vu / Je n'en ai pas vu / Je n'en ai encore jamais vu", "G", "amountno"],
  ["Il y a du sel sur la table ? → Non, …", "Non, il n'y en a pas / Il n'y en a pas / Non, il n'y en a pas sur la table / Il n'y en a pas sur la table", "G", "amountno"],

  // ── Her phrases to learn by heart, both ways round
  ["J'en ai acheté hier", "I bought some yesterday / I bought some of it yesterday / I bought some of them yesterday (with en)", "E", "phrases"],
  ["Combien tu en as pris ?", "How many did you take? / How much did you take? / How many have you taken? / How much have you taken? (tu, with en)", "E", "phrases"],
  ["Il en parle très souvent", "He talks about it very often / He talks about it a lot / He speaks about it very often / He often talks about it (with en)", "E", "phrases"],
  ["J'en fais tous les étés", "I do it every summer / I do some every summer (a sport, with en)", "E", "phrases"],
  ["Je m'en souviens", "I remember it / I remember (with en)", "E", "phrases"],
  ["Je t'en ai parlé hier", "I told you about it yesterday / I talked to you about it yesterday / I spoke to you about it yesterday / I mentioned it to you yesterday (tu, with en)", "E", "phrases"],
  ["Ils en ont beaucoup", "They have a lot / They have lots / They have a lot of them / They have a lot of it / They've got a lot (with en)", "E", "phrases"],
  ["Il y en a cinq là-bas", "There are five over there / There are five there / There are 5 over there (with en)", "E", "phrases"],
  ["J'en ai marre !", "I'm sick of it! / I'm fed up! / I've had enough! / I'm fed up with it! / I'm tired of it!", "E", "phrases"],
  ["Il s'en fout !", "He doesn't care! / He couldn't care less! / He doesn't give a damn! (very informal, with foutre)", "E", "phrases"],

  // ── Her expressions with en, both ways round
  ["J'en ai marre de travailler ici", "I'm sick of working here / I'm fed up with working here / I'm tired of working here", "E", "expressions"],
  ["Tu en es où ?", "How far along are you? / How far have you got? / How far are you? / Where are you at? / Where are you up to? (tu)", "E", "expressions"],
  ["Je n'en peux plus", "I can't take it anymore / I can't take it any more / I can't stand it anymore / I can't go on / I'm exhausted / I'm worn out", "E", "expressions"],
  ["Je m'en suis rendu compte hier", "I realized that yesterday / I realised that yesterday / I realized it yesterday / I realised it yesterday / I noticed it yesterday", "E", "expressions"],
  ["Je m'en vais", "I'm leaving / I'm off / I'm going (with s'en aller)", "E", "expressions"],
  ["Il en veut beaucoup à sa mère", "He's very upset with his mom / He's very upset with his mum / He really resents his mother / He's really angry with his mother / He holds a big grudge against his mother / He's very angry with his mother / He's very angry with his mom", "E", "expressions"],
  ["Ne t'en fais pas", "Don't worry / Don't worry about it (tu)", "E", "expressions"],
];

export const NOTES = [
  {
    tab: "Use",
    h: "1 · What en stands for, and where it goes",
    blocks: [
      { t: "lead", v: "En stands for a group of words starting with de, or with an amount, so you don't say it twice: *j'ai parlé de la situation → j'en ai parlé*, \"I talked about it\"." },
      { t: "table", bold: 1,
        cols: ["Without en", "With en", "English"],
        rows: [
          ["J'ai parlé de la situation", "J'en ai parlé", "I talked about the situation → I talked about it"],
          ["J'ai une voiture", "J'en ai une", "I have a car → I have one"],
          ["J'ai des amis", "J'en ai", "I have friends → I have some"],
          ["J'ai beaucoup d'amis", "J'en ai beaucoup", "I have a lot of friends → I have a lot"],
        ] },
      { t: "note", v: "En never changes, whatever it stands for: *j'en ai une*, \"I have one\"; *j'en ai beaucoup*, \"I have a lot\"." },
      { t: "sub", v: "Where en goes" },
      { t: "note", v: "En goes before the verb: *il en parle*, \"he talks about it\". With avoir or être + past participle, it goes before avoir or être: *il en a acheté*, \"he bought some\"." },
      { t: "note", v: "With two verbs, en goes before the second: *je vais m'en occuper*, \"I'm going to take care of it\"." },
      { t: "note", v: "With another pronoun, en comes second, still before the verb: *il m'en a parlé*, \"he told me about it\"." },
      { t: "note", v: "En never makes the past participle change: *des fleurs ? Il en a acheté*, \"flowers? He bought some\"." },
      { t: "sub", v: "Detail · advanced" },
      { t: "note", v: "In a command without ne, en goes after the verb: *prends-en*, \"take some\"." },
    ],
  },
  {
    tab: "After de",
    h: "2 · En for de + a thing, an idea or an action",
    blocks: [
      { t: "lead", v: "After a verb or an adjective that takes de, en stands for de and the thing, idea or action after it: *tu te souviens de ces vacances ? Tu t'en souviens ?*, \"do you remember that holiday? Do you remember it?\"." },
      { t: "note", v: "The commonest verbs with de: parler de, penser de, faire de (a sport), s'occuper de, rêver de, avoir besoin de, se servir de, avoir envie de, jouer de (an instrument), se souvenir de, avoir honte de, manquer de, se débarrasser de, venir de (a place)." },
      { t: "table", bold: 1,
        cols: ["Without en", "With en", "English"],
        rows: [
          ["Il me parle de sa relation", "Il m'en parle", "He talks to me about his relationship → about it"],
          ["Qu'est-ce que tu penses du film ?", "Qu'est-ce que tu en penses ?", "What do you think of the film? → of it?"],
          ["J'ai besoin de partir en vacances", "J'en ai besoin", "I need to go on holiday → I need to"],
          ["Tu as déjà fait du ski ?", "Tu en as déjà fait ?", "Have you ever been skiing? → Have you ever done it?"],
        ] },
      { t: "sub", v: "Adjectives with de" },
      { t: "table", bold: 1,
        cols: ["Without en", "With en", "English"],
        rows: [
          ["Il est très fier de sa carrière", "Il en est très fier", "He's very proud of his career → of it"],
          ["Je suis content de ma nouvelle voiture", "J'en suis content", "I'm happy with my new car → with it"],
        ] },
      { t: "sub", v: "Detail · advanced" },
      { t: "note", v: "For a person, say de and moi, toi, lui, elle, nous, vous, eux or elles after the verb: *il me parle de son père → il me parle de lui*, \"he talks to me about his father → he talks to me about him\". In speech, en is common here too: *il m'en parle*, \"he talks to me about him\"." },
    ],
  },
  {
    tab: "Amounts",
    h: "3 · En for an amount",
    blocks: [
      { t: "lead", v: "En stands for the thing after un, une, des, du, de la, de l', a number or a word like beaucoup; un, une, a number or a word like beaucoup stays after the verb: *il y a 5 personnes → il y en a 5*, \"there are 5\"." },
      { t: "table", bold: 1,
        cols: ["Without en", "With en", "English"],
        rows: [
          ["J'ai un ami français", "J'en ai un", "I have a French friend → I have one"],
          ["Je vois beaucoup d'arbres", "J'en vois beaucoup", "I see a lot of trees → I see a lot"],
          ["Tu veux combien de fleurs ?", "Tu en veux combien ?", "How many flowers do you want? → How many do you want?"],
          ["Il boit du lait", "Il en boit", "He drinks milk → He drinks some"],
          ["Il a acheté des fleurs", "Il en a acheté", "He bought flowers → He bought some"],
        ] },
      { t: "sub", v: "In the negative" },
      { t: "note", v: "The trap: in the negative, un and une go: *j'ai un livre → j'en ai un*, \"I have a book → I have one\", but *je n'ai pas de livre → je n'en ai pas*, \"I don't have one\". Never add un or une: not je n'en ai pas un." },
      { t: "note", v: "Ne goes before en and any pronoun with it, and pas after the verb, or after avoir or être: *il y en a → il n'y en a pas*, \"there isn't any\"; *ils m'en ont parlé → ils ne m'en ont pas parlé*, \"they didn't tell me about it\"." },
      { t: "table", bold: 1,
        cols: ["Without en", "With en", "English"],
        rows: [
          ["Je n'ai pas d'argent", "Je n'en ai pas", "I don't have any money → I don't have any"],
          ["Il n'a pas de question", "Il n'en a pas", "He doesn't have a question → He doesn't have one"],
        ] },
    ],
  },
  {
    tab: "Expressions",
    h: "4 · Expressions with en",
    blocks: [
      { t: "lead", v: "En is part of some everyday expressions, which you learn whole: *j'en ai marre*, \"I'm sick of it\"." },
      { t: "table", caption: "Very common",
        cols: ["Expression", "Example", "English"],
        rows: [
          ["en avoir marre (de)", "J'en ai marre de travailler ici", "I'm sick of working here"],
          ["s'en ficher", "Il s'en fiche", "He doesn't care"],
          ["en être (où)", "Tu en es où ?", "How far along are you?"],
          ["ne plus en pouvoir", "Je n'en peux plus", "I can't take it anymore"],
        ] },
      { t: "table", caption: "Quite common",
        cols: ["Expression", "Example", "English"],
        rows: [
          ["s'en rendre compte", "Je m'en suis rendu compte hier", "I realized that yesterday"],
          ["s'en aller", "Je m'en vais", "I'm leaving"],
          ["en vouloir à quelqu'un", "Il en veut beaucoup à sa mère", "He's very upset with his mom"],
          ["s'en faire", "Ne t'en fais pas", "Don't worry"],
        ] },
      { t: "note", v: "*Il s'en fout*, \"he doesn't care\", is the same as *il s'en fiche*, but very informal." },
    ],
  },
];

export const LESSON = {
  id: "pronomen",
  title: "Le pronom EN",
  subtitle: "Some, any, of it, about it: en for de and for an amount",
  source: "LFL METHOD by Laura Caufour",
  cards: CARDS,
  notes: NOTES,
  // The order a student meets NEW cards in (reviews are FSRS's), as the
  // notes tabs run, her phrases after the rules they use.
  teachingOrder: ["de", "yes", "no", "amounts", "amountanswers", "amountno", "phrases", "expressions"],
  // The line shown above a grammar card saying what to type (see
  // src/lib/cardInstruction.js).
  instructions: {
    de: "Say the same thing with en in place of the words it stands for",
    amounts: "Say the same thing with en in place of the words it stands for",
    yes: "Answer yes in a full sentence, with en",
    no: "Answer no in a full sentence, with en",
    amountanswers: "Answer in a full sentence, with en and the amount given",
    amountno: "Answer no in a full sentence, with en",
  },
};

export default LESSON;
