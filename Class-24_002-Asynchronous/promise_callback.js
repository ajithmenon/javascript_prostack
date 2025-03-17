// promise : passing function as an argument

let sum = (a,b) => { 
    return a+b
}

let sub = (a,b) => { 
    return a-b
}

let multi = (a,b) => { 
    return a*b
}

let calc = (a,b,callback) => {
    return callback(a,b)
}

let r1 = calc(10,20,sum)
console.log("sum : ", r1)

let r2 = calc(10,20,sub)
console.log("sub : ", r2)

let r3 = calc(10,20,multi)
console.log("multi : ", r3)
