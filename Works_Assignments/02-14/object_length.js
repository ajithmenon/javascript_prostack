
let employee = {
    id: 101,
    name:"Ajith",
    gender:"Male",
    email: "ajith@gmail.com"
}

if (Object.keys(employee).length == 0) {
    console.log("the given employee object is empty")
} else {
    console.log("the given employee object have ", Object.keys(employee).length, " key-value elemants")
}