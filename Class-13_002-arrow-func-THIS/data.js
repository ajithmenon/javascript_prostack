
// arrow function will avoid unwanted search and undefined errors


function wish(){
    console.log(this)               // print an objects with lots of properties and values
}
wish()

console.log("__________________________________________________")

let search = () => {
    console.log(this)               // print an empty object
}
search()


