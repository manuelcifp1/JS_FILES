//Creamos las variables de las formas y sus radios y lados.
let circulo;
let radio;
let cuadrado;
let lado;

//Definimos la función principal.
export function iniciaListeners() {
    //Definimos la función aleatoria.
    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //Definimos la creación de círculos.
    document.addEventListener("click", (e) => {
        radio = random(5, 200);
        circulo = document.createElement("div");        
        circulo.style.cssText = `border-radius: 50%;
                                 width: ${radio * 2}px;
                                 aspect-ratio: 1/1;
                                 position: fixed;
                                 top: ${e.clientY}px;
                                 left: ${e.clientX}px;
                                 background-color: rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
        document.body.appendChild(circulo);                         
    });

    //Definimos la creación de cuadrados.
    document.addEventListener("mousedown", (e) => {
        if(e.button == 2) {
            lado = random(5, 200);
            cuadrado = document.createElement("div");        
            cuadrado.style.cssText = `width: ${lado * 2}px;
                                      aspect-ratio: 1/1;
                                      position: fixed;
                                      top: ${e.clientY}px;
                                      left: ${e.clientX}px;
                                      background-color: rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
            document.body.appendChild(cuadrado);
        }                         
    });

    //Evitamos la aparición del menú contextual.
    document.addEventListener("contextmenu", (e) => {
        e.preventDefault();
    });

    //Creamos la promesa
    let promesa = new Promise((resolve, reject) => {
        document.addEventListener("dblclick", () => {
            reject(Error("Interacción errónea"));
        });
    });
    
    //Recogemos el error de la promesa con catch.
    promesa.catch((error) => {
        console.error("Error capturado", error.message);
    });

}