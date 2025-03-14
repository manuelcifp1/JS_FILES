
function introducirNumeros() {
    let numeroAleatorio = Math.floor(Math.random() * 1000) + 1;    
    let intentos = 0;
          
    let numeroUsuario = prompt("Dame un numero entre 1 y 1000");
    numeroUsuario = Number(numeroUsuario);
    intentos++;        
    
    if (numeroUsuario < 0) {
        numeroUsuario = prompt("No puede ser menor que 0. Dame otro número.");
        numeroUsuario = Number(numeroUsuario);
        introducirNumeros();
    } else if(numeroUsuario > 1000) {
        numeroUsuario = prompt("No puede ser mayor que 1000. Dame otro número.");
        numeroUsuario = Number(numeroUsuario);
        introducirNumeros();
    } else if (isNaN(numeroUsuario)) {
        numeroUsuario = prompt("Eso no es un número. Dame un número.");
        numeroUsuario = Number(numeroUsuario);
        introducirNumeros();
    } else if (numeroUsuario == null){
        alert("El juego se ha cancelado.");
    }
    
    if (numeroUsuario == numeroAleatorio) {
        intentos++;
        document.write("<h2>¡Enhorabuena! Lo has adivinado en " + intentos + "intentos.</h2>");
        let jugarDeNuevo = confirm("¿Quieres jugar de nuevo?");
        if (jugarDeNuevo) {
            iniciarJuego();
        }
    } else if (numeroUsuario > numeroAleatorio) {
        intentos++;
        prompt("El número a adivinar es menor. Dame otro número");
        introducirNumeros();
    } else {
        intentos++;
        prompt("El número a adivinar es mayor. Dame otro número");
        introducirNumeros();
    }
}




