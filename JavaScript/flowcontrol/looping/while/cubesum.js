var n=123,sum=0;
var temp=n;
while(temp>0){
    sum=sum+((temp%10)**3);
    temp=parseInt(temp/10)
}
console.log(sum);