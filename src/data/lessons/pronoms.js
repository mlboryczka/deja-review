// Les pronoms — built 2026-11-15 from Laura Caufour's LFL METHOD sheets in
// Google Drive (Français / Les pronoms): "Les pronoms" (her summary lesson,
// "leçon récapitulative") and "EXERCICES - Les pronoms" (file ids in
// .claude/topic-lessons-draft/pronoms/sources.md). One of her topic
// lessons, in no stage (owner, 2026-11-13). She has no answer key for it:
// every answer here was written for the app and checked.
//
// Each entry is [front, back, category, section].
//
// Card shapes:
//   "le, la, l', les, lui, leur, y, en ou ça → … Oui, je vais ___ mettre sur la table" / "les"
//   "Tu as appelé le serveur ? → Oui, …" / "Oui, je l'ai appelé / Je l'ai appelé"
//   "Je tiens à Adèle → avec un pronom" / "Je tiens à elle"
//   "Je m'y suis habitué maintenant" / "I'm used to it now …"      both ways round
//
// Every grammar card is an arrow card, marked exactly: typo tolerance
// would pass "le" for "les", "lui" for "leur", "montré" for "montrée". The
// eight phrase cards are marked with typo tolerance from the English, so
// a te / la slip there passes (SKILL.md, card rule 14).
//
// OVERLAP: Leçon 16 drills le, la, les, lui and leur on their own, Leçon 20
// y for places, Le pronom EN en, L'impératif the pronouns after a command.
// This lesson is her summary: choosing among all of them, two pronouns
// together, and moi, toi, lui, elle, eux after a preposition. No front is
// used by another lesson.
//
// WHAT WAS SAMPLED, AND WHAT WAS LEFT:
//   - Ex. 1 (fill the gap): nine, one or two for each pronoun in her list.
//     Left out: no. 5 (two gaps), nos. 10, 13 and 15 (lui again), no. 9 (en
//     again), no. 11 (y for a place, which Leçon 20 drills), nos. 14, 17
//     and 18 (y and en already have two each), no. 19 (ça again), no. 20
//     (en again).
//   - Ex. 2 (answer yes): seven, among them appeler, plus her lesson's
//     aider example; her lesson warns both take le, la, les, not lui. The
//     poisson card accepts "elles aiment ça", "elles adorent" and "elles
//     aiment bien", as her "Oui, j'adore. / Oui, j'adore ça." allows.
//   - Ex. 4 asks to answer questions that already have both pronouns, so
//     the answer copies the question; ex. 5 (two pronouns from the nouns)
//     is used instead: five, three with a past participle that changes
//     (montrée, mises, coupés).
//   - Ex. 5 nos. 4 and 8 (de + a person) and her lesson's à + a person
//     examples: six cards for moi, toi, lui, elle, eux. The notes set her
//     "je pense à mes vacances → j'y pense" beside "je pense à elle".
//   - Ex. 7 (translate): five phrase cards, and three from her lesson (Je te
//     l'ai donné hier, Il y en a dans le placard, Je le lui ai envoyé). On a
//     phrase card typed from the English, typo tolerance passes "Je lui ai
//     envoyé" for the last, which is what her Remarque says speech does.
//   - Ex. 3 (answer no): three, among them no. 17 (tenir à, y). Ex. 5's "Vous avez parlé à votre ami de vos
//     problèmes" left out, as Le pronom EN has the same lui en.
//   - Ex. 6 repeats ex. 5 in the negative; left out.
//
// DEPARTURES FROM HER SHEETS:
//   - Ex. 1 no. 11 has "Tu es allé … ? Oui, je suis allée": the card asks
//     no gender, only y.
//   - Her lesson's "je lui ai téléphoné un message": je lui ai téléphoné.
//     "Il y en a dans la placard": le placard. "Tu t'intéresse à moi ?":
//     t'intéresses.
//   - Ex. 2 no. 20, "de la tarte au pommes": aux pommes. Not a card.
//   - Ex. 5 no. 17, "C'est toi qui leur a parlé": as. Not a card.
//   - Two pronouns where she says speech keeps only one (le lui → lui,
//     her Remarque): "I sent it to him" is a phrase card for the two
//     (Je le lui ai envoyé), and the notes give the spoken one.
//   - "La grand-mère s'est bien occupée de ses petits-enfants ? → Oui, …"
//     accepts only "d'eux": her lesson calls "s'en est occupée"
//     grammatically wrong, though common in speech.
//
// THE NOTES are her lesson in English: Which one (her table and her four
// sections on le/la/les, lui/leur, en and y, by the first word of the
// group), Where (her part 3, and the imperative), Two (her order of
// pronouns) and Moi, toi (her part 4, with her remarks on à and de + a
// person). Her COD / COI definitions are said without the words: the thing
// right after the verb, after à, after de. Not hers, though a card needs it
// said:
//   - Two: "the past participle takes -e, -s or -es after le, la, les" for
//     montrée, mises and coupés; her ex. 4 and 5 rely on it, her lesson
//     doesn't say it.
//   - Where: the ne … pas row, for the answer-no cards.
//   - Which one: "Téléphoner à takes lui", from her example "je lui ai
//     téléphoné".
//   - "Je pense souvent à ma sœur" is written for the app, beside her "Je
//     pense à mes vacances", which is in the notes.

export const CARDS = [
  // ── Which pronoun (her ex. 1)
  ["le, la, l', les, lui, leur, y, en ou ça → Tu peux mettre les magazines sur la table ? Oui, je vais ___ mettre sur la table", "les", "G", "choice"],
  ["le, la, l', les, lui, leur, y, en ou ça → Tu connais cette chanteuse ? Oui, je ___ connais bien", "la", "G", "choice"],
  ["le, la, l', les, lui, leur, y, en ou ça → Tes enfants ont eu leur bac ? Oui, ils ___ ont eu", "l'", "G", "choice"],
  ["le, la, l', les, lui, leur, y, en ou ça → Tu as parlé à Marine récemment ? Oui, je ___ ai parlé", "lui", "G", "choice"],
  ["le, la, l', les, lui, leur, y, en ou ça → Marie a expliqué à ses amis pourquoi elle ne pouvait pas venir ? Oui, elle ___ a expliqué", "leur", "G", "choice"],
  ["le, la, l', les, lui, leur, y, en ou ça → Tu vas penser à ma proposition ? Oui, je vais ___ penser", "y", "G", "choice"],
  ["le, la, l', les, lui, leur, y, en ou ça → Vous allez prendre de la salade ? Oui, je vais ___ prendre", "en", "G", "choice"],
  ["le, la, l', les, lui, leur, y, en ou ça → Avant, tu mangeais trop de fromage ? Oui, j'___ mangeais trop", "en", "G", "choice"],
  ["le, la, l', les, lui, leur, y, en ou ça → Tu aimes le chocolat ? Oui, j'adore ___", "ça", "G", "choice"],

  // ── Answer yes (her ex. 2)
  ["Tu as appelé le serveur ? → Oui, …", "Oui, je l'ai appelé / Je l'ai appelé", "G", "yes"],
  ["Vous avez appelé vos parents ? → Oui, …", "Oui, nous les avons appelés / Oui, on les a appelés / Oui, je les ai appelés / Nous les avons appelés / On les a appelés / Je les ai appelés", "G", "yes"],
  ["Tu aides beaucoup tes amis ? → Oui, …", "Oui, je les aide beaucoup / Je les aide beaucoup", "G", "yes"],
  ["Tu peux expliquer à Marie ? → Oui, …", "Oui, je peux lui expliquer / Je peux lui expliquer / Oui, je peux le lui expliquer / Je peux le lui expliquer", "G", "yes"],
  ["Il croit à ces bêtises ? → Oui, …", "Oui, il y croit / Il y croit", "G", "yes"],
  ["Elle a répondu à ton mail ? → Oui, …", "Oui, elle y a répondu / Elle y a répondu", "G", "yes"],
  ["Ils avaient un chien ? → Oui, …", "Oui, ils en avaient un / Ils en avaient un", "G", "yes"],
  ["Tes filles aiment le poisson ? → Oui, …", "Oui, elles aiment ça / Elles aiment ça / Oui, elles aiment bien ça / Elles aiment bien ça / Oui, elles adorent ça / Elles adorent ça / Oui, elles adorent / Elles adorent / Oui, elles aiment bien / Elles aiment bien", "G", "yes"],

  // ── Answer no (her ex. 3)
  ["Tu veux parler de ton nouveau projet ? → Non, …", "Non, je ne veux pas en parler / Je ne veux pas en parler", "G", "no"],
  ["Tu tiens vraiment à ton indépendance ? → Non, …", "Non, je n'y tiens pas vraiment / Je n'y tiens pas vraiment / Non, je n'y tiens pas / Je n'y tiens pas", "G", "no"],
  ["Vous vouliez acheter du vin ? → Non, …", "Non, nous ne voulions pas en acheter / Non, on ne voulait pas en acheter / Non, je ne voulais pas en acheter / Nous ne voulions pas en acheter / On ne voulait pas en acheter / Je ne voulais pas en acheter", "G", "no"],

  // ── Two pronouns (her ex. 5)
  ["Tu veux me parler de tes nouveaux projets ? → Oui, …", "Oui, je veux t'en parler / Je veux t'en parler / Oui, je veux bien t'en parler / Je veux bien t'en parler", "G", "two"],
  ["Alex t'a déjà montré sa voiture ? → Oui, …", "Oui, il me l'a déjà montrée / Oui, Alex me l'a déjà montrée / Il me l'a déjà montrée / Alex me l'a déjà montrée / Oui, il me l'a montrée / Il me l'a montrée", "G", "two"],
  ["Vous m'avez déjà mis les pommes dans le sac ? → Oui, …", "Oui, je vous les ai déjà mises dans le sac / Oui, je vous les ai mises dans le sac / Oui, je vous les ai déjà mises / Je vous les ai déjà mises dans le sac / Je vous les ai mises dans le sac / Je vous les ai déjà mises / Oui, nous vous les avons déjà mises dans le sac / Oui, nous vous les avons mises dans le sac / Oui, on vous les a déjà mises dans le sac / Oui, on vous les a mises dans le sac / Nous vous les avons déjà mises dans le sac / On vous les a déjà mises dans le sac", "G", "two"],
  ["Tu as déjà offert une bague à ta femme ? → Oui, …", "Oui, je lui en ai déjà offert une / Oui, je lui en ai offert une / Je lui en ai déjà offert une / Je lui en ai offert une", "G", "two"],
  ["Tu t'es coupé les cheveux seul ? → Oui, …", "Oui, je me les suis coupés seul / Je me les suis coupés seul / Oui, je me les suis coupés / Je me les suis coupés / Oui, je me les suis coupés tout seul / Je me les suis coupés tout seul", "G", "two"],

  // ── Moi, toi, lui, elle, eux: à or de + a person (her lesson and ex. 5)
  ["Je pense souvent à ma sœur → avec un pronom", "Je pense souvent à elle", "G", "tonic"],
  ["Je tiens à Adèle → avec un pronom", "Je tiens à elle", "G", "tonic"],
  ["Elle fait toujours attention aux enfants → avec un pronom", "Elle fait toujours attention à eux", "G", "tonic"],
  ["Il me parle de son père → avec un pronom", "Il me parle de lui", "G", "tonic"],
  ["Tu te souviens bien de la mère de Mathilde ? → Oui, …", "Oui, je me souviens bien d'elle / Je me souviens bien d'elle", "G", "tonicanswers"],
  ["La grand-mère s'est bien occupée de ses petits-enfants ? → Oui, …", "Oui, elle s'est bien occupée d'eux / Elle s'est bien occupée d'eux / Oui, la grand-mère s'est bien occupée d'eux / La grand-mère s'est bien occupée d'eux", "G", "tonicanswers"],

  // ── Her sentences, both ways round (ex. 7 and her lesson)
  ["Je m'y suis habitué maintenant", "I'm used to it now / I am used to it now / I've got used to it now (said by a man)", "E", "phrases"],
  ["Ils vont nous le montrer demain", "They're going to show it to us tomorrow / They are going to show it to us tomorrow / They're going to show us it tomorrow / They'll show it to us tomorrow / They will show it to us tomorrow", "E", "phrases"],
  ["Je ne lui en ai pas parlé", "I didn't tell him about it / I didn't tell her about it / I didn't talk to him about it / I didn't talk to her about it / I haven't told him about it / I haven't told her about it / I haven't talked to him about it / I haven't talked to her about it / I didn't mention it to him / I didn't mention it to her", "E", "phrases"],
  ["Je te le prêterai plus tard", "I'll lend it to you later / I will lend it to you later / I'll lend you it later (tu, future tense)", "E", "phrases"],
  ["Je te l'ai donné hier", "I gave it to you yesterday / I gave you it yesterday (tu)", "E", "phrases"],
  ["Il y en a dans le placard", "There's some in the cupboard / There is some in the cupboard / There are some in the cupboard / There's some in the closet / There are some in the closet", "E", "phrases"],
  ["Je le lui ai envoyé", "I sent it to him / I sent it to her (with le and lui)", "E", "phrases"],
  ["Je suis très proche d'eux", "I'm very close to them / I am very close to them (eux)", "E", "phrases"],
];

export const NOTES = [
  {
    tab: "Which one",
    h: "1 · Which pronoun: look at the first word",
    blocks: [
      { t: "lead", v: "To choose the pronoun, look at the first word of what it replaces: *tu as trouvé tes lunettes ? Tu les as trouvées ?*, \"did you find your glasses? Did you find them?\"." },
      { t: "table", caption: "Which pronoun",
        cols: ["The words start with", "Pronoun"],
        rows: [
          ["le, la, les, mon, ce, or a name", "le, la, l', les"],
          ["à + a person (parler à)", "lui, leur"],
          ["à + a thing, or a place", "y"],
          ["de + a thing, or an amount", "en"],
        ] },
      { t: "table", bold: 1,
        cols: ["Question", "Answer", "English"],
        rows: [
          ["Vous voyez la girafe ?", "Vous la voyez ?", "Can you see the giraffe? → Can you see it?"],
          ["Il a envoyé un message à ses parents ?", "Il leur a envoyé un message", "Did he send his parents a message? → He sent them a message"],
          ["Tu vas à Marseille ?", "Oui, j'y vais", "Are you going to Marseille? → Yes, I'm going there"],
          ["Il porte des lunettes ?", "Oui, il en porte", "Does he wear glasses? → Yes, he does"],
        ] },
      { t: "note", v: "Mon stands for ton, son, notre, leur and the rest, and ce for cette and ces: *tes enfants ont eu leur bac ? Oui, ils l'ont eu*, \"did your children pass their exams? Yes, they did\". À also means au and aux; lui and leur are for verbs of talking, asking and sending, like parler à, dire à, demander à and envoyer à." },
      { t: "note", v: "With a number or an amount, en goes before the verb and the number after it: *vous avez un chien ? Oui, on en a un*, \"do you have a dog? Yes, we have one\"." },
      { t: "note", v: "Appeler and aider take le, la, les, as in English \"call her\" and \"help her\", with no \"to\": *tu as appelé Sophie ? Oui, je l'ai appelée*, \"did you call Sophie? Yes, I called her\". Téléphoner à takes lui: *je lui ai téléphoné*, \"I phoned her\"." },
      { t: "sub", v: "Ça for things in general" },
      { t: "note", v: "When le, la or les means something in general, as in \"I love cheese\", either say nothing or put ça at the end: *tu adores le fromage ? Oui, j'adore ça*, \"do you love cheese? Yes, I love it\"." },
    ],
  },
  {
    tab: "Where",
    h: "2 · Where the pronoun goes",
    blocks: [
      { t: "lead", v: "A pronoun goes in front of the verb it belongs to: *je le vois*, \"I see him\"." },
      { t: "note", v: "With avoir or être + past participle, it goes before avoir or être; with two verbs, between them; with ne … pas, ne goes before the pronoun and pas after the verb." },
      { t: "table", caption: "Where it goes",
        cols: ["With", "Example", "English"],
        rows: [
          ["one verb", "Je le vois", "I see him"],
          ["avoir, être", "Je lui ai dit", "I told him"],
          ["two verbs", "Je vais en prendre", "I'm going to have some"],
          ["ne … pas", "Ils ne l'ont pas eu", "They didn't get it"],
        ] },
      { t: "sub", v: "In a command" },
      { t: "note", v: "In a command without ne, the pronoun goes after the verb, with a hyphen, and me and te become moi and toi: *écoute-moi*, \"listen to me\"." },
    ],
  },
  {
    tab: "Two",
    h: "3 · Two pronouns together",
    blocks: [
      { t: "lead", v: "With two pronouns, both go before the verb, in this order: me, te, se, nous, vous first; then le, la, les; then lui, leur; then y; then en: *je te l'ai donné hier*, \"I gave it to you yesterday\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Je te l'ai donné hier", "I gave it to you yesterday"],
        ["Il y en a dans le placard", "There's some in the cupboard"],
        ["Je m'en occupe demain", "I'll take care of it tomorrow"],
        ["Je lui en ai parlé", "I told him about it"],
      ]},
      { t: "note", v: "After le, la, l' or les, the past participle takes -e, -s or -es to match what they stand for: *ta voiture ? Il me l'a montrée*, \"your car? He showed it to me\"; *les cheveux ? Je me les suis coupés*, \"my hair? I cut it myself\"." },
      { t: "note", v: "Moi, toi, lui, elle and the rest go after the verb, as usual, even with another pronoun before it: *je lui ai parlé de toi*, \"I talked to him about you\"; *je me suis habitué à lui*, \"I got used to him\"." },
      { t: "sub", v: "Le lui in speech" },
      { t: "note", v: "Le, la or les together with lui or leur is correct but rare in speech; people keep only lui or leur. For \"I sent it to him\", *je le lui ai envoyé* is correct, and *je lui ai envoyé* is what you'll hear." },
    ],
  },
  {
    tab: "Moi, toi",
    h: "4 · Moi, toi, lui, elle, nous, vous, eux, elles",
    blocks: [
      { t: "lead", v: "After avec, chez, sans, pour, devant and other prepositions, use moi, toi, lui, elle, nous, vous, eux or elles: *tu veux venir avec moi ?*, \"do you want to come with me?\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Je l'ai acheté pour toi", "I bought it for you"],
        ["Ils sont encore chez eux", "They're still at home"],
        ["Je vais partir sans toi", "I'm going to leave without you"],
        ["Place-toi devant lui", "Stand in front of him"],
      ]},
      { t: "sub", v: "À or de + a person" },
      { t: "note", v: "The trap: y, and en after de, are for things. For a person after à, with verbs like penser à, tenir à and faire attention à, or after de, keep à or de and use moi, toi, lui, elle and the rest: *je pense à mes vacances → j'y pense*, \"I think about my holidays → I think about them\", but *je pense à ma sœur → je pense à elle*, \"I think about her\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Je tiens à elle", "I care about her"],
        ["Elle fait toujours attention à eux", "She always looks out for them"],
        ["Il me parle de lui", "He talks to me about him"],
        ["Elle s'occupe bien d'eux", "She takes good care of them"],
      ]},
      { t: "note", v: "Lui and leur before the verb are for verbs of talking, asking and sending, like parler à, dire à, demander à, téléphoner à and envoyer à: *je lui ai parlé*, \"I talked to her\"." },
      { t: "sub", v: "To stress who" },
      { t: "note", v: "Moi, toi and the rest also stress or contrast the person: *moi, j'adore le fromage. Et toi ?*, \"I love cheese. What about you?\"; *elle veut habiter à la campagne mais lui, il préfère la ville*, \"she wants to live in the country, but he prefers the city\"." },
    ],
  },
];

export const LESSON = {
  id: "pronoms",
  title: "Les pronoms",
  subtitle: "Le, lui, y, en, and moi, toi, eux: choosing, placing and combining them",
  source: "LFL METHOD by Laura Caufour",
  cards: CARDS,
  notes: NOTES,
  // The order a student meets NEW cards in (reviews are FSRS's), as the
  // notes tabs run, her sentences last.
  teachingOrder: ["choice", "yes", "no", "two", "tonic", "tonicanswers", "phrases"],
  // The line shown above a grammar card saying what to type (see
  // src/lib/cardInstruction.js). The same lines whatever the pronoun, so
  // they never say which one fits.
  instructions: {
    choice: "Fill the gap with one of the words given",
    yes: "Answer yes in a full sentence, using pronouns",
    no: "Answer no in a full sentence, using pronouns",
    two: "Answer yes in a full sentence, using pronouns",
    tonic: "Replace the person or thing after the verb with a pronoun, in the right place",
    tonicanswers: "Answer yes in a full sentence, using pronouns",
  },
};

export default LESSON;
