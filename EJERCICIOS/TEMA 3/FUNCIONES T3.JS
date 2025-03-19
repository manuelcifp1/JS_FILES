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

string.slice(3,7);//Extrae los caracteres entre 3 y 7 y devuelve subcadena (el 7 no lo devuelve).

string.substring(6,-2);//Igual que el anterior, pero si un parámetro es negativo, lo convierte en 0. Además, los ordena de menor a mayor.

string.split([separador]);//Separa la cadena en donde hay separadores [opcional] y devuelve un array.

string.toLowerCase();//A minúsculas.

string.toUpperCase();//A mayúsculas.

string.trim();//Elimina los espacios al principio y final de la cadena.

string.toString();//Convierte lo que sea en cadena.

string.length;//Número de elementos.

string.localeCompare(string2);//Devuelve 1, 0, -1.

string.charAt(0);//El primer carácter.

string.charCodeAt(0);//Devuelve el código unicode del primer carácter.

string.indexOf("CIO");//Devuelve 3 (posición de la primera aparición).

string.lastIndexOf("CIO");//Posición de la última aparición.

string.endsWith("NGS");//Devuelve true (si finaliza con eso).

string.startsWith("FUN");//Si empieza con eso.

string.replace("FUN", "SAN");//SANCIONES.

string.replace(/cio/gi, "pan");//Busca la regEx y la sustituye por "pan". Con "g" sustituye todas las ocurrencias y con "i", no distingue entre minúsculas y mayúsculas.

string.trim();//Elimina espacios al principio y al final.

string.fromCharCode(56, 23, 76);//Crea una cadena con los carácteres Unicode con esos códigos.

let array = [4, 6, 8, 9];
let arrayB = [26, 14, 20, 10];

array.push(7);//AÑADE al final.

array.unshift(7);//AÑADE al principio.

array.shift();//ELIMINA el primero.

array.pop();//ELIMINA el último.

array.concat(arrayB);//CONCATENA ambos arrays.

array.slice(1, 3);//Devuelve las posiciones, último parámetro no inclusive.

array.slice();//Copia del array.

array.splice(1,2);//Devuelve esos 2 elementos borrados, modificando el array.

array.splice(1,2,28,64);//Sustituye los 2 primeros por los 2 últimos.

array.splice(0,3, 34,28,45);//Sustituye los elementos 0,1,2 por los tres últimos parámetros.

array.join();//Convierte un array en cadena separando sus elementos con comas.

array.join("");//Lo mismo sin comas.

delete array[2];//Borra un elemento.







