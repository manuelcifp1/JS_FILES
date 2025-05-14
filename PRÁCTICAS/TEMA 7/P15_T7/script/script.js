function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

document.addEventListener("click", (e) => {
    let radio = random(5, 200);
    let circulo = document.createElement("div");    
    circulo.style.cssText = `background-color: rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)});
                             top: ${e.clientY - radio}px;
                             left: ${e.clientX - radio}px;
                             width: ${radio * 2}px;
                             aspect-ratio: 1/1;`;
    document.body.appendChild(circulo);                         
});






