/*🎮 MINI JUEGO: PROTOTYPE QUEST – El Despertar de los Objetos 🧙‍♂️🧠

🧩 Objetivo: Aplicar herencia con prototype para crear un juego de batalla entre criaturas (tipo RPG básico).
Verás cómo los métodos comunes están en el prototipo y cada personaje tiene sus propiedades individuales.

🧠 Concepto didáctico:
Crear constructor Criatura.

Añadir propiedades: nombre, vida, ataque.

Crear métodos:

- atacar(objetivo)

- mostrarEstado()

👉 Los métodos estarán en el prototype para que todas las criaturas los compartan. */


function Criatura(nombre, vida, ataque) {
    this.nombre = nombre;
    this.vida = vida;
    this.ataque = ataque;    

    Criatura.prototype.mostrarEstado = function () {
        console.log(`🧍 ${this.nombre} → ❤️ Vida: ${this.vida}, 🗡️ Ataque: ${this.ataque}`);
    }

    Criatura.prototype.atacar = function(objetivo) {
        if (!(objetivo instanceof Criatura)) {
            console.error("❌ No puedes atacar eso.");
            return;
        }
        console.log(`⚔️ ${this.nombre} ataca a ${objetivo.nombre} con ${this.ataque} de daño`);
        objetivo.vida -= this.ataque;
    
        if (objetivo.vida <= 0) {
            console.log(`💀 ${objetivo.nombre} ha sido derrotado`);
        } else {
            objetivo.mostrarEstado();
        }
    }
};

// Instanciamos dos criaturas
let dragon = new Criatura("Draco", 100, 25);
let guerrero = new Criatura("Axel", 80, 15);

// Juego en consola
dragon.mostrarEstado();
guerrero.mostrarEstado();

dragon.atacar(guerrero); // Draco ataca a Axel
guerrero.atacar(dragon); // Axel ataca a Draco