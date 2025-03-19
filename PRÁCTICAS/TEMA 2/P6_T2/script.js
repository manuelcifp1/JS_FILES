/*PRÁCTICA 6 TEMA 2
Hacer una aplicación web que implemente un juego para encontrar un número aleatorio. 
 
A tener en cuenta: 
 
➢ El resultado se mostrará usando el método document.write() 
➢ Debido al tamaño del código se requerirá un fichero JavaScript externo. 
 
Funcionamiento: 
 
✓ La página calculará un número del 1 al 1000. 
✓ Luego pedirá al usuario que adivine el número.

o Volverá a preguntar si el dato introducido es erróneo. Esto sucederá si: 
▪ El usuario escribe algo que no es un número 
▪ El número es menor que 0. 
▪ El número es mayor que 1000.

o Si  se  cancela  cualquier  cuadro  el  juego  termina  indicando  que  se  canceló  el 
juego. 
 
✓ Si el número escrito por el usuario es correcto, se indica que se acertó y 
finalizaremos el juego indicando el número de intentos. 
✓ Si  no,  se  indicará  si  el  número  buscado  es  menor  o  mayor  al  mismo  tiempo  que 
volvemos a preguntar al usuario cuál es. Todo esto en el mismo cuadro de diálogo. 
✓ Se permite volver a jugar al usuario mediante un cuadro de confirmación.
============================================================================================ */

//Establecemos una variable para contar los intentos.
let intentos = 0;

//Creamos una función para crear el número a adivinar.
function numeroAleatorio() {
    let resultadoAleatorio = Math.floor(Math.random() * 1000) + 1;
    return resultadoAleatorio;
}

//Asignamos a una variable la llamada de la función anterior.
let returnAleatorio = numeroAleatorio();
console.log(returnAleatorio);

//Creamos otra función para la mecánica del juego.
function empezarJuego() {     

    let numeroUsuario = prompt("Dame un numero entre 1 y 1000");
    if (numeroUsuario == null) {
        document.write("<h2>El juego se ha cancelado.</h2>");
    } else {
        intentos++;
    numeroUsuario = Number(numeroUsuario);    

    if (numeroUsuario < 0) {
        alert("No puede ser menor que 0.");        
        return empezarJuego();
    } else if(numeroUsuario > 1000) {
        alert("No puede ser mayor que 1000.");        
        return empezarJuego();
    } else if (isNaN(numeroUsuario)) {
        alert("Eso no es un número.");        
        return empezarJuego();
    } else {
        if (numeroUsuario == returnAleatorio) {            
            if (intentos == 1) {
                document.write("<h2>¡Enhorabuena! Lo has adivinado en " + intentos + " intento.</h2>");
            } else {
                document.write("<h2>¡Enhorabuena! Lo has adivinado en " + intentos + " intentos.</h2>");
            }                       
            
        setTimeout(() => {
            let repetir = confirm("¿Quieres volver a jugar?");
            if (repetir) {
                intentos = 0;
                returnAleatorio = numeroAleatorio();
                empezarJuego();
            } else {
                document.write("<h2>El juego se ha cancelado.</h2>");
            }
        }, 500);

        } else if (numeroUsuario > returnAleatorio) {            
            alert("El número a adivinar es menor.");
            return empezarJuego();
        } else if (numeroUsuario < returnAleatorio) {            
            alert("El número a adivinar es mayor.");
            return empezarJuego();
        }
      }    
    }
}





        
    
          
            
    
    
    
   





