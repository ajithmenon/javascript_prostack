
let arr_1 = [101,101,102,103,101,103]
console.log("Array : ", arr_1)

let users = {
   uid : 101,
   uname: "Rahul",
   uemail: "rahul454@gmail.com",
   status : "single",
   gender: "male",
}

console.log("User Object : ", users, "\n")
console.log(Object.keys(users), "\n")       // will list the keys of user obect as an array


for(let key in users){                      // loop through each `key` (key name of objects)
    console.log(key, " :", users[key])      // `key` = key_name  &  users[key] = value of keys
}
console.log("\n")


if(Object.keys(users).length == 0){
    console.log("Object is empty")
}else{
    console.log("Object is mot empty")
}
