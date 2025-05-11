let cuadro = document.getElementById("cuadro");

cuadro.addEventListener("mouseenter", () => {
    cuadro.style.backgroundColor = "green";
});

cuadro.addEventListener("mouseleave", () => {
    cuadro.style.backgroundColor = "white";
});
//Este es el más jodido
cuadro.addEventListener("mousedown", (e) => {
    if (e.button === 2) {
        cuadro.style.backgroundColor = "blue";
    } else {
        cuadro.style.backgroundColor = "red";
    }
});

cuadro.addEventListener("mouseup", () => {
    cuadro.style.backgroundColor = "green";
});

cuadro.addEventListener("contextmenu", (e) => {
    e.preventDefault();    
});