// swapp 2 variables without using 3rd variable

// we could use array destructuring for swapping variables

let x = 10;
let y = 20;

console.log(` x: ${x} \n y: ${y}`);

[x, y] = [y, x];

console.log("After Swapping")
console.log(` x: ${x} \n y: ${y}`)
