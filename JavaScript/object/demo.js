var employee={
    eid:1001,
    ename:"Ram",
    desig:"devoloper",
    salary:50000};

// console.log(employee.ename);

if ("exp" in employee){
    employee.exp+=1;
}
else{
    employee.exp=1;
}
// console.log(employee);

// for(let key in employee){
//     console.log(employee[key]);
// }

console.log(employee);
