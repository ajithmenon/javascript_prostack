// Check Array is empty or not
let months = [];
if(months.length > 0){
    console.log("Not empty Array")
} else {
    console.log("Empty Array")
}

months.length > 0? console.log("Not empty Array") : console.log("Empty Array")

// Check Object is empty or not
let user = {};

console.log(user.length)                // undefined as there is no length method for objects

console.log(Object.keys(user))          // will return an Arrays of keys of the object

if(Object.keys(user).length > 0){       // so we could check the length of the returned array of Keys
    console.log("Not empty Object")
} else {
    console.log("Empty Object")
}


Object.keys(user).length > 0? console.log("Not empty Object") : console.log("Empty Object")
