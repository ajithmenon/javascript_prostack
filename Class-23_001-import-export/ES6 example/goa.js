// Import using ES6

import { discount } from "./central.js"                 // named import - only one from central.js
import tax from "./central.js"                          // default import


console.log("default import - tax :",tax)
console.log(`named imports - discount : ${discount}`)
