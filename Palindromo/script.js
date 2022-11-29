let texto = prompt("Introduce una frase")
//le quitamos el espacio al texto
texto = texto.replace(/\s/g,'').toLowerCase()
texto = texto.replace("á","a").replace("é","e").replace("ó","o").replace("í","i").replace("ú","u")
//generamos una variable
let reverse = texto.split("").reverse().join("")
if(texto === reverse){
    document.write("Es un palindromo")
}else{
    document.write("Dos frases sin magia")
}