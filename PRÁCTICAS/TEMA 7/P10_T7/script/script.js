
let vengadorDorado = document.getElementById("ironMan");
let coordenadas = document.getElementById("coordenadas");

document.addEventListener("mousemove", function(ev) {
    
    coordenadas.innerHTML = `${ev.clientX}  ${ev.clientY}`;
    vengadorDorado.style.cssText = `position: fixed; top: ${ev.clientY}px; left: ${ev.clientX}px; width: ${ev.clientX}px; aspect-ratio: 2/1; cursor: none;`;
});


