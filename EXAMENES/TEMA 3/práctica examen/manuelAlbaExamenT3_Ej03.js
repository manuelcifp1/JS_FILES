
        /*Implementa un programa en JavaScript que:

- Divida una cadena de texto en palabras.
- Muestre en consola:
- La cantidad de palabras en la cadena.
- La primera y la última palabra.
- Las palabras en orden inverso.
- Las palabras ordenadas alfabéticamente.
- Las palabras ordenadas alfabéticamente pero en orden inverso. */

function alterarCadena(cadena) {
    //Convertimos la cadena en array.
    let arrayPalabras = cadena.split(" ");

    //Contamos los elementos (palabras) del array.
    let cantidadPalabras = arrayPalabras.length;
    console.log(cantidadPalabras);

    //Mostramos la primera palabra.
    let primerElemento = arrayPalabras[0];
    console.log(primerElemento);

    //Mostramos la última palabra.
    let ultimoElemento = arrayPalabras[cantidadPalabras - 1];
    console.log(ultimoElemento);

    //Mostramos las palabras en orden inverso.
    let inverso = arrayPalabras.reverse();
    console.log(inverso);

    //Mostramos las palabras ordenadas alfabéticamente.
    arrayPalabras.sort(function(primeraPalabra, segundaPalabra) {
        return primeraPalabra.localeCompare(segundaPalabra);
    });
    console.log(arrayPalabras);

    //Mostramos el inverso del orden alfabético.
    let inversoAlfabeto = arrayPalabras.reverse();
    console.log(inversoAlfabeto);
    
}

alterarCadena("Me llamo Manolo y me gusta javascript pero solo lo justo");
 

