class Bank{

    accountCreate(accno,type,balance){
        this.accno=accno;
        this.type=type;
        this.balance=balance;
    }
    deposit(amount){
        this.balance+=amount;
        console.log(`Your Account Number: ${this.accno} has been credited with Amount:${amount} Available Balance:${this.balance}`);
    }
    withdraw(amount){
        if(this.balance>amount){
            this.balance-=amount;
            console.log(`${amount} has Withdrawn Succesfully`);
        }
        else{
            console.log("Insufficient Balance");
        }
    }
    display(){
        console.log(`Your Available Balance:${this.balance}`);
    }
}

var obj=new Bank();
obj.accountCreate(1000,"Savings",12000);
obj.deposit(10000);
obj.withdraw(25000);