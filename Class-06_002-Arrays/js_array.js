let arr_2 = ["red", "blue", "green"]

let arr_1 = [101, 101.4, null, true, "Ajith", "Ajith", [10,20,30,40], [], arr_2 ]
console.log(arr_1)


console.log(arr_1[100]) // there is no value on index 100 - returns `undefined`
console.log("\n")

for(i=0; i<=10; i++){
    console.log(arr_1[i])
}
console.log("\n")

for(i=0; i<4; i++){
    console.log(arr_1[6][i]) // looping through inner array 
}
console.log("\n")


// we can use `for of loop` to iterate through arrar - we dont need to know index values

for(let color of arr_2){  // the 'color' declared is the value of each element - keyword let is optional
    console.log(color)
}
