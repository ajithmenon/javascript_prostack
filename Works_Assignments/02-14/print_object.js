
let employee = {
    id: 101,
    name:"Ajith",
    gender:"Male",
    email: "ajith@gmail.com"
}

document.getElementById("print_object").textContent = JSON.stringify(employee, null, 2)

// of direct write by stringify of json 

document.write("<br>", JSON.stringify(employee))
