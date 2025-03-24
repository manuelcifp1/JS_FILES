/*🧩 Ejercicio 3: Longitud de contraseñas
📘 Tenés usuarios con contraseñas, y querés verificar si todas las contraseñas
 tienen al menos 8 caracteres. */

 let usuarios = [
    { usuario: "admin", password: "admin1234" },
    { usuario: "luis", password: "12345678" },
    { usuario: "maria", password: "pass" }
  ];

const ochoOmas = usuarios.every(usuario =>
    usuario.password.length >= 8
);

console.log(ochoOmas ? "Todas tienen 8 o más caracteres" : "Alguna no tiene 8 o más caracteres");