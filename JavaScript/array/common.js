var arr1 = [10, 20, 30, 40];
var arr2 = [9, 10, 12, 20];

// for(let num1 of arr1){
//     for(let num2 of arr2)
//     {
//         if(num1==num2){
//             console.log(num1);
//             break;
//         }
//     }
// }

let pos1=0,pos2=0;
while(pos1<=arr1.length-1 && pos2<=arr2.length-1)
{
    if(arr1[pos1]==arr2[pos2])
    {
        console.log(arr1[pos1]);
        pos1++;
        pos2++;
    }
    else if(arr1[pos1]>arr2[pos2])
    {
        pos2++;
    }
    else
    {
        pos1++;
    }
}