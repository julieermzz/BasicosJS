// Tipos de datos
// Underfined
// number
// Fuction
// Object
// String
// Boolean
// Symbol
// Big Int
// Null
 
// Underfined
let cliente
console.log(cliente)
console.log(typeof cliente)


//Boolean
let descuento = true
console.log(descuento)
console.log(typeof descuento)


// Number
let num = 7
let num2 = 7.77
let num3 = -7

console.log(num1)
console.log(num2)
console.log(num3)


// String en cadena
const alumno = "Julia"
const producto = "Mac Mini"
console.log(alumno)
console.log(producto)

const bigNumber = BigInt(12303416589785464780002148979612)
console.log(typeof bigNumber)
//No podemoas escalar number con bigInt
const a = 1
const b = 3
console.log(a + b)
console.log(a + bigNumber) //Error
//Utilizamos conversion
console.log(a + Number(bigNumber))


//Symbol
const mySymbol1 = Symbol(30)
const mySymbol2 = Symbol(30)

console.log(mySymbol1 === mySymbol2)
console.log(mySymbol1.valueOf())
console.log(mySymbol2.valueOf())


// Null
const myVar = null 
console.log(typeof myVar)
