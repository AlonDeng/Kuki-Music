import { actionTypes } from './song.action';

export const exampleInitialState = {
  checkMusicInfo: {},
  curSongInfo: {},
  isPlaying: false,
  playMode: 'loop',
  curSongIndex: 0,
  curSongId: 0,
  curPlayList: [],
  isNoFirst: false,
  isRequesting: false,
};

function reducer(state = exampleInitialState, { type: actionType, payload = {} }) {
  switch (actionType) {
    case actionTypes.CHECK_MUSIC_REQUEST:
      return { ...state };
    case actionTypes.CHECK_MUSIC_SUCCESS:
      return { ...state, ...{ checkMusicInfo: payload.checkMusicInfo } };
    case actionTypes.CHECK_MUSIC_FAILURE:
      return { ...state };

    case actionTypes.SONG_DETAIL_REQUEST:
      return { ...state };
    case actionTypes.SONG_DETAIL_SUCCESS:
      return { ...state, ...{ curSongInfo: payload.curSongInfo } };
    case actionTypes.SONG_DETAIL_FAILURE:
      return { ...state }; 

    case actionTypes.PLAYING_OPEN:
      // if ('curSongId' in payload) {
      //   return { ...state, ...{ isPlaying: true, curSongId: payload.curSongId } };
      // } else {
        return { ...state, ...{ isPlaying: true } };
      // }
    case actionTypes.PLAYING_CLOSE:
      return { ...state, ...{ isPlaying: false } }; 

    case actionTypes.SET_ISNOFIRST:
      return { ...state, ...{ isNoFirst: payload } }

    case actionTypes.SET_CURPLAYLIST:
      return { ...state, ...{ curPlayList: payload } }

    case actionTypes.SET_CURSONGINDEX:
      return { ...state, ...{ curSongIndex: payload } }

    default:
      return state;
  }
}

export default reducer;