// Lesson 8 · The preterite — built from the Spanish course's Lección 8 sheets
// (adapted from Laura Caufour's LFL METHOD): the lesson (Andrés's day, the
// pretérito of regular verbs, telling the time, months and dates, numbers 30
// to 59, the translation), the exercise sheet, and the exercise annex on the
// time and the date. There is no answer key: every answer here was written
// for this file, as a Mexican Spanish teacher would answer the exercises.
//
// The students have had Lessons 1 to 7: the present of regular and
// irregular verbs, gustar, ser and estar, and numbers to 29.
//
// Each entry is [front, back, category, section]. The front is always the
// Spanish; see ../imperatif.js for why.
//
// Card shapes:
//   "hablar (pretérito) → yo" / "hablé"          the paradigm; the line above comes from the shape
//   "buscar (pretérito) → yo" / "busqué"         the -car, -gar, -zar spelling change
//   "vivir → Mis abuelos ___ en Montauk…"        the cue verb in the pretérito (ex. 1)
//   "¿Qué hora es? → 8:15"                       say the time, in words
//   "14/2 → en letras" / "el catorce de febrero" a date, day first (annex ex. 3)
//   "47 → en letras" / "cuarenta y siete"        the numbers
//   "anoche o en la noche → Siempre leo ___"     en la noche, not anoche, for nights in general
//   two-way phrase (E) and word (V) cards for the dialogue and the ex. 6 list
//
// The drills are her three model verbs' two patterns: hablar for -ar, and
// comer for -er and -ir, which share one set of endings; vivir is in the
// notes' table and in the gap cards (vivieron, salió, escribieron). Every
// accent in an answer is written, but no card turns on one: hablo and habló
// differ only by the accent, which the app doesn't mark, so her ex. 2 "hablo
// / habló" is not a card. The spelling drills ask only for yo, the one
// person that changes; "La reunión ___ a las diez" shows that the others
// don't (empezó).
//
// What is not drilled, and why:
//   - Fui, tuve and hiciste: her sheet says they are irregular, taught in
//     Lesson 9, and to learn them by heart for now. They are in two phrase
//     cards from the dialogue ("Fui al trabajo", "Tuve una reunión con mi
//     jefe"), not drilled.
//   - Me levanté, me bañé, nos acostamos: the pronoun before the verb is
//     Lesson 12's grammar. "¿Te levantaste a las siete? → sí" asks for "me
//     levanté" as she does in ex. 3, and bañarse and acostarse are word cards.
//
// Sampled, not transcribed: each card teaches something no other card does.
//   - Ex. 1: six of her fifteen, each adding something to the drills: tú in a
//     question (escuchaste), an -ir verb with a noun subject (vivieron,
//     escribieron), salir (salió), "Mi esposa y yo" as nosotros
//     (cocinamos), and empezar outside yo (empezó). Her buscar and llegar
//     sentences are the yo drills; desayunar is asked on an ex. 3 card;
//     hablar, comer and cenar repeat the drills.
//   - Ex. 3 (tú → yo): desayuné, llegué (the spelling change), and me levanté
//     (te → me). Ex. 4: ustedes → nosotros (cocinamos), tus → mis
//     (comieron), and gustar in the pretérito (le gustó).
//   - Ex. 7 and 8: their sentences are the phrase cards, the time cards
//     ("It's a quarter past ten", "It's twenty to nine", "I left work at 6
//     p.m."), the date cards ("Today is March 3rd" → 3/3) and "We came back
//     in July".
//   - The time: her table (1:00, 4:10, y cuarto, y media, cuarto para) and
//     her two "a qué hora" examples; "2:00 PM" for de la tarde (annex ex. 2,
//     "It's 2 p.m."). 8:40 is left out: "Son las ocho cuarenta" answers it
//     without the para the card would be for, and 8:45 already asks for it.
//   - The dates: one card per month, so every month name is learnt; her
//     annex ex. 3 gives seven (1/1, 14/2, 16/9, 4/7, 25/12, 31/10, 2/11), her
//     example 5/5, her ex. 8 3/3, and 22/4, 30/6 and 15/8 are added for April,
//     June and August.
//   - The numbers: 30, 40 and 50, 31 (the first three-word number) and 47.
//
// Not made into cards: ex. 2 and 5 (translate orally and quickly) and annex
// ex. 1 (read aloud) are spoken drills; annex ex. 4 asks for the student's
// own time and date; ex. 9 and annex ex. 5 (dictation) and ex. 10 (oral
// answers) need the audio.
//
// Vocabulary is the ex. 6 list, less the words earlier lessons own: "to have
// dinner" (cenar, Lesson 2), "then / after that" (después, Lessons 2 and 6),
// and "to cook" (cocinar, Lesson 7). "To have lunch" is comer, Lesson 4's
// verb, so it is learnt in the dialogue's "Comí con unos compañeros", which
// also carries "coworkers"; "to have a good day" is the dialogue's "¿Pasaste
// un buen día?"; "What time is it?" is a phrase card. "Last night" is carded
// as "anoche / ayer en la noche": the dialogue says ayer en la noche, and
// anoche is just as right. "At night" and "last night" are two letters
// apart, so on those word cards typo tolerance passes "last night" for en la
// noche and "at night" for anoche, and "ayer en la noche" passes for "at
// night" because it contains en la noche. So the choice is also asked on an
// exact card, "anoche o en la noche → Siempre leo ___" (en la noche, or por
// la noche, which a teacher would accept). It is not one of her exercises.
// The word cards still let the confusion through; only a change to the
// app's fuzzy marking closes that.
//
// Where this departs from the sheets:
//   - Answers she doesn't give, accepted because a teacher would: "el uno de
//     enero" beside her "el primero" (both are used in Latin America);
//     "setiembre" beside septiembre; for 8:15, 8:30 and 8:45 the plain
//     minutes (las ocho quince) and, for 8:45, "son cuarto para las nueve",
//     "faltan quince para las nueve" and "son las nueve menos cuarto".
//   - The yes cards take the answer with and without the Sí the front shows,
//     and with and without the subject pronoun; "¿Ustedes cocinaron
//     juntos?" also takes "juntas".
//   - Her grammar section 3 says the pronoun goes before the verb "como en
//     presente (lección 12)", but the present of these verbs is Lesson 12;
//     the notes give me levanté as a form to learn as it is.
//
// The notes (Use · Forms · Time · Dates · Numbers) are her grammar in
// English. Sentences in them that are not hers, each there because a card
// needs it:
//   - Use: "Comer, "to eat", also means "to have lunch"" (her dialogue and
//     translation show it).
//   - Forms: "Mi esposa y yo takes the nosotros form" (her ex. 1); "Empezar
//     keeps its e in the pretérito" (her table shows empecé, and Lesson 5
//     taught empiezo); and the three notes under "Answering yes", which her
//     ex. 3 and 4 only show (le gustó included).
//   - Time: "With no clock time, say en…", for the word cards en la mañana,
//     en la tarde, en la noche beside her de la mañana; and "Anoche and ayer
//     en la noche both mean last night…", for the anoche or en la noche card.
//   - Dates: "For "in" a month, say en", which her "en julio → in July"
//     shows. Her "Los meses no llevan mayúscula" is left out: the app doesn't
//     mark capitals. Her line that the 24-hour clock is for written
//     timetables is left out too: no card asks for it.
//
// "Regresar" says "(not volver)" on its English side: Lesson 9 teaches volver
// for the same English, and its card says "(not regresar)".
//
// Checked 2026-10-22 by an independent reader: 7 fixes
//
// Taken out on 2026-10-25, at the owner's word ("Yes, take the yes-or-no
// flashcards like "¿Eres estadounidense? → Sí, …" out of the Spanish lessons
// too"): the 6 cards that answered a question with yes or no in a full
// sentence (section "yes").

export const CARDS = [
  // ── 1. The pretérito of regular verbs: -ar, and -er / -ir
  ["hablar (pretérito) → yo", "hablé", "G", "forms"],
  ["hablar (pretérito) → tú", "hablaste", "G", "forms"],
  ["hablar (pretérito) → él/ella", "habló", "G", "forms"],
  ["hablar (pretérito) → nosotros", "hablamos", "G", "forms"],
  ["hablar (pretérito) → ustedes", "hablaron", "G", "forms"],
  ["hablar (pretérito) → ellos/ellas", "hablaron", "G", "forms"],
  ["comer (pretérito) → yo", "comí", "G", "forms"],
  ["comer (pretérito) → tú", "comiste", "G", "forms"],
  ["comer (pretérito) → él/ella", "comió", "G", "forms"],
  ["comer (pretérito) → nosotros", "comimos", "G", "forms"],
  ["comer (pretérito) → ustedes", "comieron", "G", "forms"],
  ["comer (pretérito) → ellos/ellas", "comieron", "G", "forms"],

  // ── 2. -car, -gar, -zar: only yo changes its spelling
  ["buscar (pretérito) → yo", "busqué", "G", "spelling"],
  ["llegar (pretérito) → yo", "llegué", "G", "spelling"],
  ["empezar (pretérito) → yo", "empecé", "G", "spelling"],

  // ── Ex. 6: the times of the day, before the cards that use them
  ["ayer", "yesterday", "V", "day"],
  ["en la mañana", "in the morning", "V", "day"],
  ["al mediodía", "at noon / at midday", "V", "day"],
  ["en la tarde", "in the afternoon", "V", "day"],
  ["en la noche", "in the evening / at night", "V", "day"],
  ["anoche / ayer en la noche", "last night", "V", "day"],
  ["la medianoche", "midnight", "V", "day"],

  // ── Any night or last night: on the word cards above, "at night" and "last
  //    night" pass for each other, so the choice is asked exactly here
  ["anoche o en la noche → Siempre leo ___", "en la noche / por la noche / en las noches / por las noches", "G", "night"],

  // ── Ex. 6: the rest of her list
  ["desayunar", "to have breakfast / to eat breakfast", "V", "words"],
  ["escuchar la radio", "to listen to the radio", "V", "words"],
  ["bañarse", "to take a shower / to shower / to take a bath / to bathe", "V", "words"],
  ["regresar", "to go back / to come back / to return (not volver)", "V", "words"],
  ["una reunión", "a meeting", "V", "words"],
  ["mi jefe", "my boss", "V", "words"],
  ["el gimnasio", "the gym", "V", "words"],
  ["acostarse", "to go to bed", "V", "words"],
  ["cerca del trabajo", "near work / close to work", "V", "words"],
  ["salir del trabajo", "to leave work", "V", "words"],

  // ── Ex. 1: the cue verb in the pretérito. What each adds is in the comment
  ["escuchar → ¿Tú ___ la radio esta mañana?", "escuchaste", "G", "gaps"],       // tú in a question
  ["vivir → Mis abuelos ___ en Montauk muchos años", "vivieron", "G", "gaps"],    // -ir, a plural noun
  ["salir → Ella ___ del trabajo a las seis", "salió", "G", "gaps"],
  ["cocinar → Mi esposa y yo ___ juntos", "cocinamos", "G", "gaps"],            // "my wife and I" is nosotros
  ["empezar → La reunión ___ a las diez", "empezó", "G", "gaps"],               // only yo changes spelling
  ["escribir → Mis amigos ___ en español", "escribieron", "G", "gaps"],

  // ── Phrases from the dialogue and her ex. 7 and 8
  ["¿Pasaste un buen día?", "Did you have a good day? (tú)", "E", "phrases"],
  ["Comí con unos compañeros", "I had lunch with some coworkers / I ate with some coworkers / I had lunch with some colleagues", "E", "phrases"],
  ["Fui al trabajo", "I went to work", "E", "phrases"],
  ["Tuve una reunión con mi jefe", "I had a meeting with my boss", "E", "phrases"],
  ["¿Ya comiste?", "Have you eaten yet? / Have you eaten? / Have you already eaten? / Did you eat already? / Did you eat yet? (tú)", "E", "phrases"],
  ["Regresamos en julio", "We came back in July / We went back in July / We returned in July", "E", "phrases"],
  ["¿Qué hora es?", "What time is it? / What's the time?", "E", "phrases"],

  // ── Other grammar 1: telling the time
  ["¿Qué hora es? → 1:00", "Es la una / Es la una en punto", "G", "time"],
  ["¿Qué hora es? → 4:10", "Son las cuatro y diez / Son las cuatro diez", "G", "time"],
  ["¿Qué hora es? → 8:15", "Son las ocho y cuarto / Son las ocho y quince / Son las ocho quince", "G", "time"],
  ["¿Qué hora es? → 8:30", "Son las ocho y media / Son las ocho y treinta / Son las ocho treinta", "G", "time"],
  ["¿Qué hora es? → 8:45", "Es un cuarto para las nueve / Es cuarto para las nueve / Son cuarto para las nueve / Falta un cuarto para las nueve / Faltan quince para las nueve / Faltan quince minutos para las nueve / Son quince para las nueve / Son las ocho cuarenta y cinco / Son las ocho y cuarenta y cinco / Son las nueve menos cuarto", "G", "time"],
  ["¿Qué hora es? → 2:00 PM", "Son las dos de la tarde", "G", "time"],
  ["¿A qué hora es la clase? → 1:00", "Es a la una / A la una / La clase es a la una / Es a la una en punto / A la una en punto / La clase es a la una en punto / Es a la una de la tarde / A la una de la tarde / La clase es a la una de la tarde", "G", "time"],
  ["¿A qué hora saliste del trabajo? → 6:00", "Salí a las seis / Salí del trabajo a las seis / A las seis / Yo salí a las seis / Yo salí del trabajo a las seis / Salí a las seis de la tarde / Salí del trabajo a las seis de la tarde / A las seis de la tarde / Yo salí a las seis de la tarde / Yo salí del trabajo a las seis de la tarde", "G", "time"],

  // ── Other grammar 3: numbers 30 to 59
  ["30 → en letras", "treinta", "G", "numbers"],
  ["31 → en letras", "treinta y uno", "G", "numbers"],
  ["40 → en letras", "cuarenta", "G", "numbers"],
  ["47 → en letras", "cuarenta y siete", "G", "numbers"],
  ["50 → en letras", "cincuenta", "G", "numbers"],

  // ── Other grammar 2 and annex ex. 3: one date for each month, day first
  ["1/1 → en letras", "el primero de enero / el uno de enero", "G", "dates"],
  ["14/2 → en letras", "el catorce de febrero", "G", "dates"],
  ["3/3 → en letras", "el tres de marzo", "G", "dates"],
  ["22/4 → en letras", "el veintidós de abril", "G", "dates"],
  ["5/5 → en letras", "el cinco de mayo", "G", "dates"],
  ["30/6 → en letras", "el treinta de junio", "G", "dates"],
  ["4/7 → en letras", "el cuatro de julio", "G", "dates"],
  ["15/8 → en letras", "el quince de agosto", "G", "dates"],
  ["16/9 → en letras", "el dieciséis de septiembre / el dieciséis de setiembre", "G", "dates"],
  ["31/10 → en letras", "el treinta y uno de octubre", "G", "dates"],
  ["2/11 → en letras", "el dos de noviembre", "G", "dates"],
  ["25/12 → en letras", "el veinticinco de diciembre", "G", "dates"],
];

export const NOTES = [
  {
    tab: "Use",
    h: "1 · What the pretérito is for",
    blocks: [
      { t: "lead", v: "The *pretérito* says what happened at a set moment in the past, like the English simple past: *comí*, \"I ate\"." },
      { t: "pairs", head: ["Spanish", "English"], v: [
        ["miré", "I looked"],
        ["comí", "I ate"],
        ["viví", "I lived"],
        ["Ayer hablamos con Lucía", "Yesterday we spoke with Lucía"],
      ]},
      { t: "note", v: "It often comes with a word that sets the time: *ayer*, \"yesterday\"; *el lunes*, \"on Monday\"; *en 2012*, \"in 2012\"." },
      { t: "sub", v: "Have you eaten yet?" },
      { t: "note", v: "In Latin America, the pretérito also often says what English says with \"have\": *¿Ya comiste?*, \"Have you eaten yet?\"." },
      { t: "sub", v: "Lunch" },
      { t: "note", v: "*Comer*, \"to eat\", also means \"to have lunch\": *Comí con unos compañeros*, \"I had lunch with some coworkers\"." },
      { t: "sub", v: "Learn these as they are" },
      { t: "note", v: "*Fui*, \"I went\", *tuve*, \"I had\", and *hiciste*, \"you did\", are irregular; for now, learn them by heart: *Fui al trabajo*, \"I went to work\"; *Tuve una reunión con mi jefe*, \"I had a meeting with my boss\"." },
      { t: "note", v: "*Me levanté*, \"I got up\", *me bañé*, \"I took a shower\", and *nos acostamos*, \"we went to bed\", have *me* or *nos* before the verb; for now, learn them as they are too." },
    ],
  },
  {
    tab: "Forms",
    h: "2 · Regular verbs in the pretérito",
    blocks: [
      { t: "lead", v: "Take off the -ar, -er or -ir and add the ending for the person; -er and -ir verbs share the same endings: *hablé*, \"I spoke\"; *comí*, \"I ate\"." },
      { t: "table", bold: 0,
        cols: ["Person", "hablar · to speak", "comer · to eat", "vivir · to live"],
        rows: [
          ["yo", "hablé", "comí", "viví"],
          ["tú", "hablaste", "comiste", "viviste"],
          ["él / ella / usted", "habló", "comió", "vivió"],
          ["nosotros", "hablamos", "comimos", "vivimos"],
          ["ellos / ellas / ustedes", "hablaron", "comieron", "vivieron"],
        ]},
      { t: "note", v: "The accent changes the meaning: *hablo* is \"I speak\", but *habló* is \"he spoke\"." },
      { t: "sub", v: "We speak or we spoke?" },
      { t: "note", v: "For -ar and -ir verbs, the nosotros form is the same in the present and the pretérito: *hablamos*, \"we speak\" or \"we spoke\". The rest of the sentence tells you which: *Ayer hablamos con Lucía*, \"Yesterday we spoke with Lucía\"." },
      { t: "note", v: "*Mi esposa y yo*, \"my wife and I\", takes the nosotros form: *Mi esposa y yo cocinamos juntos*, \"My wife and I cooked together\"." },
      { t: "sub", v: "Verbs ending in -car, -gar and -zar" },
      { t: "note", v: "In the yo form only, c becomes qu, g becomes gu and z becomes c, to keep the sound: *busqué*, \"I looked for\"; *llegué*, \"I arrived\"; *empecé*, \"I started\"." },
      { t: "table", bold: 1,
        cols: ["Verb", "yo", "él / ella"],
        rows: [
          ["buscar · to look for", "busqué", "buscó"],
          ["llegar · to arrive", "llegué", "llegó"],
          ["empezar · to start", "empecé", "empezó"],
        ]},
      { t: "note", v: "*Empezar* keeps its e in the pretérito: *La reunión empezó a las diez*, \"The meeting started at ten\"." },
      { t: "sub", v: "Answering yes" },
      { t: "note", v: "Answer a question asked with tú in the yo form, and change te to me: *¿Te levantaste a las siete?* → *Sí, me levanté a las siete*, \"Did you get up at seven? Yes, I got up at seven\"." },
      { t: "note", v: "Change tu and tus, \"your\", to mi and mis, \"my\": *¿Tus compañeros comieron en el restaurante?* → *Sí, mis compañeros comieron en el restaurante*, \"Did your coworkers eat at the restaurant? Yes, my coworkers ate at the restaurant\"." },
      { t: "note", v: "Answer a question asked with ustedes in the nosotros form: *¿Ustedes cocinaron juntos?* → *Sí, cocinamos juntos*, \"Did you guys cook together? Yes, we cooked together\"." },
      { t: "note", v: "With gustar, the verb goes with the thing liked, so one thing takes *gustó*: *¿A tu amigo le gustó el restaurante?* → *Sí, a mi amigo le gustó el restaurante*, \"Did your friend like the restaurant? Yes, my friend liked the restaurant\"." },
    ],
  },
  {
    tab: "Time",
    h: "3 · Telling the time",
    blocks: [
      { t: "lead", v: "Say *es la una* for one o'clock and *son las* with every other hour: *son las cuatro y diez*, \"it's 4:10\"." },
      { t: "table", bold: 1,
        cols: ["Time", "Spanish"],
        rows: [
          ["1:00", "Es la una"],
          ["4:10", "Son las cuatro y diez"],
          ["8:15", "Son las ocho y cuarto"],
          ["8:30", "Son las ocho y media"],
          ["8:40", "Son veinte para las nueve · Son las ocho cuarenta"],
          ["8:45", "Es un cuarto para las nueve"],
          ["12:00 noon", "Es mediodía"],
          ["12:00 midnight", "Es medianoche"],
        ]},
      { t: "sub", v: "Minutes to the hour" },
      { t: "note", v: "After half past, you can count the minutes left to the next hour with *para*, and the verb goes with the minutes: *son veinte para las nueve*, \"it's twenty to nine\"; *es un cuarto para las nueve*, \"it's a quarter to nine\"." },
      { t: "note", v: "*Faltan veinte para las nueve*, \"twenty minutes are left until nine\", says the same." },
      { t: "sub", v: "At what time?" },
      { t: "note", v: "To say when something happens, use *a la una* or *a las* and the hour: *¿A qué hora es la película? Es a las ocho y diez*, \"What time is the movie? It's at 8:10\"; *Salí a las seis*, \"I left at six\"." },
      { t: "sub", v: "Morning, afternoon, night" },
      { t: "note", v: "When you speak, use the 12-hour clock with *de la mañana*, *de la tarde* or *de la noche*: *Llegó a las once de la noche*, \"He arrived at eleven at night\". De la tarde runs from about 12 to 7, and de la noche after that." },
      { t: "note", v: "With no clock time, say *en*: *en la mañana*, \"in the morning\"; *en la tarde*, \"in the afternoon\"; *en la noche*, \"in the evening\"." },
      { t: "note", v: "*Anoche* and *ayer en la noche* both mean \"last night\". For nights in general, say *en la noche*: *Siempre leo en la noche*, \"I always read at night\"." },
    ],
  },
  {
    tab: "Dates",
    h: "4 · Months and dates",
    blocks: [
      { t: "lead", v: "Say a date as *el*, the number, *de* and the month: *el cinco de mayo*, \"May 5th\"." },
      { t: "note", v: "**The trap:** in Spanish the day comes before the month, so 4/7 is *el cuatro de julio*, \"July 4th\"." },
      { t: "table", bold: 1,
        cols: ["Month", "Spanish"],
        rows: [
          ["1 · January", "enero"],
          ["2 · February", "febrero"],
          ["3 · March", "marzo"],
          ["4 · April", "abril"],
          ["5 · May", "mayo"],
          ["6 · June", "junio"],
          ["7 · July", "julio"],
          ["8 · August", "agosto"],
          ["9 · September", "septiembre"],
          ["10 · October", "octubre"],
          ["11 · November", "noviembre"],
          ["12 · December", "diciembre"],
        ]},
      { t: "sub", v: "The 1st" },
      { t: "note", v: "The 1st of the month is *el primero*: *el primero de enero*, \"January 1st\"." },
      { t: "sub", v: "Asking the date" },
      { t: "note", v: "*¿Qué fecha es hoy?* *Hoy es el cinco de mayo*, \"What's the date today? Today is May 5th\"." },
      { t: "note", v: "For \"in\" a month, say *en*: *Regresamos en julio*, \"We came back in July\"." },
    ],
  },
  {
    tab: "Numbers",
    h: "5 · Numbers 30 to 59",
    blocks: [
      { t: "lead", v: "From 31 on, a number is three words: the tens, *y*, \"and\", then the unit: *treinta y uno*, \"thirty-one\"." },
      { t: "table", bold: 1,
        cols: ["Number", "In words"],
        rows: [
          ["30", "treinta"],
          ["31", "treinta y uno"],
          ["35", "treinta y cinco"],
          ["40", "cuarenta"],
          ["44", "cuarenta y cuatro"],
          ["47", "cuarenta y siete"],
          ["50", "cincuenta"],
          ["53", "cincuenta y tres"],
          ["59", "cincuenta y nueve"],
        ]},
    ],
  },
];

export const LESSON = {
  id: "leccion8",
  title: "Lesson 8 · The preterite",
  subtitle: "The pretérito of regular verbs, telling the time, dates, and 30 to 59",
  source: "Adapted from the LFL METHOD by Laura Caufour",
  cards: CARDS,
  notes: NOTES,
  // The order a student meets NEW cards in. The two patterns first, then the
  // yo spelling change; then the times of day and the rest of her list,
  // before the gap and yes cards that use them (la radio, la reunión, a las
  // seis); then her ex. 1 and the yes answers; the phrases from the dialogue
  // after the verbs they use; the time once "¿Qué hora es?" is known; the
  // numbers before the dates that use them (30/6, 31/10). Reviews are
  // unaffected; FSRS schedules those.
  teachingOrder: [
    "forms", "spelling",
    "day", "night", "words",
    "gaps",
    "phrases",
    "time",
    "numbers", "dates",
  ],
  // The line above a grammar card saying what to type
  // (src/lib/cardInstruction.js). The drills get theirs from their shape.
  instructions: {
    night: "Fill the gap with whichever of the two fits the sentence",
    gaps: "Fill the gap with the verb given, in the preterite (simple past)",
    time: "Answer in a full sentence, with the time in words",
    numbers: "Write this number in Spanish, in words",
    dates: "Write this date in words, starting with el (the day comes first)",
  },
};

export default LESSON;
