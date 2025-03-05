
class Account {

    min_bal = 500
    acc_holder = ""
    acc_bal = 0;

    constructor(name, sal) {        // constructor with paramaters
        this.acc_holder = name
        this.acc_bal += sal
    }

    get_bal(){
        return this.acc_bal
    }
}

let acc_1 = new Account("Ajith Menon", 35000);    // constructors invoked automatically : arguments are passed in paranthesis

console.log(acc_1)

console.log(acc_1.acc_bal)                          // need to call properties using their name
console.log(acc_1.get_bal())                        // need to call methods separately using their name
