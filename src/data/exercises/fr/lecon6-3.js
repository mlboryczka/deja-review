// Leçon 6, partie 3 · Décrire quelqu'un — the written exercises of
// "EXERCICES - Leçon 6 - Partie 3", for the Exercises page. Her "CORRECTION
// EXERCICES - Leçon 6 - Partie 3" gives every answer; the also lists are
// written for the app.
// Left out: ex. 3 (dictation), which needs her audio.
// Notes:
//   - Ex. 1: where both forms are the same ("drôle, drôle"), one is enough.
//     No. 21 asks for "active (masc)" but her key gives both forms, "actif,
//     active"; the masculine alone is accepted too.
//   - Ex. 2 no. 5 and 12: her key writes "seul(s)" and "seul(e)"; each form
//     is a separate answer here.

export default {
  id: "lecon6-3",
  exercises: [
    {
      n: 1,
      title: "Traduction",
      instruction: "Comment on dit … en français ?",
      english: "Say each word or phrase in French. Where it says masc & fém, give both forms.",
      items: [
        { prompt: "glasses", answer: "des lunettes", also: ["les lunettes"] },
        { prompt: "retired", answer: "retraité" },
        { prompt: "to work around the house", answer: "bricoler" },
        { prompt: "shoes", answer: "des chaussures", also: ["les chaussures"] },
        { prompt: "to do the housework", answer: "faire le ménage" },
        { prompt: "the time", answer: "le temps" },
        { prompt: "funny (masc & fém)", answer: "drôle, drôle", also: ["drôle"] },
        { prompt: "to be in a bad mood", answer: "être de mauvaise humeur" },
        { prompt: "most of the time", answer: "la plupart du temps" },
        { prompt: "free (masc & fém)", answer: "libre, libre", also: ["libre"] },
        { prompt: "politics", answer: "la politique" },
        { prompt: "moody", answer: "lunatique" },
        { prompt: "when", answer: "quand" },
        { prompt: "to take care of", answer: "s'occuper de" },
        { prompt: "to garden", answer: "jardiner" },
        { prompt: "alone (masc & fém)", answer: "seul, seule" },
        { prompt: "pants", answer: "un pantalon" },
        { prompt: "sometimes", answer: "des fois", also: ["parfois"] },
        { prompt: "green (masc & fém)", answer: "vert, verte" },
        { prompt: "a grandfather", answer: "un grand-père" },
        // Her sheet asks for the masculine; her key gives both.
        { prompt: "active (masc)", answer: "actif, active", also: ["actif"] },
        { prompt: "free time", answer: "le temps libre", also: ["du temps libre"] },
        { prompt: "grandchildren", answer: "des petits-enfants", also: ["les petits-enfants"] },
      ],
    },
    {
      n: 2,
      title: "Traduction niveau 2",
      instruction: "Traduire les phrases suivantes en français.",
      english: "Translate these sentences into French.",
      items: [
        { prompt: "My grandfather likes to take care of his grandchildren.", answer: "Mon grand-père aime s'occuper de ses petits-enfants." },
        { prompt: "James is wearing a white shirt and brown pants.", answer: "James porte une chemise blanche et un pantalon marron." },
        { prompt: "The other days, Jean-Pierre works around the house.", answer: "Les autres jours, Jean-Pierre bricole." },
        { prompt: "I don't want to do the housework, I'm in a bad mood.", answer: "Je ne veux pas faire le ménage, je suis de mauvaise humeur." },
        // Her key: "rester seul(s)".
        { prompt: "Do you guys prefer to stay alone today?", answer: "Vous préférez rester seuls aujourd'hui ?",
          also: ["Vous préférez rester seules aujourd'hui ?", "Vous préférez rester seul aujourd'hui ?", "Est-ce que vous préférez rester seuls aujourd'hui ?"] },
        { prompt: "Do you guys speak French most of the time?", answer: "Vous parlez français la plupart du temps ?",
          also: ["La plupart du temps, vous parlez français ?", "Vous parlez en français la plupart du temps ?", "Est-ce que vous parlez français la plupart du temps ?"] },
        { prompt: "I have a lot of free time but I don't want to work around the house.", answer: "J'ai beaucoup de temps libre mais je ne veux pas bricoler." },
        { prompt: "I don't know where my glasses are, can you help me please?", answer: "Je ne sais pas où sont mes lunettes, tu peux m'aider s'il te plaît ?",
          also: ["Je ne sais pas où sont mes lunettes, vous pouvez m'aider s'il vous plaît ?", "Je ne sais pas où sont mes lunettes, est-ce que tu peux m'aider s'il te plaît ?"] },
        { prompt: "His grandchildren don't want to go to the beach today.", answer: "Ses petits-enfants ne veulent pas aller à la plage aujourd'hui." },
        { prompt: "Her grandfather is very funny, he always wears pink pants.", answer: "Son grand-père est très drôle, il porte toujours un pantalon rose." },
        { prompt: "They don't like French politics.", answer: "Ils n'aiment pas la politique française.", also: ["Elles n'aiment pas la politique française."] },
        // Her key: "être seul(e)".
        { prompt: "When I go to the bookstore, I prefer to be alone.", answer: "Quand je vais à la librairie, je préfère être seul.",
          also: ["Quand je vais à la librairie, je préfère être seule."] },
        { prompt: "My grandmother has white hair and green eyes.", answer: "Ma grand-mère a les cheveux blancs et les yeux verts." },
        { prompt: "Do your grandchildren like to garden with you sometimes?", answer: "Tes petits-enfants aiment jardiner avec toi des fois ?",
          also: ["Tes petits-enfants aiment jardiner avec toi parfois ?", "Est-ce que tes petits-enfants aiment jardiner avec toi des fois ?",
            "Vos petits-enfants aiment jardiner avec vous des fois ?", "Vos petits-enfants aiment jardiner avec vous parfois ?"] },
        { prompt: "I have another idea!", answer: "J'ai une autre idée !" },
      ],
    },
  ],
};
