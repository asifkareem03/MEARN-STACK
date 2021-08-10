var products=[
    ["001","complan",275,50],
    ["002","boost",255,20],
    ["003","horlicks",225,5],
    ["004","bournvita",230,0],
    ["005","pediasure",220,10],
]

// print product names

    // console.log(products.map(name=>name[1])); 

// print avaialable product name

    // console.log(products.filter(product=>product[3]>0).map(name=>name[1]));

// print out of stock product details

    // console.log(products.filter(product=>product[3]==0));

// list all products whose price > 250

    // console.log(products.filter(product=>product[2]>250));

// low cost product

    // console.log(products.map(product=>product[2]).reduce((a,b)=>Math.min(a,b)))

    // console.log(Math.min(...(products.map(product=>product[2])))); 

    // console.log(products.map(product=>product[2]).reduce((a,b)=>Math.min(a,b)))
    
    // console.log(products.reduce((item1,item2)=>item1[2]<item2[2]?item1:item2))

// is there any item available under 200

    console.log(products.some(product=>product[2]<=200));

//Highest stock product

    // console.log(products.reduce((product1,product2)=>product1[3]>product2[3]?product1:product2));
