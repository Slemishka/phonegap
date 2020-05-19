document.addEventListener("deviceready", onDeviceReady, false);
var emailGlobal = "",
    pswdGlobal = "";

function onDeviceReady() {
    var doctor = document.getElementById("doctor");
    var patient = document.getElementById("patient");
    document.getElementById("patientDiv").style.display = "none";
    document.getElementById("doctorDiv").style.display = "none";

    var back1 = document.getElementById("backBtn"),
        backDoc = document.getElementById("backDoc"),
        submitPat = document.getElementById("submitBtn"),
        submitDoc = document.getElementById("submitDoc");

    doctor.addEventListener("click",function () {
        validateFields();
        if (emailGlobal !==""){
            document.getElementById("main-reg").style.display = "none";
            document.getElementById("doctorDiv").style.display = "block";
        }
    },false);

    patient.addEventListener("click",function () {
        validateFields();
        if (emailGlobal !== "") {
            document.getElementById("main-reg").style.display = "none";
            document.getElementById("patientDiv").style.display = "block";
        }
    },false);

    //if pressed back btn
    back1.addEventListener("click",function () {
        document.getElementById("main-reg").style.display = "block";
        document.getElementById("patientDiv").style.display = "none";
    },false);
    backDoc.addEventListener("click",function () {
        document.getElementById("main-reg").style.display = "block";
        document.getElementById("doctorDiv").style.display = "none";
    },false);



    submitDoc.addEventListener("click",signIn,false);
    submitPat.addEventListener("click",signIn,false);

}

function validateFields() {
    var email = document.getElementById("email").value,
        email2 = document.getElementById("email2").value,
        pswd = document.getElementById("pswd").value,
        pswd2 = document.getElementById("pswd2").value;

    if (email.length<4){
        alert("Please enter valid email");
        return;
    }
    if (pswd.length<4){
        alert("Password should be longer");
        return;
    }

    if (email!==email2){
        alert("Email doesn't match");
        return;
    }

    if (pswd!==pswd2){
        alert("Password doesn't match");
        return;
    }

    emailGlobal = email;
    pswdGlobal = pswd;
}

function signIn(){
    firebase.auth().createUserWithEmailAndPassword(emailGlobal, pswdGlobal)
        .then(function(firebaseUser) {
            console.log('user registered!');
            window.location.href = "mainPage.html";
        })
        .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;

                if (errorCode == 'auth/weak-password') {
                    alert('The password is too weak.');
                }
                else {
                    alert(errorMessage);
                }
                console.log(error);
            }
        );
}