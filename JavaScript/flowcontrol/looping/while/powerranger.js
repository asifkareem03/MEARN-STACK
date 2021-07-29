var pow=3,lower=7,upper=30;
var i=1;
while(i<=upper)
{
    var res=i**pow;
    if(res>lower && res<upper){
        console.log(i);
    }
    if(res>upper){
        break;
    }
    i++;
}