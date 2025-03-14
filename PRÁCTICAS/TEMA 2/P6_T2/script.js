
//Establecemos una variable para contar los intentos.
let intentos = 0;

//Creamos una función para crear el número a adivinar.
function numeroAleatorio() {
    let resultadoAleatorio = Math.floor(Math.random() * 1000) + 1;
    return resultadoAleatorio;
}

//Asignamos a una variable la llamada de la función anterior.
let returnAleatorio = numeroAleatorio();

//Creamos otra función para la mecánica del juego.
function empezarJuego() {    

    let numeroUsuario = prompt("Dame un numero entre 1 y 1000");
    if (numeroUsuario == null) {
        alert("El juego se ha cancelado.");
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
            document.write("<h2>¡Enhorabuena! Lo has adivinado en " + intentos + "intentos.</h2>");
            let jugarDeNuevo = confirm("¿Quieres jugar de nuevo?");
            if (jugarDeNuevo) {
                intentos = 0;
                returnAleatorio = numeroAleatorio();
                empezarJuego();
            } else {
                document.write("<h2>El juego se ha cancelado.</h2>");
            }
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





        
    
          
            
    
    
    
   





