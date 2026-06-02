//if ==  node 04_control_flow/one.js

// if( 2 != 3){
//     console.log("executed")
// }


// const score =100

// if (score> 70){
//     const power = "fly"
//     console.log(`Power : ${power}`);
// }

// console.log(`Power : ${power}`)


const balance=1000
//implicit scope
// if(balance > 500) console.log("test");

// if (balance < 500){
//     console.log("less than")
// }
// else if(balance < 750){
//     console.log("less than 750")
// }
// else{
//     console.log("less than 1200")
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy courses");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in")
}

