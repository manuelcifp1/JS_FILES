/*🧩 Reto: Informe de ventas
📘 Tenés un array de objetos que representan ventas. Cada venta tiene:

producto (string)

precioUnitario (número)

cantidad (número)

cliente (string) */
let ventas = [
    { producto: "Monitor", precioUnitario: 150, cantidad: 2, cliente: "Ana" },
    { producto: "Teclado", precioUnitario: 30, cantidad: 1, cliente: "Luis" },
    { producto: "Ratón", precioUnitario: 20, cantidad: 0, cliente: "Clara" },
    { producto: "Auriculares", precioUnitario: 50, cantidad: 3, cliente: "Luis" }
  ];
//Filtrar las ventas con cantidad > 0
let nuevasVentas = ventas.filter(venta => venta.cantidad > 0);

console.log(nuevasVentas);

//Calcular el total de cada venta (precioUnitario * cantidad) usando .map()
let totalVentas = nuevasVentas.map(venta =>
    venta.total = venta.precioUnitario * venta.cantidad
);

console.log(totalVentas);

//Sumar el total de todas las ventas usando .reduce()
var sumaTotalVentas = totalVentas.reduce( (acumulador, venta) =>
     acumulador + venta.total
);

console.log(sumaTotalVentas);

//Mostrar el total general y el listado con el total por producto
ventas.forEach(function(valor, indice) {
    console.log(`${ventas[indice].producto}: ${ventas[indice].precioUnitario * ventas[indice].cantidad}€`);
});

console.log(`Total general: ${sumaTotalVentas}€`);