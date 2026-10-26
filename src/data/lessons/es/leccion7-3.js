// Lesson 7 · Describing people, part 3 — built from the Spanish course's
// Lección 7, Parte 3 sheets (adapted from Laura Caufour's LFL METHOD): the
// lesson (Don Rafael's profile, ser or estar with an adjective, numbers 20 to
// 29, the translation) and the exercise sheet. There is no answer key: every
// answer here was written for this file, as a Mexican Spanish teacher would
// answer the exercises.
//
// The students have had Lessons 1 to 6 and Parts 1 and 2 of Lesson 7. Ser
// and estar themselves are Lessons 1 and 2; this part is the choice between
// them before an adjective.
//
// Each entry is [front, back, category, section]. The front is always the
// Spanish; see ../imperatif.js for why.
//
// Card shapes:
//   "Él está aburrido" / "He is bored"          Spanish shown, English typed: the meaning changes
//   two-way phrase (E) and word (V) cards for the profile and the ex. 3 list
//   "veintiuno" / "twenty-one"                     a number, as a word
//
// WHY SER OR ESTAR IS ON EXACT CARDS. Phrase cards are marked with typo
// tolerance, and "es" is two letters from "está": "Es de mal humor" passes
// for "Está de mal humor", and "Esta clase está aburrida" for "Esta clase es
// aburrida". That is the mistake this part is about, so every sentence where
// the choice matters is an exact "ser o estar" gap card, and no phrase card
// turns on it.
//
// WHY THE TWO MEANING CARDS ARE ENGLISH-ANSWERED AND SHORT. "He is bored" and
// "He is boring" are three letters apart, and on a short answer that is too
// far for typo tolerance, so "Él es aburrido" refuses "He is bored". On a
// longer sentence it isn't: "The children are boring" passes for "The
// children are bored", and "Doing sports is tired" for "Doing sports is
// tiring". So her ex. 4 "The children are bored" and "This class is boring",
// and the cansado pair, are tested only on the exact gap cards (Los niños
// están aburridos, El profesor es aburrido, Hacer deporte es cansado, Valeria
// está cansada).
//
// Sampled, not transcribed: each card teaches something no other card does.
//   - Ex. 1: eleven of her twelve sentences, every one a different reason for
//     the verb. "Valeria ___ rubia y ___ muy inteligente" (two gaps, both es)
//     is left out: "Don Rafael es muy divertido" and "Mis nietos son muy
//     activos" already ask for ser with a lasting trait.
//   - Ex. 2: 21, 22, 23 and 26 (the ones with a written accent or veintiuno's
//     -o), 27 and 29, and "21 años". 25 and 28 repeat the pattern.
//   - Ex. 4: "My grandfather has white hair and he wears glasses" becomes a
//     phrase card (tener el pelo blanco, llevar lentes). The rest repeat the
//     word cards or the gap cards, or are gustar (Lesson 6).
//
// Not made into cards: ex. 5 (dictation) needs the audio.
//
// Vocabulary is the ex. 3 list, less the words earlier lessons own: "to make
// jokes" (Part 1) and "retired" (Lesson 4). "Active" (activo) is left out as a
// cognate a card would teach nothing about; "Mis nietos ___ muy activos" uses
// it. "White hair", "glasses" and "to wear" are learnt in the ex. 4 phrase
// card "Mi abuelo tiene el pelo blanco y lleva lentes", plus "los lentes" on
// its own: "llevar" alone would clash with Lesson 3's llevar, "to take", and
// Part 1 already has "Lleva una camisa azul". That card says "(with llevar)"
// on its English side, since "usa lentes", just as good in Mexico, is too far
// from "lleva lentes" for typo tolerance. "A green shirt" is carded as
// "verde": Part 1 owns "una camisa". "Pink" takes
// rosa and rosado, both said in Mexico; the sheet has rosa. Adjectives are
// carded in the masculine with "(masc.)", as the French lessons do. "Listo"
// ("ready") is added from her grammar section 1, where it is one of the three
// words that always take estar, and from her ex. 1 "Nosotros ___ listos".
//
// Where this departs from the sheets:
//   - Ex. 1 "¿Por qué ___ solo, Rafael? (tú)" keeps her "(tú)" in the front:
//     Don Rafael is 67, and without it usted ("está") would be just as right.
//   - "21 → en letras" takes only veintiuno, the form for counting; veintiún
//     is asked on "21 años", where it is the only right answer.
//   - The two "Él es aburrido" / "Él está aburrido" cards are built from her
//     grammar section 1 ("Él es aburrido. → He is boring. Él está aburrido. →
//     He is bored."); they are not an exercise of hers.
//   - Her table heading prints "((what someone is like)" and "((how someone is
//     right now)" with a doubled bracket, and the example line "((Don Rafael
//     is very funny…)"; the notes don't copy it.
//
// The notes (Ser or estar · Two meanings · Numbers) are her grammar sections
// 1 and 2 in English. Sentences in them that are not hers, each there because
// a card needs it:
//   - Ser or estar: "De buen humor and de mal humor… always take estar too"
//     (her ex. 1 asks "Andrés siempre ___ de buen humor"; her lesson only
//     shows "Está de mal humor" in the estar column); "The trap" sentence
//     about siempre; and the
//     table of ser and estar in the present (Lessons 1 and 2), for the gap
//     cards that need estás, están, estamos and son.
//   - Two meanings: "With ser, the word says what something is like… With
//     estar, it says how someone feels", which her two examples only show.
// Her line on the accents of veintidós, veintitrés and veintiséis is left
// out: accents are not marked, and the table shows them.
//
// Checked 2026-10-22 by an independent reader: 2 fixes
//
// Taken out on 2026-10-25, at the owner's word ("the flashcards module for the
// spanish section should be all words and phrases, no grammar", "i have the
// exercises for those"): every grammar card, 20 here, with their sections,
// order and instruction lines. That is the drills, gaps and rewrites this
// header describes. The grammar is practised on the Exercises page.
//
// Kept as words and phrases, asked both ways round: the 9 that were grammar
// cards only in form (sentences to translate, the numbers).

export const CARDS = [
  // ── Ex. 3: describing Don Rafael, before the ser or estar cards that use them
  ["divertido", "funny / fun (masc.)", "V", "describe"],
  ["de mal humor", "in a bad mood", "V", "describe"],
  ["solo", "alone (masc.)", "V", "describe"],
  ["listo", "ready (masc.)", "V", "describe"],
  ["a veces", "sometimes", "V", "describe"],
  ["casi siempre", "most of the time / almost always", "V", "describe"],

  // ── 1, ¡Atención!: the meaning changes with the verb
  ["Él es aburrido", "He is boring / He's boring", "E", "meaning"],
  ["Él está aburrido", "He is bored / He's bored", "E", "meaning"],

  // ── Ex. 3: the rest of her list
  ["los lentes", "glasses / the glasses", "V", "words"],
  ["los pantalones", "pants / the pants / trousers", "V", "words"],
  ["los zapatos", "shoes / the shoes", "V", "words"],
  ["verde", "green", "V", "words"],
  ["rosa / rosado", "pink", "V", "words"],
  ["el tiempo libre", "free time / spare time", "V", "words"],
  ["un abuelo", "a grandfather / a grandpa", "V", "words"],
  ["los nietos", "the grandchildren / grandchildren / the grandkids", "V", "words"],
  ["arreglar cosas", "to fix things / to repair things", "V", "words"],
  ["el jardín", "the garden / the yard", "V", "words"],
  ["cuidar", "to take care of / to look after / to care for", "V", "words"],
  ["la política", "politics", "V", "words"],
  ["los quehaceres de la casa", "the housework / housework / the chores / household chores", "V", "words"],
  ["entonces", "so (therefore) / then", "V", "words"],

  // ── A phrase from her ex. 4
  ["Mi abuelo tiene el pelo blanco y lleva lentes", "My grandfather has white hair and wears glasses / My grandfather has white hair and he wears glasses / My grandpa has white hair and wears glasses (with llevar)", "E", "phrases"],

  // ── 2 and ex. 2: numbers 21 to 29
  ["veintiuno", "twenty-one / twenty one / 21", "V", "numbers"],
  ["veintidós", "twenty-two / twenty two / 22", "V", "numbers"],
  ["veintitrés", "twenty-three / twenty three / 23", "V", "numbers"],
  ["veintiséis", "twenty-six / twenty six / 26", "V", "numbers"],
  ["veintisiete", "twenty-seven / twenty seven / 27", "V", "numbers"],
  ["veintinueve", "twenty-nine / twenty nine / 29", "V", "numbers"],
  ["veintiún años", "twenty-one years / twenty one years / 21 years", "V", "numnoun"],
];

export const NOTES = [
  {
    tab: "Ser or estar",
    h: "1 · Ser or estar with an adjective",
    blocks: [
      { t: "lead", v: "With an adjective, *ser* says what someone or something is like, and *estar* says how they are at the moment: *es divertido*, \"he is funny\", but *está cansado*, \"he is tired\"." },
      { t: "pairs", head: ["With ser", "English"], v: [
        ["Es alto", "He is tall"],
        ["Es muy divertido", "He is very funny"],
        ["Es un abuelo muy activo", "He is a very active grandfather"],
        ["Es simpática", "She is nice"],
      ]},
      { t: "pairs", head: ["With estar", "English"], v: [
        ["Está cansado", "He is tired"],
        ["Está de mal humor", "He is in a bad mood"],
        ["Está solo", "He is alone"],
        ["Está contenta", "She is happy"],
      ]},
      { t: "note", v: "One person can be both: *Don Rafael es muy divertido, pero hoy está de mal humor*, \"Don Rafael is very funny, but today he is in a bad mood\"." },
      { t: "sub", v: "Always estar" },
      { t: "note", v: "*Jubilado*, \"retired\", and *casado*, \"married\", usually take estar: *Está jubilado*, \"He is retired\". In Mexico *es jubilado* and *soy casado* are heard too. *Listo* takes estar when it means \"ready\": *Estamos listos*, \"We are ready\"." },
      { t: "note", v: "*De buen humor* and *de mal humor*, \"in a good mood\" and \"in a bad mood\", always take estar too: *Hoy está de mal humor*, \"Today he is in a bad mood\"." },
      { t: "note", v: "**The trap:** *siempre*, \"always\", doesn't turn estar into ser: *Andrés siempre está de buen humor*, \"Andrés is always in a good mood\"." },
      { t: "sub", v: "Ser and estar in the present" },
      { t: "table", bold: 0,
        cols: ["Person", "ser", "estar"],
        rows: [
          ["yo", "soy", "estoy"],
          ["tú", "eres", "estás"],
          ["él / ella / usted", "es", "está"],
          ["nosotros", "somos", "estamos"],
          ["ellos / ellas / ustedes", "son", "están"],
        ]},
    ],
  },
  {
    tab: "Two meanings",
    h: "2 · Words that change meaning",
    blocks: [
      { t: "lead", v: "Some adjectives mean one thing with ser and another with estar: *es aburrido*, \"he is boring\", but *está aburrido*, \"he is bored\"." },
      { t: "pairs", head: ["Spanish", "English"], v: [
        ["Él es aburrido", "He is boring"],
        ["Él está aburrido", "He is bored"],
        ["Hacer deporte es cansado", "Doing sports is tiring"],
        ["Estoy cansado", "I am tired"],
      ]},
      { t: "note", v: "With ser, the word says what something is like: \"boring\", \"tiring\". With estar, it says how someone feels: \"bored\", \"tired\"." },
    ],
  },
  {
    tab: "Numbers",
    h: "3 · Numbers 20 to 29",
    blocks: [
      { t: "lead", v: "From 21 to 29, each number is one word, *veinti* and the unit: *veinticinco*, \"twenty-five\"." },
      { t: "table", bold: 1,
        cols: ["Number", "In words"],
        rows: [
          ["20", "veinte"],
          ["21", "veintiuno"],
          ["22", "veintidós"],
          ["23", "veintitrés"],
          ["24", "veinticuatro"],
          ["25", "veinticinco"],
          ["26", "veintiséis"],
          ["27", "veintisiete"],
          ["28", "veintiocho"],
          ["29", "veintinueve"],
        ]},
      { t: "sub", v: "21 before a noun" },
      { t: "note", v: "Before a masculine noun, *veintiuno* becomes *veintiún*: *veintiún años*, \"twenty-one years\"." },
    ],
  },
];

export const LESSON = {
  id: "leccion7-3",
  title: "Lesson 7 · Describing people, part 3",
  subtitle: "Ser or estar with an adjective, words that change meaning, and 20 to 29",
  source: "Adapted from the LFL METHOD by Laura Caufour",
  cards: CARDS,
  notes: NOTES,
  // The order a student meets NEW cards in. The grammar cards went on
  // 2026-10-25, and what is left keeps the order it had: the sheet's own, each
  // set of words before the phrases that use them. Reviews are unaffected;
  // FSRS schedules those.
  teachingOrder: [
    "describe", "meaning", "words", "phrases", "numbers", "numnoun",
  ],
};

export default LESSON;
