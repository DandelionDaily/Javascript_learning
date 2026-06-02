// Imediately Invoked Function Expressions (IIFE) -use to immediately execute the function and to remove the global scope pollution 

/*
Syntax:- 
       (function definition)(execution call);
polution from global scope makes problem most of the time. So, to remove the global scopes declaration  and variables pollution we use IIFE
*/

(function chai(){
    //named IIFE
    //console.log(`DB connected`)
})();


( (name) => {
    //unnamed IIFE
    //console.log(`DB connected two ${name}`)
}) ('kritika');




/*
let count =0 

function increment(){
    count = count +1
    console.log("count is now : "+ count);
}

function decrement(){
    count = count -1
    console.log("count is now : " + count);

}
function reset(){
    count=0
    console.log("count is now : " + count);
}

increment()
increment()
reset()
decrement()
decrement()

*/