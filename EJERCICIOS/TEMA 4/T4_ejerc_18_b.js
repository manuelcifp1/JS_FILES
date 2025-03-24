/*🧩 Ejercicio 1: Edad mínima para votar
📘 Tenés un array de personas con sus edades. Usa .every() para comprobar
 si todos son mayores de edad (18 años o más). */

 let personas = [
    { nombre: "Lucía", edad: 22 },
    { nombre: "Marco", edad: 19 },
    { nombre: "Carmen", edad: 17 }
  ];

const mayorDeEdad = personas.every(persona => 
    persona.edad >= 18 //Pregunta para la IA: ¿por qué no se puede poner ; al final de esta línea?
);

console.log(mayorDeEdad ? "Todos son mayor de edad." : "Alguno no es mayor de edad.");