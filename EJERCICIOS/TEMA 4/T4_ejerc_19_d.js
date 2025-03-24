/*🧩 Ejercicio 3: Filtrar usuarios con email institucional
📘 Dado un array de usuarios con email, filtrá solo los que tienen emails
 que terminan en "@empresa.com" */

 let usuarios = [
    { nombre: "Eva", email: "eva@empresa.com" },
    { nombre: "Pablo", email: "pablo@gmail.com" },
    { nombre: "Luz", email: "luz@empresa.com" },
    { nombre: "Tomás", email: "tomas@yahoo.com" }
  ];

regEx = /@empresa\.com$/;  

let nuevosUsuarios = usuarios.filter(usuario => regEx.test(usuario.email));

console.log(nuevosUsuarios);