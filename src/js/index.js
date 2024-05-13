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
