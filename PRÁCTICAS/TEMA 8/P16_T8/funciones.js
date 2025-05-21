//Función para borrar cookies
export function borrarCookies() {
    //Seleccionamos las cookies y las convertimos en array.
    const cookies = document.cookie.split(";");

    //Recorremos con un for para primero separar el nombre de cada cookie y luego borrarla usando su nombre, edad y ruta.
    for (let i = 0; i < cookies.length; i++) {
    const nombre = cookies[i].split("=")[0].trim();
    document.cookie = `${nombre}=; max-age=0; path=/`;
    }
}

//Función para obtener una cookie por su nombre.
export function obtenerCookie(nombre) {
    //Seleccionamos las cookies y las convertimos en array.
    const cookies = document.cookie.split(";");
    //Recorremos, separando el nombre (cookies[i]) y si empieza con el parámetro nombre, devuelve el valor de nombre, en caso contrario devuelve null.
    for (let i = 0; i < cookies.length; i++) {
        const parte = cookies[i].trim();
        if(parte.startsWith(nombre + "=")) {
            return parte.split("=")[1];
        }
    }
    return null;
}

//Función para cerrar sesión.
export function cerrarSesion() {
  borrarCookies();//Borra todas las cookies.
  location.reload();//Recarga la página para "empezar de cero".
}

//Función para incrementar visitas.
export function incrementarVisitas() {
    //Seleccionamos la cookie visitas.
    let visitas = obtenerCookie("visitas");
     //Si no hay visitas, le damos el valor 1.
    if(visitas === null) {
        visitas = 1;
    } else {
        //En caso contrario, la aumentamos en 1.
        visitas = Number(visitas) + 1;
    }
    //Creamos la cookie con las visitas totales.
    document.cookie = "visitas=" + visitas + "; max-age=31536000; path=/";
    //Actualizamos el párrafo con las visitas.
    document.getElementById("visitas").textContent = "Número de visitas: " + visitas;
}