let employees = [
    {emp_id:101, emp_name:"Ajith", emp_salary:40000},
    {emp_id:102, emp_name:"Akshay", emp_salary:45000}
]

let createEmployee = (emp, callback) => {                           // passing callback function - here getEmpoyee()
    setTimeout(()=>{
        employees.push(emp)
        callback();                                                 // so will call after adding employees
    }, 4000);                                                       
}
let getEmployee = ()=>{
    setTimeout(()=>{
        let rows = ``
        for(let user of employees){
            rows += `<tr>
                        <td>${user.emp_id}</td>
                        <td>${user.emp_name}</td>
                        <td>${user.emp_salary}</td>
                    </tr>`
        }
        document.getElementById("table_data").innerHTML = rows
    }, 1000)
}

createEmployee({emp_id:103, emp_name:"Ashique", emp_salary:45000}, getEmployee);
