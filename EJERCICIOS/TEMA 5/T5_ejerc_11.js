/*Ejercicio 11.- Pitágoras
Vamos a crear un objeto Posicion con coordenadas x e y que incluya un método que devuelva la distancia
 entre dos posiciones en un eje de coordenadas.
Así, suponiendo dos puntos pos1 (a1,b1) y pos2 (a2,b2), según el teorema de Pitágoras deberíamos hallar
 la hipotenusa.
Donde se cumpliría que h2 = a2 + b2, con lo que ℎ= √𝑎2+ 𝑏2= √(𝑎1−𝑎2)2+(𝑏1− 𝑏2)2
El método tendría una llamada de la forma pos1.distancia(pos2).
Puedes comprobar tus cálculos en el enlace https://www.mathepower.com/es/pitagoras.php */

function Posicion(x, y) {
    this.x = x;
    this.y = y;
    
}

// Método añadido al prototipo de Posicion
Posicion.prototype.distancia = function(otraPosicion) {
    const dx = this.x - otraPosicion.x;
    const dy = this.y - otraPosicion.y;
    return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
  };
  
  // 🧪 Ejemplo de uso:
  const pos1 = new Posicion(3, 4);
  const pos2 = new Posicion(0, 0);
  
  console.log(`La distancia entre pos1 y pos2 es: ${pos1.distancia(pos2)}`);