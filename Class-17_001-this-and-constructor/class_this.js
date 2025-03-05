
class Account {

    min_bal = 500
    acc_bal = 0;
    open_Acc() {}

    deposit_amt(amt){
        this.acc_bal += amt
    }
    get_bal(){
        return this.acc_bal
    }
    withdraw_amt(amt){
        this.acc_bal -= amt
    }
    close_acc(){}
}

let acc_1 = new Account();
let acc_2 = new Account();

console.log(acc_1)
console.log(acc_2,"\n")

acc_1.deposit_amt(5000)
acc_2.deposit_amt(15000)

console.log("Balance of Account_1",acc_1.get_bal())
console.log("Balance of Account_2",acc_2.get_bal(), "\n")

acc_1.withdraw_amt(50)
acc_2.withdraw_amt(175)

console.log(acc_1)
console.log(acc_2,"\n")
