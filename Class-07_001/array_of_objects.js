
let employees = [
    { eid : 101, ename:"Rahul"},
    { eid : 102, ename:"Soniya"},
    { eid : 103, ename:"Priyanka"},
    { eid : 104, ename:"Modi"}
]

console.log("employees : ",employees ,"\n")
console.log("first employee name :",employees[0].ename ,"\n")  // printing ename of first object element

//loop through each obects and print values
for(emp of employees) {
    console.log("ID: ",emp.eid, " Name: ", emp.ename)
}

console.log("___________________________________________________________")


let arr_1 = []

console.log(arr_1.length)

if (arr_1.length==0){
    console.log("Array is empty")
}else{
    console.log("Array is mot empty")
}