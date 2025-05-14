const cuadrado = document.getElementById("cuadrado");

cuadrado.addEventListener("mouseenter", () => {
    cuadrado.style.backgroundColor = "green";
});

cuadrado.addEventListener("mouseleave", () => {
    cuadrado.style.backgroundColor = "white";
});

cuadrado.addEventListener("mousedown", (e) => {
    if(e.button === 0) {
        cuadrado.style.backgroundColor = "red";
    } else {
        cuadrado.style.backgroundColor = "blue";
    }
});

cuadrado.addEventListener("mouseup", () => {
    cuadrado.style.backgroundColor = "green";
});

cuadrado.addEventListener("contextmenu", (e) => {
    e.preventDefault();
})



/*ERRORES COMUNES:
- OLVIDAR QUE EL PREVENTDEFAULT VA CON UN CONTEXTMENU.*/