var num1=25,num2=38,num3=11
var small,middle,larg=0;

console.log(`Numbers Before sorting :${num1},${num2},${num3}`);

if(num1<num2 && num1<num3)
{
    small=num1;
    if(num2<num3){
        middle=num2;
        larg=num3;
    }
    else{
        middle=num3;
        larg=num2;
    }
}
else if(num2<num1 && num2<num3)
{
    small=num2;
    if(num1<num3){
        middle=num1;
        larg=num3;
    }
    else{
        middle=num3;
        larg=num1;
    }
}
else
{
    small=num3;
    if(num1<num2){
        middle=num1;
        larg=num2;
    }
    else{
        middle=num2;
        larg=num1;
    }
}

num1=small;
num2=middle;
num3=larg;
console.log(`Numbers After sorting :${num1},${num2},${num3}`);
