// Each French lesson's text with her own English, sentence by sentence, for
// the Dialogues module (dialogues.js). Written by scripts/fr-dialogues.mjs from
// Laura Caufour's sheets; run it again if a text changes.
//
// A line is { kind, who, whoFr, sentences: [{ en, fr }] }, its kind "say",
// "scene", "question" or "para". A sentence's place here is what its answers
// are kept under, so a sentence added or taken out moves the ones after it.

export const DIALOGUE_TEXTS = {
 "lecon1": {
  "title": "First French class",
  "titleFr": "Premier cours de français",
  "lines": [
   {
    "kind": "say",
    "who": "Élise",
    "whoFr": "Élise",
    "sentences": [
     {
      "en": "Hello, my name is Élise, I am your French teacher.",
      "fr": "Bonjour, je m'appelle Élise, je suis ta professeure de français."
     },
     {
      "en": "And you, what's your name?",
      "fr": "Et toi, comment tu t'appelles ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoFr": "James",
    "sentences": [
     {
      "en": "My name is James",
      "fr": "Je m'appelle James."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Élise",
    "whoFr": "Élise",
    "sentences": [
     {
      "en": "Where are you from?",
      "fr": "Tu es d'où?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoFr": "James",
    "sentences": [
     {
      "en": "I am American, from New York, but I've been living in Los Angeles for two years.",
      "fr": "Je suis américain, de New York, mais j'habite à Los Angeles depuis deux ans."
     },
     {
      "en": "And you?",
      "fr": "Et toi ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Élise",
    "whoFr": "Élise",
    "sentences": [
     {
      "en": "I am French, from Paris, but I've been living in the United States for two months.",
      "fr": "Je suis française, de Paris, mais j'habite aux États-Unis depuis deux mois."
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoFr": "James",
    "sentences": [
     {
      "en": "Very good.",
      "fr": "Très bien."
     },
     {
      "en": "Why are you in the United States?",
      "fr": "Pourquoi tu es aux États-Unis ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Élise",
    "whoFr": "Élise",
    "sentences": [
     {
      "en": "I am here with my husband to learn English.",
      "fr": "Je suis ici avec mon mari pour apprendre l'anglais."
     },
     {
      "en": "And you, are you married?",
      "fr": "Et toi, tu es marié ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoFr": "James",
    "sentences": [
     {
      "en": "Yes, I'm married, my wife's name is Jessica.",
      "fr": "Oui je suis marié. Le nom de ma femme est Jessica."
     },
     {
      "en": "We have been together for two years.",
      "fr": "Nous sommes ensemble depuis deux ans."
     }
    ]
   }
  ]
 },
 "lecon2": {
  "title": "James is talking with a friend in a cafe",
  "titleFr": "James discute avec un ami dans un café",
  "lines": [
   {
    "kind": "scene",
    "sentences": [
     {
      "en": "James is talking with a friend in a cafe.",
      "fr": "James discute avec un ami dans un café."
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoFr": "James",
    "sentences": [
     {
      "en": "Hi!",
      "fr": "Salut !"
     },
     {
      "en": "How are you?",
      "fr": "Comment tu vas ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Damien",
    "whoFr": "Damien",
    "sentences": [
     {
      "en": "I'm very good, thank you, and you, are you good?",
      "fr": "Je vais très bien, merci, et toi ça va ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoFr": "James",
    "sentences": [
     {
      "en": "Yes all good!",
      "fr": "Ça va !"
     },
     {
      "en": "What are you going to do today?",
      "fr": "Qu'est-ce que tu vas faire aujourd'hui ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Damien",
    "whoFr": "Damien",
    "sentences": [
     {
      "en": "I'm going to see my wife and my children at the beach.",
      "fr": "Je vais voir ma femme et mes enfants à la plage."
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoFr": "James",
    "sentences": [
     {
      "en": "Great!",
      "fr": "Super !"
     },
     {
      "en": "How is your wife doing?",
      "fr": "Comment va ta femme ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Damien",
    "whoFr": "Damien",
    "sentences": [
     {
      "en": "Actually she is very tired.",
      "fr": "En fait, elle est très fatiguée."
     },
     {
      "en": "She works a lot.",
      "fr": "Elle travaille beaucoup."
     },
     {
      "en": "But my kids are doing very well.",
      "fr": "Mais mes enfants vont très bien."
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoFr": "James",
    "sentences": [
     {
      "en": "Me too, I'm a little bit tired...",
      "fr": "Moi aussi, je suis un peu fatigué..."
     },
     {
      "en": "And after the beach, what are you guys going to do?",
      "fr": "Et après la plage, qu'est-ce que vous allez faire ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Damien",
    "whoFr": "Damien",
    "sentences": [
     {
      "en": "I think that we're going to have dinner at the restaurant.",
      "fr": "Je pense que nous allons dîner au restaurant."
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoFr": "James",
    "sentences": [
     {
      "en": "Very good.",
      "fr": "Très bien."
     },
     {
      "en": "See you soon!",
      "fr": "A bientôt !"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Damien",
    "whoFr": "Damien",
    "sentences": [
     {
      "en": "Bye, see you soon!",
      "fr": "Au revoir, à bientôt"
     }
    ]
   }
  ]
 },
 "lecon3": {
  "title": "At the bookshop",
  "titleFr": "À la librairie",
  "lines": [
   {
    "kind": "say",
    "who": "Élise",
    "whoFr": "Élise",
    "sentences": [
     {
      "en": "Hello, I have a present to give to my father.",
      "fr": "Bonjour, j'ai un cadeau à faire à mon père."
     },
     {
      "en": "Do you have books about French history?",
      "fr": "Vous avez des livres sur l'histoire de France ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "The sales assistant",
    "whoFr": "Le vendeur",
    "sentences": [
     {
      "en": "Yes, we have a very beautiful book about French Revolution.",
      "fr": "Oui, nous avons un très beau livre sur la Révolution Française."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Élise",
    "whoFr": "Élise",
    "sentences": [
     {
      "en": "Thank you very much. And do you have something about the city of Paris?",
      "fr": "Merci beaucoup, et vous avez quelque chose sur la ville de Paris ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "The sales assistant",
    "whoFr": "Le vendeur",
    "sentences": [
     {
      "en": "Yes, I have a new book about the Eiffel Tower.",
      "fr": "Oui, j'ai un nouveau livre sur la Tour Eiffel."
     },
     {
      "en": "It is on the table over there.",
      "fr": "Il est sur la table là-bas."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Élise",
    "whoFr": "Élise",
    "sentences": [
     {
      "en": "Very good.",
      "fr": "Très bien."
     },
     {
      "en": "And I also have a present to give to my sister.",
      "fr": "Et j'ai aussi un cadeau à faire à ma sœur."
     },
     {
      "en": "Do you have an idea?",
      "fr": "Vous avez une idée ?"
     },
     {
      "en": "She is 17 years old.",
      "fr": "Elle a 17 ans."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The sales assistant",
    "whoFr": "Le vendeur",
    "sentences": [
     {
      "en": "Yes, sure.",
      "fr": "Oui, bien sûr."
     },
     {
      "en": "Go to the second floor, they have discounts on the wireless earphones.",
      "fr": "Allez au deuxième étage, ils ont des promotions sur les écouteurs sans fil."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Élise",
    "whoFr": "Élise",
    "sentences": [
     {
      "en": "Thank you very much.",
      "fr": "Merci beaucoup."
     },
     {
      "en": "I'll take both books and the earphones please.",
      "fr": "Je vais prendre les deux livres et les écouteurs s'il-vous-plaît."
     },
     {
      "en": "Have a nice day!",
      "fr": "Bonne journée !"
     }
    ]
   }
  ]
 },
 "lecon4": {
  "title": "James is showing a picture of his family",
  "titleFr": "James montre une photo de sa famille",
  "lines": [
   {
    "kind": "scene",
    "sentences": [
     {
      "en": "James is showing a picture of his family to Mathieu, his French friend.",
      "fr": "James montre une photo de sa famille à Mathieu, son ami français."
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoFr": "James",
    "sentences": [
     {
      "en": "Look Mathieu, it's my family!",
      "fr": "Regarde Mathieu, c'est ma famille !"
     },
     {
      "en": "On the left is my father and next to him is my mother.",
      "fr": "À gauche, c'est mon père et à côté, c'est ma mère."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mathieu",
    "whoFr": "Mathieu",
    "sentences": [
     {
      "en": "Ah okay.",
      "fr": "Ah d'accord."
     },
     {
      "en": "Where do your parents live?",
      "fr": "Où habitent tes parents ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoFr": "James",
    "sentences": [
     {
      "en": "My parents live in Montauk, near New York.",
      "fr": "Mes parents habitent à Montauk, près de New York."
     },
     {
      "en": "They don't work, they are retired now.",
      "fr": "Ils ne travaillent pas, ils sont retraités maintenant."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mathieu",
    "whoFr": "Mathieu",
    "sentences": [
     {
      "en": "What do they like to do?",
      "fr": "Qu'est-ce qu'ils aiment faire ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoFr": "James",
    "sentences": [
     {
      "en": "My mom likes to walk, and my dad likes to ride a bike.",
      "fr": "Ma mère aime marcher, et mon père aime faire du vélo."
     },
     {
      "en": "And they often watch TV together.",
      "fr": "Et ils regardent souvent la télé ensemble."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mathieu",
    "whoFr": "Mathieu",
    "sentences": [
     {
      "en": "I see!",
      "fr": "Je vois !"
     },
     {
      "en": "And on the right is your brother?",
      "fr": "Et à droite, c'est ton frère ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoFr": "James",
    "sentences": [
     {
      "en": "Yes, this is my brother Jean with his wife and his two kids.",
      "fr": "Oui, c'est mon frère Jean avec sa femme et ses deux enfants."
     },
     {
      "en": "The little girl is Emma, and the little boy is Jules.",
      "fr": "La petite fille, c'est Emma, et le petit garçon c'est Jules."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mathieu",
    "whoFr": "Mathieu",
    "sentences": [
     {
      "en": "Great!",
      "fr": "Super !"
     },
     {
      "en": "And what is the name of your brother's wife?",
      "fr": "Et comment s'appelle la femme de ton frère ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoFr": "James",
    "sentences": [
     {
      "en": "Her name is Nathalie.",
      "fr": "Elle s'appelle Nathalie."
     },
     {
      "en": "She is very nice.",
      "fr": "Elle est très sympa."
     },
     {
      "en": "She's 35 years old and she is a nurse.",
      "fr": "Elle a 35 (trente-cinq) ans et elle est infirmière."
     },
     {
      "en": "She loves to surf and invite the whole family to big barbecues.",
      "fr": "Elle adore surfer et inviter toute la famille à des grands barbecues."
     }
    ]
   }
  ]
 },
 "lecon5": {
  "title": "Mike is an American tourist in Paris",
  "titleFr": "Mike est un touriste américain à Paris",
  "lines": [
   {
    "kind": "scene",
    "sentences": [
     {
      "en": "Mike is an American tourist in Paris.",
      "fr": "Mike est un touriste américain à Paris."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mike",
    "whoFr": "Mike",
    "sentences": [
     {
      "en": "Excuse me Sir, I am lost.",
      "fr": "Excusez-moi Monsieur, je suis perdu."
     },
     {
      "en": "Can you help me please?",
      "fr": "Vous pouvez m'aider s'il vous plaît ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "A passer-by",
    "whoFr": "Un passant",
    "sentences": [
     {
      "en": "I don't live in Paris but I can try!",
      "fr": "Je n'habite pas à Paris mais je peux essayer !"
     },
     {
      "en": "Where do you want to go?",
      "fr": "Où vous voulez aller ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mike",
    "whoFr": "Mike",
    "sentences": [
     {
      "en": "I want to go to Notre-Dame de Paris.",
      "fr": "Je veux aller à Notre-Dame de Paris."
     }
    ]
   },
   {
    "kind": "say",
    "who": "A passer-by",
    "whoFr": "Un passant",
    "sentences": [
     {
      "en": "I am sorry, I don't know where it is.",
      "fr": "Je suis désolé, je ne sais pas où c'est."
     },
     {
      "en": "I think that you can ask the newspaper saleswoman.",
      "fr": "Je pense que vous pouvez demander à la vendeuse de journaux."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mike",
    "whoFr": "Mike",
    "sentences": [
     {
      "en": "It's a good idea.",
      "fr": "C'est une bonne idée."
     },
     {
      "en": "Thank you and have a nice day!",
      "fr": "Merci et bonne journée."
     }
    ]
   },
   {
    "kind": "scene",
    "sentences": [
     {
      "en": "To the newspaper saleswoman",
      "fr": "À la vendeuse de journaux"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mike",
    "whoFr": "Mike",
    "sentences": [
     {
      "en": "Hello Madam.",
      "fr": "Bonjour Madame."
     },
     {
      "en": "I'm looking for Notre-Dame de Paris.",
      "fr": "Je cherche Notre-Dame de Paris."
     },
     {
      "en": "Can you help me?",
      "fr": "Vous pouvez m'aider ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "The saleswoman",
    "whoFr": "La vendeuse",
    "sentences": [
     {
      "en": "Yes sure!",
      "fr": "Oui bien sûr !"
     },
     {
      "en": "Look there, there is Odeon metro station.",
      "fr": "Regardez là-bas, il y a la station de métro Odéon."
     },
     {
      "en": "You take the 4 line, you exit in Saint Michel and you will see the cathedral.",
      "fr": "Vous prenez la ligne 4, vous sortez à Saint Michel et vous allez voir la cathédrale."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mike",
    "whoFr": "Mike",
    "sentences": [
     {
      "en": "Excuse me, I don't speak very good French.",
      "fr": "Excusez-moi, je ne parle pas très bien français."
     },
     {
      "en": "Can you repeat slower please?",
      "fr": "Vous pouvez répéter plus lentement s'il-vous-plaît ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "The saleswoman",
    "whoFr": "La vendeuse",
    "sentences": [
     {
      "en": "Yes sure, you take the metro, the 4 line, and you exit in Saint Michel.",
      "fr": "Oui bien sûr, vous prenez le métro, ligne 4, et vous sortez à Saint Michel."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mike",
    "whoFr": "Mike",
    "sentences": [
     {
      "en": "I don't like the metro.",
      "fr": "Je n'aime pas le métro."
     },
     {
      "en": "I prefer to walk.",
      "fr": "Je préfère marcher."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The saleswoman",
    "whoFr": "La vendeuse",
    "sentences": [
     {
      "en": "Ah ok, so here is a map of Paris.",
      "fr": "Ah d'accord, alors voilà un plan de Paris."
     },
     {
      "en": "Good luck!",
      "fr": "Bonne chance !"
     }
    ]
   }
  ]
 },
 "lecon6-1": {
  "title": "Maxime",
  "titleFr": "Maxime",
  "lines": [
   {
    "kind": "question",
    "sentences": [
     {
      "en": "What does he look like?",
      "fr": "Comment il est physiquement ?"
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "He has light brown hair and brown eyes.",
      "fr": "Il a les cheveux châtains et les yeux marrons."
     },
     {
      "en": "He is tall.",
      "fr": "Il est grand."
     },
     {
      "en": "In the picture, he is wearing a blue shirt.",
      "fr": "Sur la photo, il porte une chemise bleue."
     }
    ]
   },
   {
    "kind": "question",
    "sentences": [
     {
      "en": "How is his personality?",
      "fr": "Comment est son caractère ?"
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "He is very nice and he likes to laugh a lot.",
      "fr": "Il est très sympa et il aime beaucoup rigoler."
     },
     {
      "en": "He is always in a good mood.",
      "fr": "Il est toujours de bonne humeur."
     },
     {
      "en": "He is sociable and generous.",
      "fr": "Il est sociable et généreux."
     },
     {
      "en": "He has a lot of friends and he is always ready to help them.",
      "fr": "Il a beaucoup d'amis et il est toujours prêt à les aider."
     }
    ]
   },
   {
    "kind": "question",
    "sentences": [
     {
      "en": "What's his job?",
      "fr": "Qu'est-ce qu'il fait dans la vie ?"
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "He is a journalist for the France 24 TV channel.",
      "fr": "Il est journaliste pour la chaîne de télévision France 24."
     },
     {
      "en": "He travels a lot around the world for his work.",
      "fr": "Il voyage beaucoup dans le monde pour son travail."
     },
     {
      "en": "He specializes in cultural documentaries.",
      "fr": "Il est spécialisé dans les documentaires culturels."
     }
    ]
   },
   {
    "kind": "question",
    "sentences": [
     {
      "en": "What does he like to do?",
      "fr": "Qu'est-ce qu'il aime faire ?"
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "He loves to travel, to discover new countries, to learn new things, to play sport, to spend time with his friends and to make jokes.",
      "fr": "Il adore voyager, découvrir de nouveaux pays, apprendre de nouvelles choses, faire du sport, passer du temps avec ses amis et faire des blagues."
     }
    ]
   },
   {
    "kind": "question",
    "sentences": [
     {
      "en": "What doesn't he like?",
      "fr": "Qu'est-ce qu'il n'aime pas ?"
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "He doesn't like the cold, vegetables and selfish people.",
      "fr": "Il n'aime pas le froid, les légumes et les gens égoïstes."
     }
    ]
   }
  ]
 },
 "lecon6-2": {
  "title": "Léa",
  "titleFr": "Léa",
  "lines": [
   {
    "kind": "question",
    "sentences": [
     {
      "en": "What does she look like?",
      "fr": "Comment elle est physiquement ?"
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "She is blond and she has blue eyes.",
      "fr": "Elle est blonde et elle a les yeux bleus."
     },
     {
      "en": "She's 165 cm tall.",
      "fr": "Elle fait 1 mètre 65."
     },
     {
      "en": "In the picture, she wears a white coat.",
      "fr": "Sur la photo, elle porte une blouse blanche."
     }
    ]
   },
   {
    "kind": "question",
    "sentences": [
     {
      "en": "How is her personality?",
      "fr": "Comment est son caractère ?"
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "She is kind, very sweet and a little bit shy too.",
      "fr": "Elle est gentille, très douce et aussi un peu timide."
     },
     {
      "en": "She is very smart and hard working.",
      "fr": "Elle est très intelligente et travailleuse."
     }
    ]
   },
   {
    "kind": "question",
    "sentences": [
     {
      "en": "What's her job?",
      "fr": "Qu'est-ce qu'elle fait dans la vie ?"
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "She is a doctor.",
      "fr": "Elle est médecin."
     },
     {
      "en": "She works on Mondays and Tuesdays at the hospital and the other days in her office.",
      "fr": "Elle travaille le lundi et le mardi à l'hôpital et les autres jours dans son cabinet."
     },
     {
      "en": "She loves her job and her patients.",
      "fr": "Elle adore son travail et ses patients."
     }
    ]
   },
   {
    "kind": "question",
    "sentences": [
     {
      "en": "What does she like to do?",
      "fr": "Qu'est-ce qu'elle aime faire ?"
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "She likes to spend time with her husband and her three kids.",
      "fr": "Elle aime passer du temps avec son mari et ses trois enfants."
     },
     {
      "en": "When she doesn't work, she likes to stay at home to read or to cook a good meal for the whole family.",
      "fr": "Quand elle ne travaille pas, elle aime rester à la maison pour lire ou cuisiner un bon repas pour toute la famille."
     }
    ]
   },
   {
    "kind": "question",
    "sentences": [
     {
      "en": "What doesn't she like?",
      "fr": "Qu'est-ce qu'elle n'aime pas ?"
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "She doesn't like to exercise, it's too tiring!",
      "fr": "Elle n'aime pas faire du sport, c'est trop fatigant !"
     }
    ]
   }
  ]
 },
 "lecon6-3": {
  "title": "Jean-Pierre",
  "titleFr": "Jean-Pierre",
  "lines": [
   {
    "kind": "question",
    "sentences": [
     {
      "en": "What does he look like?",
      "fr": "Comment il est physiquement ?"
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "He has white hair and blue eyes.",
      "fr": "Il a les cheveux blancs et les yeux bleus."
     },
     {
      "en": "In the picture, he wears glasses and a green shirt.",
      "fr": "Sur la photo, il porte des lunettes et une chemise verte."
     },
     {
      "en": "Sometimes he likes to wear pink pants and shoes.",
      "fr": "Des fois, il aime porter un pantalon et des chaussures roses."
     }
    ]
   },
   {
    "kind": "question",
    "sentences": [
     {
      "en": "How is his personality?",
      "fr": "Comment est son caractère ?"
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "Most of the time, he is very funny and he loves to make jokes but he is also a little bit moody.",
      "fr": "La plupart du temps, il est très drôle et il adore faire des blagues mais il est aussi un peu lunatique."
     },
     {
      "en": "When he is in a bad mood, he prefers to stay alone.",
      "fr": "Quand il est de mauvaise humeur, il préfère rester seul."
     }
    ]
   },
   {
    "kind": "question",
    "sentences": [
     {
      "en": "What's his job?",
      "fr": "Qu'est-ce qu'il fait dans la vie ?"
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "Jean-Pierre is retired so he has a lot of free time, but he is a very active grandfather.",
      "fr": "Jean-Pierre est retraité donc il a beaucoup de temps libre, mais c'est un grand-père très actif."
     },
     {
      "en": "He has 6 grandchildren.",
      "fr": "Il a six petits-enfants."
     }
    ]
   },
   {
    "kind": "question",
    "sentences": [
     {
      "en": "What does he like to do?",
      "fr": "Qu'est-ce qu'il aime faire ?"
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "He likes to work around the house, to garden and to take care of his grandchildren.",
      "fr": "Il aime bricoler, jardiner et s'occuper de ses petits-enfants."
     }
    ]
   },
   {
    "kind": "question",
    "sentences": [
     {
      "en": "What doesn't he like?",
      "fr": "Qu'est-ce qu'il n'aime pas ?"
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "He doesn't like politics and doing the housework.",
      "fr": "Il n'aime pas la politique et faire le ménage."
     }
    ]
   }
  ]
 },
 "lecon7": {
  "title": "Maxime's day",
  "titleFr": "La journée de Maxime",
  "lines": [
   {
    "kind": "question",
    "sentences": [
     {
      "en": "Did you have a good day yesterday?",
      "fr": "Tu as passé une bonne journée hier ?"
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "Yes, yesterday, I had a very good day.",
      "fr": "Oui, hier, j'ai passé une très bonne journée."
     }
    ]
   },
   {
    "kind": "question",
    "sentences": [
     {
      "en": "What did you do yesterday morning?",
      "fr": "Qu'est-ce que tu as fait hier matin ?"
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "In the morning, I got up at 7 o'clock, I ate breakfast and I listened to the radio.",
      "fr": "Le matin, je me suis levé à 7 heures, j'ai pris le petit-déjeuner et j'ai écouté la radio."
     },
     {
      "en": "After that I took a shower and I went to work.",
      "fr": "Ensuite, j'ai pris une douche et je suis allé au travail."
     }
    ]
   },
   {
    "kind": "question",
    "sentences": [
     {
      "en": "What did you do yesterday at lunch time?",
      "fr": "Qu'est-ce que tu as fait hier midi ?"
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "At lunch time, I had lunch with colleagues at the restaurant near work.",
      "fr": "Le midi, j'ai déjeuné avec des collègues au restaurant près du travail."
     },
     {
      "en": "I ate a very good pizza and we went back to work.",
      "fr": "J'ai mangé une très bonne pizza et nous sommes retournés travailler."
     }
    ]
   },
   {
    "kind": "question",
    "sentences": [
     {
      "en": "What did you do yesterday afternoon?",
      "fr": "Qu'est-ce que tu as fait hier après-midi ?"
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "In the afternoon, I had a meeting with clients.",
      "fr": "L'après-midi, j'ai eu une réunion avec des clients."
     },
     {
      "en": "I left work at 6pm.",
      "fr": "Je suis sorti du travail à 18 heures."
     }
    ]
   },
   {
    "kind": "question",
    "sentences": [
     {
      "en": "What did you do last night?",
      "fr": "Qu'est-ce que tu as fait hier soir ?"
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "In the evening, I went to the gym and I came back home.",
      "fr": "Le soir, je suis allé à la salle de sport et je suis rentré à la maison."
     },
     {
      "en": "I cooked with my wife and we had dinner together.",
      "fr": "J'ai cuisiné avec ma femme et nous avons dîné ensemble."
     },
     {
      "en": "Then we watched TV and we went to sleep.",
      "fr": "Ensuite nous avons regardé la télé et nous sommes allés dormir."
     }
    ]
   }
  ]
 },
 "lecon8": {
  "title": "Maxime interviews James and Jessica",
  "titleFr": "Maxime interviewe James et Jessica",
  "lines": [
   {
    "kind": "scene",
    "sentences": [
     {
      "en": "Maxime interviews James and Jessica for a TV program on France 24.",
      "fr": "Maxime interviewe James et Jessica pour une émission sur France 24."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Maxime",
    "whoFr": "Maxime",
    "sentences": [
     {
      "en": "James and Jessica, you are Americans and you speak French fluently.",
      "fr": "James et Jessica, vous êtes américains et vous parlez couramment le français."
     },
     {
      "en": "Why did you start learning?",
      "fr": "Pourquoi vous avez commencé à apprendre ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoFr": "James",
    "sentences": [
     {
      "en": "We went on vacation to France in 2012, and we loved the country and the culture.",
      "fr": "On est partis en vacances en France en 2012, et on a adoré le pays et la culture."
     },
     {
      "en": "So when we got back to Los Angeles, we decided to learn the language.",
      "fr": "Donc, quand on est rentrés à Los Angeles, on a décidé d'apprendre la langue."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Maxime",
    "whoFr": "Maxime",
    "sentences": [
     {
      "en": "How did you do?",
      "fr": "Comment vous avez fait ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoFr": "James",
    "sentences": [
     {
      "en": "We found a tutor in Los Angeles and started taking lessons twice a week.",
      "fr": "On a trouvé un professeur particulier à Los Angeles et on a commencé à prendre des cours deux fois par semaine."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Maxime",
    "whoFr": "Maxime",
    "sentences": [
     {
      "en": "Did you find it difficult?",
      "fr": "Vous avez trouvé ça difficile ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Jessica",
    "whoFr": "Jessica",
    "sentences": [
     {
      "en": "In the beginning it was a bit difficult, and over time, it got easier.",
      "fr": "Au début c'était un peu difficile, et avec le temps, c'est devenu plus facile."
     },
     {
      "en": "But we worked hard to reach this level!",
      "fr": "Mais on a travaillé dur pour atteindre ce niveau !"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Maxime",
    "whoFr": "Maxime",
    "sentences": [
     {
      "en": "And you came back to France afterwards?",
      "fr": "Et vous êtes revenus en France après ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Jessica",
    "whoFr": "Jessica",
    "sentences": [
     {
      "en": "Yes several times!",
      "fr": "Oui plusieurs fois !"
     },
     {
      "en": "The first time, in 2015, it was difficult but we were able to communicate a little.",
      "fr": "La première fois, en 2015 c'était difficile mais on a pu communiquer un peu."
     },
     {
      "en": "And this time, it's really easy.",
      "fr": "Et cette fois, c'est vraiment facile."
     },
     {
      "en": "It's great to see the progress.",
      "fr": "C'est super de voir les progrès."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Maxime",
    "whoFr": "Maxime",
    "sentences": [
     {
      "en": "Yes it's impressive!",
      "fr": "Oui c'est impressionnant !"
     },
     {
      "en": "Congratulations!",
      "fr": "Félicitations !"
     }
    ]
   }
  ]
 },
 "lecon9": {
  "title": "Émilie talks about her summer vacation",
  "titleFr": "Émilie raconte ses vacances d'été",
  "lines": [
   {
    "kind": "scene",
    "sentences": [
     {
      "en": "Émilie is talking about her summer vacation to Matt, her Australian friend.",
      "fr": "Émilie raconte ses vacances d'été à Matt, son ami australien."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Matt",
    "whoFr": "Matt",
    "sentences": [
     {
      "en": "Tell me Émilie, what did you do in July?",
      "fr": "Dis-moi Émilie, qu'est-ce que tu as fait en juillet ?"
     },
     {
      "en": "Did you work?",
      "fr": "Tu as travaillé ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Émilie",
    "whoFr": "Émilie",
    "sentences": [
     {
      "en": "No I haven't worked.",
      "fr": "Non je n'ai pas travaillé."
     },
     {
      "en": "This year we went to Brittany.",
      "fr": "Cette année, on est partis en Bretagne."
     },
     {
      "en": "It's a region in the West of France.",
      "fr": "C'est une région dans l'Ouest de la France."
     },
     {
      "en": "There are wonderful beaches like in Australia!",
      "fr": "Il y a des plages magnifiques, comme en Australie !"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Matt",
    "whoFr": "Matt",
    "sentences": [
     {
      "en": "Really?",
      "fr": "Vraiment ?"
     },
     {
      "en": "Is it pretty?",
      "fr": "C'est joli ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Émilie",
    "whoFr": "Émilie",
    "sentences": [
     {
      "en": "Yes it's a great place.",
      "fr": "Oui, c'est un endroit super."
     },
     {
      "en": "Usually it rains a lot there but this summer, we've been lucky, the weather was very nice.",
      "fr": "Normalement, il pleut beaucoup là-bas mais cet été, on a eu de la chance, il a fait très beau."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Matt",
    "whoFr": "Matt",
    "sentences": [
     {
      "en": "Have you visited Brest?",
      "fr": "Vous avez visité Brest ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Émilie",
    "whoFr": "Émilie",
    "sentences": [
     {
      "en": "No, we didn't visit Brest, Hugo didn't want to.",
      "fr": "Non, on n'a pas visité Brest, Hugo n'a pas voulu."
     },
     {
      "en": "But we walked on the beach and in the forest.",
      "fr": "Mais on a marché sur la plage et dans la forêt."
     },
     {
      "en": "We also saw pretty little villages.",
      "fr": "On a vu aussi de jolis petits villages."
     },
     {
      "en": "And we visited friends.",
      "fr": "Et on est allés voir des amis."
     },
     {
      "en": "It was great!",
      "fr": "C'était super !"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Matt",
    "whoFr": "Matt",
    "sentences": [
     {
      "en": "You haven't stopped!",
      "fr": "Vous n'avez pas arrêté !"
     },
     {
      "en": "Did you drive there?",
      "fr": "Vous y êtes allés en voiture ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Émilie",
    "whoFr": "Émilie",
    "sentences": [
     {
      "en": "Yes, it is more convenient.",
      "fr": "Oui, c'est plus pratique."
     },
     {
      "en": "And Hugo loves to drive!",
      "fr": "Et Hugo adore conduire !"
     },
     {
      "en": "And you, did you go on vacation this summer?",
      "fr": "Et toi, tu es parti en vacances cet été ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Matt",
    "whoFr": "Matt",
    "sentences": [
     {
      "en": "No, I didn't go on holiday this summer because I couldn't take my vacation, my boss didn't want to.",
      "fr": "Non, je ne suis pas parti cet été parce que je n'ai pas pu prendre mes congés, mon chef n'a pas voulu."
     }
    ]
   }
  ]
 },
 "lecon10": {
  "title": "The doctor talks with her secretary",
  "titleFr": "La médecin discute avec son secrétaire",
  "lines": [
   {
    "kind": "scene",
    "sentences": [
     {
      "en": "The doctor talks with her secretary before starting her working day.",
      "fr": "La médecin discute avec son secrétaire avant de commencer sa journée de travail."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The doctor",
    "whoFr": "La médecin",
    "sentences": [
     {
      "en": "Martin, did you email Mrs. Dupont like I asked you yesterday?",
      "fr": "Martin, tu as envoyé un mail à Mme Dupont comme je t'ai demandé hier ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "The secretary",
    "whoFr": "Le secrétaire",
    "sentences": [
     {
      "en": "Yes I emailed her but she did not respond.",
      "fr": "Oui je lui ai envoyé un mail mais elle n'a pas répondu."
     },
     {
      "en": "So I phoned her.",
      "fr": "Donc je lui ai téléphoné."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The doctor",
    "whoFr": "La médecin",
    "sentences": [
     {
      "en": "Very well.",
      "fr": "Très bien."
     },
     {
      "en": "And you told Mr. and Mrs. Ramirez to bring the Carte Vitale?",
      "fr": "Et tu as dit à M. et Mme Ramirez d'amener la carte Vitale ?"
     },
     {
      "en": "They always forget...",
      "fr": "Ils oublient toujours..."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The secretary",
    "whoFr": "Le secrétaire",
    "sentences": [
     {
      "en": "Yes I reminded them!",
      "fr": "Oui je leur ai rappelé !"
     },
     {
      "en": "I think this time they won't forget!",
      "fr": "Je pense que cette fois, ils ne vont pas oublier !"
     }
    ]
   },
   {
    "kind": "say",
    "who": "The doctor",
    "whoFr": "La médecin",
    "sentences": [
     {
      "en": "Ok.",
      "fr": "Ok."
     },
     {
      "en": "And otherwise yesterday I told you to update the files.",
      "fr": "Et sinon hier, je t'ai dit de mettre à jour les dossiers."
     },
     {
      "en": "Are you done?",
      "fr": "Tu as fini ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "The secretary",
    "whoFr": "Le secrétaire",
    "sentences": [
     {
      "en": "No, not yet, I haven't had time.",
      "fr": "Non pas encore, je n'ai pas eu le temps."
     },
     {
      "en": "I will do it now.",
      "fr": "Je vais le faire là."
     },
     {
      "en": "But wait, you gave me those files?",
      "fr": "Mais attends, tu m'as donné ces dossiers ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "The doctor",
    "whoFr": "La médecin",
    "sentences": [
     {
      "en": "Well yes, I gave you all the files last week.",
      "fr": "Bah oui, je t'ai donné tous les dossiers la semaine dernière."
     },
     {
      "en": "They are on your desk I believe.",
      "fr": "Ils sont sur ton bureau je crois."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The secretary",
    "whoFr": "Le secrétaire",
    "sentences": [
     {
      "en": "Yes yes it is true, you are right.",
      "fr": "Oui oui c'est vrai, tu as raison."
     },
     {
      "en": "I'll start this right away and let you know when I'm done.",
      "fr": "Je commence ça tout de suite et je te dis quand j'ai fini."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The doctor",
    "whoFr": "La médecin",
    "sentences": [
     {
      "en": "That works!",
      "fr": "Ça marche !"
     },
     {
      "en": "Good luck!",
      "fr": "Bon courage !"
     }
    ]
   }
  ]
 },
 "lecon11-1": {
  "title": "Elsa has trouble sleeping",
  "titleFr": "Elsa a des problèmes de sommeil",
  "lines": [
   {
    "kind": "scene",
    "sentences": [
     {
      "en": "Elsa has trouble sleeping.",
      "fr": "Elsa a des problèmes de sommeil."
     },
     {
      "en": "She talks to her friend about it.",
      "fr": "Elle en parle à son amie."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Elsa",
    "whoFr": "Elsa",
    "sentences": [
     {
      "en": "I sleep very badly at the moment.",
      "fr": "Je dors très mal en ce moment."
     },
     {
      "en": "I don't know what's going on...",
      "fr": "Je ne sais pas ce qui se passe..."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Her friend",
    "whoFr": "Son amie",
    "sentences": [
     {
      "en": "Ah damn...",
      "fr": "Ah mince..."
     },
     {
      "en": "But tell me, what time do you go to bed?",
      "fr": "Mais dis-moi, à quelle heure tu te couches ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Elsa",
    "whoFr": "Elsa",
    "sentences": [
     {
      "en": "I usually go to bed around 11pm and I fall asleep without any problem.",
      "fr": "En général je me couche vers 23h et je m'endors sans problème."
     },
     {
      "en": "The thing is, I wake up in the night and I go back to sleep only several hours later.",
      "fr": "Le truc c'est que je me réveille dans la nuit et je me rendors seulement plusieurs heures plus tard."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Her friend",
    "whoFr": "Son amie",
    "sentences": [
     {
      "en": "I see.",
      "fr": "Je vois."
     },
     {
      "en": "And when you wake up in the night, what do you do?",
      "fr": "Et quand tu te réveilles dans la nuit, qu'est-ce que tu fais ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Elsa",
    "whoFr": "Elsa",
    "sentences": [
     {
      "en": "I try to stay in bed but sometimes I get up because I'm too bored.",
      "fr": "J'essaie de rester au lit mais des fois je me lève car je m'ennuie trop."
     },
     {
      "en": "I turn on my phone and look at Instagram.",
      "fr": "J'allume mon téléphone et je regarde Instagram."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Her friend",
    "whoFr": "Son amie",
    "sentences": [
     {
      "en": "Oh yeah, that's not great...",
      "fr": "Ah ouais, c'est pas terrible ça..."
     },
     {
      "en": "And what time do you get up?",
      "fr": "Et à quelle heure tu te lèves ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Elsa",
    "whoFr": "Elsa",
    "sentences": [
     {
      "en": "If my husband works, I wake up at 6am because his alarm goes off.",
      "fr": "Si mon mari travaille, je me réveille à 6h car son réveil sonne."
     },
     {
      "en": "I hang out a bit in bed and get up around 7am.",
      "fr": "Je traîne un peu au lit et je me lève vers 7h."
     },
     {
      "en": "Then I brush my teeth, put on make-up and get dressed.",
      "fr": "Ensuite je me brosse les dents, je me maquille et je m'habille."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Her friend",
    "whoFr": "Son amie",
    "sentences": [
     {
      "en": "Ah yes, you must be exhausted all day...",
      "fr": "Ah oui, tu dois être crevée toute la journée..."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Elsa",
    "whoFr": "Elsa",
    "sentences": [
     {
      "en": "Yes, sometimes I rest during the day but I must admit that I feel very tired.",
      "fr": "Oui des fois je me repose dans la journée mais je t'avoue que je me sens très fatiguée."
     },
     {
      "en": "I think maybe I'll take some sleeping pills.",
      "fr": "Je me dis que je vais peut-être prendre des somnifères."
     }
    ]
   }
  ]
 },
 "lecon11-2": {
  "title": "How Agathe met her boyfriend",
  "titleFr": "Comment Agathe a rencontré son copain",
  "lines": [
   {
    "kind": "scene",
    "sentences": [
     {
      "en": "Agathe tells her godmother how she met her boyfriend.",
      "fr": "Agathe raconte à sa marraine comment elle a rencontré son copain."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The godmother",
    "whoFr": "La marraine",
    "sentences": [
     {
      "en": "So tell me, how did you meet your boyfriend?",
      "fr": "Alors raconte-moi, comment tu as rencontré ton copain ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Agathe",
    "whoFr": "Agathe",
    "sentences": [
     {
      "en": "We actually met on an app!",
      "fr": "En fait, on s'est rencontrés sur une appli !"
     },
     {
      "en": "It was 6 months ago already.",
      "fr": "C'était il y a 6 mois déjà."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The godmother",
    "whoFr": "La marraine",
    "sentences": [
     {
      "en": "Great!",
      "fr": "Ah super !"
     },
     {
      "en": "And how did your first date go?",
      "fr": "Et comment s'est passé votre premier rendez-vous ?"
     },
     {
      "en": "Do you remember?",
      "fr": "Tu te souviens ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Agathe",
    "whoFr": "Agathe",
    "sentences": [
     {
      "en": "Yes of course I remember!",
      "fr": "Oui bien sûr que je me souviens !"
     },
     {
      "en": "He picked me up at my house and took me to a small restaurant not far from Bastille.",
      "fr": "Il est venu me chercher chez moi et il m'a amenée dans un petit resto pas loin de Bastille."
     },
     {
      "en": "We sat down and talked to each other about our lives for hours.",
      "fr": "On s'est assis et on s'est raconté nos vies pendant des heures."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The godmother",
    "whoFr": "La marraine",
    "sentences": [
     {
      "en": "And did you guys kiss the first night?",
      "fr": "Et vous vous êtes embrassés le premier soir ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Agathe",
    "whoFr": "Agathe",
    "sentences": [
     {
      "en": "Yes!",
      "fr": "Oui !"
     },
     {
      "en": "We kissed when he took me home!",
      "fr": "On s'est embrassés quand il m'a ramenée chez moi !"
     }
    ]
   },
   {
    "kind": "say",
    "who": "The godmother",
    "whoFr": "La marraine",
    "sentences": [
     {
      "en": "And how soon did you see each other again?",
      "fr": "Et vous vous êtes revus combien de temps après ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Agathe",
    "whoFr": "Agathe",
    "sentences": [
     {
      "en": "We texted all night and saw each other the next day actually.",
      "fr": "On s'est envoyé des messages toute la nuit et on s'est revus le lendemain en fait."
     },
     {
      "en": "It was truly love at first sight!",
      "fr": "C'était vraiment le coup de foudre !"
     }
    ]
   },
   {
    "kind": "say",
    "who": "The godmother",
    "whoFr": "La marraine",
    "sentences": [
     {
      "en": "That's great, I'm really happy for you!",
      "fr": "C'est super, je suis vraiment heureuse pour toi !"
     },
     {
      "en": "And how long after did you first fight?",
      "fr": "Et vous vous êtes disputés pour la première fois combien de temps après ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Agathe",
    "whoFr": "Agathe",
    "sentences": [
     {
      "en": "Ah, I don't remember...",
      "fr": "Ah ça je ne me souviens pas..."
     },
     {
      "en": "We very rarely argue to be honest.",
      "fr": "On se dispute très rarement pour être honnête."
     }
    ]
   }
  ]
 },
 "lecon12": {
  "title": "A real estate agent receives a client",
  "titleFr": "Un agent immobilier reçoit des clients",
  "lines": [
   {
    "kind": "scene",
    "sentences": [
     {
      "en": "A real estate agent receives a client",
      "fr": "Un agent immobilier reçoit des clients"
     }
    ]
   },
   {
    "kind": "say",
    "who": "The agent",
    "whoFr": "L'agent",
    "sentences": [
     {
      "en": "So you're looking for a 2 bedrooms apartment in the center of Nantes.",
      "fr": "Donc vous cherchez un 3 pièces dans le centre ville de Nantes."
     },
     {
      "en": "And you want to buy, is that right?",
      "fr": "Et vous voulez acheter, c'est bien ça ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "The client",
    "whoFr": "Le client",
    "sentences": [
     {
      "en": "Yes, that's right.",
      "fr": "Oui c'est bien ça."
     },
     {
      "en": "We need at least 70 square meters, with an open kitchen and if possible quite a lot of light.",
      "fr": "On a besoin d'au moins 70 mètres carrés, avec une cuisine ouverte et si possible pas mal de lumière."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The agent",
    "whoFr": "L'agent",
    "sentences": [
     {
      "en": "Okay, I'm looking.",
      "fr": "Ok, je regarde."
     },
     {
      "en": "So we focus on the center of Nantes...",
      "fr": "Donc on se concentre sur le centre de Nantes..."
     },
     {
      "en": "Here I have a 2 bedrooms apartment of 79 square meters but...",
      "fr": "Là j'ai un 3 pièces de 79 mètres carrés mais..."
     },
     {
      "en": "No, I was wrong, it's for rent.",
      "fr": "Non je me suis trompé, il est à louer."
     },
     {
      "en": "I keep looking...",
      "fr": "Je continue à regarder..."
     }
    ]
   },
   {
    "kind": "scene",
    "sentences": [
     {
      "en": "Apartment visit",
      "fr": "La visite d'appartement"
     }
    ]
   },
   {
    "kind": "say",
    "who": "The client",
    "whoFr": "Le client",
    "sentences": [
     {
      "en": "My wife is going to be late so we'll start without her.",
      "fr": "Ma femme va être en retard donc on va commencer sans elle."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The agent",
    "whoFr": "L'agent",
    "sentences": [
     {
      "en": "Okay so this is the living room.",
      "fr": "Ok, alors là c'est le salon."
     },
     {
      "en": "I left the computer at the agency so I can't tell you exactly how big it is but it must be around 20 square meters.",
      "fr": "J'ai laissé l'ordinateur à l'agence donc je ne peux pas vous dire combien il fait exactement mais ça doit être autour de 20 mètres carrés."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The client",
    "whoFr": "Le client",
    "sentences": [
     {
      "en": "Oh yes, it's bigger than the one from yesterday's apartment.",
      "fr": "Ah oui il est plus grand que celui de l'appart d'hier."
     },
     {
      "en": "Well, you have to imagine without the furniture because I'm not a fan of the style...",
      "fr": "Bon, il faut imaginer sans les meubles parce que je suis pas fan du style..."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The agent",
    "whoFr": "L'agent",
    "sentences": [
     {
      "en": "Yes it's particular...",
      "fr": "Oui c'est particulier..."
     },
     {
      "en": "Here is the kitchen.",
      "fr": "Ici c'est la cuisine."
     },
     {
      "en": "It is recent and completely equipped.",
      "fr": "Elle est récente et complètement équipée."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The client",
    "whoFr": "Le client",
    "sentences": [
     {
      "en": "Much better than all that we saw for the moment.",
      "fr": "Bien mieux que tout ce qu'on a vu pour l'instant."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The agent",
    "whoFr": "L'agent",
    "sentences": [
     {
      "en": "So there are 2 bedrooms.",
      "fr": "Il y a donc 2 chambres."
     },
     {
      "en": "Here it is the bigger one and there, the smaller one.",
      "fr": "Ici c'est la plus grande et là, la plus petite."
     },
     {
      "en": "Both have a cupboard.",
      "fr": "Les deux ont un placard."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The client",
    "whoFr": "Le client",
    "sentences": [
     {
      "en": "Very nice.",
      "fr": "Très bien."
     },
     {
      "en": "And here I guess that this is the bathroom?",
      "fr": "Et là j'imagine que c'est la salle de bain ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "The agent",
    "whoFr": "L'agent",
    "sentences": [
     {
      "en": "Yes, the bathroom and the toilet are together.",
      "fr": "Oui, la salle de bain et les toilettes sont ensemble."
     },
     {
      "en": "You have to decide quickly, because there are many people interested.",
      "fr": "Il faut décider vite car il y a du monde sur le coup."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The client",
    "whoFr": "Le client",
    "sentences": [
     {
      "en": "Yes, of course I understand.",
      "fr": "Oui bien sûr, je comprends."
     },
     {
      "en": "I'll talk about it with my wife and I'll call you later.",
      "fr": "J'en parle avec ma femme et je vous appelle tout à l'heure."
     }
    ]
   }
  ]
 },
 "lecon13": {
  "title": "Jean-Pierre tells Tom about his childhood",
  "titleFr": "Jean-Pierre raconte son enfance à Tom",
  "lines": [
   {
    "kind": "scene",
    "sentences": [
     {
      "en": "Jean-Pierre tells his childhood story to Tom, his grandson.",
      "fr": "Jean-Pierre raconte son enfance à Tom, son petit-fils."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Jean-Pierre",
    "whoFr": "Jean-Pierre",
    "sentences": [
     {
      "en": "You see Tom, when I was a child, I lived in the country with my parents and my brothers and sisters.",
      "fr": "Tu vois Tom, quand j'étais petit, j'habitais à la campagne avec mes parents et mes frères et sœurs."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Tom",
    "whoFr": "Tom",
    "sentences": [
     {
      "en": "Were they nice to you?",
      "fr": "Ils étaient gentils avec toi ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Jean-Pierre",
    "whoFr": "Jean-Pierre",
    "sentences": [
     {
      "en": "Yes!",
      "fr": "Oui !"
     },
     {
      "en": "We had a lot of fun together!",
      "fr": "On s'amusait beaucoup ensemble !"
     },
     {
      "en": "And of course, we also argued sometimes.",
      "fr": "Et on se disputait aussi parfois bien sûr."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Tom",
    "whoFr": "Tom",
    "sentences": [
     {
      "en": "And what did your parents do for a living?",
      "fr": "Et qu'est-ce que tes parents faisaient comme métier ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Jean-Pierre",
    "whoFr": "Jean-Pierre",
    "sentences": [
     {
      "en": "My father was a school teacher and my mother did not work.",
      "fr": "Mon père était instituteur et ma mère ne travaillait pas."
     },
     {
      "en": "She had a lot to do at home with five children!",
      "fr": "Elle avait beaucoup de choses à faire à la maison avec cinq enfants !"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Tom",
    "whoFr": "Tom",
    "sentences": [
     {
      "en": "Did you go to school by car?",
      "fr": "Tu allais à l'école en voiture ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Jean-Pierre",
    "whoFr": "Jean-Pierre",
    "sentences": [
     {
      "en": "No!",
      "fr": "Non !"
     },
     {
      "en": "I walked to school!",
      "fr": "J'allais à l'école à pied !"
     },
     {
      "en": "It was very different at that time.",
      "fr": "C'était très différent à cette époque-là."
     },
     {
      "en": "There was only one class for the whole elementary school.",
      "fr": "Il n'y avait qu'une classe pour toute l'école primaire."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Tom",
    "whoFr": "Tom",
    "sentences": [
     {
      "en": "Was there?",
      "fr": "Ah oui ?"
     },
     {
      "en": "That's crazy!",
      "fr": "C'est fou !"
     },
     {
      "en": "And after school, you watched TV?",
      "fr": "Et après l'école, tu regardais la télé ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Jean-Pierre",
    "whoFr": "Jean-Pierre",
    "sentences": [
     {
      "en": "No!",
      "fr": "Non !"
     },
     {
      "en": "There was no TV at home!",
      "fr": "Il n'y avait pas de télé à la maison !"
     },
     {
      "en": "I would finish school around 4:30 and go out and play with some friends until dark.",
      "fr": "Je finissais l'école vers 16h30 et j'allais jouer dehors avec quelques amis jusqu'à la nuit."
     },
     {
      "en": "Then we would go home because we were scared!",
      "fr": "Après, on rentrait à la maison car on avait peur !"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Tom",
    "whoFr": "Tom",
    "sentences": [
     {
      "en": "And what did you do in the evening?",
      "fr": "Et le soir qu'est-ce que vous faisiez ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Jean-Pierre",
    "whoFr": "Jean-Pierre",
    "sentences": [
     {
      "en": "Every night we would have dinner together and then we would choose a story that Mom would read to us before bed.",
      "fr": "Tous les soirs, on dînait ensemble, puis on choisissait une histoire que maman nous lisait avant de dormir."
     }
    ]
   }
  ]
 },
 "lecon15": {
  "title": "Maxime tells about his departure for his trip",
  "titleFr": "Maxime raconte son départ en voyage",
  "lines": [
   {
    "kind": "scene",
    "sentences": [
     {
      "en": "Maxime tells about his departure for his trip.",
      "fr": "Maxime raconte son départ en voyage."
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "I got home late from work.",
      "fr": "Je suis rentré en retard du travail."
     },
     {
      "en": "I was finishing packing my bags when the taxi driver rang me.",
      "fr": "Je finissais de faire mes valises quand le chauffeur de taxi m'a appelé."
     },
     {
      "en": "He told me that he was waiting downstairs.",
      "fr": "Il m'a dit qu'il m'attendait en bas."
     },
     {
      "en": "I left the house at 4:30pm.",
      "fr": "Je suis sorti de la maison à 16h30."
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "We took the ring road to get onto the A1 freeway.",
      "fr": "Nous avons pris le périphérique pour rejoindre l'autoroute A1."
     },
     {
      "en": "It was raining and there were many traffic jams, so we took more than an hour to arrive at Roissy airport.",
      "fr": "Il pleuvait et il y avait beaucoup d'embouteillages donc nous avons mis plus d'une heure pour arriver à l'aéroport de Roissy."
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "I believed that I was leaving (taking off) from terminal 1 but in fact it was terminal 2.",
      "fr": "Je croyais que je décollais du terminal 1 mais en fait, c'était du terminal 2."
     },
     {
      "en": "So, I had to run across the whole airport to get to check-in on time!",
      "fr": "Donc j'ai dû courir dans tout l'aéroport pour arriver à temps à l'enregistrement !"
     },
     {
      "en": "The attendant told me I must hurry as there were a lot of people at (hand baggage control) security.",
      "fr": "L'hôtesse m'a dit que je devais me dépêcher car il y avait beaucoup de monde au contrôle des bagages à main."
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "I arrived at the gate just in time. The flight attendant was closing the door!",
      "fr": "Je suis arrivé à la porte d'embarquement juste à temps, l'hôtesse fermait la porte !"
     },
     {
      "en": "Happily, she saw me, and she let me board.",
      "fr": "Heureusement elle m'a vu et elle m'a laissé embarquer."
     },
     {
      "en": "I was lucky.",
      "fr": "J'ai eu de la chance !"
     }
    ]
   }
  ]
 },
 "lecon16": {
  "title": "After the bac exams",
  "titleFr": "Après les épreuves du bac",
  "lines": [
   {
    "kind": "scene",
    "sentences": [
     {
      "en": "Nathalie, a senior in high school, talks to her math teacher after her high school graduation exams.",
      "fr": "Nathalie, une élève de Terminale, discute avec son professeur de mathématiques après les épreuves du bac."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The teacher",
    "whoFr": "Le professeur",
    "sentences": [
     {
      "en": "So Nathalie, how did it go?",
      "fr": "Alors Nathalie, comment ça s'est passé ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Nathalie",
    "whoFr": "Nathalie",
    "sentences": [
     {
      "en": "I think it went well.",
      "fr": "Je crois que ça s'est bien passé."
     },
     {
      "en": "Your classes have been very helpful.",
      "fr": "Vos cours ont été très utiles."
     },
     {
      "en": "I did well on the math test.",
      "fr": "J'ai bien réussi l'épreuve de maths."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The teacher",
    "whoFr": "Le professeur",
    "sentences": [
     {
      "en": "Perfect!",
      "fr": "Parfait !"
     },
     {
      "en": "What about physics?",
      "fr": "Et la physique ?"
     },
     {
      "en": "Who was your teacher again?",
      "fr": "Qui était votre professeur déjà ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Nathalie",
    "whoFr": "Nathalie",
    "sentences": [
     {
      "en": "The physics test was more difficult.",
      "fr": "L'épreuve de physique était plus difficile."
     },
     {
      "en": "I had Mr. Rozand in physics, do you know him?",
      "fr": "J'avais M. Rozand en physique, vous le connaissez ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "The teacher",
    "whoFr": "Le professeur",
    "sentences": [
     {
      "en": "Yes, I know him very well.",
      "fr": "Oui je le connais très bien."
     },
     {
      "en": "I met him when we were in college!",
      "fr": "Je l'ai rencontré quand on était à la fac !"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Nathalie",
    "whoFr": "Nathalie",
    "sentences": [
     {
      "en": "So you know his daughter!",
      "fr": "Vous connaissez sa fille alors !"
     },
     {
      "en": "She was in my class this year.",
      "fr": "Elle était dans ma classe cette année."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The teacher",
    "whoFr": "Le professeur",
    "sentences": [
     {
      "en": "Yes, I've known her since she was born!",
      "fr": "Oui je la connais depuis qu'elle est née !"
     },
     {
      "en": "And how did you find the philosophy test?",
      "fr": "Et comment vous avez trouvé l'épreuve de philo ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Nathalie",
    "whoFr": "Nathalie",
    "sentences": [
     {
      "en": "I found it very difficult.",
      "fr": "Je l'ai trouvée très difficile."
     },
     {
      "en": "But that's because I suck at philosophy!",
      "fr": "Mais c'est parce que je suis nulle en philo !"
     },
     {
      "en": "And the same goes for English!",
      "fr": "Et pareil en anglais !"
     }
    ]
   },
   {
    "kind": "say",
    "who": "The teacher",
    "whoFr": "Le professeur",
    "sentences": [
     {
      "en": "Oh no!",
      "fr": "Mais non !"
     },
     {
      "en": "I'm sure it'll be fine!",
      "fr": "Je suis sûr que ça va aller !"
     },
     {
      "en": "And did you talk to Gautier and Cyril?",
      "fr": "Et vous avez parlé à Gautier et Cyril ?"
     },
     {
      "en": "I hope it went well for them...",
      "fr": "J'espère que ça s'est bien passé pour eux..."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Nathalie",
    "whoFr": "Nathalie",
    "sentences": [
     {
      "en": "Yes, I saw them yesterday.",
      "fr": "Oui je les ai vus hier."
     },
     {
      "en": "They were quite optimistic but they are a little bit worried for the oral exams in 2 weeks.",
      "fr": "Ils étaient plutôt optimistes mais ils ont un peu peur pour les épreuves orales dans 2 semaines."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The teacher",
    "whoFr": "Le professeur",
    "sentences": [
     {
      "en": "Well, I have to go.",
      "fr": "Bon je dois y aller."
     },
     {
      "en": "I'm keeping my fingers crossed for the results and I wish you a good vacation.",
      "fr": "Je croise les doigts pour les résultats et je vous souhaite de bonnes vacances."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Nathalie",
    "whoFr": "Nathalie",
    "sentences": [
     {
      "en": "Thank you very much sir.",
      "fr": "Merci beaucoup Monsieur."
     },
     {
      "en": "Have a good vacation too!",
      "fr": "Bonnes vacances à vous aussi !"
     }
    ]
   }
  ]
 },
 "lecon17": {
  "title": "What did you eat?",
  "titleFr": "Qu'est-ce que tu as mangé ?",
  "lines": [
   {
    "kind": "say",
    "who": "Melissa",
    "whoFr": "Melissa",
    "sentences": [
     {
      "en": "What did you eat for breakfast?",
      "fr": "Qu'est-ce que tu as mangé pour le petit-déj' ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Jessica",
    "whoFr": "Jessica",
    "sentences": [
     {
      "en": "Normally I eat sweet things for breakfast but I decided to start eating salty things.",
      "fr": "Normalement, je mange du sucré au petit-déjeuner mais j'ai décidé de commencer à manger du salé."
     },
     {
      "en": "So I made myself a slice of toast with avocado, lemon, a fried egg and a little bit of salt.",
      "fr": "Donc je me suis fait une tartine avec de l'avocat, du citron, un œuf sur le plat et un peu de sel."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Melissa",
    "whoFr": "Melissa",
    "sentences": [
     {
      "en": "Sounds delicious!",
      "fr": "Ça a l'air délicieux !"
     },
     {
      "en": "And what did you eat for lunch?",
      "fr": "Et qu'est-ce que tu as mangé pour le déjeuner ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Jessica",
    "whoFr": "Jessica",
    "sentences": [
     {
      "en": "For starters, I had tomatoes, cucumber and feta cheese.",
      "fr": "En entrée, j'ai mangé des tomates, du concombre et de la feta."
     },
     {
      "en": "For the main course I had rice, broccoli and meat that I bought at the butcher's.",
      "fr": "En plat principal, du riz, des brocolis et de la viande que j'ai achetée chez le boucher."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Melissa",
    "whoFr": "Melissa",
    "sentences": [
     {
      "en": "Ah ok, I loved meat but I've been a vegetarian for 2 years so I replace it with plant-based proteins.",
      "fr": "Ah ok, moi j'adorais la viande mais je suis végétarienne depuis 2 ans donc je la remplace par des protéines végétales."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Jessica",
    "whoFr": "Jessica",
    "sentences": [
     {
      "en": "Oh yes I understand but I love meat too much, I can't stop.",
      "fr": "Ah oui je comprends mais moi j'aime trop la viande, je n'arrive pas à arrêter."
     },
     {
      "en": "And I love fish too.",
      "fr": "Et j'adore le poisson aussi."
     },
     {
      "en": "Speaking about that, I ate fresh fish with pasta last night.",
      "fr": "D'ailleurs j'ai mangé du poisson frais avec des pâtes hier soir."
     },
     {
      "en": "It was delicious.",
      "fr": "C'était délicieux."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Melissa",
    "whoFr": "Melissa",
    "sentences": [
     {
      "en": "Very good.",
      "fr": "Très bien."
     },
     {
      "en": "And what did you have for dessert?",
      "fr": "Et qu'est-ce que tu as mangé en dessert ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Jessica",
    "whoFr": "Jessica",
    "sentences": [
     {
      "en": "For dessert, I just had some fruits, I wasn't really hungry anymore!",
      "fr": "En dessert, j'ai juste mangé des fruits, je n'avais plus vraiment faim !"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Melissa",
    "whoFr": "Melissa",
    "sentences": [
     {
      "en": "Yes, I guess so!",
      "fr": "Oui j'imagine !"
     },
     {
      "en": "And in general, what do you drink when eating?",
      "fr": "Et en général, qu'est-ce que tu bois à table ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Jessica",
    "whoFr": "Jessica",
    "sentences": [
     {
      "en": "I love wine, especially with cheese, but I really try to drink only water when eating.",
      "fr": "J'adore le vin, surtout avec le fromage, mais j'essaie vraiment de boire seulement de l'eau à table."
     },
     {
      "en": "Except in the morning when I have tea or coffee.",
      "fr": "Sauf le matin où je prends du thé ou du café."
     }
    ]
   }
  ]
 },
 "lecon18": {
  "title": "In front of the pharmacy",
  "titleFr": "Devant la pharmacie",
  "lines": [
   {
    "kind": "scene",
    "sentences": [
     {
      "en": "Two friends are talking about their health in front of the pharmacy.",
      "fr": "Deux amis discutent de leur santé devant la pharmacie."
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "How are you doing these days?",
      "fr": "Comment ça va en ce moment ?"
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "Not bad, but I need to exercise more.",
      "fr": "Pas mal, mais je dois faire plus de sport."
     },
     {
      "en": "I've already put on a little weight since Christmas.",
      "fr": "J'ai déjà pris un peu de poids depuis Noël."
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "You have?",
      "fr": "Ah bon ?"
     },
     {
      "en": "You've never had a weight problem before.",
      "fr": "Tu n'as jamais eu de problème de poids avant."
     },
     {
      "en": "What's changed?",
      "fr": "Qu'est-ce qui a changé ?"
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "Well, I work a lot and I don't have much time to go to the gym.",
      "fr": "Eh bien, je travaille beaucoup et je n'ai pas beaucoup de temps pour aller à la salle de sport."
     },
     {
      "en": "But I'm going to start a diet to lose those extra pounds.",
      "fr": "Mais je vais commencer à faire un régime pour perdre ces kilos en trop."
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "That's a good idea.",
      "fr": "C'est une bonne idée."
     },
     {
      "en": "I should do the same thing.",
      "fr": "Je devrais faire la même chose."
     },
     {
      "en": "But I haven't found the time to do it yet...",
      "fr": "Mais je n'ai pas encore trouvé le temps pour m'y mettre..."
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "And you, how is your health?",
      "fr": "Et toi sinon, comment va la santé ?"
     },
     {
      "en": "You seem to have a bit of a cold.",
      "fr": "Tu as l'air un peu enrhumé."
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "Actually, I've had a cold for two weeks now, I don't know what's going on, it's really annoying.",
      "fr": "En fait, je suis enrhumé depuis deux semaines, je ne sais pas ce qui se passe, c'est très chiant."
     },
     {
      "en": "Have you ever had this?",
      "fr": "Tu as déjà eu ça ?"
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "No, I've never had that...",
      "fr": "Non j'ai jamais eu ça..."
     },
     {
      "en": "Oh yes I have!",
      "fr": "Ah mais si !"
     },
     {
      "en": "Last year!",
      "fr": "L'année dernière !"
     },
     {
      "en": "But in the end it was a bronchitis and it went away quickly with the medicine.",
      "fr": "Mais au final c'était une bronchite et c'est passé vite avec les médicaments."
     },
     {
      "en": "Have you been to the doctor yet?",
      "fr": "Tu es déjà allé voir le médecin ?"
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "No, I haven't had time to make an appointment yet, I'm very busy.",
      "fr": "Non j'ai pas encore eu le temps de prendre rendez-vous, je suis débordé."
     },
     {
      "en": "But I'm going to do it now.",
      "fr": "Mais je vais le faire là."
     }
    ]
   }
  ]
 },
 "lecon19": {
  "title": "Two friends discuss a wish",
  "titleFr": "Deux amis discutent d'un vœu",
  "lines": [
   {
    "kind": "scene",
    "sentences": [
     {
      "en": "Two friends discuss what they would do if they could make a wish.",
      "fr": "Deux amis discutent de ce qu'ils feraient s'ils pouvaient faire un vœu."
     }
    ]
   },
   {
    "kind": "say",
    "who": "First friend",
    "whoFr": "Premier ami",
    "sentences": [
     {
      "en": "If a genius offered to make one of your dreams come true, what would you ask him?",
      "fr": "Si un génie te proposait de réaliser un de tes rêves, qu'est-ce que tu lui demanderais ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Second friend",
    "whoFr": "Deuxième ami",
    "sentences": [
     {
      "en": "Um...I think I'd just ask him for a lot of money!",
      "fr": "Hum... je crois que je lui demanderais beaucoup d'argent tout simplement !"
     }
    ]
   },
   {
    "kind": "say",
    "who": "First friend",
    "whoFr": "Premier ami",
    "sentences": [
     {
      "en": "Oh yes?",
      "fr": "Ah oui ?"
     },
     {
      "en": "Not very original!",
      "fr": "Pas très original !"
     },
     {
      "en": "And what would you do if you had a lot of money?",
      "fr": "Et qu'est-ce que tu ferais si tu avais beaucoup d'argent ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Second friend",
    "whoFr": "Deuxième ami",
    "sentences": [
     {
      "en": "If I had a lot of money, I would quit working, or I would work for a charity.",
      "fr": "Si j'avais beaucoup d'argent, j'arrêterais de travailler, ou je travaillerais pour une association caritative."
     },
     {
      "en": "That way, I would have more time to take care of my children.",
      "fr": "Comme ça, j'aurais plus de temps pour m'occuper de mes enfants."
     }
    ]
   },
   {
    "kind": "say",
    "who": "First friend",
    "whoFr": "Premier ami",
    "sentences": [
     {
      "en": "I see.",
      "fr": "Je vois."
     },
     {
      "en": "And what would you do together?",
      "fr": "Et qu'est-ce que vous feriez ensemble ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Second friend",
    "whoFr": "Deuxième ami",
    "sentences": [
     {
      "en": "I could pick them up from school at 4:30 p.m., and we'd have time to do some painting or things like that.",
      "fr": "Je pourrais aller les chercher à l'école à 16h30, et on aurait le temps pour faire de la peinture ou des choses comme ça."
     }
    ]
   },
   {
    "kind": "say",
    "who": "First friend",
    "whoFr": "Premier ami",
    "sentences": [
     {
      "en": "It's true that it would be cool, you would be less stressed and you could enjoy life more.",
      "fr": "C'est vrai que ce serait cool, tu serais moins stressé et tu pourrais profiter plus de la vie."
     }
    ]
   }
  ]
 },
 "lecon20": {
  "title": "Two couples discuss their travels",
  "titleFr": "Deux couples discutent de leurs voyages",
  "lines": [
   {
    "kind": "scene",
    "sentences": [
     {
      "en": "Two couples are discussing their travels.",
      "fr": "Deux couples discutent de leurs voyages."
     }
    ]
   },
   {
    "kind": "say",
    "who": "First couple",
    "whoFr": "Premier couple",
    "sentences": [
     {
      "en": "Have you ever been to Latin America?",
      "fr": "Vous êtes déjà allés en Amérique Latine ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Second couple",
    "whoFr": "Deuxième couple",
    "sentences": [
     {
      "en": "No, we've never been to Latin America.",
      "fr": "Non, on n'est jamais allés en Amérique Latine."
     },
     {
      "en": "However, we're very familiar with North America.",
      "fr": "Par contre, on connait bien l'Amérique du Nord."
     },
     {
      "en": "We go there almost every year.",
      "fr": "On y va presque tous les ans."
     },
     {
      "en": "This year, we went back to New York.",
      "fr": "Cette année, on est retourné à New York."
     },
     {
      "en": "Have you guys been there?",
      "fr": "Vous y êtes déjà allés ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "First couple",
    "whoFr": "Premier couple",
    "sentences": [
     {
      "en": "No, we've never been, but we'd love to explore the United States!",
      "fr": "Non, on n'y est jamais allés, mais on adorerait découvrir les États-Unis !"
     },
     {
      "en": "Have you ever been to Denver as well?",
      "fr": "Et vous avez déjà été à Denver aussi ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Second couple",
    "whoFr": "Deuxième couple",
    "sentences": [
     {
      "en": "I have been there, but not Karine.",
      "fr": "Moi, j'y ai déjà été, mais pas Karine."
     },
     {
      "en": "I really enjoyed it.",
      "fr": "J'ai beaucoup aimé."
     },
     {
      "en": "It's very close to the Rockies, and there are some fantastic hikes to do there.",
      "fr": "C'est tout près des Rocheuses, il y a de magnifiques randonnées à faire là-bas."
     },
     {
      "en": "How about you? Do you like traveling?",
      "fr": "Et vous, vous aimez voyager ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "First couple",
    "whoFr": "Premier couple",
    "sentences": [
     {
      "en": "Yes, we've always loved traveling!",
      "fr": "Oui, on a toujours adoré voyager !"
     },
     {
      "en": "We were supposed to go to Brazil last year, but we lost both our passports!",
      "fr": "On devait partir au Brésil l'année dernière mais on a perdu nos 2 passeports !"
     },
     {
      "en": "So, we're going this summer instead!",
      "fr": "Du coup, on y va cet été !"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Second couple",
    "whoFr": "Deuxième couple",
    "sentences": [
     {
      "en": "Awesome!",
      "fr": "Génial !"
     },
     {
      "en": "Have you already bought your tickets?",
      "fr": "Vous avez déjà acheté vos billets ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "First couple",
    "whoFr": "Premier couple",
    "sentences": [
     {
      "en": "No, we haven't bought our tickets yet.",
      "fr": "Non on n'a pas encore acheté nos billets."
     },
     {
      "en": "The last time I checked on the website, it was too expensive.",
      "fr": "La dernière fois que j'ai regardé sur le site, c'était trop cher."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Second couple",
    "whoFr": "Deuxième couple",
    "sentences": [
     {
      "en": "Ah, okay.",
      "fr": "Ah ok."
     },
     {
      "en": "If you want, I know a great site to buy cheap plane tickets.",
      "fr": "Si tu veux je connais un site super pour acheter des billets d'avion pas chers."
     },
     {
      "en": "It's called billetspaschers.com.",
      "fr": "Ça s'appelle billetspaschers.com."
     },
     {
      "en": "You should take a look.",
      "fr": "Tu devrais jeter un coup d'oeil."
     }
    ]
   },
   {
    "kind": "say",
    "who": "First couple",
    "whoFr": "Premier couple",
    "sentences": [
     {
      "en": "Wait, I didn't quite catch that. Can you repeat the name of the site, please?",
      "fr": "Attends je n'ai pas bien compris, tu peux répéter le nom du site s'il te plaît ?"
     },
     {
      "en": "How do you spell it?",
      "fr": "Comment ça s'écrit ?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Second couple",
    "whoFr": "Deuxième couple",
    "sentences": [
     {
      "en": "billetspaschers.com.",
      "fr": "billetspaschers.com."
     },
     {
      "en": "B-I-L-L-E-T-S-P-A-S-C-H-E-R-S dot com.",
      "fr": "B-I-L-L-E-T-S-P-A-S-C-H-E-R-S point com."
     }
    ]
   }
  ]
 }
};
