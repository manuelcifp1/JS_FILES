/*📘 Dado un array de productos, usa .map() para crear un nuevo array donde cada producto tenga:

- precioFinal → calculado con IVA (21%) y descuento aplicado

- disponible → "Sí" si enStock es true, si no "No" */

let productos = [
    { nombre: "Teclado", precioBase: 30, descuento: 10, enStock: true },
    { nombre: "Ratón", precioBase: 15, descuento: 0, enStock: false },
    { nombre: "Pantalla", precioBase: 200, descuento: 15, enStock: true }
  ];

  
let productosActualizados = productos.map(producto => {
    return {
        ...producto,
        precioFinal: (producto.precioBase +  (producto.precioBase * 0.21)) - producto.descuento,
        disponible: producto.enStock ? "Sí" : "No"

    };

}); 

console.log(productosActualizados);