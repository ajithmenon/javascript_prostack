 
let employee_id = [101,102,103,104]
console.log("Initial Array : ",employee_id, "\n")

employee_id.push(105)       // Add element to end of Array
console.log("After Push : ",employee_id, "\n")

employee_id.pop()       // Removes last element of Array
console.log("After Pop : ",employee_id, "\n")

employee_id.unshift(100)       // Add element to front of Array
console.log("After Unshift : ",employee_id, "\n")

employee_id.shift()       // Removes first element of Array
console.log("After Shift : ",employee_id, "\n")

employee_id.reverse()       // Reverse Array element
console.log("After Reverse : ",employee_id, "\n")

console.log("indexOf(101)  : ",employee_id.indexOf(101))            //Return the index of given element - if element not present in array returns -1
console.log("indexOf(106)  : ",employee_id.indexOf(106), "\n")
