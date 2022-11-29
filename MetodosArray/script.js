//metodos con array

const dias = ['lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']
console.log(dias.length)

//intace of nos comprueba si es una array o no
let a = [1,2,3,4,5,6,7,8,9]
let b = "Hola"
console.log(a instanceof Array)
console.log(b instanceof Array)

//modificamos los elementos de un array
//añadir y eliminar elements
let frutas = ["manzana"]
frutas.push("naranja") //puhs nos añade elementos en en la array
console.log(frutas)
//eliinamos el ultimo elemento de la array con pop
frutas.pop()
console.log(frutas)

//añadimos elementos al inicio del array
const animales =["perro","gato","conejo"]
animales.unshift("elefante")
console.log(animales)
//eliminamos el primer elemento
animales.shift()
console.log(animales)

//unir arrays

const dias1 = ['lunes','Martes','Miercoles']
const dias2 = ['Jueves','Viernes','Sabado','Domingo']
//metodo concat para unir se genera en otra array
const semana = dias1.concat(dias2)
console.log(semana) 


//tranformar el array en un string
//metodo join
console.log(semana.join())
console.log(semana.join(" "))
console.log(semana.join("-"))
console.log(semana.join("<->"))

//buscar elementos de una array
//indeof
const verduras = ["zanahoria","lechuga","Tomate","patata","lechuga"]
console.log(verduras.indexOf("Tomate"))

//lastIndexof nos devuleve la ultima posicion de la array
console.log(verduras.lastIndexOf("lechuga"))

//includes nos devulve  true o false true si esta en el array false no esta en el array
console.log(verduras.includes("Tomate"))

//revertir el orden de una array
const diasSemana = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']
diasSemana.reverse()
console.log(diasSemana)

//sort ordena alfabeticamente y tmb si detecta minusculas y mayusculas
diasSemana.sort()
console.log(diasSemana)




