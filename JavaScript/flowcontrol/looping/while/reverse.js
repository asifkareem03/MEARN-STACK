var n=123,rev='';
var temp=n;
while(temp>0){
    var rem=temp%10;
    rev=rev+rem
    temp=parseInt(temp/10)
}
rev=parseInt(rev)
console.log(rev);