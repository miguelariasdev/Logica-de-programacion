//Dada una cadena de texto, darle la vuelta e invertir el orden
//de sus caracteres, sin usar métodos propios del lenguaje,
//solo estructuras de control.




function invertirTexto (cadena) {

cadenaInvertida = "";
for (let letra of cadena) {

    cadenaInvertida = letra + cadenaInvertida;
}

console.log(cadenaInvertida);
}

invertirTexto("Hola amigo mio");