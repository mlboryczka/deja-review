// Lección 17 · Him, her, it, them — built from the Spanish course's Lección
// 17 sheets (adapted from Laura Caufour's LFL METHOD): the lesson (Natalia,
// in her last year of prepa, talks to her math teacher after her final
// exams; six grammar sections) and the exercise sheet. There is no answer
// key: every answer here is the one a Mexican Spanish teacher would give, and
// every answer such a teacher would accept is listed.
//
// Students have had Lessons 1 to 16, including the a before a person (10),
// le and les and where they go (11), the preterite and the imperfect. No card
// asks for more than that and this lesson.
//
// Each entry is [front, back, category, section]. The front is always the
// Spanish.
//
// Card shapes:
//   two-way phrase (E) and word (V) cards for the dialogue and her translations
//   "Mi abuela oye bastante bien" / "My grandmother hears pretty well"
//                                                  an irregular verb form, in a phrase
//
// WHY LO / LE IS ONLY ON EXACT CARDS. Phrase cards are marked with typo
// tolerance, and lo, la and le are a letter apart: "Le vi ayer" would pass
// for "Los vi ayer". So every pronoun the lesson teaches is asked on an exact
// card, and her ex. 12 and 13 translations, whose whole point is that
// choice ("I asked her", "I'm looking for them"), are not phrase cards. The
// phrase cards are the dialogue's expressions and sentences whose pronoun
// is not the point. Two dialogue sentences were tried and dropped: on "La
// conozco desde que nació" and "Lo conocí cuando estábamos en la
// universidad", "Le conozco…" passed as close enough English side up, and
// "I've known him…" or "I met her…" passed Spanish side up.
//
// THE UNDERLINED WORDS. Her ex. 4, 8 and 10 underline the words to replace;
// the app can't underline. So the cards use only her sentences where one
// person or thing can be replaced ("→ con pronombre"), or both the thing and
// the person ("→ con dos pronombres"). "Le expliqué el problema a mi
// profesor" (only "a mi profesor" underlined) is left out: el problema could
// be replaced too.
//
// The verbs: recibir and oír each get the present in all six persons. Of the
// other tenses, recibir keeps recibí and recibieron, and oír keeps oí, the
// forms with a y (oyó, oyeron) and oía. The rest are in the notes' tables.
//
// Sampled, not transcribed. Ex. 4 keeps people (la, lo, las), things (los,
// la, lo), a question, a sentence with a place left in it, and her two "2
// posibilidades" (an infinitive and a gerund). Ex. 8 keeps the
// sentences with le or les already there ("Les hablo a mis papás…") and oír
// with al. Ex. 5 and 9 keep one answer per contrast: ver / escribir a tus
// papás (los / les), esperar (los), hablar and contestar (les, le), decir and
// preguntar with a thing (se lo, se la), and oír. Ex. 11 keeps me → te, nos →
// los (ustedes), les → nos and te → me.
//
// Not made into cards: ex. 1 and 2 (write your own sentences), ex. 3 (find
// the pronouns in the dialogue), ex. 6 (imagine what a pronoun stands for:
// many answers), ex. 7 (label direct or indirect, a rule to recite), ex. 12
// and 13 (see above), ex. 14 to 16 (audio). From ex. 13, the sentences
// whose pronoun isn't the point are phrase cards ("Fingers crossed!", "They're
// nervous about the entrance exam", "Thanks, but it wasn't very useful").
//
// Words: the sheet has no word list; the word cards are the two verbs and
// the dialogue's new words. "La universidad", "la filosofía" and "la física"
// are left out as words English speakers already know.
//
// Where this departs from the sheets:
//   - "Hay que hacer los ejercicios hoy → con pronombre" is made from her
//     section 3 example "Hay que hacerlos hoy".
//   - "¿El profesor les contestó a ustedes? → sí": her ex. 11 has "¿El
//     profesor les contestó?". "a ustedes" is added because les could also
//     be ellos, and the card wants nos.
//   - "Les mandé las fotos a mis papás" (her section 5 example) is the plural
//     person on a "con dos pronombres" card. Her sentences with a singular
//     thing and a plural person ("Les escribí un mensaje a mis abuelos") are
//     left out: many Mexicans say "se los escribí" there, which her lesson
//     mentions but doesn't write.
//   - The answers to ex. 5 are accepted whole ("Sí, la vi antes de salir") or
//     short ("Sí, la vi"), as her example answers short.
//   - No slips in the sheets needed correcting.
//
// Checked 2026-10-22 by an independent reader: 4 fixes
// Then the two se lo answers ("¿Le dijiste eso a tu jefe? → sí", "¿Le
// preguntaste la hora al mesero? → sí") got a section of their own,
// respuestasdos, dealt after the two-pronoun cards that teach se lo.
//
// Taken out on 2026-10-25, at the owner's word ("Yes, take the yes-or-no
// flashcards like "¿Eres estadounidense? → Sí, …" out of the Spanish lessons
// too"): the 15 cards that answered a question with yes or no in a full
// sentence (sections "respuestas", "respuestasdos" and "metenos").
//
// Taken out on 2026-10-25, at the owner's word ("the flashcards module for the
// spanish section should be all words and phrases, no grammar", "i have the
// exercises for those"): every grammar card, 34 here, with their sections,
// order and instruction lines. That is the drills, gaps and rewrites this
// header describes. The grammar is practised on the Exercises page.
//
// Added: 4 phrases (section "verbforms"), one for each irregular verb form the
// drills asked that no word or phrase card had, each with words of this lesson
// that no phrase used yet, checked by an independent reader. On any Spanish
// phrase, an irregular verb form must be typed exactly (irregularForms.js).

export const CARDS = [
  // ── The dialogue's words
  ["recibir", "to receive / to get", "V", "vocab"],
  ["oír", "to hear", "V", "vocab"],
  ["el ruido", "the noise", "V", "vocab"],
  ["el pasillo", "the hallway / the corridor / the hall", "V", "vocab"],
  ["el examen", "the exam / the test", "V", "vocab"],
  ["el resultado", "the result", "V", "vocab"],
  ["las matemáticas", "math / maths / mathematics", "V", "vocab"],
  ["la prepa", "high school / senior high school (in Mexico)", "V", "vocab"],
  ["útil", "useful", "V", "vocab"],
  ["nervioso", "nervous (masc.)", "V", "vocab"],
  ["bastante", "pretty / quite / fairly / rather / enough", "V", "vocab"],

  // ── 1. The verbs in use; no "can" with oír
  ["Oí un ruido en el pasillo", "I heard a noise in the hallway / I heard a noise in the corridor", "E", "verbos"],
  ["Recibí los resultados ayer", "I got the results yesterday / I received the results yesterday", "E", "verbos"],
  ["¿Me oyes?", "Can you hear me? (tú)", "E", "verbos"],
  ["No te oigo", "I can't hear you (tú)", "E", "verbos"],

  // ── 6. In the dialogue (and her ex. 13)
  ["¿Cómo te fue?", "How did it go? (tú)", "E", "dialogo"],
  ["Me fue bien", "It went well for me / I did well / It went well (for me)", "E", "dialogo"],
  ["¿Cómo les fue?", "How did it go for them? / How did it go for you guys?", "E", "dialogo"],
  ["Te va a ir bien", "It's going to go well for you / It will go well for you / You're going to do well / You'll do well (tú)", "E", "dialogo"],
  ["Me pareció muy difícil", "I found it very difficult / I found it really difficult / It seemed very difficult to me / I thought it was very difficult / I found it very hard", "E", "dialogo"],
  ["Soy muy mala para la filosofía", "I'm very bad at philosophy / I'm really bad at philosophy (a woman speaking)", "E", "dialogo"],
  ["¡Cruzo los dedos!", "Fingers crossed! / I'm keeping my fingers crossed!", "E", "dialogo"],
  ["¡Igualmente!", "You too! / Same to you! / Likewise!", "E", "dialogo"],
  ["Te deseo unas felices vacaciones", "I wish you a happy vacation / I wish you a happy holiday (tú)", "E", "dialogo"],
  ["Están nerviosos por el examen de admisión", "They're nervous about the entrance exam / They are nervous about the entrance exam", "E", "dialogo"],
  ["Gracias, pero no fue muy útil", "Thanks, but it wasn't very useful / Thank you, but it wasn't very useful", "E", "dialogo"],

  // ── Irregular verb forms, each in a short phrase with this lesson's words
  //    (2026-10-25). The verb must be typed exactly: irregularForms.js.
  ["Mi abuela oye bastante bien", "My grandmother hears pretty well / My grandmother can hear pretty well / My grandmother hears quite well / My grandmother can hear quite well / My grandma hears pretty well / My grandma can hear pretty well / My grandmother hears fairly well", "E", "verbforms"],
  ["¿Oyen bien al profesor de matemáticas?", "Can you hear the math teacher well? (ustedes) / Can you guys hear the math teacher well? / Can you hear the math teacher okay? (ustedes) / Do you hear the math teacher well? (ustedes) / Can you hear the maths teacher well? (ustedes) / Can they hear the math teacher well? / Do they hear the math teacher well?", "E", "verbforms"],
  ["Diego estaba nervioso y no oyó la pregunta", "Diego was nervous and didn't hear the question / Diego was nervous and he didn't hear the question / Diego was nervous and did not hear the question", "E", "verbforms"],
  ["Oyeron el resultado en la radio", "They heard the result on the radio / You heard the result on the radio (ustedes)", "E", "verbforms"],
];

// The notes: the lesson's six sections, in English, rebuilt to the notes
// rules in .claude/skills/building-lessons/SKILL.md. Six tabs:
//   Verbs        section 1: recibir and oír, and "can you hear me?"
//   Objects      section 2: direct and indirect, and each verb's way
//   Pronouns     section 3: lo, la, los, las beside le, les; where they go;
//                me, te and nos in answers
//   Him, her     section 4: translating him, her, it and them
//   Se lo        section 5: two pronouns together
//   Phrases      section 6: the dialogue's expressions
// Every example is from her lesson, dialogue or exercises.
//
// Sentences that are not hers, kept because cards need them:
//   - Pronouns: "When le or les is already there, leave the person out: Les
//     hablo a mis papás → Les hablo." Her ex. 8 instruction says it; her
//     lesson doesn't.
//   - Pronouns, "In answers": both notes (me becomes te, nos becomes los or
//     las, les becomes nos). Her ex. 11 asks for it ("¡Atención a me, te y
//     nos!") and her lesson never says it.
//   - Objects: "Recibir, querer (a person), visitar, invitar and entender
//     take their person or thing directly too" is the rest of her verb
//     table, shortened; "Quiero mucho a mi abuela" is her ex. 4.
//   - Phrases: the English for "Te va a ir bien" and "¿Cómo les fue?" is
//     from her dialogue translation.
//
// Cut, as helping no card: the accents of oír, oímos, oíste, oía and of
// buscándola, decírtelo (accents are not marked); "En el teléfono, también
// se dice mucho ¿Me escuchas?"; "In Mexico, many people say se los dije"
// (no card asks for a singular thing to a plural person); the pointers to
// Lessons 10, 11 and 16.
export const NOTES = [
  {
    tab: "Verbs",
    h: "1 · Recibir and oír",
    blocks: [
      { t: "lead", v: "Recibir, \"to receive\" or \"to get\", follows the -ir pattern, like vivir; oír, \"to hear\", is irregular: *oigo*, \"I hear\", and a y in *oyes*, *oye*, *oyen*, *oyó* and *oyeron*." },
      { t: "sub", v: "Recibir" },
      { t: "table", bold: 1, dense: true,
        cols: ["Person", "Present", "Preterite", "Imperfect"],
        rows: [
          ["yo", "recibo", "recibí", "recibía"],
          ["tú", "recibes", "recibiste", "recibías"],
          ["él, ella, usted", "recibe", "recibió", "recibía"],
          ["nosotros", "recibimos", "recibimos", "recibíamos"],
          ["ellos, ellas, ustedes", "reciben", "recibieron", "recibían"],
        ]},
      { t: "note", v: "The thing you get comes straight after recibir: *Recibí los resultados ayer*, \"I got the results yesterday\"." },
      { t: "sub", v: "Oír" },
      { t: "table", bold: 1, dense: true,
        cols: ["Person", "Present", "Preterite", "Imperfect"],
        rows: [
          ["yo", "oigo", "oí", "oía"],
          ["tú", "oyes", "oíste", "oías"],
          ["él, ella, usted", "oye", "oyó", "oía"],
          ["nosotros", "oímos", "oímos", "oíamos"],
          ["ellos, ellas, ustedes", "oyen", "oyeron", "oían"],
        ]},
      { t: "note", v: "A thing you hear comes straight after oír, and a person takes a: *Oí un ruido en el pasillo*, \"I heard a noise in the hallway\"; *No oigo bien al profesor*, \"I can't hear the teacher well\"." },
      { t: "note", v: "Spanish says no \"can\" with oír or ver: *¿Me oyes?*, \"can you hear me?\"; *No te oigo*, \"I can't hear you\"; *¿Me ves?*, \"can you see me?\"." },
      { t: "note", v: "Oír is \"to hear\"; escuchar is \"to listen to\", with attention, and a thing comes straight after it: *Escucho la radio*, \"I listen to the radio\"." },
    ],
  },
  {
    tab: "Objects",
    h: "2 · Direct and indirect objects",
    blocks: [
      { t: "lead", v: "A verb takes its person in one of two ways: directly, like *Veo a Natalia*, \"I see Natalia\", or as the person who gets something, like *Le escribo a Natalia*, \"I write to Natalia\"." },
      { t: "note", v: "The direct object is what the verb acts on, a thing or a person: *Recibí los resultados*, \"I got the results\"; *Conozco al profesor Rosales*, \"I know Mr. Rosales\"." },
      { t: "note", v: "The indirect object is the person who gets something: a thing, a message, a question. It takes a, and almost always le or les too: *Le pregunto a su profesor*, \"I ask her teacher\"; *Les hablo a mis papás*, \"I talk to my parents\"." },
      { t: "note", v: "A person takes a either way, so the a doesn't tell you which. Learn each verb's way:" },
      { t: "table", bold: 0,
        cols: ["Direct", "Indirect"],
        rows: [
          ["ver · to see", "decir · to tell"],
          ["conocer · to know", "preguntar · to ask"],
          ["buscar · to look for", "explicar · to explain"],
          ["esperar · to wait for", "contestar · to answer"],
          ["escuchar · to listen to", "dar · to give"],
          ["oír · to hear", "mandar · to send"],
          ["llamar · to call", "escribir · to write to"],
          ["ayudar · to help", "enseñar · to show"],
          ["llevar · to take", "hablar · to talk to"],
        ]},
      { t: "note", v: "Recibir, querer (a person), visitar, invitar and entender take their person or thing directly too: *Quiero mucho a mi abuela*, \"I love my grandmother very much\"." },
      { t: "note", v: "With a verb of the second column, the thing is the direct object: *Le di el libro a Natalia*, \"I gave Natalia the book\"." },
    ],
  },
  {
    tab: "Pronouns",
    h: "3 · Lo, la, los, las",
    blocks: [
      { t: "lead", v: "Instead of repeating a person or thing, use lo, la, los or las for a direct object, and le or les for an indirect one: *Lo conozco*, \"I know him\"; *Le dije la verdad*, \"I told her the truth\"." },
      { t: "table", bold: 0,
        cols: ["Direct", "Indirect", "English"],
        rows: [
          ["me", "me", "me"],
          ["te", "te", "you (tú)"],
          ["lo · la", "le", "him · her · it · you (usted)"],
          ["nos", "nos", "us"],
          ["los · las", "les", "them · you (ustedes)"],
        ]},
      { t: "note", v: "Lo is a man or a masculine thing, la a woman or a feminine thing: *Conozco al profesor Rosales* becomes *Lo conozco*, \"I know him\"; *Ayudo a mi mamá* becomes *La ayudo*, \"I help her\"." },
      { t: "note", v: "For \"it\", use the thing's gender: *Compré el libro* becomes *Lo compré*, and *Compré la computadora* becomes *La compré*, \"I bought it\". For an idea, use lo: *No lo sé*, \"I don't know\"." },
      { t: "note", v: "**The trap:** a person with a is still a direct object: *Veo a Natalia* becomes *La veo*, \"I see her\", never le veo." },
      { t: "note", v: "When le or les is already there, just leave the person out: *Les hablo a mis papás* becomes *Les hablo*, \"I talk to them\"." },
      { t: "sub", v: "Where it goes" },
      { t: "note", v: "The pronoun goes before the verb, and after no: *No lo conozco*, \"I don't know him\"; *¿Dónde lo conociste?*, \"where did you meet him?\"." },
      { t: "note", v: "With a verb in its dictionary form, or an -ando or -iendo form, it can also be joined to the end: *¿Cuándo los vas a recibir?* and *¿Cuándo vas a recibirlos?* both mean \"when are you going to get them?\"; *La estoy buscando* and *Estoy buscándola*, \"I'm looking for her\"." },
      { t: "note", v: "After hay que, it always goes at the end: *Hay que hacerlos hoy*, \"they have to be done today\"." },
      { t: "sub", v: "In answers" },
      { t: "note", v: "Answering, me becomes te and te becomes me: *¿Me oyes? Sí, te oigo*, \"can you hear me? Yes, I can hear you\". Nos becomes los or las, the pronoun for ustedes: *¿Nos ves? Sí, los veo*, \"can you see us? Yes, I can see you\"." },
      { t: "note", v: "Les, said to ustedes, becomes nos: *¿El profesor les contestó a ustedes? Sí, nos contestó*, \"did the teacher answer you? Yes, he answered us\"." },
    ],
  },
  {
    tab: "Him, her",
    h: "4 · Translating him, her, it and them",
    blocks: [
      { t: "lead", v: "To translate \"him\", \"her\", \"it\" or \"them\", first find out whether the Spanish verb takes its person directly (lo, la, los, las) or as the one who gets something (le, les)." },
      { t: "table", bold: 1,
        cols: ["English", "Spanish"],
        rows: [
          ["I saw her", "La vi"],
          ["I listened to him", "Lo escuché"],
          ["I waited for them", "Los esperé"],
          ["I bought it (the book)", "Lo compré"],
          ["I asked her", "Le pregunté"],
          ["I told them", "Les dije"],
        ]},
      { t: "note", v: "English can mislead: \"listen to\" and \"wait for\" have a to or a for, but escuchar and esperar take their person directly: *Lo escuché*, *Los esperé*. \"Ask\" has neither, but preguntar takes le: *Le pregunté*." },
    ],
  },
  {
    tab: "Se lo",
    h: "5 · Two pronouns together",
    blocks: [
      { t: "lead", v: "When a verb has both a thing and a person, the person's pronoun comes first: *Mi mamá me lo dio*, \"my mom gave it to me\"." },
      { t: "note", v: "Le and les become se before lo, la, los or las. Never say le lo: *Le di el libro a Natalia* becomes *Se lo di*, \"I gave it to her\"." },
      { t: "table", bold: 1,
        cols: ["One by one", "Two pronouns"],
        rows: [
          ["Mi mamá me dio el libro", "Mi mamá me lo dio"],
          ["Te mando las fotos mañana", "Te las mando mañana"],
          ["Le di el libro a Natalia", "Se lo di"],
          ["Les mandé las fotos a mis papás", "Se las mandé"],
        ]},
      { t: "note", v: "This se can be him, her, you or them. To be clear, add a and the person: *Se lo di a Natalia*, \"I gave it to Natalia\"." },
      { t: "note", v: "With a verb in its dictionary form, the two stay together, before the first verb or joined to the end of the second: *Te lo voy a decir* and *Voy a decírtelo* both mean \"I'm going to tell you\"." },
    ],
  },
  {
    tab: "Phrases",
    h: "6 · In the dialogue",
    blocks: [
      { t: "lead", v: "Ir with me, te, le, nos or les says how something went for someone: *¿Cómo te fue?*, \"how did it go?\"; *Me fue bien*, \"it went well\"." },
      { t: "note", v: "It works like gustar: *¿Cómo les fue?*, \"how did it go for them?\"; *Te va a ir bien*, \"it's going to go well for you\"." },
      { t: "note", v: "Parecer works like gustar too: *Me pareció muy difícil*, \"I found it very difficult\"." },
      { t: "note", v: "Mala para is \"bad at\": *Soy muy mala para la filosofía*, \"I'm very bad at philosophy\"." },
    ],
  },
];

export const LESSON = {
  id: "leccion17",
  title: "Lesson 17 · Him, her, it, them",
  subtitle: "Recibir and oír, direct and indirect objects, lo, la, los, las, and two pronouns together (se lo)",
  source: "Adapted from the LFL METHOD by Laura Caufour",
  cards: CARDS,
  notes: NOTES,
  // The order a student meets NEW cards in. The grammar cards went on
  // 2026-10-25, and what is left keeps the order it had: the sheet's own, each
  // set of words before the phrases that use them, and the verb forms last, as
  // their phrases use this lesson's words. Reviews are unaffected; FSRS
  // schedules those.
  teachingOrder: [
    "vocab", "verbos", "dialogo", "verbforms",
  ],
};

export default LESSON;
