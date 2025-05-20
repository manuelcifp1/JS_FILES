export let circulo;
export let radio;
export let lado;
export let cuadrado;

export function iniciaListeners() {
    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    document.addEventListener("click", (e) => {        
        radio = random(5, 200);
        circulo = document.createElement("div");
        circulo.setAttribute("class", "figura");
        circulo.style.cssText = `border-radius: 50%;
                                width: ${radio * 2}px;
                                aspect-ratio: 1/1;
                                background-color: rgb(${random(0,255)}, ${random(0,255)}, ${random(0,255)});
                                position: fixed;
                                top: ${e.clientY - radio}px;
                                left: ${e.clientX - radio}px;`;
        document.body.appendChild(circulo);                         
    });

    document.addEventListener("mousedown", (e) => {
        if(e.button == 2) {
            lado = random(5, 200);
            cuadrado = document.createElement("div");
            cuadrado.setAttribute("class", "figura");
            cuadrado.style.cssText = `width: ${lado * 2}px;
                                      aspect-ratio: 1/1;
                                      background-color: rgb(${random(0,255)}, ${random(0,255)}, ${random(0,255)});
                                      position: fixed;
                                      top: ${e.clientY - lado}px;
                                      left: ${e.clientX - lado}px;`;
            document.body.appendChild(cuadrado);                          
        }
    }); 
    
    document.addEventListener("contextmenu", (e) => {
        e.preventDefault();
    });

    let promesa = new Promise((resolve, reject) => {
        document.addEventListener("dblclick", (e) => {
            reject (Error("Interacción errónea"));            
        });        
    });

    promesa.catch((error) => {
        console.error("Error capturado", error.message);
    });    
}



