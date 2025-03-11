
function add(a,b){
    console.log("a value : ", a,"b value : ", b)
}

add(10,20,30)
add(10,20,30,40)
add(10,20,30,40,50)
// here in all call 'a=10' and 'b=20'
console.log("\n")

function rest_call(a, ...b){
    console.log("a value : ", a,"b value : ", b)
}

rest_call(10,20,30)
rest_call(10,20,30,40)
rest_call(10,20,30,40,50)
// but in here 'a=10' where as 'b' carries the rest of the values passed as argument
