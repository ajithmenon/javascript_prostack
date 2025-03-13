// Export using ES5

let tax = 18
let discount = 5

function getOffer(){
    return 2
}

module.exports = tax;                               // default export 

module.exports = {discount, getOffer};               // named export - we can export multiple variables and functions
