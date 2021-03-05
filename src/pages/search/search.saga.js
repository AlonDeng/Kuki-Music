import { delay, put, takeLatest, call, select } from 'redux-saga/effects';
import _ from 'lodash';
import { actionTypes, getSearchInfoSuccess, getSearchInfoFailure, getSearchHotSuccess, getSearchHotFailure } from './search.action';

import axiosInstance from '../../utilities/fetch';



export function* getSearchInfoSaga({ payload }) {
  // console.log('[DEBUGDEBUG]', 'rootScreen', 'saga', 'socketMainConnect', payload);
  try {
    
    //   const { data, error, errorCode, errorMsg } = yield call(fetchInstance.request, { method: 'post', url: '/device/registerOne', data: payload });
      const res = yield call(axiosInstance.request, { 
          method: 'get',
          url: '/search', 
          data: payload
        });
    //   if (error) throw new Error(`errorCode: ${errorCode}, ${errorMsg}`);

    console.log('[DEBUGDEBUG]', 'rootScreen', 'saga', 'socketMainConnect', 'end', res);
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
  takeLatest(actionTypes.SEARCH_INFO_REQUEST, getSearchInfoSaga),
  takeLatest(actionTypes.SEARCH_HOT_REQUEST, getSearchHotSaga),
]