export function temporizador(segundos) {
    //Primero la promesa.
    return new Promise((resolve, reject) => {
        //Seleccionar el botón.
        const boton = document.getElementById("abortar");
        //El timeOut con su resolve.
        const timeOut = setTimeout(() => {
        resolve("Tiempo concluido");
        }, 1000 * segundos);

        //El botón con su clearTimeout y su reject.
        boton.addEventListener("click", () => {
            clearTimeout(timeOut);
            reject("Acción interrumpida por el usuario");
        });
    });
}