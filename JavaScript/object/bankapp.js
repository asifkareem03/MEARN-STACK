class Bank 
{

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

    authenticate(accountNumber, username, password) 
    {
        if (accountNumber in this.account_details) {
            if (username == this.account_details[accountNumber].username) {
                if (password == this.account_details[accountNumber].password) {
                    console.log("Login Success");
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
}

var obj = new Bank();
// obj.accountCreate(1004, 2000, "userfive", "userfive")
obj.authenticate(1002,"userthree","userthreee");
