
let ename = ["rahul", "soniya", "priyanka", "modi"]
let numbers = [10,17,81,8,18,9]
let price = [900,3000,250,4000,240,140,7500]
let eids = [101,102,103,104]

ename.forEach((name) => {
    console.log(name.toUpperCase())
});
console.log("\n")


let newNumbers = numbers.map((num => {                   // map method returns new array
    return num*10
}))
console.log(newNumbers, "\n")


let offer_price = price.filter(num => {                 // filter returns new array with only needed values
    return num>1000                                     // return value - only if it is true
})
console.log(offer_price, "\n")
