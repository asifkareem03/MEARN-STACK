var myArgs = process.argv.slice(2);
let num=myArgs[0];
if(num%2==0){
    console.log(`${num} is even`);
}
else{
    console.log(`${num} is odd`);
}