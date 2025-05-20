
let boton = document.getElementById("boton");
let mensaje = document.getElementById("mensaje");

export function temporizador(tiempo) {
    let promesa = new Promise((resolve, reject) => {
        let n = 0;
        let clickHecho = false;
        let cuentaTiempo;
        
        boton.addEventListener("click", () => {
                clickHecho = true;                
                clearInterval(cuentaTiempo);
                reject("Acción interrumpida por el usuario");
            });

        cuentaTiempo = setInterval(() => {
            n++;
            if(n >= tiempo / 1000) {
                clearInterval(cuentaTiempo);
                resolve("Tiempo concluido");               
            }                           
        }, 1000);        
    });

    promesa.then(function(respuesta) {
        mensaje.innerHTML = respuesta;
    }).catch(function(miError) {
        mensaje.innerHTML = miError;
    });    
}








       