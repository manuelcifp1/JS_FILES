/*Ejercicio 1.- Pares e impares
o Crear una función que devuelva la palabra “par” si le enviamos un número par e “impar” en otro caso.
o Para darle un poco de vidilla, vamos a usar en la función el operador de decisión ternario (condición ? true : false )
o Crea otra función que escriba en una página web 50 números aleatorios del 1 al 10000 y que a su lado se diga
 si es par o impar gracias a llamadas a la función anterior.
o Usaremos un fichero externo. */
function serPar(numero) {

    numero % 2 == 0 ?  document.write(" Par") : document.write(" Impar");
}


function escribirNumeros() {
    let i = 1;
    do {

        let elAleatorio = Math.floor(Math.random() * (10000)) + 1;
       
        document.write(elAleatorio) + " " + serPar(elAleatorio) + document.write("<br>");

        i++;

    } while (i <= 50);
}

