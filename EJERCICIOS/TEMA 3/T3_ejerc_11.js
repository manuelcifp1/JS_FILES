
        const numA = [1.15,2.33,3.99,4.50];
        const numB = ["cinco", "seis", "siete"];

            //1) Unir los dos arrays y sobre este, eliminar el primer y último elemento.
        let union = numA.concat(numB);
        union.shift();
        union.pop();
        
        //2) Añadir “primero” al principio y “otros” al final del Array.
        union.unshift("primero");
        union.push("otros");

        //3) Sustituir cada elemento numérico por él mismo, pero sin su parte decimal.
        union = union.map(x => (typeof x === "number" ? Math.trunc(x) : x));

        //4) Mostrar por pantalla los elementos como cadena de caracteres en la forma uno y otro y otroMas.
        let cadenaUnion = union.join(" y ");
        
        console.log(cadenaUnion);        

        //5) Mostrar por pantalla solo los datos numéricos.
        console.log(union.filter(x => typeof x === "number").join(" "));


   