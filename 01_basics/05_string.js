const name="kriti"
const repoCount= 1


//console.log(name + repoCount + " Value")
console.log(`Hello, My name is ${name} and my repo count is ${repoCount}`);
//string interpolation

const gameName = new String('AAyu-sha')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('y'));

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString= gameName.slice(-7,5)
console.log(anotherString);

const stringOne = "  trim      "

console.log(stringOne);
console.log(stringOne.trim());

const url="hhtps://local.com/local%20come"

console.log(url.replace('%20', '-'));
console.log(url.includes('local'));
console.log(url.includes('hi'));


console.log(gameName.split('-'));



