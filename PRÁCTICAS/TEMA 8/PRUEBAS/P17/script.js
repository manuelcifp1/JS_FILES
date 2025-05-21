export function temporizador(segundos) {
    return new Promise((resolve, reject) => {
        
        const boton = document.getElementById("abortar");

        const timeOut = setTimeout(() => {
        resolve("Tiempo concluido");
        }, 1000 * segundos);

        boton.addEventListener("click", () => {
            clearTimeout(timeOut);
            reject("Acción interrumpida por el usuario");
        });
    });
}