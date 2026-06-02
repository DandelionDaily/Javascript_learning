// arrays - node 02_basics/01_arrays.js


const myArr = [0,1,2,3,4,5]



const myIdols =["JK", "RM"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);


// ARRAY METHODS

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(7)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3))

// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr); //string

// slice, spice

console.log("A" , myArr);   // A [ 0, 1, 2, 3, 4, 5 ]

const myn1 =myArr.slice(1,3) // doesnot change the original array
console.log(myn1);          //  B [ 0, 1, 2, 3, 4, 5 ]
console.log("B" , myArr);  //   [ 1, 2 ]

const myn2 =myArr.splice(1,3) // changes the original array
console.log("C" , myArr);    //  C [ 0, 4, 5 ]
console.log(myn2);          //   [ 1, 2, 3 ]



