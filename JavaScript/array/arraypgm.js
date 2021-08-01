var expense=[30000,32000,42000,37000,27000,40000];
// console.log(expense[0]);

// for (let amount of expense){
//     console.log(amount);
// }

expense.forEach(myFunction);

function myFunction(item,index)
{
    console.log(item,index,);
}