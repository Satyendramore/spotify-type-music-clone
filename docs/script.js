let mainplay = document.querySelector("#mainplay");
let back = document.querySelector("#back");
let next = document.querySelector("#next");
let slider = document.querySelector(".slider");
let songcontent = document.querySelectorAll(".songcc");
let songname = document.querySelectorAll(".songname");
let songicon = document.querySelectorAll(".rarara");
let q = 0;
let song = document.querySelectorAll(".song");
let audioplay = new Audio("Bella Ciao.mp3");
let progress = 0;
let inputtext = document.querySelector("#text");
let searchicon = document.querySelector("#searchicon");
let crossbutt = document.querySelector("#crossbutt");

function audiopausehoga() {
    mainplay.classList.remove("fa-circle-play");
    mainplay.classList.add("fa-circle-pause");
}

function audioplayhoga() {
    mainplay.classList.remove("fa-circle-pause");
    mainplay.classList.add("fa-circle-play");
}

mainplay.addEventListener('click', () => {
    if (audioplay.paused) {
        audioplay.play();
        audiopausehoga();
        songicon[q].classList.remove("fa-circle-play");
        songicon[q].classList.add("fa-circle-pause");
    } else {
        audioplay.pause();
        audioplayhoga();
        songicon[q].classList.remove("fa-circle-pause");
        songicon[q].classList.add("fa-circle-play");
    }
});

back.addEventListener('click', () => {
    if (q !== 0) {
        let prev = q;
        q--;
        let k = `${songname[q].innerHTML}.mp3`;
        audioplay.pause();
        audioplay.src = k;
        audioplay.load();
        audioplay.play();
        songicon[q].classList.remove("fa-circle-play");
        songicon[q].classList.add("fa-circle-pause");
        songicon[prev].classList.remove("fa-circle-pause");
        songicon[prev].classList.add("fa-circle-play");
        mainplay.classList.remove("fa-circle-play");
        mainplay.classList.add("fa-circle-pause");
    }
});

next.addEventListener('click', () => {
    if (q !== 15) {
        let prev = q;
        q++;
        let k = `${songname[q].innerHTML}.mp3`;
        audioplay.pause();
        audioplay.src = k;
        audioplay.load();
        audioplay.play();
        songicon[q].classList.remove("fa-circle-play");
        songicon[q].classList.add("fa-circle-pause");
        songicon[prev].classList.remove("fa-circle-pause");
        songicon[prev].classList.add("fa-circle-play");
        mainplay.classList.remove("fa-circle-play");
        mainplay.classList.add("fa-circle-pause");
    }
});

slider.addEventListener('input', () => {
    audioplay.currentTime = (slider.value * audioplay.duration) / 100;
});

audioplay.addEventListener('timeupdate', () => {
    progress = parseInt((audioplay.currentTime / audioplay.duration) * 100);
    slider.value = progress;
});

songcontent.forEach((songElement, index) => {
    songElement.querySelector(".rarara").addEventListener('click', () => {
        let o = `${songElement.querySelector(".songname").innerHTML}.mp3`;
        if (q !== index) {
            audioplay.pause();
            audioplay.src = o;
            audioplay.load();
            audioplay.play();
            q = index;
            audiopausehoga();
            songicon[q].classList.remove("fa-circle-play");
            songicon[q].classList.add("fa-circle-pause");
            songicon[prev].classList.remove("fa-circle-pause");
            songicon[prev].classList.add("fa-circle-play");
        } else {
            if (audioplay.paused) {
                audioplay.play();
                audiopausehoga();
                songicon[q].classList.remove("fa-circle-play");
                songicon[q].classList.add("fa-circle-pause");
            } else {
                audioplay.pause();
                audioplayhoga();
                songicon[q].classList.remove("fa-circle-pause");
                songicon[q].classList.add("fa-circle-play");
            }
        }
        prev = index;
    });
});

searchicon.addEventListener('click', () => {
    song.forEach((songElement, index) => {
        if (songElement.querySelector(".songname").innerText.toLowerCase() !== inputtext.value.toLowerCase()) {
            songElement.style.display = "none";
        }
    });
});

crossbutt.addEventListener('click', () => {
    inputtext.value = "";
    song.forEach((songElement) => {
        songElement.style.display = "flex";
    });
});
