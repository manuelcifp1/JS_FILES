/*🧩 Ejercicio 2: Validar stock
📘 Un array de productos con su stock. Comprueba si todos los productos
 tienen al menos 1 unidad disponible. */

 let productos = [
    { nombre: "Auriculares", stock: 15 },
    { nombre: "Altavoz", stock: 1 },
    { nombre: "Teclado", stock: 0 }
  ];

const unoOmas = productos.every(producto =>
    producto.stock >= 1
);

console.log(unoOmas ? "Todos tienen al menos 1 unidad." : "Alguno tiene stock 0.");