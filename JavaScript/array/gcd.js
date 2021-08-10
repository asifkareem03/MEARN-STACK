var num1 = 16, num2 = 48;

var gcd=0;
for(var i=2;i<=num1 && i<=num2;i++){
    if(num1%i==0 && num2%i==0){
        gcd=i;
    } 
}
console.log(gcd);