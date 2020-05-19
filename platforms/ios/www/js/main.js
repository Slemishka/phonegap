document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    var logOut = document.getElementById("logout");
    logOut.addEventListener("click",logOutFunc,false);



    var camera = document.getElementById("camera");
        camera.addEventListener("click",cameraAPI,false);
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