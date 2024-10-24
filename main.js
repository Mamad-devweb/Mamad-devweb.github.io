var body = document.getElementById("body")
var videoSource = document.getElementById("video-source")

function jour() {
body.classList.toggle("night")

if (body.classList.contains("night")) {
    videoSource.src = "nuit.mp4";
} else {
    videoSource.src = "jour.mp4"
}
{
var video = document.getElementById("background-video");
video.load();
}
}