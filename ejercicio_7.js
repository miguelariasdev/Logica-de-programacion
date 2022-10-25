//Dados dos numeros, devolver cuantos numeros IMPARES
//hay entre ellos.

numero1 = 0;
numero2 = 0;
contador = 0;

function impares (numero1, numero2) {

    for (let index = numero1; index <= numero2; index++) {
        if(index %2 !== 0) {
            contador ++;
            
        }
        
    }

    return contador;
}

console.log(impares(0,52));