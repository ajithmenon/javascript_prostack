// Spread operators is used for extracting and coping elements

eid = [101, 102, 103, 104]
console.log("Eid : ", eid)

cust_id = [1001, 1002, 1003, 1004]
console.log("Cust_id : ", cust_id)


uid = eid                                           // will only refer to the existing array
console.log("Uid : ", uid)

employee_id = [...eid]                              // will create new array by copying old one - create new array
console.log("Employee_id : ", employee_id)

everyone = [...cust_id ,...eid]                     // will copy two array into a new array
console.log("Everyone : ", everyone)

console.log("\n......Changes in arrays......\n")

cust_id.push(...eid)                                // merge elements of an arrray into another existing array
console.log("Updated Cust_id : ", cust_id)

eid.push(105)
console.log("Updated Eid : ", eid)

// changes are made in 'eid' and 'cust_id'
// changes made to 'eid' will affect 'uid' as it is an reference to same memory space
// changes made will not affect 'employee_id' or 'everyone' - as previously they only copied values

console.log("uid : ", uid)

console.log("Employee_id : ", employee_id)
console.log("Everyone : ", everyone)
