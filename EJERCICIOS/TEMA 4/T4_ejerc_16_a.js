/*VI.4.1 Método map()
Este método recorre un array aplicando una función callback a cada elemento
 teniendo en cuenta que el array original no será modificado.
=========================================================================== 
 Ejercicio 16.- Suponiendo el siguiente array de objetos recogido de un archivo json:
Se pide usar el método map para recorrer el array y, si el baremo es igual o superior
 a la media de los cuatro baremos, cambiar el valor de la propiedad concurso a ADMITIDO.
  Mostrar el nuevo valor del array.*/

  let arrayMap = [
    {nombre: "Magnus", apellido1: "Ámdeath", baremo: 8.2, concurso: "no admitido"},
    {nombre: "Seth", apellido1: "Wasted", baremo: 3.1, concurso: "no admitido"},
    {nombre: "Pickles", apellido1: "Wasted", baremo: 6, concurso: "no admitido"},
    {nombre: "William", apellido1: "Murderface", baremo: 9.1, concurso: "no admitido"}
];

// Calcular media primero
let suma = 0;
for (let persona of arrayMap) {
    suma += persona.baremo;
}
let media = suma / arrayMap.length;

// Usar map para crear un nuevo array con los concursos actualizados
let admitido = arrayMap.map(persona => {
    return {
        ...persona, // mantenemos el resto de propiedades
        concurso: persona.baremo >= media ? "ADMITIDO" : persona.concurso
    };
});

console.log(admitido);