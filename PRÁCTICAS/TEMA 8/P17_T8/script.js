
let boton = document.getElementById("boton");
let mensaje = document.getElementById("mensaje");

export function temporizador(tiempo) {
    let promesa = new Promise((resolve, reject) => {
        let n = 0;
        let clickHecho = false;

        boton.addEventListener("click", () => {
                clickHecho = true;                
                return clearInterval(cuentaTiempo);
            });

        let cuentaTiempo = setInterval(() => {
            n++;
            if(n==tiempo) {
                resolve("Tiempo concluido");
                return clearInterval(cuentaTiempo);
            }            

            if(n<tiempo && clickHecho == true) 
                reject("Acción interrumpida por el usuario");
        }, 1000);        
    });

    promesa.then(function(respuesta) {
        mensaje.innerHTML = respuesta;
    }).catch(function(miError) {
        mensaje.innerHTML = miError.message;
    });    
}








       