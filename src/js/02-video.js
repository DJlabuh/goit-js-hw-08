import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

function saveCurrentTime() {
  player
    .getCurrentTime()
    .then(function (seconds) {
      localStorage.setItem('videoplayer-current-time', seconds);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function loadCurrentTime() {
  const currentTime = localStorage.getItem('videoplayer-current-time');

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