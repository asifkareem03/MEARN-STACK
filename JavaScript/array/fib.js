function fibinocci(num){
    if(num==1 || num==2){
        return num-1;
    }
    else{
        return fibinocci(num-1)+fibinocci(num-2)
    }
}

// function fibinocci(num){
//     let a=0,b=1;
//     let c=a+b;
//     if(num==1){
//         console.log(a);
//     }
//     else if(num==2){
//         console.log(a,b);
//     }
//     else{
//         let count=2;
//         let rslt=''
//         rslt=rslt+a+' '+b
//         while(count<num){
//             c=a+b;
//             rslt=rslt+' '+c
//             count++;
//             a=b;
//             b=c;
//         }
//         console.log(rslt);
//     }
// }

console.log(fibinocci(5));