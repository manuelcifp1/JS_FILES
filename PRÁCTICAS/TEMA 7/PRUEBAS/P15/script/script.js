function random(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.addEventListener("click", (e) => {
    let circulo = document.createElement("div");
    let radio = random(10, 200);
    circulo.style.cssText = `top: ${e.clientY - radio}px;
                             left: ${e.clientX - radio}px;
                             background-color: rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)});
                             width: ${radio * 2}px;`;
    document.body.appendChild(circulo);                         
});                          

/*ERRORES COMETIDOS:
- AÑADIR PX DESPUÉS DE CADA PARÁMETRO DE RGB.
- OLVIDAR DOCUMENT.BODY.APPENCHILD(CIRCULO);
- OLVIDAR EL WIDTH Y ASPECT-RATIO */