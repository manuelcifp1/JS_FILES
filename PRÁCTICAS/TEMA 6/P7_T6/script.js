//Captura el <tbody> de la tabla donde se añadirán nuevas filas
let tBody = document.getElementById("bodyTabla");

//Captura la fila de ejemplo (fila1) que se usará como plantilla para clonar
let fila = document.getElementById("fila1");

//Captura el campo input donde el usuario escribe el texto
let input = document.getElementById("texto");

//Función que se ejecuta al pulsar el botón "Añadir"
function anadirFila() {
    //Valida que el input no esté vacío ni lleno de espacios
    if (input.value.trim() === "") {
        alert("Debes introducir algo de texto");
        return; //Sale de la función sin hacer nada más
    }

    //Clona toda la fila de ejemplo, incluyendo botones
    let nuevaFila = fila.cloneNode(true);

    //Cambia el texto del primer <td> de la nueva fila por el contenido del input
    nuevaFila.querySelector("td").innerText = input.value;

    //Reasigna los eventos a los botones clonados, ya que los eventos no se clonan
    nuevaFila.querySelectorAll("button")[0].onclick = mayusculizar;
    nuevaFila.querySelectorAll("button")[1].onclick = formatearChachimente;

    //Añade la nueva fila al final del <tbody>
    tBody.appendChild(nuevaFila);
}

//Función que convierte el texto del <td> anterior al botón a mayúsculas o lo devuelve a normal
function mayusculizar(event) {
    //Accede a la <td> donde está el botón pulsado
    let tdBoton = event.target.parentElement;

    //Selecciona la <td> anterior, que contiene el texto a transformar
    let celdaTexto = tdBoton.previousElementSibling;

    //Cambia el estilo entre 'uppercase' y 'none' para alternar entre mayúsculas y normal
    celdaTexto.style.textTransform = celdaTexto.style.textTransform === "uppercase" ? "none" : "uppercase";
}

//Función que aplica o quita un estilo "chachi" (rojo de fondo, texto amarillo)
function formatearChachimente(event) {
    //Accede a la <td> donde está el botón pulsado
    let tdBoton = event.target.parentElement;

    //Retrocede dos celdas para llegar al <td> que contiene el texto (la estructura es: texto, botón1, botón2)
    let celdaTexto = tdBoton.previousElementSibling.previousElementSibling;

    //Si ya tiene fondo rojo, se limpia el estilo; si no, se aplica el estilo "chachi"
    if (celdaTexto.style.backgroundColor === "red") {
        celdaTexto.style = "";
    } else {
        celdaTexto.style = "background-color: red; color: yellow;";
    }
}
