document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    var logOut = document.getElementById("logout");
    logOut.addEventListener("click",logOutFunc,false);



    var camera = document.getElementById("camera");
        camera.addEventListener("click",cameraAPI,false);


    //Battery API
    window.addEventListener("batterystatus", batteryStatus, false);
    window.addEventListener("batterylow", batteryLow, false);
    window.addEventListener("batterycritical", batteryCritical, false);

    //Network API
    document.addEventListener("online", online, false);
    document.addEventListener("offline", offline, false);


    //geolocation
    var geo = document.getElementById("geo");
    geo.addEventListener("click",getGeolocation,false);

}


function logOutFunc() {
    console.log("yes");
    firebase.auth().signOut().then(function () {
        window.location.href = "index.html";
    });
}

function cameraAPI() {
    var options = {
        'quality': 85,
        'targetWidth': 1280,
        'targetHeight': 720,
        'saveToPhotoAlbum': false,
        'allowEdit': false,
        'destinationType' : navigator.camera.DestinationType.FILE_URI,
        'sourceType' : navigator.camera.PictureSourceType.CAMERA,
        'MediaType':  navigator.camera.MediaType.PICTURE,
        'encodingType': navigator.camera.EncodingType.JPEG,
        'Direction': navigator.camera.Direction.BACK
    };

    navigator.camera.getPicture(camSuccess,camError,options);
}
function camSuccess(imageData) {
    console.log(imageData);
}
function camError(error){
    console.log(error);
}


//battery API
function batteryStatus(status) {

    var charging = (status.isPlugged)?" ":" not ";

    $("#batStatus").html("Your device is "+status.level+"% and is"+charging+"charging");

}
function batteryLow(status) {
    alert("Battery is low: "+ status.level+"%");
}
function batteryCritical(status) {
    alert("Battery is critically low: "+status.level+"%");
}

//Network API
function online() {
    alert("Network is online! \nConnection Type: " + navigator.connection.type);
}
function offline() {
    alert("Network is offline!");
}

//geo

    // create success and error callbacks for geolocation events
    var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
            'Longitude: '         + position.coords.longitude         + '\n' +
            'Altitude: '          + position.coords.altitude          + '\n' +
            'Accuracy: '          + position.coords.accuracy          + '\n' +
            'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
            'Heading: '           + position.coords.heading           + '\n' +
            'Speed: '             + position.coords.speed             + '\n' +
            'Timestamp: '         + position.timestamp                + '\n');
    };

    function onError(error) {
        alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
    }

    function getGeolocation() {
        var options = { maximumAge: 5000, timeout: 5000, enableHighAccuracy: true };
        navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
    }
