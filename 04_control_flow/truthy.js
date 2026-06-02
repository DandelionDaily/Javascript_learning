const userEmail =[]
// if a string value ("ayusha.com") is given than it prints got user email
// if a string with empty string value("") is given then it prints dont have user email
// if an empty array [] is given than it prints got user email


if(userEmail){
    console.log("got user email");
}else{
    console.log("dont have user email")
}

//falsy values

//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0){
//     console.log(" Array is empty")
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10      // prints the first value
//val1 = null ?? 10   // if there is null value than it checks the safety and if there comes any problem 
//val1= undefined ?? 15
val1 = null ?? 10 ?? 12


console.log(val1);

// ternary operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80")


