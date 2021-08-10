// Map();-To Map all the elements of array into something or to do a action in all the elements in array

    //To square the array elements

    // var arr=[1,2,3];
    // console.log(arr.map(num=>num**2));

    //To Convert to Upper case

    // var names=['ram','raju','rakesh'];
    // console.log(names.map(name=>name.toUpperCase()));

    //Return num-1 if num<5  else return num+1
    // var nums=[2,3,4,6,7,8];
    // console.log(nums.map(num=>num>5?num+1:num-1));

// Filter():- To do an action to some specific elements or to return some of the elements in the array(based on condition)

    //to return even numbers in the array
    // var arr=[1,2,3,4,5,6,7,8];
    // console.log(arr.filter(num=>num%2==0))

    //Print names starting with 'R'
    // var names=['Ram','raju','Akesh'];
    // console.log(names.filter(name=>name[0]=='r' || name[0]=='R'));

    // var employees=[
    //     [1000,'Ram',2,25000,'devoloper'],
    //     [1001,'Ravi',1,22000,'devoloper'],
    //     [1002,'Raju',3,27000,'qa'],
    //     [1003,'Nikhil',3,21000,'qa'],
    // ]

    //printing names whose salary is greater than 23000 and working as devoloper

    // console.log(employees.filter(emp=>emp[3]>23000 & emp[4]=='devoloper').map(emp=>emp[1]));


//reduce():-To reduce array into a single output from an array(ie,to find max,min from an array or to find sum of array)

    // var products=[
    //     ["001","complan",275,50],
    //     ["002","boost",255,20],
    //     ["003","horlicks",225,5],
    //     ["004","bournvita",230,0],
    //     ["005","pediasure",220,10],
    // ]
    //To find the low cost product
    // console.log(products.reduce((item1,item2)=>item1[2]<item2[2]?item1:item2))

//find():-  To find an element in array based on condition(same as filter but find returns only the first condition satisfied element)

    // const ages = [3, 10, 18, 20];

    // console.log(ages.find(age=>age>18));


//some():-  it will return true if condition satisfies else returns false

//forEach():-To iterate through array.To get access to each element

//sort=>array.sort((a,b)=>a-b) :-> For sorting based numbers
//      array.sort() :-> For sorting based on alphabets