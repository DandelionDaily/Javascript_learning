//Dates - node 01_basics/07_date_and_time.js


let myDate = new Date()
// console.log(myDate.toString()); // Tue Mar 03 2026 09:34:46 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toLocaleString()); // 3/3/2026, 9:36:04 AM
// console.log(myDate.toDateString()); // Tue Mar 03 2026
// console.log(myDate.toISOString()); // 2026-03-03T09:39:12.060Z
// console.log(myDate.toJSON()); // 2026-03-03T09:40:02.666Z
// console.log(myDate.toLocaleDateString()); // 3/3/2026
// console.log(myDate.toLocaleTimeString()); // 9:42:11 AM
// console.log(myDate.toTimeString()); // 09:42:58 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toUTCString()); //Tue, 03 Mar 2026 09:43:44 GMT 


console.log(typeof (myDate)); //object

// let myCreatedDate = new Date(2026, 2 ,3) //Tue Mar 03 2026

// let myCreatedDate = new Date(2026, 2 ,3,3,40) //3/3/2026, 3:40:00 AM

// let myCreatedDate = new Date("2026-03-03") 
let myCreatedDate = new Date("03-03-2036") 

// console.log(myCreatedDate.toLocaleString()); 

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
//console.log(Math.round(Date.now()/1000));

let newDate =new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());


newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: "GMT"
})


