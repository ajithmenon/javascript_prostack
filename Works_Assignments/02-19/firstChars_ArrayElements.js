
let employees = ["Alia","Thamana","Saniya","Pooja"]
let first_char = []

console.log("printing first letters") 
for(names of employees) {
    console.log(names.charAt(0))            // printing first characters
    first_char.push(names.charAt(0))        // adding first characters into a new array
}

console.log("\n First characters in Array : ", first_char)
