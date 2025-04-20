document.addEventListener("DOMContentLoaded", function () {
    const mensaje = document.getElementById("mensaje");
    const visitas = document.getElementById("visitas");
    const botonAceptar = document.getElementById("aceptarCookies");
    const botonRechazar = document.getElementById("rechazarCookies");
    const botonCerrarSesion = document.getElementById("cerrarSesion");

    // Función para leer cookies
    function leerCookie(nombre) {
        const cookies = document.cookie.split("; ");
        for (let cookie of cookies) {
            const [key, value] = cookie.split("=");
            if (key === nombre) return value;
        }
        return null;
    }

    // Función para establecer cookies
    function establecerCookie(nombre, valor, maxAge) {
        document.cookie = `${nombre}=${valor}; max-age=${maxAge}`;
    }

    // Función para eliminar cookies
    function eliminarCookie(nombre) {
        document.cookie = `${nombre}=; max-age=0`;
    }

    // Función para manejar visitas
    function gestionarVisitas() {
        const visitasActuales = leerCookie("visitas");
        if (visitasActuales) {
            const nuevasVisitas = parseInt(visitasActuales, 10) + 1;
            establecerCookie("visitas", nuevasVisitas, 60 * 60 * 24 * 365); // 1 año
            visitas.textContent = `Has visitado esta página ${nuevasVisitas} veces.`;
        } else {
            establecerCookie("visitas", 1, 60 * 60 * 24 * 365); // 1 año
            visitas.textContent = "Esta es tu primera visita.";
        }
    }

    // Mostrar mensaje al usuario si no hay cookie de sesión
    if (!leerCookie("sesionIniciada")) {
        const aceptado = confirm("Esta página utiliza cookies para registrar tus visitas. ¿Aceptas?");
        if (aceptado) {
            establecerCookie("sesionIniciada", "true", 60 * 60 * 24); // 1 día
            gestionarVisitas(); // Contar visitas solo si acepta cookies
        } else {
            eliminarCookie("visitas");
            mensaje.textContent = "Has rechazado el uso de cookies. No se registrarán tus visitas.";
        }
    } else if (leerCookie("sesionIniciada") === "true") {
        gestionarVisitas(); // Contar visitas solo si la sesión ya está iniciada
    }

    // Eventos para botones
    botonAceptar.addEventListener("click", function () {
        establecerCookie("sesionIniciada", "true", 60 * 60 * 24); // 1 día
        gestionarVisitas();
        mensaje.textContent = "Has aceptado el uso de cookies.";
    });

    botonRechazar.addEventListener("click", function () {
        eliminarCookie("visitas");
        eliminarCookie("sesionIniciada");
        visitas.textContent = "";
        mensaje.textContent = "Has rechazado el uso de cookies. No se registrarán tus visitas.";
    });

    botonCerrarSesion.addEventListener("click", function () {
        eliminarCookie("sesionIniciada");
        mensaje.textContent = "Has cerrado tu sesión. Reinicia para ver el mensaje de confirmación.";
    });
});
