let employees = [
    {
        "eid": 1,
        "ename": "Rahul",
        "gender": "Male"
    },
    {
        "eid": 2,
        "ename": "Sonia",
        "gender": "Female"
    },
    {
        "eid": 3,
        "ename": "Priyanka",
        "gender": "Female"
    },
    {
        "eid": 4,
        "ename": "Modi",
        "gender": "Male"
    },
    {
        "eid": 5,
        "ename": "Shraddha Kapoor",
        "gender": "Female"
    },
    {
        "eid": 6,
        "ename": "Alia Bhatt",
        "gender": "Female"
    },
    {
        "eid": 7,
        "ename": "Keerty Suresh",
        "gender": "Female"
    },
    {
        "eid": 8,
        "ename": "Rashmika Mandanna",
        "gender": "Female"
    },
    {
        "eid": 9,
        "ename": "Nayanatara",
        "gender": "Female"
    },
    {
        "eid": 10,
        "ename": "Vijay Setupathi",
        "gender": "Male"
    },
    {
        "eid": 11,
        "ename": "Ajith",
        "gender": "Male"
    },
    {
        "eid": 13,
        "ename": "Pawan kalyan",
        "gender": "Male"
    },
    {
        "eid": 14,
        "ename": "Allu Arjun",
        "gender": "Male"
    },
    {
        "eid": 15,
        "ename": "Riya",
        "gender": "Female"
    }
]

// filter method will only filter out the values into new array - will not update element value
// the return is just true or false
// '0' and 'false' - will skip the elements 
// any other return value is considered as true - will add array elements into new array 


let male_employees = employees.filter((emp)=>{
    return emp.gender === "Male"
})
console.log("Male Employees : ", male_employees)

let female_employees = employees.filter((emp)=>{
    if(emp.gender === "Female"){
        return "hello"                            // here we use "hello" a string - as the return should be boolean it will be converted - resulting true
    }
})
console.log("Female Employees : ", female_employees)