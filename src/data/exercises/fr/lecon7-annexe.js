// Leçon 7, annexe · Dire l'heure — the written exercises of "EXERCICES -
// Leçon 7 - ANNEXE - Dire l'heure", for the Exercises page. Her "CORRECTION
// EXERCICES - Leçon 7 - ANNEXE - Dire l'heure" gives every answer; the also
// lists are written for the app.
// Left out: ex. 4 (dictation) and ex. 5, 6 (translating what the audio says
// aloud): they need her audio.
// Notes:
//   - Ex. 2 and 3 are titled "Traduction orale" but need no audio, so they are
//     kept and typed here.
//   - English times are accepted with or without a space before am or pm
//     ("2.39pm", "2.39 pm"); a dot or a colon in the time is the same to the key.
//   - Answers with je and a past participle after être also accept the
//     feminine (sortie, rentrée).
//   - Her key's slips corrected: ex. 2 no. 1 "Quel heure" (Quelle), ex. 3
//     no. 11 "Quelle heure il est France ?" (en France). Ex. 2 no. 1: her
//     English "What time is it please ?" has a space before the question mark,
//     taken out here.
//   - Ex. 3 no. 12: "I woke up" is "Je me suis levé" in her key; "Je me suis
//     réveillé" is accepted too.

export default {
  id: "lecon7-annexe",
  exercises: [
    {
      n: 1,
      title: "Lecture",
      instruction: "Lire les phrases suivantes et traduire.",
      english: "Read each sentence and translate it into English, with the time in the 12-hour format (am, pm).",
      items: [
        { prompt: "Il est 14h39.", answer: "It's 2.39pm.",
          also: ["It is 2.39pm.", "It's 2.39 pm.", "It is 2.39 pm."] },
        { prompt: "Le film a commencé à 20h30.", answer: "The movie started at 8.30pm.",
          also: ["The film started at 8.30pm.", "The movie began at 8.30pm.", "The movie started at 8.30 pm.", "The film started at 8.30 pm.", "The movie began at 8.30 pm."] },
        { prompt: "Je pense que c'est à 11h15.", answer: "I think it is at 11.15am.",
          also: ["I think it's at 11.15am.", "I think it is at 11.15 am.", "I think it's at 11.15 am."] },
        { prompt: "Nous avons déjeuné à 12h.", answer: "We had lunch at noon.",
          also: ["We had lunch at midday.", "We ate lunch at noon.", "We had lunch at 12pm.", "We had lunch at 12.", "We had lunch at 12 pm."] },
        { prompt: "Il est 18h27.", answer: "It is 6.27pm.",
          also: ["It's 6.27pm.", "It is 6.27 pm.", "It's 6.27 pm."] },
        { prompt: "Le restaurant ouvre à 10h10.", answer: "The restaurant opens at 10.10am.",
          also: ["The restaurant opens at 10.10 am."] },
        { prompt: "Il est arrivé à 23h.", answer: "He arrived at 11pm.",
          also: ["He arrived at 11 at night.", "He arrived at 11 pm."] },
        { prompt: "Je suis sorti du travail à 19h03.", answer: "I left work at 7.03pm.",
          also: ["I left work at 7.03 pm."] },
        { prompt: "Je pense qu'il est 6h05.", answer: "I think it is 6.05am.",
          also: ["I think it's 6.05am.", "I think it is 6.05 am.", "I think it's 6.05 am."] },
        { prompt: "Je me suis levé à 9h24.", answer: "I got up at 9.24am.",
          also: ["I got up at 9.24 am."] },
        { prompt: "Ils sont arrivés à 1h du matin.", answer: "They arrived at 1am.",
          also: ["They arrived at 1 in the morning.", "They arrived at 1 am."] },
        { prompt: "J'ai dormi de minuit à 9h.", answer: "I slept from midnight to 9am.",
          also: ["I slept from midnight until 9am.", "I slept from midnight till 9am.", "I slept from midnight to 9 am.", "I slept from midnight until 9 am.", "I slept from midnight till 9 am."] },
        { prompt: "La leçon a commencé à 13h01.", answer: "The lesson started at 1.01pm.",
          also: ["The lesson began at 1.01pm.", "The class started at 1.01pm.", "The lesson started at 1.01 pm.", "The lesson began at 1.01 pm.", "The class started at 1.01 pm."] },
        { prompt: "Je suis allé à la salle de sport à 4h du mat' !", answer: "I went to the gym at 4am!",
          also: ["I went to the gym at 4 in the morning!", "I went to the gym at 4 am!"] },
      ],
    },
    {
      n: 2,
      title: "Traduction orale niveau 1",
      instruction: "Traduire les phrases suivantes en français.",
      english: "Translate these sentences into French, writing each time the French way (14h, 18h30).",
      items: [
        // Her key: "Quel heure il est s'il te plaît ?"; her English has "please ?".
        { prompt: "What time is it please?", answer: "Quelle heure il est s'il te plaît ?",
          also: ["Quelle heure il est s'il vous plaît ?", "Quelle heure est-il s'il te plaît ?", "Quelle heure est-il s'il vous plaît ?"] },
        { prompt: "It's 2pm.", answer: "Il est 14h.", also: ["Il est 14 heures.", "Il est quatorze heures."] },
        { prompt: "The meeting started at 8am.", answer: "La réunion a commencé à 8h.",
          also: ["La réunion a commencé à 8 heures.", "La réunion a commencé à 8h du matin."] },
        { prompt: "I left work at 6pm.", answer: "Je suis sorti du travail à 18h.",
          also: ["Je suis sortie du travail à 18h.", "Je suis sorti du travail à 18 heures."] },
        { prompt: "I got up at 7am.", answer: "Je me suis levé à 7h.",
          also: ["Je me suis levée à 7h.", "Je me suis levé à 7h du matin."] },
        { prompt: "Did you have lunch at 12?", answer: "Tu as déjeuné à midi ?",
          also: ["Tu as déjeuné à 12h ?", "Vous avez déjeuné à midi ?", "Est-ce que tu as déjeuné à midi ?"] },
        { prompt: "I went back home at 3am.", answer: "Je suis rentré à 3h du matin.",
          also: ["Je suis rentrée à 3h du matin.", "Je suis rentré à la maison à 3h du matin.", "Je suis rentré chez moi à 3h du matin."] },
        { prompt: "I arrived at midnight.", answer: "Je suis arrivé à minuit.", also: ["Je suis arrivée à minuit."] },
        { prompt: "I think it's 1am there.", answer: "Je pense qu'il est une heure du matin là-bas.",
          also: ["Je pense qu'il est 1h du matin là-bas.", "Je pense qu'il est 1h là-bas."] },
        { prompt: "Do you have the time please?", answer: "Tu as l'heure s'il te plaît ?", also: ["Vous avez l'heure s'il vous plaît ?"] },
        { prompt: "I had breakfast at 5am.", answer: "J'ai pris le petit-déjeuner à 5h.",
          also: ["J'ai pris le petit-déjeuner à 5h du matin.", "J'ai pris mon petit-déjeuner à 5h."] },
        { prompt: "I went to the gym at 6pm.", answer: "Je suis allé à la salle de sport à 18h.", also: ["Je suis allée à la salle de sport à 18h."] },
        { prompt: "Here, it is 10am.", answer: "Ici, il est 10h.", also: ["Ici, il est 10h du matin."] },
        { prompt: "Is it 10am there?", answer: "Il est 10h là-bas ?", also: ["Il est 10h du matin là-bas ?", "Est-ce qu'il est 10h là-bas ?"] },
      ],
    },
    {
      n: 3,
      title: "Traduction orale niveau 2",
      instruction: "Traduire les phrases suivantes en français.",
      english: "Translate these sentences into French, writing each time the French way (14h34, 20h15).",
      items: [
        { prompt: "At what time did you leave work?", answer: "À quelle heure tu es sorti du travail ?",
          also: ["À quelle heure tu es sortie du travail ?", "Tu es sorti du travail à quelle heure ?", "À quelle heure est-ce que tu es sorti du travail ?",
            "À quelle heure vous êtes sorti du travail ?"] },
        { prompt: "I think it's 8.30pm there.", answer: "Je pense qu'il est 20h30 là-bas." },
        { prompt: "He's going to arrive at 2.34pm.", answer: "Il va arriver à 14h34." },
        { prompt: "Is it midnight or midday there?", answer: "Il est midi ou minuit là-bas ?", also: ["Il est minuit ou midi là-bas ?"] },
        { prompt: "I want to be at the gym at 7.20am.", answer: "Je veux être à la salle de sport à 7h20." },
        { prompt: "They had dinner at 7.15pm.", answer: "Ils ont dîné à 19h15.", also: ["Elles ont dîné à 19h15."] },
        { prompt: "I came back home at 4.10pm.", answer: "Je suis rentré à 16h10.",
          also: ["Je suis rentrée à 16h10.", "Je suis rentré à la maison à 16h10.", "Je suis rentrée à la maison à 16h10."] },
        { prompt: "At what time is your French class?", answer: "À quelle heure est ton cours de français ?",
          also: ["À quelle heure est votre cours de français ?", "Ton cours de français est à quelle heure ?"] },
        { prompt: "My French class is at 8.15pm on Mondays.", answer: "Mon cours de français est à 20h15 le lundi.",
          also: ["Le lundi, mon cours de français est à 20h15."] },
        { prompt: "In the US, it's 11.23pm now.", answer: "Aux États-Unis, il est 23h23 maintenant.",
          also: ["Aux États-Unis, il est maintenant 23h23."] },
        // Her key: "Quelle heure il est France ?"
        { prompt: "What time is it in France?", answer: "Quelle heure il est en France ?", also: ["Quelle heure est-il en France ?"] },
        { prompt: "I woke up at 10.25am.", answer: "Je me suis levé à 10h25.",
          also: ["Je me suis levée à 10h25.", "Je me suis réveillé à 10h25.", "Je me suis réveillée à 10h25."] },
        { prompt: "I think it's 3.39pm.", answer: "Je pense qu'il est 15h39." },
        { prompt: "On Tuesdays, the bookstore opens at 10.15am.", answer: "Le mardi, la librairie ouvre à 10h15." },
      ],
    },
  ],
};
