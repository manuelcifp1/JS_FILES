let ventanilla = document.getElementById("ventana");
let boton = document.getElementById("boton");

ventanilla.addEventListener("scroll", function() {    
    const scrollAlFinal = ventanilla.scrollTop + ventanilla.clientHeight >= ventanilla.scrollHeight;

    if (scrollAlFinal) {
        boton.removeAttribute("hidden");
    }
});

boton.addEventListener("click", function() {
    ventanilla.toggleAttribute("hidden");
    boton.toggleAttribute("hidden");
})

