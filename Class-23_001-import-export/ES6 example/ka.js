// Import using ES6

import tax from "./central.js"                          // default import
import { discount, offer } from "./central.js"          // named import


console.log("default import - tax :",tax)
console.log(`named imports - discount : ${discount} and offer : ${offer}`)
