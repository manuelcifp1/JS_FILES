function iniciaListeners() {
    const item = document.getElementById("item");

    const cajas = document.querySelectorAll(".caja");

    let origen;

    //Dos eventos para item.

    item.addEventListener("dragstart", (e) => {
        origen = e.target.parentElement;//Selecciona al padre de item
        e.dataTransfer.setData("text/plain", e.target.id);//Guarda el id para luego.
        setTimeout(() => {
            e.target.style.display = "none";
        }, 0);
    });

    item.addEventListener("dragend", (e) => {
        e.target.style.display = "block";
    });

    //Dos eventos para las cajas.

    cajas.forEach((caja) => {
        caja.addEventListener("dragover", (e) => {
            e.preventDefault();
        });

        caja.addEventListener("drop", (e) => {
            e.preventDefault();
            const itemId = e.dataTransfer.getData("text/plain");//Recupera id del item.
            const elemento = document.getElementById(itemId);//Selecciona el elemento.

            if(caja !== origen) {
                caja.appendChild(elemento);
            }
        });
    });

    //Dos eventos para el body.

    document.body.addEventListener("drop", (e) => {
        e.preventDefault();
        const itemId = e.dataTransfer.getData("text/plain");
        const elemento = document.getElementById(itemId);

        if(origen && !e.target.classList.contains("caja")) {
            origen.appendChild(elemento);
        }
    });

    document.body.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

}