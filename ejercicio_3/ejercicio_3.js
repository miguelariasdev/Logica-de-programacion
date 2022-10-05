/* Dada una palabra, buscarla en una frase y devolver
cuantas veces aparece en la frase y la palabra deben ser
parametros de una funcion*/

/*
Ejemplos:
coincidencias("hola soy una palabra en una frase, PALABRA"), "palabra") 

Devuelve : 2
coincidencias("soy la frase", "victor") //Devuelve: 0
*/

/*
Como hacerlo:
- Funcion con dos parammetros "frase" y "busqueda"
- Poner string en minusculas y limpiarlo
- Comprobar si la busqueda esta incluida en la frase
- Crear un array de palabras de la frase
- Mapear esas palabras y hacer un contador de cada una
- Devolver el contenido de la busqueda
 */

function buscarPalabra (frase, busqueda) {

    console.log(frase);
    console.log(busqueda);

}

buscarPalabra(prompt("Indica tu frase aquí: "), prompt("Indica la palabra a buscar: "));