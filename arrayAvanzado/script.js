//ordenacion avanzadas de array
const palabras = ["Ñu", "aguila", "boa", "oso","maripisa", "Nutria"]
//ordenamos con sort
//palabras.sort()
//console.log(palabras)//no lo ordena alfabeticamente
palabras.sort((a,b) => a.localeCompare(b,"es"))

console.log(palabras)

const notas = [5,6,8,,9,10,1,2]

//recorremos la nota con un forech
notas.forEach(function(nota, i){
    console.log(`la nota ${i} es ${nota}`)
})

//forech para set
let conjunto = new Set()
conjunto.add("Paul").add("Ringo").add("Andres").add("Matias")
conjunto.forEach(function(valor){
    console.log(`el valor es ${valor}`)
})


//forech para mapas

let grupo = new Map()
grupo.set(1,"Uruguay").set(2,"Portugal").set(3,"Corea del sur").set(4,"Ghana")
grupo.forEach(function(valor, indice ){
    console.log(`indice ${indice}, el valor es ${valor}`)
})

//metodo map
const calificaciones = [5,6,8,,9,10,1,2]
const doble = calificaciones.map(x => 2*x)
console.log(doble)
console.log(calificaciones)

//metodo reduce
const miArray = [1,2,3,4,5,6,7]
let suma = miArray.reduce((acumular, valor) => acumular + valor,0)//0+1+3+4 nos devueve esto
console.log(suma)

//metodo filter
const nuevoArray =[4,9,5,8,14,16,20,1,2,3]
const filtrado = nuevoArray.filter(x => x>5)//nos devuelve los numero mayores de 5

console.log(filtrado)