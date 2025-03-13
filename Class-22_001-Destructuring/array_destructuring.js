
let colors = ["Orange", "Red", "yellow", "Green", ["pink", "violet", "brown"]]

let [orange, apple, pineapple, avacado, others] = colors            // here each variables will be assigned respective element in the order of array
console.log("Color of Orange = ", orange)
console.log("Color of Apple = ", apple)
console.log("Color of Pineapple = ", pineapple)
console.log("Color of Avacado = ", avacado)
console.log("Other Colors = ", others)                          

console.log("\n")

let [color1, color2, color5] = colors                               // we can choose how many values we need - but will only assign values in order
console.log("Color1 = ", color1)
console.log("Color2 = ", color2)
console.log("Color5 = ", color5)

console.log("\n")

let [lips, cooler, table] = colors[4]                               // destructuring an inner array
console.log("Lip color = ", lips)
console.log("Glass Cooler = ", cooler)
console.log("Table color = ", table)

console.log("\n")

let notebook = "Classmate"

let [char1, char2, char3] = notebook                                // we can also use it against a string - to take characters - but as said in order
console.log("Character 1 = ", char1)
console.log("Character 2 = ", char2)
console.log("Character 3 = ", char3)

console.log("\n")
