let cadena= "estoy muy bien gracias";

function cogeArray(cadena) {
    //convertimos la cadena en array dividiendo por palabras
    let resultado= cadena.split(" ");

    return resultado;
}

function muestraArray(cadena) {
    //Guardamos el resultado de la función anterior en una variable para trabajar con ella
    let arrayPalabras= cogeArray(cadena);
    //Sacamos en pantalla el número de palabras
    console.log(arrayPalabras.length);
    console.log("\n");
    //Sacamos en pantalla la primera palabra
    console.log(arrayPalabras[0]);
    console.log("\n");
    //Sacamos en pantalla la última palabra
    console.log(arrayPalabras[(arrayPalabras.length)-1]);
    console.log("\n");
    //Sacamos en pantalla las palabras en orden inverso
    console.log(arrayPalabras.reverse());
    console.log("\n");
    //Convertimos la cadena en minúsculas
    let minusculas= cadena.toLowerCase();
    //La convertimos en array
    let arrayMinusculas= minusculas.split(" ");
    //La ordenamos alfabéticamente
    let aLaz= arrayMinusculas.sort();
    //Lo de antes pero al revés
    let zLaa= aLaz.reverse();
    //La sacamos en pantalla en orden alfabético
    console.log(aLaz);
    console.log("\n");
    //La sacamos en pantalla en orden inverso al alfabético
    console.log(zLaa);
}