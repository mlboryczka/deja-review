// Lesson 23 · Travel, por and para — built from the Spanish course's Lección
// 23 sheets, adapted from Laura Caufour's LFL METHOD: the lesson (James and
// Jessica have dinner with Emilia and Hugo and talk about their travels;
// grammar 1–6) and the exercise sheet. The Spanish course has no answer key,
// so every answer here was written for this file, the way a Mexican Spanish
// teacher would mark it.
// Checked 2026-10-22 by an independent reader: 9 fixes.
//
// Each entry is [front, back, category, section]. The front is always the
// Spanish; see imperatif.js for why.
//
// Card shapes:
//   "leer (pretérito) → él/ella" / "leyó"               drill; its line comes from its shape
//   "en o a → Vamos ___ Brasil este verano"             pick the word (her section 2)
//   "por o para → Hugo fue a Denver ___ trabajo"        pick the word (her ex. 4)
//   "mío → Esta maleta es ___" / "mía"                  the possessive made to match (her ex. 5)
//   "mi pasaporte → sin el sustantivo" / "el mío"       the possessive standing for the noun
//   "¿Ya leíste el libro de Lucía? → sí"                answer yes or no in a full sentence (her ex. 1–2)
//   two-way phrase (E) and word (V) cards for the dialogue and her ex. 3 list
//
// WHY LEER'S SIX PERSONS ARE IN THE PRETERITE. Leer and escribir are both in
// Lesson 4's list of regular verbs, so their present is not new. What is new
// is leer's preterite, with its y (leyó, leyeron), so that is the six-person
// drill. Escribir is regular apart from its participle, escrito, which
// is a Lesson 21 card; it gets one card each for the three other tenses in
// her table that a card can ask for (preterite, perfect, conditional), and
// leer one for the perfect (leído).
//
// WHY POR AND PARA ARE EXACT CARDS. A phrase card is marked with typo
// tolerance, and "por" and "para" are short words in long sentences: "Hugo
// fue a Denver para trabajo" would pass on a phrase card. So every choice is
// a gap card. The same goes for en or a, and for the possessive's ending
// (mío or mía).
//
// Sampled, not transcribed: each card teaches something no other card does.
//   - Ex. 4 (por or para, 20 items): twelve, at least one for every use in
//     her table. "Caminamos ___ la playa" is left out: "caminamos para la
//     playa" ("toward the beach") is also said in Mexico. "Pasamos ___ Denver
//     para ir a las montañas Rocosas" stands for "the way through" instead.
//   - Ex. 5 (translate with a possessive): four of her sentences as gaps after
//     ser (mía, nuestros, tuya, suya), and four as the possessive standing for
//     the noun (el mío, los tuyos, la nuestra, el de James).
//   - Ex. 1 and 2 (answer yes, answer no; the same twenty questions): four
//     each, one per thing it adds: the perfect with alguna vez and siempre
//     (les → nos), the conditional, ya + preterite; and nunca, todavía no +
//     haber, alguien → nadie, iba a with tu → mi and ustedes → nosotros.
//   - Ex. 6 (translations into Spanish) is sampled as phrase cards.
//
// Not made into cards: ex. 7 (dictation) and 8–10 (oral answers) need the
// audio. From her ex. 3 list, the words an earlier lesson already teaches:
// the last time (Lessons 7 and 20), cheap and very expensive (Lesson 20),
// almost (Lesson 20), so (Lessons 7 and 9), last year (Lesson 9), How cool!
// (Lesson 12), How do you spell it? (Lesson 1), it's called… (Lesson 4's "her
// name is"), very close to (cerca de, Lessons 3–5). "Mine" is the possessive
// cards' job, "for work" a por card, and "we were going to…" and "you
// should… (ustedes)" are phrase cards ("Íbamos a ir a Brasil", "Deberían
// echarle un ojo"), which is also where "to take a look" is learned. "Europe"
// (Europa) is left out: there is nothing in it to learn.
//
// Where this departs from the sheets:
//   - "las montañas Rocosas" is her name for the Rocky Mountains. In Mexico
//     they are more often "las Montañas Rocallosas"; that answer passes as
//     close enough on the word card.
//   - Her ex. 5 "Are these books yours? (ustedes)" is not used; "¿Esa bici es
//     ___?" is her "Is that bike yours? (tú)".
//   - "tus papás → sin el sustantivo" is her ex. 5 "Where are your parents?
//     Mine are in Puebla", turned round to ask for los tuyos; "nuestra casa"
//     stands for her "Our apartment is small; yours is very big", with a
//     feminine noun so that la nuestra is asked once.
//   - Answer cards take every answer a teacher would: with and without Sí or
//     No, with and without the subject, and the other word order. "¿Alguna
//     vez has ido a Nueva York? → sí" also takes the preterite ("Sí, fui a
//     Nueva York"), as Latin Americans often answer; "¿Ya compraste tus
//     boletos…? → no" also takes the Mexican "todavía no compro". "Ningún
//     libro" is accepted beside "un libro".
//   - "¿Siempre les ha encantado viajar? → sí" also takes "A nosotros siempre
//     nos ha encantado viajar": the a nosotros is how a speaker stresses who.

export const CARDS = [
  // ── 1. Leer: regular, but y in the preterite
  ["leer (pretérito) → yo", "leí", "G", "leer"],
  ["leer (pretérito) → tú", "leíste", "G", "leer"],
  ["leer (pretérito) → él/ella", "leyó", "G", "leer"],
  ["leer (pretérito) → nosotros", "leímos", "G", "leer"],
  ["leer (pretérito) → ustedes", "leyeron", "G", "leer"],
  ["leer (pretérito) → ellos/ellas", "leyeron", "G", "leer"],
  ["leer (pretérito perfecto) → tú", "has leído", "G", "escribir"],
  ["escribir (pretérito) → él/ella", "escribió", "G", "escribir"],
  ["escribir (pretérito perfecto) → yo", "he escrito", "G", "escribir"],
  ["escribir (condicional) → yo", "escribiría", "G", "escribir"],
  ["¿Leíste mi mensaje?", "Did you read my message? / Did you read my text? (tú)", "E", "leerfrases"],
  ["Le escribí un mensaje a Lucía", "I wrote Lucía a message / I wrote a message to Lucía", "E", "leerfrases"],

  // ── Ex. 3: her word list
  ["una pareja", "a couple", "V", "vocab"],
  ["las montañas Rocosas", "the Rocky Mountains / the Rockies", "V", "vocab"],
  ["una página", "a website / a web page / a page", "V", "vocab"],
  ["una caminata", "a hike / a walk", "V", "vocab"],
  ["Estados Unidos", "the United States / the US", "V", "vocab"],
  ["un pasaporte", "a passport", "V", "vocab"],
  ["un boleto de avión", "a plane ticket", "V", "vocab"],
  ["cada año", "every year / each year", "V", "vocab"],
  ["en cambio", "on the other hand / whereas / instead", "V", "vocab"],
  ["todo junto", "all one word / all together (when spelling)", "V", "vocab"],
  ["los viajes", "travels / trips", "V", "vocab"],

  // ── 2. Countries and cities: en for where you are, a for where you go
  ["en o a → Vivimos ___ México", "en", "G", "paises"],
  ["en o a → Vamos ___ Brasil este verano", "a", "G", "paises"],
  ["en o a → Estuvimos dos semanas ___ Oaxaca", "en", "G", "paises"],
  ["en o a → Volvimos ___ Nueva York", "a", "G", "paises"],

  // ── 3 and ex. 4: por or para. The use each one stands for is in the comment
  ["por o para → Esta página es ___ comprar boletos baratos", "para", "G", "porpara"], // a goal
  ["por o para → Esta medicina es ___ la garganta", "para", "G", "porpara"],          // a goal
  ["por o para → Mañana salimos ___ Brasil", "para", "G", "porpara"],                 // where you're heading
  ["por o para → Este regalo es ___ ti", "para", "G", "porpara"],                     // a person
  ["por o para → Necesito el pasaporte ___ el viernes", "para", "G", "porpara"],      // a deadline
  ["por o para → Hugo fue a Denver ___ trabajo", "por", "G", "porpara"],              // the cause
  ["por o para → Gracias ___ la información", "por", "G", "porpara"],                 // the cause
  ["por o para → Pasamos ___ Denver para ir a las montañas Rocosas", "por", "G", "porpara"], // the way through
  ["por o para → Compramos los boletos ___ internet", "por", "G", "porpara"],         // the means
  ["por o para → Pagué cinco mil pesos ___ el boleto", "por", "G", "porpara"],        // a price
  ["por o para → Tomo clases dos veces ___ semana", "por", "G", "porpara"],           // how often
  ["por o para → Me gusta caminar ___ la mañana", "por", "G", "porpara"],             // part of the day

  // ── 4 and ex. 5: mío, tuyo, suyo, nuestro match the thing owned
  ["mío → Esta maleta es ___", "mía", "G", "posesivos"],
  ["nuestro → Estos boletos son ___", "nuestros", "G", "posesivos"],
  ["tuyo → ¿Esa bici es ___?", "tuya", "G", "posesivos"],
  ["suyo → Esta idea no es mía, es ___", "suya", "G", "posesivos"],
  ["mi pasaporte → sin el sustantivo", "el mío", "G", "sinsustantivo"],
  ["tus papás → sin el sustantivo", "los tuyos", "G", "sinsustantivo"],
  ["nuestra casa → sin el sustantivo", "la nuestra", "G", "sinsustantivo"],
  ["el pasaporte de James → sin el sustantivo", "el de James / el suyo", "G", "sinsustantivo"],
  ["Un amigo mío", "A friend of mine", "E", "posfrases"],

  // ── 5. Review: the perfect; and the dialogue's iba a
  ["Nunca hemos ido a Europa", "We've never been to Europe / We have never been to Europe (with ir)", "E", "repaso"],
  ["Siempre nos ha encantado viajar", "We've always loved traveling / We have always loved to travel / We've always loved to travel", "E", "repaso"],
  ["Íbamos a ir a Brasil", "We were going to go to Brazil", "E", "repaso"],
  ["Deberían echarle un ojo", "You should take a look (ustedes) / You guys should take a look", "E", "repaso"],

  // ── Ex. 1 and 2: answer yes or no, keeping the noun
  ["¿Alguna vez has ido a Nueva York? → sí", "Sí, he ido a Nueva York / He ido a Nueva York / Sí, yo he ido a Nueva York / Yo he ido a Nueva York / Sí, ya he ido a Nueva York / Ya he ido a Nueva York / Sí, he estado en Nueva York / He estado en Nueva York / Sí, yo he estado en Nueva York / Yo he estado en Nueva York / Sí, fui a Nueva York / Fui a Nueva York / Sí, ya fui a Nueva York", "G", "respuestas"],
  ["¿Siempre les ha encantado viajar? → sí", "Sí, siempre nos ha encantado viajar / Siempre nos ha encantado viajar / Sí, a nosotros siempre nos ha encantado viajar / A nosotros siempre nos ha encantado viajar", "G", "respuestas"],
  ["Con boletos más baratos, ¿irías a Brasil? → sí", "Sí, iría a Brasil / Iría a Brasil / Sí, yo iría a Brasil / Yo iría a Brasil / Sí, con boletos más baratos iría a Brasil / Con boletos más baratos iría a Brasil / Sí, con boletos más baratos yo iría a Brasil / Con boletos más baratos yo iría a Brasil / Sí, iría a Brasil con boletos más baratos / Iría a Brasil con boletos más baratos", "G", "respuestas"],
  ["¿Ya leíste el libro de Lucía? → sí", "Sí, ya leí el libro de Lucía / Ya leí el libro de Lucía / Sí, yo ya leí el libro de Lucía / Yo ya leí el libro de Lucía / Sí, leí el libro de Lucía / Leí el libro de Lucía / Sí, ya he leído el libro de Lucía / Ya he leído el libro de Lucía", "G", "respuestas"],
  ["¿Alguna vez has escrito un libro? → no", "No, nunca he escrito un libro / Nunca he escrito un libro / No, yo nunca he escrito un libro / Yo nunca he escrito un libro / No, no he escrito nunca un libro / No he escrito nunca un libro / No, nunca he escrito ningún libro / Nunca he escrito ningún libro / No, no he escrito ningún libro", "G", "respuestas"],
  ["¿Ya compraste tus boletos para Italia? → no", "No, todavía no he comprado mis boletos para Italia / Todavía no he comprado mis boletos para Italia / No, yo todavía no he comprado mis boletos para Italia / No, no he comprado mis boletos para Italia todavía / No, todavía no he comprado mis boletos / Todavía no he comprado mis boletos / No, todavía no compro mis boletos para Italia / Todavía no compro mis boletos para Italia / No, todavía no compro mis boletos", "G", "respuestas"],
  ["¿Conocías a alguien cuando llegaste allá? → no", "No, no conocía a nadie cuando llegué allá / No conocía a nadie cuando llegué allá / No, yo no conocía a nadie cuando llegué allá / No, cuando llegué allá no conocía a nadie / Cuando llegué allá no conocía a nadie / No, no conocía a nadie / No conocía a nadie", "G", "respuestas"],
  ["¿Tu hija iba a ir con ustedes? → no", "No, mi hija no iba a ir con nosotros / Mi hija no iba a ir con nosotros / No, no iba a ir con nosotros / No iba a ir con nosotros / No, ella no iba a ir con nosotros / Ella no iba a ir con nosotros / No, mi hija no iba a ir / No, ella no iba a ir / No, no iba a ir", "G", "respuestas"],
];

// The notes: her grammar sections 1 to 5, translated into English and
// restructured to the notes rules in .claude/skills/building-lessons/SKILL.md.
// Five tabs:
//   Leer       section 1: leer's preterite with y, escribir, their participles
//              and conditionals, and what comes after each verb
//   Places     section 2: en or a with countries and cities; no article
//   Por, para  section 3: her table split in two, one table per word, and
//              her ATTENTION box on "for two weeks"
//   Mine       section 4
//   Perfect    section 5, the review; iba a from section 6; answering
// No word list. Her section 6 ("En el diálogo") is left out except iba a,
// which a phrase card and an answer card use; echarle un ojo and ¡Qué padre!
// are a phrase card and an earlier lesson's.
// There is no "The trap:" here: none of her boxes is a single commonest
// mistake, and por / para is the whole of section 3.
//
// Sentences that are not hers, kept because cards need them:
//   - Leer: "In the conditional, both keep the whole verb and add -ía", for
//     "escribir (condicional) → yo"; her table shows it, her text doesn't.
//   - Mine: "To avoid saying the noun again, put el, la, los or las in
//     front, matching the noun", for the "sin el sustantivo" cards; her
//     section 4 shows it only in "el mío y el de James".
//   - Perfect, "Answering": all three notes. Her ex. 1 and 2 ask for it; her
//     lesson never says how the answer changes.
//   - Por, para: "Esta medicina es para la garganta" is her ex. 4 item, added
//     to the para table under "a goal" so its card has its rule there.
export const NOTES = [
  {
    tab: "Leer",
    h: "1 · Leer and escribir",
    blocks: [
      { t: "lead", v: "Leer, \"to read\", is regular except in the preterite, where -ió and -ieron become -yó and -yeron: *leyó*, \"he read\"; *leyeron*, \"they read\"." },
      { t: "table", caption: "Preterite", bold: 1,
        cols: ["Person", "leer · to read", "escribir · to write"],
        rows: [
          ["yo", "leí", "escribí"],
          ["tú", "leíste", "escribiste"],
          ["él, ella, usted", "leyó", "escribió"],
          ["nosotros", "leímos", "escribimos"],
          ["ustedes, ellos, ellas", "leyeron", "escribieron"],
        ]},
      { t: "note", v: "Their participles are leído and escrito: *¿has leído el libro?*, \"have you read the book?\"; *he escrito un mensaje*, \"I have written a message\"." },
      { t: "note", v: "In the conditional, both keep the whole verb and add -ía: *leería*, \"I would read\"; *con más tiempo, escribiría un libro*, \"with more time, I would write a book\"." },
      { t: "sub", v: "What you read, who you write to" },
      { t: "note", v: "What you read or write comes straight after the verb: *¿leíste mi mensaje?*, \"did you read my message?\"." },
      { t: "note", v: "To write to someone, put le before the verb and a before the person: *le escribí un mensaje a Lucía*, \"I wrote Lucía a message\"." },
    ],
  },
  {
    tab: "Places",
    h: "2 · Countries and cities: en or a",
    blocks: [
      { t: "lead", v: "With countries, continents and cities, use en for where you are and a for where you're going: *vivimos en México*, \"we live in Mexico\"; *vamos a Brasil*, \"we're going to Brazil\"." },
      { t: "pairs", head: ["Spanish", "English"], v: [
        ["Estuvimos en Europa", "We were in Europe"],
        ["Volvimos a Nueva York", "We went back to New York"],
      ]},
      { t: "note", v: "Countries usually take no el or la: *me encanta Brasil*, \"I love Brazil\". With Estados Unidos, both are right: *Estados Unidos es…* or *los Estados Unidos son…*, \"the United States is…\"." },
    ],
  },
  {
    tab: "Por, para",
    h: "3 · Por or para",
    blocks: [
      { t: "lead", v: "Por and para can both be \"for\". Para looks ahead: to a goal, a place you're heading for, a person or a deadline. Por gives the cause, the way through, the means, a price or how often." },
      { t: "sub", v: "Para" },
      { t: "table", bold: 1,
        cols: ["Use", "Spanish", "English"],
        rows: [
          ["a goal", "Una página para comprar boletos", "A website to buy tickets"],
          ["a goal", "Estudio español para hablar con mis amigos", "I study Spanish to talk with my friends"],
          ["a goal", "Esta medicina es para la garganta", "This medicine is for the throat"],
          ["where you're heading", "Mañana salimos para Brasil", "Tomorrow we leave for Brazil"],
          ["a person", "Este regalo es para ti", "This gift is for you"],
          ["a deadline", "Necesito el pasaporte para el viernes", "I need the passport by Friday"],
        ]},
      { t: "sub", v: "Por" },
      { t: "table", bold: 1,
        cols: ["Use", "Spanish", "English"],
        rows: [
          ["the cause", "Fui por trabajo", "I went for work"],
          ["the cause", "Gracias por todo", "Thanks for everything"],
          ["the way through", "Pasamos por Denver", "We went through Denver"],
          ["the means", "Compré los boletos por internet", "I bought the tickets online"],
          ["the means", "Hablamos por teléfono", "We talked on the phone"],
          ["a price", "Pagué cinco mil pesos por el boleto", "I paid five thousand pesos for the ticket"],
          ["how often", "Dos veces por semana", "Twice a week"],
          ["part of the day", "Por la mañana", "In the morning"],
        ]},
      { t: "note", v: "In Mexico, *en la mañana*, \"in the morning\", is more common, but *por la mañana* is right too." },
      { t: "sub", v: "For two weeks" },
      { t: "note", v: "For how long something lasts, the simplest is no word at all: *estuvimos dos semanas en Oaxaca*, \"we were in Oaxaca for two weeks\"." },
    ],
  },
  {
    tab: "Mine",
    h: "4 · Mío, tuyo, suyo, nuestro",
    blocks: [
      { t: "lead", v: "Mío (\"mine\"), tuyo (\"yours\"), suyo (\"his\", \"hers\", \"theirs\") and nuestro (\"ours\") end in -o, -a, -os or -as to match the thing owned, not the owner: *esta maleta es mía*, \"this suitcase is mine\"." },
      { t: "table", bold: 1,
        cols: ["Before the noun", "After it", "English"],
        rows: [
          ["mi pasaporte", "mío, mía, míos, mías", "mine"],
          ["tu maleta", "tuyo, tuya, tuyos, tuyas", "yours"],
          ["su boleto", "suyo, suya, suyos, suyas", "his, hers, yours, theirs"],
          ["nuestros hijos", "nuestro, nuestra, nuestros, nuestras", "ours"],
        ]},
      { t: "sub", v: "After ser" },
      { t: "pairs", head: ["Spanish", "English"], v: [
        ["¿Es tuyo este pasaporte? Sí, es mío", "Is this passport yours? Yes, it's mine"],
        ["Estos boletos son nuestros", "These tickets are ours"],
      ]},
      { t: "sub", v: "Without the noun" },
      { t: "note", v: "To avoid saying the noun again, put el, la, los or las in front, matching the noun: *mi pasaporte* becomes *el mío*, \"mine\"; *tus papás* becomes *los tuyos*, \"yours\"." },
      { t: "note", v: "For someone you name, use el de, la de, los de or las de: *perdimos los dos pasaportes: el mío y el de James*, \"we lost both passports: mine and James's\"." },
      { t: "note", v: "Suyo can mean his, hers, yours or theirs. To be clear, say de and the person: *el de ella*, \"hers\"." },
      { t: "sub", v: "After a noun" },
      { t: "note", v: "*Un amigo mío* is \"a friend of mine\"." },
    ],
  },
  {
    tab: "Perfect",
    h: "5 · Review: have done",
    blocks: [
      { t: "lead", v: "Haber with the participle is for experiences, with alguna vez or nunca, and for not yet, with todavía no: *¿alguna vez han ido a Europa?*, \"have you ever been to Europe?\"." },
      { t: "pairs", head: ["Spanish", "English"], v: [
        ["Nunca hemos ido a Europa", "We've never been to Europe"],
        ["Todavía no los hemos comprado", "We haven't bought them yet"],
        ["Siempre nos ha encantado viajar", "We've always loved traveling"],
      ]},
      { t: "note", v: "With siempre, it's something that started in the past and is still true: *siempre nos ha encantado viajar*, \"we've always loved traveling\"." },
      { t: "note", v: "For \"already\" and \"yet\", use ya with the preterite: *¿ya compraron sus boletos?*, \"have you bought your tickets yet?\"." },
      { t: "sub", v: "Was going to" },
      { t: "note", v: "Ir a in the imperfect is \"was going to\": *íbamos a ir a Brasil*, \"we were going to go to Brazil\"." },
      { t: "sub", v: "Answering" },
      { t: "note", v: "In the answer, tú becomes yo, ustedes becomes nosotros, and tu or tus (\"your\") becomes mi or mis (\"my\"): *¿irías a Brasil? Sí, iría a Brasil*, \"would you go to Brazil? Yes, I'd go to Brazil\"." },
      { t: "note", v: "Les becomes nos: *¿siempre les ha encantado viajar? Sí, siempre nos ha encantado viajar*, \"have you always loved traveling? Yes, we've always loved traveling\"." },
      { t: "note", v: "To answer no, alguna vez becomes nunca, alguien becomes nadie, and ya becomes todavía no with haber: *¿conocías a alguien? No, no conocía a nadie*, \"did you know anyone? No, I didn't know anyone\"; *¿ya compraste tus boletos? No, todavía no he comprado mis boletos*, \"have you bought your tickets yet? No, I haven't bought my tickets yet\"." },
    ],
  },
];

export const LESSON = {
  id: "leccion23",
  title: "Lesson 23 · Travel, por and para",
  subtitle: "Leer and escribir, en or a with places, por or para, mío and tuyo, and a review of the present perfect",
  source: "Adapted from the LFL METHOD by Laura Caufour",
  cards: CARDS,
  notes: NOTES,
  // The order a student meets NEW cards in: each practice section straight
  // after the rule it drills, in the order of her grammar sections. Leer and
  // escribir first, with their two phrases; then her word list, before the
  // first cards that need it (the por / para gaps ask about boletos, la
  // página and el pasaporte); then places, por and para, and the
  // possessives. The review of the perfect comes last, and the answer cards
  // after it, since they mix every tense the course has taught.
  teachingOrder: [
    "leer", "escribir", "leerfrases",
    "vocab",
    "paises", "porpara",
    "posesivos", "sinsustantivo", "posfrases",
    "repaso", "respuestas",
  ],
  // The line above a grammar card saying what to type (src/lib/cardInstruction.js).
  // Drills ("leer (pretérito) → yo") get theirs from their shape. The two
  // choice sections name no word, so the line never shows the answer. Phrase
  // and word cards carry no line.
  instructions: {
    paises: "Fill the gap with one of the two words given",
    porpara: "Fill the gap with one of the two words given",
    posesivos: "Fill the gap with the word given, changed to match the thing owned",
    sinsustantivo: "Say it with el, la, los or las, without repeating the noun",
    respuestas: "Answer in a full sentence, keeping the noun, without lo, la, los or las",
  },
};

export default LESSON;
