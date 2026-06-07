const myNumbers =[ 1,2,3,4,5,6,7,8,9,0]

// const newNums= myNumbers.map( (num) => num +10)
// console.log(newNums);

// const numbers = []

// myNumbers.forEach( (num) => { 
//     if(num >0){
//         numbers.push(num - 5); }
//     })
// console.log(numbers);


const newNums = myNumbers
                .map( (num) => num *10 )
                .map((num) => num +1)
                .filter((num)=> num>= 40)

console.log(newNums);             