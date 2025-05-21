export function borrarCookies() {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
    const nombre = cookies[i].split("=")[0].trim();
    document.cookie = `${nombre}=; max-age=0; path=/`;
    }
}

export function obtenerCookie(nombre) {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        const parte = cookies[i].trim();
        if(parte.startsWith(nombre + "=")) {
            return parte.split("=")[1];
        }
    }
    return null;
}

export function cerrarSesion() {
  borrarCookies();      // Borra todas las cookies
  location.reload();         // Recarga la página para "empezar de cero"
}


export function incrementarVisitas() {
    let visitas = obtenerCookie("visitas");

    if(visitas === null) {
        visitas = 1;
    } else {
        visitas = parseInt(visitas) + 1;
    }
    document.cookie = "visitas=" + visitas + "; max-age=31536000; path=/";
    document.getElementById("visitas").textContent = "Número de visitas: " + visitas;
}