// Import using ES5

let tax = require("./central.js")                           // default import - ES5
let { discount, getOffer } = require("./central.js")        // named import   - ES5


console.log("default import - tax :",tax)
console.log(`named imports - discount : ${discount} and getOffer() : ${getOffer()}`)
