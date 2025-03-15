let cadena= "una cadena cani es como esta";

function toCani(cadena) {
    //convertimos la cadena en array separando por caracteres
    let arrayCani= cadena.split("");

    for (x in arrayCani) {
        //Recorremos el array y, si el caracter tiene índice par o 0, lo ponemos en minúsculas
        if (x % 2 == 0 | x == 0) {
            arrayCani[x]= arrayCani[x].toLowerCase();
        } else if (x % 2 !== 0){
            //Si el índice es impar, lo ponemos en mayúsculas
            arrayCani[x]= arrayCani[x].toUpperCase();
        } 
        // Si el caracter es una c, la convertimos en k
        if (arrayCani[x] == "c") {

            arrayCani[x] = "k";

        } else if(arrayCani[x] == "k") {
        //Si es un k, en c    
            arrayCani[x] = "c";
        }

    }
    //Creamos una expresión regular para chequear el final de la cadena
    let regEx= /[aeiou]/;


    //Creamos una variable y le asignamos el último elemento de la cadena
    let fin= arrayCani[(arrayCani.length)-1];
    //Creamos una variable con la validación del último elemento en nuestra RegEx
    let resultFin= regEx.test(fin);
    //Si el testeo da True, añadimos 3 H al final del array
    if (resultFin) {
        arrayCani.push("HHH");
    }
}