import './index.scss';
import {soundsSettings} from "./constants";
// const btn = document.querySelector(".button");
const $seasons = document.querySelector("#seasons");
const $seasonContainer = document.querySelector("#seasonContainer");
const volume = document.querySelector('#volume-slider');
const audios = [];
let currentSeason = 0;
let lastSeason = -1;

volume.addEventListener("change", (e) => {
    audios.forEach((elem, i) => {
        audios[i].volume = e.currentTarget.value / 100
    })
    console.log('audio:', audios);
    console.log(audios[0].volume)
})


seasons.addEventListener("click", function (e) {
    selectSeason(e.target.id);
});

function selectSeason(season) {
    audios[season] ? '' : (audios[season] = new Audio(data[season].sound));

    if (lastSeason === season) {
        togglePlay(season);
    } else {
        if (lastSeason === -1) {
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
    return audios[season].paused ? audios[season].play() : audios[season].pause();
}

function pause(season) {
    console.log("pause " + season);
    return audios[season].pause();
}

function play(season) {
    console.log("play " + season);
    return audios[season].play();
}

function setVolume(volume) {
    console.log(volume);
    return audios[season].volume = volume;
}

const createSoundItem = ({bgImg}, index) => {
    const $soundItem = document.createElement('div');
    $soundItem.classList.add('season');
    $soundItem.style.backgroundImage = `url(${bgImg})`;
    $soundItem.addEventListener('click', () => {
        setCuttentItem(index)
        updateCommonBg();
    });

    return $soundItem;
}

const setCuttentItem = (index) => {
    currentSeason = index;
}

const updateCommonBg = () => {
    $seasonContainer.style.backgroundImage = `url(${soundsSettings[currentSeason].bgImg})`
}

function init() {
    soundsSettings.forEach((itemSettings, index) => {
        $seasons.append(createSoundItem(itemSettings, index));
    });
    updateCommonBg();
}

init();