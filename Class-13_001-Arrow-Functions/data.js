let c;

let print = ()=> {                          // declared using : ()=> { }
    console.log("Arrow function")
}
print();                                    // Called the variable assigned for function.
print();                                    // Can also invoke multiple time. 


let add = (a, b) => {                       // with parameters
    return a+b;
}
c = add(10, 20)                         // call with arguments and variable to assign return value
console.log("sum 1 : ",c)


// simplest form of arrow function : if there is only a single return statement persent : we can remove return keyword too.
let sum = (a,b) => a+b;                     // without return keyword
c = sum(100,200);                           // function call is the same
console.log("sum 2 : ",c)
