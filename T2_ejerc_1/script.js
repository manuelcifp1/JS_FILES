let nombre = prompt("Introduzca nombre");
let apellidos = prompt("Introduzca apellidos");
let direccion = prompt("Introduzca dirección");
let telefono = prompt("Introduzca telefono");
let dni = prompt("Introduzca DNI");

alert(`Estos son sus datos de contacto: ${nombre} ${apellidos} ${direccion} ${telefono} ${dni}`);

document.write(`Estos son sus datos de contacto: ${nombre} ${apellidos} ${direccion} ${telefono} ${dni}`);

document.getElementById("parrafo").innerHTML = `Estos son sus datos de contacto: ${nombre} ${apellidos} ${direccion} ${telefono} ${dni}`;

console.log(`Estos son sus datos de contacto: ${nombre} ${apellidos} ${direccion} ${telefono} ${dni}`);