let calc = (a,b, opt) => {
    if(opt === "sum"){
        return a+b;
    }else if(opt === "sub"){
        return a-b;
    }else if(opt === "multi"){
        return a*b;
    }
}

let a1 = calc(10,20, "sum")
console.log("sum : ", a1)

let a2 = calc(10,20, "sub")
console.log("sub : ", a2)

let a3 = calc(10,20, "multi")
console.log("multi : ", a3)

