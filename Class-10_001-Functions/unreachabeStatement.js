
function login() {
    console.log("Good Morning")
    return "Login Success"
    console.log("Good Afternoon")   // the statements after return will never execute 
}

let msg = login()
console.log(msg)
