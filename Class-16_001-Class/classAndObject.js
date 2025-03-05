
class Account {                     // declare a Class

    acc_bal = 100;                  // Class properties
    branch_name = "Marathahalli"

    open_Acc() {                    // Class Methods
        console.log("Account Opened")
    }
    deposit_cash(){
        console.log("Deposited Cash to Account")
    }
    get_bal(){
        console.log("Balance of Account")
    }
    withdraw_cash(){
        console.log("Withdrewed cash from Account")
    }
    close_acc(){
        console.log("Account Closed")
    }
}

let a1 = new Account();             // Creating 1st object for the class
let a2 = new Account();             // Creating 2nd object for the class

console.log("Account 1 :", a1)      // printing object of class
console.log("Account 2 :", a2)

console.log("\n\n")

a1.open_Acc()                       // calling methods of class using 1st object
a1.deposit_cash()
a1.get_bal()
a1.withdraw_cash()
a1.close_acc()

