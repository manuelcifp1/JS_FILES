// Función que se ejecuta al cargar la página
window.addEventListener("load", iniciar);

// Función principal que inicia todo
function iniciar() {
    const aceptarBtn = document.getElementById("aceptar");
    const rechazarBtn = document.getElementById("rechazar");
    const cerrarSesionBtn = document.getElementById("cerrarSesion");

    aceptarBtn.addEventListener("click", permiteCookies);
    rechazarBtn.addEventListener("click", rechazaCookies);
    cerrarSesionBtn.addEventListener("click", cerrarSesion);

    // Si ya hay cookie de sesión, no mostramos el aviso
    if (getCookie("sesionIniciada") === "true") {
        mostrarVisitas();
    } else {
        document.getElementById("confirmacion").classList.remove("oculto");
    }
}

// Cuando el usuario acepta el uso de cookies
function permiteCookies() {
    // Marcamos que ya se ha aceptado en esta sesión
    document.cookie = "sesionIniciada=true";
    
    // Comprobamos si ya existe cookie de visitas
    let visitas = parseInt(getCookie("contadorVisitas")) || 0;
    visitas++;
    // Guardamos la nueva cantidad de visitas por 1 año
    document.cookie = "contadorVisitas=" + visitas + "; max-age=" + (60 * 60 * 24 * 365);

    document.getElementById("mensaje").textContent = "Has aceptado el uso de cookies.";
    document.getElementById("confirmacion").classList.add("oculto");
    document.getElementById("cerrarSesion").classList.remove("oculto");

    mostrarVisitas();
}

// Si el usuario rechaza las cookies
function rechazaCookies() {
    borrarCookies();
    document.getElementById("mensaje").textContent = "No has aceptado el uso de cookies. No se registrarán visitas.";
    document.getElementById("confirmacion").classList.add("oculto");
}

// Botón para cerrar sesión (borra cookies de sesión y vuelve a preguntar)
function cerrarSesion() {
    borrarCookies();
    location.reload(); // recarga la página para volver a mostrar el cuadro
}

// Muestra cuántas veces se ha visitado la página
function mostrarVisitas() {
    const visitas = getCookie("contadorVisitas");
    if (visitas) {
        document.getElementById("visitas").textContent = `Has visitado esta página ${visitas} veces.`;
    }
    document.getElementById("cerrarSesion").classList.remove("oculto");
}

// Función para obtener una cookie concreta
function getCookie(nombre) {
    const cookies = document.cookie.split("; ");
    for (let c of cookies) {
        const [clave, valor] = c.split("=");
        if (clave === nombre) {
            return valor;
        }
    }
    return null;
}

// Borra todas las cookies que usamos
function borrarCookies() {
    document.cookie = "contadorVisitas=; max-age=0";
    document.cookie = "sesionIniciada=; max-age=0";
}
