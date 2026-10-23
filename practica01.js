let frutas = ["manzana", "banana"]

// Agregar naranja al arreglo
frutas.push("naranja")

console.log(frutas)

// Eliminar el último elemento
frutas.length = frutas.length - 1

console.log(frutas)


let numeros = [1, 2, 3, 4, 5, 6]


// Iterar el arreglo utilizando forEach e imprimir los números
numeros.forEach(numero => console.log(numero))


let numeros2 = [1, 2, 3, 4, 5, 6]

// Utilizar map y regresar un nuevo arreglo que multiplique cada elemento por 5
const multiplo_5 = numeros2.map(numero => numero * 5)

console.log(multiplo_5)

let numeros3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// Utilizar filter y regresar un nuevo arreglo de los números pares
const pares = numeros3.filter(numero => numero % 2 === 0)

console.log(pares)


let numeros4 = [10, 20, 30, 40, 50, 60]


// Utilizar find y regresar un número mayor a 45
const mayor45 = numeros4.find(numero => numero > 45)

console.log(mayor45)

let frutas2 = ["manzana", "banana", "naranja"]



// Utilizar includes para ver que existe
const existe = frutas2.includes("naranja")

console.log(existe)

let numeros5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// Utilizar slice y regresar un nuevo arreglo [2, 3, 4]
const seleccion = numeros5.slice(1, 4)

console.log(seleccion)


let numeros6 = [1, 2, 3, 4]


// Utilizar reduce y hacer la suma de los elementos
const suma = numeros6.reduce((total, numero) => total + numero, 0)

console.log(suma)