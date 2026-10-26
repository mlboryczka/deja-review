// Lesson 7 · Describing people, part 2 — built from the Spanish course's
// Lección 7, Parte 2 sheets (adapted from Laura Caufour's LFL METHOD): the
// lesson (Valeria's profile, grammar 1–3, the translation) and the exercise
// sheet. There is no answer key: every answer here was written for this file,
// as a Mexican Spanish teacher would answer the exercises.
//
// The students have had Lessons 1 to 6 and Part 1 of Lesson 7 (ser, estar,
// ir, tener, regular verbs, querer and poder, gustar, saber, where adjectives
// go). No card asks for more than that and this part.
//
// Each entry is [front, back, category, section]. The front is always the
// Spanish; see ../imperatif.js for why.
//
// Card shapes:
//   "entender (presente) → yo" / "entiendo"     the paradigm; the line above comes from the shape
//   "aprender → Nosotros ___ cocinar"            aprender a + a second verb (her ex. 8)
//   "azul → Tiene los ojos ___"                  the adjective in the form that fits (ex. 3)
//   "periodista → Mi esposa es ___"              a job after ser: no un / una
//   two-way phrase (E) and word (V) cards for the profile and the ex. 7 list
//
// WHY THE ADJECTIVES AND JOBS ARE ON EXACT CARDS. Phrase cards are marked with
// typo tolerance: "Es una médica" passes for "Es médica" in a long sentence,
// and "rubio" is one letter from "rubia". Those are the very mistakes this
// part is about, so every agreement and every job is an exact gap card, and
// the phrase cards are there for meaning.
//
// Sampled, not transcribed: each card teaches something no other card does.
//   - Ex. 1 and 2 ("write a sentence with each form") are the drills. Entender
//     changes its e to ie, so it gets all six persons. Aprender is regular,
//     with the endings of comer from Lesson 4, so it gets four: yo, tú,
//     nosotros and ellos/ellas. Her ex. 2 asks ellos, tú, ustedes and yo;
//     ustedes is swapped for nosotros because its form is the ellos form.
//   - Ex. 3: nine of her twelve, one per rule: -o (rubio, blanco), -e
//     (inteligente in the plural, amable for a woman), a consonant (azul),
//     -z (feliz), -or (trabajador), a nationality (español), and a man and a
//     woman together (Valeria y su esposo, generosos). "Mi hermana es un poco
//     tímida", "Las casas son grandes" and "Mis papás son muy simpáticos"
//     repeat rubia, inteligentes and generosos.
//   - Ex. 4 (yes): tú → yo (entiendo), ustedes → nosotros (cocinamos), and
//     tus → mis (aprendo bien mis lecciones). Ex. 5 (no): the "no, no" answer
//     (no entiendo), a name (Valeria no es estadounidense), and a feminine
//     adjective kept in the answer (no es muy tímida).
//   - Ex. 8: "We are learning to cook" is the aprender a card; "Her daughter
//     is a doctor" and "Valeria is a kind and hard-working doctor" are the two
//     job phrases. The rest repeat other cards or are other lessons' grammar
//     (gustar, ir a, estar).
//
// Not made into cards: ex. 6 (write the question for each answer) has many
// right questions for each answer, so it can't be marked by typing; ex. 9
// (questions on the text) tests the story, not Spanish; ex. 10 (dictation)
// and 11–12 (oral answers) need the audio.
//
// Vocabulary is the ex. 7 list, less the words earlier lessons own: "on
// Mondays" and "on Tuesdays" (the days and los + day are Lesson 6), "to do
// sports" (Part 1), "hair" and "the eyes" (Part 1's "el pelo castaño" and
// "los ojos cafés"), and "other" (otro, in Part 1's table of adjectives that
// go before the noun; "the other days" is kept, as los otros días). "Tiring"
// is left to Part 3, where es cansado and está cansado are taught: on a
// phrase card "It's very tired" passes for "It's very tiring", and "Está muy
// cansado" for "Es muy cansado". Adjectives are carded in the masculine with
// "(masc.)", as the French lessons do; her list asks for both forms, and the
// feminine is what the ex. 3 cards drill. Nouns carry their article. "A
// patient" is "un paciente", marked "(male)" since la paciente is a woman.
//
// Where this departs from the sheets:
//   - The job gap cards are not one of her exercises. They are built from her
//     grammar section 3: "Es médica", médico → médica, profesor → profesora,
//     and "las profesiones en -ista no cambian".
//   - The yes / no cards take the answer with and without the Sí or No the
//     front already shows, and with and without the subject pronoun. "¿Su
//     hermana es muy tímida?" is your sister (usted) or her sister, so mi
//     hermana and su hermana are both right. "¿Ustedes cocinan juntos?" also
//     takes "juntas", for a group of women.
//   - Her grammar section 3 prints "((She is a very good doctor.)" with a
//     doubled bracket; the notes don't copy it.
//
// The notes (Verbs · Adjectives · Jobs) are her grammar sections 1 to 3 in
// English. Sentences in them that are not hers, each there because a card
// needs it:
//   - Verbs: "Spanish has one present tense where English has two, so
//     aprendemos is "we learn" and "we are learning"" (her ex. 8 asks "We are
//     learning to cook"); the two notes under "Answering yes" and the one
//     under "Answering no", which her ex. 4 and 5 only show (the "no, no" rule
//     is from Lesson 5).
//   - Adjectives: "in the plural, add -s after a vowel and -es after a
//     consonant", which her tables show; and "-z becomes -ces", which her
//     table shows with feliz.
//   - Jobs: "The trap" sentence; and the English column of the job table.
// Her "inglés → inglesa, sin acento" is left out: no card uses it.
//
// Checked 2026-10-22 by an independent reader: 2 fixes
//
// Taken out on 2026-10-25, at the owner's word ("don't test simple
// masculine/fem matching it's too easy"): the cards that only
// made a word feminine: rubia, blanca, trabajadoras and españolas from ex. 3,
// and the job cards médica and profesora. The ex. 3 cards left are the ones
// where the ending doesn't simply follow the woman: inteligentes, amable,
// azules, felices and generosos.
//
// Taken out on 2026-10-25, at the owner's word ("Yes, take the yes-or-no
// flashcards like "¿Eres estadounidense? → Sí, …" out of the Spanish lessons
// too"): the 6 cards that answered a question with yes or no in a full
// sentence (sections "yes" and "no").

export const CARDS = [
  // ── 1. Entender (e → ie) and aprender (regular) in the present
  ["entender (presente) → yo", "entiendo", "G", "forms"],
  ["entender (presente) → tú", "entiendes", "G", "forms"],
  ["entender (presente) → él/ella", "entiende", "G", "forms"],
  ["entender (presente) → nosotros", "entendemos", "G", "forms"],
  ["entender (presente) → ustedes", "entienden", "G", "forms"],
  ["entender (presente) → ellos/ellas", "entienden", "G", "forms"],
  ["aprender (presente) → yo", "aprendo", "G", "forms"],
  ["aprender (presente) → tú", "aprendes", "G", "forms"],
  ["aprender (presente) → nosotros", "aprendemos", "G", "forms"],
  ["aprender (presente) → ellos/ellas", "aprenden", "G", "forms"],

  // ── Ex. 7: describing Valeria. Adjectives in the masculine; ex. 3 drills
  //    the other forms
  ["tímido", "shy (masc.)", "V", "describe"],
  ["rubio", "blond (masc.)", "V", "describe"],
  ["inteligente", "smart / intelligent", "V", "describe"],
  ["amable", "kind / nice", "V", "describe"],
  ["dulce", "sweet", "V", "describe"],
  ["trabajador", "hard-working (masc.)", "V", "describe"],
  ["blanco", "white (masc.)", "V", "describe"],

  // ── Ex. 7: the rest of her list
  ["cocinar", "to cook", "V", "words"],
  ["leer", "to read", "V", "words"],
  ["quedarse en casa", "to stay at home / to stay home", "V", "words"],
  ["una comida", "a meal", "V", "words"],
  ["el hospital", "the hospital", "V", "words"],
  ["un consultorio", "a doctor's office", "V", "words"],
  ["un paciente", "a patient (male)", "V", "words"],
  ["un trabajo", "a job", "V", "words"],
  ["cuando", "when", "V", "words"],
  ["los otros días", "the other days", "V", "words"],

  // ── Phrases from the profile and her grammar
  ["No entiendo la pregunta", "I don't understand the question", "E", "phrases"],
  ["Es rubia y tiene los ojos azules", "She is blond and has blue eyes / She's blond and she has blue eyes", "E", "phrases"],

  // ── Aprender a + a second verb (her ex. 8, "We are learning to cook")
  ["aprender → Nosotros ___ cocinar", "aprendemos a", "G", "aprendera"],

  // ── 2 and ex. 3: the adjective takes the gender and number of its noun
  ["inteligente → Sus hijos son muy ___", "inteligentes", "G", "agreement"],   // -e: plural -s
  ["amable → Es una mujer muy ___", "amable", "G", "agreement"],               // -e: no change for a woman
  ["azul → Tiene los ojos ___", "azules", "G", "agreement"],                   // consonant: plural -es
  ["feliz → Los niños están ___", "felices", "G", "agreement"],                // -z → -ces
  ["generoso → Valeria y su esposo son ___", "generosos", "G", "agreement"],  // a man and a woman: masculine plural

  // ── 3. Jobs: no un / una after ser, and the form for a woman
  ["periodista → Mi esposa es ___", "periodista", "G", "jobs"],
  ["Su hija es médica", "Her daughter is a doctor / His daughter is a doctor", "E", "jobphrases"],
  ["Valeria es una médica amable y trabajadora", "Valeria is a kind and hard-working doctor", "E", "jobphrases"],
];

export const NOTES = [
  {
    tab: "Verbs",
    h: "1 · Entender and aprender",
    blocks: [
      { t: "lead", v: "*Entender*, \"to understand\", changes its e to ie in every form except nosotros; *aprender*, \"to learn\", is regular." },
      { t: "table", bold: 0,
        cols: ["Person", "entender · to understand", "aprender · to learn"],
        rows: [
          ["yo", "entiendo", "aprendo"],
          ["tú", "entiendes", "aprendes"],
          ["él / ella / usted", "entiende", "aprende"],
          ["nosotros", "entendemos", "aprendemos"],
          ["ellos / ellas / ustedes", "entienden", "aprenden"],
        ]},
      { t: "pairs", head: ["Spanish", "English"], v: [
        ["No entiendo la pregunta", "I don't understand the question"],
        ["Mis amigos entienden bien el español", "My friends understand Spanish well"],
      ]},
      { t: "sub", v: "Learning to do something" },
      { t: "note", v: "Before a second verb, *aprender* takes *a*, and the second verb stays in its dictionary form: *Aprendo a cocinar*, \"I'm learning to cook\"." },
      { t: "note", v: "Spanish has one present tense where English has two, so *aprendemos* is \"we learn\" and \"we are learning\": *Aprendemos a cocinar*, \"We are learning to cook\"." },
      { t: "sub", v: "Answering yes" },
      { t: "note", v: "Answer a question asked with tú in the yo form, and change tus (\"your\") to mis (\"my\"): *¿Aprendes bien tus lecciones?* → *Sí, aprendo bien mis lecciones*, \"Do you learn your lessons well? Yes, I learn my lessons well\"." },
      { t: "note", v: "Answer a question asked with ustedes in the nosotros form: *¿Ustedes cocinan juntos?* → *Sí, cocinamos juntos*, \"Do you guys cook together? Yes, we cook together\"." },
      { t: "sub", v: "Answering no" },
      { t: "note", v: "To answer no, say no twice: the first answers the question, and the second goes before the verb: *¿Entiendes la pregunta?* → *No, no entiendo la pregunta*, \"Do you understand the question? No, I don't understand the question\"." },
      { t: "table", bold: 1,
        cols: ["Question", "Answer"],
        rows: [
          ["¿Valeria es estadounidense?", "No, no es estadounidense"],
          ["¿Su hermana es muy tímida?", "No, no es muy tímida"],
        ]},
    ],
  },
  {
    tab: "Adjectives",
    h: "2 · Adjectives: masculine, feminine, plural",
    blocks: [
      { t: "lead", v: "An adjective changes to match its noun, for a man or a woman and for one or more: *un niño alto*, \"a tall boy\", but *unas niñas altas*, \"some tall girls\"." },
      { t: "table", caption: "Ending in -o", bold: 0,
        cols: ["Masculine", "Feminine", "Masc. plural", "Fem. plural"],
        rows: [
          ["alto", "alta", "altos", "altas"],
          ["rubio", "rubia", "rubios", "rubias"],
          ["blanco", "blanca", "blancos", "blancas"],
        ]},
      { t: "sub", v: "Ending in -e or a consonant" },
      { t: "note", v: "Most adjectives ending in -e or a consonant are the same for a man and a woman. In the plural, add -s after a vowel and -es after a consonant: *inteligente → inteligentes*, \"smart\"; *azul → azules*, \"blue\"." },
      { t: "note", v: "A final -z becomes -ces: *feliz → felices*, \"happy\"." },
      { t: "table", bold: 0,
        cols: ["Masculine", "Feminine", "Masc. plural", "Fem. plural"],
        rows: [
          ["inteligente", "inteligente", "inteligentes", "inteligentes"],
          ["azul", "azul", "azules", "azules"],
          ["feliz", "feliz", "felices", "felices"],
        ]},
      { t: "sub", v: "Ending in -or, and nationalities" },
      { t: "note", v: "Words ending in -or, and nationalities ending in a consonant, add -a for a woman: *trabajador → trabajadora*, \"hard-working\"; *español → española*, \"Spanish\". Nationalities ending in -e stay the same: *estadounidense*, \"American\"." },
      { t: "table", bold: 0,
        cols: ["Masculine", "Feminine", "Masc. plural", "Fem. plural"],
        rows: [
          ["trabajador", "trabajadora", "trabajadores", "trabajadoras"],
          ["español", "española", "españoles", "españolas"],
        ]},
      { t: "sub", v: "A man and a woman together" },
      { t: "note", v: "For a man and a woman together, use the masculine plural: *Valeria y su esposo son generosos*, \"Valeria and her husband are generous\"." },
    ],
  },
  {
    tab: "Jobs",
    h: "3 · Saying what someone does",
    blocks: [
      { t: "lead", v: "After *ser*, a job takes no *un* or *una*: *Es médica*, \"She is a doctor\"." },
      { t: "pairs", head: ["Spanish", "English"], v: [
        ["Es médica", "She is a doctor"],
        ["Soy periodista", "I am a journalist"],
        ["Su hija es médica", "Her daughter is a doctor"],
      ]},
      { t: "note", v: "**The trap:** English says \"a doctor\", but Spanish says *es médica*, not es una médica." },
      { t: "sub", v: "With a describing word" },
      { t: "note", v: "When a word describes the job, *un* or *una* comes back: *Es una médica muy buena*, \"She is a very good doctor\"; *Valeria es una médica amable y trabajadora*, \"Valeria is a kind and hard-working doctor\"." },
      { t: "sub", v: "A job for a woman" },
      { t: "note", v: "Most jobs have a form for a woman: -o becomes -a, and -or adds -a. Jobs ending in -ista stay the same: *el periodista*, *la periodista*, \"the journalist\"." },
      { t: "table", bold: 1,
        cols: ["Man", "Woman", "English"],
        rows: [
          ["médico", "médica", "doctor"],
          ["profesor", "profesora", "teacher"],
          ["enfermero", "enfermera", "nurse"],
          ["periodista", "periodista", "journalist"],
        ]},
    ],
  },
];

export const LESSON = {
  id: "leccion7-2",
  title: "Lesson 7 · Describing people, part 2",
  subtitle: "Entender and aprender, adjectives for a man, a woman or several, and jobs",
  source: "Adapted from the LFL METHOD by Laura Caufour",
  cards: CARDS,
  notes: NOTES,
  // The order a student meets NEW cards in. The two verbs first; then the
  // words for describing Valeria and the rest of her list, before the cards
  // that need them (ex. 4 and 5 ask about cooking, reading and a shy
  // sister); then aprender a and the yes / no answers, which practise the
  // verbs; then the adjective forms, once the adjectives are known; jobs
  // last, since they lean on the woman's form. Reviews are unaffected; FSRS
  // schedules those.
  teachingOrder: [
    "forms",
    "describe", "words", "phrases",
    "aprendera",
    "agreement",
    "jobs", "jobphrases",
  ],
  // The line above a grammar card saying what to type
  // (src/lib/cardInstruction.js). The drills get theirs from their shape.
  instructions: {
    aprendera: "Fill the gap with aprender in the present, and the word that joins it to the next verb",
    agreement: "Write the word given in the form that fits the sentence",
    jobs: "Fill the gap with the job given, in the form that fits the sentence",
  },
};

export default LESSON;
