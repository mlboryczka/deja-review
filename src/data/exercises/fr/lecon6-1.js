// Leçon 6, partie 1 · La place de l'adjectif — the written exercises of
// "EXERCICES - Leçon 6 - Partie 1", for the Exercises page. Her "CORRECTION
// EXERCICES - Leçon 6 - Partie 1" gives every answer; the also lists are
// written for the app.
// Left out: ex. 1, 2 (a sentence of your own with each form of PRENDRE and
// SAVOIR), ex. 4 (answering about yourself, yes or no in a full sentence),
// ex. 5 (writing the question), ex. 8 (answering questions about the text in a
// sentence), ex. 9 (dictation) and ex. 10 (oral answers): they need her audio.
// Changed from her key:
//   - Ex. 3 no. 2, "a blue shirt": her key has "un tee-shirt bleu"; her text
//     and ex. 7 no. 9 say "une chemise bleue" for a blue shirt, so that is the
//     answer and her "un tee-shirt bleu" is kept as also.
//   - "châtain" agrees in number: her key writes "des cheveux châtain" (ex. 3
//     no. 10, ex. 7 no. 7), her text "les cheveux châtains". The key here has
//     "châtains".
//   - Ex. 7 no. 13: her key has "apprendre des nouvelles choses"; her lesson
//     teaches that des becomes de before an adjective ("de nouvelles choses"),
//     so that is the answer and hers is kept as also.
//   - Ex. 6: where her sheet gives an adjective with no "(masc. & fem.)" and her
//     key gives both forms ("culturel, culturelle"), the masculine alone is
//     accepted too.

export default {
  id: "lecon6-1",
  exercises: [
    {
      n: 3,
      title: "Traduction",
      instruction: "Traduire les groupes nominaux suivants en faisant attention à la place de l'adjectif.",
      english: "Say each phrase in French, with the adjective in the right place: before or after the noun.",
      items: [
        { prompt: "a beautiful book", answer: "un beau livre" },
        // Her key: "un tee-shirt bleu".
        { prompt: "a blue shirt", answer: "une chemise bleue", also: ["un tee-shirt bleu"] },
        { prompt: "last time", answer: "la dernière fois" },
        { prompt: "in a good mood", answer: "de bonne humeur" },
        { prompt: "a cultural documentary", answer: "un documentaire culturel" },
        { prompt: "new countries", answer: "de nouveaux pays" },
        { prompt: "new things", answer: "de nouvelles choses" },
        { prompt: "a sociable girl", answer: "une fille sociable" },
        { prompt: "a generous man", answer: "un homme généreux" },
        // Her key: "des cheveux châtain".
        { prompt: "light brown hair", answer: "des cheveux châtains", also: ["les cheveux châtains"] },
        { prompt: "the same thing", answer: "la même chose" },
        { prompt: "a little boy", answer: "un petit garçon" },
        { prompt: "another country", answer: "un autre pays" },
        { prompt: "next time", answer: "la prochaine fois" },
        { prompt: "the wrong time", answer: "le mauvais moment" },
        { prompt: "a nice woman", answer: "une femme sympa", also: ["une femme sympathique", "une femme gentille"] },
        { prompt: "a good idea", answer: "une bonne idée" },
        { prompt: "a beautiful gift", answer: "un beau cadeau" },
      ],
    },
    {
      n: 6,
      title: "Traduction",
      instruction: "Comment on dit … en français ?",
      english: "Say each word or phrase in French. Where it says masc. & fem., give both forms.",
      items: [
        { prompt: "to laugh", answer: "rigoler", also: ["rire"] },
        { prompt: "light brown", answer: "châtain" },
        { prompt: "always", answer: "toujours" },
        { prompt: "the cold", answer: "le froid" },
        { prompt: "to travel", answer: "voyager" },
        { prompt: "to discover", answer: "découvrir" },
        { prompt: "new (masc. & fem.)", answer: "nouveau, nouvelle" },
        { prompt: "to play sport", answer: "faire du sport" },
        { prompt: "to be in a good mood", answer: "être de bonne humeur" },
        { prompt: "a TV channel", answer: "une chaîne de télé", also: ["une chaîne de télévision"] },
        { prompt: "the life", answer: "la vie" },
        { prompt: "brown", answer: "marron" },
        { prompt: "people", answer: "les gens", also: ["des gens"] },
        { prompt: "cultural", answer: "culturel, culturelle", also: ["culturel"] },
        { prompt: "a country", answer: "un pays" },
        { prompt: "to spend time", answer: "passer du temps" },
        { prompt: "vegetables", answer: "des légumes", also: ["les légumes"] },
        { prompt: "a journalist", answer: "un journaliste", also: ["une journaliste"] },
        { prompt: "to make a joke", answer: "faire une blague" },
        { prompt: "a shirt", answer: "une chemise" },
        { prompt: "selfish", answer: "égoïste, égoïste", also: ["égoïste"] },
        { prompt: "around the world", answer: "dans le monde" },
        { prompt: "tall", answer: "grand, grande", also: ["grand"] },
        { prompt: "blue", answer: "bleu, bleue", also: ["bleu"] },
        { prompt: "generous", answer: "généreux, généreuse", also: ["généreux"] },
      ],
    },
    {
      n: 7,
      title: "Traduction",
      instruction: "Traduire les phrases suivantes en français.",
      english: "Translate these sentences into French.",
      items: [
        { prompt: "What does he do for a living?", answer: "Qu'est-ce qu'il fait dans la vie ?" },
        { prompt: "I want to discover new countries.", answer: "Je veux découvrir de nouveaux pays." },
        { prompt: "Where do you work?", answer: "Où tu travailles ?",
          also: ["Tu travailles où ?", "Où est-ce que tu travailles ?", "Où vous travaillez ?", "Vous travaillez où ?", "Où est-ce que vous travaillez ?"] },
        { prompt: "I am very sociable and I have a lot of friends.", answer: "Je suis très sociable et j'ai beaucoup d'amis." },
        { prompt: "Do you guys travel a lot?", answer: "Vous voyagez beaucoup ?", also: ["Est-ce que vous voyagez beaucoup ?"] },
        { prompt: "I love generous people.", answer: "J'adore les gens généreux.", also: ["J'aime les gens généreux."] },
        // Her key: "les cheveux châtain".
        { prompt: "Élise has light brown hair and blue eyes.", answer: "Élise a les cheveux châtains et les yeux bleus." },
        { prompt: "I don't like to watch the France 24 TV channel.", answer: "Je n'aime pas regarder la chaîne de télévision France 24.",
          also: ["Je n'aime pas regarder la chaîne de télé France 24."] },
        { prompt: "In the picture, my mom is wearing a blue shirt.", answer: "Sur la photo, ma mère porte une chemise bleue.",
          also: ["Sur la photo, ma maman porte une chemise bleue."] },
        { prompt: "Her brother is very tall.", answer: "Son frère est très grand." },
        { prompt: "What do you guys like to do?", answer: "Qu'est-ce que vous aimez faire ?" },
        { prompt: "What does she look like?", answer: "Comment elle est physiquement ?", also: ["Elle est comment physiquement ?"] },
        // Her key: "apprendre des nouvelles choses".
        { prompt: "His kids don't want to learn new things.", answer: "Ses enfants ne veulent pas apprendre de nouvelles choses.",
          also: ["Ses enfants ne veulent pas apprendre des nouvelles choses."] },
        { prompt: "Do you know why he doesn't like to play sport?", answer: "Tu sais pourquoi il n'aime pas faire du sport ?",
          also: ["Vous savez pourquoi il n'aime pas faire du sport ?", "Est-ce que tu sais pourquoi il n'aime pas faire du sport ?"] },
        { prompt: "Maxime is a journalist and he travels a lot.", answer: "Maxime est journaliste et il voyage beaucoup." },
        { prompt: "I want to spend time with my friends.", answer: "Je veux passer du temps avec mes amis." },
        { prompt: "I am always in a good mood.", answer: "Je suis toujours de bonne humeur." },
        { prompt: "I don't have a lot of time.", answer: "Je n'ai pas beaucoup de temps." },
        { prompt: "People are very nice there.", answer: "Les gens sont très sympas là-bas.",
          also: ["Là-bas, les gens sont très sympas.", "Les gens sont très gentils là-bas."] },
      ],
    },
  ],
};
