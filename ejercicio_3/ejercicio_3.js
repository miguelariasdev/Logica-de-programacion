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


function buscarPalabra (frase, palabra) {

    frase_limpia = frase.toLowerCase().replace(/[!¡.,-]/gi, '');
    palabraMinuscula = palabra.toLowerCase();
    numeroPalabra = 0;

    arrayPalabras = frase_limpia.split(" ");

    console.log(arrayPalabras);

    for (let i = 0; i < arrayPalabras.length; i++) {
        if (arrayPalabras[i] === palabraMinuscula){
            numeroPalabra ++;
            
        }
        
    }
    console.log(numeroPalabra);
    return numeroPalabra;

}


buscarPalabra(prompt("Indica tu frase aquí: "), prompt("Indica la palabra a buscar: "));
