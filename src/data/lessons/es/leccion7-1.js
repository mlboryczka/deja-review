// Lección 7, parte 1 · Describir a alguien — built from the Spanish course's
// Lección 7 part 1 sheets (adapted from Laura Caufour's LFL METHOD): the
// lesson (the profile of Andrés, a journalist from Mexico City; saber in
// the present; where the adjective goes) and the exercise sheet. The sheets
// have no answer key: every answer here was written for the app, as a
// Mexican Spanish teacher would mark it.
//
// Each entry is [front, back, category, section]. The front is always the
// Spanish.
//
// The students have done Lessons 1–6: ser, estar and ir, tener, regular
// verbs, possessives, querer and poder, no, hay, tú and usted, gustar. No
// card asks for more than that plus this part. Adjectives that change for a
// feminine or plural noun are part 2's subject; this part needs only the
// forms its own table shows (la próxima vez, muchos amigos, una buena idea).
//
// Card shapes:
//   "saber (presente) → yo" / "sé"            drill; its line comes from its shape
//   "bueno → un amigo" / "un buen amigo"      put the adjective in its place (ex. 2)
//   "grande → una casa" / "una casa grande"   grande in the place for the meaning the line gives
//   "¿Sabes cocinar? → Sí, …"                 answer yes in a full sentence (ex. 3)
//   "viajar" / "to travel"                    words and phrases, both ways round
//
// WHY THE ADJECTIVE'S PLACE IS ON EXACT CARDS. On a word or phrase card the
// marker accepts the right words in another order as close enough: shown "a
// blue shirt", "una azul camisa" passes for "una camisa azul". That is the
// very thing this part teaches, so ex. 2 is asked as "azul → una camisa",
// marked exactly. Grande too: on a phrase card "una grande casa" and "Es
// una grande idea" passed as close enough, so "grande → un amigo" (great)
// and "grande → una casa" (big) are exact, each with a line naming the
// meaning. "¡Es una gran idea!" stays a phrase card for its meaning.
//
// THE BEFORE-THE-NOUN CARDS TAKE ONLY THE PLACE THE LESSON TEACHES. "Un
// amigo bueno" is Spanish too, but means a kind-hearted friend, not "a good
// friend"; the line asks for the usual place. Her "a bad day" (un mal día)
// has no card, because "un día malo" is just as common in Mexico and a card
// would have to take both; "bueno → un amigo" and "primero → el día" ask for
// the dropped -o instead.
//
// WHAT WAS SAMPLED, AND WHAT WAS LEFT:
//   - Ex. 1 (write any sentence with each form of saber) has no single
//     answer. The drill asks for every form.
//   - Ex. 2: one card per rule. After the noun: azul and cultural (a
//     sociable girl, a generous friend and brown hair are the same rule).
//     Before it: bueno, primero, otro, próximo, mismo, mucho, and bueno
//     with a feminine noun ("una buena idea", her grammar note's example,
//     not in ex. 2). Grande is two exact cards, "un gran amigo" from her
//     table and "a big house" from ex. 2; "a great idea" is the phrase card
//     from ex. 6 no. 14. "the last time" is
//     próximo's card again; "new things" takes nuevas cosas and cosas
//     nuevas alike, so it can't test the place.
//   - Ex. 3 asks you to answer "diciendo la verdad", which has no single
//     answer. Four of its questions are answer-yes cards, one per verb that
//     matters here: saber twice (a fact, and know how to), tomar, and estar
//     de buen humor.
//   - Ex. 4 (write the question for an answer) has many right questions per
//     answer. Its two key questions, "¿Cómo es físicamente?" and "¿A qué se
//     dedica?", are phrase cards (her ex. 6 nos. 1 and 10).
//   - Ex. 5 is the word list. "new (masc. & fem.)" (nuevo) is on Lesson 3's
//     list and stays with it. "cultural" is a cognate, learned on its place
//     card. The two browns are learned with their noun, "el pelo castaño"
//     and "los ojos cafés", because castaño is for hair and café for eyes.
//     "to take" is tomar, with "(the metro, a bus)" because Lesson 3's "to
//     take" is llevar; tomar also takes "to drink", which it means in
//     Mexico. "a journalist" is "un periodista (male)", as Andrés is: the
//     marker can't take both un and una on one card. "to be in a good mood"
//     is a phrase card.
//   - Ex. 6 gave four phrase cards (nos. 1, 2, 10 and 14) and "Lleva una
//     camisa azul", from the profile, for no. 8. The others repeat a card
//     (no. 13 is estar de buen humor, no. 15 la próxima vez) or a word card.
//   - Ex. 7 tests memory of the profile; ex. 8 and 9 are audio.
//
// WHERE THE CARDS GO BEYOND HER SHEETS:
//   - Every answer card takes its answer with or without the Sí the prompt
//     already shows, and with or without yo. "¿Sabes dónde está el Zócalo?"
//     also takes "Sí, sé dónde está"; "¿Estás de buen humor hoy?" takes hoy
//     in either place or left out; "¿Tomas mucho el metro?" also takes "Sí,
//     lo tomo mucho".
//   - "Quiero conocer nuevos países" also takes "países nuevos", which the
//     marker accepts as the same words in another order; both are right.
//   - "¿A qué se dedica?" also takes "What do you do for a living?", the
//     usted question it most often is.
//
// Slips in the sheets: none found that a card or note uses (her note says
// bueno, malo and primero use "la forma completa en -a" with a feminine
// noun, as the notes do).
//
// THE NOTES are her lesson translated into English and rebuilt to the notes
// rules in .claude/skills/building-lessons/SKILL.md. Four tabs:
//   Describe     the profile's questions and sentences, and answering yes
//   Saber        her section 1, with her note on tomar
//   Adjectives   her section 2: after the noun, the table of adjectives
//                that go before it, otro and nuevo
//   Short forms  her section 2's buen, mal, primer and gran
// Sentences that are not on her sheet, kept because a card needs them:
//   - Describe: the lead (tener for hair and eyes, ser for looks,
//     character and job, llevar for clothes) and "A mood takes estar"; her
//     profile shows them without saying them. "Answering yes" (tú → yo, tus
//     → mis).
//   - Adjectives: "Like any adjective ending in -o, these take -a with a
//     feminine noun and -s with a plural one": her table shows la próxima
//     vez and muchos amigos, and the cards ask for them; the rule itself is
//     part 2's.
// No "The trap:" sentence: no one mistake in this part stands above the
// others.
//
// Checked 2026-10-22 by an independent reader: 7 fixes

export const CARDS = [
  // ── Her word list (ex. 5), first: the profile and the cards are made of it
  ["saber", "to know (a fact) / to know how to", "V", "words"],
  ["tomar", "to take (the metro, a bus) / to drink", "V", "words"],
  ["reír", "to laugh", "V", "words"],
  ["viajar", "to travel", "V", "words"],
  ["pasar tiempo", "to spend time", "V", "words"],
  ["hacer deporte", "to do sports / to play sports", "V", "words"],
  ["hacer bromas", "to make jokes / to joke around", "V", "words"],
  ["siempre", "always", "V", "words"],
  ["el frío", "the cold", "V", "words"],
  ["alto", "tall (masc.)", "V", "words"],
  ["azul", "blue", "V", "words"],
  ["generoso", "generous (masc.)", "V", "words"],
  ["egoísta", "selfish", "V", "words"],
  ["la gente", "people / the people", "V", "words"],
  ["un país", "a country", "V", "words"],
  ["las verduras", "vegetables / the vegetables", "V", "words"],
  ["un periodista", "a journalist (male)", "V", "words"],
  ["una camisa", "a shirt", "V", "words"],
  ["un canal de televisión", "a TV channel / a television channel", "V", "words"],
  ["por el mundo", "around the world", "V", "words"],
  ["el pelo castaño", "brown hair (not café)", "V", "words"],
  ["los ojos cafés", "brown eyes", "V", "words"],
  ["estar de buen humor", "to be in a good mood", "E", "words"],

  // ── Describing someone: the profile's questions (her ex. 6)
  ["¿Cómo es físicamente?", "What does he look like? / What does she look like?", "E", "phrases"],
  ["¿A qué se dedica?", "What does he do for a living? / What does she do for a living? / What do you do for a living? (usted)", "E", "phrases"],
  ["Lleva una camisa azul", "He's wearing a blue shirt / She's wearing a blue shirt", "E", "phrases"],
  ["Quiero conocer nuevos países", "I want to discover new countries / I want to get to know new countries", "E", "phrases"],

  // ── 1. Saber
  ["saber (presente) → yo", "sé", "G", "saber"],
  ["saber (presente) → tú", "sabes", "G", "saber"],
  ["saber (presente) → él/ella", "sabe", "G", "saber"],
  ["saber (presente) → nosotros", "sabemos", "G", "saber"],
  ["saber (presente) → ustedes", "saben", "G", "saber"],
  ["saber (presente) → ellos/ellas", "saben", "G", "saber"],

  // Ex. 3, asked as answer yes: tú → yo
  ["¿Sabes cocinar? → Sí, …", "Sí, sé cocinar / Sí, yo sé cocinar / Sé cocinar / Yo sé cocinar", "G", "yes"],
  ["¿Sabes dónde está el Zócalo? → Sí, …", "Sí, sé dónde está el Zócalo / Sí, yo sé dónde está el Zócalo / Sí, sé dónde está / Sí, yo sé dónde está / Sé dónde está el Zócalo / Yo sé dónde está el Zócalo / Sé dónde está / Yo sé dónde está", "G", "yes"],
  ["¿Tomas mucho el metro? → Sí, …", "Sí, tomo mucho el metro / Sí, yo tomo mucho el metro / Sí, lo tomo mucho / Sí, yo lo tomo mucho / Tomo mucho el metro / Yo tomo mucho el metro / Lo tomo mucho / Yo lo tomo mucho", "G", "yes"],
  ["¿Estás de buen humor hoy? → Sí, …", "Sí, estoy de buen humor hoy / Sí, hoy estoy de buen humor / Sí, estoy de buen humor / Sí, yo estoy de buen humor hoy / Sí, yo estoy de buen humor / Estoy de buen humor hoy / Hoy estoy de buen humor / Estoy de buen humor / Yo estoy de buen humor hoy / Yo estoy de buen humor", "G", "yes"],

  // ── 2. Where the adjective goes (ex. 2): after the noun, then the ones
  //    that go before it, one card per rule
  ["azul → una camisa", "una camisa azul", "G", "place"],
  ["cultural → un documental", "un documental cultural", "G", "place"],
  ["bueno → un amigo", "un buen amigo", "G", "place"],
  ["bueno → una idea", "una buena idea", "G", "place"],
  ["primero → el día", "el primer día", "G", "place"],
  ["otro → un país", "otro país", "G", "place"],
  ["próximo → la vez", "la próxima vez", "G", "place"],
  ["mismo → la cosa", "la misma cosa", "G", "place"],
  ["mucho → amigos", "muchos amigos", "G", "place"],

  // Grande: great before the noun, big after it (ex. 2, her table, ex. 6
  // no. 14). Each line says which meaning is wanted; exact, because a phrase
  // card passed "una grande casa"
  ["grande → un amigo", "un gran amigo", "G", "great"],
  ["grande → una casa", "una casa grande", "G", "big"],
  ["¡Es una gran idea!", "It's a great idea! / That's a great idea!", "E", "grande"],
];

export const NOTES = [
  {
    tab: "Describe",
    h: "1 · Describing someone",
    blocks: [
      { t: "lead", v: "To describe someone, Spanish uses tener for hair and eyes, ser for looks, character and job, and llevar for clothes: *tiene los ojos cafés*, \"he has brown eyes\"." },
      { t: "pairs", head: ["Spanish", "English"], v: [
        ["¿Cómo es físicamente?", "What does he look like?"],
        ["Tiene el pelo castaño y los ojos cafés", "He has brown hair and brown eyes"],
        ["Es alto", "He is tall"],
        ["En la foto, lleva una camisa azul", "In the picture, he's wearing a blue shirt"],
        ["¿Cómo es su carácter?", "What is his personality like?"],
        ["Es muy simpático", "He is very nice"],
        ["¿A qué se dedica?", "What does he do for a living?"],
        ["Es periodista", "He is a journalist"],
      ]},
      { t: "note", v: "A mood takes estar: *siempre está de buen humor*, \"he is always in a good mood\"." },
      { t: "sub", v: "Answering yes" },
      { t: "note", v: "Answer a question asked with tú using the yo form, and tus, \"your\", becomes mis, \"my\": *¿Pasas mucho tiempo con tus amigos? — Sí, paso mucho tiempo con mis amigos*, \"Do you spend a lot of time with your friends? Yes, I spend a lot of time with my friends\"." },
    ],
  },
  {
    tab: "Saber",
    h: "2 · Saber in the present",
    blocks: [
      { t: "lead", v: "**Saber**, \"to know\", is irregular only in the yo form: *sé*, \"I know\"." },
      { t: "table", bold: 0,
        cols: ["Spanish", "English"],
        rows: [
          ["yo sé", "I know"],
          ["tú sabes", "you know"],
          ["él, ella, usted sabe", "he, she knows · you know"],
          ["nosotros sabemos", "we know"],
          ["ellos, ellas, ustedes saben", "they know · you know"],
        ]},
      { t: "note", v: "Use saber for a piece of information: *no sé dónde está*, \"I don't know where it is\"." },
      { t: "note", v: "With a second verb, saber means \"to know how to\": *¿sabes cocinar?*, \"do you know how to cook?\"." },
      { t: "sub", v: "Tomar" },
      { t: "note", v: "Tomar, \"to take\", is a regular verb: *tomo, tomas, toma, tomamos, toman*. *Tomo el metro*, \"I take the metro\"." },
    ],
  },
  {
    tab: "Adjectives",
    h: "3 · Where the adjective goes",
    blocks: [
      { t: "lead", v: "In Spanish, the adjective usually goes after the noun: *una camisa azul*, \"a blue shirt\"." },
      { t: "pairs", head: ["Spanish", "English"], v: [
        ["una camisa azul", "a blue shirt"],
        ["un documental cultural", "a cultural documentary"],
        ["un amigo simpático", "a nice friend"],
        ["el pelo castaño", "brown hair"],
      ]},
      { t: "note", v: "After ser or estar, it simply follows the verb: *es alto*, \"he is tall\"; *está listo*, \"he is ready\"." },
      { t: "sub", v: "Before the noun" },
      { t: "note", v: "A few very common adjectives go before the noun. Learn these examples by heart." },
      { t: "table", bold: 0,
        cols: ["Spanish", "English"],
        rows: [
          ["un buen amigo", "a good friend"],
          ["un mal momento", "a bad time"],
          ["un gran amigo", "a great friend"],
          ["el primer día", "the first day"],
          ["la última vez", "the last time"],
          ["la próxima vez", "next time"],
          ["la misma cosa", "the same thing"],
          ["otro país", "another country"],
          ["muchos amigos", "a lot of friends"],
          ["nuevos países", "new countries"],
        ]},
      { t: "note", v: "Like any adjective ending in -o, these take -a with a feminine noun and -s with a plural one: *la próxima vez*, \"next time\"; *muchos amigos*, \"a lot of friends\"." },
      { t: "sub", v: "otro" },
      { t: "note", v: "Otro never takes un or una: *otro país*, \"another country\", never un otro país." },
      { t: "sub", v: "nuevo" },
      { t: "note", v: "Before the noun, nuevo means \"new\" or \"another\": *un nuevo trabajo*, \"a new job\". After it, it means \"brand-new\": *un carro nuevo*, \"a brand-new car\"." },
    ],
  },
  {
    tab: "Short forms",
    h: "4 · buen, mal, primer, gran",
    blocks: [
      { t: "lead", v: "Bueno, malo and primero drop their -o before a masculine noun in the singular: *un buen amigo*, \"a good friend\"; *el primer día*, \"the first day\"." },
      { t: "note", v: "With a feminine noun, they keep their full form: *una buena idea*, \"a good idea\"." },
      { t: "sub", v: "grande: great or big" },
      { t: "note", v: "Before a noun in the singular, grande becomes gran and means \"great\": *un gran amigo*, \"a great friend\"; *una gran idea*, \"a great idea\"." },
      { t: "note", v: "After the noun, grande means \"big\": *una casa grande*, \"a big house\"; *un amigo grande*, \"a big friend\"." },
    ],
  },
];

export const LESSON = {
  id: "leccion7-1",
  title: "Lesson 7 · Describing people, part 1",
  subtitle: "Describing someone, saber, and where the adjective goes",
  source: "Adapted from the LFL METHOD by Laura Caufour",
  cards: CARDS,
  notes: NOTES,
  // The order a student meets NEW cards in (reviews are FSRS's). Her word
  // list first, then the profile's phrases, which are made of it. Then her
  // sections in her order, each followed by the cards that practise it:
  // saber, then the answer-yes cards (two of them on saber); where the
  // adjective goes, then grande (great, then big) and the gran idea phrase.
  teachingOrder: [
    "words", "phrases",
    "saber", "yes",
    "place", "great", "big", "grande",
  ],
  // The line shown above a grammar card saying what to type
  // (src/lib/cardInstruction.js). The saber drill gets its line from its
  // shape; words and phrases carry none.
  instructions: {
    yes: "Answer yes, in a full sentence",
    place: "Add the adjective to the phrase, in its usual place and form, changing anything else that has to change",
    great: "Add grande to the phrase, so that it means great",
    big: "Add grande to the phrase, so that it means big",
  },
};

export default LESSON;
