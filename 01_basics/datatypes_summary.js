//primitive and non primitive datatypes(on the basis of how data is stored and how we are accessing the data)

//primitive(call by value(changes are made in the copy of data on in the original data))
// 7 types : string, number, boolean, null, undefined, symbol, bigInt


const score = 100// number
const scoreValue = 100.3// number

const isLoggedIn = false //boolean
const outsideTemp = null //object
let userEmail; // 

// const id = symbol('123')
// const anotherId = symbole('123')

//console.log(id === anotherId);// false

const bigNumber = 123654789654123n
console.log(typeof bigNumber); // bigInt




// non primitive (reference type)

// array, objects, functions


const avengers = ["thor", "hulk", "iron man","spiderman"] // array(object)

//  OBJECT = it can be anything(string, array, function, object, number, boolean) under curly braces
// let myObj = {
//     name: "beauty",
//     age: 22,
// }  

const myFunction = function(){
    console.log("hello world")
} // object








//********************************************************************

// stack (primitive) copy of value, heap memory(non-primitive) direct reference

let myName = "wallflower"

let anotherName = myName
anotherName  = "beauty"

console.log(myName); // output wallflower(called by value)
console.log(anotherName); //output beauty

let userOne = {
    email: "random@gamil.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo = "random1@gmail.com"

console.log(userOne);// random1@gamil.com
console.log(userTwo);//random1@gmail.com



