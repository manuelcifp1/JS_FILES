
    /*Ejercicio 14.- Suponiendo el siguiente array de objetos recogidos de un archivo json:
        [{nombre: "Magnus",apellido1: "Ámdeath",DNI: "45.999.444X"},
        {nombre: "Seth",apellido1: "Unknown",DNI: "44.922.123S"},
        {nombre: "Pickles",apellido1: "Unknown",DNI: "X5.112.674P"}]
    Se pide realizar una ordenación completa mediante el método sort() de tal modo que primero
     se comparen apellidos, y en caso de ser iguales, se comparen los nombres.
      Para ello, deberás usar el método localeCompare()
       (Pista.- a.nombre.localeCompare(b.nombre))*/
    
        let arrayObj = [
        {nombre: "Magnus",apellido1: "Ámdeath",DNI: "45.999.444X"},
        {nombre: "Seth",apellido1: "Unknown",DNI: "44.922.123S"},
        {nombre: "Pickles",apellido1: "Unknown",DNI: "X5.112.674P"}
        ];

        arrayObjSort = arrayObj.sort(function compare(a, b) {
            let comparaApellidos = a.apellido1.localeCompare(b.apellido1);
            
            if (comparaApellidos != 0) {
                return comparaApellidos;
            } else if (comparaApellidos == 0) {
                return a.nombre.localeCompare(b.nombre);
            }
        });

        console.log(arrayObjSort);
