// Each Spanish lesson's text with the sheet's own English, sentence by
// sentence, for the Dialogues module (dialogues.js). Written by
// scripts/es-dialogues.mjs from the course's HTML sources; run it again if a
// lesson's text changes.
//
// A line is { kind, who, whoEs, sentences: [{ en, es }] }, its kind "say",
// "scene", "question" or "para". A sentence's place here is what its answers
// are kept under, so a sentence added or taken out moves the ones after it.

export const DIALOGUE_TEXTS = {
 "leccion1": {
  "title": "First Spanish class",
  "titleEs": "Primera clase de español",
  "lines": [
   {
    "kind": "say",
    "who": "Lucía",
    "whoEs": "Lucía",
    "sentences": [
     {
      "en": "Hello, my name is Lucía, I am your Spanish teacher.",
      "es": "Hola, me llamo Lucía, soy tu profesora de español."
     },
     {
      "en": "And you, what's your name?",
      "es": "Y tú, ¿cómo te llamas?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoEs": "James",
    "sentences": [
     {
      "en": "My name is James.",
      "es": "Me llamo James."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Lucía",
    "whoEs": "Lucía",
    "sentences": [
     {
      "en": "Where are you from?",
      "es": "¿De dónde eres?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoEs": "James",
    "sentences": [
     {
      "en": "I am American, from New York, but I have been living in Los Angeles for two years.",
      "es": "Soy estadounidense, de Nueva York, pero vivo en Los Ángeles desde hace dos años."
     },
     {
      "en": "And you?",
      "es": "¿Y tú?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Lucía",
    "whoEs": "Lucía",
    "sentences": [
     {
      "en": "I am Mexican, from Guadalajara, but I have been living in the United States for two months.",
      "es": "Soy mexicana, de Guadalajara, pero vivo en Estados Unidos desde hace dos meses."
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoEs": "James",
    "sentences": [
     {
      "en": "Very good.",
      "es": "Muy bien."
     },
     {
      "en": "Why are you in the United States?",
      "es": "¿Por qué estás en Estados Unidos?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Lucía",
    "whoEs": "Lucía",
    "sentences": [
     {
      "en": "I am here with my husband to learn English.",
      "es": "Estoy aquí con mi esposo para aprender inglés."
     },
     {
      "en": "And you, are you married?",
      "es": "Y tú, ¿estás casado?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoEs": "James",
    "sentences": [
     {
      "en": "Yes, I'm married.",
      "es": "Sí, estoy casado."
     },
     {
      "en": "My wife's name is Jessica.",
      "es": "Mi esposa se llama Jessica."
     },
     {
      "en": "We have been together for two years.",
      "es": "Estamos juntos desde hace dos años."
     }
    ]
   }
  ]
 },
 "leccion2": {
  "lines": [
   {
    "kind": "scene",
    "sentences": [
     {
      "en": "James is talking with a friend in a café.",
      "es": "James habla con un amigo en un café."
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoEs": "James",
    "sentences": [
     {
      "en": "Hi! How are you?",
      "es": "¡Hola! ¿Cómo estás?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Diego",
    "whoEs": "Diego",
    "sentences": [
     {
      "en": "I'm very good, thank you.",
      "es": "Estoy muy bien, gracias."
     },
     {
      "en": "And you, how's it going?",
      "es": "¿Y tú, qué tal?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoEs": "James",
    "sentences": [
     {
      "en": "Good! What are you going to do today?",
      "es": "¡Bien! ¿Qué vas a hacer hoy?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Diego",
    "whoEs": "Diego",
    "sentences": [
     {
      "en": "I'm going to go to the beach with my wife and my children.",
      "es": "Voy a ir a la playa con mi esposa y mis hijos."
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoEs": "James",
    "sentences": [
     {
      "en": "Great! How is your wife doing?",
      "es": "¡Qué bien! ¿Cómo está tu esposa?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Diego",
    "whoEs": "Diego",
    "sentences": [
     {
      "en": "Actually, she is very tired.",
      "es": "En realidad, está muy cansada."
     },
     {
      "en": "She works a lot.",
      "es": "Trabaja mucho."
     },
     {
      "en": "But my kids are doing very well.",
      "es": "Pero mis hijos están muy bien."
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoEs": "James",
    "sentences": [
     {
      "en": "Me too, I'm a little bit tired…",
      "es": "Yo también estoy un poco cansado…"
     },
     {
      "en": "And after the beach, what are you guys going to do?",
      "es": "Y después de la playa, ¿qué van a hacer?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Diego",
    "whoEs": "Diego",
    "sentences": [
     {
      "en": "I think that we're going to have dinner at a restaurant.",
      "es": "Creo que vamos a cenar en un restaurante."
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoEs": "James",
    "sentences": [
     {
      "en": "Very good.",
      "es": "Muy bien."
     },
     {
      "en": "See you soon!",
      "es": "¡Hasta pronto!"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Diego",
    "whoEs": "Diego",
    "sentences": [
     {
      "en": "Bye, see you soon!",
      "es": "Adiós, ¡hasta pronto!"
     }
    ]
   }
  ]
 },
 "leccion3": {
  "title": "At the bookstore",
  "titleEs": "En la librería",
  "lines": [
   {
    "kind": "say",
    "who": "Lucía",
    "whoEs": "Lucía",
    "sentences": [
     {
      "en": "Good morning.",
      "es": "Buenos días."
     },
     {
      "en": "I'm looking for a present for my dad.",
      "es": "Busco un regalo para mi papá."
     },
     {
      "en": "Do you have books about the history of Mexico?",
      "es": "¿Tienen libros sobre la historia de México?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "The sales assistant",
    "whoEs": "El vendedor",
    "sentences": [
     {
      "en": "Yes, we have a very beautiful book about the Mexican Revolution.",
      "es": "Sí, tenemos un libro muy bonito sobre la Revolución Mexicana."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Lucía",
    "whoEs": "Lucía",
    "sentences": [
     {
      "en": "Thank you very much.",
      "es": "Muchas gracias."
     },
     {
      "en": "And do you have something about Mexico City?",
      "es": "¿Y tienen algo sobre la Ciudad de México?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "The sales assistant",
    "whoEs": "El vendedor",
    "sentences": [
     {
      "en": "Yes, I have a new book about the Palacio de Bellas Artes.",
      "es": "Sí, tengo un libro nuevo sobre el Palacio de Bellas Artes."
     },
     {
      "en": "It's on that table over there.",
      "es": "Está en aquella mesa."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Lucía",
    "whoEs": "Lucía",
    "sentences": [
     {
      "en": "Very good.",
      "es": "Muy bien."
     },
     {
      "en": "I'm also looking for a present for my sister.",
      "es": "También busco un regalo para mi hermana."
     },
     {
      "en": "Do you have any ideas?",
      "es": "¿Tiene alguna idea?"
     },
     {
      "en": "She is seventeen years old.",
      "es": "Tiene diecisiete años."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The sales assistant",
    "whoEs": "El vendedor",
    "sentences": [
     {
      "en": "Yes, sure.",
      "es": "Sí, claro."
     },
     {
      "en": "Go to the second floor, they have discounts on the wireless earphones.",
      "es": "Vaya al segundo piso, tienen descuentos en los audífonos inalámbricos."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Lucía",
    "whoEs": "Lucía",
    "sentences": [
     {
      "en": "Thank you very much.",
      "es": "Muchas gracias."
     },
     {
      "en": "I'm going to take these two books and the earphones, please.",
      "es": "Voy a llevar estos dos libros y los audífonos, por favor."
     },
     {
      "en": "Have a nice day!",
      "es": "¡Que tenga un buen día!"
     }
    ]
   }
  ]
 },
 "leccion4": {
  "lines": [
   {
    "kind": "scene",
    "sentences": [
     {
      "en": "James is showing a picture of his family to Mateo, his Mexican friend.",
      "es": "James le enseña una foto de su familia a Mateo, su amigo mexicano."
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoEs": "James",
    "sentences": [
     {
      "en": "Look Mateo, this is my family!",
      "es": "Mira, Mateo, ¡esta es mi familia!"
     },
     {
      "en": "On the left is my dad and next to him is my mom.",
      "es": "A la izquierda está mi papá y al lado está mi mamá."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mateo",
    "whoEs": "Mateo",
    "sentences": [
     {
      "en": "Ah, okay.",
      "es": "Ah, ok."
     },
     {
      "en": "Where do your parents live?",
      "es": "¿Dónde viven tus papás?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoEs": "James",
    "sentences": [
     {
      "en": "My parents live in Montauk, near New York.",
      "es": "Mis papás viven en Montauk, cerca de Nueva York."
     },
     {
      "en": "They don't work, they are retired now.",
      "es": "No trabajan, ahora están jubilados."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mateo",
    "whoEs": "Mateo",
    "sentences": [
     {
      "en": "And what do they like to do?",
      "es": "¿Y qué les gusta hacer?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoEs": "James",
    "sentences": [
     {
      "en": "My mom likes to walk and my dad likes to ride a bike.",
      "es": "A mi mamá le gusta caminar y a mi papá le gusta andar en bicicleta."
     },
     {
      "en": "And they often watch TV together.",
      "es": "Y muchas veces ven la tele juntos."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mateo",
    "whoEs": "Mateo",
    "sentences": [
     {
      "en": "I see!",
      "es": "¡Ya veo!"
     },
     {
      "en": "And the one on the right, is that your brother?",
      "es": "¿Y el de la derecha es tu hermano?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoEs": "James",
    "sentences": [
     {
      "en": "Yes, it's my brother John with his wife and his two kids.",
      "es": "Sí, es mi hermano John con su esposa y sus dos hijos."
     },
     {
      "en": "The girl's name is Emma and the boy's name is Lucas.",
      "es": "La niña se llama Emma y el niño se llama Lucas."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mateo",
    "whoEs": "Mateo",
    "sentences": [
     {
      "en": "Great! And what's your brother's wife's name?",
      "es": "¡Qué bien! ¿Y cómo se llama la esposa de tu hermano?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoEs": "James",
    "sentences": [
     {
      "en": "Her name is Natalie.",
      "es": "Se llama Natalie."
     },
     {
      "en": "She is very nice.",
      "es": "Es muy simpática."
     },
     {
      "en": "She is thirty-five years old and she is a nurse.",
      "es": "Tiene treinta y cinco años y es enfermera."
     },
     {
      "en": "She loves to surf and to invite the whole family over for a barbecue.",
      "es": "Le encanta surfear e invitar a toda la familia a comer carne asada."
     }
    ]
   }
  ]
 },
 "leccion5": {
  "lines": [
   {
    "kind": "scene",
    "sentences": [
     {
      "en": "Mike is an American tourist in Mexico City.",
      "es": "Mike es un turista estadounidense en la Ciudad de México."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mike",
    "whoEs": "Mike",
    "sentences": [
     {
      "en": "Excuse me, sir, I'm lost.",
      "es": "Disculpe, señor, estoy perdido."
     },
     {
      "en": "Can you help me, please?",
      "es": "¿Me puede ayudar, por favor?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "A man",
    "whoEs": "Un señor",
    "sentences": [
     {
      "en": "I don't live in Mexico City, but I can try!",
      "es": "No vivo en la Ciudad de México, pero ¡puedo intentarlo!"
     },
     {
      "en": "Where do you want to go?",
      "es": "¿Adónde quiere ir?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mike",
    "whoEs": "Mike",
    "sentences": [
     {
      "en": "I want to go to the Metropolitan Cathedral.",
      "es": "Quiero ir a la Catedral Metropolitana."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The man",
    "whoEs": "El señor",
    "sentences": [
     {
      "en": "I'm sorry, I don't know where it is.",
      "es": "Lo siento, no sé dónde está."
     },
     {
      "en": "I think you can ask the lady at the newspaper stand.",
      "es": "Creo que puede preguntarle a la señora del puesto de periódicos."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mike",
    "whoEs": "Mike",
    "sentences": [
     {
      "en": "That's a good idea.",
      "es": "Es una buena idea."
     },
     {
      "en": "Thank you and have a nice day.",
      "es": "Gracias y que tenga un buen día."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mike",
    "whoEs": "Mike",
    "sentences": [
     {
      "en": "Good morning, ma'am.",
      "es": "Buenos días, señora."
     },
     {
      "en": "I'm looking for the Metropolitan Cathedral.",
      "es": "Busco la Catedral Metropolitana."
     },
     {
      "en": "Can you help me?",
      "es": "¿Me puede ayudar?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "The lady",
    "whoEs": "La señora",
    "sentences": [
     {
      "en": "Yes, of course!",
      "es": "¡Sí, claro!"
     },
     {
      "en": "Look, over there, there's a metro station, Hidalgo station.",
      "es": "Mire, allá hay una estación de metro, la estación Hidalgo."
     },
     {
      "en": "You take line 2, you get off at Zócalo and you're going to see the cathedral.",
      "es": "Usted toma la línea 2, se baja en Zócalo y va a ver la catedral."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mike",
    "whoEs": "Mike",
    "sentences": [
     {
      "en": "Excuse me, I don't speak Spanish very well.",
      "es": "Disculpe, no hablo muy bien español."
     },
     {
      "en": "Can you repeat more slowly, please?",
      "es": "¿Puede repetir más despacio, por favor?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "The lady",
    "whoEs": "La señora",
    "sentences": [
     {
      "en": "Yes, of course: you take the metro, line 2, and you get off at Zócalo.",
      "es": "Sí, claro: toma el metro, línea 2, y se baja en Zócalo."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mike",
    "whoEs": "Mike",
    "sentences": [
     {
      "en": "I don't like the metro.",
      "es": "No me gusta el metro."
     },
     {
      "en": "I prefer to walk.",
      "es": "Prefiero caminar."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The lady",
    "whoEs": "La señora",
    "sentences": [
     {
      "en": "Ah, okay.",
      "es": "Ah, bueno."
     },
     {
      "en": "Then here's a map of the city.",
      "es": "Entonces aquí tiene un mapa de la ciudad."
     },
     {
      "en": "Good luck!",
      "es": "¡Buena suerte!"
     }
    ]
   }
  ]
 },
 "leccion6": {
  "lines": [
   {
    "kind": "scene",
    "sentences": [
     {
      "en": "James and Mateo, his Mexican friend, are making plans for the weekend.",
      "es": "James y Mateo, su amigo mexicano, hacen planes para el fin de semana."
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoEs": "James",
    "sentences": [
     {
      "en": "Mateo, what are you going to do on Saturday?",
      "es": "Mateo, ¿qué vas a hacer el sábado?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mateo",
    "whoEs": "Mateo",
    "sentences": [
     {
      "en": "I don't know.",
      "es": "No sé."
     },
     {
      "en": "What do you like to do on weekends?",
      "es": "¿Qué te gusta hacer los fines de semana?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoEs": "James",
    "sentences": [
     {
      "en": "I really like riding a bike.",
      "es": "Me gusta mucho andar en bicicleta."
     },
     {
      "en": "On Saturdays, Jessica and I go to the park.",
      "es": "Los sábados, Jessica y yo vamos al parque."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mateo",
    "whoEs": "Mateo",
    "sentences": [
     {
      "en": "I like riding a bike too!",
      "es": "¡A mí también me gusta andar en bicicleta!"
     },
     {
      "en": "Shall we go together?",
      "es": "¿Vamos juntos?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoEs": "James",
    "sentences": [
     {
      "en": "Sure! And afterwards we can eat something.",
      "es": "¡Claro! Y después podemos comer algo."
     },
     {
      "en": "Do you like tacos?",
      "es": "¿Te gustan los tacos?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mateo",
    "whoEs": "Mateo",
    "sentences": [
     {
      "en": "I love them!",
      "es": "¡Me encantan!"
     },
     {
      "en": "But I don't like very spicy food.",
      "es": "Pero no me gusta la comida muy picante."
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoEs": "James",
    "sentences": [
     {
      "en": "Me neither.",
      "es": "A mí tampoco."
     },
     {
      "en": "And Jessica doesn't like chili at all.",
      "es": "Y a Jessica no le gusta nada el chile."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mateo",
    "whoEs": "Mateo",
    "sentences": [
     {
      "en": "And on Sunday?",
      "es": "¿Y el domingo?"
     },
     {
      "en": "My wife and I love going to the market.",
      "es": "A mi esposa y a mí nos encanta ir al mercado."
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoEs": "James",
    "sentences": [
     {
      "en": "We don't really like markets… there are a lot of people.",
      "es": "A nosotros no nos gustan mucho los mercados… hay mucha gente."
     },
     {
      "en": "But we like the movies.",
      "es": "Pero nos gusta el cine."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mateo",
    "whoEs": "Mateo",
    "sentences": [
     {
      "en": "Me too!",
      "es": "¡A mí también!"
     },
     {
      "en": "So, on Saturday, bikes and tacos, and on Sunday, the movies.",
      "es": "Entonces, el sábado, bicicleta y tacos, y el domingo, cine."
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoEs": "James",
    "sentences": [
     {
      "en": "Perfect! See you on Saturday.",
      "es": "¡Perfecto! Hasta el sábado."
     }
    ]
   }
  ]
 },
 "leccion7-1": {
  "title": "Andrés",
  "titleEs": "Andrés",
  "lines": [
   {
    "kind": "para",
    "sentences": [
     {
      "en": "Age: 28",
      "es": "Edad: 28 años"
     },
     {
      "en": "City: Mexico City",
      "es": "Ciudad: Ciudad de México"
     },
     {
      "en": "Job: journalist",
      "es": "Profesión: periodista"
     }
    ]
   },
   {
    "kind": "question",
    "sentences": [
     {
      "en": "What does he look like?",
      "es": "¿Cómo es físicamente?"
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "He has brown hair and brown eyes.",
      "es": "Tiene el pelo castaño y los ojos cafés."
     },
     {
      "en": "He is tall.",
      "es": "Es alto."
     },
     {
      "en": "In the picture, he is wearing a blue shirt.",
      "es": "En la foto, lleva una camisa azul."
     }
    ]
   },
   {
    "kind": "question",
    "sentences": [
     {
      "en": "What is his personality like?",
      "es": "¿Cómo es su carácter?"
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "He is very nice and he loves to laugh.",
      "es": "Es muy simpático y le encanta reír."
     },
     {
      "en": "He is always in a good mood.",
      "es": "Siempre está de buen humor."
     },
     {
      "en": "He is sociable and generous.",
      "es": "Es sociable y generoso."
     },
     {
      "en": "He has a lot of friends and he is always ready to help them.",
      "es": "Tiene muchos amigos y siempre está listo para ayudarlos."
     }
    ]
   },
   {
    "kind": "question",
    "sentences": [
     {
      "en": "What does he do for a living?",
      "es": "¿A qué se dedica?"
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "He is a journalist at a TV channel.",
      "es": "Es periodista en un canal de televisión."
     },
     {
      "en": "He travels a lot around the world for his work.",
      "es": "Viaja mucho por el mundo por su trabajo."
     },
     {
      "en": "He makes cultural documentaries.",
      "es": "Hace documentales culturales."
     }
    ]
   },
   {
    "kind": "question",
    "sentences": [
     {
      "en": "What does he like to do?",
      "es": "¿Qué le gusta hacer?"
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "He loves to travel, to discover new countries, to learn new things, to do sports, to spend time with his friends and to make jokes.",
      "es": "Le encanta viajar, conocer nuevos países, aprender cosas nuevas, hacer deporte, pasar tiempo con sus amigos y hacer bromas."
     }
    ]
   },
   {
    "kind": "question",
    "sentences": [
     {
      "en": "What doesn't he like?",
      "es": "¿Qué no le gusta?"
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "He doesn't like the cold and he doesn't like vegetables.",
      "es": "No le gusta el frío y no le gustan las verduras."
     },
     {
      "en": "And he doesn't like selfish people!",
      "es": "¡Y no le gusta la gente egoísta!"
     }
    ]
   }
  ]
 },
 "leccion7-2": {
  "title": "Valeria",
  "titleEs": "Valeria",
  "lines": [
   {
    "kind": "para",
    "sentences": [
     {
      "en": "Age: 45",
      "es": "Edad: 45 años"
     },
     {
      "en": "City: Monterrey",
      "es": "Ciudad: Monterrey"
     },
     {
      "en": "Job: doctor",
      "es": "Profesión: médica"
     }
    ]
   },
   {
    "kind": "question",
    "sentences": [
     {
      "en": "What does she look like?",
      "es": "¿Cómo es físicamente?"
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "She is blond and she has blue eyes.",
      "es": "Es rubia y tiene los ojos azules."
     },
     {
      "en": "She is 1.65 m tall.",
      "es": "Mide un metro sesenta y cinco."
     },
     {
      "en": "In the picture, she is wearing a white coat.",
      "es": "En la foto, lleva una bata blanca."
     }
    ]
   },
   {
    "kind": "question",
    "sentences": [
     {
      "en": "What is her personality like?",
      "es": "¿Cómo es su carácter?"
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "She is kind, very sweet and also a little shy.",
      "es": "Es amable, muy dulce y también un poco tímida."
     },
     {
      "en": "She is very smart and hard-working.",
      "es": "Es muy inteligente y trabajadora."
     }
    ]
   },
   {
    "kind": "question",
    "sentences": [
     {
      "en": "What does she do for a living?",
      "es": "¿A qué se dedica?"
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "She is a doctor.",
      "es": "Es médica."
     },
     {
      "en": "She works on Mondays and Tuesdays at the hospital, and the other days in her office.",
      "es": "Trabaja los lunes y los martes en el hospital, y los otros días en su consultorio."
     },
     {
      "en": "She loves her job and she loves her patients.",
      "es": "Le encanta su trabajo y le encantan sus pacientes."
     }
    ]
   },
   {
    "kind": "question",
    "sentences": [
     {
      "en": "What does she like to do?",
      "es": "¿Qué le gusta hacer?"
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "She likes to spend time with her husband and her three children.",
      "es": "Le gusta pasar tiempo con su esposo y sus tres hijos."
     },
     {
      "en": "When she doesn't work, she likes to stay at home to read or to cook a good meal for the whole family.",
      "es": "Cuando no trabaja, le gusta quedarse en casa para leer o para cocinar una buena comida para toda la familia."
     }
    ]
   },
   {
    "kind": "question",
    "sentences": [
     {
      "en": "What doesn't she like?",
      "es": "¿Qué no le gusta?"
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "She doesn't like doing sports, it's very tiring!",
      "es": "No le gusta hacer deporte, ¡es muy cansado!"
     }
    ]
   }
  ]
 },
 "leccion7-3": {
  "title": "Don Rafael",
  "titleEs": "Don Rafael",
  "lines": [
   {
    "kind": "para",
    "sentences": [
     {
      "en": "Age: 67",
      "es": "Edad: 67 años"
     },
     {
      "en": "City: Puebla",
      "es": "Ciudad: Puebla"
     },
     {
      "en": "Job: retired",
      "es": "Profesión: jubilado"
     }
    ]
   },
   {
    "kind": "question",
    "sentences": [
     {
      "en": "What does he look like?",
      "es": "¿Cómo es físicamente?"
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "He has white hair and blue eyes.",
      "es": "Tiene el pelo blanco y los ojos azules."
     },
     {
      "en": "In the picture, he is wearing glasses and a green shirt.",
      "es": "En la foto, lleva lentes y una camisa verde."
     },
     {
      "en": "Sometimes, he likes to wear pink pants and shoes.",
      "es": "A veces, le gusta llevar pantalones y zapatos rosas."
     }
    ]
   },
   {
    "kind": "question",
    "sentences": [
     {
      "en": "What is his personality like?",
      "es": "¿Cómo es su carácter?"
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "Most of the time, he is very funny and he loves to make jokes, but his mood also changes a lot.",
      "es": "Casi siempre es muy divertido y le encanta hacer bromas, pero también cambia mucho de humor."
     },
     {
      "en": "When he is in a bad mood, he prefers to be alone.",
      "es": "Cuando está de mal humor, prefiere estar solo."
     }
    ]
   },
   {
    "kind": "question",
    "sentences": [
     {
      "en": "What does he do for a living?",
      "es": "¿A qué se dedica?"
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "Don Rafael is retired, so he has a lot of free time, but he is a very active grandfather.",
      "es": "Don Rafael está jubilado, entonces tiene mucho tiempo libre, pero es un abuelo muy activo."
     },
     {
      "en": "He has six grandchildren.",
      "es": "Tiene seis nietos."
     }
    ]
   },
   {
    "kind": "question",
    "sentences": [
     {
      "en": "What does he like to do?",
      "es": "¿Qué le gusta hacer?"
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "He likes to fix things around the house, to work in the garden and to take care of his grandchildren.",
      "es": "Le gusta arreglar cosas en la casa, trabajar en el jardín y cuidar a sus nietos."
     }
    ]
   },
   {
    "kind": "question",
    "sentences": [
     {
      "en": "What doesn't he like?",
      "es": "¿Qué no le gusta?"
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "He doesn't like politics and he doesn't like doing the housework.",
      "es": "No le gusta la política y no le gusta hacer los quehaceres de la casa."
     }
    ]
   }
  ]
 },
 "leccion8": {
  "title": "Andrés's day",
  "titleEs": "El día de Andrés",
  "lines": [
   {
    "kind": "say",
    "who": "Valeria",
    "whoEs": "Valeria",
    "sentences": [
     {
      "en": "Did you have a good day yesterday?",
      "es": "¿Pasaste un buen día ayer?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Andrés",
    "whoEs": "Andrés",
    "sentences": [
     {
      "en": "Yes, yesterday I had a very good day.",
      "es": "Sí, ayer pasé un día muy bueno."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Valeria",
    "whoEs": "Valeria",
    "sentences": [
     {
      "en": "What did you do yesterday morning?",
      "es": "¿Qué hiciste ayer en la mañana?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Andrés",
    "whoEs": "Andrés",
    "sentences": [
     {
      "en": "In the morning, I got up at seven, I had breakfast and I listened to the radio.",
      "es": "En la mañana, me levanté a las siete, desayuné y escuché la radio."
     },
     {
      "en": "After that, I took a shower and I went to work.",
      "es": "Después, me bañé y fui al trabajo."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Valeria",
    "whoEs": "Valeria",
    "sentences": [
     {
      "en": "What did you do at noon?",
      "es": "¿Qué hiciste al mediodía?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Andrés",
    "whoEs": "Andrés",
    "sentences": [
     {
      "en": "At noon, I had lunch with some coworkers at a restaurant near work.",
      "es": "Al mediodía, comí con unos compañeros en un restaurante cerca del trabajo."
     },
     {
      "en": "I ate a very good pizza and then we went back to work.",
      "es": "Comí una pizza muy buena y después regresamos a trabajar."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Valeria",
    "whoEs": "Valeria",
    "sentences": [
     {
      "en": "And in the afternoon?",
      "es": "¿Y en la tarde?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Andrés",
    "whoEs": "Andrés",
    "sentences": [
     {
      "en": "In the afternoon, I had a meeting with my boss.",
      "es": "En la tarde, tuve una reunión con mi jefe."
     },
     {
      "en": "I left work at six.",
      "es": "Salí del trabajo a las seis."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Valeria",
    "whoEs": "Valeria",
    "sentences": [
     {
      "en": "What did you do last night?",
      "es": "¿Qué hiciste ayer en la noche?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Andrés",
    "whoEs": "Andrés",
    "sentences": [
     {
      "en": "In the evening, I went to the gym and then I came back home.",
      "es": "En la noche, fui al gimnasio y después regresé a casa."
     },
     {
      "en": "I cooked with my wife and we had dinner together.",
      "es": "Cociné con mi esposa y cenamos juntos."
     },
     {
      "en": "Then we watched TV and at eleven we went to bed.",
      "es": "Después vimos la tele y a las once nos acostamos."
     }
    ]
   }
  ]
 },
 "leccion9": {
  "lines": [
   {
    "kind": "scene",
    "sentences": [
     {
      "en": "Andrés interviews Mark and Sarah for a TV program.",
      "es": "Andrés entrevista a Mark y a Sarah para un programa de televisión."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Andrés",
    "whoEs": "Andrés",
    "sentences": [
     {
      "en": "Mark and Sarah, you are American and you speak Spanish fluently.",
      "es": "Mark y Sarah, ustedes son estadounidenses y hablan español con fluidez."
     },
     {
      "en": "Why did you start learning?",
      "es": "¿Por qué empezaron a aprender?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mark",
    "whoEs": "Mark",
    "sentences": [
     {
      "en": "We went on vacation to Mexico in 2012 and we loved the country and the culture.",
      "es": "Fuimos de vacaciones a México en 2012 y nos encantó el país y la cultura."
     },
     {
      "en": "So, when we got back to Los Angeles, we decided to learn the language.",
      "es": "Entonces, cuando regresamos a Los Ángeles, decidimos aprender el idioma."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Andrés",
    "whoEs": "Andrés",
    "sentences": [
     {
      "en": "And how did you do it?",
      "es": "¿Y cómo lo hicieron?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mark",
    "whoEs": "Mark",
    "sentences": [
     {
      "en": "We found a tutor in Los Angeles and we started taking classes twice a week.",
      "es": "Encontramos un profesor particular en Los Ángeles y empezamos a tomar clases dos veces por semana."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Andrés",
    "whoEs": "Andrés",
    "sentences": [
     {
      "en": "Was it difficult?",
      "es": "¿Fue difícil?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Sarah",
    "whoEs": "Sarah",
    "sentences": [
     {
      "en": "In the beginning it was a little difficult, but over time it got easier.",
      "es": "Al principio fue un poco difícil, pero con el tiempo fue más fácil."
     },
     {
      "en": "But we worked hard to reach this level!",
      "es": "¡Pero trabajamos mucho para llegar a este nivel!"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Andrés",
    "whoEs": "Andrés",
    "sentences": [
     {
      "en": "And did you go back to Mexico afterwards?",
      "es": "¿Y después volvieron a México?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Sarah",
    "whoEs": "Sarah",
    "sentences": [
     {
      "en": "Yes, many times!",
      "es": "¡Sí, muchas veces!"
     },
     {
      "en": "The first time we went back, in 2015, it was difficult, but we were able to communicate a little.",
      "es": "La primera vez que regresamos, en 2015, fue difícil, pero pudimos comunicarnos un poco."
     },
     {
      "en": "This time we came with our children and we spent two weeks in Oaxaca.",
      "es": "Esta vez vinimos con nuestros hijos y estuvimos dos semanas en Oaxaca."
     },
     {
      "en": "And now everything is very easy!",
      "es": "¡Y ahora todo es muy fácil!"
     },
     {
      "en": "It's great to see the progress.",
      "es": "Es genial ver el progreso."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Andrés",
    "whoEs": "Andrés",
    "sentences": [
     {
      "en": "That's impressive! Congratulations!",
      "es": "¡Es impresionante! ¡Felicidades!"
     }
    ]
   }
  ]
 },
 "leccion10": {
  "lines": [
   {
    "kind": "scene",
    "sentences": [
     {
      "en": "Emilia tells Matt, her Australian friend, about her summer vacation.",
      "es": "Emilia le cuenta sus vacaciones de verano a Matt, su amigo australiano."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Matt",
    "whoEs": "Matt",
    "sentences": [
     {
      "en": "Hey, Emilia, what did you do in July? Did you work?",
      "es": "Oye, Emilia, ¿qué hiciste en julio? ¿Trabajaste?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Emilia",
    "whoEs": "Emilia",
    "sentences": [
     {
      "en": "No, I didn't work.",
      "es": "No, no trabajé."
     },
     {
      "en": "This year we went to Oaxaca.",
      "es": "Este año fuimos a Oaxaca."
     },
     {
      "en": "It's a state in the south of Mexico.",
      "es": "Es un estado en el sur de México."
     },
     {
      "en": "It has wonderful beaches, like in Australia!",
      "es": "Tiene playas maravillosas, ¡como en Australia!"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Matt",
    "whoEs": "Matt",
    "sentences": [
     {
      "en": "Really? Is it pretty?",
      "es": "¿De verdad? ¿Es bonito?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Emilia",
    "whoEs": "Emilia",
    "sentences": [
     {
      "en": "Yes, it's an amazing place.",
      "es": "Sí, es un lugar increíble."
     },
     {
      "en": "It usually rains a lot in summer, but this year we were lucky: the weather was very nice.",
      "es": "Normalmente llueve mucho en verano, pero este año tuvimos suerte: hizo muy buen tiempo."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Matt",
    "whoEs": "Matt",
    "sentences": [
     {
      "en": "Did you visit the city of Oaxaca?",
      "es": "¿Visitaron la ciudad de Oaxaca?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Emilia",
    "whoEs": "Emilia",
    "sentences": [
     {
      "en": "No, we didn't visit the city, Hugo didn't want to.",
      "es": "No, no visitamos la ciudad, Hugo no quiso."
     },
     {
      "en": "But we walked on the beach and in the countryside.",
      "es": "Pero caminamos por la playa y por el campo."
     },
     {
      "en": "We also saw some very pretty villages.",
      "es": "También vimos unos pueblos muy bonitos."
     },
     {
      "en": "And we visited some friends!",
      "es": "¡Y visitamos a unos amigos!"
     },
     {
      "en": "My parents also came with us for a week.",
      "es": "Mis papás también vinieron con nosotros una semana."
     },
     {
      "en": "It was great.",
      "es": "Fue genial."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Matt",
    "whoEs": "Matt",
    "sentences": [
     {
      "en": "You didn't stop!",
      "es": "¡No pararon!"
     },
     {
      "en": "Did you drive there?",
      "es": "¿Fueron en carro?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Emilia",
    "whoEs": "Emilia",
    "sentences": [
     {
      "en": "Yes, it's more practical.",
      "es": "Sí, es más práctico."
     },
     {
      "en": "And Hugo loves to drive!",
      "es": "¡Y a Hugo le encanta manejar!"
     },
     {
      "en": "What about you?",
      "es": "¿Y tú?"
     },
     {
      "en": "Did you go on vacation this summer?",
      "es": "¿Saliste de vacaciones este verano?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Matt",
    "whoEs": "Matt",
    "sentences": [
     {
      "en": "No, I didn't go on vacation because I couldn't take my days off.",
      "es": "No, no salí de vacaciones porque no pude tomar mis días libres."
     },
     {
      "en": "My boss didn't want me to!",
      "es": "¡Mi jefe no quiso!"
     }
    ]
   }
  ]
 },
 "leccion11": {
  "lines": [
   {
    "kind": "scene",
    "sentences": [
     {
      "en": "The doctor is talking with her secretary, Martín, before starting the working day.",
      "es": "La doctora habla con su secretario, Martín, antes de empezar el día de trabajo."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The doctor",
    "whoEs": "La doctora",
    "sentences": [
     {
      "en": "Good morning, Martín.",
      "es": "Buenos días, Martín."
     },
     {
      "en": "What are you doing?",
      "es": "¿Qué estás haciendo?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Martín",
    "whoEs": "Martín",
    "sentences": [
     {
      "en": "Good morning, doctor.",
      "es": "Buenos días, doctora."
     },
     {
      "en": "I'm reading the patients' emails.",
      "es": "Estoy leyendo los correos de los pacientes."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The doctor",
    "whoEs": "La doctora",
    "sentences": [
     {
      "en": "Very good.",
      "es": "Muy bien."
     },
     {
      "en": "Hey, did you send an email to Mrs. Duarte, like I told you yesterday?",
      "es": "Oye, ¿le mandaste un correo a la señora Duarte, como te dije ayer?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Martín",
    "whoEs": "Martín",
    "sentences": [
     {
      "en": "Yes, I sent her an email, but she didn't answer me.",
      "es": "Sí, le mandé un correo, pero no me contestó."
     },
     {
      "en": "So I phoned her.",
      "es": "Entonces le hablé por teléfono."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The doctor",
    "whoEs": "La doctora",
    "sentences": [
     {
      "en": "Perfect. And did you remind Mr. and Mrs. Ramírez about the insurance card?",
      "es": "Perfecto. ¿Y les recordaste a los señores Ramírez la credencial del seguro?"
     },
     {
      "en": "They always forget something!",
      "es": "¡Siempre olvidan algo!"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Martín",
    "whoEs": "Martín",
    "sentences": [
     {
      "en": "Yes, I sent them a message yesterday.",
      "es": "Sí, les mandé un mensaje ayer."
     },
     {
      "en": "I told them that they have to bring the card.",
      "es": "Les dije que tienen que traer la credencial."
     },
     {
      "en": "I think this time they're not going to forget anything.",
      "es": "Creo que esta vez no van a olvidar nada."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The doctor",
    "whoEs": "La doctora",
    "sentences": [
     {
      "en": "Okay. And another thing: yesterday I told you that you have to update the files.",
      "es": "Bueno. Y otra cosa: ayer te dije que tienes que actualizar los expedientes."
     },
     {
      "en": "Are you done?",
      "es": "¿Ya terminaste?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Martín",
    "whoEs": "Martín",
    "sentences": [
     {
      "en": "No, not yet, I didn't have time.",
      "es": "No, todavía no, no tuve tiempo."
     },
     {
      "en": "But wait… did you give me those files?",
      "es": "Pero espere… ¿usted me dio esos expedientes?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "The doctor",
    "whoEs": "La doctora",
    "sentences": [
     {
      "en": "Well, yes!",
      "es": "¡Pues sí!"
     },
     {
      "en": "I gave you all the files last week.",
      "es": "Te di todos los expedientes la semana pasada."
     },
     {
      "en": "I think they're on your desk.",
      "es": "Creo que están en tu escritorio."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Martín",
    "whoEs": "Martín",
    "sentences": [
     {
      "en": "Oh, yes, yes, that's true, you're right.",
      "es": "Ah, sí, sí, es cierto, tiene razón."
     },
     {
      "en": "I'll start right now and I'll let you know afterwards.",
      "es": "Empiezo ahorita y después le digo."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The doctor",
    "whoEs": "La doctora",
    "sentences": [
     {
      "en": "Deal! Hang in there!",
      "es": "¡Sale! ¡Ánimo!"
     }
    ]
   }
  ]
 },
 "leccion12-1": {
  "lines": [
   {
    "kind": "scene",
    "sentences": [
     {
      "en": "Paola has trouble sleeping.",
      "es": "Paola tiene problemas para dormir."
     },
     {
      "en": "She talks to her friend about it.",
      "es": "Habla de eso con su amiga."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Paola",
    "whoEs": "Paola",
    "sentences": [
     {
      "en": "I'm sleeping very badly these days.",
      "es": "Duermo muy mal estos días."
     },
     {
      "en": "I don't know what's wrong with me…",
      "es": "No sé qué me pasa…"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Her friend",
    "whoEs": "Su amiga",
    "sentences": [
     {
      "en": "Oh, that's too bad…",
      "es": "Ay, qué mal…"
     },
     {
      "en": "But let's see, what time do you go to bed?",
      "es": "Pero a ver, ¿a qué hora te acuestas?"
     },
     {
      "en": "Very late?",
      "es": "¿Muy tarde?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Paola",
    "whoEs": "Paola",
    "sentences": [
     {
      "en": "No, I usually go to bed around eleven and I fall asleep quickly, no problem.",
      "es": "No, normalmente me acuesto como a las once y me duermo rápido, sin problema."
     },
     {
      "en": "The thing is, I wake up during the night and I go back to sleep several hours later.",
      "es": "Lo que pasa es que me despierto en la noche y me vuelvo a dormir varias horas después."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Her friend",
    "whoEs": "Su amiga",
    "sentences": [
     {
      "en": "I see.",
      "es": "Ya veo."
     },
     {
      "en": "And what do you do when you wake up during the night?",
      "es": "¿Y qué haces cuando te despiertas en la noche?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Paola",
    "whoEs": "Paola",
    "sentences": [
     {
      "en": "I try to stay in bed, but sometimes I get up because I get really bored.",
      "es": "Trato de quedarme en la cama, pero a veces me levanto porque me aburro mucho."
     },
     {
      "en": "I turn on my phone and look at Instagram.",
      "es": "Prendo el celular y veo Instagram."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Her friend",
    "whoEs": "Su amiga",
    "sentences": [
     {
      "en": "Ugh, that's not great…",
      "es": "Uy, eso no está muy bien…"
     },
     {
      "en": "And what time do you get up?",
      "es": "¿Y a qué hora te levantas?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Paola",
    "whoEs": "Paola",
    "sentences": [
     {
      "en": "If my husband is working, I wake up very early, at six, because his alarm goes off.",
      "es": "Si mi esposo trabaja, me despierto muy temprano, a las seis, porque suena su despertador."
     },
     {
      "en": "I stay in bed for a while and I get up around seven.",
      "es": "Me quedo un rato en la cama y me levanto como a las siete."
     },
     {
      "en": "Then I take a shower, brush my teeth, put on make-up and get dressed.",
      "es": "Después me baño, me lavo los dientes, me maquillo y me visto."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Her friend",
    "whoEs": "Su amiga",
    "sentences": [
     {
      "en": "Ah, no wonder…",
      "es": "Ah, con razón…"
     },
     {
      "en": "You must be exhausted all day!",
      "es": "¡Debes estar agotada todo el día!"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Paola",
    "whoEs": "Paola",
    "sentences": [
     {
      "en": "Yes, sometimes I rest for a while in the afternoon, but the truth is, I feel very tired.",
      "es": "Sí, a veces descanso un rato en la tarde, pero la verdad es que me siento muy cansada."
     },
     {
      "en": "Maybe I'm going to take sleeping pills.",
      "es": "Tal vez voy a tomar pastillas para dormir."
     }
    ]
   }
  ]
 },
 "leccion12-2": {
  "lines": [
   {
    "kind": "scene",
    "sentences": [
     {
      "en": "Camila tells her godmother how she met her boyfriend.",
      "es": "Camila le cuenta a su madrina cómo conoció a su novio."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The godmother",
    "whoEs": "La madrina",
    "sentences": [
     {
      "en": "So, tell me, how did you meet your boyfriend?",
      "es": "A ver, cuéntame, ¿cómo conociste a tu novio?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Camila",
    "whoEs": "Camila",
    "sentences": [
     {
      "en": "Well… we met on an app!",
      "es": "Pues… ¡nos conocimos en una aplicación!"
     },
     {
      "en": "It was six months ago.",
      "es": "Fue hace seis meses."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The godmother",
    "whoEs": "La madrina",
    "sentences": [
     {
      "en": "How cool!",
      "es": "¡Qué padre!"
     },
     {
      "en": "And how did your first date go?",
      "es": "¿Y cómo fue su primera cita?"
     },
     {
      "en": "Do you remember?",
      "es": "¿Te acuerdas?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Camila",
    "whoEs": "Camila",
    "sentences": [
     {
      "en": "Of course I remember!",
      "es": "¡Claro que me acuerdo!"
     },
     {
      "en": "He picked me up at my house and took me to a small restaurant, not far from Coyoacán.",
      "es": "Pasó por mí a mi casa y me llevó a un restaurante pequeño, no muy lejos de Coyoacán."
     },
     {
      "en": "We sat down and told each other about our lives for hours.",
      "es": "Nos sentamos y nos contamos nuestras vidas durante horas."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The godmother",
    "whoEs": "La madrina",
    "sentences": [
     {
      "en": "And did you guys kiss the first night?",
      "es": "¿Y se besaron la primera noche?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Camila",
    "whoEs": "Camila",
    "sentences": [
     {
      "en": "Yes! We kissed when he took me home.",
      "es": "¡Sí! Nos besamos cuando me llevó a mi casa."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The godmother",
    "whoEs": "La madrina",
    "sentences": [
     {
      "en": "And how soon did you see each other again?",
      "es": "¿Y cuánto tiempo después se volvieron a ver?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Camila",
    "whoEs": "Camila",
    "sentences": [
     {
      "en": "We texted each other all night and we actually saw each other the next day.",
      "es": "Nos escribimos toda la noche y, de hecho, nos vimos al día siguiente."
     },
     {
      "en": "It was love at first sight!",
      "es": "¡Fue amor a primera vista!"
     }
    ]
   },
   {
    "kind": "say",
    "who": "The godmother",
    "whoEs": "La madrina",
    "sentences": [
     {
      "en": "How lovely!",
      "es": "¡Qué bonito!"
     },
     {
      "en": "I'm really happy for you.",
      "es": "Estoy muy feliz por ti."
     },
     {
      "en": "And when did you have your first fight?",
      "es": "¿Y cuándo se pelearon por primera vez?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Camila",
    "whoEs": "Camila",
    "sentences": [
     {
      "en": "Oh, I don't remember that…",
      "es": "Ay, de eso no me acuerdo…"
     },
     {
      "en": "To be honest, we hardly ever argue.",
      "es": "Para ser honesta, casi nunca nos peleamos."
     }
    ]
   }
  ]
 },
 "leccion13": {
  "lines": [
   {
    "kind": "scene",
    "sentences": [
     {
      "en": "A real estate agent welcomes a client at the agency.",
      "es": "Un agente inmobiliario recibe a un cliente en la inmobiliaria."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The agent",
    "whoEs": "El agente",
    "sentences": [
     {
      "en": "So you're looking for a two-bedroom apartment in downtown Guadalajara.",
      "es": "Entonces usted busca un departamento de dos recámaras en el centro de Guadalajara."
     },
     {
      "en": "And you want to buy, is that right?",
      "es": "Y quiere comprar, ¿verdad?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "The client",
    "whoEs": "El cliente",
    "sentences": [
     {
      "en": "Yes, that's right.",
      "es": "Sí, así es."
     },
     {
      "en": "I know downtown very well and I love it.",
      "es": "Conozco muy bien el centro y me encanta."
     },
     {
      "en": "We need at least 70 square meters, with an open kitchen and, if possible, a lot of light.",
      "es": "Necesitamos por lo menos 70 metros cuadrados, con una cocina abierta y, si es posible, mucha luz."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The agent",
    "whoEs": "El agente",
    "sentences": [
     {
      "en": "Okay, let me look…",
      "es": "Muy bien, voy a buscar…"
     },
     {
      "en": "So we'll focus on downtown.",
      "es": "Entonces nos concentramos en el centro."
     },
     {
      "en": "Here I have a two-bedroom one of 79 square meters, on the third floor, but…",
      "es": "Aquí tengo uno de dos recámaras de 79 metros cuadrados, en el tercer piso, pero…"
     },
     {
      "en": "No, I made a mistake: this one is for rent.",
      "es": "No, me equivoqué: este está en renta."
     },
     {
      "en": "Let's see…",
      "es": "A ver…"
     }
    ]
   },
   {
    "kind": "say",
    "who": "The client",
    "whoEs": "El cliente",
    "sentences": [
     {
      "en": "My wife is going to be late, so we're going to start without her.",
      "es": "Mi esposa va a llegar tarde, entonces vamos a empezar sin ella."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The agent",
    "whoEs": "El agente",
    "sentences": [
     {
      "en": "Okay. This is the living room.",
      "es": "Muy bien. Esta es la sala."
     },
     {
      "en": "I left the computer at the office, so I don't know exactly how big it is, but it must be around 20 square meters.",
      "es": "Dejé la computadora en la oficina, entonces no sé exactamente cuánto mide, pero debe tener unos 20 metros cuadrados."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The client",
    "whoEs": "El cliente",
    "sentences": [
     {
      "en": "Oh, yes!",
      "es": "¡Ah, sí!"
     },
     {
      "en": "It's bigger than the one in yesterday's apartment.",
      "es": "Es más grande que la del departamento de ayer."
     },
     {
      "en": "Well, you have to imagine everything without the furniture, because I'm not crazy about the style…",
      "es": "Bueno, hay que imaginar todo sin los muebles, porque no me encanta el estilo…"
     }
    ]
   },
   {
    "kind": "say",
    "who": "The agent",
    "whoEs": "El agente",
    "sentences": [
     {
      "en": "Yes, it's a… special style.",
      "es": "Sí, es un estilo… especial."
     },
     {
      "en": "Here's the kitchen.",
      "es": "Aquí está la cocina."
     },
     {
      "en": "It's new and it's fully equipped.",
      "es": "Es nueva y está completamente equipada."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The client",
    "whoEs": "El cliente",
    "sentences": [
     {
      "en": "It's much better than everything we've seen so far!",
      "es": "¡Es mucho mejor que todo lo que vimos hasta ahora!"
     }
    ]
   },
   {
    "kind": "say",
    "who": "The agent",
    "whoEs": "El agente",
    "sentences": [
     {
      "en": "There are two bedrooms.",
      "es": "Hay dos recámaras."
     },
     {
      "en": "This is the bigger one and that's the smaller one.",
      "es": "Esta es la más grande y esa es la más pequeña."
     },
     {
      "en": "Both have a closet.",
      "es": "Las dos tienen clóset."
     },
     {
      "en": "You can put a double bed here.",
      "es": "Aquí puede poner una cama matrimonial."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The client",
    "whoEs": "El cliente",
    "sentences": [
     {
      "en": "Very nice.",
      "es": "Muy bien."
     },
     {
      "en": "And here, I guess this is the bathroom, right?",
      "es": "Y aquí, me imagino que está el baño, ¿no?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "The agent",
    "whoEs": "El agente",
    "sentences": [
     {
      "en": "Exactly. And there's also a half bath next to the living room.",
      "es": "Exacto. Y también hay un medio baño al lado de la sala."
     },
     {
      "en": "But you have to decide quickly, because a lot of people are interested.",
      "es": "Pero hay que decidir rápido, porque hay mucha gente interesada."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The client",
    "whoEs": "El cliente",
    "sentences": [
     {
      "en": "Yes, of course, I understand.",
      "es": "Sí, claro, entiendo."
     },
     {
      "en": "I'm going to talk to my wife and I'll call you later.",
      "es": "Voy a hablar con mi esposa y le marco más tarde."
     }
    ]
   }
  ]
 },
 "leccion14": {
  "lines": [
   {
    "kind": "scene",
    "sentences": [
     {
      "en": "Don Rafael tells his grandson Tomás about his childhood.",
      "es": "Don Rafael le cuenta su infancia a Tomás, su nieto."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Don Rafael",
    "whoEs": "Don Rafael",
    "sentences": [
     {
      "en": "You see, Tomás, when I was a child, I lived in the countryside, in a village near Atlixco, with my parents and my brothers and sisters.",
      "es": "Mira, Tomás, cuando yo era niño, vivía en el campo, en un pueblo cerca de Atlixco, con mis papás y mis hermanos."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Tomás",
    "whoEs": "Tomás",
    "sentences": [
     {
      "en": "And did you get along with your brothers and sisters, Grandpa?",
      "es": "¿Y te llevabas bien con tus hermanos, abuelo?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Don Rafael",
    "whoEs": "Don Rafael",
    "sentences": [
     {
      "en": "Yes! We had a lot of fun together.",
      "es": "¡Sí! Nos divertíamos mucho juntos."
     },
     {
      "en": "And sometimes we fought too, of course.",
      "es": "Y a veces también nos peleábamos, claro."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Tomás",
    "whoEs": "Tomás",
    "sentences": [
     {
      "en": "And what did your parents do for a living?",
      "es": "¿Y a qué se dedicaban tus papás?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Don Rafael",
    "whoEs": "Don Rafael",
    "sentences": [
     {
      "en": "My dad was a teacher and my mom didn't work outside the home.",
      "es": "Mi papá era maestro y mi mamá no trabajaba fuera de la casa."
     },
     {
      "en": "She had a lot to do with five children!",
      "es": "¡Tenía muchas cosas que hacer con cinco hijos!"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Tomás",
    "whoEs": "Tomás",
    "sentences": [
     {
      "en": "Did you go to school by car?",
      "es": "¿Ibas a la escuela en carro?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Don Rafael",
    "whoEs": "Don Rafael",
    "sentences": [
     {
      "en": "No! I walked to school.",
      "es": "¡No! Iba a la escuela a pie."
     },
     {
      "en": "It was very different at that time.",
      "es": "Era muy diferente en esa época."
     },
     {
      "en": "There was only one classroom for the whole elementary school.",
      "es": "Solo había un salón para toda la primaria."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Tomás",
    "whoEs": "Tomás",
    "sentences": [
     {
      "en": "Really? That's crazy!",
      "es": "¿En serio? ¡Qué locura!"
     },
     {
      "en": "And after school, did you watch TV?",
      "es": "Y después de la escuela, ¿veías la tele?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Don Rafael",
    "whoEs": "Don Rafael",
    "sentences": [
     {
      "en": "No! There was no TV at home!",
      "es": "¡No! ¡No había tele en la casa!"
     },
     {
      "en": "I would get out of school around four thirty and play outside with some friends until dark.",
      "es": "Salía de la escuela como a las cuatro y media y jugaba afuera con unos amigos hasta la noche."
     },
     {
      "en": "Then we would go back home, because we were scared!",
      "es": "Después regresábamos a la casa, ¡porque teníamos miedo!"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Tomás",
    "whoEs": "Tomás",
    "sentences": [
     {
      "en": "And what did you do in the evening?",
      "es": "¿Y en la noche qué hacían?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Don Rafael",
    "whoEs": "Don Rafael",
    "sentences": [
     {
      "en": "Every night we had dinner together.",
      "es": "Todas las noches cenábamos juntos."
     },
     {
      "en": "Then my mom would read us a story before bed.",
      "es": "Después, mi mamá nos leía un cuento antes de dormir."
     },
     {
      "en": "And we chose the story!",
      "es": "¡Y nosotros escogíamos el cuento!"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Tomás",
    "whoEs": "Tomás",
    "sentences": [
     {
      "en": "That's so nice!",
      "es": "¡Qué bonito!"
     },
     {
      "en": "Grandpa, will you read me a story tonight?",
      "es": "Abuelo, ¿me lees un cuento esta noche?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Don Rafael",
    "whoEs": "Don Rafael",
    "sentences": [
     {
      "en": "Of course! But this time, you choose.",
      "es": "¡Claro! Pero esta vez, tú escoges."
     }
    ]
   }
  ]
 },
 "leccion16": {
  "lines": [
   {
    "kind": "scene",
    "sentences": [
     {
      "en": "Andrés tells how his trip began.",
      "es": "Andrés cuenta cómo empezó su viaje."
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "I got back late from work.",
      "es": "Regresé tarde del trabajo."
     },
     {
      "en": "I was packing my suitcase when the taxi driver called me.",
      "es": "Estaba haciendo mi maleta cuando el taxista me llamó."
     },
     {
      "en": "He told me that he was waiting for me downstairs.",
      "es": "Me dijo que me esperaba abajo."
     },
     {
      "en": "I left the apartment at four thirty in the afternoon.",
      "es": "Salí del departamento a las cuatro y media de la tarde."
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "We took the Periférico and then the Circuito Interior (two ring roads) to get to the airport.",
      "es": "Tomamos el Periférico y después el Circuito Interior para llegar al aeropuerto."
     },
     {
      "en": "It was raining and there was a lot of traffic, so it took us more than an hour to get to the AICM, Mexico City's airport.",
      "es": "Llovía y había mucho tráfico, entonces tardamos más de una hora en llegar al AICM, el aeropuerto de la Ciudad de México."
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "I thought my flight was leaving from Terminal 1, but actually it was Terminal 2.",
      "es": "Yo creía que mi vuelo salía de la Terminal 1, pero en realidad era la Terminal 2."
     },
     {
      "en": "So we had to go to the other terminal, and then I had to run to check my suitcase in on time!",
      "es": "Entonces tuvimos que ir a la otra terminal, ¡y después tuve que correr para llegar a tiempo a documentar mi maleta!"
     },
     {
      "en": "The airline employee told me that I had to hurry because there were a lot of people at security.",
      "es": "La empleada de la aerolínea me dijo que tenía que apurarme porque había mucha gente en el filtro de seguridad."
     }
    ]
   },
   {
    "kind": "para",
    "sentences": [
     {
      "en": "I got to the gate just in time: an employee was closing the door!",
      "es": "Llegué a la sala de abordar justo a tiempo: ¡una empleada cerraba la puerta!"
     },
     {
      "en": "Luckily, she saw me and she let me board.",
      "es": "Afortunadamente, me vio y me dejó abordar."
     },
     {
      "en": "I was very lucky!",
      "es": "¡Tuve mucha suerte!"
     }
    ]
   }
  ]
 },
 "leccion17": {
  "lines": [
   {
    "kind": "scene",
    "sentences": [
     {
      "en": "Natalia, a senior in high school, talks to her math teacher at school after her final exams.",
      "es": "Natalia, una alumna de último año de prepa, habla con su profesor de matemáticas en la escuela, después de los exámenes finales."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The teacher",
    "whoEs": "El profesor",
    "sentences": [
     {
      "en": "Hi, Natalia.",
      "es": "Hola, Natalia."
     },
     {
      "en": "So, how did it go?",
      "es": "Entonces, ¿cómo te fue?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Natalia",
    "whoEs": "Natalia",
    "sentences": [
     {
      "en": "Sorry, sir, I can't hear you well.",
      "es": "Perdón, profe, no lo oigo bien."
     },
     {
      "en": "There's a lot of noise in the hallway!",
      "es": "¡Hay mucho ruido en el pasillo!"
     }
    ]
   },
   {
    "kind": "say",
    "who": "The teacher",
    "whoEs": "El profesor",
    "sentences": [
     {
      "en": "How about now?",
      "es": "¿Y ahora?"
     },
     {
      "en": "Can you hear me?",
      "es": "¿Me oyes?"
     },
     {
      "en": "I'm asking you how your exams went.",
      "es": "Te pregunto cómo te fue en los exámenes."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Natalia",
    "whoEs": "Natalia",
    "sentences": [
     {
      "en": "Yes, now I can hear you.",
      "es": "Sí, ahora sí lo oigo."
     },
     {
      "en": "I think it went well.",
      "es": "Creo que me fue bien."
     },
     {
      "en": "Your classes were very useful.",
      "es": "Sus clases fueron muy útiles."
     },
     {
      "en": "I did really well on the math exam!",
      "es": "¡Me fue muy bien en el examen de matemáticas!"
     }
    ]
   },
   {
    "kind": "say",
    "who": "The teacher",
    "whoEs": "El profesor",
    "sentences": [
     {
      "en": "Perfect! And the physics exam?",
      "es": "¡Perfecto! ¿Y el examen de física?"
     },
     {
      "en": "Who was your teacher?",
      "es": "¿Quién era tu profesor?"
     },
     {
      "en": "I don't remember.",
      "es": "No me acuerdo."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Natalia",
    "whoEs": "Natalia",
    "sentences": [
     {
      "en": "The physics one was harder.",
      "es": "El de física fue más difícil."
     },
     {
      "en": "I had classes with Mr. Rosales.",
      "es": "Tenía clases con el profesor Rosales."
     },
     {
      "en": "Do you know him?",
      "es": "¿Usted lo conoce?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "The teacher",
    "whoEs": "El profesor",
    "sentences": [
     {
      "en": "Yes, I know him very well.",
      "es": "Sí, lo conozco muy bien."
     },
     {
      "en": "I met him when we were in college!",
      "es": "¡Lo conocí cuando estábamos en la universidad!"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Natalia",
    "whoEs": "Natalia",
    "sentences": [
     {
      "en": "So you know Sofía Rosales, his daughter!",
      "es": "¡Entonces conoce a Sofía Rosales, su hija!"
     },
     {
      "en": "She was in my class this year.",
      "es": "Estaba en mi salón este año."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The teacher",
    "whoEs": "El profesor",
    "sentences": [
     {
      "en": "Yes, I've known her since she was born!",
      "es": "Sí, ¡la conozco desde que nació!"
     },
     {
      "en": "And the philosophy exam, how was it?",
      "es": "¿Y el examen de filosofía, qué tal?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Natalia",
    "whoEs": "Natalia",
    "sentences": [
     {
      "en": "Ugh! I found it really difficult.",
      "es": "¡Uf! Me pareció muy difícil."
     },
     {
      "en": "The thing is, I'm really bad at philosophy.",
      "es": "Es que soy muy mala para la filosofía."
     },
     {
      "en": "And at English too!",
      "es": "¡Y para el inglés también!"
     }
    ]
   },
   {
    "kind": "say",
    "who": "The teacher",
    "whoEs": "El profesor",
    "sentences": [
     {
      "en": "Of course you're not!",
      "es": "¡Claro que no!"
     },
     {
      "en": "I'm sure it's going to go well for you.",
      "es": "Estoy seguro de que te va a ir bien."
     },
     {
      "en": "And did you talk to Gabriel and Santiago?",
      "es": "¿Y hablaste con Gabriel y Santiago?"
     },
     {
      "en": "How did it go for them?",
      "es": "¿Cómo les fue?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Natalia",
    "whoEs": "Natalia",
    "sentences": [
     {
      "en": "Yes, I saw them yesterday.",
      "es": "Sí, los vi ayer."
     },
     {
      "en": "They were pretty optimistic, but a little nervous about the university entrance exam in two weeks.",
      "es": "Estaban bastante optimistas, pero un poco nerviosos por el examen de admisión a la universidad, en dos semanas."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The teacher",
    "whoEs": "El profesor",
    "sentences": [
     {
      "en": "Well, I have to go.",
      "es": "Bueno, me tengo que ir."
     },
     {
      "en": "I'm keeping my fingers crossed for the results.",
      "es": "Cruzo los dedos por los resultados."
     },
     {
      "en": "When are you going to get them?",
      "es": "¿Cuándo los vas a recibir?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Natalia",
    "whoEs": "Natalia",
    "sentences": [
     {
      "en": "We get them in July.",
      "es": "Los recibimos en julio."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The teacher",
    "whoEs": "El profesor",
    "sentences": [
     {
      "en": "Very good!",
      "es": "¡Muy bien!"
     },
     {
      "en": "I wish you a happy vacation, Natalia.",
      "es": "Te deseo unas felices vacaciones, Natalia."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Natalia",
    "whoEs": "Natalia",
    "sentences": [
     {
      "en": "Thank you very much, sir. You too!",
      "es": "Muchas gracias, profe. ¡Igualmente!"
     }
    ]
   }
  ]
 },
 "leccion18": {
  "lines": [
   {
    "kind": "scene",
    "sentences": [
     {
      "en": "Matt, Emilia's Australian friend, has just arrived in Mexico City.",
      "es": "Matt, el amigo australiano de Emilia, acaba de llegar a la Ciudad de México."
     },
     {
      "en": "He calls her from the airport: he wants to know how to get to her apartment.",
      "es": "La llama desde el aeropuerto: quiere saber cómo llegar a su departamento."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Emilia",
    "whoEs": "Emilia",
    "sentences": [
     {
      "en": "Hello?",
      "es": "¿Bueno?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Matt",
    "whoEs": "Matt",
    "sentences": [
     {
      "en": "Hi, Emilia!",
      "es": "¡Hola, Emilia!"
     },
     {
      "en": "It's Matt.",
      "es": "Soy Matt."
     },
     {
      "en": "I'm at the airport now.",
      "es": "Ya estoy en el aeropuerto."
     },
     {
      "en": "How do I get to your apartment?",
      "es": "¿Cómo llego a tu departamento?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Emilia",
    "whoEs": "Emilia",
    "sentences": [
     {
      "en": "Welcome to Mexico!",
      "es": "¡Bienvenido a México!"
     },
     {
      "en": "It's very easy.",
      "es": "Es muy fácil."
     },
     {
      "en": "Take the metro at Terminal Aérea station, line 5, toward Pantitlán.",
      "es": "Toma el metro en la estación Terminal Aérea, línea 5, dirección Pantitlán."
     },
     {
      "en": "At Pantitlán, change to line 1 and get off at Insurgentes.",
      "es": "En Pantitlán, cambia a la línea 1 y bájate en Insurgentes."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Matt",
    "whoEs": "Matt",
    "sentences": [
     {
      "en": "Wait, wait!",
      "es": "¡Espera, espera!"
     },
     {
      "en": "Slower, please…",
      "es": "Más despacio, por favor…"
     },
     {
      "en": "Line 5 to Pantitlán, then line 1 to Insurgentes.",
      "es": "Línea 5 hasta Pantitlán, después línea 1 hasta Insurgentes."
     },
     {
      "en": "And then?",
      "es": "¿Y luego?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Emilia",
    "whoEs": "Emilia",
    "sentences": [
     {
      "en": "Get out of the metro and go straight along Insurgentes Avenue.",
      "es": "Sal del metro y sigue derecho por la avenida Insurgentes."
     },
     {
      "en": "Walk two blocks and at the pharmacy, turn right.",
      "es": "Camina dos cuadras y en la farmacia, dobla a la derecha."
     },
     {
      "en": "My building is across from a park.",
      "es": "Mi edificio está enfrente de un parque."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Matt",
    "whoEs": "Matt",
    "sentences": [
     {
      "en": "What if I get lost?",
      "es": "¿Y si me pierdo?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Emilia",
    "whoEs": "Emilia",
    "sentences": [
     {
      "en": "Don't worry!",
      "es": "¡No te preocupes!"
     },
     {
      "en": "Ask someone in the street, or call me.",
      "es": "Pregúntale a alguien en la calle, o llámame."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Matt",
    "whoEs": "Matt",
    "sentences": [
     {
      "en": "OK. And what's the number?",
      "es": "Bueno. ¿Y cuál es el número?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Emilia",
    "whoEs": "Emilia",
    "sentences": [
     {
      "en": "It's number 25, a blue building.",
      "es": "Es el 25, un edificio azul."
     },
     {
      "en": "Ring the bell for 4B and come up to the fourth floor.",
      "es": "Toca el timbre del 4B y sube al cuarto piso."
     },
     {
      "en": "But don't take the elevator, it's out of order!",
      "es": "¡Pero no tomes el elevador, está descompuesto!"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Matt",
    "whoEs": "Matt",
    "sentences": [
     {
      "en": "Four floors with my suitcase? Great!",
      "es": "¿Cuatro pisos con mi maleta? ¡Qué bien!"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Emilia",
    "whoEs": "Emilia",
    "sentences": [
     {
      "en": "Ha ha!",
      "es": "¡Ja, ja!"
     },
     {
      "en": "That way you get a little exercise.",
      "es": "Así haces un poco de ejercicio."
     },
     {
      "en": "Come quickly: I'm making you some chilaquiles.",
      "es": "Ven rápido: te estoy preparando unos chilaquiles."
     },
     {
      "en": "And don't forget my Australian cookies!",
      "es": "¡Y no te olvides de mis galletas australianas!"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Matt",
    "whoEs": "Matt",
    "sentences": [
     {
      "en": "Don't worry, I have them right here!",
      "es": "No te preocupes, ¡las tengo aquí!"
     },
     {
      "en": "See you in an hour.",
      "es": "Nos vemos en una hora."
     }
    ]
   }
  ]
 },
 "leccion19": {
  "lines": [
   {
    "kind": "scene",
    "sentences": [
     {
      "en": "Jessica is talking with Mariana, a Mexican friend, about what she ate yesterday and today.",
      "es": "Jessica habla con Mariana, una amiga mexicana, de lo que comió ayer y hoy."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mariana",
    "whoEs": "Mariana",
    "sentences": [
     {
      "en": "Hey, Jessica, what did you have for breakfast today?",
      "es": "Oye, Jessica, ¿qué desayunaste hoy?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Jessica",
    "whoEs": "Jessica",
    "sentences": [
     {
      "en": "Normally I have something sweet for breakfast, but I decided to start eating savory things.",
      "es": "Normalmente desayuno algo dulce, pero decidí empezar a comer cosas saladas."
     },
     {
      "en": "So I made myself a piece of toast with avocado, lime, a fried egg and a little bit of salt.",
      "es": "Entonces me preparé un pan tostado con aguacate, limón, un huevo estrellado y un poco de sal."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mariana",
    "whoEs": "Mariana",
    "sentences": [
     {
      "en": "Yum! And for lunch?",
      "es": "¡Qué rico! ¿Y en la comida?"
     },
     {
      "en": "What did you have?",
      "es": "¿Qué comiste?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Jessica",
    "whoEs": "Jessica",
    "sentences": [
     {
      "en": "For starters, I had tomato, cucumber and fresh cheese.",
      "es": "De entrada, comí tomate, pepino y queso fresco."
     },
     {
      "en": "For the main course, rice, broccoli and meat that I bought at the butcher's.",
      "es": "De plato fuerte, arroz, brócoli y carne que compré en la carnicería."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mariana",
    "whoEs": "Mariana",
    "sentences": [
     {
      "en": "Ah, okay.",
      "es": "Ah, ok."
     },
     {
      "en": "I used to love meat, but I've been a vegetarian for two years.",
      "es": "A mí me encantaba la carne, pero soy vegetariana desde hace dos años."
     },
     {
      "en": "Now I replace it with plant-based protein: beans, lentils…",
      "es": "Ahora la reemplazo con proteína vegetal: frijoles, lentejas…"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Jessica",
    "whoEs": "Jessica",
    "sentences": [
     {
      "en": "Yes, I understand, but I really like meat, I can't give it up!",
      "es": "Sí, te entiendo, pero a mí me gusta mucho la carne, ¡no puedo dejarla!"
     },
     {
      "en": "And I also love fish.",
      "es": "Y también me encanta el pescado."
     },
     {
      "en": "By the way, last night I didn't go out.",
      "es": "Por cierto, anoche no salí."
     },
     {
      "en": "I had dinner at home: fresh fish with pasta.",
      "es": "Cené en casa: pescado fresco con pasta."
     },
     {
      "en": "It was delicious!",
      "es": "¡Estaba delicioso!"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mariana",
    "whoEs": "Mariana",
    "sentences": [
     {
      "en": "Great! And for dessert?",
      "es": "¡Qué bien! ¿Y de postre?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Jessica",
    "whoEs": "Jessica",
    "sentences": [
     {
      "en": "For dessert, I just had fruit.",
      "es": "De postre, solo comí fruta."
     },
     {
      "en": "I wasn't very hungry anymore!",
      "es": "¡Ya no tenía mucha hambre!"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mariana",
    "whoEs": "Mariana",
    "sentences": [
     {
      "en": "I can imagine!",
      "es": "¡Me imagino!"
     },
     {
      "en": "And in general, what do you drink when you eat?",
      "es": "Y en general, ¿qué tomas cuando comes?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Jessica",
    "whoEs": "Jessica",
    "sentences": [
     {
      "en": "I love wine, especially with cheese, but I really try to drink only water.",
      "es": "Me encanta el vino, sobre todo con queso, pero de verdad trato de beber solo agua."
     },
     {
      "en": "Except in the morning: at breakfast, I have coffee or tea.",
      "es": "Menos en la mañana: en el desayuno, tomo café o té."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mariana",
    "whoEs": "Mariana",
    "sentences": [
     {
      "en": "Oh, all this talk is making me hungry!",
      "es": "¡Uy, con esta conversación, ya tengo hambre!"
     }
    ]
   }
  ]
 },
 "leccion20": {
  "lines": [
   {
    "kind": "scene",
    "sentences": [
     {
      "en": "James and his friend Mateo are on a trip to Mexico City, Mateo's hometown.",
      "es": "James y su amigo Mateo están de viaje en la Ciudad de México, la ciudad de Mateo."
     },
     {
      "en": "They are having lunch at a restaurant.",
      "es": "Comen en un restaurante."
     }
    ]
   },
   {
    "kind": "say",
    "who": "The waiter",
    "whoEs": "El mesero",
    "sentences": [
     {
      "en": "Good afternoon, welcome.",
      "es": "Buenas tardes, bienvenidos."
     },
     {
      "en": "What can I get you to drink?",
      "es": "¿Qué les traigo de tomar?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mateo",
    "whoEs": "Mateo",
    "sentences": [
     {
      "en": "For me, a horchata, and for him, a lemonade.",
      "es": "Para mí, un agua de horchata, y para él, una limonada."
     },
     {
      "en": "Can we have the menu?",
      "es": "¿Nos da el menú?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "The waiter",
    "whoEs": "El mesero",
    "sentences": [
     {
      "en": "Of course, here you go.",
      "es": "Claro, aquí tienen."
     },
     {
      "en": "Do you know what you're going to order?",
      "es": "¿Ya saben qué van a pedir?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mateo",
    "whoEs": "Mateo",
    "sentences": [
     {
      "en": "One moment, please.",
      "es": "Un momento, por favor."
     },
     {
      "en": "James, they serve very good tacos al pastor here.",
      "es": "James, aquí sirven unos tacos al pastor muy buenos."
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoEs": "James",
    "sentences": [
     {
      "en": "What are tacos \"al pastor\"?",
      "es": "¿Qué son los tacos \"al pastor\"?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mateo",
    "whoEs": "Mateo",
    "sentences": [
     {
      "en": "They're pork tacos with pineapple.",
      "es": "Son tacos de carne de puerco con piña."
     },
     {
      "en": "You're going to love them!",
      "es": "¡Te van a encantar!"
     },
     {
      "en": "And they're not expensive: an order costs ninety-five pesos.",
      "es": "Y no son caros: la orden cuesta noventa y cinco pesos."
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoEs": "James",
    "sentences": [
     {
      "en": "Jessica ordered them last time and she loved them.",
      "es": "Jessica los pidió la última vez y le encantaron."
     },
     {
      "en": "I always order enchiladas… but today I'm going to try something new!",
      "es": "Yo siempre pido enchiladas… ¡pero hoy voy a probar algo nuevo!"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mateo",
    "whoEs": "Mateo",
    "sentences": [
     {
      "en": "That's the spirit!",
      "es": "¡Así me gusta!"
     },
     {
      "en": "Excuse me, for me, tacos al pastor with everything, please.",
      "es": "Joven, para mí, unos tacos al pastor con todo, por favor."
     },
     {
      "en": "And you, James?",
      "es": "¿Y tú, James?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoEs": "James",
    "sentences": [
     {
      "en": "The same for me, but without onion.",
      "es": "Para mí también, pero sin cebolla."
     },
     {
      "en": "And I'd like a salsa that's not too spicy.",
      "es": "Y quisiera una salsa no muy picante."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mateo",
    "whoEs": "Mateo",
    "sentences": [
     {
      "en": "Ha ha!",
      "es": "¡Ja, ja!"
     },
     {
      "en": "My friend doesn't really like chili… and neither do I!",
      "es": "A mi amigo no le gusta mucho el chile… ¡y a mí tampoco!"
     }
    ]
   },
   {
    "kind": "say",
    "who": "The waiter",
    "whoEs": "El mesero",
    "sentences": [
     {
      "en": "Don't worry, the green salsa isn't very spicy.",
      "es": "No se preocupe, la salsa verde no es muy picante."
     },
     {
      "en": "Anything else?",
      "es": "¿Algo más?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mateo",
    "whoEs": "Mateo",
    "sentences": [
     {
      "en": "No, thank you, that's all.",
      "es": "No, gracias, es todo."
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoEs": "James",
    "sentences": [
     {
      "en": "Those tacos were delicious!",
      "es": "¡Qué ricos estaban los tacos!"
     },
     {
      "en": "OK, today I'm paying.",
      "es": "Bueno, hoy pago yo."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mateo",
    "whoEs": "Mateo",
    "sentences": [
     {
      "en": "No way!",
      "es": "¡Nada de eso!"
     },
     {
      "en": "You're my guest.",
      "es": "Tú eres mi invitado."
     },
     {
      "en": "It's a pleasure for me to eat with you!",
      "es": "¡Para mí es un placer comer contigo!"
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoEs": "James",
    "sentences": [
     {
      "en": "Thanks. But next time, in Los Angeles, you're eating with me and I'm paying!",
      "es": "Gracias. ¡Pero la próxima vez, en Los Ángeles, tú comes conmigo y pago yo!"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mateo",
    "whoEs": "Mateo",
    "sentences": [
     {
      "en": "Deal! Excuse me, can you bring us the check, please?",
      "es": "¡Trato hecho! Joven, ¿nos trae la cuenta, por favor?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "The waiter",
    "whoEs": "El mesero",
    "sentences": [
     {
      "en": "Of course. That's two hundred seventy pesos.",
      "es": "Claro. Son doscientos setenta pesos."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mateo",
    "whoEs": "Mateo",
    "sentences": [
     {
      "en": "Here's three hundred.",
      "es": "Aquí tiene trescientos."
     },
     {
      "en": "Keep the change.",
      "es": "Quédese con el cambio."
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoEs": "James",
    "sentences": [
     {
      "en": "Thirty pesos as a tip?",
      "es": "¿Treinta pesos de propina?"
     },
     {
      "en": "In Los Angeles we leave a lot more!",
      "es": "¡En Los Ángeles dejamos mucho más!"
     },
     {
      "en": "And over there an order of tacos costs almost as much as this whole meal!",
      "es": "¡Y allá una orden de tacos cuesta casi lo mismo que toda esta comida!"
     }
    ]
   }
  ]
 },
 "leccion21": {
  "lines": [
   {
    "kind": "scene",
    "sentences": [
     {
      "en": "James and Mateo are talking about their health in front of the pharmacy.",
      "es": "James y Mateo hablan de su salud enfrente de la farmacia."
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoEs": "James",
    "sentences": [
     {
      "en": "Hi, Mateo!",
      "es": "¡Hola, Mateo!"
     },
     {
      "en": "How are things these days?",
      "es": "¿Qué tal estos días?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mateo",
    "whoEs": "Mateo",
    "sentences": [
     {
      "en": "Not bad, but I need to exercise more.",
      "es": "Nada mal, pero tengo que hacer más ejercicio."
     },
     {
      "en": "I put on a little weight over Christmas.",
      "es": "En Navidad subí un poco de peso."
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoEs": "James",
    "sentences": [
     {
      "en": "Really? You've never had weight problems.",
      "es": "¿De verdad? Tú nunca has tenido problemas de peso."
     },
     {
      "en": "What changed?",
      "es": "¿Qué cambió?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mateo",
    "whoEs": "Mateo",
    "sentences": [
     {
      "en": "Well, I work a lot and I don't have time to go to the gym.",
      "es": "Pues trabajo mucho y no tengo tiempo para ir al gimnasio."
     },
     {
      "en": "But I'm going to go on a diet to lose these extra kilos.",
      "es": "Pero voy a ponerme a dieta para bajar estos kilos de más."
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoEs": "James",
    "sentences": [
     {
      "en": "That's a good idea.",
      "es": "Es una buena idea."
     },
     {
      "en": "I should do the same… but I haven't found the time to start yet.",
      "es": "Yo debería hacer lo mismo… pero todavía no he encontrado el tiempo para empezar."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mateo",
    "whoEs": "Mateo",
    "sentences": [
     {
      "en": "What about you?",
      "es": "¿Y tú?"
     },
     {
      "en": "How's your health?",
      "es": "¿Cómo estás de salud?"
     },
     {
      "en": "You look like you have a bit of a cold.",
      "es": "Te ves un poco resfriado."
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoEs": "James",
    "sentences": [
     {
      "en": "Yes, I've had a cold for two weeks and nothing helps.",
      "es": "Sí, estoy resfriado desde hace dos semanas y nada me ayuda."
     },
     {
      "en": "My head hurts and my throat too.",
      "es": "Me duele la cabeza y también la garganta."
     },
     {
      "en": "It's really annoying!",
      "es": "¡Es muy molesto!"
     },
     {
      "en": "Have you ever had anything like that?",
      "es": "¿Alguna vez has tenido algo así?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Mateo",
    "whoEs": "Mateo",
    "sentences": [
     {
      "en": "No, I've never had that…",
      "es": "No, nunca he tenido eso…"
     },
     {
      "en": "Oh, no, wait!",
      "es": "¡Ah, no, espera!"
     },
     {
      "en": "Yes, last year.",
      "es": "Sí, el año pasado."
     },
     {
      "en": "But in the end it was bronchitis and I got better fast with the medicine.",
      "es": "Pero al final era una bronquitis y me curé rápido con las medicinas."
     },
     {
      "en": "Have you been to the doctor yet?",
      "es": "¿Ya fuiste al médico?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "James",
    "whoEs": "James",
    "sentences": [
     {
      "en": "No, not yet.",
      "es": "No, todavía no."
     },
     {
      "en": "I called the doctor's office, but nobody answered.",
      "es": "Llamé al consultorio, pero nadie contestó."
     },
     {
      "en": "And I have a lot of work…",
      "es": "Y tengo mucho trabajo…"
     },
     {
      "en": "Well, I'm off.",
      "es": "Bueno, ya me voy."
     },
     {
      "en": "I'm going to buy something for my throat!",
      "es": "¡Voy a comprar algo para la garganta!"
     }
    ]
   }
  ]
 },
 "leccion22": {
  "lines": [
   {
    "kind": "scene",
    "sentences": [
     {
      "en": "Andrés and Valeria imagine what they would do with a lot of money.",
      "es": "Andrés y Valeria imaginan lo que harían con mucho dinero."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Andrés",
    "whoEs": "Andrés",
    "sentences": [
     {
      "en": "Imagine a genie grants you a wish.",
      "es": "Imagínate que un genio te concede un deseo."
     },
     {
      "en": "What would you ask him for?",
      "es": "¿Qué le pedirías?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Valeria",
    "whoEs": "Valeria",
    "sentences": [
     {
      "en": "Hmm… I think I'd ask him for a lot of money.",
      "es": "Mmm… creo que le pediría mucho dinero."
     },
     {
      "en": "Simple as that!",
      "es": "¡Así de simple!"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Andrés",
    "whoEs": "Andrés",
    "sentences": [
     {
      "en": "Oh, really?",
      "es": "¿Ah, sí?"
     },
     {
      "en": "That's not very original!",
      "es": "¡No es muy original!"
     },
     {
      "en": "And what would you do with a lot of money?",
      "es": "¿Y qué harías con mucho dinero?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Valeria",
    "whoEs": "Valeria",
    "sentences": [
     {
      "en": "With a lot of money, I'd stop working, or I'd work for a charity.",
      "es": "Con mucho dinero, dejaría de trabajar, o trabajaría para una fundación."
     },
     {
      "en": "That way I'd have more time to be with my kids.",
      "es": "Así tendría más tiempo para estar con mis hijos."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Andrés",
    "whoEs": "Andrés",
    "sentences": [
     {
      "en": "I see.",
      "es": "Ya veo."
     },
     {
      "en": "And what would you do together?",
      "es": "¿Y qué harían juntos?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Valeria",
    "whoEs": "Valeria",
    "sentences": [
     {
      "en": "I could pick them up from school at two, and we'd have time to paint or to do things like that.",
      "es": "Podría recogerlos en la escuela a las dos, y tendríamos tiempo para pintar o para hacer cosas así."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Andrés",
    "whoEs": "Andrés",
    "sentences": [
     {
      "en": "That's true, it would be great!",
      "es": "Es verdad, ¡sería genial!"
     },
     {
      "en": "You'd be less stressed and you could enjoy life more.",
      "es": "Estarías menos estresada y podrías disfrutar más de la vida."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Valeria",
    "whoEs": "Valeria",
    "sentences": [
     {
      "en": "What about you, Andrés?",
      "es": "¿Y tú, Andrés?"
     },
     {
      "en": "What would you do?",
      "es": "¿Qué harías tú?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Andrés",
    "whoEs": "Andrés",
    "sentences": [
     {
      "en": "I'd travel all over the world, but on vacation!",
      "es": "¡Yo viajaría por todo el mundo, pero de vacaciones!"
     },
     {
      "en": "And I'd tell my boss I'd never come back.",
      "es": "Y le diría a mi jefe que nunca volvería."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Valeria",
    "whoEs": "Valeria",
    "sentences": [
     {
      "en": "Ha! If I were you, I wouldn't tell him anything… yet!",
      "es": "¡Ja! Yo en tu lugar no le diría nada… ¡todavía!"
     }
    ]
   }
  ]
 },
 "leccion23": {
  "lines": [
   {
    "kind": "scene",
    "sentences": [
     {
      "en": "James and Jessica are having dinner with Emilia and Hugo, a Mexican couple.",
      "es": "James y Jessica cenan con Emilia y Hugo, una pareja mexicana."
     },
     {
      "en": "They are talking about their travels.",
      "es": "Hablan de sus viajes."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Jessica",
    "whoEs": "Jessica",
    "sentences": [
     {
      "en": "Hugo, Emilia, have you ever been to Europe?",
      "es": "Hugo, Emilia, ¿alguna vez han ido a Europa?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Hugo",
    "whoEs": "Hugo",
    "sentences": [
     {
      "en": "No, we've never been to Europe.",
      "es": "No, nunca hemos ido a Europa."
     },
     {
      "en": "On the other hand, we know the United States very well: we go almost every year to visit my sister.",
      "es": "En cambio, conocemos muy bien Estados Unidos: vamos casi cada año a visitar a mi hermana."
     },
     {
      "en": "This year we went back to New York.",
      "es": "Este año volvimos a Nueva York."
     },
     {
      "en": "Do you guys know New York?",
      "es": "¿Ustedes conocen Nueva York?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Jessica",
    "whoEs": "Jessica",
    "sentences": [
     {
      "en": "Of course! James is from New York.",
      "es": "¡Claro! James es de Nueva York."
     },
     {
      "en": "And we don't know Europe either, but we'd love to go to Spain!",
      "es": "Y nosotros tampoco conocemos Europa, ¡pero nos encantaría ir a España!"
     },
     {
      "en": "And have you been to Denver?",
      "es": "¿Y han estado en Denver?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Hugo",
    "whoEs": "Hugo",
    "sentences": [
     {
      "en": "I have, but Emilia hasn't.",
      "es": "Yo sí, pero Emilia no."
     },
     {
      "en": "I went for work and I really liked it.",
      "es": "Fui por trabajo y me gustó mucho."
     },
     {
      "en": "It's very close to the Rocky Mountains and there are amazing hikes.",
      "es": "Está muy cerca de las montañas Rocosas y hay caminatas increíbles."
     },
     {
      "en": "And do you guys like to travel?",
      "es": "¿Y a ustedes les gusta viajar?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Jessica",
    "whoEs": "Jessica",
    "sentences": [
     {
      "en": "Yes, we've always loved traveling!",
      "es": "¡Sí, siempre nos ha encantado viajar!"
     },
     {
      "en": "We were going to go to Brazil last year, but we lost both passports: mine and James's!",
      "es": "Íbamos a ir a Brasil el año pasado, pero perdimos los dos pasaportes: ¡el mío y el de James!"
     },
     {
      "en": "So we're going this summer.",
      "es": "Entonces vamos este verano."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Hugo",
    "whoEs": "Hugo",
    "sentences": [
     {
      "en": "How cool!",
      "es": "¡Qué padre!"
     },
     {
      "en": "Have you bought your tickets yet?",
      "es": "¿Ya compraron sus boletos?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Jessica",
    "whoEs": "Jessica",
    "sentences": [
     {
      "en": "No, we haven't bought them yet.",
      "es": "No, todavía no los hemos comprado."
     },
     {
      "en": "The last time I looked at the website, they were very expensive.",
      "es": "La última vez que vi la página, estaban muy caros."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Hugo",
    "whoEs": "Hugo",
    "sentences": [
     {
      "en": "Oh, OK.",
      "es": "Ah, ok."
     },
     {
      "en": "If you want, I can recommend a really good website to buy cheap plane tickets.",
      "es": "Si quieren, les recomiendo una página muy buena para comprar boletos de avión baratos."
     },
     {
      "en": "It's called vuelosbaratos.com.",
      "es": "Se llama vuelosbaratos.com."
     },
     {
      "en": "You should take a look.",
      "es": "Deberían echarle un ojo."
     }
    ]
   },
   {
    "kind": "say",
    "who": "Jessica",
    "whoEs": "Jessica",
    "sentences": [
     {
      "en": "Wait, I didn't quite catch that.",
      "es": "Espera, no entendí bien."
     },
     {
      "en": "Can you repeat the name, please?",
      "es": "¿Puedes repetir el nombre, por favor?"
     },
     {
      "en": "How do you spell it?",
      "es": "¿Cómo se escribe?"
     }
    ]
   },
   {
    "kind": "say",
    "who": "Hugo",
    "whoEs": "Hugo",
    "sentences": [
     {
      "en": "Vuelos baratos, all one word, dot com: v, u, e, l, o, s, b, a, r, a, t, o, s… dot com!",
      "es": "Vuelos baratos, todo junto, punto com: ve chica, u, e, ele, o, ese, be grande, a, erre, a, te, o, ese… ¡punto com!"
     }
    ]
   }
  ]
 }
};

export default DIALOGUE_TEXTS;
