/*Ejercicio 1.- Esta actividad se realizará usando fichero externo. Usando cuadros de diálogos se pide una
aplicación que solicite al usuario que introduzca su Nombre, apellidos, Dirección, Teléfono y DNI (este
último con texto por defecto) para, acto seguido, mostrarle estos datos por pantalla. Usarás los siguientes
formatos de salida (si lo ves necesario puedes comentar las líneas para modificar el programa):

En un cuadro de diálogo.
En el documento web usando el método write() .
En el documento web usando la propiedad innerHTML .
En la consola del navegador. */

let nombre = prompt("Introduzca nombre");
let apellidos = prompt("Introduzca apellidos");
let direccion = prompt("Introduzca dirección");
let telefono = prompt("Introduzca telefono");
let dni = prompt("Introduzca DNI");

alert(`Estos son sus datos de contacto: ${nombre} ${apellidos} ${direccion} ${telefono} ${dni}`);

document.write(`Estos son sus datos de contacto: ${nombre} ${apellidos} ${direccion} ${telefono} ${dni}`);

document.getElementById("parrafo").innerHTML = `Estos son sus datos de contacto: ${nombre} ${apellidos} ${direccion} ${telefono} ${dni}`;

console.log(`Estos son sus datos de contacto: ${nombre} ${apellidos} ${direccion} ${telefono} ${dni}`);