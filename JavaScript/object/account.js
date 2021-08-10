var datas=[
    {acno:1000,ac_type:"savings",balance:5000,transactions:[
        {to:1001,amount:500,note:"food"},
        {to:1003,amount:600,note:"travel"},
        {to:1001,amount:700,note:"ball"}

    ]},
    {acno:1001,ac_type:"savings",balance:6000,transactions:[
        {to:1000,amount:550,note:"bill"},
        {to:1002,amount:900,note:"emi"},
        {to:1002,amount:650,note:"bill"}

    ]},
    {acno:1002,ac_type:"savings",balance:8000,transactions:[
        {to:1001,amount:600,note:"clothing"},
        {to:1000,amount:800,note:"travel"},
        {to:1000,amount:6700,note:"cycle"}

    ]},

]

//print highest balance account

// console.log(datas.reduce((acc1,acc2)=>acc1.balance<acc2.balance?acc2:acc1));
//debit transactions of 1000

// datas.filter(acc=>acc.acno==1000).forEach(acnt=>console.log(acnt.transactions));

//console.log(datas.filter(acc=>acc.acno==1000).map(acnt=>acnt.transactions));

// console.log(datas.filter(acc=>acc.acno==1000).map(acnt=>acnt.transactions).filter(accn=>accn.));

datas.map(accnt=>accnt.transactions).forEach(acc=>acc.forEach(cr=>cr.to==1000?console.log(cr):''));

//payment history of 1001