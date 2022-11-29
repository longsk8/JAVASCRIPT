// creamos uana array con 20 números
const filaIconos = 20
//declarar array sin parametros
let array = []
//asignar valores aleatorios entre 1 y 50
for(let i = 0; i < filaIconos; i++){
    array[i] = parseInt((Math.random()*50)+1)
    for(let j = 0; j < array[i] ; j++){
        document.write("&#129299")
    }
    document.write("<br>")
}
console.log(array)