/*🧩 Ejercicio 1: Filtrar edades mayores de 30
📘 Dado un array de personas con nombre y edad, usa .filter() para crear un nuevo array
 con solo las personas mayores de 30 años. */
 let personas = [
    { nombre: "Clara", edad: 28 },
    { nombre: "Jorge", edad: 35 },
    { nombre: "Ana", edad: 42 },
    { nombre: "Luis", edad: 22 }
  ];

  
let nuevasPersonas = personas.filter(persona => persona.edad > 30);

console.log(nuevasPersonas);