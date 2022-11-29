// Ejecutar el siguiente programa. Introducimos dos números y se suman
 //creamos las variables
 let dato1
 let dato2
 let numero1
 let numero2
 
 //le pedimos al usuario que introdusca un numero
 do{
    dato1 = window.prompt("Introduce el primer numero ")
    if(isNaN(Number(dato1)))//confirmamos que el usuario introdusca un numero
    alert("Introduce un numero")//si no le avisame que no ingreso un numero
}
while(isNaN(Number(dato1)))

numero1 = parseInt(Number(dato1))// introdusca un valor entero no decimal

do{ dato2 = window.prompt("Introduce el segundo numero ")
    if(isNaN(Number(dato2)))
    alert("Introdue un numero")
}
while(isNaN(Number(dato2)))

numero2 = parseInt(Number(dato2))

 //creamos la varible resultado
 let resultado = numero1 + numero2

 //imprimimos por pantalla el resultado
 document.write(`<br> la suma es ${resultado}` )
