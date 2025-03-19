/*Ejercicio 15.- Vamos a validar correctamente un código postal español.
 Para ello solo hay que tener en cuenta que su valor irá del 01000 al 52999.
  ¿Funcionaría con el código 47512? */

let regEx = /[0-4][0-9]{4} | 5[0-2][0-9]{3}/;
let cp = "47512";

regEx.test(cp);