let recuadro = document.getElementById("recuadro");

recuadro.addEventListener("mouseenter", () => {
    recuadro.style.backgroundColor = "green";
});

recuadro.addEventListener("mouseleave", () => {
    recuadro.style.backgroundColor = "white";
});

recuadro.addEventListener("mousedown", (ev) => {
    if(ev.button == 0) {
        recuadro.style.backgroundColor = "red";
    } else if(ev.button == 2) {        
        recuadro.style.backgroundColor = "blue";
    }
});

recuadro.addEventListener("mouseup", () => {        
    recuadro.style.backgroundColor = "green";
});

recuadro.addEventListener("contextmenu", (ev) => {
    ev.preventDefault();
});





