import { delay, put, takeLatest, call, select } from 'redux-saga/effects';
import _ from 'lodash';
import { actionTypes,
  getBannerInfoSuccess,
  getBannerInfoFailure,
  getBallInfoFailure,
  getBallInfoSuccess,
  getRecomSongInfoSuccess,
  getRecomSongInfoFailure,
  getRecomMVInfoSuccess,
  getRecomMVInfoFailure,
  getRecomElecInfoSuccess,
  getRecomElecInfoFailure
  } from './index.action';

import axiosInstance from '../../utilities/fetch';



export function* getBannerInfoSaga({ payload }) {
  // console.log('[DEBUGDEBUG]', 'saga', 'getBannerInfoSaga', payload);
  try {
    // console.log('[DEBUGDEBUG]', 'getSearchHotSaga', 'saga');
    
      const { data: { banners = [] } } = yield call(axiosInstance.request, { 
          method: 'get',
          url: '/banner',
          params: payload
        });
    //   if (error) throw new Error(`errorCode: ${errorCode}, ${errorMsg}`);

    // console.log('[DEBUGDEBUG]', 'getBannerInfoSaga',banners);
    yield put(getBannerInfoSuccess({ banners }));
  } catch (err) {
    // console.log('===', 'rootScreen_socketMainConnect', 'saga', 'err', err);
    yield put(getBannerInfoFailure(err));
  }
}

export function* getBallInfoSaga({ payload }) {
  // console.log('[DEBUGDEBUG]', 'saga', 'getBannerInfoSaga', payload);
  try {
    // console.log('[DEBUGDEBUG]', 'getSearchHotSaga', 'saga');
    
      const { data: { data } } = yield call(axiosInstance.request, { 
          method: 'get',
          url: '/homepage/dragon/ball',
        });
    //   if (error) throw new Error(`errorCode: ${errorCode}, ${errorMsg}`);

    // console.log('[DEBUGDEBUG]', 'getBannerInfoSaga',data);
    yield put(getBallInfoSuccess({ ballInfo: data }));
  } catch (err) {
    // console.log('===', 'rootScreen_socketMainConnect', 'saga', 'err', err);
    yield put(getBallInfoFailure(err));
  }
}

export function* getRecomSongInfoSaga({ payload }) {
  // console.log('[DEBUGDEBUG]', 'saga', 'getBannerInfoSaga', payload);
  try {
    // console.log('[DEBUGDEBUG]', 'getSearchHotSaga', 'saga');
    
      const { data: { result } } = yield call(axiosInstance.request, { 
          method: 'get',
          url: '/personalized',
        });
    //   if (error) throw new Error(`errorCode: ${errorCode}, ${errorMsg}`);

    // console.log('[DEBUGDEBUG]', 'getRecomSongInfoSaga',data);
    yield put(getRecomSongInfoSuccess({ recomSongInfo: result }));
  } catch (err) {
    console.log('===', 'rootScreen_socketMainConnect', 'saga', 'err', err);
    yield put(getRecomSongInfoFailure(err));
  }
}

export function* getRecomMVInfoSaga({ payload }) {
  // console.log('[DEBUGDEBUG]', 'saga', 'getBannerInfoSaga', payload);
  try {
    // console.log('[DEBUGDEBUG]', 'getSearchHotSaga', 'saga');
    
      const { data: { result } } = yield call(axiosInstance.request, { 
          method: 'get',
          url: '/personalized/mv',
        });
    //   if (error) throw new Error(`errorCode: ${errorCode}, ${errorMsg}`);

    console.log('[DEBUGDEBUG]', 'getRecomSongInfoSaga',result);
    yield put(getRecomMVInfoSuccess({ recomMVInfo: result }));
  } catch (err) {
    // console.log('===', 'rootScreen_socketMainConnect', 'saga', 'err', err);
    yield put(getRecomMVInfoFailure(err));
  }
}

export function* getRecomElecInfoSaga({ payload }) {
  // console.log('[DEBUGDEBUG]', 'saga', 'getBannerInfoSaga', payload);
  try {
    // console.log('[DEBUGDEBUG]', 'getSearchHotSaga', 'saga');
    
      const { data: { result } } = yield call(axiosInstance.request, { 
          method: 'get',
          url: '/personalized/djprogram',
        });
    //   if (error) throw new Error(`errorCode: ${errorCode}, ${errorMsg}`);

    console.log('[DEBUGDEBUG]', 'getRecomSongInfoSaga',result);
    yield put(getRecomElecInfoSuccess({ recomElecInfo: result }));
  } catch (err) {
    // console.log('===', 'rootScreen_socketMainConnect', 'saga', 'err', err);
    yield put(getRecomElecInfoFailure(err));
  }
}

export default [
  takeLatest(actionTypes.BANNER_INFO_REQUEST, getBannerInfoSaga),
  takeLatest(actionTypes.BALL_INFO_REQUEST, getBallInfoSaga),
  takeLatest(actionTypes.RECOMSONG_INFO_REQUEST, getRecomSongInfoSaga),
  takeLatest(actionTypes.RECOMMV_INFO_REQUEST, getRecomMVInfoSaga),
  takeLatest(actionTypes.RECOMELEC_INFO_REQUEST, getRecomElecInfoSaga),
];