import { delay, put, takeLatest, call, select } from 'redux-saga/effects';
import _ from 'lodash';
import { actionTypes,
  getBannerInfoSuccess,
  getBannerInfoFailure,
  } from './song.action';

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

export default [
  takeLatest(actionTypes.BANNER_INFO_REQUEST, getBannerInfoSaga),
];