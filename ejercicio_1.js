//Dado un numero resolver su tabla de multiplicar completa

function tablaDeMultiplicar (numero){
    let resultado = "Tabla del "+numero+ "\n";

    for (let i = 1; i <= 10; i++) {
                
        let multiplicacion = numero * i;

        resultado+=(i + " x " + numero + " = " + multiplicacion + "\n");
    }
    return resultado;
}

console.log(tablaDeMultiplicar(8));