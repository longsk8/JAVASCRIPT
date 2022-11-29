//declaremos la variables
const numeroRepeticiones = 10000

//declaracion del mapa -inicializando
let mapa = new Map()
for(let i = 1; i <= 10; i++){
    mapa.set(i,0)
}

//10000 calculos de numero aleatorio
for(let i = 1; i <= numeroRepeticiones; i++){
    let num = parseInt(Math.random()*100)+1
    //controlamos la frecuencia
    let frecuencia = mapa.get(num)
    mapa.set(num, frecuencia+1)
}

//mostramos los resultado por pantalla
document.write("<h1>Frecuencias</h1>")
document.write("<ul>")
for(let i = 1; i <= 10; i++){
    document.write(
        `<li> Numero ${i}: `+`${mapa.get(i)} </li>`
    )
}
document.write("</ul>")
