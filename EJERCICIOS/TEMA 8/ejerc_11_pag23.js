/*Ejercicio 11.- Una vez hecho, añadamos una respuesta ante un error
 en cualquiera de las tres promesas.*/

let promesa1 = Promise.resolve("Estoy resuelta");

let promesa2 = new Promise((resolver, rechazar) => {
  setTimeout(() => {
    rechazar("Fallo en la promesa 2");
  }, 3000);
});

let promesa3 = new Promise((resolver) => {
  setTimeout(() => {
     resolver("Resuelvo en 6s") }, 6000);
});

let promesaConjunta = Promise.all([promesa1, promesa2, promesa3]);

console.log("Empezando");

promesaConjunta.then((resultados) => {
  console.log(`Mensaje de la promesa nº1: ${resultados[0]}`);
  console.log(`Mensaje de la promesa nº2: ${resultados[1]}`);
  console.log(`Mensaje de la promesa nº3: ${resultados[2]}`);
}).catch(error =>{
    console.log("Ha habido un error: ", error);
});