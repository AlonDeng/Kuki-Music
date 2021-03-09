import Taro from "@tarojs/taro";

import { playingOpen, playingClose, setIsNoFirst } from '../pages/song/song.action';

const backgroundAudioManager = Taro.getBackgroundAudioManager();

export const bindBackGAudio = ({ playByModeFn, playMode, dispatch }) => {
    backgroundAudioManager.onTimeUpdate(() => {
      Taro.getBackgroundAudioPlayerState({
        success(res) {
          if (res.status !== 2) {
            console.info('res', res)
          //   that.updateLrc(res.currentPosition);
          //   that.updateProgress(res.currentPosition);
          }
        }
      });
    });
    backgroundAudioManager.onPause(() => {
      dispatch(playingClose({}))
    });
    backgroundAudioManager.onPlay(() => {
        dispatch(playingOpen({}))
      });
    backgroundAudioManager.onEnded(() => {
      const routes = Taro.getCurrentPages();
      const currentRoute = routes[routes.length - 1].route;
      // console.log('currentRoute',currentRoute);
      if (currentRoute === "pages/songDetail/index") {
          playByModeFn(playMode);
      } else {
        Taro.eventCenter.trigger("nextSong");
      }
    });
    dispatch(setIsNoFirst(true))
}

let curSongId = 0;
export const curSongIdFn = {
  get: () => curSongId,
  set: (id) => curSongId = id,
}