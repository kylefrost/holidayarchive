var images = new Array();
function preload() {
    for (i = 0; i < preload.arguments.length; i++) {
        images[i] = new Image()
        images[i].src = preload.arguments[i]
    };
    var sound = new Audio('audio/christmas.mp3');
};

preload(
    "assets/snow.jpg",
    "assets/sig.png"
);

var img = new Image();
img.onload = function() {
    $(".signature").addClass("fadeIn");
    $(".middleText").addClass("fadeIn");

   function initAudio(){
    var audio = new Audio('audio/christmas.mp3');
    var self = this;
    //not sure if you need this, but it's better to be safe
    self.audio = audio;
    var startAudio = function(){
                         self.audio.play();
                         document.removeEventListener("touchstart", self.startAudio, false);
                     }
    self.startAudio = startAudio;

    var pauseAudio = function(){
                         self.audio.pause();
                         self.audio.removeEventListener("play", self.pauseAudio, false);
                     }
    self.pauseAudio = pauseAudio;

    document.addEventListener("touchstart", self.startAudio, false);
    self.audio.addEventListener("play", self.pauseAudio, false);
} 
};
img.src = 'assets/snow.jpg';
