   cadenaJSON = `{
            "personajes": [
                {
                "nombre": "Eric",
                "apellidos": "Cartman",
                "profesión": "Estudiante",
                "edad": 13
                },
                {
                "nombre": "Stan",
                "apellidos": "Marsh",
                "profesión": "Estudiante",
                "edad": 9
                },
                {
                "nombre": "Kyle",
                "apellidos": "Broflovski",
                "profesión": "Estudiante",
                "edad": 9
                },
                {
                "nombre": "Kenny",
                "apellidos": "McCormick",
                "profesión": "Estudiante",
                "edad": 13
                },
                {
                "nombre": "Butters",
                "apellidos": "Stotch",
                "profesión": "Estudiante",
                "edad": 9
                },
                {
                "nombre": "Wendy",
                "apellidos": "Testaburger",
                "profesión": "Estudiante",
                "edad": 12
                },
                {
                "nombre": "Randy",
                "apellidos": "Marsh",
                "profesión": "Geólogo",
                "edad": 45
                },
                {
                "nombre": "Sharon",
                "apellidos": "Marsh",
                "profesión": "Recepcionista",
                "edad": 42
                },
                {
                "nombre": "Chef",
                "apellidos": "",
                "profesión": "Cocinero",
                "edad": 45
                },
                {
                "nombre": "Mr. Garrison",
                "apellidos": "",
                "profesión": "Maestro",
                "edad": 50
                },
                {
                "nombre": "Mr. Mackey",
                "apellidos": "",
                "profesión": "Consejero escolar",
                "edad": 45
                },
                {
                "nombre": "Ms. Choksondik",
                "apellidos": "",
                "profesión": "Maestra",
                "edad": 40
                },
                {
                "nombre": "Tweek",
                "apellidos": "Tweak",
                "profesión": "Estudiante",
                "edad": 9
                },
                {
                "nombre": "Craig",
                "apellidos": "Tucker",
                "profesión": "Estudiante",
                "edad": 15
                },
                {
                "nombre": "Token",
                "apellidos": "Black",
                "profesión": "Estudiante",
                "edad": 12
                },
                {
                "nombre": "Bebe",
                "apellidos": "Stevens",
                "profesión": "Estudiante",
                "edad": 9
                },
                {
                "nombre": "Clyde",
                "apellidos": "Donovan",
                "profesión": "Estudiante",
                "edad": 12
                },
                {
                "nombre": "Timmy",
                "apellidos": "Burch",
                "profesión": "Estudiante",
                "edad": 9
                },
                {
                "nombre": "Jimmy",
                "apellidos": "Valmer",
                "profesión": "Estudiante",
                "edad": 9
                },
                {
                "nombre": "Heidi",
                "apellidos": "Turner",
                "profesión": "Estudiante",
                "edad": 12
                }
            ]
            }`;

let objetoSouthPark = JSON.parse(cadenaJSON);

console.log(objetoSouthPark.personajes);            

//1.- Mostrar por pantalla, en un formato adecuado, la información del objeto.
console.log(objetoSouthPark);

//2.- Mostrar por pantalla, en un formato adecuado, el promedio de edad.
 let sumaEdad = objetoSouthPark.personajes.reduce((acumulador, personaje) =>
    acumulador + personaje.edad, 0
);

let numeroPersonajes = objetoSouthPark.personajes.length;

let promedio = sumaEdad / numeroPersonajes;

console.log("El promedio de la edad es " + promedio);

/*3.- Obtener una nueva lista (o array, si lo prefieres) donde se nos muestre
 únicamente el nombre y la profesión.
  Mostrar por pantalla, en un formato adecuado, dicha lista.*/
  
  let nuevoArray = objetoSouthPark.personajes.map(personaje => {
    return {
      nombre: personaje.nombre,
      profesion: personaje["profesión"]
    };
  });
  
  console.log(nuevoArray);
  
/*4.- Mostrar por pantalla, en un formato adecuado, aquellos estudiantes con más de 11 años. */

 let arrayMasdeOnce = objetoSouthPark.personajes.filter(personaje => personaje["edad"] > 11);

console.log(arrayMasdeOnce);

