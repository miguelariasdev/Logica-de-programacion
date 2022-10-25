//Dibujar un cuadrado hueco con asteriscos
//Ejemplos:
//cuadrado(4)

//Devuelve:

/*

****
*  *
*  *
****


*/

asterisco = "*";
espacio = " ";
nlados = 0;

function cuadradoArribaYAbajo(nlados) {
    
    console.log(asterisco.repeat(nlados));

    for (let index = 1; index < nlados - 1; index++) {
        console.log(asterisco + espacio.repeat(nlados - 2) + asterisco);

        
    }

    console.log(asterisco.repeat(nlados));    
}

cuadradoArribaYAbajo(4);


