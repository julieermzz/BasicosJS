// Funciones - Fuctions Expression

// Declaracion de funcion
function sumaDeclaration(n1=0, n2=0) {
return n1 + n2
}

console.log(sumaDeclaration(10 , 10))

// Expresion de funciones
const sumaExpression = function(n1=0, n2=0){
    return n1 + n2
}

console.log(sumaDeclaration(10 + 15))

// Funciones - Arrow Fuctions 
const sumaArrow = (n1=0, n2=0) => {
    return n1 = n2
}
console.log(sumaArrow(5, 50))

const sumaArrow2 = (n1=0, n2=0) => n1 + n2

console.log(sumaArrow(10, 10))

// Arrow Fuctions y Array Methods
const lenguajesDeProgramacion = ["JavaScript", "Python", "C#", "Ruby", "PHP", "LIPS"]

const nuevoArray = lenguajesDeProgramacion.map(function(lenguaje){
    if(lenguaje == 'Python'){
        return 'Mojo'
    }else{
        return lenguaje
    }
})

const nuevoArrayMap = lenguajesDeProgramacion.map(lenguaje => {
    if(lenguaje === 'Python'){
        return 'ArrowMojo'
    }
})

console.log(nuevoArray)
console.log(nuevoArrayMap)

const nuevoArray2 = lenguajesDeProgramacion.filter(function(lenguaje){
    return lenguaje === 'JavaScript'
})

const nuevoArrayFilterArrow = lenguajesDeProgramacion.filter(lenguaje => {
    return lenguaje != 'JavaScript'
})

console.log(nuevoArray2)
console.log(nuevoArrayFilterArrow)