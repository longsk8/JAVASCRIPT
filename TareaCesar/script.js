//pedimos al usuario que intrusca un texto

let texto = prompt("Introduce una palabra que quieras cifrar")
//declaramos la varibale clave
let clave

//validar  la clave
do {
    clave = prompt("Introduce la clave (numero entero)")
    if(isNaN(Number (clave))){
        alert("Esta clave no es correcta")

    }
    //repetimos toda la veces nesesaria mientras hasta clave isNan
} while(isNaN(Number(clave)))

//eliminar decimales con parseInt
clave = parseInt(clave)

//hacemos el recorrido
for(let letra of texto){
    let cifra = letra.charCodeAt(texto) + clave
    document.write(String.fromCharCode(cifra))
}