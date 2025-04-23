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

function mayusculizar() {
    let boton = document.activeElement;
    let tdBoton = boton.parentElement;
    let celdaTexto = tdBoton.previousElementSibling;

    celdaTexto.style.textTransform = celdaTexto.style.textTransform === "uppercase" ? "none" : "uppercase";
}

function formatearChachimente() {
    let boton = document.activeElement;
    let tdBoton = boton.parentElement;
    let celdaTexto = tdBoton.previousElementSibling.previousElementSibling;

    if (celdaTexto.style.backgroundColor === "red") {
        celdaTexto.style = "";
    } else {
        celdaTexto.style = "background-color: red; color: yellow;";
    }
}
