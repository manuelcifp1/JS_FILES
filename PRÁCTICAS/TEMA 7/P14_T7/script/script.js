function iniciaListeners() {
    const item = document.getElementById("item");
    const cajas = document.querySelectorAll(".caja");

    let origin;

//eventos para item =====================================================

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

//eventos para cajas =====================================================

    cajas.forEach((caja) => {

        caja.addEventListener("dragover", (e) => {
            e.preventDefault();
        });

        caja.addEventListener("drop", (e) => {
            e.preventDefault();
            const itemId = e.dataTransfer.getData("text/plain");
            const elemento = document.getElementById(itemId);

            if(caja !== origen) {
                caja.appendChild(elemento);
            }
        });
    });

//eventos para document.body ============================================

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





