// node 03_basics/03_arrow.js

const  user = {
    username: "kritika",
    price:122,


    welcomeMessage : function() {
        console.log(`${this.username} , welcome to website`);// kritka , welcome to website
        console.log(this.username);
    }
}
user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
//console.log(this);


/* Browser vs Node.js Difference */
console.log(this); // {}

// if we try this in browser console
console.log(this); // Window{}

/* In a normal function:
Non-strict mode → this refers to the global object (window in browsers, global in Node).
Strict mode → this is undefined. */

// function chai(){
//     let username ="kritika"
//     console.log(this.username); 
// }
// chai() //undefined

// const chai = function(){
//     let username="kritika"
//     console.log(this.username)
// }
// chai()

// const chai = () => {
//     let username="kritika"
//     console.log(this);
// }
//chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//const addTwo = (num1, num2) =>  num1 + num2
//const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) => ({username :"hitesh"})


console.log(addTwo(1,4))


//const myArray =[2,3,4,5,6,5]
//myArray.forEach()