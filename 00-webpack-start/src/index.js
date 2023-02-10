// const btn = document.querySelector(".button");
import './index.scss'
const seasons = document.querySelector(".seasons");
let volume = document.getElementById('volume-slider');

volume.addEventListener("change", function(e) {
      audio.forEach(function(elem,i) { audio[i].volume = e.currentTarget.value / 100})
    console.log(audio[0].volume)
})


const data = [
  { id: 0, img: "./img/summer-bg.jpg", sound: '../assets/sounds/summer.mp3' },
  { id: 1, img: "./img/rainy-bg.jpg", sound: "../assets/sounds/rain.mp3" },
  { id: 2, img: "./img/winter-bg.jpg", sound: "../assets/sounds/winter.mp3" },
];

let audio = [];
// aud = new Audio("/assets/sounds/rain.mp3");
// aud.play()
// console.log(aud)
let lastSeason = -1;

seasons.addEventListener("click", function (e) {
  selectSeason(e.target.id);
});

function selectSeason(season) {
  audio[season] ? '': (audio[season] = new Audio(data[season].sound));

  if (lastSeason == season) {
    togglePlay(season);
  } else {
    if (lastSeason == -1) {
      togglePlay(season);
    } else {
      pause(lastSeason);
      play(season);
    }
    lastSeason = season;
  }
}

function togglePlay(season) {
  console.log(season);
  return audio[season].paused ? audio[season].play() : audio[season].pause();
}
function pause(season) {
  console.log("pause " + season);
  return audio[season].pause();
}
function play(season) {
  console.log("play " + season);
  return audio[season].play();
}
