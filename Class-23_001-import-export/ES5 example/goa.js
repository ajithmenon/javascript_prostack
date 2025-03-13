// Import using ES5

let { getOffer } = require("./central.js")

offer = getOffer()
console.log(`named imports - discount : ${offer}`)
