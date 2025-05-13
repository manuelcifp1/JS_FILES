const ventana = document.getElementById("ventana");

const boton = document.getElementById("boton");

ventana.addEventListener("scroll", () => {
    let cierreVentana = ventana.scrollTop + ventana.clientHeight >= ventana.scrollHeight;
    if(cierreVentana) {
        boton.removeAttribute("hidden");//REMOVE      
    }
});

//ESTO NO VA DENTRO DE LA OTRA
boton.addEventListener("click", () => {
    ventana.toggleAttribute("hidden");//TOGGLE
    boton.toggleAttribute("hidden");//TOGGLE
});