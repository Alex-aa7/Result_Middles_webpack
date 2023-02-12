import './index.scss';
import {soundsSettings} from "./constants";
// const btn = document.querySelector(".button");
const $seasons = document.querySelector("#seasons");
const $seasonContainer = document.querySelector("#seasonContainer");
const $volume = document.querySelector('#volume-slider');
const audio = new Audio(soundsSettings[0].soundSrc);
audio.loop = true;

let currentSeason = 0;

$volume.addEventListener("change", (event) => {
    audio.volume = event.target.value / 100;
});

function selectSeason(seasonSettings, index) {
    if (currentSeason === index) {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    } else {
        audio.src = seasonSettings.soundSrc;
        audio.play();
    }
}

const createSoundItem = (sound, index) => {
    const $soundItem = document.createElement('div');
    $soundItem.classList.add('season');
    $soundItem.dataset.code = sound.code;
    $soundItem.style.backgroundImage = `url(${sound.bgImg})`;
    $soundItem.addEventListener('click', () => {
        selectSeason(sound, index)
        setCuttentItem(index)
        updateCommonBg();
    });

    const $itemIcon = document.createElement('img');
    $itemIcon.classList.add('season__icon');
    $itemIcon.src = sound.iconImg;
    $soundItem.append($itemIcon);

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