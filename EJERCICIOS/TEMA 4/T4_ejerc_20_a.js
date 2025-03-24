/*Ejercicio 20.- Suponiendo un array de array, se pide unirlos o concatenarlos
 en un único array. */

let arrayDeArrays = [
    ["Magnus","Ámdeath","45.999.444X"],
    ["Seth","Unknown","44.922.123S"],
    ["Pickles","Unknown","X5.112.674P"]
    ];
    
    
    
console.log(arrayDeArrays.reduce((nuevoArray, persona) => nuevoArray.concat(persona)));