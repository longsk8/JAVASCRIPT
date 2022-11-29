//declaramos
function saludo(){
    console.log("Hola mundo")//intrucciones
}
//llamamos a la funcion
saludo() //hola mundo


function triple(n){
    return 3 * n
}
let x = 6
let y = 8

console.log(triple(9)) //=27
console.log(triple(y))  //=24
console.log(triple(x))  //=18
console.log(triple(x) + triple(y)) //42
console.log(triple(triple(2)))     //18
console.log("")

function pares (array){
    let contadorpares = 0
    if(array instanceof Array){//intace of reccore cada uno de los elementos
        for(numero of array){
            if(numero%2 == 0){
                contadorpares++
            }
        }
    }
    return contadorpares
}
console.log(`total de numeros pares = `+ pares([1,2,3,4,5,6,7,8,9,10,11,12,13,14]))
console.log("")


//asignar funciones a variables

//funcion anonima
const doble =  function(x){
    return 2*x
}
let z= 5
console.log(`doble de 5 = `+ doble(z)) //10

//funciones de flechas
//=>
const cuadruple = x =>4*x
console.log(cuadruple(12))

//esto es lo mismo que esto
/*function cuadruple(x){
    return 4*x
}*/

const media = (x,y) => (x+y)/2
console.log(`la media de 30 es `+media(10,20));


const sumatorio = (num) =>{
    let acumulado = 0
    for (let i = num; i > 0; i--){
        acumulado += i
    }
    return acumulado
}
console.log(sumatorio(5))


