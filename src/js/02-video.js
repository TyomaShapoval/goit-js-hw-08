import Player from "@vimeo/player"
import { throttle } from "lodash";

const iFrame = document.getElementById("vimeo-player");
const player = new Player(iFrame);
player.on("timeupdate", throttle((data) => {
    localStorage.setItem('videoplayer-current-time', data.seconds);
},1000))
const currentTime = localStorage.getItem('videoplayer-current-time');

if (currentTime !== null) {
  player.setCurrentTime(currentTime);
}

