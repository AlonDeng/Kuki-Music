import { delay, put, takeLatest, call, select } from 'redux-saga/effects';
import _ from 'lodash';
import { actionTypes, getTotalInfoSuccess, getTotalInfoFailure, getSearchHotSuccess, getSearchHotFailure } from './search.action';

import axiosInstance from '../../utilities/fetch';
import { checkObj } from '../../utilities/helpers';



export function* getTotalInfoSaga({ payload }) {
  // console.log('[DEBUGDEBUG]', 'rootScreen', 'saga', 'socketMainConnect', payload);
  try {
    
    //   const { data, error, errorCode, errorMsg } = yield call(fetchInstance.request, { method: 'post', url: '/device/registerOne', data: payload });
      const { data: { result } } = yield call(axiosInstance.request, { 
          method: 'get',
          url: '/search', 
          params: payload
        });
      switch (payload.type) {
        case 1018:
          const data = {
            type: payload.type,
            isData: checkObj(result.song || {}, result.playList || {}, result.video || {}, result.artist || {}, result.sim_query || {}, result.user || {}),
            song: result.song || {},
            playList: result.playList || {},
            video: result.video || {},
            artist: result.artist || {},
            sim_query: result.sim_query || {},
            user: result.user || {},
          }
          yield put(getTotalInfoSuccess(data));
          break;
      
        default:
          break;
      }
      // if(checkObj(result.song, result.playList)) a = '2222'
      // else a = '1111'
      // const { song = {}, playList = {}, video = {}, artist = {}, sim_query = {}, user = {} } = result;
    //   if (error) throw new Error(`errorCode: ${errorCode}, ${errorMsg}`);

    // yield put(getSearchInfoSuccess(data));
  } catch (err) {
    // console.log('===', 'rootScreen_socketMainConnect', 'saga', 'err', err);
    // yield put(getSearchInfoFailure(err));
  }
}

export function* getSearchHotSaga({ payload }) {
  // console.log('[DEBUGDEBUG]', 'rootScreen', 'saga', 'socketMainConnect', payload);
  try {
    
      const { data: { data, code } } = yield call(axiosInstance.request, { 
          method: 'get',
          url: '/search/hot/detail',
        });
    //   if (error) throw new Error(`errorCode: ${errorCode}, ${errorMsg}`);

    // console.log('[DEBUGDEBUG]', 'getSearchHotSaga', 'dsdsdsds',data);
    yield put(getSearchHotSuccess({ data }));
  } catch (err) {
    console.log('===', 'rootScreen_socketMainConnect', 'saga', 'err', err);
    yield put(getSearchHotFailure(err));
  }
}

export default [
  takeLatest(actionTypes.TOTAL_INFO_REQUEST, getTotalInfoSaga),
  takeLatest(actionTypes.SEARCH_HOT_REQUEST, getSearchHotSaga),
]