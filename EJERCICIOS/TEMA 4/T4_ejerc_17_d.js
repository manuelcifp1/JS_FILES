/*🧩 Ejercicio 3: Contar cuántos elementos cumplen una condición.
📘 Dado un array de productos con nombre y stock, usá forEach()
 para contar cuántos productos tienen stock mayor a 0. */

 let productos = [
    { nombre: "Lapicera", stock: 10 },
    { nombre: "Cuaderno", stock: 0 },
    { nombre: "Regla", stock: 5 }
  ];

  let mayorQueCero = 0;
  productos.forEach(producto => {
    if (producto.stock > 0) {
        mayorQueCero++;
    }

  });

  console.log(mayorQueCero);
  