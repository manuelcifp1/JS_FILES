// Función que inicia una cuenta atrás
function timer(minutos, segundos, destino = "reloj1") {
    // Si sólo se pasó un argumento, lo consideramos como segundos
    if (segundos === undefined) {
        segundos = minutos;
        minutos = 0;
    }

    // Validamos los parámetros: deben ser numéricos y no negativos
    if (isNaN(minutos) || isNaN(segundos) || minutos < 0 || segundos < 0 || minutos === "" || segundos === "") {
        alert("Parámetros incorrectos.");
        return;
    }

    // Calculamos los segundos totales de la cuenta atrás
    let total = minutos * 60 + segundos;

    // Creamos el intervalo que se ejecutará cada segundo
    let esto = setInterval(function restarSeg() {
        // Restamos un segundo
        total--;

        // Calculamos minutos y segundos restantes
        let m = Math.floor(total / 60);
        let s = total % 60;

        // Añadimos ceros delante si son menores de 10 (formato MM:SS)
        if (m < 10) {
            m = "0" + m;
        }
        if (s < 10) {
            s = "0" + s;
        }

        // Mostramos el resultado en el elemento indicado
        document.getElementById(destino).innerHTML = m + ":" + s;

        // Si llega a 0, detenemos el intervalo
        if (total <= 0) {
            clearInterval(esto);
        }
    }, 1000);
}

// Llamada con un solo parámetro (segundos) → reloj1 muestra 77 segundos
timer(77, undefined, "reloj1");

// Llamada con dos parámetros (minutos y segundos) → reloj2 muestra 1 minuto y 77 segundos
timer(1, 77, "reloj2");
