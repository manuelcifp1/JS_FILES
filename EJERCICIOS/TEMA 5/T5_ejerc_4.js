/*Ejercicio 4.- Pares e impares
Realicemos una variante del eterno ejercicio de consulta de paridad usando "clases" y objetos
 para averiguar si un número es par o impar (y alguna cosita más).
  Usaremos funciones anónimas dentro del constructor. Tendremos:
✓ Un constructor o clase llamado ParImpar que recibe como argumento el número.
✓ Una propiedad x que recogerá dicho argumento.
✓ Un método error() que muestre por consola el mensaje “Dato erróneo” (puedes usar console.error)
 si no se ha recibido un número, o "Dato correcto" en caso contrario.
✓ Un método llamado resuelve() que, mediante un cuadro de diálogo, devuelva la palabra “par”
 si el número es par e “impar” en caso contrario.
✓ Un método es() que devuelva la cadena de caracteres "par" o "impar". Usa el operador flecha.
✓ Un método muestraRandom() que escriba en el documento 10 números aleatorios del 1 al 10000
 y que a su lado se diga si es par o impar gracias al método anterior.
Emplea un fichero externo script.js usando un constructor ParImpar() o bien scriptClass.js
 si prefieres usar clases. Prueba el funcionamiento de cada código. */

function ParImpar(x) {
    this.x = x;

    // Método error()
    this.error = function() {
        if (typeof this.x !== "number" || isNaN(this.x)) {
            console.error("❌ Dato erróneo");
        } else {
            console.log("✅ Dato correcto");
        }
    };

    // Método resuelve()
    this.resuelve = function() {
        if (typeof this.x !== "number" || isNaN(this.x)) {
            alert("❌ No es un número válido.");
        } else {
            alert(this.x % 2 === 0 ? "par" : "impar");
        }
    };

    // Método es() con arrow function
    this.es = () => {
        return (this.x % 2 === 0) ? "par" : "impar";
    };

    // Método muestraRandom()
    this.muestraRandom = function() {
        document.write("<h3>🎲 10 Números aleatorios:</h3><ul>");
        for (let i = 0; i < 10; i++) {
            let rand = Math.floor(Math.random() * 10000) + 1;
            let paridad = (rand % 2 === 0) ? "par" : "impar";
            document.write(`<li>${rand} → ${paridad}</li>`);
        }
        document.write("</ul>");
    };
}
