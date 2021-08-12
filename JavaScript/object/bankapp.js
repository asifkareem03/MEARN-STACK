class Bank {

    session = {};
    account_details = {
        1000: { acno: 1000, balance: 2000, username: "userone", password: "userone" },
        1001: { acno: 1001, balance: 3000, username: "usertwo", password: "usertwo" },
        1002: { acno: 1002, balance: 2002, username: "userthree", password: "userthree" },
        1003: { acno: 1003, balance: 20000, username: "userfour", password: "userfour" }
    };


    accountCreate(acno, balance, username, password) {
        if (acno in this.account_details) {
            console.log("Account Already exist");
        }
        else {
            this.account_details[acno] = { acno, balance, username, password };
            console.log("Account Created Successfully");
            console.log(this.account_details);
        }
    }

    authenticate(accountNumber, username, password) {
        if (accountNumber in this.account_details) {
            if (username == this.account_details[accountNumber].username) {
                if (password == this.account_details[accountNumber].password) {
                    console.log("Login Success");
                    this.session["user"] = accountNumber;
                }
                else {
                    console.log("Invalid Password");
                }
            }
            else {
                console.log("Invalid Username");
            }
        }
        else {
            "Account Number Doesnt exist"
        }
    }

    fundTransfer(from_acno, to_acno, amount) {
        if (from_acno == this.session["user"]) {
            if(to_acno in this.account_details){
                if(amount<=this.account_details[from_acno].balance){
                    this.account_details[from_acno].balance-=amount;
                    this.account_details[to_acno].balance+=amount;
                    console.log("Fund Transfer Completed");
                    console.log(`your Account ${from_acno} is debited with ${amount}, Available balance is ${this.account_details[from_acno].balance}`);
                }
                else{
                    console.log("Insufficient Balance");
                }
            }
            else{
                console.log("Invalid account Number");
            }
        }
        else {
            console.log("Invalid Session,Need to login first");
        }
    }

    balanceEnquiry(){
        if("user" in this.session){
            console.log("Your Available balance is",this.account_details[this.session["user"]].balance);
        }
        else{
            console.log("Login required");
        }
    }
}

var obj = new Bank();
// obj.accountCreate(1004, 2000, "userfive", "userfive")
obj.authenticate(1002, "userthree", "userthree");
obj.fundTransfer(1002,1001,2000)
obj.balanceEnquiry();

