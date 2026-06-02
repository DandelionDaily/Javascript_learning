// Objects - node 02_basics/03_objects.js


//singleton
//Object.create


//object literals


const mySym =Symbol("key1")

const JsUser ={
    name: "hello",
    "full name":"hi hello",
    [mySym] :"myKey1",
    age:12,
    location:"ktm",
    email:"qwert.com",
    isLoggedIn: false,
    lastloggedIn: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
 console.log( JsUser[mySym]);

JsUser.email = "hellohi@s.com"
// Object.freeze(JsUser)
 JsUser.email = "hihello@.com"
// console.log(JsUser);

JsUser.greeting = function (){
    console.log("Namaste");
}

JsUser.greeting2 = function (){
    console.log(`Namaste, ${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greeting2());
