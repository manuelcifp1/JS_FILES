function serPar(numero) {

    numero % 2 == 0 ?  document.write(" Par") : document.write(" Impar");
}


function escribirNumeros() {
    
    for (let i = 1; i <= 50; i++) {
        
        let elAleatorio = Math.floor(Math.random() * (10000)) + 1;
       
        document.write(elAleatorio) + " " + serPar(elAleatorio) + document.write("<br>");
    }
}