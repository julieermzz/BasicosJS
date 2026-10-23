const lenguajesDeProgramacion = ["JavaScript", 
"   Python", "C#", "Ruby", "PHP", "LIPS",
]

//Filter
nuevoArray = lenguajesDeProgramacion.filter(
    Lenguaje => Lenguaje === 'JavaScript'
)
console.log(nuevoArray)
//comprobar si un elemento existe 
const resultado = lenguajesDeProgramacion.includes('Ruby')
console.log(resultado)

//some - Devuelvesi la menos una cumple con la condicion
const numeros = [10, 20, 30, 40, 50]
const resultadoNume = numeros.some(numero => numero > 15)
console.log('resultado', resultadoNume)

//Find - Devuelve si el primer elemento que cumplacon la condicion
const resultadoNume2 = numeros.find(numero => numero > 15)
console.log('resultado num 2', resultadoNume2)

//Every - retorna trueo false si todso cumplen la condicion
const resultadoNume3 = numeros.every(numero => numero > 15)
console.log('resultado num 3', resultadoNume3)

//Reduce - acumulador de algun total
const resultadoNume4 = numeros.reduce((total, numero)=> numero + total, 0)
console.log('resultado num 4', resultadoNume4)

//ForEach - Itera en cada uno de los elementos de un array
const nuevoArray2 = lenguajesDeProgramacion.forEach((Lenguaje, index) => console.log(Lenguaje))
console.log('Nuevo Array 2', nuevoArray2)

//Crea un nuevo arraya partir de uno original
const arrayMap = lenguajesDeProgramacion.map( Lenguaje => Lenguaje)
console.log('array map', arrayMap)

