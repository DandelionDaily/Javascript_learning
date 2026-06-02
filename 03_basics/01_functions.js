//  node 03_basics/01_functions.js

function myfunc() {
    console.log("H");
    console.log("I");
}
//myfunc()

// myfunc = this is a refrence
// myfunc() = this s an execution

// function addTwoNumbers (number1, number2){

//     console.log(number1 + number2);
// }
//addTwoNumbers(3,4) // 7

function addTwoNumbers (number1, number2){

//    let result = number1 + number2
//    return result
     return number1 + number2
}


const result =addTwoNumbers(2,5)
// console.log("Result: " ,result)

function loginUserMessage(username = "lisa"){
    if(!username){
          console.log("Please enter a username")
          return
    }
      return `${username} just logged in`
}
//console.log(loginUserMessage("hello")) // hello just logged in
//console.log(loginUserMessage()) // lisa just logged in

//rest operator
function calculateCartPrice(...num1){
    return num1
}

//console.log(calculateCartPrice(200, 400, 500,2000)) // [ 200, 400, 500, 2000 ]

function calculateCartPrice2(val1, valu2, ...num2){
    return num2
}
//console.log(calculateCartPrice(200,300,500,2000)) // [ 500, 2000 ]

const user = {
    username: "blackpink",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user);
handleObject({
    username:"sam",
    price: 122
})

const myNewArray = [200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([0, 400, 455,5643]))
