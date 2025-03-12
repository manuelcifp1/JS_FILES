let string = "FUNCIONES PARA STRINGS";
let stringB = "son geniales"

string.length;

string.charAt(4);//Devuelve el carácter en la posicion 4 (empezando por 0).

string.concat(" ", stringB);//Concatena cadenas.

string.startsWith("FUNCIONES");//Devolverá true.

string.endsWith("STRINGS");//Devolverá true.

string.includes("PARA");//True.

string.lastIndexOf("C");//Devuelve la posición de la última aparición de la cadena/parámetro.

string.match(regExp);//Busca en la cadena la regExp y devuelve coincidencias en un array.

string.repeat(3);//Devuelve nueva cadena repetición de la original 3 veces.

string.replace(str1/regExp, str2);//Reemplaza 1er parámetro por 2º.

string.search(str/regExp);//Devuelve la primera posición del parámetro en la cadena.

string.slice(3,7);//Extrae los caracteres entre 3 y 7 y devuelve subcadena.

string.split(string, [separador]);//Separa la cadena en donde hay separadores y devuelve un array.

string.toLowerCase();//A minúsculas.

string.toUpperCase();//A mayúsculas.

string.trim();//Elimina los espacios al principio y final de la cadena.

string.toString();//Convierte lo que sea en cadena.




