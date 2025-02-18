
function getAge(dob_year) {
    let current_year = new Date().getFullYear()

    return current_year - dob_year
}

console.log("My bro's age is : ", getAge(1994))

let myAge = getAge(1998)
console.log("My Age is : ", myAge, "\n\n")


console.log("Current Date :", new Date())
console.log("Current time :", new Date().getTime())
console.log("\n")
console.log("Local Date :", new Date().toLocaleString())
console.log("Current Year :", new Date().getFullYear())
console.log("Current Month :", new Date().getMonth())       // month starts with 0 => 0-January, 1-February, 2-March, ........
console.log("Current Date :", new Date().getDate())

