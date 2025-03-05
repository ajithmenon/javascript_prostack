
class Account {

    min_bal = 500
    acc_bal = 0;

    // constructor is used to initialize values
    constructor() { 
        console.log("Automatically invoked constructor")
    }

    open_Acc() {}
}

let acc_1 = new Account(); 
// Constructor is called automatically here without calling method sepratelly
// Should pass arguments inside (), if there are parameters for constructor
