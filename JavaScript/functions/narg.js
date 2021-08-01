function add(... value){
    var sum=0;
    for(var i=0;i<value.length;i++)
    {
        sum=sum+value[i];
    }
    return sum;
}

console.log(add(10,20,30)); 