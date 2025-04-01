/*Ejercicio 12.- Circunferencia
Crea un objeto círculo cuyo constructor reciba la propiedad radio y con un método que nos permita
 conocer la circunferencia según dicha propiedad. Comprueba su funcionamiento. */

function Circulo(radio) {
    this.radio = radio;
} 

Circulo.prototype.calcularArea = function (radio) {
    return Math.PI * Math.pow(this.radio, 2);
    
}

Circulo.prototype.calcularPerimetro = function (radio) {
    return 2 * Math.PI * this.radio;
}