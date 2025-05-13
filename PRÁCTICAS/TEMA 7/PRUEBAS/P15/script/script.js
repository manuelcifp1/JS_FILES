

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

document.addEventListener("click", (e) => {
    
    const radio = random(5, 200);
    let circulo = document.createElement("div");

    circulo.style.cssText = `background-color: rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)});
                             width: ${radio * 2}px;
                             aspect-ratio: 1/1;
                             top: ${e.clientY - radio}px;
                             left: ${e.clientX - radio}px;`;

    document.body.appendChild(circulo);                         
});