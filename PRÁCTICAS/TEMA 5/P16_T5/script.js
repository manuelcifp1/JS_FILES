function Ordenador(marca, modelo, ram, disco, pulgadas) {
    //Propiedades con valores por defecto
    this.marca = marca;
    this.modelo = modelo;
    this.ram = ram || 4;           //Por defecto 4 GB
    this.disco = disco || 512;     //Por defecto 512 GB
    this.pulgadas = pulgadas || 17; //Por defecto 17 pulgadas
    
    //Método para mostrar información del ordenador
    this.toString = function() {
        return `ORDENADOR:\n
        Marca: ${this.marca}\n
        Modelo: ${this.modelo}\n
        RAM: ${this.ram}GB\n
        Disco duro: ${this.disco}GB\n
        Pantalla: ${this.pulgadas} pulgadas\n`;
    }


};

let pc1 = new Ordenador("HP", "ProBook", 8, 1024, 15.6);
let pc2 = new Ordenador("Dell", "Inspiron"); //Usa valores por defecto

//Mostramos los resultados
console.log(pc1.toString());
console.log(pc2.toString());

//💻 Constructor PORTÁTIL que hereda de ORDENADOR

function Portatil(marca, modelo, ram, disco, pulgadas, autonomia) {
    //Herencia directa usando __proto__
    this.__proto__ = new Ordenador(
        marca,
        modelo,
        ram || 4,
        disco || 256,//valor por defecto diferente al de Ordenador
        pulgadas || 13//valor por defecto diferente al de Ordenador 
    );

    //Propiedad exclusiva de Portatil
    this.autonomia = autonomia || 4; // por defecto 4h

    //Sobrescribir toString para mostrar también autonomía
    this.toString = function() {
        return `${this.__proto__.toString()}\n
        Autonomía: ${this.autonomia} horas`;
    };
}

// ✅ Pruebas: crear dos portátiles
let portatil1 = new Portatil("Lenovo", "ThinkPad", 16, 512, 14, 10);
let portatil2 = new Portatil("Asus", "ZenBook"); // usa valores por defecto

// Mostrar resultados
console.log(portatil1.toString());
console.log(portatil2.toString());