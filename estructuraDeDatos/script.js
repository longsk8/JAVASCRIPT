//destructuracion de arrays
//asignar distintos valores a varias variables a la vez

let [saludo, despedida, fin] = ["Hola", "Adios","Hasta nunca"]
console.log(saludo)
console.log(despedida)
console.log(fin)
 
let[numero1,numero2] = [10, Math.random()*20]
console.log(parseInt(numero2))//parseInt nos devulve un numero entero

/*Estructuras SET conjunto de datos igual 
que las variable pero no pueden duplicar datos
no permite datos duplicados*/

//declarar o inicializar conjunto
const lista = new Set();
//añadimos el valor
lista.add(8)
lista.add(4)
lista.add(3)
lista.add(3)
lista.add(2)
lista.add(2)
console.log(lista)

//inicializar a partir de una array
const numero = new Set([4,7,4,5,7,6,4,5,8,9,1,2])
console.log(numero)
//nos imprimos todo lo numero menos lo que se repiten

//declarar cadena de texto
const cosas= new Set("conjunto")
console.log(cosas)

const cosas2 = new Set()
cosas2.add("conjunto")
console.log(cosas2)

//metodos de conjuntos

const listaMetodos = new Set();
listaMetodos.add(5).add(6).add(5).add(7).add(2).add(5)
console.log(listaMetodos.size) 
//size es como si fuera el length pero en objetos reccore cada objeto no repetido, en la consola nos daria 4 objetos

const number = new Set([4,5,6,7,8,1,6,5,9])
const number2 = new Set([4,5,6,7,8,1,6,5,9])

//como eliminar un valor de la array
number.delete(8)
console.log(number)
//borrar todos los elementos  con el clear
number2.clear()
console.log(number2)

//operar spread ->convertimos un conjuntos en arrays
const num = new Set([4,7,4,5,7,6,4,5,8,9,1,2])
const newArray = [...num]
console.log(newArray)

//recorrido
const pruebaRecorrido = new Set([4,7,4,5,7,6,4,5,8,9,1,2])
//hacemos el bucle para recorrer 
for(let numer of pruebaRecorrido){
    console.log(numer)
}






