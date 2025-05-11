
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

document.addEventListener("click", (e) => {
    const circulo = document.createElement("div");
    circulo.classList.add("circulo");

    const colorAleatorio = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
    const ancho = random(5, 200);
    circulo.style.cssText = `width: ${ancho}px;
                             height: ${ancho}px;
                             background-color: ${colorAleatorio};
                             top: ${e.clientY - ancho / 2}px;
                             left: ${e.clientX - ancho / 2}px;`;

    document.body.appendChild(circulo);

});





