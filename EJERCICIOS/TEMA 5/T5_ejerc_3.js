// Constructor de Coche
function Coche(marca, combustible, cantidad) {
    this.marca = marca || "Desconocida";
    this.combustible = combustible || "Desconocido";
    this.cantidad = cantidad || 0;
}

// Creamos array para almacenar coches
let garaje = [];

// Bucle para añadir coches
do {
    let marca = prompt("Introduce la marca del coche:");
    let combustible = prompt("Tipo de combustible:");
    let cantidad = parseFloat(prompt("Cantidad de litros en el depósito:"));

    let nuevoCoche = new Coche(marca, combustible, cantidad);
    garaje.push(nuevoCoche);
} while (confirm("¿Quieres añadir otro coche?"));

// Mostramos los coches por consola
console.log("🚘 Lista de coches añadidos:");
garaje.forEach((coche, index) => {
    console.log(`Coche ${index + 1}: Marca: ${coche.marca}, Combustible: ${coche.combustible}, Litros: ${coche.cantidad}`);
});

// También en formato tabla 🔥
console.table(garaje);
