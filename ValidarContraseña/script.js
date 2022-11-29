// declaración de variables iniciales
let nombre
let contraseña
// centinela para controlar si cancela el cuadro
let seguir = true
// variables para los datos validados
let nombreOK
let contraseñaOK
// premisas de la contraseña con boleanos
let hayMin = false
let hayMay = false
let hayNum = false
let hayOtros = false

//string de inicialización de letras y números
const minuscula = "aáàbcçdeèéfghiíìjklmnñoóòpqrstuúùvwxyz"
const numero = "0123456789"

//validamos del nombre de usuario
do {
    nombre = prompt("Escribe tu nombre de usuario")
    if (nombre == null) {
        seguir = false
    }
    if (seguir) {
        //si hay algo, lo validamos
        nombreOK = true
        let i = 0
        while (nombreOK && i < nombre.length) {
            let caracter = nombre.charAt(i)
            //validar si es minúscula
            if (minuscula.indexOf(caracter) == -1) {
                //no se encontró una minúscula de la lista (string)
                nombreOK = false
                alert("El usuario introducido es incorrecto \n" +
                    "Sólo se admiten minúsculas")
            }
            i++
        }
    }
} while (seguir == true && nombreOK == false)

//contraseña
if (seguir) {
    //petición de contraseña
    do {
        let hayMin = false
        let hayMay = false
        let hayNum = false
        let hayOtros = false
        contraseña = prompt("Escribe tu contraseña")
        if(contraseña == null){
            seguir = false
        }
        if(seguir){
            //validación de contraseña
            contraseñaOK = true
            let i = 0
            while(contraseñaOK && i < contraseña.length){ //recorremos la contraseña y compravamos cada uno de los caracteres
                let caracter = contraseña.charAt(i)
                //validar si hay minúscula
                if(minuscula.indexOf(caracter) != -1){
                    hayMin = true
                }
                //validar si hay mayúscula
                else if (minuscula.toUpperCase().indexOf(caracter) != -1){
                    hayMay = true
                }
                //validar si hay número
                else if(numero.indexOf(caracter) != -1){
                    hayNum = true
                }
                // resto
                else {
                    //son de otro tipo
                    hayOtros = true
                }
                i++
            }
            contraseñaOK = (
                hayMin == true && hayMay == true && hayNum == true && hayOtros == true
            )
            if(contraseñaOK == false){
                alert("La contraseña es icorrecta \n" +
                "Debe tener minúsculas, mayúsculas, "+
                " números y otros símbolos")
            }
        }//puede ser interesante sacarlo por consola
        console.log(
            "Mayúsculas :" + hayMay + 
            ", Minúsculas; " + hayMin +
            ", Números: " + hayNum + 
            ", Símbolos: " + hayOtros
        )
    } while (seguir == true && contraseñaOK == false)
}
//mensajes finales
if(seguir == true){
    document.write("<p>Datos almacenados</p>")
} else {
    document.write("<p>Operación cancelada</p>")
}