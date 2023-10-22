import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);
const localStorageKey = 'videoplayer-current-time';

const saveCurrentTime = (currentTime) => {
    localStorage.setItem(localStorageKey, currentTime);
};

const loadCurrentTime = () => {
    const currentTime = localStorage.getItem(localStorageKey);
    if (currentTime) {
        player.setCurrentTime(parseFloat(currentTime));
    }
};

const throttleSaveCurrentTime = throttle(saveCurrentTime, 1000);

player.on('timeupdate', (data) => {
    throttleSaveCurrentTime(data.seconds);
});

player.ready().then(() => {
    loadCurrentTime();
});