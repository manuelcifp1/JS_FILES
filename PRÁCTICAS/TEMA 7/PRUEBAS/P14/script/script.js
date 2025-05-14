function iniciaListeners() {
    const item = document.getElementById("item");
    const cajas = document.querySelectorAll(".caja");

    let origin;

    //===============================================
    item.addEventListener("dragstart", (e) => {
        origen = e.target.parentElement;
        e.dataTransfer.setData("text/plain", e.target.id);
        setTimeout(() => {
            e.target.style.display = "none";
        }, 0);

    });

    item.addEventListener("dragend", (e) => {
        e.target.style.display = "block";
    });

    //caja=====================================================
    cajas.forEach((caja) => {
        caja.addEventListener("dragover", (e) => {
            e.preventDefault();
        });

        caja.addEventListener("drop", (e) => {
            e.preventDefault();
            let itemId = e.dataTransfer.getData("text/plain");
            let elemento = document.getElementById(itemId);
            if(caja !== origen) {
                caja.appendChild(elemento);
            }
        });
    });

    //body========================================================
    document.body.addEventListener("drop", (e) => {
        e.preventDefault();
        let itemId = e.dataTransfer.getData("text/plain");
            let elemento = document.getElementById(itemId);
            if(origen && e.target.classList.contain("caja")) {
                origen.appendChild(elemento);
            }
    });

    document.body.addEventListener("dragover", (e) => {
        e.preventDefault();
    });
}
/*ERRORES COMUNES:
- CUIDADO COMO RELLENAMOS LOS ADDEVENTLISTENERS
- SIEMPRE ES E.DATATRANSFER, CON LA E DELANTE */