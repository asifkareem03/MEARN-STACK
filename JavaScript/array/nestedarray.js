var employees=[
    [1000,'Ram',2,25000,'devoloper'],
    [1001,'Ravi',1,22000,'devoloper'],
    [1002,'Raju',3,27000,'qa'],
    [1003,'Nikhil',3,21000,'qa'],
]

//printing names whose salary is greater than 23000
// for(let emp of employees)
// {
//     if(emp[3]>23000)
//     {
//         console.log(emp[1]);
//     }
// }

//highest paid employee and lowest paid employee
var max_sal=employees[0][3];
var max_sal_name=employees[0][1];

var min_sal=employees[0][3];
var min_sal_name='';
for (let emp of employees){
    if(max_sal<emp[3]){
        max_sal=emp[3];
        max_sal_name=emp[1];
    }
    if(min_sal>emp[3]){
        min_sal=emp[3];
        min_sal_name=emp[1];
    }
}
console.log("Highest paid Employee : ",max_sal_name,max_sal);
console.log("Lowest paid employee : ",min_sal_name,min_sal);

//Number of Employers working as Devoloper,QA
let emp_count_dev=0,emp_count_qa=0;
for(let emp of employees){
    if(emp[4]=='devoloper'){
        emp_count_dev++;
    }
    else if(emp[4]=='qa'){
        emp_count_qa++;
    }
}

console.log("Number of Employers Working as Devolopers : ",emp_count_dev);
console.log("Number of Employers Working as QA : ",emp_count_qa);