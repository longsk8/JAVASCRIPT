//declaramos las variables
const contenedor = document.getElementById('contenedor')
const colores = ['#F2B90F', '#F28705', '#F27405', '#D93D04', '#730C02']

const cuadros = 500


//hacemos un bucle
for(let i = 0; i < cuadros; i++){
    const cuadro = document.createElement('div')
    cuadro.classList.add('cuadro')
    cuadro.addEventListener('mouseover', ()=> ponerColor(cuadro))
    cuadro.addEventListener('mouseleave', ()=> sinColor(cuadro))
    contenedor.appendChild(cuadro)
}

//funcion para ponemo un color
function ponerColor(elemento){
    const color = colorAleatorio()
    elemento.style.background = color
}

//funcion quitar el color
function sinColor(elemento){
  elemento.style.background = 'rgb(34, 33, 33)'  
}


//funciones
//eleijimos un color aleatorio entre los 5 de la array
function colorAleatorio(){
    return colores[Math.floor(Math.random() * colores.length)]
}


