//señalemos el elemnento
const boton = document.querySelector(".boton")

function interruptor(){
    boton.classList.toggle("cambioColor")

}
interruptor()

//funcion callback para que cuando apretemos el boton cambie de color
//boton.addEventListener("click",interruptor)

//funcion anonima
// boton.addEventListener("click",function(){
//     boton.classList.toggle("cambioColor")
// })

//funcion de flecha
boton.addEventListener("click", ()=>{
    boton.classList.toggle("cambioColor")
})