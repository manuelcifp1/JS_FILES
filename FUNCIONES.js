
Number();//Convierte a número

parseInt();/*Extrae el número con el que comienza un texto o extrae la parte entera de 
un número decimal.*/


parseFloat();//Lo mismo que el anterior pero con decimales

isNaN();/*Una string multiplicada por un número nos da NaN, pero si preguntamos
si esa multiplicación es == NaN nos dirá false. Para ello, usamos esta función, que
nos dará true si la expresión no es numérica.*/

Math.random();/*Número aleatorio entre 0 y 0.999... Si hacemos esto: Math.random()*2;
 nos daría un número entre 0 y 1.999..., pero si le sumamos 1: Math.random()*2 + 1; 
 tendríamos un número entre 1 y 2.999... Con esta función podemos abarcar el rango que
  queramos:*/
  function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(rand(1, 10));

