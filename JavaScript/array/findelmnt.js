var arr=[1,2,3,4,5,6];
var elmnt=15,flag=0;
for(let num of arr){
    if(num==elmnt)
    {
        flag=1;
        break;
    }
}
console.log(flag==1?"Found":"not found");