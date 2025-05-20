function temporizador(segundos) {
    return new Promise((resolver, rechazar) => {
        const botonAbortar = document.getElementById("abortar");

        //Inicia el temporizador
        const timeout = setTimeout(() => {
            resolver("Tiempo concluido");
        }, segundos * 1000);

        //Escucha el evento del botón para cancelar
        botonAbortar.addEventListener("click", () => {
            clearTimeout(timeout); // Cancelar el temporizador
            rechazar("Acción interrumpida por el usuario");
        });
    });
}

//Uso de la función con 10 segundos de tiempo
temporizador(10)
    .then((mensaje) => {
        document.getElementById("mensaje").textContent = mensaje;
    })
    .catch((error) => {
        document.getElementById("mensaje").textContent = error;
    });
