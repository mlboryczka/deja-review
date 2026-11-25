// Communication — the written exercises of "EXERCICES - Communication" (her "Communication
// exercices en situation"), for the Exercises page. She has no answer key: every answer here
// was written for the app, as a French teacher would mark it.
// Left out: ex. 1 (asking about the underlined part you didn't understand: the underlining
// doesn't survive in the text of her sheet, so no item says which part to ask about), ex. 2
// (making someone guess a word with a definition of your own).
// Ex. 3 has no heading of its own, so its title here is "Traduction"; nos. 1–13 are her
// "Intermédiaire", nos. 14–20 her "Avancé". She says a word-for-word translation doesn't work
// for any of them: the key gives one simple way to say each, and Claude marks any other.
// Typos corrected in her English: no. 6 "I'll back in a minute" is "I'll be back in a minute";
// no. 9 "You son" is "Your son".

export default {
  id: "communication",
  exercises: [
    {
      n: 3,
      title: "Traduction",
      instruction: "Traduire les phrases suivantes du mieux possible. Attention, pour toutes ces phrases, la traduction littérale ne marche pas, il faut donc utiliser les techniques de communication expliquées dans la leçon.",
      english: "Say each sentence in French as well as you can: a word-for-word translation won't work, so simplify it or say it another way, as the lesson shows.",
      items: [
        { prompt: "We had a late night.", answer: "On s'est couchés tard.",
          also: ["On s'est couché tard.", "On s'est couchées tard.", "Nous nous sommes couchés tard.", "On s'est couchés très tard."] },
        { prompt: "I have no reception on my phone.", answer: "Je n'ai pas de réseau sur mon téléphone.",
          also: ["Je n'ai pas de réseau.", "Mon téléphone ne capte pas.", "Je ne capte pas."] },
        { prompt: "I ran out of gas.", answer: "Je n'ai plus d'essence.",
          also: ["Je suis tombé en panne d'essence.", "Je suis tombée en panne d'essence.", "Je n'avais plus d'essence."] }, // check: her sheet has "I run out"; fixed to "ran"; removed the present "Je tombe en panne d'essence", added "Je n'avais plus d'essence"
        { prompt: "You don't get me.", answer: "Tu ne me comprends pas.",
          also: ["Tu ne comprends pas ce que je veux dire.", "Vous ne me comprenez pas."] },
        { prompt: "He's going through a lot.", answer: "Il traverse une période difficile.",
          also: ["Il passe par une période difficile.", "C'est difficile pour lui en ce moment.", "Il a beaucoup de problèmes en ce moment.", "Il vit des moments difficiles."] },
        { prompt: "I'll be back in a minute.", answer: "Je reviens dans une minute.",
          also: ["Je reviens tout de suite.", "Je reviens dans deux minutes.", "Je reviens dans un instant."] }, // her sheet has "I'll back"
        { prompt: "She has her hair up.", answer: "Elle a les cheveux attachés.",
          also: ["Ses cheveux sont attachés.", "Elle a attaché ses cheveux.", "Elle s'est attaché les cheveux."] },
        { prompt: "Are you on a diet?", answer: "Tu fais un régime ?",
          also: ["Tu es au régime ?", "Est-ce que tu fais un régime ?", "Vous faites un régime ?", "Vous êtes au régime ?"] },
        { prompt: "Your son is acting out and being ill tempered.", answer: "Ton fils se comporte mal et il est de mauvaise humeur.",
          also: ["Ton fils fait des bêtises et il est de mauvaise humeur.", "Ton fils se comporte mal et il est désagréable.", "Votre fils se comporte mal et il est de mauvaise humeur."] }, // her sheet has "You son"
        { prompt: "She asked me to cover her shift but that's a hard pass.", answer: "Elle m'a demandé de la remplacer mais c'est non.",
          also: ["Elle m'a demandé de la remplacer mais c'est hors de question.", "Elle m'a demandé de travailler à sa place mais c'est non.", "Elle m'a demandé de travailler à sa place mais c'est hors de question.", "Elle m'a demandé de la remplacer mais je ne veux absolument pas."] },
        { prompt: "The firefighter has a visual signal.", answer: "Le pompier voit le signal.",
          also: ["Le pompier peut voir le signal."] },
        { prompt: "We didn't make it on time.", answer: "On n'est pas arrivés à l'heure.",
          also: ["On n'est pas arrivé à l'heure.", "Nous ne sommes pas arrivés à l'heure.", "On n'est pas arrivés à temps.", "Nous ne sommes pas arrivés à temps.", "On est arrivés en retard."] },
        { prompt: "We need to hire an extra assistant.", answer: "On doit embaucher un assistant de plus.",
          also: ["Nous devons embaucher un assistant de plus.", "On doit embaucher un autre assistant.", "Il faut embaucher un assistant de plus.", "On a besoin d'un assistant de plus.", "On doit recruter un assistant supplémentaire."] },
        { prompt: "I wasn't able to get in touch with my boss because of the time difference.", answer: "Je n'ai pas pu contacter mon chef à cause du décalage horaire.",
          also: ["Je n'ai pas pu joindre mon chef à cause du décalage horaire.", "Je n'ai pas réussi à joindre mon chef à cause du décalage horaire.", "Je n'ai pas pu parler à mon chef à cause du décalage horaire."] },
        { prompt: "I'm having trouble adjusting to the time difference after my international flight; the jetlag is affecting me a bit.", answer: "J'ai du mal à m'habituer au décalage horaire après mon vol international, ça me fatigue un peu.",
          also: ["J'ai du mal à m'habituer au décalage horaire après mon vol international, je suis un peu fatigué.", "J'ai du mal à m'habituer au décalage horaire après mon vol international, je suis un peu fatiguée.", "J'ai du mal avec le décalage horaire après mon long voyage en avion, je suis un peu fatigué.", "J'ai du mal avec le décalage horaire après mon long voyage en avion, je suis un peu fatiguée."] },
        { prompt: "I fell off from the bench and I hurt my knee and ankle.", answer: "Je suis tombé du banc et je me suis fait mal au genou et à la cheville.",
          also: ["Je suis tombée du banc et je me suis fait mal au genou et à la cheville.", "Je suis tombé du banc et j'ai mal au genou et à la cheville.", "Je suis tombée du banc et j'ai mal au genou et à la cheville."] },
        { prompt: "Exercising for at least 30 minutes can easily fit in your daily routine and contribute to your overall well-being.", answer: "Faire du sport au moins 30 minutes par jour, c'est facile et c'est bon pour la santé.",
          also: ["Faire au moins 30 minutes de sport par jour, c'est facile et c'est bon pour la santé.", "Faire du sport pendant au moins 30 minutes, c'est facile à faire tous les jours et c'est bon pour la santé.", "C'est facile de faire du sport au moins 30 minutes par jour et c'est bon pour la santé."] },
        { prompt: "She wanted to experience the thrill of skydiving at least once in her life.", answer: "Elle voulait sauter en parachute au moins une fois dans sa vie.",
          also: ["Elle voulait faire du parachute au moins une fois dans sa vie.", "Elle voulait faire un saut en parachute au moins une fois dans sa vie.", "Elle voulait essayer le parachute au moins une fois dans sa vie."] },
        { prompt: "Due to budget constraints, the company has implemented a hiring freeze until further notice.", answer: "L'entreprise n'a pas assez d'argent, donc elle n'embauche plus pour le moment.",
          also: ["L'entreprise n'a pas assez d'argent, alors elle a arrêté d'embaucher pour le moment.", "À cause du budget, l'entreprise n'embauche plus pour le moment.", "Pour des raisons de budget, l'entreprise a arrêté d'embaucher jusqu'à nouvel ordre."] },
        { prompt: "I hope you get the chance to experience the beauty of the sunset over the ocean", answer: "J'espère que tu pourras voir le coucher de soleil sur l'océan, c'est magnifique.",
          also: ["J'espère que tu pourras voir le beau coucher de soleil sur l'océan.", "J'espère que tu auras l'occasion de voir le coucher de soleil sur l'océan, c'est très beau.", "J'espère que tu auras la chance de voir le coucher du soleil sur l'océan.", "J'espère que vous pourrez voir le coucher de soleil sur l'océan, c'est magnifique."] },
      ],
    },
  ],
};
