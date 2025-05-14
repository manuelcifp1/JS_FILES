function iniciaListeners() {
//VARIABLES (3) =============================================================================================    
    const item = document.getElementById("item"); //El cuadrado azul que se va a arrastrar
    const cajas = document.querySelectorAll(".caja"); //Las cajas donde puede soltarse el cuadrado

    let origen; //Aquí se guarda la caja desde la que se arrastra originalmente
    
//EVENTOS PARA ITEM (2) =====================================================================================
    //Este evento se dispara al comenzar a arrastrar el cuadrado
    
    item.addEventListener("dragstart", (e) => {
        origen = e.target.parentElement; //Guarda la caja en la que estaba originalmente
        e.dataTransfer.setData("text/plain", e.target.id); //Guarda el id del elemento para recuperarlo luego
        setTimeout(() => {
            e.target.style.display = "none"; // Oculta el cuadrado mientras se arrastra
        }, 0); //El 0 asegura que ocurra después de iniciar el drag
    });

    //Este evento se dispara cuando se suelta el elemento, en cualquier sitio
    item.addEventListener("dragend", (e) => {
        e.target.style.display = "block"; //Muestra de nuevo el cuadrado al terminar el arrastre
    });

//EVENTOS PARA LAS CAJAS (2) =================================================================================
    //Asociamos a cada caja los eventos necesarios
    cajas.forEach((caja) => {
        //Permitir que un elemento pueda soltarse dentro de esta caja
        caja.addEventListener("dragover", (e) => {
            e.preventDefault(); //Necesario para que drop funcione
        });

        //Evento que ocurre cuando se suelta el cuadrado sobre una caja válida
        caja.addEventListener("drop", (e) => {
            e.preventDefault(); //Previene comportamiento por defecto
            const itemId = e.dataTransfer.getData("text/plain"); //Recupera el id del cuadrado
            const elemento = document.getElementById(itemId); //Localiza el elemento en el DOM

            if (caja !== origen) { //Solo se mueve si no es la misma caja de donde salió
                caja.appendChild(elemento); //Mueve el cuadrado a esta caja
            }
        });
    });

//EVENTOS PARA EL BODY (2) ===================================================================================
    //Si se suelta fuera de cualquier caja, devolver el cuadrado a su lugar original
    document.body.addEventListener("drop", (e) => {
        e.preventDefault();
        const itemId = e.dataTransfer.getData("text/plain");
        const elemento = document.getElementById(itemId);

        //Si el destino NO es una caja, volver al origen
        if (origen && !e.target.classList.contains("caja")) {
            origen.appendChild(elemento);
        }
    });

    //Necesario para permitir soltar en cualquier parte del body si hiciera falta
    document.body.addEventListener("dragover", (e) => {
        e.preventDefault();
    });
}
