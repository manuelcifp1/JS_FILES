/*Se pide usar el método forEach() para recorrer el array y mostrar sus datos con un formato adecuado.*/

let personajes = [
    {nombre: "Magnus", apellido1: "Ámdeath", DNI: "45.999.444X"},
    {nombre: "Seth", apellido1: "Unknown", DNI: "44.922.123S"},
    {nombre: "Pickles", apellido1: "Unknown", DNI: "X5.112.674P"}
];


personajes.forEach(personaje => {
    console.log(`Nombre: ${personaje.nombre}, Apellido: ${personaje.apellido1}, DNI: ${personaje.DNI}`);        
    
});
