let vengadorDorado = document.getElementById("ironMan");

let coordenadas = document.getElementById("coordenadas");
//FALLO GORDO: PONER DOCUMENT.BODY
document.addEventListener("mousemove", (e) => {
    coordenadas.innerHTML = `${e.clientX} ${e.clientY}`;
    vengadorDorado.style.cssText = `position: fixed;
                                    top: ${e.clientY - 75}px;
                                    left: ${e.clientX - 150}px;`;
});