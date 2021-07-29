let lower=2,upper=16;
var res=''
while(lower<=upper)
{
    if(lower%2==0){
        res=res+lower+' '
    }
    lower++;
}
console.log(res);