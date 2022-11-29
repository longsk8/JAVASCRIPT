//creamos una array con 10 numeros
const fila = 10

//declaramos la array vacia
let array = []

//hacemos un bucle
for( let i = 0; i < fila; i++){
    array[i] = parseInt((Math.random()*10)+1)//guardamos lo valor del array[i]
    for(let j = 0; j < array[i]; j++){
        document.write(" &#128564 ")
    }
    document.write("<br>")
}
console.log(array)