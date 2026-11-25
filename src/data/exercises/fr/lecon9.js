// Leçon 9 · Voir et venir — the written exercises of "EXERCICES - Leçon 9", for the
// Exercises page. Her CORRECTION gives every answer; the others in `also` are ours.
// Left out: ex. 1, 2 and 9 (sentences of your own), ex. 3 and 4 (no in a full
// sentence), ex. 5 (writing the question), ex. 10–12 (dictation and oral: they need
// her audio).
// Her key corrected: ex. 6 no. 7 "mes parent" (parents); ex. 7 no. 4 "l'Australie (f)",
// whose (f) is her note of the gender, not part of the answer; ex. 8 nos. 4 and 17
// "On est allé" (allés: with on meaning "we", the participle agrees, as her dialogue's
// "on est allés voir des amis" and the app's Leçon 9 cards have it); ex. 8 no. 11
// "en Juillet" (juillet). Her ex. 6 no. 12 is kept as she wrote it (see that line).

export default {
  id: "lecon9",
  exercises: [
    {
      n: 6,
      title: "Traduction",
      instruction: "Traduire.",
      english: "Translate each sentence into French, taking care with how French says \"to drive\" and \"to visit\".",
      items: [
        { prompt: "I drove to work today.", answer: "Je suis allé au travail en voiture aujourd'hui.",
          also: ["Je suis allée au travail en voiture aujourd'hui.", "Aujourd'hui, je suis allé au travail en voiture.", "Aujourd'hui, je suis allée au travail en voiture."] },
        { prompt: "My husband loves to drive.", answer: "Mon mari adore conduire." },
        { prompt: "I don't want to drive today.", answer: "Je ne veux pas conduire aujourd'hui.",
          also: ["Aujourd'hui, je ne veux pas conduire."] },
        { prompt: "Did you guys drive to Brittany?", answer: "Vous êtes allés en Bretagne en voiture ?",
          also: ["Vous êtes allées en Bretagne en voiture ?", "Est-ce que vous êtes allés en Bretagne en voiture ?"] },
        { prompt: "I drove here, it's easier.", answer: "Je suis venu en voiture, c'est plus facile.",
          also: ["Je suis venue en voiture, c'est plus facile.", "Je suis venu ici en voiture, c'est plus facile.", "Je suis venue ici en voiture, c'est plus facile."] },
        { prompt: "Have you driven in Paris? It's very hard!", answer: "Tu as conduit à Paris ? C'est très dur !",
          also: ["Vous avez conduit à Paris ? C'est très dur !", "Tu as conduit à Paris ? C'est très difficile !", "Vous avez conduit à Paris ? C'est très difficile !"] },
        { prompt: "I'm going to visit my parents this summer.", answer: "Je vais voir mes parents cet été.", // her key: "mes parent"
          also: ["Je vais aller voir mes parents cet été.", "Cet été, je vais voir mes parents.", "Cet été, je vais aller voir mes parents."] },
        { prompt: "We visited the city.", answer: "On a visité la ville.", also: ["Nous avons visité la ville."] },
        { prompt: "Today I'm visiting my friend at the hospital.", answer: "Aujourd'hui, je vais voir mon ami à l'hôpital.",
          also: ["Aujourd'hui, je vais voir mon amie à l'hôpital.", "Je vais voir mon ami à l'hôpital aujourd'hui.", "Aujourd'hui, je vais aller voir mon ami à l'hôpital."] },
        { prompt: "I visited my family in Australia last year.", answer: "Je suis allé voir ma famille en Australie l'année dernière.",
          also: ["Je suis allée voir ma famille en Australie l'année dernière.", "L'année dernière, je suis allé voir ma famille en Australie.",
            "L'année dernière, je suis allée voir ma famille en Australie."] },
        { prompt: "She's going to visit her family this summer.", answer: "Elle va aller voir sa famille cet été.",
          also: ["Elle va voir sa famille cet été.", "Cet été, elle va aller voir sa famille.", "Cet été, elle va voir sa famille."] },
        // Her key, as she wrote it, leaves out "here" and has a man for "my friend"; her
        // English says "her parents", so the friend is most likely a woman, and a
        // teacher would expect "Mon amie est venue voir ses parents ici".
        { prompt: "My friend visited her parents here.", answer: "Mon ami est venu voir ses parents.",
          also: ["Mon amie est venue voir ses parents ici.", "Mon amie est venue voir ses parents.", "Mon ami est venu voir ses parents ici."] },
      ],
    },
    {
      n: 7,
      title: "Traduction",
      instruction: "Comment on dit … en français ?",
      english: "Say each word or phrase in French.",
      items: [
        { prompt: "usually", answer: "en général", also: ["normalement", "généralement", "d'habitude"] },
        { prompt: "this year", answer: "cette année" },
        { prompt: "July", answer: "juillet" },
        { prompt: "Australia", answer: "l'Australie", also: ["Australie"] }, // her key: "l'Australie (f)"
        { prompt: "a summer", answer: "un été" },
        { prompt: "pretty (masc & fém)", answer: "joli, jolie" },
        { prompt: "a village", answer: "un village" },
        { prompt: "it was", answer: "c'était" },
        { prompt: "a place", answer: "un endroit", also: ["un lieu"] },
        { prompt: "days off", answer: "des congés", also: ["les congés", "des jours de congé"] },
        { prompt: "the forest", answer: "la forêt" },
        { prompt: "it's raining", answer: "il pleut" },
        { prompt: "to drive a car", answer: "conduire", also: ["conduire une voiture"] },
        { prompt: "really", answer: "vraiment" },
        { prompt: "convenient (masc & fém)", answer: "pratique, pratique", also: ["pratique"] },
        { prompt: "Tell me!", answer: "Dis-moi !", also: ["Dites-moi !"] },
        { prompt: "Australian", answer: "australien, australienne", also: ["australien", "australienne"] },
        { prompt: "West", answer: "l'Ouest", also: ["Ouest"] },
        { prompt: "to tell about", answer: "raconter" },
        { prompt: "a region", answer: "une région" },
        { prompt: "as / like", answer: "comme" },
        { prompt: "to be lucky", answer: "avoir de la chance" },
        { prompt: "wonderful (masc & fém)", answer: "magnifique, magnifique", also: ["magnifique"] },
        { prompt: "to drive to...", answer: "aller à … en voiture", also: ["aller en voiture à"] },
        { prompt: "it's sunny", answer: "il fait beau", also: ["il y a du soleil"] },
        { prompt: "a boss", answer: "un chef", also: ["un patron"] },
        { prompt: "to stop", answer: "arrêter", also: ["s'arrêter"] },
        { prompt: "because", answer: "parce que" },
        { prompt: "more", answer: "plus" },
      ],
    },
    {
      n: 8,
      title: "Traduction niveau 2",
      instruction: "Traduire les phrases suivantes en français.",
      english: "Translate each sentence into French.",
      items: [
        { prompt: "It's like in Australia!", answer: "C'est comme en Australie." },
        { prompt: "I didn't work this summer, I didn't want to.", answer: "Je n'ai pas travaillé cet été, je n'ai pas voulu.",
          also: ["Cet été, je n'ai pas travaillé, je n'ai pas voulu."] },
        { prompt: "Usually the weather is very good there.", answer: "Normalement il fait très beau là-bas.",
          also: ["En général, il fait très beau là-bas.", "D'habitude, il fait très beau là-bas.", "Généralement, il fait très beau là-bas."] },
        { prompt: "We visited some friends in Brittany this year.", answer: "On est allés voir des amis en Bretagne cette année.", // her key: "On est allé"
          also: ["Nous sommes allés voir des amis en Bretagne cette année.", "Cette année, on est allés voir des amis en Bretagne."] },
        { prompt: "I didn't go to Australia this year.", answer: "Je ne suis pas allé en Australie cette année.",
          also: ["Je ne suis pas allée en Australie cette année."] },
        { prompt: "Did you stop last year? No, I stopped this year!", answer: "Tu as arrêté l'année dernière ? Non, j'ai arrêté cette année.",
          also: ["Vous avez arrêté l'année dernière ? Non, j'ai arrêté cette année."] },
        { prompt: "We haven't seen the little village.", answer: "On n'a pas vu le petit village.", also: ["Nous n'avons pas vu le petit village."] },
        { prompt: "Is he coming after work?", answer: "Il vient après le travail ?", also: ["Est-ce qu'il vient après le travail ?"] },
        { prompt: "I found that more convenient.", answer: "J'ai trouvé ça plus pratique.", also: ["J'ai trouvé cela plus pratique."] },
        { prompt: "We didn't walk because it was very tiring.", answer: "On n'a pas marché parce que c'était très fatigant.",
          also: ["Nous n'avons pas marché parce que c'était très fatigant."] },
        { prompt: "Didn't you go on holiday in July?", answer: "Tu n'es pas parti en vacances en juillet ?", // her key: "en Juillet"
          also: ["Tu n'es pas partie en vacances en juillet ?", "Vous n'êtes pas partis en vacances en juillet ?", "Vous n'êtes pas parti en vacances en juillet ?"] },
        { prompt: "Her husband loves to drive but he didn't drive this summer.", answer: "Son mari adore conduire mais il n'a pas conduit cet été." },
        { prompt: "I didn't have breakfast with my French friend.", answer: "Je n'ai pas pris le petit déjeuner avec mon ami français.",
          also: ["Je n'ai pas pris le petit déjeuner avec mon amie française.", "Je n'ai pas pris mon petit déjeuner avec mon ami français."] },
        { prompt: "Tell me why you didn't come by this summer.", answer: "Dis-moi pourquoi tu n'es pas venu cet été.",
          also: ["Dis-moi pourquoi tu n'es pas venue cet été.", "Dites-moi pourquoi vous n'êtes pas venu cet été.", "Dites-moi pourquoi vous n'êtes pas venus cet été."] },
        { prompt: "They see her family very often.", answer: "Ils voient sa famille très souvent.", also: ["Elles voient sa famille très souvent."] },
        { prompt: "Maxime didn't come by today.", answer: "Maxime n'est pas venu aujourd'hui." },
        { prompt: "We didn't drive to Brittany, it's not convenient.", answer: "On n'est pas allés en voiture en Bretagne, ce n'est pas pratique.", // her key: "On n'est pas allé"
          also: ["On n'est pas allés en Bretagne en voiture, ce n'est pas pratique.", "Nous ne sommes pas allés en voiture en Bretagne, ce n'est pas pratique.",
            "Nous ne sommes pas allés en Bretagne en voiture, ce n'est pas pratique."] },
        { prompt: "I'm going to tell about my summer holiday to my friend.", answer: "Je vais raconter mes vacances d'été à mon ami.",
          also: ["Je vais raconter mes vacances d'été à mon amie."] },
        { prompt: "I didn't visit Maxime there, it was not a good idea.", answer: "Je ne suis pas allé voir Maxime là-bas, ce n'était pas une bonne idée.",
          also: ["Je ne suis pas allée voir Maxime là-bas, ce n'était pas une bonne idée."] },
        { prompt: "James and Jessica didn't work this year.", answer: "James et Jessica n'ont pas travaillé cette année." },
      ],
    },
  ],
};
