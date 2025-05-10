
let ironMan = document.getElementById("goldenAvenger");
let coordenadas = document.getElementById("coordenadas");

document.addEventListener("mousemove", function(ev) {

    coordenadas.innerText = `${ev.clientX} ${ev.clientY}`;
    goldenAvenger.style.cssText = `position: fixed; top: ${ev.clientY - 75}px; left: ${ev.clientX - 150}px`;
});

/*ERRORES COMUNES: 
- OLVIDAR LOS PX DE TOP Y LEFT
- ASIGNAR DOCUMENT AL ADDEVENTLISTENER
- IRONMAN.STYLE.CSSTEXT PARA DARLE LOS ESTILOS

PASOS A SEGUIR:
1. SELECCIONAR EL DIV
2. SELECCIONAR EL PÁRRAFO DE LAS COORDENADAS
3. CREAR DOCUMENT.EVENTLISTENER CON MOUSEMOVE Y LA FUNCIÓN (EV) QUE CONTIENE: PARRAFO.INNERTEXT Y DIV.STYLE.CSSTEXT
4. CREAR EL ARCHIVO DE ESTILOS*/