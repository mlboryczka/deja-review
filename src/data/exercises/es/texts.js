// Each Spanish lesson's text (its dialogue, story or profile): the part of
// the lesson sheet before the grammar. Shown on the Exercises page as "Lesson
// text", and given to Claude when it marks a question about the text.
// Written by scripts/es-exercise-texts.mjs from the course's HTML sources;
// run it again if a lesson's text changes.
//
// Each line is { title }, { scene }, { question }, { who, text } or { text }.

export const LESSON_TEXTS = {
 "leccion1": [
  {
   "title": "Primera clase de español"
  },
  {
   "who": "Lucía",
   "text": "Hola, me llamo Lucía, soy tu profesora de español. Y tú, ¿cómo te llamas?"
  },
  {
   "who": "James",
   "text": "Me llamo James."
  },
  {
   "who": "Lucía",
   "text": "¿De dónde eres?"
  },
  {
   "who": "James",
   "text": "Soy estadounidense, de Nueva York, pero vivo en Los Ángeles desde hace dos años. ¿Y tú?"
  },
  {
   "who": "Lucía",
   "text": "Soy mexicana, de Guadalajara, pero vivo en Estados Unidos desde hace dos meses."
  },
  {
   "who": "James",
   "text": "Muy bien. ¿Por qué estás en Estados Unidos?"
  },
  {
   "who": "Lucía",
   "text": "Estoy aquí con mi esposo para aprender inglés. Y tú, ¿estás casado?"
  },
  {
   "who": "James",
   "text": "Sí, estoy casado. Mi esposa se llama Jessica. Estamos juntos desde hace dos años."
  }
 ],
 "leccion10": [
  {
   "scene": "Emilia le cuenta sus vacaciones de verano a Matt, su amigo australiano."
  },
  {
   "who": "Matt",
   "text": "Oye, Emilia, ¿qué hiciste en julio? ¿Trabajaste?"
  },
  {
   "who": "Emilia",
   "text": "No, no trabajé. Este año fuimos a Oaxaca. Es un estado en el sur de México. Tiene playas maravillosas, ¡como en Australia!"
  },
  {
   "who": "Matt",
   "text": "¿De verdad? ¿Es bonito?"
  },
  {
   "who": "Emilia",
   "text": "Sí, es un lugar increíble. Normalmente llueve mucho en verano, pero este año tuvimos suerte: hizo muy buen tiempo."
  },
  {
   "who": "Matt",
   "text": "¿Visitaron la ciudad de Oaxaca?"
  },
  {
   "who": "Emilia",
   "text": "No, no visitamos la ciudad, Hugo no quiso. Pero caminamos por la playa y por el campo. También vimos unos pueblos muy bonitos. ¡Y visitamos a unos amigos! Mis papás también vinieron con nosotros una semana. Fue genial."
  },
  {
   "who": "Matt",
   "text": "¡No pararon! ¿Fueron en carro?"
  },
  {
   "who": "Emilia",
   "text": "Sí, es más práctico. ¡Y a Hugo le encanta manejar! ¿Y tú? ¿Saliste de vacaciones este verano?"
  },
  {
   "who": "Matt",
   "text": "No, no salí de vacaciones porque no pude tomar mis días libres. ¡Mi jefe no quiso!"
  }
 ],
 "leccion11": [
  {
   "scene": "La doctora habla con su secretario, Martín, antes de empezar el día de trabajo."
  },
  {
   "who": "La doctora",
   "text": "Buenos días, Martín. ¿Qué estás haciendo?"
  },
  {
   "who": "Martín",
   "text": "Buenos días, doctora. Estoy leyendo los correos de los pacientes."
  },
  {
   "who": "La doctora",
   "text": "Muy bien. Oye, ¿le mandaste un correo a la señora Duarte, como te dije ayer?"
  },
  {
   "who": "Martín",
   "text": "Sí, le mandé un correo, pero no me contestó. Entonces le hablé por teléfono."
  },
  {
   "who": "La doctora",
   "text": "Perfecto. ¿Y les recordaste a los señores Ramírez la credencial del seguro? ¡Siempre olvidan algo!"
  },
  {
   "who": "Martín",
   "text": "Sí, les mandé un mensaje ayer. Les dije que tienen que traer la credencial. Creo que esta vez no van a olvidar nada."
  },
  {
   "who": "La doctora",
   "text": "Bueno. Y otra cosa: ayer te dije que tienes que actualizar los expedientes. ¿Ya terminaste?"
  },
  {
   "who": "Martín",
   "text": "No, todavía no, no tuve tiempo. Pero espere… ¿usted me dio esos expedientes?"
  },
  {
   "who": "La doctora",
   "text": "¡Pues sí! Te di todos los expedientes la semana pasada. Creo que están en tu escritorio."
  },
  {
   "who": "Martín",
   "text": "Ah, sí, sí, es cierto, tiene razón. Empiezo ahorita y después le digo."
  },
  {
   "who": "La doctora",
   "text": "¡Sale! ¡Ánimo!"
  }
 ],
 "leccion12-1": [
  {
   "scene": "Paola tiene problemas para dormir. Habla de eso con su amiga."
  },
  {
   "who": "Paola",
   "text": "Duermo muy mal estos días. No sé qué me pasa…"
  },
  {
   "who": "Su amiga",
   "text": "Ay, qué mal… Pero a ver, ¿a qué hora te acuestas? ¿Muy tarde?"
  },
  {
   "who": "Paola",
   "text": "No, normalmente me acuesto como a las once y me duermo rápido, sin problema. Lo que pasa es que me despierto en la noche y me vuelvo a dormir varias horas después."
  },
  {
   "who": "Su amiga",
   "text": "Ya veo. ¿Y qué haces cuando te despiertas en la noche?"
  },
  {
   "who": "Paola",
   "text": "Trato de quedarme en la cama, pero a veces me levanto porque me aburro mucho. Prendo el celular y veo Instagram."
  },
  {
   "who": "Su amiga",
   "text": "Uy, eso no está muy bien… ¿Y a qué hora te levantas?"
  },
  {
   "who": "Paola",
   "text": "Si mi esposo trabaja, me despierto muy temprano, a las seis, porque suena su despertador. Me quedo un rato en la cama y me levanto como a las siete. Después me baño, me lavo los dientes, me maquillo y me visto."
  },
  {
   "who": "Su amiga",
   "text": "Ah, con razón… ¡Debes estar agotada todo el día!"
  },
  {
   "who": "Paola",
   "text": "Sí, a veces descanso un rato en la tarde, pero la verdad es que me siento muy cansada. Tal vez voy a tomar pastillas para dormir."
  }
 ],
 "leccion12-2": [
  {
   "scene": "Camila le cuenta a su madrina cómo conoció a su novio."
  },
  {
   "who": "La madrina",
   "text": "A ver, cuéntame, ¿cómo conociste a tu novio?"
  },
  {
   "who": "Camila",
   "text": "Pues… ¡nos conocimos en una aplicación! Fue hace seis meses."
  },
  {
   "who": "La madrina",
   "text": "¡Qué padre! ¿Y cómo fue su primera cita? ¿Te acuerdas?"
  },
  {
   "who": "Camila",
   "text": "¡Claro que me acuerdo! Pasó por mí a mi casa y me llevó a un restaurante pequeño, no muy lejos de Coyoacán. Nos sentamos y nos contamos nuestras vidas durante horas."
  },
  {
   "who": "La madrina",
   "text": "¿Y se besaron la primera noche?"
  },
  {
   "who": "Camila",
   "text": "¡Sí! Nos besamos cuando me llevó a mi casa."
  },
  {
   "who": "La madrina",
   "text": "¿Y cuánto tiempo después se volvieron a ver?"
  },
  {
   "who": "Camila",
   "text": "Nos escribimos toda la noche y, de hecho, nos vimos al día siguiente. ¡Fue amor a primera vista!"
  },
  {
   "who": "La madrina",
   "text": "¡Qué bonito! Estoy muy feliz por ti. ¿Y cuándo se pelearon por primera vez?"
  },
  {
   "who": "Camila",
   "text": "Ay, de eso no me acuerdo… Para ser honesta, casi nunca nos peleamos."
  }
 ],
 "leccion13": [
  {
   "scene": "Un agente inmobiliario recibe a un cliente en la inmobiliaria."
  },
  {
   "who": "El agente",
   "text": "Entonces usted busca un departamento de dos recámaras en el centro de Guadalajara. Y quiere comprar, ¿verdad?"
  },
  {
   "who": "El cliente",
   "text": "Sí, así es. Conozco muy bien el centro y me encanta. Necesitamos por lo menos 70 metros cuadrados, con una cocina abierta y, si es posible, mucha luz."
  },
  {
   "who": "El agente",
   "text": "Muy bien, voy a buscar… Entonces nos concentramos en el centro. Aquí tengo uno de dos recámaras de 79 metros cuadrados, en el tercer piso, pero… No, me equivoqué: este está en renta. A ver…"
  },
  {
   "who": "El cliente",
   "text": "Mi esposa va a llegar tarde, entonces vamos a empezar sin ella."
  },
  {
   "who": "El agente",
   "text": "Muy bien. Esta es la sala. Dejé la computadora en la oficina, entonces no sé exactamente cuánto mide, pero debe tener unos 20 metros cuadrados."
  },
  {
   "who": "El cliente",
   "text": "¡Ah, sí! Es más grande que la del departamento de ayer. Bueno, hay que imaginar todo sin los muebles, porque no me encanta el estilo…"
  },
  {
   "who": "El agente",
   "text": "Sí, es un estilo… especial. Aquí está la cocina. Es nueva y está completamente equipada."
  },
  {
   "who": "El cliente",
   "text": "¡Es mucho mejor que todo lo que vimos hasta ahora!"
  },
  {
   "who": "El agente",
   "text": "Hay dos recámaras. Esta es la más grande y esa es la más pequeña. Las dos tienen clóset. Aquí puede poner una cama matrimonial."
  },
  {
   "who": "El cliente",
   "text": "Muy bien. Y aquí, me imagino que está el baño, ¿no?"
  },
  {
   "who": "El agente",
   "text": "Exacto. Y también hay un medio baño al lado de la sala. Pero hay que decidir rápido, porque hay mucha gente interesada."
  },
  {
   "who": "El cliente",
   "text": "Sí, claro, entiendo. Voy a hablar con mi esposa y le marco más tarde."
  }
 ],
 "leccion14": [
  {
   "scene": "Don Rafael le cuenta su infancia a Tomás, su nieto."
  },
  {
   "who": "Don Rafael",
   "text": "Mira, Tomás, cuando yo era niño, vivía en el campo, en un pueblo cerca de Atlixco, con mis papás y mis hermanos."
  },
  {
   "who": "Tomás",
   "text": "¿Y te llevabas bien con tus hermanos, abuelo?"
  },
  {
   "who": "Don Rafael",
   "text": "¡Sí! Nos divertíamos mucho juntos. Y a veces también nos peleábamos, claro."
  },
  {
   "who": "Tomás",
   "text": "¿Y a qué se dedicaban tus papás?"
  },
  {
   "who": "Don Rafael",
   "text": "Mi papá era maestro y mi mamá no trabajaba fuera de la casa. ¡Tenía muchas cosas que hacer con cinco hijos!"
  },
  {
   "who": "Tomás",
   "text": "¿Ibas a la escuela en carro?"
  },
  {
   "who": "Don Rafael",
   "text": "¡No! Iba a la escuela a pie. Era muy diferente en esa época. Solo había un salón para toda la primaria."
  },
  {
   "who": "Tomás",
   "text": "¿En serio? ¡Qué locura! Y después de la escuela, ¿veías la tele?"
  },
  {
   "who": "Don Rafael",
   "text": "¡No! ¡No había tele en la casa! Salía de la escuela como a las cuatro y media y jugaba afuera con unos amigos hasta la noche. Después regresábamos a la casa, ¡porque teníamos miedo!"
  },
  {
   "who": "Tomás",
   "text": "¿Y en la noche qué hacían?"
  },
  {
   "who": "Don Rafael",
   "text": "Todas las noches cenábamos juntos. Después, mi mamá nos leía un cuento antes de dormir. ¡Y nosotros escogíamos el cuento!"
  },
  {
   "who": "Tomás",
   "text": "¡Qué bonito! Abuelo, ¿me lees un cuento esta noche?"
  },
  {
   "who": "Don Rafael",
   "text": "¡Claro! Pero esta vez, tú escoges."
  }
 ],
 "leccion16": [
  {
   "scene": "Andrés cuenta cómo empezó su viaje."
  },
  {
   "text": "Regresé tarde del trabajo. Estaba haciendo mi maleta cuando el taxista me llamó. Me dijo que me esperaba abajo. Salí del departamento a las cuatro y media de la tarde."
  },
  {
   "text": "Tomamos el Periférico y después el Circuito Interior para llegar al aeropuerto. Llovía y había mucho tráfico, entonces tardamos más de una hora en llegar al AICM, el aeropuerto de la Ciudad de México."
  },
  {
   "text": "Yo creía que mi vuelo salía de la Terminal 1, pero en realidad era la Terminal 2. Entonces tuvimos que ir a la otra terminal, ¡y después tuve que correr para llegar a tiempo a documentar mi maleta! La empleada de la aerolínea me dijo que tenía que apurarme porque había mucha gente en el filtro de seguridad."
  },
  {
   "text": "Llegué a la sala de abordar justo a tiempo: ¡una empleada cerraba la puerta! Afortunadamente, me vio y me dejó abordar. ¡Tuve mucha suerte!"
  }
 ],
 "leccion17": [
  {
   "scene": "Natalia, una alumna de último año de prepa, habla con su profesor de matemáticas en la escuela, después de los exámenes finales."
  },
  {
   "who": "El profesor",
   "text": "Hola, Natalia. Entonces, ¿cómo te fue?"
  },
  {
   "who": "Natalia",
   "text": "Perdón, profe, no lo oigo bien. ¡Hay mucho ruido en el pasillo!"
  },
  {
   "who": "El profesor",
   "text": "¿Y ahora? ¿Me oyes? Te pregunto cómo te fue en los exámenes."
  },
  {
   "who": "Natalia",
   "text": "Sí, ahora sí lo oigo. Creo que me fue bien. Sus clases fueron muy útiles. ¡Me fue muy bien en el examen de matemáticas!"
  },
  {
   "who": "El profesor",
   "text": "¡Perfecto! ¿Y el examen de física? ¿Quién era tu profesor? No me acuerdo."
  },
  {
   "who": "Natalia",
   "text": "El de física fue más difícil. Tenía clases con el profesor Rosales. ¿Usted lo conoce?"
  },
  {
   "who": "El profesor",
   "text": "Sí, lo conozco muy bien. ¡Lo conocí cuando estábamos en la universidad!"
  },
  {
   "who": "Natalia",
   "text": "¡Entonces conoce a Sofía Rosales, su hija! Estaba en mi salón este año."
  },
  {
   "who": "El profesor",
   "text": "Sí, ¡la conozco desde que nació! ¿Y el examen de filosofía, qué tal?"
  },
  {
   "who": "Natalia",
   "text": "¡Uf! Me pareció muy difícil. Es que soy muy mala para la filosofía. ¡Y para el inglés también!"
  },
  {
   "who": "El profesor",
   "text": "¡Claro que no! Estoy seguro de que te va a ir bien. ¿Y hablaste con Gabriel y Santiago? ¿Cómo les fue?"
  },
  {
   "who": "Natalia",
   "text": "Sí, los vi ayer. Estaban bastante optimistas, pero un poco nerviosos por el examen de admisión a la universidad, en dos semanas."
  },
  {
   "who": "El profesor",
   "text": "Bueno, me tengo que ir. Cruzo los dedos por los resultados. ¿Cuándo los vas a recibir?"
  },
  {
   "who": "Natalia",
   "text": "Los recibimos en julio."
  },
  {
   "who": "El profesor",
   "text": "¡Muy bien! Te deseo unas felices vacaciones, Natalia."
  },
  {
   "who": "Natalia",
   "text": "Muchas gracias, profe. ¡Igualmente!"
  }
 ],
 "leccion18": [
  {
   "scene": "Matt, el amigo australiano de Emilia, acaba de llegar a la Ciudad de México. La llama desde el aeropuerto: quiere saber cómo llegar a su departamento."
  },
  {
   "who": "Emilia",
   "text": "¿Bueno?"
  },
  {
   "who": "Matt",
   "text": "¡Hola, Emilia! Soy Matt. Ya estoy en el aeropuerto. ¿Cómo llego a tu departamento?"
  },
  {
   "who": "Emilia",
   "text": "¡Bienvenido a México! Es muy fácil. Toma el metro en la estación Terminal Aérea, línea 5, dirección Pantitlán. En Pantitlán, cambia a la línea 1 y bájate en Insurgentes."
  },
  {
   "who": "Matt",
   "text": "¡Espera, espera! Más despacio, por favor… Línea 5 hasta Pantitlán, después línea 1 hasta Insurgentes. ¿Y luego?"
  },
  {
   "who": "Emilia",
   "text": "Sal del metro y sigue derecho por la avenida Insurgentes. Camina dos cuadras y en la farmacia, dobla a la derecha. Mi edificio está enfrente de un parque."
  },
  {
   "who": "Matt",
   "text": "¿Y si me pierdo?"
  },
  {
   "who": "Emilia",
   "text": "¡No te preocupes! Pregúntale a alguien en la calle, o llámame."
  },
  {
   "who": "Matt",
   "text": "Bueno. ¿Y cuál es el número?"
  },
  {
   "who": "Emilia",
   "text": "Es el 25, un edificio azul. Toca el timbre del 4B y sube al cuarto piso. ¡Pero no tomes el elevador, está descompuesto!"
  },
  {
   "who": "Matt",
   "text": "¿Cuatro pisos con mi maleta? ¡Qué bien!"
  },
  {
   "who": "Emilia",
   "text": "¡Ja, ja! Así haces un poco de ejercicio. Ven rápido: te estoy preparando unos chilaquiles. ¡Y no te olvides de mis galletas australianas!"
  },
  {
   "who": "Matt",
   "text": "No te preocupes, ¡las tengo aquí! Nos vemos en una hora."
  }
 ],
 "leccion19": [
  {
   "scene": "Jessica habla con Mariana, una amiga mexicana, de lo que comió ayer y hoy."
  },
  {
   "who": "Mariana",
   "text": "Oye, Jessica, ¿qué desayunaste hoy?"
  },
  {
   "who": "Jessica",
   "text": "Normalmente desayuno algo dulce, pero decidí empezar a comer cosas saladas. Entonces me preparé un pan tostado con aguacate, limón, un huevo estrellado y un poco de sal."
  },
  {
   "who": "Mariana",
   "text": "¡Qué rico! ¿Y en la comida? ¿Qué comiste?"
  },
  {
   "who": "Jessica",
   "text": "De entrada, comí tomate, pepino y queso fresco. De plato fuerte, arroz, brócoli y carne que compré en la carnicería."
  },
  {
   "who": "Mariana",
   "text": "Ah, ok. A mí me encantaba la carne, pero soy vegetariana desde hace dos años. Ahora la reemplazo con proteína vegetal: frijoles, lentejas…"
  },
  {
   "who": "Jessica",
   "text": "Sí, te entiendo, pero a mí me gusta mucho la carne, ¡no puedo dejarla! Y también me encanta el pescado. Por cierto, anoche no salí. Cené en casa: pescado fresco con pasta. ¡Estaba delicioso!"
  },
  {
   "who": "Mariana",
   "text": "¡Qué bien! ¿Y de postre?"
  },
  {
   "who": "Jessica",
   "text": "De postre, solo comí fruta. ¡Ya no tenía mucha hambre!"
  },
  {
   "who": "Mariana",
   "text": "¡Me imagino! Y en general, ¿qué tomas cuando comes?"
  },
  {
   "who": "Jessica",
   "text": "Me encanta el vino, sobre todo con queso, pero de verdad trato de beber solo agua. Menos en la mañana: en el desayuno, tomo café o té."
  },
  {
   "who": "Mariana",
   "text": "¡Uy, con esta conversación, ya tengo hambre!"
  }
 ],
 "leccion2": [
  {
   "scene": "James habla con un amigo en un café."
  },
  {
   "who": "James",
   "text": "¡Hola! ¿Cómo estás?"
  },
  {
   "who": "Diego",
   "text": "Estoy muy bien, gracias. ¿Y tú, qué tal?"
  },
  {
   "who": "James",
   "text": "¡Bien! ¿Qué vas a hacer hoy?"
  },
  {
   "who": "Diego",
   "text": "Voy a ir a la playa con mi esposa y mis hijos."
  },
  {
   "who": "James",
   "text": "¡Qué bien! ¿Cómo está tu esposa?"
  },
  {
   "who": "Diego",
   "text": "En realidad, está muy cansada. Trabaja mucho. Pero mis hijos están muy bien."
  },
  {
   "who": "James",
   "text": "Yo también estoy un poco cansado… Y después de la playa, ¿qué van a hacer?"
  },
  {
   "who": "Diego",
   "text": "Creo que vamos a cenar en un restaurante."
  },
  {
   "who": "James",
   "text": "Muy bien. ¡Hasta pronto!"
  },
  {
   "who": "Diego",
   "text": "Adiós, ¡hasta pronto!"
  }
 ],
 "leccion20": [
  {
   "scene": "James y su amigo Mateo están de viaje en la Ciudad de México, la ciudad de Mateo. Comen en un restaurante."
  },
  {
   "who": "El mesero",
   "text": "Buenas tardes, bienvenidos. ¿Qué les traigo de tomar?"
  },
  {
   "who": "Mateo",
   "text": "Para mí, un agua de horchata, y para él, una limonada. ¿Nos da el menú?"
  },
  {
   "who": "El mesero",
   "text": "Claro, aquí tienen. ¿Ya saben qué van a pedir?"
  },
  {
   "who": "Mateo",
   "text": "Un momento, por favor. James, aquí sirven unos tacos al pastor muy buenos."
  },
  {
   "who": "James",
   "text": "¿Qué son los tacos \"al pastor\"?"
  },
  {
   "who": "Mateo",
   "text": "Son tacos de carne de puerco con piña. ¡Te van a encantar! Y no son caros: la orden cuesta noventa y cinco pesos."
  },
  {
   "who": "James",
   "text": "Jessica los pidió la última vez y le encantaron. Yo siempre pido enchiladas… ¡pero hoy voy a probar algo nuevo!"
  },
  {
   "who": "Mateo",
   "text": "¡Así me gusta! Joven, para mí, unos tacos al pastor con todo, por favor. ¿Y tú, James?"
  },
  {
   "who": "James",
   "text": "Para mí también, pero sin cebolla. Y quisiera una salsa no muy picante."
  },
  {
   "who": "Mateo",
   "text": "¡Ja, ja! A mi amigo no le gusta mucho el chile… ¡y a mí tampoco!"
  },
  {
   "who": "El mesero",
   "text": "No se preocupe, la salsa verde no es muy picante. ¿Algo más?"
  },
  {
   "who": "Mateo",
   "text": "No, gracias, es todo."
  },
  {
   "who": "James",
   "text": "¡Qué ricos estaban los tacos! Bueno, hoy pago yo."
  },
  {
   "who": "Mateo",
   "text": "¡Nada de eso! Tú eres mi invitado. ¡Para mí es un placer comer contigo!"
  },
  {
   "who": "James",
   "text": "Gracias. ¡Pero la próxima vez, en Los Ángeles, tú comes conmigo y pago yo!"
  },
  {
   "who": "Mateo",
   "text": "¡Trato hecho! Joven, ¿nos trae la cuenta, por favor?"
  },
  {
   "who": "El mesero",
   "text": "Claro. Son doscientos setenta pesos."
  },
  {
   "who": "Mateo",
   "text": "Aquí tiene trescientos. Quédese con el cambio."
  },
  {
   "who": "James",
   "text": "¿Treinta pesos de propina? ¡En Los Ángeles dejamos mucho más! ¡Y allá una orden de tacos cuesta casi lo mismo que toda esta comida!"
  }
 ],
 "leccion21": [
  {
   "scene": "James y Mateo hablan de su salud enfrente de la farmacia."
  },
  {
   "who": "James",
   "text": "¡Hola, Mateo! ¿Qué tal estos días?"
  },
  {
   "who": "Mateo",
   "text": "Nada mal, pero tengo que hacer más ejercicio. En Navidad subí un poco de peso."
  },
  {
   "who": "James",
   "text": "¿De verdad? Tú nunca has tenido problemas de peso. ¿Qué cambió?"
  },
  {
   "who": "Mateo",
   "text": "Pues trabajo mucho y no tengo tiempo para ir al gimnasio. Pero voy a ponerme a dieta para bajar estos kilos de más."
  },
  {
   "who": "James",
   "text": "Es una buena idea. Yo debería hacer lo mismo… pero todavía no he encontrado el tiempo para empezar."
  },
  {
   "who": "Mateo",
   "text": "¿Y tú? ¿Cómo estás de salud? Te ves un poco resfriado."
  },
  {
   "who": "James",
   "text": "Sí, estoy resfriado desde hace dos semanas y nada me ayuda. Me duele la cabeza y también la garganta. ¡Es muy molesto! ¿Alguna vez has tenido algo así?"
  },
  {
   "who": "Mateo",
   "text": "No, nunca he tenido eso… ¡Ah, no, espera! Sí, el año pasado. Pero al final era una bronquitis y me curé rápido con las medicinas. ¿Ya fuiste al médico?"
  },
  {
   "who": "James",
   "text": "No, todavía no. Llamé al consultorio, pero nadie contestó. Y tengo mucho trabajo… Bueno, ya me voy. ¡Voy a comprar algo para la garganta!"
  }
 ],
 "leccion22": [
  {
   "scene": "Andrés y Valeria imaginan lo que harían con mucho dinero."
  },
  {
   "who": "Andrés",
   "text": "Imagínate que un genio te concede un deseo. ¿Qué le pedirías?"
  },
  {
   "who": "Valeria",
   "text": "Mmm… creo que le pediría mucho dinero. ¡Así de simple!"
  },
  {
   "who": "Andrés",
   "text": "¿Ah, sí? ¡No es muy original! ¿Y qué harías con mucho dinero?"
  },
  {
   "who": "Valeria",
   "text": "Con mucho dinero, dejaría de trabajar, o trabajaría para una fundación. Así tendría más tiempo para estar con mis hijos."
  },
  {
   "who": "Andrés",
   "text": "Ya veo. ¿Y qué harían juntos?"
  },
  {
   "who": "Valeria",
   "text": "Podría recogerlos en la escuela a las dos, y tendríamos tiempo para pintar o para hacer cosas así."
  },
  {
   "who": "Andrés",
   "text": "Es verdad, ¡sería genial! Estarías menos estresada y podrías disfrutar más de la vida."
  },
  {
   "who": "Valeria",
   "text": "¿Y tú, Andrés? ¿Qué harías tú?"
  },
  {
   "who": "Andrés",
   "text": "¡Yo viajaría por todo el mundo, pero de vacaciones! Y le diría a mi jefe que nunca volvería."
  },
  {
   "who": "Valeria",
   "text": "¡Ja! Yo en tu lugar no le diría nada… ¡todavía!"
  }
 ],
 "leccion23": [
  {
   "scene": "James y Jessica cenan con Emilia y Hugo, una pareja mexicana. Hablan de sus viajes."
  },
  {
   "who": "Jessica",
   "text": "Hugo, Emilia, ¿alguna vez han ido a Europa?"
  },
  {
   "who": "Hugo",
   "text": "No, nunca hemos ido a Europa. En cambio, conocemos muy bien Estados Unidos: vamos casi cada año a visitar a mi hermana. Este año volvimos a Nueva York. ¿Ustedes conocen Nueva York?"
  },
  {
   "who": "Jessica",
   "text": "¡Claro! James es de Nueva York. Y nosotros tampoco conocemos Europa, ¡pero nos encantaría ir a España! ¿Y han estado en Denver?"
  },
  {
   "who": "Hugo",
   "text": "Yo sí, pero Emilia no. Fui por trabajo y me gustó mucho. Está muy cerca de las montañas Rocosas y hay caminatas increíbles. ¿Y a ustedes les gusta viajar?"
  },
  {
   "who": "Jessica",
   "text": "¡Sí, siempre nos ha encantado viajar! Íbamos a ir a Brasil el año pasado, pero perdimos los dos pasaportes: ¡el mío y el de James! Entonces vamos este verano."
  },
  {
   "who": "Hugo",
   "text": "¡Qué padre! ¿Ya compraron sus boletos?"
  },
  {
   "who": "Jessica",
   "text": "No, todavía no los hemos comprado. La última vez que vi la página, estaban muy caros."
  },
  {
   "who": "Hugo",
   "text": "Ah, ok. Si quieren, les recomiendo una página muy buena para comprar boletos de avión baratos. Se llama vuelosbaratos.com. Deberían echarle un ojo."
  },
  {
   "who": "Jessica",
   "text": "Espera, no entendí bien. ¿Puedes repetir el nombre, por favor? ¿Cómo se escribe?"
  },
  {
   "who": "Hugo",
   "text": "Vuelos baratos, todo junto, punto com: ve chica, u, e, ele, o, ese, be grande, a, erre, a, te, o, ese… ¡punto com!"
  }
 ],
 "leccion3": [
  {
   "title": "En la librería"
  },
  {
   "who": "Lucía",
   "text": "Buenos días. Busco un regalo para mi papá. ¿Tienen libros sobre la historia de México?"
  },
  {
   "who": "El vendedor",
   "text": "Sí, tenemos un libro muy bonito sobre la Revolución Mexicana."
  },
  {
   "who": "Lucía",
   "text": "Muchas gracias. ¿Y tienen algo sobre la Ciudad de México?"
  },
  {
   "who": "El vendedor",
   "text": "Sí, tengo un libro nuevo sobre el Palacio de Bellas Artes. Está en aquella mesa."
  },
  {
   "who": "Lucía",
   "text": "Muy bien. También busco un regalo para mi hermana. ¿Tiene alguna idea? Tiene diecisiete años."
  },
  {
   "who": "El vendedor",
   "text": "Sí, claro. Vaya al segundo piso, tienen descuentos en los audífonos inalámbricos."
  },
  {
   "who": "Lucía",
   "text": "Muchas gracias. Voy a llevar estos dos libros y los audífonos, por favor. ¡Que tenga un buen día!"
  }
 ],
 "leccion4": [
  {
   "scene": "James le enseña una foto de su familia a Mateo, su amigo mexicano."
  },
  {
   "who": "James",
   "text": "Mira, Mateo, ¡esta es mi familia! A la izquierda está mi papá y al lado está mi mamá."
  },
  {
   "who": "Mateo",
   "text": "Ah, ok. ¿Dónde viven tus papás?"
  },
  {
   "who": "James",
   "text": "Mis papás viven en Montauk, cerca de Nueva York. No trabajan, ahora están jubilados."
  },
  {
   "who": "Mateo",
   "text": "¿Y qué les gusta hacer?"
  },
  {
   "who": "James",
   "text": "A mi mamá le gusta caminar y a mi papá le gusta andar en bicicleta. Y muchas veces ven la tele juntos."
  },
  {
   "who": "Mateo",
   "text": "¡Ya veo! ¿Y el de la derecha es tu hermano?"
  },
  {
   "who": "James",
   "text": "Sí, es mi hermano John con su esposa y sus dos hijos. La niña se llama Emma y el niño se llama Lucas."
  },
  {
   "who": "Mateo",
   "text": "¡Qué bien! ¿Y cómo se llama la esposa de tu hermano?"
  },
  {
   "who": "James",
   "text": "Se llama Natalie. Es muy simpática. Tiene treinta y cinco años y es enfermera. Le encanta surfear e invitar a toda la familia a comer carne asada."
  }
 ],
 "leccion5": [
  {
   "scene": "Mike es un turista estadounidense en la Ciudad de México."
  },
  {
   "who": "Mike",
   "text": "Disculpe, señor, estoy perdido. ¿Me puede ayudar, por favor?"
  },
  {
   "who": "Un señor",
   "text": "No vivo en la Ciudad de México, pero ¡puedo intentarlo! ¿Adónde quiere ir?"
  },
  {
   "who": "Mike",
   "text": "Quiero ir a la Catedral Metropolitana."
  },
  {
   "who": "El señor",
   "text": "Lo siento, no sé dónde está. Creo que puede preguntarle a la señora del puesto de periódicos."
  },
  {
   "who": "Mike",
   "text": "Es una buena idea. Gracias y que tenga un buen día."
  },
  {
   "who": "Mike",
   "text": "Buenos días, señora. Busco la Catedral Metropolitana. ¿Me puede ayudar?"
  },
  {
   "who": "La señora",
   "text": "¡Sí, claro! Mire, allá hay una estación de metro, la estación Hidalgo. Usted toma la línea 2, se baja en Zócalo y va a ver la catedral."
  },
  {
   "who": "Mike",
   "text": "Disculpe, no hablo muy bien español. ¿Puede repetir más despacio, por favor?"
  },
  {
   "who": "La señora",
   "text": "Sí, claro: toma el metro, línea 2, y se baja en Zócalo."
  },
  {
   "who": "Mike",
   "text": "No me gusta el metro. Prefiero caminar."
  },
  {
   "who": "La señora",
   "text": "Ah, bueno. Entonces aquí tiene un mapa de la ciudad. ¡Buena suerte!"
  }
 ],
 "leccion6": [
  {
   "scene": "James y Mateo, su amigo mexicano, hacen planes para el fin de semana."
  },
  {
   "who": "James",
   "text": "Mateo, ¿qué vas a hacer el sábado?"
  },
  {
   "who": "Mateo",
   "text": "No sé. ¿Qué te gusta hacer los fines de semana?"
  },
  {
   "who": "James",
   "text": "Me gusta mucho andar en bicicleta. Los sábados, Jessica y yo vamos al parque."
  },
  {
   "who": "Mateo",
   "text": "¡A mí también me gusta andar en bicicleta! ¿Vamos juntos?"
  },
  {
   "who": "James",
   "text": "¡Claro! Y después podemos comer algo. ¿Te gustan los tacos?"
  },
  {
   "who": "Mateo",
   "text": "¡Me encantan! Pero no me gusta la comida muy picante."
  },
  {
   "who": "James",
   "text": "A mí tampoco. Y a Jessica no le gusta nada el chile."
  },
  {
   "who": "Mateo",
   "text": "¿Y el domingo? A mi esposa y a mí nos encanta ir al mercado."
  },
  {
   "who": "James",
   "text": "A nosotros no nos gustan mucho los mercados… hay mucha gente. Pero nos gusta el cine."
  },
  {
   "who": "Mateo",
   "text": "¡A mí también! Entonces, el sábado, bicicleta y tacos, y el domingo, cine."
  },
  {
   "who": "James",
   "text": "¡Perfecto! Hasta el sábado."
  }
 ],
 "leccion7-1": [
  {
   "title": "Andrés"
  },
  {
   "text": "Edad: 28 años\nCiudad: Ciudad de México\nProfesión: periodista"
  },
  {
   "question": "¿Cómo es físicamente?"
  },
  {
   "text": "Tiene el pelo castaño y los ojos cafés. Es alto. En la foto, lleva una camisa azul."
  },
  {
   "question": "¿Cómo es su carácter?"
  },
  {
   "text": "Es muy simpático y le encanta reír. Siempre está de buen humor. Es sociable y generoso. Tiene muchos amigos y siempre está listo para ayudarlos."
  },
  {
   "question": "¿A qué se dedica?"
  },
  {
   "text": "Es periodista en un canal de televisión. Viaja mucho por el mundo por su trabajo. Hace documentales culturales."
  },
  {
   "question": "¿Qué le gusta hacer?"
  },
  {
   "text": "Le encanta viajar, conocer nuevos países, aprender cosas nuevas, hacer deporte, pasar tiempo con sus amigos y hacer bromas."
  },
  {
   "question": "¿Qué no le gusta?"
  },
  {
   "text": "No le gusta el frío y no le gustan las verduras. ¡Y no le gusta la gente egoísta!"
  }
 ],
 "leccion7-2": [
  {
   "title": "Valeria"
  },
  {
   "text": "Edad: 45 años\nCiudad: Monterrey\nProfesión: médica"
  },
  {
   "question": "¿Cómo es físicamente?"
  },
  {
   "text": "Es rubia y tiene los ojos azules. Mide un metro sesenta y cinco. En la foto, lleva una bata blanca."
  },
  {
   "question": "¿Cómo es su carácter?"
  },
  {
   "text": "Es amable, muy dulce y también un poco tímida. Es muy inteligente y trabajadora."
  },
  {
   "question": "¿A qué se dedica?"
  },
  {
   "text": "Es médica. Trabaja los lunes y los martes en el hospital, y los otros días en su consultorio. Le encanta su trabajo y le encantan sus pacientes."
  },
  {
   "question": "¿Qué le gusta hacer?"
  },
  {
   "text": "Le gusta pasar tiempo con su esposo y sus tres hijos. Cuando no trabaja, le gusta quedarse en casa para leer o para cocinar una buena comida para toda la familia."
  },
  {
   "question": "¿Qué no le gusta?"
  },
  {
   "text": "No le gusta hacer deporte, ¡es muy cansado!"
  }
 ],
 "leccion7-3": [
  {
   "title": "Don Rafael"
  },
  {
   "text": "Edad: 67 años\nCiudad: Puebla\nProfesión: jubilado"
  },
  {
   "question": "¿Cómo es físicamente?"
  },
  {
   "text": "Tiene el pelo blanco y los ojos azules. En la foto, lleva lentes y una camisa verde. A veces, le gusta llevar pantalones y zapatos rosas."
  },
  {
   "question": "¿Cómo es su carácter?"
  },
  {
   "text": "Casi siempre es muy divertido y le encanta hacer bromas, pero también cambia mucho de humor. Cuando está de mal humor, prefiere estar solo."
  },
  {
   "question": "¿A qué se dedica?"
  },
  {
   "text": "Don Rafael está jubilado, entonces tiene mucho tiempo libre, pero es un abuelo muy activo. Tiene seis nietos."
  },
  {
   "question": "¿Qué le gusta hacer?"
  },
  {
   "text": "Le gusta arreglar cosas en la casa, trabajar en el jardín y cuidar a sus nietos."
  },
  {
   "question": "¿Qué no le gusta?"
  },
  {
   "text": "No le gusta la política y no le gusta hacer los quehaceres de la casa."
  }
 ],
 "leccion8": [
  {
   "title": "El día de Andrés"
  },
  {
   "who": "Valeria",
   "text": "¿Pasaste un buen día ayer?"
  },
  {
   "who": "Andrés",
   "text": "Sí, ayer pasé un día muy bueno."
  },
  {
   "who": "Valeria",
   "text": "¿Qué hiciste ayer en la mañana?"
  },
  {
   "who": "Andrés",
   "text": "En la mañana, me levanté a las siete, desayuné y escuché la radio. Después, me bañé y fui al trabajo."
  },
  {
   "who": "Valeria",
   "text": "¿Qué hiciste al mediodía?"
  },
  {
   "who": "Andrés",
   "text": "Al mediodía, comí con unos compañeros en un restaurante cerca del trabajo. Comí una pizza muy buena y después regresamos a trabajar."
  },
  {
   "who": "Valeria",
   "text": "¿Y en la tarde?"
  },
  {
   "who": "Andrés",
   "text": "En la tarde, tuve una reunión con mi jefe. Salí del trabajo a las seis."
  },
  {
   "who": "Valeria",
   "text": "¿Qué hiciste ayer en la noche?"
  },
  {
   "who": "Andrés",
   "text": "En la noche, fui al gimnasio y después regresé a casa. Cociné con mi esposa y cenamos juntos. Después vimos la tele y a las once nos acostamos."
  }
 ],
 "leccion9": [
  {
   "scene": "Andrés entrevista a Mark y a Sarah para un programa de televisión."
  },
  {
   "who": "Andrés",
   "text": "Mark y Sarah, ustedes son estadounidenses y hablan español con fluidez. ¿Por qué empezaron a aprender?"
  },
  {
   "who": "Mark",
   "text": "Fuimos de vacaciones a México en 2012 y nos encantó el país y la cultura. Entonces, cuando regresamos a Los Ángeles, decidimos aprender el idioma."
  },
  {
   "who": "Andrés",
   "text": "¿Y cómo lo hicieron?"
  },
  {
   "who": "Mark",
   "text": "Encontramos un profesor particular en Los Ángeles y empezamos a tomar clases dos veces por semana."
  },
  {
   "who": "Andrés",
   "text": "¿Fue difícil?"
  },
  {
   "who": "Sarah",
   "text": "Al principio fue un poco difícil, pero con el tiempo fue más fácil. ¡Pero trabajamos mucho para llegar a este nivel!"
  },
  {
   "who": "Andrés",
   "text": "¿Y después volvieron a México?"
  },
  {
   "who": "Sarah",
   "text": "¡Sí, muchas veces! La primera vez que regresamos, en 2015, fue difícil, pero pudimos comunicarnos un poco. Esta vez vinimos con nuestros hijos y estuvimos dos semanas en Oaxaca. ¡Y ahora todo es muy fácil! Es genial ver el progreso."
  },
  {
   "who": "Andrés",
   "text": "¡Es impresionante! ¡Felicidades!"
  }
 ]
};

export default LESSON_TEXTS;
