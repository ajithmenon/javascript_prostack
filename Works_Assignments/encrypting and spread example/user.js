// use of spread operator while encrypting data
const bcrypt = require('bcrypt')

// consider user as data from frontend
let user = {
    'uid': 101,
    'username' : 'RG',
    'cc' : '123456789',
    'password' : '123'
}
console.log("Frontend Data : ",user)

// Encrypting the sensitive date - 'cc' and 'password' - using bcrypt
let salt = bcrypt.genSaltSync(10);
let new_cc =  bcrypt.hashSync(user.cc, salt)
let new_password =  bcrypt.hashSync(user.password, salt)

user = {...user, cc:new_cc, password:new_password}
console.log("Encrypted Data : ",user)
