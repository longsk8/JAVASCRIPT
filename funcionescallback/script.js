//funciones callback
//funcion que nos detectes numero primos
//aplicacion que imprima los x primeros numero primos

function primos(num){
    /* no tiene sentido enviar como parametro
    cero o negatiovos pos si acaso*/
    if (num< 1) return false //si el numero es menor que 1 devuelve falso
    //el uno no have falta comprobar
    if(num ==1) return true
    //para el resto de numeros empezamos dividir entre dos
    //el bulce termina cuando la raiz cuadrada del interdador supere el numero
    for(let i = 2; i * i <= num; i++){
        /* si el numero se puede dividir por el contador
        no es un primo */
        if(num%i==0) return false
       
    }
    /*si hemos salido del bucle sin ejecutar el retur tenemos un primo
    por tanto*/
    return true
 
}