/*function funcion1(){
    console.log("Inicion funcion1")
    funcion2()
    console.log("fin funcion1")
}
function funcion2(){
    console.log("inicio funcion 2")
    funcion3()
    console.log("fin de funcion2")

}
function funcion3(){
    console.log("en funcion3")
}
funcion1()*/

//ejemplo fractorial 5*4*3*2*1
//factorial de 0 es = 1

function factorial(numero){
 if(numero <= 1) return 1
    else return numero * factorial(numero-1)
}
console.log(factorial(5))

/* SECUENCIA FIBONNACI 0 0 1
SIGUIENTE ELMENTO CON LA SUMA DE LOS ANTERIORES.*/
//solucion recursiva
function fibonnaci(number){
    if(number == 0) return 0
    else if (number == 1) return 1
    else return fibonnaci(number -1) + fibonnaci(number -2)
}
let num = prompt("introduce un numero entero")

//document.write(fibonnaci(number))
document.write(`El Valor ${num} de la secuencia 
fibonnaci es ${fibonnaci(num)}`)

//solucion interativa
