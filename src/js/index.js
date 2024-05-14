// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

function wordToUpperLower(word) {
  if (word.length > 5) {
    console.log(word.toUpperCase());
  } else console.log(word.toLowerCase());
}
wordToUpperLower('coches');

function wordToUpperLowerTernary(word) {
  word.length > 5 ? console.log(word.toUpperCase()) : console.log(word.toLowerCase());
}

wordToUpperLowerTernary('perro');
wordToUpperLowerTernary('ordenador');

function verbs(verb1, verb2) {
  if (verb1.endsWith('ar') && verb2.endsWith('ar')) {
    console.log(`el verbo ${verb1} es de la primera conjugacion y el verbo ${verb2} es de la primera conjugacion`);
  } else if (verb1.endsWith('ar') && verb2.endsWith('er')) {
    console.log(`el verbo ${verb1} es de la primera conjugacion y el verbo ${verb2} es de la segunda conjugacion`);
  } else if (verb1.endsWith('ar') && verb2.endsWith('ir')) {
    console.log(`el verbo ${verb1} es de la primera conjugacion y el verbo ${verb2} es de la tercera conjugacion`);
  } else if (verb1.endsWith('er') && verb2.endsWith('er')) {
    console.log(`el verbo ${verb1} es de la sergunda conjugacion y el verbo ${verb2} es de la segunda conjugacion`);
  } else if (verb1.endsWith('er') && verb2.endsWith('ar')) {
    console.log(`el verbo ${verb1} es de la segunda conjugacion y el verbo ${verb2} es de la primera conjugacion`);
  } else if (verb1.endsWith('er') && verb2.endsWith('ir')) {
    console.log(`el verbo ${verb1} es de la segunda conjugacion y el verbo ${verb2} es de la tercera conjugacion`);
  } else if (verb1.endsWith('ir') && verb2.endsWith('ar')) {
    console.log(`el verbo ${verb1} es de la tercera conjugacion y el verbo ${verb2} es de la primera conjugacion`);
  } else if (verb1.endsWith('ir') && verb2.endsWith('er')) {
    console.log(`el verbo ${verb1} es de la tercera conjugacion y el verbo ${verb2} es de la segunda conjugacion`);
  } else if (verb1.endsWith('ir') && verb2.endsWith('ir')) {
    console.log(`el verbo ${verb1} es de la tercera conjugacion y el verbo ${verb2} es de la tercera conjugacion`);
  }
}

verbs('andar', 'comer');
verbs('reir', 'pensar');
verbs('servir', 'cantar');



//forma abreviada


/* function conjugationType(verb) {
  if (verb.endsWith('ar')) return 'primera';
  if (verb.endsWith('er')) return 'segunda';
  if (verb.endsWith('ir')) return 'tercera';
}

function verbs(verb1, verb2) {
  var conjugation1 = conjugationType(verb1);
  var conjugation2 = conjugationType(verb2);
  console.log(`El verbo ${verb1} es de la ${conjugation1} conjugación y el verbo ${verb2} es de la ${conjugation2} conjugación`);
}


verbs('andar', 'comer');
verbs('reir', 'pensar');
verbs('servir', 'cantar'); */



function generateWord(word1, word2, word3) {
  // Tomar las dos primeras letras de cada palabra usando charAt
  var letters1 = word1.charAt(3) + word1.charAt(2);
  var letters2 = word2.charAt(1) + word2.charAt(3);
  var letters3 = word3.charAt(2) + word3.charAt(1);
  
  // Concatenar las letras para formar la nueva palabra
  var newWord = letters1 + letters2 + letters3;
  
  return newWord;
}

// Ejemplo de uso:
var palabraGenerada = generateWord("Mesa", "Silla", "Cabeza");
console.log(palabraGenerada);





function separarEmail(email) {
  // Encontrar la posición del símbolo '@'
  var indiceArroba = email.indexOf('@');
  
  // Obtener el nombre de usuario usando substring
  var usuario = email.substring(0, indiceArroba);
  
  // Obtener el dominio usando substring
  var dominio = email.substring(indiceArroba + 1);
  
  // Imprimir el nombre de usuario y el dominio
  console.log(`El usuario es ${usuario}`);
  console.log(`El dominio es ${dominio}`);
}

// Ejemplo de uso:
separarEmail("dorian@gmail.com");




function letraAleatoria(palabra) {
  // Obtener un índice aleatorio dentro del rango de la longitud de la palabra
  var indiceAleatorio = Math.random() * palabra.length;
  
  // Obtener la letra en el índice aleatorio
  var letra = palabra.charAt(indiceAleatorio);
  
  // Imprimir la letra aleatoria por consola
  console.log(`Letra aleatoria de "${palabra}": ${letra}`);
}

// Ejemplo de uso:
letraAleatoria("elefante");


function intercalarMayusculasMinusculas(palabra) {
  var letra1 = palabra.charAt(0).toUpperCase();
  var letra2 = palabra.charAt(1).toLowerCase();
  var letra3 = palabra.charAt(2).toUpperCase();
  var letra4 = palabra.charAt(3).toLowerCase();
  var letra5 = palabra.charAt(4).toUpperCase();
  
  return letra1 + letra2 + letra3 + letra4 + letra5;
}

// Ejemplo de uso:
var palabraIntercalada = intercalarMayusculasMinusculas("coche");
console.log(palabraIntercalada);



function generarNombreUsuario(nombre, apellido) {
  // Obtener la primera letra del nombre
  var primeraLetraNombre = nombre.charAt(0).toUpperCase();
  
  // Obtener el apellido completo
  var apellidoCompleto = apellido.toLowerCase();
  
  // Generar un número aleatorio del 1 al 100
  var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  
  // Combinar la primera letra del nombre, el apellido y el número aleatorio
  var nombreUsuario = primeraLetraNombre + apellidoCompleto + numeroAleatorio;
  
  return nombreUsuario;
}

// Ejemplo de uso:
var nombreUsuarioGenerado = generarNombreUsuario("Ramon", "Garcia");
console.log(nombreUsuarioGenerado); // Output: JPerez87
