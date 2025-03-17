
let goToGoa = (success, faliure) => {
    let acc_balance = 6000
    if(acc_balance >10000) {
        success("Go and enjoy")
    } else {
        faliure("Go back and study")
    }
}

goToGoa((msg)=>{
        console.log(msg)
    }, (msg)=>{
        console.log(msg)
    }
)
