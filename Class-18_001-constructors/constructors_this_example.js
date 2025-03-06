
class Account {
    minBalance = 500

    constructor(id, name, amt) {
        this.accID = id                             // as JS is loosely typed we can create properties dynamically - accID, accName, AccBalance  
        this.accName = name
        this.accBalance = amt
    }

    depositAmount(amt){
        this.accBalance += amt
    }
    getBalance(){
        return this.accBalance
    }
    withdrawAmount(amt){
        this.accBalance -= amt
    }

}

let acc1 = new Account(101, "Rahul", 5000);
let acc2 = new Account(102, "Soniya", 10000);
let acc3 = new Account();                           // no error - and will create properties too from constructor with undefined values

console.log(acc1)
console.log(acc2)
console.log(acc3)

acc1.depositAmount(1000)
acc1.depositAmount(2000)

console.log("Balance After Deposit ------------ ")
console.log("Account 1 :",acc1.getBalance())
console.log("Account 2 :",acc2.getBalance())
console.log("Account 3 :",acc3.getBalance())

acc1.withdrawAmount(50)
acc2.withdrawAmount(1000)

console.log("Balance After withdraw ----------- ")
console.log("Account 1 :",acc1.getBalance())
console.log("Account 2 :",acc2.getBalance())
console.log("Account 3 :",acc3.getBalance())
