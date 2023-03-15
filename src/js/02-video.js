import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const VIDEOPLAYER_CURRENT_TIME = 'videoplayer-current-time';

function saveCurrentTime() {
  player
    .getCurrentTime()
    .then(function (seconds) {
      localStorage.setItem(VIDEOPLAYER_CURRENT_TIME, seconds);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function loadCurrentTime() {
  const currentTime = localStorage.getItem(VIDEOPLAYER_CURRENT_TIME);

  if (currentTime) {
    player.setCurrentTime(currentTime).catch(function (error) {
      console.log(error);
    });
  }
}

const iframe = document.getElementById('vimeo-player');
const player = new Vimeo(iframe);

player.on('timeupdate', throttle(saveCurrentTime, 1000));
loadCurrentTime();