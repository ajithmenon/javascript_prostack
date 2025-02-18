var brand = "dimy";
var product_name = 'Men Regular fit'; 
var discount= `Y`;
var price = 300;  
var rating = 4.4;
var avail = false;
var seller_details;

console.log(brand)
console.log(product_name)
console.log(price)
console.log(rating)
console.log(discount)
console.log(avail)

console.log(typeof(brand))          // string
console.log(typeof product_name)   // string
console.log(typeof price)          // number
console.log(typeof rating)         // number
console.log(typeof(discount))       // string
console.log(typeof(avail))          // boolean
console.log(typeof(seller_details)) // undefined


var num = 178252456884285n;   // bigInt  mainly ends with 'n' : used of mathemetical calcuation

console.log(num)
console.log(typeof(num))            // bigint

var size = [30, 32, 34, 36, 40]
var colors = ['red', 'blue', 'black', 'brown']

console.log(size)
console.log(typeof(size))           // objects
console.log(colors)
console.log(typeof(colors))         // objects

var employees = {'eid': 101 , 'ename': "Rahul", 'esalary': 450000 }
var emp = {101: "Rahul", 102:"Ajith", 103:"Hiran"}

console.log(employees)
console.log(typeof(employees))         // objects
console.log(emp)
console.log(typeof(emp))           // objects
