const lights = document.getElementsByClassName('lights');
const play = document.getElementById('turn-on');
const stop = document.getElementById('turn-off');
const but = document.getElementById('submit');

var tam = lights.length;

const on = function() {
    for (var i = 0; i < tam; i++) {
        lights[i].removeAttribute("style");
        lights[i].style.animationPlayState = "running";
        lights[i].style.WebkitAnimationPlayState = "running";
    }
}

const off = function() {  
    for (var i = 0; i < tam; i++) {
        lights[i].style.animation = "none";
        lights[i].style.background = "#67566E";
    }
}

function changeIntensity() {
    var intensity = document.getElementById('intensit').value;
    for (let i = 0; i < tam; i++) {
        lights[i].style.animationDuration =  intensity + "s";
    }
}

play.addEventListener('click', on);
stop.addEventListener('click', off);
