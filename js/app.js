let clapSound = new Audio("sounds/clap.wav");
let hihatSound = new Audio("sounds/hihat.wav");
let kickSound = new Audio("sounds/kick.wav");
let openHatSound = new Audio("sounds/openhat.wav");
let rideSound = new Audio("sounds/ride.wav");
let snareSound = new Audio("sounds/snare.wav");
let tinkSound = new Audio("sounds/tink.wav");
let tomSound = new Audio("sounds/tom.wav");
let boomSound = new Audio("sounds/boom.wav");
let key = document.getElementsByClassName("key");
const keys = document.querySelectorAll('.key');


window.addEventListener("keydown", function (e) {
    if (e.keyCode == 65) {
        clapSound.play();
        key[0].classList.add("playing");
    } else if (e.keyCode == 83) {
        hihatSound.play();
        key[1].classList.add("playing");

    } else if (e.keyCode == 68) {
        kickSound.play();
        key[2].classList.add("playing");

    } else if (e.keyCode == 70) {
        openHatSound.play();
        key[3].classList.add("playing");

    } else if (e.keyCode == 71) {
        boomSound.play();
        key[4].classList.add("playing");

    } else if (e.keyCode == 72) {
        rideSound.play();
        key[5].classList.add("playing");

    } else if (e.keyCode == 74) {
        snareSound.play();
        key[6].classList.add("playing");

    } else if (e.keyCode == 75) {
        tomSound.play();
        key[7].classList.add("playing");

    } else if (e.keyCode == 76) {
        tinkSound.play();
        key[8].classList.add("playing");

    }



    function removeTransition(e) {
        if (e.propertyName !== 'transform') return;

        this.classList.remove('playing');

    }



    keys.forEach(key =>
        key.addEventListener('transitionend', removeTransition));

})