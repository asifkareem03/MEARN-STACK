//Check Two arrays have same elements or not

let arr1=[1,2,3,4,5];
let arr2=[4,3,5,1,2];
var is_equal=true;

if(arr1.length!=arr2.length){
    is_equal=false
}
else{
    for (let i of arr1){
        let flag=0;
        for(let j of arr2){
            if(i==j){
                flag=1;
                break;
            }
        }
        if(flag==0){
            is_equal=false;
    
        }
    }
}

if(is_equal){
    console.log("Array Elements are Same");
}
else{
    console.log("Array Elements are Not same");
}