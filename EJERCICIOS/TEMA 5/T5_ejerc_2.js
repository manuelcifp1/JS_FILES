function Coche(marca, combustible) {
    // Propiedades privadas
    this.marca = marca || "Desconocida";
    this.combustible = combustible || "Desconocido";
    this.cantidad = 0;

    // SETTERS
    this.setMarca = function(marca) {
        this.marca = marca;
    };

    this.setCombustible = function(comb) {
        this.combustible = comb;
    };

    this.setCantidad = function(litros) {
        this.cantidad = litros;
    };

    // GETTERS
    this.getMarca = function() {
        return this.marca;
    };

    this.getCombustible = function() {
        return this.combustible;
    };

    this.getCantidad = function() {
        return this.cantidad;
    };

    // MÉTODO para rellenar depósito usando setter
    this.rellenarDeposito = function(litros) {
        this.setCantidad(litros);
    };

    // MÉTODO muestra configuración completa
    this.muestraConf = function() {
        console.log(`🚘 COCHE CONFIGURADO:
        🏷️ Marca: ${this.getMarca()}
        ⛽ Combustible: ${this.getCombustible()}
        🛢️ Litros en depósito: ${this.getCantidad()}L`);
    };
}

// 🔁 PRUEBA
let cocheDeNathan = new Coche("Volkswagen Golf", "gasolina");
cocheDeNathan.rellenarDeposito(55);
cocheDeNathan.muestraConf();
