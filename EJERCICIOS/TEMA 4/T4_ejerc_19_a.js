/*Ejercicio 19.- Suponiendo el anterior array dethklok, se pide, usando filter():
➢ Un nuevo array con todos aquellos elementos con más de 6 caracteres.
➢ Un nuevo array con todos aquellos elementos que empiecen por M o N. */

var dethklok = ["Nathan", "Toki", "Pickles", "Skwisgaar", "Murderface"];

var nuevoDethklokA = dethklok.filter(person => person.length > 6);

console.log(nuevoDethklokA);

var nuevoDethklokB = dethklok.filter(otraPersona => otraPersona.startsWith("M") || otraPersona.startsWith("N"));

console.log(nuevoDethklokB);