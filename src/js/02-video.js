import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME = 'videoplayer-current-time';

player.on('timeupdate', throttle(addCurrentTimeToStorage, 1000));

function addCurrentTimeToStorage({ seconds }) {
  const timeOfPlaying = seconds;
  localStorage.setItem(CURRENT_TIME, timeOfPlaying);
}
player.setCurrentTime(+localStorage.getItem(CURRENT_TIME));
