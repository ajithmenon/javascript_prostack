
eid = {emp_id : 101, emp_name:"Ajith", emp_salary:24000, emp_email:"ajithachus20@gmail.com"}
job_details = {emp_salary: 40000, emp_position:"Software Developer"}
console.log("Eid : ", eid)
console.log("Job_details : ",job_details)

uid = eid                                           // will only refer to the existing object
console.log("Uid : ", uid)

employee_id = {...eid}                              // will copy old object into new - create new object
console.log("Employee_id : ", employee_id)

employee = {...eid, ...job_details}                 // merge two objects into a new one
console.log("Employee : ", employee)
// note: object will not allow duplicate keys - so it will update with latest value

console.log("\n......Changes in objects......\n")

eid.location = "Bangalore"                          // merge elements of an arrray into another existing array
console.log("Updated Eid : ", eid)

job_details.hours = "9 hours"
console.log("Updated job_details : ", job_details)

// changes are made in 'eid' and 'job_details'
// changes made to 'eid' will affect 'uid' as it is an reference to same memory space
// changes made will not affect 'employee_id' or 'employee' - as previously they only copied properties

console.log("uid : ", uid)

console.log("Employee_id : ", employee_id)
console.log("Employee : ", employee)
