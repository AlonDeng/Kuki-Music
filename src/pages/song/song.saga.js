import { delay, put, takeLatest, call, select } from 'redux-saga/effects';
import Taro from "@tarojs/taro";

import _ from 'lodash';
import { actionTypes,
  checkMusicInfoFailure,
  checkMusicInfoSuccess,
  songDetailInfoSuccess,
  songDetailInfoFailure,
  playingOpen,
  } from './song.action';

import { toastOpen } from '../singletion//singletion.action'
import { parse_lrc } from '../../utilities/helpers';
import axiosInstance from '../../utilities/fetch';

export function* checkMusicInfoSaga({ payload }) {
  try {
      const { data } = yield call(axiosInstance.request, { 
          method: 'get',
          url: '/check/music',
          params: payload
        });
    //   if (error) throw new Error(`errorCode: ${errorCode}, ${errorMsg}`);
    // console.info('[DEBUGDEBUG]', 'data',data);
    Taro.navigateTo({
      url: `/pages/song/songDetail/index?id=${payload.id}`
    });
    yield put(checkMusicInfoSuccess({ checkMusicInfo: data }));
  } catch (err) {
    // console.log('===', 'rootScreen_socketMainConnect', 'saga', 'err', err);
    yield put(toastOpen({ toastText: '抱歉暫無版權' }))
    yield put(checkMusicInfoFailure(err));
  }
}

export function* songDetailInfoSaga({ payload }) {
  // console.log('[DEBUGDEBUG]', 'saga', 'getBannerInfoSaga', payload);
  try {
    let curSongInfo;
    const { data: { songs } } = yield call(axiosInstance.request, { 
        method: 'get',
        url: '/song/detail',
        params: { ids: payload.id }
      });
      const { data: { data } } = yield call(axiosInstance.request, { 
        method: 'get',
        url: '/song/url',
        params: payload
      });
      const { data: res } = yield call(axiosInstance.request, { 
        method: 'get',
        url: '/lyric',
        params: payload
      });
      const lrc = parse_lrc(res.lrc && res.lrc.lyric ? res.lrc.lyric : '');
      res.lrclist = lrc.now_lrc;
      res.scroll = lrc.scroll;
      curSongInfo = {
        ..._.get(songs, '[0]', {}),
        url: _.get(data, '[0].url', ''),
        lrcInfo: res,
      }
    //   if (error) throw new Error(`errorCode: ${errorCode}, ${errorMsg}`);

    // console.info('[DEBUGDEBUG]', 'data',curSongInfo);
    yield put(songDetailInfoSuccess({ curSongInfo }));
    yield put(playingOpen({ curSongId: payload.id }));
  } catch (err) {
    // console.log('===', 'rootScreen_socketMainConnect', 'saga', 'err', err);
    yield put(songDetailInfoFailure(err));
  }
}

export default [
  takeLatest(actionTypes.CHECK_MUSIC_REQUEST, checkMusicInfoSaga),
  takeLatest(actionTypes.SONG_DETAIL_REQUEST, songDetailInfoSaga),
];