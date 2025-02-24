
function wish(){
    console.log("Good Morning")
}
wish()

function wish(){
    console.log("Good Night")
}
wish()

// here it returns `Good Night` for both function call 
// the first wish function is overwritted by the second function as they have same name
// as assigning values and functions will happens before executing the code : so variables and function with same name will be over written 

console.log("__________________________________________________")

var wish=()=>{
    console.log("Good Morning")
}
wish()

var wish=()=>{
    console.log("Good Night")
}
wish()

// here it will print both `Good Morning` and `Good Night`
// eventhough arrow function is basically a variable with function as value
// value function is only executed during runtime 
