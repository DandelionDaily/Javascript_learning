const myNums = [ 1, 2,3,4]

// const myTotal = myNums.reduce(function (acc, curval){
//     console.log(`acc : ${acc} and curval : ${curval}`);
//     return acc + curval 
// }, 0)


const myTotal = myNums.reduce( (acc,curval) => (acc+ curval), 0 )
console.log(myTotal)


const shoppingCart = [
    {itemName: "js course",
        price: 2999
    },
      {itemName: "game dev course",
        price: 10999
    },
      {itemName: "data science course",
        price: 20999
    },
]


const totaling= shoppingCart.reduce( (acc, item) => acc + item.price, 0 )
console.log(totaling)


