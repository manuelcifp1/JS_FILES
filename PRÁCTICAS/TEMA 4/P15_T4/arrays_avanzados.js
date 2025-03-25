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

let objetoSouthPark =JSON.parse(cadenaJSON);

//1.- Mostrar por pantalla, en un formato adecuado, la información del objeto.
/*Usamos un forEach(), porque lo único que hay que hacer es recorrer el array y realizar la acción console.log sobre cada elemento,
sin crear un nuevo array.*/
/*No asignamos lo siguiente a una variable, eso se hace en el caso que estés creando algo nuevo (un array, un resultado).
Atención al detalle de poner "profesión" entre corchetes. Es necesario porque lleva acento.*/
objetoSouthPark.personajes.forEach((personaje) =>
  //Sacamos en pantalla en un formato adecuado. 
  console.log(`Nombre: ${personaje.nombre}, Apellidos: ${personaje.apellidos}, Profesión: ${personaje["profesión"]}, Edad: ${personaje.edad}.<br>`)
);

//2.-Mostrar por pantalla, en un formato adecuado, el promedio de edad.
/*Usamos reduce(), porque a acumular una cantidad tras hacer una operación sobre algún elemento del array.
Asignamos todo a una variable con el resultado de esa acumulación.*/
var sumaEdad = objetoSouthPark.personajes.reduce((acumulador, personaje ) =>
  acumulador + personaje.edad, 0
);
//Averiguamos la cantidad de elementos del array
let cantidadPersonajes = objetoSouthPark.personajes.length;
//Dividimos el total de edades entre la cantidad de elementos del array
let promedioEdad = sumaEdad / cantidadPersonajes;
//Sacamos en pantalla en un formato adecuado.
console.log("El promedio de edad de los personajes de SouthPark es " + promedioEdad);

/*3.-Obtener una nueva lista (o array, si lo prefieres) donde se nos muestre únicamente el nombre y la profesión.
Mostrar por pantalla, en un formato adecuado, dicha lista.*/ 
/*Usamos map porque puede devolver un array */ 
var arrayNombreProfesion = objetoSouthPark.personajes.map((personaje) =>
({
  "nombre": personaje.nombre,
  "profesión": personaje["profesión"]
}));
//Sacamos en pantalla en un formato adecuado.
arrayNombreProfesion.forEach((personaje) =>   
  console.log(`Nombre: ${personaje.nombre}, Profesión: ${personaje["profesión"]}.<br>`)
);

//4.-Mostrar por pantalla, en un formato adecuado, aquellos estudiantes con más de 11 años.
//Creamos un nuevo array con filter(), filtrando a los mayores de 11.
const mayoresDeOnce = objetoSouthPark.personajes.filter((personaje) => 
  personaje.edad > 11
);
//Sacamos en pantalla en un formato adecuado.
mayoresDeOnce.forEach((personaje) =>   
  console.log(`Nombre: ${personaje.nombre}, Apellidos: ${personaje.apellidos}, Profesión: ${personaje["profesión"]}, Edad: ${personaje.edad}.<br>`)
);




