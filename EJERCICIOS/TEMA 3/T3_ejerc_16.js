/*Ejercicio 16.- Realiza el ejercicio 15 con símbolos abreviados.*/

let regEx = /[0-4]\d{4} | 5[0-2]\d{3}/;
let cp = "47512";

regEx.test(cp);