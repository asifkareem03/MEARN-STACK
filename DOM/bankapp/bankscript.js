// localStorage.setItem("username","admin");
// localStorage.setItem("password","admin@123");
// localStorage.setItem("token","abc123");


var person1={pname:"ram",account_number:1000,balace:2000,password:"userone"}
var person2={pname:"ram pj",account_number:1001,balace:2000,password:"usertwo"}

localStorage.setItem(person1.account_number,JSON.stringify(person1));
localStorage.setItem(person2.account_number,JSON.stringify(person2));

function getBalance(account_number){
    if(account_number in localStorage){
        let user=JSON.parse(localStorage.getItem(account_number))
        console.log(user.balace);
    }
    else{
        console.log("Account Number Invalid");
    }
}

function authenticate(account_number,password){
    if(account_number in localStorage){
        let user=JSON.parse(localStorage.getItem(account_number))
        if(password===user.password && account_number===user.account_number){
            console.log("Login Successfull");
        }
        else{
            console.log("Invalid Credentials");
        }
    }
    else{
        console.log("invalid Account Number");
    }
}
