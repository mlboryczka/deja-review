// Lección 16 · Preterite or imperfect — built from the Spanish course's
// Lección 16 sheets (adapted from Laura Caufour's LFL METHOD): the lesson
// (Andrés tells how his trip began: a taxi, Mexico City's traffic, the wrong
// terminal; seven grammar sections) and the exercise sheet. There is no
// answer key: every answer here is the one a Mexican Spanish teacher would
// give, and every answer such a teacher would accept is listed.
//
// Students have had Lessons 1 to 15, including the preterite (8 to 10), the
// imperfect (14), the a before a person (10), le and les (11), estar + the
// -ando form (11) and questions (15). No card asks for more than that and
// this lesson.
//
// Each entry is [front, back, category, section]. The front is always the
// Spanish.
//
// Card shapes:
//   "creer (pretérito) → él/ella"                 the verb tables; the line above comes from the shape
//   "el o al → Esperamos ___ doctor una hora"     esperar with a person or a thing
//   "vivir → Mis papás ___ en Monterrey diez años"   preterite or imperfect (her ex. 8)
//   "Le dije: «Tengo que salir ahora» → Le dije que…"   tell what was said (her ex. 10)
//   "Quise abrir la puerta, pero no pude"         Spanish shown, English typed: what the tense means
//   two-way phrase (E) and word (V) cards for the text and her translations
//
// WHY THE PRETERITE / IMPERFECT CHOICE IS ON EXACT CARDS. Phrase cards are
// marked with typo tolerance, and the two tenses are often a letter or two
// apart (vivía / viví, era / fue, sabía / supe in a long sentence). So the
// choice is asked on gap cards built from her ex. 8.
//
// WHY SOME SENTENCES ARE ONE WAY. What the tense does to the meaning (quise
// is "I tried to", supe "I found out", llovía "it was raining") is asked
// Spanish side up, English typed, like the French adverbs' false friends.
// Asked the other way, the matcher let the other tense through: "Se
// conocían en 2010" passed for "Se conocieron", "¿Cómo fue el hotel?" for
// "¿Cómo era el hotel?", "Creía que el vuelo salió…" for "…salía…". Those
// three became exact gap cards or were dropped. "Solo conocía a una persona
// cuando llegué" was dropped too: even English side, "I only met one
// person" passed for "I only knew one person". The notes keep it.
//
// The verbs: creer and esperar each get the present in all six persons. Of
// the other tenses, creer keeps the forms with a y (creyó, creyeron), creí
// and creía (the "I thought" of the lesson), and esperar keeps esperó and
// esperaba. The rest are regular and are in the notes' tables.
//
// Sampled, not transcribed. Ex. 8 keeps one gap per rule of her "regla
// completa" (an event, a number of times, a set length of time; a habit, the
// background, what someone said or thought, an action in progress), plus
// era for a description, fue for an opinion of a whole event, eran for the
// time, and supe, sabía, conocí and pudimos.
// Ex. 10 keeps one sentence per change it teaches (tengo → tenía, tienes →
// tenía, no conozco → no conocía, a question with dónde, with a qué hora,
// with si, and tu → su). Ex. 6 keeps the answers that change person (te →
// me, yo era → eras, ustedes → nosotros) and tardar en.
//
// Left out of ex. 8, as two answers fit and a card could mark only one:
// "Ana ___ abrir la puerta, pero no ___" and "no ___ ir a la ciudad"
// (quiso or quería), "La reunión ___ el lunes a las diez" (fue, or era for a
// meeting that was set for Monday), "Cuando llegué a México, solo ___ a una
// persona" (conocía, or conocí: "I only met one person"), and "¿Cómo ___ el
// viaje?" (fue, and in Mexico also estuvo). The sheet pins these with an
// English hint; the cards would have to show English on the Spanish side.
// What quise and no quise mean is asked on the one-way cards instead.
//
// Not made into cards: ex. 1, 2 and 7 (write your own sentences), ex. 3
// (translate the text, then compare), ex. 4 and 14 (questions on the story),
// ex. 12 and 13 (audio). Ex. 5 (Spanish to English) and ex. 9 and 11
// (English to Spanish) are sampled as phrase cards, which are asked both
// ways.
//
// Words: the sheet has no word list. The word cards are the two verbs, the
// text's travel words, her "En el texto" list (apurarse, documentar una
// maleta, abordar, la sala de abordar; tardar en and dejar are phrase cards)
// and "cambiar de opinión", glossed on ex. 5. "Tener suerte" is Lesson 10's
// word, so "¡Tuve mucha suerte!" is not a card; "¿De verdad?" is Lesson
// 10's and 14's.
//
// Where this departs from the sheets:
//   - "el o al" cards are built from her esperar examples ("Esperé el
//     autobús media hora", "Esperamos al doctor una hora").
//   - Two gap cards are not ex. 8's: "salir → Creía que el vuelo ___ de la
//     Terminal 1" is her section 1 example, and "ser → El viaje ___ genial,
//     ¡me encantó!" is made from her "¿Cómo fue el viaje? — ¡Fue genial!",
//     with "me encantó" so that only fue fits.
//   - "Llovía cuando llegó" is her section 3 example; the other one-way
//     cards are her section 5 examples, ex. 5 ("No quería ir allá" turned
//     into "No quiso ir a la ciudad", her ex. 8 refusal) and ex. 9.
//   - "llegar a tiempo" is the word card for her "a tiempo": a front starting
//     "a " loses it, because the matcher reads a leading "a" as an English
//     article, so "tiempo" alone would have been accepted.
//   - Ex. 10's "Le pregunté: «¿Ves mucho a tu novio?»" is asked; its answer,
//     "Le pregunté si veía mucho a su novio", turns tu into su, which her
//     table doesn't show. The notes say it.
//   - "Le dije que…" cards accept the answer with or without its opening
//     words, as the front already shows them.
//   - No slips in the sheets needed correcting.
//
// Checked 2026-10-22 by an independent reader: 9 fixes
// Then cut: "Teníamos una casa en el campo" (translate, minding the tense).
// Typed English is marked with typo tolerance, and "We have a house…" passed
// as close enough, so it couldn't catch the slip it was there for.
//
// Taken out on 2026-10-25, at the owner's word ("Yes, take the yes-or-no
// flashcards like "¿Eres estadounidense? → Sí, …" out of the Spanish lessons
// too"): the 6 cards that answered a question with yes or no in a full
// sentence (section "respuestas").

export const CARDS = [
  // ── 1. Creer
  ["creer (presente) → yo", "creo", "G", "creer"],
  ["creer (presente) → tú", "crees", "G", "creer"],
  ["creer (presente) → él/ella", "cree", "G", "creer"],
  ["creer (presente) → nosotros", "creemos", "G", "creer"],
  ["creer (presente) → ustedes", "creen", "G", "creer"],
  ["creer (presente) → ellos/ellas", "creen", "G", "creer"],
  ["creer (pretérito) → yo", "creí", "G", "creer"],
  ["creer (pretérito) → él/ella", "creyó", "G", "creer"],           // i between two vowels → y
  ["creer (pretérito) → ellos/ellas", "creyeron", "G", "creer"],
  ["creer (imperfecto) → yo", "creía", "G", "creer"],
  ["Mi abuela siempre creyó en la suerte", "My grandmother always believed in luck", "E", "creerfrases"],
  ["¿Crees que va a venir?", "Do you think he's going to come? / Do you think she's going to come? / Do you think he'll come? / Do you think she'll come? (tú, with creer)", "E", "creerfrases"],

  // ── 1. Esperar
  ["esperar (presente) → yo", "espero", "G", "esperar"],
  ["esperar (presente) → tú", "esperas", "G", "esperar"],
  ["esperar (presente) → él/ella", "espera", "G", "esperar"],
  ["esperar (presente) → nosotros", "esperamos", "G", "esperar"],
  ["esperar (presente) → ustedes", "esperan", "G", "esperar"],
  ["esperar (presente) → ellos/ellas", "esperan", "G", "esperar"],
  ["esperar (pretérito) → él/ella", "esperó", "G", "esperar"],
  ["esperar (imperfecto) → yo", "esperaba", "G", "esperar"],
  ["Espero el taxi", "I'm waiting for the taxi / I'm waiting for the cab / I wait for the taxi", "E", "esperarfrases"],
  ["Espero llegar a tiempo", "I hope to get there on time / I hope I get there on time / I hope to arrive on time", "E", "esperarfrases"],
  ["¡Espero que sí!", "I hope so!", "E", "esperarfrases"],
  // a thing: no a; a person: a, and a + el = al
  ["el o al → Esperé ___ autobús media hora", "el", "G", "elal"],
  ["el o al → Esperamos ___ doctor una hora", "al", "G", "elal"],

  // ── The text's words, before the cards that use them
  ["creer", "to believe / to think", "V", "vocab"],
  ["esperar", "to wait / to wait for / to hope", "V", "vocab"],
  ["la maleta", "the suitcase", "V", "vocab"],
  ["hacer la maleta", "to pack / to pack a suitcase / to pack your suitcase", "V", "vocab"],
  ["el taxista", "the taxi driver / the cab driver", "V", "vocab"],
  ["abajo", "downstairs / down / below", "V", "vocab"],
  ["el vuelo", "the flight", "V", "vocab"],
  ["documentar una maleta", "to check a bag / to check a suitcase / to check in a bag (in Mexico)", "V", "vocab"],
  ["apurarse", "to hurry / to hurry up", "V", "vocab"],
  ["la sala de abordar", "the gate / the boarding gate (in Mexico)", "V", "vocab"],
  ["abordar", "to board", "V", "vocab"],
  ["llegar a tiempo", "to arrive on time / to get there on time / to be on time", "V", "vocab"],
  ["afortunadamente", "luckily / fortunately", "V", "vocab"],
  ["cambiar de opinión", "to change your mind / to change one's mind", "V", "vocab"],

  // ── 2–3. Preterite or imperfect (her ex. 8): one gap per rule
  ["visitar → Ayer yo ___ a mis papás", "visité", "G", "pasado"],                       // an event
  ["ir → En 2023, yo ___ a Guadalajara tres veces", "fui", "G", "pasado"],              // a number of times
  ["vivir → Mis papás ___ en Monterrey diez años", "vivieron", "G", "pasado"],          // a set length of time
  ["vivir → Cuando yo era niño, ___ en el campo", "vivía", "G", "pasado"],              // a habit
  ["ir → Antes yo ___ al gimnasio los lunes, pero ahora voy los sábados", "iba", "G", "pasado"],
  ["haber → Llovía y ___ mucha gente en el aeropuerto", "había", "G", "pasado"],        // the background
  ["hacer → Yo ___ mi maleta cuando el taxista me llamó", "hacía / estaba haciendo", "G", "pasado"], // in progress
  ["estar → Me dijo que ___ cansado", "estaba", "G", "pasado"],                         // after dijo que
  ["salir → Creía que el vuelo ___ de la Terminal 1", "salía", "G", "pasado"],          // after creía que
  ["ser → El hotel ___ muy bonito y estaba cerca de la playa", "era", "G", "pasado"],   // a description
  ["ser → ___ las diez cuando Andrés llegó al aeropuerto", "eran", "G", "pasado"],      // the time
  ["ser → El viaje ___ genial, ¡me encantó!", "fue", "G", "pasado"],                    // an opinion of a whole event
  // Spanish shown, English typed: the tense is what the English must show
  ["Llovía cuando llegó", "It was raining when she arrived / It was raining when he arrived / It was raining when she got here / It was raining when he got here", "G", "pasadoingles"],

  // ── 4–5. Verbs that describe a situation, and change meaning in the preterite
  ["saber → ¿De verdad? ¡No ___!", "sabía", "G", "sentido"],
  ["saber → Ayer yo ___ la verdad", "supe", "G", "sentido"],
  ["conocer → Yo ___ a mi esposa en una clase de español en 2015", "conocí", "G", "sentido"],
  ["poder → Afortunadamente, nosotros ___ llegar a tiempo", "pudimos", "G", "sentido"],
  // Spanish shown, English typed: what the verb means in this tense
  ["Ayer supe que Lucía estaba en Guadalajara", "Yesterday I found out that Lucía was in Guadalajara / Yesterday I found out Lucía was in Guadalajara / I found out yesterday that Lucía was in Guadalajara / Yesterday I learned that Lucía was in Guadalajara", "G", "sentidoingles"],
  ["Quise abrir la puerta, pero no pude", "I tried to open the door, but I couldn't / I tried to open the door but couldn't", "G", "sentidoingles"],
  ["No quiso ir a la ciudad", "He refused to go to the city / She refused to go to the city / He refused to go into town / She refused to go into town / He wouldn't go to the city / She wouldn't go to the city", "G", "sentidoingles"],
  ["Tenía que levantarme temprano", "I was supposed to get up early / I had to get up early", "G", "sentidoingles"],
  ["Tuve que correr para llegar a tiempo", "I had to run to get there on time / I had to run to arrive on time / I had to run to be on time", "G", "sentidoingles"],

  // ── 6. Telling what someone said (her ex. 10)
  ["Le dije: «Tengo que salir ahora» → Le dije que…", "Le dije que tenía que salir ahora / que tenía que salir ahora / tenía que salir ahora", "G", "contar"],
  ["Le dije: «Tienes que regresar ahora» → Le dije que…", "Le dije que tenía que regresar ahora / que tenía que regresar ahora / tenía que regresar ahora", "G", "contar"],
  ["Le dije: «No conozco a Camila» → Le dije que…", "Le dije que no conocía a Camila / que no conocía a Camila / no conocía a Camila", "G", "contar"],
  ["Le pregunté: «¿Dónde estás?» → Le pregunté…", "Le pregunté dónde estaba / dónde estaba", "G", "contar"],
  ["Te pregunté: «¿A qué hora sale el avión?» → Te pregunté…", "Te pregunté a qué hora salía el avión / a qué hora salía el avión", "G", "contar"],
  ["Le pregunté: «¿Hay mucha gente allá?» → Le pregunté…", "Le pregunté si había mucha gente allá / si había mucha gente allá", "G", "contar"],
  ["Le pregunté: «¿Ves mucho a tu novio?» → Le pregunté…", "Le pregunté si veía mucho a su novio / si veía mucho a su novio", "G", "contar"],

  // ── 7. In the text
  ["Tardamos más de una hora en llegar", "It took us more than an hour to get there / It took us over an hour to get there", "E", "texto"],
  ["Me dejó abordar", "She let me board / He let me board", "E", "texto"],
  ["Tuve que ir al aeropuerto por mi mamá", "I had to go to the airport to pick up my mom / I had to go to the airport to pick my mom up (with tuve que)", "E", "texto"],
];

// The notes: the lesson's seven sections, in English, rebuilt to the notes
// rules in .claude/skills/building-lessons/SKILL.md. Six tabs:
//   Creer        section 1: the table, creer en and creer que
//   Esperar      section 1: the table, a thing or a person, to hope
//   Which past   sections 2 and 3: the simple rule, then the full one; was
//                as era or fue
//   Meaning      sections 4 and 5: verbs of a situation, and the ones whose
//                English changes in the preterite
//   Reported     section 6: telling what someone said or asked; answering
//                yes about the past (her ex. 6)
//   Phrases      section 7: tardar en, dejar, ir por
// Every example is from her lesson or exercises.
//
// Sentences that are not hers, kept because cards need them:
//   - Esperar: "a + el becomes al", for the "el o al" cards; her examples show
//     it ("Esperamos al doctor").
//   - Reported: "Tu, "your", becomes su", for the ex. 10 card "¿Ves
//     mucho a tu novio?"; her table doesn't show a possessive.
//   - Phrases: "Ir por someone is "to pick them up"" is her ex. 5 footnote.
//   - Reported, "Answering yes": the whole note. Her ex. 6 asks it ("¿Creías
//     que yo era estadounidense?") and her lesson never says it.
//   - Esperar: "The trap: "to wait for" is never esperar por" is her "(no:
//     esperar por)" as the lesson's one trap.
//
// Cut, as helping no card: the accents of creí, creíste, creímos (accents are
// not marked); "if what was said is still true, the present can stay"; the
// pointers to Lessons 8 to 14.
export const NOTES = [
  {
    tab: "Creer",
    h: "1 · Creer, to believe or to think",
    blocks: [
      { t: "lead", v: "Creer means \"to believe\" or \"to think\", and it follows the -er pattern, except for a y in two forms of the preterite: *creyó*, \"he believed\", and *creyeron*, \"they believed\"." },
      { t: "table", bold: 1, dense: true,
        cols: ["Person", "Present", "Preterite", "Imperfect"],
        rows: [
          ["yo", "creo", "creí", "creía"],
          ["tú", "crees", "creíste", "creías"],
          ["él, ella, usted", "cree", "creyó", "creía"],
          ["nosotros", "creemos", "creímos", "creíamos"],
          ["ellos, ellas, ustedes", "creen", "creyeron", "creían"],
        ]},
      { t: "note", v: "In the preterite, an i between two vowels becomes y: *creyó*, never creió." },
      { t: "sub", v: "Creer en, creer que" },
      { t: "note", v: "Creer en is \"to believe in\": *Mi abuela siempre creyó en la suerte*, \"my grandmother always believed in luck\"." },
      { t: "note", v: "Creer que gives an opinion, like \"I think\": *¿Crees que va a venir?*, \"do you think he's going to come?\"." },
      { t: "note", v: "In the past, creía que and creí que are both right: *Creía que el vuelo salía de la Terminal 1*, \"I thought the flight was leaving from Terminal 1\"." },
    ],
  },
  {
    tab: "Esperar",
    h: "2 · Esperar, to wait or to hope",
    blocks: [
      { t: "lead", v: "Esperar means \"to wait for\" and \"to hope\", and it follows the -ar pattern: *espero*, \"I wait\", *esperé*, \"I waited\", *esperaba*, \"I was waiting\"." },
      { t: "table", bold: 1, dense: true,
        cols: ["Person", "Present", "Preterite", "Imperfect"],
        rows: [
          ["yo", "espero", "esperé", "esperaba"],
          ["tú", "esperas", "esperaste", "esperabas"],
          ["él, ella, usted", "espera", "esperó", "esperaba"],
          ["nosotros", "esperamos", "esperamos", "esperábamos"],
          ["ellos, ellas, ustedes", "esperan", "esperaron", "esperaban"],
        ]},
      { t: "sub", v: "Waiting for a thing" },
      { t: "note", v: "**The trap:** \"to wait for\" is never esperar por. The thing comes straight after esperar: *Espero el taxi*, \"I'm waiting for the taxi\"; *Esperé el autobús media hora*, \"I waited for the bus for half an hour\"." },
      { t: "sub", v: "Waiting for a person" },
      { t: "note", v: "Before a person, put a, and a + el becomes al: *Espero a mi esposa*, \"I'm waiting for my wife\"; *Esperamos al doctor una hora*, \"we waited for the doctor for an hour\"." },
      { t: "sub", v: "To hope" },
      { t: "note", v: "To say what you hope to do, add the second verb as it is in the dictionary: *Espero llegar a tiempo*, \"I hope to get there on time\"." },
      { t: "note", v: "Espero que and no creo que, followed by a verb, need a verb form you haven't met yet. For now, say *¡Espero que sí!*, \"I hope so!\", and *Creo que no*, \"I don't think so\"." },
    ],
  },
  {
    tab: "Which past",
    h: "3 · Preterite or imperfect?",
    blocks: [
      { t: "lead", v: "The English \"I listened\" can be either tense, so think about the meaning: an event that is over is the preterite, *escuché*; \"I was listening\" or \"I used to listen\" is the imperfect, *escuchaba*." },
      { t: "sub", v: "The preterite" },
      { t: "note", v: "Use the preterite for an event at a moment you can name, for something done a number of times, and for something that lasted a set time, like *diez años*, \"ten years\", or *todo el día*, \"all day\"." },
      { t: "pairs", head: ["Spanish", "English"], v: [
        ["Empecé a estudiar español en 2010", "I started studying Spanish in 2010"],
        ["Fui a Guadalajara tres veces", "I went to Guadalajara three times"],
        ["Viví diez años en Estados Unidos", "I lived in the United States for ten years"],
        ["Llovió todo el día", "It rained all day"],
      ]},
      { t: "sub", v: "The imperfect" },
      { t: "note", v: "Use the imperfect for a habit, for the background of a story, for an action in progress when something else happened, and for what someone said or thought after a verb in the past." },
      { t: "pairs", head: ["Spanish", "English"], v: [
        ["Cuando era niño, iba a la alberca todos los lunes", "When I was a kid, I went to the pool every Monday"],
        ["Había mucha gente, entonces tuvimos que esperar", "There were a lot of people, so we had to wait"],
        ["Llovía cuando llegó", "It was raining when she arrived"],
        ["Me dijo que tenía que esperar aquí", "She told me I had to wait here"],
      ]},
      { t: "note", v: "For an action in progress, estaba with the -ando or -iendo form says the same: *Estaba haciendo mi maleta cuando el taxista me llamó* and *Hacía mi maleta cuando el taxista me llamó* both mean \"I was packing my suitcase when the taxi driver called me\"." },
      { t: "sub", v: "Was: era or fue" },
      { t: "note", v: "Use era to describe a person, a thing or a place: *Mi abuelo era muy simpático*, \"my grandfather was very nice\"; *¿Cómo era el hotel?*, \"what was the hotel like?\"." },
      { t: "note", v: "Use fue for an event, or for your opinion of a whole event: *La reunión fue el lunes*, \"the meeting was on Monday\"; *¿Cómo fue el viaje? ¡Fue genial!*, \"how was the trip? It was great!\"." },
      { t: "note", v: "The time and someone's age take the imperfect: *Eran las cuatro y media*, \"it was four thirty\"; *Tenía diez años*, \"she was ten\"." },
    ],
  },
  {
    tab: "Meaning",
    h: "4 · Verbs that change meaning",
    blocks: [
      { t: "lead", v: "Saber, conocer and querer usually describe a situation, so they are almost always in the imperfect: *¿De verdad? ¡No sabía!*, \"really? I didn't know!\"." },
      { t: "pairs", head: ["Spanish", "English"], v: [
        ["No quería ir allá", "I didn't want to go there"],
        ["Solo conocía a una persona cuando llegué", "I only knew one person when I arrived"],
      ]},
      { t: "note", v: "Ser, estar and tener take the imperfect to describe, and the preterite for an event or a set length of time: *Estuve dos semanas en Oaxaca*, \"I was in Oaxaca for two weeks\"; *¡Tuve mucha suerte!*, \"I was very lucky!\"." },
      { t: "sub", v: "In the preterite" },
      { t: "note", v: "In the preterite, these verbs tell of an event, so their English changes:" },
      { t: "table", bold: 1,
        cols: ["Imperfect", "Preterite"],
        rows: [
          ["sabía · I knew", "supe · I found out"],
          ["conocía · I knew", "conocí · I met"],
          ["quería · I wanted", "quise · I tried to"],
          ["no quería · I didn't want to", "no quise · I refused"],
          ["podía · I could", "pude · I managed to"],
          ["tenía que · I was supposed to", "tuve que · I had to, and did"],
        ]},
      { t: "pairs", head: ["Spanish", "English"], v: [
        ["Ayer supe que Lucía estaba en Guadalajara", "Yesterday I found out that Lucía was in Guadalajara"],
        ["Conocí a mi esposa en 2015", "I met my wife in 2015"],
        ["Quise abrir la puerta, pero no pude", "I tried to open the door, but I couldn't"],
        ["Tenía que levantarme temprano", "I was supposed to get up early"],
        ["Tuve que correr para llegar a tiempo", "I had to run to get there on time"],
      ]},
    ],
  },
  {
    tab: "Reported",
    h: "5 · Telling what someone said",
    blocks: [
      { t: "lead", v: "To tell what someone said, use dijo que, and put their present-tense verb in the imperfect: *«Tengo que salir»*, \"I have to leave\", becomes *Me dijo que tenía que salir*, \"he told me he had to leave\"." },
      { t: "note", v: "The people change to fit who is telling it: *«Tienes que regresar ahora»* becomes *Le dije que tenía que regresar ahora*, \"I told her she had to come back now\"." },
      { t: "table", bold: 1,
        cols: ["What was said", "What we tell"],
        rows: [
          ["«Te espero abajo»", "Me dijo que me esperaba abajo"],
          ["«Tengo que salir»", "Me dijo que tenía que salir"],
          ["«Tienes que regresar ahora»", "Le dije que tenía que regresar ahora"],
          ["«Voy a venir mañana»", "Le dije que iba a venir mañana"],
          ["«¿Dónde estás?»", "Le pregunté dónde estaba"],
          ["«¿Hay mucha gente?»", "Le pregunté si había mucha gente"],
        ]},
      { t: "sub", v: "Questions" },
      { t: "note", v: "To tell a question, use preguntar. A question word stays, with its accent: *Te pregunté a qué hora salía el avión*, \"I asked you what time the plane was leaving\"." },
      { t: "note", v: "A question with no question word takes si, \"if\": *Le pregunté si iba a venir*, \"I asked him if he was going to come\"." },
      { t: "note", v: "Tu, \"your\", becomes su: *«¿Ves mucho a tu novio?»* becomes *Le pregunté si veía mucho a su novio*, \"I asked her if she saw her boyfriend a lot\"." },
      { t: "sub", v: "A finished event" },
      { t: "note", v: "A finished event stays in the preterite: *«Llegué tarde»*, \"I arrived late\", becomes *Me dijo que llegó tarde*, \"she told me she arrived late\"." },
      { t: "sub", v: "Answering yes" },
      { t: "note", v: "Answering a question about the past, keep its tenses and swap the people: tú becomes yo, ustedes becomes nosotros, te becomes me, and yo becomes tú: *¿Creías que yo era estadounidense? Sí, creía que eras estadounidense*, \"did you think I was American? Yes, I thought you were American\"." },
    ],
  },
  {
    tab: "Phrases",
    h: "6 · In the text",
    blocks: [
      { t: "lead", v: "Tardar, a length of time, en and a verb say how long something took: *Tardamos más de una hora en llegar*, \"it took us more than an hour to get there\"." },
      { t: "note", v: "Dejar with a verb is \"to let\": *Me dejó abordar*, \"she let me board\"." },
      { t: "note", v: "Ir por someone is \"to pick them up\": *Tuve que ir al aeropuerto por mi mamá*, \"I had to go to the airport to pick up my mom\"." },
    ],
  },
];

export const LESSON = {
  id: "leccion16",
  title: "Lesson 16 · Preterite or imperfect",
  subtitle: "Creer and esperar, the preterite or the imperfect, and telling what someone said",
  source: "Adapted from the LFL METHOD by Laura Caufour",
  cards: CARDS,
  notes: NOTES,
  // The order a student meets NEW cards in, following her sections: the two
  // verbs and their uses, then the text's words (the gap cards use maleta,
  // taxista, abajo), the preterite or imperfect choice, the verbs that change
  // meaning, telling what was said, the yes answers that mix all of it, and
  // the text's phrases last.
  teachingOrder: [
    "creer", "creerfrases",
    "esperar", "esperarfrases", "elal",
    "vocab",
    "pasado", "pasadoingles",
    "sentido", "sentidoingles",
    "contar",
    "texto",
  ],
  // The line above a grammar card saying what to type (src/lib/cardInstruction.js).
  // The verb tables get theirs from their shape. Phrase and word cards are
  // translations and carry no line.
  instructions: {
    elal: "Fill the gap with the choice that fits",
    pasado: "Fill the gap with the verb given, in the preterite or the imperfect",
    sentido: "Fill the gap with the verb given, in the preterite or the imperfect",
    pasadoingles: "Translate into English, minding the tense",
    sentidoingles: "Translate into English, minding the tense",
    contar: "Tell what was said, going on from the words given",
  },
};

export default LESSON;
