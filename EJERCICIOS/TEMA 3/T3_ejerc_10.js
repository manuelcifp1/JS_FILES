
        let colores = ["rojo",,"amarillo",,,"verde"];

        for (const x of colores) {
            if (x === undefined || x === "empty slot") {
                continue;
            } else {
                console.log(x + " ");
            }
        }
