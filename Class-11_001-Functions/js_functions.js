function login(name, status) {
    if (status) {
        return name+" have logged in successfully"
    } else {
        return name+" have failed to log in"
    }
}

let res_1 = login("Ajith", true)
let res_2 = login("Midhun", false)

console.log(res_1)
console.log(res_2)
