/*Dado una cadena de texto, comprobar si en un políndromo o no,
Los políndromos son palabras que se leen igual aun estando invertidas
Ejemplo: ana, bob, allivessevilla

No tener en cuenta espacios o simbolos raros.
*/

function polindromo (palabra) {
    let separar = palabra.split('').reverse().join('');
    
    if (palabra === separar) {
        return true;
    } else {
        return false;
    }
}

polindromo("bob");
