/*🧩 Ejercicio 2: Filtrar productos en stock
📘 Dado un array de productos, filtra aquellos que tienen stock
 mayor a 0 y que además cuestan menos de 50. */

 let productos = [
    { nombre: "Auriculares", stock: 10, precio: 25 },
    { nombre: "Teclado", stock: 0, precio: 45 },
    { nombre: "Monitor", stock: 5, precio: 120 },
    { nombre: "Ratón", stock: 20, precio: 15 }
  ];

let nuevosProductos = productos.filter(producto => producto.stock > 0 && producto.precio < 50);

console.log(nuevosProductos);