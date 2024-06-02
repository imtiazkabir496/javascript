// data type
// primitive and non primitive

//primitive Number, Boolean, BigInt, null, symbol, string, undefiend
//non-primitive function, array, objects

const id = Symbol("123")
const moreId = Symbol("123")

// console.log(id == moreId);

const myArray = ["Kabir", "Imtiaz", "Riya"]

let myObj = {
    name: "kabir",
    age: 34,
    city: "Kolkata"
}

let myFunction = function (){
    console.log("Hello world")
}

// Memory type 1. Stack and 2. Heap
// Stack memory used in Primitive like Number, boolean, Symbol, String, bigInt, undefined and null
// Heap memory used in Non-primitive like Array, Function, Objects


let myName = "Imtiaz Kabir"
let myAnotherName = "Dalim"

// console.log(myName)
// console.log(myAnotherName)
// myAnotherName = myName

