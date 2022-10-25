//Cuanto es el X por ciento de X numero?


function calcularPorcentaje (porcentaje, numero) {
    resultado = 0;
     
    resultado = parseFloat(porcentaje) * 0.01 * parseFloat(numero);

    console.log("El " + porcentaje + "% de " + numero + " es " + resultado);
    return resultado;
}

calcularPorcentaje(30, 350);