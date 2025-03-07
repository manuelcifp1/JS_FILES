function tabla (nFilas, nColumnas) {
    document.write("<table>");
    for (let i = 1; i <= nFilas; i++) {
        document.write("<tr></tr>");
        for (let j = 1; j <= nColumnas; j++) {
            document.write("<td> fila: " + i + "columna: " + j + "</td>");
        }
    }
    document.write("</table>");
}

