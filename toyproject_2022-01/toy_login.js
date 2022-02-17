function Login(){
    var userId = document.getElementById("userId").value;
    var userPwd = document.getElementById("userPwd").value;
    if(userId == "") {
        alert("insert ID");
        return false;
    }
    if(userPwd == "") {
        alert("insert password");
        return false;
    }
    if(userId == "hodoolove" && userPwd == "123456789"){
        alert("NICE TO SEE YOU");
    } 
    else
    {
        alert("check your log in information");
    }
    
}

function Signup(){
    var signupId = document.getElementById("signupId").value;
    var signupPwd = document.getElementById("signupPwd").value;
    var signupPwd2 = document.getElementById("signupPwd2").value;
    var signupName = document.getElementById("signupName").value;
    var signupYear = document.getElementById("signupYear").value;
    var signupPh = document.getElementById("signupPh").value;

    if(signupId == "") {
        alert("insert ID")
        return false;
    }
    var regId = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if(regId.test(signupId) === false) {
        alert("E-mail is not valid")
    }
    if(signupPwd == "") {
        alert("insert password")
        return false;
    }
    if(signupPwd2 == "") {
        alert("confirm your password")
        return false;
    }
    if(signupPwd2 != signupPwd) {
        alert("password is not correct")
        return false;
    }
    if(signupName == "") {
        alert("insert name")
        return false;
    }
    if(signupYear == "") {
        alert("insert year of birth")
        return false;
    }
    if(signupPh == "") {
        alert("insert phone number")
        return false;
    }
    var regPh = /^01([0|1|6|7|8|9])-?([2-9]{3,4})-?([0-9]{4})$/;
    if(regPh.test(signupPh) === false) {
        alert("phone number is not valid")
    }
    else {
        alert("WELCOME")
    }
}

function FindPwd(){
    var passId = document.getElementById("passId").value;

    if(passId == "") {
        alert("insert E-mail")
        return false;
    }
    var regId2 = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if(regId2.test(passId) === false) {
        alert("E-mail is not valid")
    }
}