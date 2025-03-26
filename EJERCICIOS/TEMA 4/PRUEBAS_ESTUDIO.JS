/*Dado un array de alumnos con una nota en base 10, usa .map() para convertir las notas
 a porcentaje (0–100) y agregar una propiedad estado que diga "APROBADO" si la nota
  es mayor o igual a 5, o "SUSPENSO" en caso contrario*/

  let alumnos = [
    {nombre: "Clara", nota: 7.5},
    {nombre: "Luis", nota: 4.3},
    {nombre: "María", nota: 9.1},
    {nombre: "Raúl", nota: 2.8}
  ];
  
  let nuevoAlumnos = alumnos.map(alumno => {
    return {
        ...alumno,
        nota: nota * 10,
        estado: nota >= 5 ? "APROBADO" : "SUSPENSO"
    };
  }    
);

console.log(nuevoAlumnos);








    








