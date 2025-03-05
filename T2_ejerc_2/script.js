/*Ejercicio 2.- Esta actividad se realizará usando el editor de código del navegador. Crea un programa que
realice las siguientes acciones (la sintaxis a usar no se diferencia de la de C o Java):
o En el documento →Todos los pares entre el 1 y el 15.
o Por consola → Aparecerá el número de iteración con el mensaje “Iteración: x”.
o Por cuadro de diálogo → El número de pares encontrados.*/

let j = 0;
for (let i = 1; i <= 15; i++) {    
    if ((i % 2) == 0) {
        document.write(i + " "); 
        j++;              
    };
    console.log("Iteración: " + i); 
}

alert("El total de pares encontrado es: " + j);

