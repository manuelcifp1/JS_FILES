const ventana = document.getElementById("ventana");
const boton = document.getElementById("boton");

ventana.addEventListener("scroll", () => {
    let cerrarVentana = ventana.scrollTop + ventana.clientHeight >= ventana.scrollHeight;
    if(cerrarVentana) {
        boton.removeAttribute("hidden");
        boton.addEventListener("click", () => {
            boton.toggleAttribute("hidden");
            ventana.toggleAttribute("hidden");
        });
    }
});

/*ERRORES COMUNES:
- EL EVENTO ES CON "SCROLL"
- BOTON.REMOVEATTRIBUTE(HIDDEN), LUEGO BOTON Y VENTANA TOGGLEATTRIBUTE(HIDDEN)*/