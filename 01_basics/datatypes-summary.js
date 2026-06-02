// Primitive(call by value)
// 7types: String , Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.4

const name= "hello"

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

//const bigNumber = 87654321098n




// Reference type also known as Non-Primitive Type
// Array, Objects, Functions

const heros = ["Ironman","Thor", "Hulk"]
let myObj= {
    name : " kriti",
    age : 14,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof userEmail);



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack ( Primitive ), Heap (Non-Primitive)

let myYoutubename = "aayusha.com"

let anothername= myYoutubename
anothername = "aayu.com"

console.log(anothername);
console.log(myYoutubename);

let userOne={
    email: "user@gmail.com",
    id:1234,
}
console.log(userOne.email);
let userTwo= userOne

userTwo.email ="qwert.com"

console.log(userOne.email);
console.log(userTwo.email);
