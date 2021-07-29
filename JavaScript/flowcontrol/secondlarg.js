let num1=15;num2=100;num3=13;
var res=num1>num2 & num1>num3?num2>num3?num2:num3:num2>num1& num2>num3?num1>num3?num1:num3:num3>num1&num3>num2?num1>num2?num1:num2:'Equal'
console.log(res);