var arr=[2,4,6];
var sum=0;
for (let num of arr)
{
    sum+=num;
}
for (let num of arr)
{
    console.log(sum-num);
}