
let emloyees = [
    {empID : 101, empName : "Rahul", empSalary : "35000"},
    {empID : 102, empName : "Soniya", empSalary : "50000"},
    {empID : 103, empName : "Priyanka", empSalary : "30000"},
]

function displayEmployeeDetails(){
    let rows =``
    for(emp of emloyees){
        rows += `
            <tr>
                <td> ${emp.empID} </td>
                <td> ${emp.empName} </td>
                <td> ${emp.empSalary} </td>
            </tr>      
        `
    }

    document.getElementById("emp_details") .innerHTML = rows
}
