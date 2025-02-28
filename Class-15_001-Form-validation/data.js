
function loginValidation() {
    let user_email = document.getElementById("uemailid").value;
    let user_password = document.getElementById("upassword").value;
    if(user_email == "") {
        document.getElementById("email-val").innerHTML = "please enter email id"
    }
    if(user_password == "") {
        document.getElementById("password-val").innerHTML = "please enter email id"
    }

    return false
}
