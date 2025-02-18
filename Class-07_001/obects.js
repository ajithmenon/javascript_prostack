// create objects
let a = {}
let b = {id : 101}
let c = {   eid : 101,
        ename : "Ajith",
        esalary : "40000"
    }

// Read objects
console.log("a : ",a)
console.log("b : ",b)
console.log("c : ",c ,"\n")

// Read objects properties
console.log("a.id : ",a.id)             // undefined - as there is no propertie named id for object a
console.log("b.id : ",b.id)
console.log("c.ename : ",c.ename ,"\n")

// Update objects properties
c.eid = 102                             // update id value
c.email = "ajithachus20@gmail.com"      // will create propertie email as it is not present before
console.log("c : ",c ,"\n")

// delete object properties using 'delete' keyword
delete c.email
console.log("c : ",c ,"\n")

