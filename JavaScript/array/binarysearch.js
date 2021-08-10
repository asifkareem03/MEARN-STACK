var arr=[1,2,3,4,5,6,7];
var num=51;
var flag=0;
low=0,upp=arr.length-1;
while (low <= upp) {
    mid = parseInt((low + upp) / 2);
    if (num == arr[mid]) {
        console.log("Found");
        flag=1;
        break;
    }
    else if (num > arr[mid]) {
        low = mid + 1;
    }
    else if (num < arr[mid]) {
        upp = mid - 1
    }
}
if(flag==0){
    console.log("Not found");
}