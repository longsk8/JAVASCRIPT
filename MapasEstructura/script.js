/*MAPAS son pareja clave valor 
las claves no se pueden repetir pero los valores si */


//declaracion y asiganacion de valores
 const dias = new Map()
//inicializamos
dias.set(1, "Lunes")
dias.set(2, "Martes")
dias.set(3, "Miercoles")
dias.set(4, "jueves")
dias.set(5, "viernes")
dias.set(6, "Sabado")
dias.set(7, "Domingo")
console.log(dias)

//inicializacion en la declaracion
const personas = new Map([[1, "Pepe"],[2, "Matias"],[3, "Andres"]])
console.log(personas)

//operaciones que podemos hacer con Map
//obtenemos valores
console.log(personas.get(1))//nos devuelve pepe
//buscar una clave
console.log(personas.has(1))//nos devuelve true
//borrar valores
personas.delete(3)
console.log(personas)// elimana andres de la array

//objetos iterables
//metodos keys y values

const provincias = new Map()
provincias.set(1, "barcelona")
provincias.set(2, "Madrid")
provincias.set(3, "Cordoba")
provincias.set(4, "Salamanca")
provincias.set(5, "Sevilla")
provincias.set(6, "Valencia")
provincias.set(7, "Oviedo")
//vamos a crear un boocle
let claves = provincias.keys()

for(let k of claves){
    console.log(k)
}

console.log("--------------")

let valores = provincias.values()
for(let v of valores){
    console.log(v)
}

//como recorremos mapas
for(let elemento of provincias){
    console.log(elemento)
}

//desestructurar mapas
for(let[clave,valor] of provincias){
    console.log(`clave: ${clave}, Valor: ${valor}`)
}



