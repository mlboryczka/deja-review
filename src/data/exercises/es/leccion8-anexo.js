// Lección 8 · Anexo, la hora y la fecha — the written exercises of
// "EJERCICIOS - Lección 8 - ANEXO - La hora y la fecha", for the Exercises
// page. The sheet has no answer key: every answer here was written for the
// app, as a Mexican Spanish teacher would mark it. The annex has no lesson
// sheet of its own: the rules are Lección 8's "Gramática – otros".
// Ex. 1 says "Leer en voz alta y traducir" and ex. 2 is "Traducción oral";
// neither needs audio, so both are kept and typed here (ex. 1 into English,
// ex. 2 into Spanish). Ex. 3's first line, "5/5 → el cinco de mayo", is
// already filled in on the sheet: it is the example, not an item. Ex. 4
// ("diciendo la verdad") is open: Claude marks it, and the answer is one
// example. Ex. 5 (dictation) needs audio and is left out.

export default {
  id: "leccion8-anexo",
  exercises: [
    {
      n: 1,
      title: "Lectura",
      instruction: "Leer las frases siguientes en voz alta y traducir.",
      english: "Read each sentence (aloud, if you can) and translate it into English.",
      items: [
        { prompt: "Son las 2:39 de la tarde.", answer: "It's 2:39 p.m.",
          also: ["It is 2:39 p.m.", "It's 2:39 in the afternoon.", "It is 2:39 in the afternoon."] },
        { prompt: "La película empezó a las 8:30 de la noche.", answer: "The movie started at 8:30 p.m.",
          also: ["The movie started at 8:30 in the evening.", "The movie started at 8:30 at night.", "The movie began at 8:30 p.m.", "The film started at 8:30 p.m.", "The movie started at half past eight in the evening."] },
        { prompt: "Creo que es a las 11:15 de la mañana.", answer: "I think it's at 11:15 a.m.",
          also: ["I think it is at 11:15 a.m.", "I think it's at 11:15 in the morning.", "I think it's at a quarter past eleven in the morning."] },
        { prompt: "Comimos al mediodía.", answer: "We had lunch at noon.",
          also: ["We ate at noon.", "We had lunch at midday.", "We ate at midday."] },
        { prompt: "Son las 6:27 de la tarde.", answer: "It's 6:27 p.m.",
          also: ["It is 6:27 p.m.", "It's 6:27 in the evening.", "It's 6:27 in the afternoon."] },
        { prompt: "El restaurante abre a las 10:10 de la mañana.", answer: "The restaurant opens at 10:10 a.m.",
          also: ["The restaurant opens at 10:10 in the morning."] },
        { prompt: "Llegó a las 11 de la noche.", answer: "He arrived at 11 p.m.",
          also: ["She arrived at 11 p.m.", "You arrived at 11 p.m.", "He arrived at 11 at night.", "She arrived at 11 at night.", "He arrived at eleven at night.", "She arrived at eleven at night."] },
        { prompt: "Salí del trabajo a las 7:03 de la tarde.", answer: "I left work at 7:03 p.m.",
          also: ["I left work at 7:03 in the evening."] },
        { prompt: "Creo que son las 6:05 de la mañana.", answer: "I think it's 6:05 a.m.",
          also: ["I think it is 6:05 a.m.", "I think it's 6:05 in the morning."] },
        { prompt: "Me levanté a las 9:24.", answer: "I got up at 9:24." },
        { prompt: "Llegaron a la una de la mañana.", answer: "They arrived at one in the morning.",
          also: ["They arrived at 1 a.m.", "They arrived at one a.m.", "You arrived at 1 a.m.", "You guys arrived at 1 a.m."] },
        { prompt: "La clase empezó a la 1:01 de la tarde.", answer: "The class started at 1:01 p.m.",
          also: ["The class began at 1:01 p.m.", "The class started at 1:01 in the afternoon."] },
      ],
    },
    {
      n: 2,
      title: "Traducción oral nivel 1",
      instruction: "Traducir las frases siguientes al español.",
      english: "Translate these sentences into Spanish, saying the time the spoken way: with de la mañana, de la tarde or de la noche, not the 24-hour clock.",
      items: [
        { prompt: "Excuse me, what time is it, please? (usted)", answer: "Disculpe, ¿qué hora es, por favor?",
          also: ["Perdone, ¿qué hora es, por favor?", "Perdón, ¿qué hora es, por favor?", "Disculpe, ¿qué horas son, por favor?"] },
        { prompt: "It's 2 p.m.", answer: "Son las dos de la tarde." },
        { prompt: "The meeting started at 8 a.m.", answer: "La reunión empezó a las ocho de la mañana.",
          also: ["La junta empezó a las ocho de la mañana.", "La reunión comenzó a las ocho de la mañana."] },
        { prompt: "I left work at 6 p.m.", answer: "Salí del trabajo a las seis de la tarde.",
          also: ["Yo salí del trabajo a las seis de la tarde."] },
        { prompt: "I got up at 7 a.m.", answer: "Me levanté a las siete de la mañana.",
          also: ["Yo me levanté a las siete de la mañana."] },
        { prompt: "Did you have lunch at noon? (tú)", answer: "¿Comiste al mediodía?",
          also: ["¿Tú comiste al mediodía?", "¿Comiste a mediodía?"] },
        { prompt: "I came back home at 3 a.m.", answer: "Regresé a casa a las tres de la mañana.",
          also: ["Yo regresé a casa a las tres de la mañana.", "Regresé a la casa a las tres de la mañana.", "Volví a casa a las tres de la mañana.", "Regresé a casa a las tres de la madrugada."] },
        { prompt: "I arrived at midnight.", answer: "Llegué a la medianoche.",
          also: ["Llegué a medianoche.", "Yo llegué a la medianoche.", "Yo llegué a medianoche."] },
        { prompt: "I think it's 1 a.m. there.", answer: "Creo que allá es la una de la mañana.",
          also: ["Creo que es la una de la mañana allá.", "Creo que allí es la una de la mañana.", "Creo que ahí es la una de la mañana."] },
        { prompt: "I had breakfast at a quarter past five.", answer: "Desayuné a las cinco y cuarto.",
          also: ["Yo desayuné a las cinco y cuarto.", "Desayuné a las cinco y cuarto de la mañana.", "Desayuné a las cinco y quince.", "Desayuné a las cinco quince."] },
        { prompt: "I went to the gym at 6:30 p.m.", answer: "Fui al gimnasio a las seis y media de la tarde.",
          also: ["Yo fui al gimnasio a las seis y media de la tarde.", "Fui al gimnasio a las seis treinta de la tarde."] },
        { prompt: "It's a quarter to nine.", answer: "Es un cuarto para las nueve.",
          also: ["Es cuarto para las nueve.", "Son cuarto para las nueve.", "Falta un cuarto para las nueve.", "Faltan quince para las nueve.", "Faltan quince minutos para las nueve.", "Son quince para las nueve.", "Son las ocho cuarenta y cinco.", "Son las ocho y cuarenta y cinco.", "Son las nueve menos cuarto."] },
      ],
    },
    {
      n: 3,
      title: "Gramática",
      instruction: "Escribir las fechas en letras.",
      english: "Write each date out in words: el + the day + de + the month. The day comes first.",
      example: "5/5 → el cinco de mayo",
      footnote: "En español, el día va antes del mes: 14/2 = el catorce de febrero.",
      items: [
        { prompt: "1/1 →", answer: "el primero de enero", also: ["el uno de enero"] },
        { prompt: "14/2 →", answer: "el catorce de febrero" },
        { prompt: "16/9 →", answer: "el dieciséis de septiembre", also: ["el dieciséis de setiembre"] },
        { prompt: "4/7 →", answer: "el cuatro de julio" },
        { prompt: "25/12 →", answer: "el veinticinco de diciembre" },
        { prompt: "31/10 →", answer: "el treinta y uno de octubre" },
        { prompt: "2/11 →", answer: "el dos de noviembre" },
      ],
    },
    {
      n: 4,
      title: "Interacción",
      instruction: "Responder a las preguntas diciendo la verdad.",
      english: "Answer each question truthfully, in a full sentence.",
      footnote: "* el cumpleaños = birthday",
      items: [
        { prompt: "¿Qué hora es?", open: true, answer: "Son las diez y media de la mañana." },
        { prompt: "¿Qué fecha es hoy?", open: true, answer: "Hoy es el veinticuatro de octubre." },
        { prompt: "¿A qué hora te levantaste hoy?", open: true, answer: "Hoy me levanté a las siete." },
        { prompt: "¿A qué hora desayunaste?", open: true, answer: "Desayuné a las siete y media." },
        { prompt: "¿A qué hora empezó tu clase de español?", open: true, answer: "Mi clase de español empezó a las seis de la tarde." },
        { prompt: "¿En qué mes es tu cumpleaños*?", open: true, answer: "Mi cumpleaños es en marzo." },
      ],
    },
  ],
};
