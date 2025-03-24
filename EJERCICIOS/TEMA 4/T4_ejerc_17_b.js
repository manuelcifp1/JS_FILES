/*Ejercicio 1: Mostrar emails formateados.
Dado un array de usuarios con nombre y email, usá forEach() para mostrar en consola:
Usuario: NOMBRE - Email: EMAIL
 */

let usuarios = [
    { nombre: "Ana", email: "ana@example.com" },
    { nombre: "Luis", email: "luis@example.com" },
    { nombre: "Sofía", email: "sofia@example.com" }
  ];

  
usuarios.forEach(usuario => {
    console.log(`Usuario: ${usuario.nombre} - Email: ${usuario.email}`);
});  