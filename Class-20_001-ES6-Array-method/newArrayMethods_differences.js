let enames = ["Riya", "Pooja", "Unnimaya", "Sneha", "Zehara"]

let newEnames_for = []                                      // declared new array
for(name of enames) {                                       // here we need to use seprate push function apart from loop to add new array elaments
    newEnames_for.push(name.toUpperCase())                  // cannot use return 
}
console.log(newEnames_for, "\n")

let newEnames_map = enames.map((name => {                   // map method returns new array so the process is simplified
    return name.toUpperCase()                               // will return value for every elements of array - to create new array
}))
console.log(newEnames_map, "\n")


let newEnames_foreach = enames.forEach((name => {           // forEach method will not return any thing - even though we gave return statement
    return name.toUpperCase()                               // will not return anything
}))
console.log(newEnames_foreach, "\n")


let price = [900,1500,2500,2000,540,840,1200]
let offer_price = price.filter(num => {                     // filter returns new array with only needed values
    if(num>999){
        return num                                          // return only needed elamants
    }
})
console.log(offer_price, "\n")