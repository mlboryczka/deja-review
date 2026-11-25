// Each French lesson's text (its dialogue or story): given to the tutor, and
// to Claude when it marks a question about the text or a sentence of it
// (Dialogues). Written by scripts/fr-dialogues.mjs from the same texts as
// dialogueTexts.js; run it again if a text changes.
//
// Each line is { title }, { scene }, { question }, { who, text } or { text }.

export const LESSON_TEXTS = {
 "lecon1": [
  {
   "title": "Premier cours de français"
  },
  {
   "who": "Élise",
   "text": "Bonjour, je m'appelle Élise, je suis ta professeure de français. Et toi, comment tu t'appelles ?"
  },
  {
   "who": "James",
   "text": "Je m'appelle James."
  },
  {
   "who": "Élise",
   "text": "Tu es d'où?"
  },
  {
   "who": "James",
   "text": "Je suis américain, de New York, mais j'habite à Los Angeles depuis deux ans. Et toi ?"
  },
  {
   "who": "Élise",
   "text": "Je suis française, de Paris, mais j'habite aux États-Unis depuis deux mois."
  },
  {
   "who": "James",
   "text": "Très bien. Pourquoi tu es aux États-Unis ?"
  },
  {
   "who": "Élise",
   "text": "Je suis ici avec mon mari pour apprendre l'anglais. Et toi, tu es marié ?"
  },
  {
   "who": "James",
   "text": "Oui je suis marié. Le nom de ma femme est Jessica. Nous sommes ensemble depuis deux ans."
  }
 ],
 "lecon2": [
  {
   "title": "James discute avec un ami dans un café"
  },
  {
   "scene": "James discute avec un ami dans un café."
  },
  {
   "who": "James",
   "text": "Salut ! Comment tu vas ?"
  },
  {
   "who": "Damien",
   "text": "Je vais très bien, merci, et toi ça va ?"
  },
  {
   "who": "James",
   "text": "Ça va ! Qu'est-ce que tu vas faire aujourd'hui ?"
  },
  {
   "who": "Damien",
   "text": "Je vais voir ma femme et mes enfants à la plage."
  },
  {
   "who": "James",
   "text": "Super ! Comment va ta femme ?"
  },
  {
   "who": "Damien",
   "text": "En fait, elle est très fatiguée. Elle travaille beaucoup. Mais mes enfants vont très bien."
  },
  {
   "who": "James",
   "text": "Moi aussi, je suis un peu fatigué... Et après la plage, qu'est-ce que vous allez faire ?"
  },
  {
   "who": "Damien",
   "text": "Je pense que nous allons dîner au restaurant."
  },
  {
   "who": "James",
   "text": "Très bien. A bientôt !"
  },
  {
   "who": "Damien",
   "text": "Au revoir, à bientôt"
  }
 ],
 "lecon3": [
  {
   "title": "À la librairie"
  },
  {
   "who": "Élise",
   "text": "Bonjour, j'ai un cadeau à faire à mon père. Vous avez des livres sur l'histoire de France ?"
  },
  {
   "who": "Le vendeur",
   "text": "Oui, nous avons un très beau livre sur la Révolution Française."
  },
  {
   "who": "Élise",
   "text": "Merci beaucoup, et vous avez quelque chose sur la ville de Paris ?"
  },
  {
   "who": "Le vendeur",
   "text": "Oui, j'ai un nouveau livre sur la Tour Eiffel. Il est sur la table là-bas."
  },
  {
   "who": "Élise",
   "text": "Très bien. Et j'ai aussi un cadeau à faire à ma sœur. Vous avez une idée ? Elle a 17 ans."
  },
  {
   "who": "Le vendeur",
   "text": "Oui, bien sûr. Allez au deuxième étage, ils ont des promotions sur les écouteurs sans fil."
  },
  {
   "who": "Élise",
   "text": "Merci beaucoup. Je vais prendre les deux livres et les écouteurs s'il-vous-plaît. Bonne journée !"
  }
 ],
 "lecon4": [
  {
   "title": "James montre une photo de sa famille"
  },
  {
   "scene": "James montre une photo de sa famille à Mathieu, son ami français."
  },
  {
   "who": "James",
   "text": "Regarde Mathieu, c'est ma famille ! À gauche, c'est mon père et à côté, c'est ma mère."
  },
  {
   "who": "Mathieu",
   "text": "Ah d'accord. Où habitent tes parents ?"
  },
  {
   "who": "James",
   "text": "Mes parents habitent à Montauk, près de New York. Ils ne travaillent pas, ils sont retraités maintenant."
  },
  {
   "who": "Mathieu",
   "text": "Qu'est-ce qu'ils aiment faire ?"
  },
  {
   "who": "James",
   "text": "Ma mère aime marcher, et mon père aime faire du vélo. Et ils regardent souvent la télé ensemble."
  },
  {
   "who": "Mathieu",
   "text": "Je vois ! Et à droite, c'est ton frère ?"
  },
  {
   "who": "James",
   "text": "Oui, c'est mon frère Jean avec sa femme et ses deux enfants. La petite fille, c'est Emma, et le petit garçon c'est Jules."
  },
  {
   "who": "Mathieu",
   "text": "Super ! Et comment s'appelle la femme de ton frère ?"
  },
  {
   "who": "James",
   "text": "Elle s'appelle Nathalie. Elle est très sympa. Elle a 35 (trente-cinq) ans et elle est infirmière. Elle adore surfer et inviter toute la famille à des grands barbecues."
  }
 ],
 "lecon5": [
  {
   "title": "Mike est un touriste américain à Paris"
  },
  {
   "scene": "Mike est un touriste américain à Paris."
  },
  {
   "who": "Mike",
   "text": "Excusez-moi Monsieur, je suis perdu. Vous pouvez m'aider s'il vous plaît ?"
  },
  {
   "who": "Un passant",
   "text": "Je n'habite pas à Paris mais je peux essayer ! Où vous voulez aller ?"
  },
  {
   "who": "Mike",
   "text": "Je veux aller à Notre-Dame de Paris."
  },
  {
   "who": "Un passant",
   "text": "Je suis désolé, je ne sais pas où c'est. Je pense que vous pouvez demander à la vendeuse de journaux."
  },
  {
   "who": "Mike",
   "text": "C'est une bonne idée. Merci et bonne journée."
  },
  {
   "scene": "À la vendeuse de journaux"
  },
  {
   "who": "Mike",
   "text": "Bonjour Madame. Je cherche Notre-Dame de Paris. Vous pouvez m'aider ?"
  },
  {
   "who": "La vendeuse",
   "text": "Oui bien sûr ! Regardez là-bas, il y a la station de métro Odéon. Vous prenez la ligne 4, vous sortez à Saint Michel et vous allez voir la cathédrale."
  },
  {
   "who": "Mike",
   "text": "Excusez-moi, je ne parle pas très bien français. Vous pouvez répéter plus lentement s'il-vous-plaît ?"
  },
  {
   "who": "La vendeuse",
   "text": "Oui bien sûr, vous prenez le métro, ligne 4, et vous sortez à Saint Michel."
  },
  {
   "who": "Mike",
   "text": "Je n'aime pas le métro. Je préfère marcher."
  },
  {
   "who": "La vendeuse",
   "text": "Ah d'accord, alors voilà un plan de Paris. Bonne chance !"
  }
 ],
 "lecon6-1": [
  {
   "title": "Maxime"
  },
  {
   "question": "Comment il est physiquement ?"
  },
  {
   "text": "Il a les cheveux châtains et les yeux marrons. Il est grand. Sur la photo, il porte une chemise bleue."
  },
  {
   "question": "Comment est son caractère ?"
  },
  {
   "text": "Il est très sympa et il aime beaucoup rigoler. Il est toujours de bonne humeur. Il est sociable et généreux. Il a beaucoup d'amis et il est toujours prêt à les aider."
  },
  {
   "question": "Qu'est-ce qu'il fait dans la vie ?"
  },
  {
   "text": "Il est journaliste pour la chaîne de télévision France 24. Il voyage beaucoup dans le monde pour son travail. Il est spécialisé dans les documentaires culturels."
  },
  {
   "question": "Qu'est-ce qu'il aime faire ?"
  },
  {
   "text": "Il adore voyager, découvrir de nouveaux pays, apprendre de nouvelles choses, faire du sport, passer du temps avec ses amis et faire des blagues."
  },
  {
   "question": "Qu'est-ce qu'il n'aime pas ?"
  },
  {
   "text": "Il n'aime pas le froid, les légumes et les gens égoïstes."
  }
 ],
 "lecon6-2": [
  {
   "title": "Léa"
  },
  {
   "question": "Comment elle est physiquement ?"
  },
  {
   "text": "Elle est blonde et elle a les yeux bleus. Elle fait 1 mètre 65. Sur la photo, elle porte une blouse blanche."
  },
  {
   "question": "Comment est son caractère ?"
  },
  {
   "text": "Elle est gentille, très douce et aussi un peu timide. Elle est très intelligente et travailleuse."
  },
  {
   "question": "Qu'est-ce qu'elle fait dans la vie ?"
  },
  {
   "text": "Elle est médecin. Elle travaille le lundi et le mardi à l'hôpital et les autres jours dans son cabinet. Elle adore son travail et ses patients."
  },
  {
   "question": "Qu'est-ce qu'elle aime faire ?"
  },
  {
   "text": "Elle aime passer du temps avec son mari et ses trois enfants. Quand elle ne travaille pas, elle aime rester à la maison pour lire ou cuisiner un bon repas pour toute la famille."
  },
  {
   "question": "Qu'est-ce qu'elle n'aime pas ?"
  },
  {
   "text": "Elle n'aime pas faire du sport, c'est trop fatigant !"
  }
 ],
 "lecon6-3": [
  {
   "title": "Jean-Pierre"
  },
  {
   "question": "Comment il est physiquement ?"
  },
  {
   "text": "Il a les cheveux blancs et les yeux bleus. Sur la photo, il porte des lunettes et une chemise verte. Des fois, il aime porter un pantalon et des chaussures roses."
  },
  {
   "question": "Comment est son caractère ?"
  },
  {
   "text": "La plupart du temps, il est très drôle et il adore faire des blagues mais il est aussi un peu lunatique. Quand il est de mauvaise humeur, il préfère rester seul."
  },
  {
   "question": "Qu'est-ce qu'il fait dans la vie ?"
  },
  {
   "text": "Jean-Pierre est retraité donc il a beaucoup de temps libre, mais c'est un grand-père très actif. Il a six petits-enfants."
  },
  {
   "question": "Qu'est-ce qu'il aime faire ?"
  },
  {
   "text": "Il aime bricoler, jardiner et s'occuper de ses petits-enfants."
  },
  {
   "question": "Qu'est-ce qu'il n'aime pas ?"
  },
  {
   "text": "Il n'aime pas la politique et faire le ménage."
  }
 ],
 "lecon7": [
  {
   "title": "La journée de Maxime"
  },
  {
   "question": "Tu as passé une bonne journée hier ?"
  },
  {
   "text": "Oui, hier, j'ai passé une très bonne journée."
  },
  {
   "question": "Qu'est-ce que tu as fait hier matin ?"
  },
  {
   "text": "Le matin, je me suis levé à 7 heures, j'ai pris le petit-déjeuner et j'ai écouté la radio. Ensuite, j'ai pris une douche et je suis allé au travail."
  },
  {
   "question": "Qu'est-ce que tu as fait hier midi ?"
  },
  {
   "text": "Le midi, j'ai déjeuné avec des collègues au restaurant près du travail. J'ai mangé une très bonne pizza et nous sommes retournés travailler."
  },
  {
   "question": "Qu'est-ce que tu as fait hier après-midi ?"
  },
  {
   "text": "L'après-midi, j'ai eu une réunion avec des clients. Je suis sorti du travail à 18 heures."
  },
  {
   "question": "Qu'est-ce que tu as fait hier soir ?"
  },
  {
   "text": "Le soir, je suis allé à la salle de sport et je suis rentré à la maison. J'ai cuisiné avec ma femme et nous avons dîné ensemble. Ensuite nous avons regardé la télé et nous sommes allés dormir."
  }
 ],
 "lecon8": [
  {
   "title": "Maxime interviewe James et Jessica"
  },
  {
   "scene": "Maxime interviewe James et Jessica pour une émission sur France 24."
  },
  {
   "who": "Maxime",
   "text": "James et Jessica, vous êtes américains et vous parlez couramment le français. Pourquoi vous avez commencé à apprendre ?"
  },
  {
   "who": "James",
   "text": "On est partis en vacances en France en 2012, et on a adoré le pays et la culture. Donc, quand on est rentrés à Los Angeles, on a décidé d'apprendre la langue."
  },
  {
   "who": "Maxime",
   "text": "Comment vous avez fait ?"
  },
  {
   "who": "James",
   "text": "On a trouvé un professeur particulier à Los Angeles et on a commencé à prendre des cours deux fois par semaine."
  },
  {
   "who": "Maxime",
   "text": "Vous avez trouvé ça difficile ?"
  },
  {
   "who": "Jessica",
   "text": "Au début c'était un peu difficile, et avec le temps, c'est devenu plus facile. Mais on a travaillé dur pour atteindre ce niveau !"
  },
  {
   "who": "Maxime",
   "text": "Et vous êtes revenus en France après ?"
  },
  {
   "who": "Jessica",
   "text": "Oui plusieurs fois ! La première fois, en 2015 c'était difficile mais on a pu communiquer un peu. Et cette fois, c'est vraiment facile. C'est super de voir les progrès."
  },
  {
   "who": "Maxime",
   "text": "Oui c'est impressionnant ! Félicitations !"
  }
 ],
 "lecon9": [
  {
   "title": "Émilie raconte ses vacances d'été"
  },
  {
   "scene": "Émilie raconte ses vacances d'été à Matt, son ami australien."
  },
  {
   "who": "Matt",
   "text": "Dis-moi Émilie, qu'est-ce que tu as fait en juillet ? Tu as travaillé ?"
  },
  {
   "who": "Émilie",
   "text": "Non je n'ai pas travaillé. Cette année, on est partis en Bretagne. C'est une région dans l'Ouest de la France. Il y a des plages magnifiques, comme en Australie !"
  },
  {
   "who": "Matt",
   "text": "Vraiment ? C'est joli ?"
  },
  {
   "who": "Émilie",
   "text": "Oui, c'est un endroit super. Normalement, il pleut beaucoup là-bas mais cet été, on a eu de la chance, il a fait très beau."
  },
  {
   "who": "Matt",
   "text": "Vous avez visité Brest ?"
  },
  {
   "who": "Émilie",
   "text": "Non, on n'a pas visité Brest, Hugo n'a pas voulu. Mais on a marché sur la plage et dans la forêt. On a vu aussi de jolis petits villages. Et on est allés voir des amis. C'était super !"
  },
  {
   "who": "Matt",
   "text": "Vous n'avez pas arrêté ! Vous y êtes allés en voiture ?"
  },
  {
   "who": "Émilie",
   "text": "Oui, c'est plus pratique. Et Hugo adore conduire ! Et toi, tu es parti en vacances cet été ?"
  },
  {
   "who": "Matt",
   "text": "Non, je ne suis pas parti cet été parce que je n'ai pas pu prendre mes congés, mon chef n'a pas voulu."
  }
 ],
 "lecon10": [
  {
   "title": "La médecin discute avec son secrétaire"
  },
  {
   "scene": "La médecin discute avec son secrétaire avant de commencer sa journée de travail."
  },
  {
   "who": "La médecin",
   "text": "Martin, tu as envoyé un mail à Mme Dupont comme je t'ai demandé hier ?"
  },
  {
   "who": "Le secrétaire",
   "text": "Oui je lui ai envoyé un mail mais elle n'a pas répondu. Donc je lui ai téléphoné."
  },
  {
   "who": "La médecin",
   "text": "Très bien. Et tu as dit à M. et Mme Ramirez d'amener la carte Vitale ? Ils oublient toujours..."
  },
  {
   "who": "Le secrétaire",
   "text": "Oui je leur ai rappelé ! Je pense que cette fois, ils ne vont pas oublier !"
  },
  {
   "who": "La médecin",
   "text": "Ok. Et sinon hier, je t'ai dit de mettre à jour les dossiers. Tu as fini ?"
  },
  {
   "who": "Le secrétaire",
   "text": "Non pas encore, je n'ai pas eu le temps. Je vais le faire là. Mais attends, tu m'as donné ces dossiers ?"
  },
  {
   "who": "La médecin",
   "text": "Bah oui, je t'ai donné tous les dossiers la semaine dernière. Ils sont sur ton bureau je crois."
  },
  {
   "who": "Le secrétaire",
   "text": "Oui oui c'est vrai, tu as raison. Je commence ça tout de suite et je te dis quand j'ai fini."
  },
  {
   "who": "La médecin",
   "text": "Ça marche ! Bon courage !"
  }
 ],
 "lecon11-1": [
  {
   "title": "Elsa a des problèmes de sommeil"
  },
  {
   "scene": "Elsa a des problèmes de sommeil. Elle en parle à son amie."
  },
  {
   "who": "Elsa",
   "text": "Je dors très mal en ce moment. Je ne sais pas ce qui se passe..."
  },
  {
   "who": "Son amie",
   "text": "Ah mince... Mais dis-moi, à quelle heure tu te couches ?"
  },
  {
   "who": "Elsa",
   "text": "En général je me couche vers 23h et je m'endors sans problème. Le truc c'est que je me réveille dans la nuit et je me rendors seulement plusieurs heures plus tard."
  },
  {
   "who": "Son amie",
   "text": "Je vois. Et quand tu te réveilles dans la nuit, qu'est-ce que tu fais ?"
  },
  {
   "who": "Elsa",
   "text": "J'essaie de rester au lit mais des fois je me lève car je m'ennuie trop. J'allume mon téléphone et je regarde Instagram."
  },
  {
   "who": "Son amie",
   "text": "Ah ouais, c'est pas terrible ça... Et à quelle heure tu te lèves ?"
  },
  {
   "who": "Elsa",
   "text": "Si mon mari travaille, je me réveille à 6h car son réveil sonne. Je traîne un peu au lit et je me lève vers 7h. Ensuite je me brosse les dents, je me maquille et je m'habille."
  },
  {
   "who": "Son amie",
   "text": "Ah oui, tu dois être crevée toute la journée..."
  },
  {
   "who": "Elsa",
   "text": "Oui des fois je me repose dans la journée mais je t'avoue que je me sens très fatiguée. Je me dis que je vais peut-être prendre des somnifères."
  }
 ],
 "lecon11-2": [
  {
   "title": "Comment Agathe a rencontré son copain"
  },
  {
   "scene": "Agathe raconte à sa marraine comment elle a rencontré son copain."
  },
  {
   "who": "La marraine",
   "text": "Alors raconte-moi, comment tu as rencontré ton copain ?"
  },
  {
   "who": "Agathe",
   "text": "En fait, on s'est rencontrés sur une appli ! C'était il y a 6 mois déjà."
  },
  {
   "who": "La marraine",
   "text": "Ah super ! Et comment s'est passé votre premier rendez-vous ? Tu te souviens ?"
  },
  {
   "who": "Agathe",
   "text": "Oui bien sûr que je me souviens ! Il est venu me chercher chez moi et il m'a amenée dans un petit resto pas loin de Bastille. On s'est assis et on s'est raconté nos vies pendant des heures."
  },
  {
   "who": "La marraine",
   "text": "Et vous vous êtes embrassés le premier soir ?"
  },
  {
   "who": "Agathe",
   "text": "Oui ! On s'est embrassés quand il m'a ramenée chez moi !"
  },
  {
   "who": "La marraine",
   "text": "Et vous vous êtes revus combien de temps après ?"
  },
  {
   "who": "Agathe",
   "text": "On s'est envoyé des messages toute la nuit et on s'est revus le lendemain en fait. C'était vraiment le coup de foudre !"
  },
  {
   "who": "La marraine",
   "text": "C'est super, je suis vraiment heureuse pour toi ! Et vous vous êtes disputés pour la première fois combien de temps après ?"
  },
  {
   "who": "Agathe",
   "text": "Ah ça je ne me souviens pas... On se dispute très rarement pour être honnête."
  }
 ],
 "lecon12": [
  {
   "title": "Un agent immobilier reçoit des clients"
  },
  {
   "scene": "Un agent immobilier reçoit des clients"
  },
  {
   "who": "L'agent",
   "text": "Donc vous cherchez un 3 pièces dans le centre ville de Nantes. Et vous voulez acheter, c'est bien ça ?"
  },
  {
   "who": "Le client",
   "text": "Oui c'est bien ça. On a besoin d'au moins 70 mètres carrés, avec une cuisine ouverte et si possible pas mal de lumière."
  },
  {
   "who": "L'agent",
   "text": "Ok, je regarde. Donc on se concentre sur le centre de Nantes... Là j'ai un 3 pièces de 79 mètres carrés mais... Non je me suis trompé, il est à louer. Je continue à regarder..."
  },
  {
   "scene": "La visite d'appartement"
  },
  {
   "who": "Le client",
   "text": "Ma femme va être en retard donc on va commencer sans elle."
  },
  {
   "who": "L'agent",
   "text": "Ok, alors là c'est le salon. J'ai laissé l'ordinateur à l'agence donc je ne peux pas vous dire combien il fait exactement mais ça doit être autour de 20 mètres carrés."
  },
  {
   "who": "Le client",
   "text": "Ah oui il est plus grand que celui de l'appart d'hier. Bon, il faut imaginer sans les meubles parce que je suis pas fan du style..."
  },
  {
   "who": "L'agent",
   "text": "Oui c'est particulier... Ici c'est la cuisine. Elle est récente et complètement équipée."
  },
  {
   "who": "Le client",
   "text": "Bien mieux que tout ce qu'on a vu pour l'instant."
  },
  {
   "who": "L'agent",
   "text": "Il y a donc 2 chambres. Ici c'est la plus grande et là, la plus petite. Les deux ont un placard."
  },
  {
   "who": "Le client",
   "text": "Très bien. Et là j'imagine que c'est la salle de bain ?"
  },
  {
   "who": "L'agent",
   "text": "Oui, la salle de bain et les toilettes sont ensemble. Il faut décider vite car il y a du monde sur le coup."
  },
  {
   "who": "Le client",
   "text": "Oui bien sûr, je comprends. J'en parle avec ma femme et je vous appelle tout à l'heure."
  }
 ],
 "lecon13": [
  {
   "title": "Jean-Pierre raconte son enfance à Tom"
  },
  {
   "scene": "Jean-Pierre raconte son enfance à Tom, son petit-fils."
  },
  {
   "who": "Jean-Pierre",
   "text": "Tu vois Tom, quand j'étais petit, j'habitais à la campagne avec mes parents et mes frères et sœurs."
  },
  {
   "who": "Tom",
   "text": "Ils étaient gentils avec toi ?"
  },
  {
   "who": "Jean-Pierre",
   "text": "Oui ! On s'amusait beaucoup ensemble ! Et on se disputait aussi parfois bien sûr."
  },
  {
   "who": "Tom",
   "text": "Et qu'est-ce que tes parents faisaient comme métier ?"
  },
  {
   "who": "Jean-Pierre",
   "text": "Mon père était instituteur et ma mère ne travaillait pas. Elle avait beaucoup de choses à faire à la maison avec cinq enfants !"
  },
  {
   "who": "Tom",
   "text": "Tu allais à l'école en voiture ?"
  },
  {
   "who": "Jean-Pierre",
   "text": "Non ! J'allais à l'école à pied ! C'était très différent à cette époque-là. Il n'y avait qu'une classe pour toute l'école primaire."
  },
  {
   "who": "Tom",
   "text": "Ah oui ? C'est fou ! Et après l'école, tu regardais la télé ?"
  },
  {
   "who": "Jean-Pierre",
   "text": "Non ! Il n'y avait pas de télé à la maison ! Je finissais l'école vers 16h30 et j'allais jouer dehors avec quelques amis jusqu'à la nuit. Après, on rentrait à la maison car on avait peur !"
  },
  {
   "who": "Tom",
   "text": "Et le soir qu'est-ce que vous faisiez ?"
  },
  {
   "who": "Jean-Pierre",
   "text": "Tous les soirs, on dînait ensemble, puis on choisissait une histoire que maman nous lisait avant de dormir."
  }
 ],
 "lecon15": [
  {
   "title": "Maxime raconte son départ en voyage"
  },
  {
   "scene": "Maxime raconte son départ en voyage."
  },
  {
   "text": "Je suis rentré en retard du travail. Je finissais de faire mes valises quand le chauffeur de taxi m'a appelé. Il m'a dit qu'il m'attendait en bas. Je suis sorti de la maison à 16h30."
  },
  {
   "text": "Nous avons pris le périphérique pour rejoindre l'autoroute A1. Il pleuvait et il y avait beaucoup d'embouteillages donc nous avons mis plus d'une heure pour arriver à l'aéroport de Roissy."
  },
  {
   "text": "Je croyais que je décollais du terminal 1 mais en fait, c'était du terminal 2. Donc j'ai dû courir dans tout l'aéroport pour arriver à temps à l'enregistrement ! L'hôtesse m'a dit que je devais me dépêcher car il y avait beaucoup de monde au contrôle des bagages à main."
  },
  {
   "text": "Je suis arrivé à la porte d'embarquement juste à temps, l'hôtesse fermait la porte ! Heureusement elle m'a vu et elle m'a laissé embarquer. J'ai eu de la chance !"
  }
 ],
 "lecon16": [
  {
   "title": "Après les épreuves du bac"
  },
  {
   "scene": "Nathalie, une élève de Terminale, discute avec son professeur de mathématiques après les épreuves du bac."
  },
  {
   "who": "Le professeur",
   "text": "Alors Nathalie, comment ça s'est passé ?"
  },
  {
   "who": "Nathalie",
   "text": "Je crois que ça s'est bien passé. Vos cours ont été très utiles. J'ai bien réussi l'épreuve de maths."
  },
  {
   "who": "Le professeur",
   "text": "Parfait ! Et la physique ? Qui était votre professeur déjà ?"
  },
  {
   "who": "Nathalie",
   "text": "L'épreuve de physique était plus difficile. J'avais M. Rozand en physique, vous le connaissez ?"
  },
  {
   "who": "Le professeur",
   "text": "Oui je le connais très bien. Je l'ai rencontré quand on était à la fac !"
  },
  {
   "who": "Nathalie",
   "text": "Vous connaissez sa fille alors ! Elle était dans ma classe cette année."
  },
  {
   "who": "Le professeur",
   "text": "Oui je la connais depuis qu'elle est née ! Et comment vous avez trouvé l'épreuve de philo ?"
  },
  {
   "who": "Nathalie",
   "text": "Je l'ai trouvée très difficile. Mais c'est parce que je suis nulle en philo ! Et pareil en anglais !"
  },
  {
   "who": "Le professeur",
   "text": "Mais non ! Je suis sûr que ça va aller ! Et vous avez parlé à Gautier et Cyril ? J'espère que ça s'est bien passé pour eux..."
  },
  {
   "who": "Nathalie",
   "text": "Oui je les ai vus hier. Ils étaient plutôt optimistes mais ils ont un peu peur pour les épreuves orales dans 2 semaines."
  },
  {
   "who": "Le professeur",
   "text": "Bon je dois y aller. Je croise les doigts pour les résultats et je vous souhaite de bonnes vacances."
  },
  {
   "who": "Nathalie",
   "text": "Merci beaucoup Monsieur. Bonnes vacances à vous aussi !"
  }
 ],
 "lecon17": [
  {
   "title": "Qu'est-ce que tu as mangé ?"
  },
  {
   "who": "Melissa",
   "text": "Qu'est-ce que tu as mangé pour le petit-déj' ?"
  },
  {
   "who": "Jessica",
   "text": "Normalement, je mange du sucré au petit-déjeuner mais j'ai décidé de commencer à manger du salé. Donc je me suis fait une tartine avec de l'avocat, du citron, un œuf sur le plat et un peu de sel."
  },
  {
   "who": "Melissa",
   "text": "Ça a l'air délicieux ! Et qu'est-ce que tu as mangé pour le déjeuner ?"
  },
  {
   "who": "Jessica",
   "text": "En entrée, j'ai mangé des tomates, du concombre et de la feta. En plat principal, du riz, des brocolis et de la viande que j'ai achetée chez le boucher."
  },
  {
   "who": "Melissa",
   "text": "Ah ok, moi j'adorais la viande mais je suis végétarienne depuis 2 ans donc je la remplace par des protéines végétales."
  },
  {
   "who": "Jessica",
   "text": "Ah oui je comprends mais moi j'aime trop la viande, je n'arrive pas à arrêter. Et j'adore le poisson aussi. D'ailleurs j'ai mangé du poisson frais avec des pâtes hier soir. C'était délicieux."
  },
  {
   "who": "Melissa",
   "text": "Très bien. Et qu'est-ce que tu as mangé en dessert ?"
  },
  {
   "who": "Jessica",
   "text": "En dessert, j'ai juste mangé des fruits, je n'avais plus vraiment faim !"
  },
  {
   "who": "Melissa",
   "text": "Oui j'imagine ! Et en général, qu'est-ce que tu bois à table ?"
  },
  {
   "who": "Jessica",
   "text": "J'adore le vin, surtout avec le fromage, mais j'essaie vraiment de boire seulement de l'eau à table. Sauf le matin où je prends du thé ou du café."
  }
 ],
 "lecon18": [
  {
   "title": "Devant la pharmacie"
  },
  {
   "scene": "Deux amis discutent de leur santé devant la pharmacie."
  },
  {
   "text": "Comment ça va en ce moment ?"
  },
  {
   "text": "Pas mal, mais je dois faire plus de sport. J'ai déjà pris un peu de poids depuis Noël."
  },
  {
   "text": "Ah bon ? Tu n'as jamais eu de problème de poids avant. Qu'est-ce qui a changé ?"
  },
  {
   "text": "Eh bien, je travaille beaucoup et je n'ai pas beaucoup de temps pour aller à la salle de sport. Mais je vais commencer à faire un régime pour perdre ces kilos en trop."
  },
  {
   "text": "C'est une bonne idée. Je devrais faire la même chose. Mais je n'ai pas encore trouvé le temps pour m'y mettre..."
  },
  {
   "text": "Et toi sinon, comment va la santé ? Tu as l'air un peu enrhumé."
  },
  {
   "text": "En fait, je suis enrhumé depuis deux semaines, je ne sais pas ce qui se passe, c'est très chiant. Tu as déjà eu ça ?"
  },
  {
   "text": "Non j'ai jamais eu ça... Ah mais si ! L'année dernière ! Mais au final c'était une bronchite et c'est passé vite avec les médicaments. Tu es déjà allé voir le médecin ?"
  },
  {
   "text": "Non j'ai pas encore eu le temps de prendre rendez-vous, je suis débordé. Mais je vais le faire là."
  }
 ],
 "lecon19": [
  {
   "title": "Deux amis discutent d'un vœu"
  },
  {
   "scene": "Deux amis discutent de ce qu'ils feraient s'ils pouvaient faire un vœu."
  },
  {
   "who": "Premier ami",
   "text": "Si un génie te proposait de réaliser un de tes rêves, qu'est-ce que tu lui demanderais ?"
  },
  {
   "who": "Deuxième ami",
   "text": "Hum... je crois que je lui demanderais beaucoup d'argent tout simplement !"
  },
  {
   "who": "Premier ami",
   "text": "Ah oui ? Pas très original ! Et qu'est-ce que tu ferais si tu avais beaucoup d'argent ?"
  },
  {
   "who": "Deuxième ami",
   "text": "Si j'avais beaucoup d'argent, j'arrêterais de travailler, ou je travaillerais pour une association caritative. Comme ça, j'aurais plus de temps pour m'occuper de mes enfants."
  },
  {
   "who": "Premier ami",
   "text": "Je vois. Et qu'est-ce que vous feriez ensemble ?"
  },
  {
   "who": "Deuxième ami",
   "text": "Je pourrais aller les chercher à l'école à 16h30, et on aurait le temps pour faire de la peinture ou des choses comme ça."
  },
  {
   "who": "Premier ami",
   "text": "C'est vrai que ce serait cool, tu serais moins stressé et tu pourrais profiter plus de la vie."
  }
 ],
 "lecon20": [
  {
   "title": "Deux couples discutent de leurs voyages"
  },
  {
   "scene": "Deux couples discutent de leurs voyages."
  },
  {
   "who": "Premier couple",
   "text": "Vous êtes déjà allés en Amérique Latine ?"
  },
  {
   "who": "Deuxième couple",
   "text": "Non, on n'est jamais allés en Amérique Latine. Par contre, on connait bien l'Amérique du Nord. On y va presque tous les ans. Cette année, on est retourné à New York. Vous y êtes déjà allés ?"
  },
  {
   "who": "Premier couple",
   "text": "Non, on n'y est jamais allés, mais on adorerait découvrir les États-Unis ! Et vous avez déjà été à Denver aussi ?"
  },
  {
   "who": "Deuxième couple",
   "text": "Moi, j'y ai déjà été, mais pas Karine. J'ai beaucoup aimé. C'est tout près des Rocheuses, il y a de magnifiques randonnées à faire là-bas. Et vous, vous aimez voyager ?"
  },
  {
   "who": "Premier couple",
   "text": "Oui, on a toujours adoré voyager ! On devait partir au Brésil l'année dernière mais on a perdu nos 2 passeports ! Du coup, on y va cet été !"
  },
  {
   "who": "Deuxième couple",
   "text": "Génial ! Vous avez déjà acheté vos billets ?"
  },
  {
   "who": "Premier couple",
   "text": "Non on n'a pas encore acheté nos billets. La dernière fois que j'ai regardé sur le site, c'était trop cher."
  },
  {
   "who": "Deuxième couple",
   "text": "Ah ok. Si tu veux je connais un site super pour acheter des billets d'avion pas chers. Ça s'appelle billetspaschers.com. Tu devrais jeter un coup d'oeil."
  },
  {
   "who": "Premier couple",
   "text": "Attends je n'ai pas bien compris, tu peux répéter le nom du site s'il te plaît ? Comment ça s'écrit ?"
  },
  {
   "who": "Deuxième couple",
   "text": "billetspaschers.com. B-I-L-L-E-T-S-P-A-S-C-H-E-R-S point com."
  }
 ]
};
