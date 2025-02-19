
let employee = {
    eID:101,
    eName : "Rahul",
    eSalary: 45000
}

console.log("Object.keys  : ", Object.keys(employee), "\n" )        // returns keys as an array
console.log("Object.values  : ", Object.values(employee), "\n" )    // returns values as an array
console.log("Object.entries  : ", Object.entries(employee), "\n" )   // returns each key-value pairs as an inner array in array 

console.log("Initial Object  : ", employee, "\n" ) 

employee.eName = "Soniya"
console.log("Update before freeze  : ", employee, "\n" ) 

Object.freeze(employee)             // will freeze object so that we cannot change/update

employee.name = "Modi"
console.log("Update after freeze  : ", employee, "\n" ) 
