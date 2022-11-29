let texto = prompt("Introduce el texto que quieres cifrar")
let clave = prompt("introduce la clave (serie)")

let i = 0 //indice propio para la clave

//estructura

for(let letra of texto){
    let cifra = letra.charCodeAt(letra) + Number (clave.charAt(i))
    document.write(String.fromCharCode(cifra))
    i++
    if( i== clave.length){
        i = 0
    }
    document.write(String.fromCharCode(cifra))
}