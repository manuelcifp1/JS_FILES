/*Ejercicio 18.- Suponiendo un array , se pide:
➢ ¿Todos los elementos son cadenas?
➢ Prueba a sustituir algún elemento por un número.
➢ ¿Todos los elementos tienen menos de 10 caracteres?
➢ ¿Y más de 5? */

let munecos = ["Nathan", "Toki", "Pickles", "Skwisgaar", "Murderface"];

//Si son cadenas:
console.log(munecos.every(muneco => {
    return typeof muneco === "string";
}));

//Sustituir algún elemento por un número:
munecos[2] = 69;


console.log(munecos);

//Comprobar si todos tienen menos de 10 chars.
const menosDe10 = munecos.every(muneco => typeof muneco === "string" && muneco.length < 10);
console.log(menosDe10 ? "Todos tienen menos de 10 caracteres." : "Algún elemento tiene 10 o más.");

//Y más de 5?
const masDe5 = munecos.every(muneco => typeof muneco === "string" && muneco.length > 5);
console.log(masDe5 ? "Todos tienen más de 5 caracteres." : "Algún elemento tiene 5 o menos.");