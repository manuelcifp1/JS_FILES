let ironMan = document.getElementById("ironMan");
let coordenadas = document.getElementById("coordenadas");

document.addEventListener("mousemove", (e) => {
    coordenadas.innerHTML = `${e.clientX} ${e.clientY}`;
    ironMan.style.cssText = `position: fixed;
                             top: ${e.clientY - 100}px;
                             left: ${e.clientX - 100}px;`
});

/*ERRORES COMUNES:
 - PONER SCRIPT SRC EN EL HEAD, DEBE ESTAR ABAJO DEL BODY*/