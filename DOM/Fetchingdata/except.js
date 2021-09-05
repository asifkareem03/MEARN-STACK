// try catch

// try{
//     let res=eval("hai/hello");
//     console.log(res);
// }
// catch(error){
//     console.log(error.message);
// }
// console.log("Completed");

var age="hai";
try{
    if(isNaN(age)) throw new Error("Age must be number");
    if(age<18) throw new Error("Invalid age");
}
catch(error){
    console.log(error.message);
}