document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
function onDeviceReady() {
    firebaseApp();
}
function firebaseApp() {

        var login = document.getElementById("login");
        login.addEventListener("click",loginAuth,false);
}

function loginAuth() {

    var email = document.getElementById("email").value;
    var pswd = document.getElementById("pswd").value;


    if (email.length < 4) {
        alert('Please enter an email address.');
        return;
    }

    if (pswd.length < 4) {
        alert('Please enter a password.');
        return;
    }

    firebase.auth().signInWithEmailAndPassword(email, pswd)
        .then(function(firebaseUser) {
            console.log('user logged in!');
            window.location.href = "mainPage.html";
        })
        .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;

                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                }
                else {
                    alert(errorMessage);
                }
            }
        );
}




