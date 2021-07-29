var myArgs = process.argv.slice(2);
let num1=myArgs[0];
let num2=myArgs[1];
if(num1==num2){
    console.log("Both Numbers Are equal");
}
else{
    if(num1>num2){
        console.log(`${num1} is Greater`);
    }
    else{
        console.log(`${num2} is Greater`);
    }
}