let a = 10;
let b = 40;
let c = 30.5;
let d ='40';
let e ="Ajith";
let f =false;
let g =true;
let h ;


console.log("-------------------------")
// Arithemetic operator (?:)

// '+' can do both addition and concatnation
console.log(a+b) 
console.log(a+c)
console.log(a+d) // here one of it is string - so conactnation  
console.log(a+e)
console.log(a+f) // false is converted into 0 
console.log(a+g) // true is converted into 1 
console.log(a+h) // as 'h' is not defined - NaN - Not a Number 

console.log("-------------------------")

// '*' can only do multiplication
console.log(a*b)
console.log(a*c)
console.log(a*d) // as one var is string - tries to do convertion and string('40') converted into number(40)  
console.log(a*e) // cannot convert into number so - NaN - not a number
console.log(a*f) // false is converted into 0
console.log(a*g)// true is converted into 1
console.log(a*h)

console.log("-------------------------")
// Equality operators ('=='  '===')

console.log(b == d)
// here eventhough  b is number 40 and d  is string 40 - '==' only check for value 40 - so result is true

 console.log(b === d)
 // here strict equality '===' check both value and datatype - b is number and d  is string eventhough both value is 40 - result is false

console.log("-------------------------")

// Ternary operator (?:)

a%2 === 0 ? console.log("Number is Even") : console.log("Number is Odd") // condition is true so statement 1 executes

console.log("-------------------------")
// Relational operators

console.log(a > b)
console.log(a >= b)
console.log(a < b)
console.log(a <= b)
console.log(b >= d)

console.log("-------------------------")
// Logical operators
var altfa = true
var afa = true
var aba = false
var ailw = false

console.log(afa && altfa)
console.log(afa && ailw)
console.log(aba && afa)
console.log(aba && ailw)

console.log(afa || altfa)
console.log(afa || ailw)
console.log(aba || afa)
console.log(aba || ailw)


console.log("-------------------------")
// Logical operators

