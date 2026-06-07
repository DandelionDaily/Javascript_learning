//const coding = ["js", "ruby", "java", "python", "c", "c++"]

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// })

// console.log(values);


const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => {return num >4})



const newNums = []

// myNums.forEach( (num) => {
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);


// Filter returns only true and false


const books= [
    {title: 'Book One', genre: 'Fiction', publish: 1980 , edition: 2006 },
    {title: 'Book two', genre: 'non-Fiction', publish: 2000 , edition: 2006 },
    {title: 'Book three', genre: 'Fiction', publish: 2006 , edition: 2020 },
    {title: 'Book four', genre: 'fantasy', publish: 1989, edition: 2016 },
    {title: 'Book five', genre: 'social', publish: 2007, edition: 2014 },
    {title: 'Book six', genre: 'classics', publish: 2020 , edition: 2026 },
    {title: 'Book seven', genre: 'comedy', publish: 1950 , edition: 2007 },
    {title: 'Book eight', genre: 'history', publish: 1990 , edition: 2006 },
    {title: 'Book nine', genre: 'science-Fiction', publish: 1999 , edition: 2016 },
];

// const userBooks = books.filter( (bk) => bk.genre === 'history' )


// useBooks = books.filter( (bk) => {return bk.genre === "Fiction"})
// console.log(useBooks);


const UBooks = books.filter( (ok) => {return ok.publish >2000 && ok.genre === "history" } )
console.log(UBooks);

