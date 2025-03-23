/*Ejercicio 15.- Practiquemos un poco más las funciones callback.
Se pide realizar una función operacion (dato1, dato2, opCB) que pueda realizar diferentes
 operaciones dependiendo de la función callback que le enviemos en los argumentos,
  donde estos serán:
 dato1 → Primer dato a operar
 dato2 → Segundo dato a operar
 opCB → Operación que se va a realizar: Suma, Resta, Producto, división, Resto. */


function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

function modulear(a, b) {
    return a % b;
}


function operacion (dato1, dato2, opCB) {
    opCB(dato1, dato2);

}
console.log(operacion(4, 2, sumar));