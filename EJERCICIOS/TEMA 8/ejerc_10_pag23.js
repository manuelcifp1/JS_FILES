/*Ejercicio 10.- Comprobemos que el anterior código funciona correctamente.
Modifica el método then para hacer que las promesas aparezcan por pantalla en el formato:

Mensaje de la promesa nºx: mensajePromesa. */

let promesa1 = Promise.resolve("Estoy resuelta");

let promesa2 = new Promise((resolver) => {
  setTimeout(() => { resolver("Resuelvo en 3s") }, 3000);
});

let promesa3 = new Promise((resolver) => {
  setTimeout(() => { resolver("Resuelvo en 6s") }, 6000);
});

let promesaConjunta = Promise.all([promesa1, promesa2, promesa3]);

console.log("Empezando");

promesaConjunta.then((resultados) => {
  console.log(`Mensaje de la promesa nº1: ${resultados[0]}`);
  console.log(`Mensaje de la promesa nº2: ${resultados[1]}`);
  console.log(`Mensaje de la promesa nº3: ${resultados[2]}`);
});