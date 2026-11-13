// La voie passive — built 2026-11-13 from Laura Caufour's LFL METHOD sheets
// in Google Drive (Français / La voie passive): "Leçon - La voie passive" and
// "EXERCICES - La voie passive" (file ids in
// .claude/topic-lessons-draft/voiepassive/sources.md). One of her topic
// lessons, in no stage (owner, 2026-11-13). She has no answer key for it:
// every answer here was written for the app and checked.
//
// Each entry is [front, back, category, section].
//
// Card shapes:
//   "livrer (présent) → Les colis ___ toujours à l'heure" / "sont livrés"   the passive, in the tense named
//   "J'ai été licencié → avec se faire" / "Je me suis fait licencier"
//   "On m'a dit que c'était dangereux là-bas" / "I've been told …"         both ways round
//
// The passive gaps are arrow cards, marked exactly (accents aside), because
// the participle's agreement is the point: a phrase card's typo tolerance
// would pass "a été écrit" for "a été écrite". Each gap names its tense,
// because most of her sentences fit more than one ("Ils ___ par une cour
// internationale" is sont jugés or ont été jugés).
//
// The on sentences and the dessus / dedans sentences are phrase cards: what
// they teach is the shape of the whole sentence (on m'a dit, not j'ai été
// dit), which a wrong answer misses by far more than a typo.
//
// WHAT WAS SAMPLED, AND WHAT WAS LEFT:
//   - Ex. 1 and 3 (English passives to translate) and her lesson's
//     examples: thirteen gap cards, each a different verb, in five tenses
//     and the infinitive (ex. 3 no. 16, "He wants to be chosen"), and the
//     past conditional from her lesson's "j'aurais été sélectionné".
//   - Se faire: her lesson's three examples, ex. 3 no. 6 (expulser) and
//     no. 17 (going to be laid off).
//   - The on construction: three from ex. 2 (nos. 1, 3 and 5), one from
//     ex. 3 (no. 2) and three from her lesson. Each English answer carries
//     "(with on)", because the English also fits other French, such as
//     "il faut plus de médecins", which the marker would refuse.
//   - Her lesson's dessus / dedans examples: all four, as phrase cards,
//     each in one of her two forms and its English marked "(with on)" or
//     "(with se faire)", so the other form isn't marked wrong unasked.
//   - Left out: sentences whose passive needs a verb or idiom no other card
//     teaches (ex. 1 no. 3 "baked", no. 8 "is being solved", ex. 3 no. 21
//     "displaced"), and repeats of a shape another card has.
//
// DEPARTURES FROM HER SHEETS:
//   - Her lesson's first example, "Les citoyens élisent le présent":
//     président.
//   - "Il s'est fait sauté dessus": sauter, the infinitive after se faire.
//   - "On m'a m'appelé": on m'a appelé. "On lui a tiré desus": dessus.
//   - "Avant, les actrices était toujours habillées": étaient.
//   - "aucune explication" for her English "any explication": explanation.
//   - Ex. 1 no. 4's "Jean-Jacque Goldman": Jean-Jacques.
//
// THE NOTES are her lesson in English: Use (active and passive, and her
// rule that only a verb taking its object directly has a passive), Forms
// (être in any tense and the agreement, with her remark on passé composé
// or imperfect), Se faire, On (her section on verbs with à), Dessus (her
// section on sur and dans). Her "COD" and "COI" are said without the words:
// a verb that takes its object directly, with no à or de, and a verb with à
// before the person. Not hers, though a card needs it said:
//   - Se faire: "fait never changes", shown by elle s'est fait virer.
//   - Forms: the irregular participles peint, écrit and élu.
//   - On: avoir besoin de with the dire à verbs (her lesson puts it in the
//     same section), and vous among the persons.

export const CARDS = [
  // ── The passive with être (her lesson and ex. 1 and 3)
  ["livrer (présent) → Les colis ___ à l'heure", "sont livrés", "G", "passive"],
  ["nettoyer (présent) → La chambre ___ tous les jours", "est nettoyée", "G", "passive"],
  ["peindre (présent) → Les murs ___ chaque année", "sont peints", "G", "passive"],
  ["écrire (passé composé) → Cette chanson ___ par Jean-Jacques Goldman", "a été écrite", "G", "passive"],
  ["vendre (passé composé) → La maison ___ par l'agent immobilier", "a été vendue", "G", "passive"],
  ["choisir (passé composé) → Ils ___ parmi 30 candidats", "ont été choisis", "G", "passive"],
  ["tourner (passé composé) → Le film ___ en Alaska", "a été tourné", "G", "passive"],
  ["accuser (passé composé) → Elle ___ de meurtre", "a été accusée", "G", "passive"],
  ["juger (passé composé) → Ils ___ par une cour internationale", "ont été jugés", "G", "passive"],
  ["annoncer (futur) → Le gagnant ___ demain", "sera annoncé", "G", "passive"],
  ["choisir (infinitif) → Il veut ___", "être choisi", "G", "passive"],
  ["sélectionner (conditionnel passé) → Si j'avais travaillé plus, ___", "j'aurais été sélectionné / j'aurais été sélectionnée", "G", "passive"],
  ["habiller (imparfait) → Avant, les actrices ___ par Chanel", "étaient habillées", "G", "passive"],

  // ── Se faire + infinitive (her lesson and ex. 3)
  ["J'ai été licencié → avec se faire", "Je me suis fait licencier", "G", "sefaire"],
  ["Ma voiture a été volée → avec se faire", "Je me suis fait voler ma voiture", "G", "sefaire"],
  ["Elle a été virée → avec se faire", "Elle s'est fait virer", "G", "sefaire"],
  ["Tu penses que tu vas être licencié ? → avec se faire", "Tu penses que tu vas te faire licencier ?", "G", "sefaire"],
  ["Elle a été expulsée → avec se faire", "Elle s'est fait expulser", "G", "sefaire"],

  // ── On, for verbs with à before the person (her lesson and ex. 2 and 3)
  ["On m'a dit que c'était dangereux là-bas", "I've been told that it's dangerous there / I've been told it's dangerous there / I was told that it was dangerous there / I was told it was dangerous there / I was told it's dangerous there / I was told that it's dangerous there / Someone told me it was dangerous there (with on)", "E", "on"],
  ["On ne m'a pas demandé mon opinion", "I wasn't asked for my opinion / I wasn't asked my opinion / I was not asked for my opinion / I haven't been asked for my opinion / I haven't been asked my opinion / Nobody asked my opinion / Nobody asked me for my opinion (with on)", "E", "on"],
  ["On ne lui a donné aucune explication", "He hasn't been given any explanation / He wasn't given any explanation / He was given no explanation / She hasn't been given any explanation / She wasn't given any explanation / She was given no explanation (with on)", "E", "on"],
  ["On a besoin de plus de médecins à l'hôpital", "More doctors are needed at the hospital / More doctors are needed in the hospital (with on)", "E", "on"],
  ["On nous a donné une carte", "We've been given a card / We were given a card / We have been given a card / We've been given a map / We were given a map (with on)", "E", "on"],
  ["On leur a demandé de partir plus tôt", "They've been asked to leave earlier / They were asked to leave earlier / They have been asked to leave earlier (with on)", "E", "on"],
  ["On ne m'a rien dit", "I haven't been told anything / I wasn't told anything / I've been told nothing / I was told nothing / Nobody told me anything (with on)", "E", "on"],

  // ── Dessus and dedans (her lesson, 3C)
  ["On t'a tiré dessus", "You've been shot / You were shot / You've been shot at / You were shot at / Someone shot at you / Somebody shot at you (with on)", "E", "dessus"],
  ["On lui a sauté dessus dans la rue", "He got jumped in the street / He was jumped in the street / She got jumped in the street / She was jumped in the street (with on)", "E", "dessus"],
  ["Ils n'aiment pas qu'on leur crie dessus", "They don't like to be yelled at / They don't like being yelled at / They don't like to be shouted at / They don't like being shouted at (with on)", "E", "dessus"],
  ["Je me suis fait rentrer dedans", "I got hit / I was hit / I got hit by a car / I was hit by a car / Somebody ran into me / Someone ran into me / Someone crashed into me / Somebody crashed into me (with se faire)", "E", "dessus"],
];

export const NOTES = [
  {
    tab: "Use",
    h: "1 · What the passive is for",
    blocks: [
      { t: "lead", v: "The passive puts first what the action is done to: *le président est élu par les citoyens*, \"the president is elected by the citizens\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Les citoyens élisent le président", "The citizens elect the president"],
        ["Le président est élu par les citoyens", "The president is elected by the citizens"],
      ]},
      { t: "note", v: "In French, the passive is made from a verb that takes what it acts on directly, with no à or de in between: *voler une voiture → la voiture a été volée*, \"the car was stolen\". English says \"I was told\", but dire takes à before the person, so French says it another way, with on." },
    ],
  },
  {
    tab: "Forms",
    h: "2 · How to make it",
    blocks: [
      { t: "lead", v: "Put être in any tense, then the past participle, which takes an -e, an -s or -es to match the subject, as an adjective does: *la maison a été vendue*, \"the house was sold\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Le courrier est distribué chaque matin par la Poste", "The mail is delivered every morning by the post office"],
        ["Ils ont été choisis parmi 30 candidats", "They were chosen from 30 candidates"],
        ["Le film a été tourné en Alaska", "The film was shot in Alaska"],
        ["Le gagnant sera annoncé demain", "The winner will be announced tomorrow"],
      ]},
      { t: "note", v: "Some past participles are irregular: *peindre → peint*, *écrire → écrit*, *élire → élu*: *cette chanson a été écrite*, \"this song was written\"." },
      { t: "sub", v: "Passé composé or imperfect" },
      { t: "note", v: "For something that happened once, être goes in the passé composé: *il a été viré en 2023*, \"he was fired in 2023\". For something that happened again and again, in the imperfect: *avant, les actrices étaient toujours habillées par Chanel*, \"actresses always used to be dressed by Chanel\"." },
    ],
  },
  {
    tab: "Se faire",
    h: "3 · Se faire + infinitive",
    blocks: [
      { t: "lead", v: "In speech, when something is done to a person, people often say se faire and the infinitive: *je me suis fait voler ma voiture*, \"my car was stolen\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Je me suis fait licencier", "I got laid off"],
        ["Je me suis fait voler ma voiture", "My car got stolen"],
        ["Elle s'est fait virer", "She got fired"],
      ]},
      { t: "note", v: "Fait never changes, even for a woman or for several people: *elle s'est fait virer*, \"she got fired\", not faite." },
    ],
  },
  {
    tab: "On",
    h: "4 · I've been told: on",
    blocks: [
      { t: "lead", v: "With a verb that takes à or de, such as dire à, demander à, donner à or avoir besoin de, French has no passive: it uses on, with the person as me, te, lui, nous, vous or leur: *on m'a dit*, \"I've been told\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["On m'a dit que tu étais ici", "I've been told that you were here"],
        ["On ne m'a pas demandé mon opinion", "I wasn't asked for my opinion"],
        ["On ne lui a donné aucune explication", "He hasn't been given any explanation"],
        ["On a besoin de plus de médecins à l'hôpital", "More doctors are needed at the hospital"],
      ]},
      { t: "note", v: "On here means nobody in particular. It works with other verbs too, *on m'a volé mon vélo*, \"my bike has been stolen\", but not where it could mean \"we\": *on l'a choisi* could be \"we chose him\", so say *il a été choisi*, \"he's been chosen\"." },
    ],
  },
  {
    tab: "Dessus",
    h: "5 · Shot at, yelled at: dessus and dedans",
    blocks: [
      { t: "lead", v: "With tirer sur, sauter sur, crier sur and rentrer dans, French uses on, or se faire, and puts dessus or dedans after the verb: *on t'a tiré dessus*, \"you've been shot\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["On t'a tiré dessus / Tu t'es fait tirer dessus", "You've been shot"],
        ["On lui a sauté dessus dans la rue / Il s'est fait sauter dessus dans la rue", "He got jumped in the street"],
        ["Ils n'aiment pas qu'on leur crie dessus / Ils n'aiment pas se faire crier dessus", "They don't like to be yelled at"],
        ["On m'est rentré dedans / Je me suis fait rentrer dedans", "I got hit"],
      ]},
      { t: "note", v: "*Tu t'es fait tirer dessus* is more spoken than *on t'a tiré dessus*; both mean \"you've been shot\"." },
    ],
  },
];

export const LESSON = {
  id: "voiepassive",
  title: "La voie passive",
  subtitle: "Was done, has been told: être + participle, se faire, and on",
  source: "LFL METHOD by Laura Caufour",
  cards: CARDS,
  notes: NOTES,
  // The order a student meets NEW cards in (reviews are FSRS's), as the
  // notes tabs run.
  teachingOrder: ["passive", "sefaire", "on", "dessus"],
  // The line shown above a grammar card saying what to type (see
  // src/lib/cardInstruction.js). The on and dessus sentences are two-way
  // phrase cards and carry none.
  instructions: {
    passive: "Fill the gap with the verb given, in the passive, in the tense named",
    sefaire: "Say the same thing with se faire and the infinitive",
  },
};

export default LESSON;
