// node 02_basics/04_ojects.js

// const tinderUser = new Object () This is singleton object

const tinderUser ={} // this is non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser ={
    email : "some@gmail.com",
    fullname :{
        userfullname :{
            firstname: "kritika",
            lastname:"karmacharya"
        }
    }

}

// console.log(regularUser.fullname);  // { userfullname: { firstname: 'kritika', lastname: 'karmacharya' } }
// console.log(regularUser.fullname.userfullname); //{ firstname: 'kritika', lastname: 'karmacharya' }
// console.log(regularUser.fullname.userfullname.firstname); //kritika

const obj1 ={
    1: "a",
    2: "b"
}
const obj2 ={
    3: "a",
    4: "b"
}
const obj4 ={
    5: "a",
    6: "b"
}


// const obj3 = {obj1,obj2}
//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } } gives the same problem as in array

// const obj3 = Object.assign( {} , obj1, obj2, obj4) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b'  }


//spread
const obj3 ={...obj1, ...obj2} //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
//  console.log(obj3);


 const users = [
    {
        id:1,
        email:"h@gmail.com"
    },
      {
        id:1,
        email:"h@gmail.com"
    }, {
        id:1,
        email:"h@gmail.com"
    }
 ]

//  console.log(users[1].email)

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} =course
//console.log(courseInstructor);
console.log(instructor);

