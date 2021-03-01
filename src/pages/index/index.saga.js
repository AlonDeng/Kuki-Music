import { delay, put, takeLatest, call, select } from 'redux-saga/effects';
import _ from 'lodash';
import { actionTypes, indexAdd } from './index.action';

import { axiosInstance } from '../../utilities/fetch';



export function* socketMainConnect({ payload }) {
  // console.log('[DEBUGDEBUG]', 'rootScreen', 'saga', 'socketMainConnect', payload);
  try {
    // yield put(loadingMaskTurnOn({ payload: { name: 'axiosEngineInstance/device/registerOne', message: '', action: () => { } } }));

    // let data; 
    // if (IS_OFFLINE_VERSION) {
    //   data = engine.registerOneDemoData;
    // } else {
    //   const { data: _data, error, errorCode, errorMsg } = yield call(axiosInstance.request, { method: 'post', url: '/device/registerOne', data: payload });
    //   if (error) throw new Error(`errorCode: ${errorCode}, ${errorMsg}`);
    //   data = _data;
    // }

    // // console.log('[DEBUGDEBUG]', 'rootScreen', 'saga', 'socketMainConnect', 'end', data);
    // yield put(loadingMaskTurnOff({ payload: { name: 'axiosEngineInstance/device/registerOne', message: '', action: () => { } } }));
    // yield put(socketMainConnectSuccess(data));
  } catch (err) {
    // yield put(loadingMaskTurnOff({ payload: { name: 'axiosEngineInstance/device/registerOne', message: '', action: () => { } } }));
    // // console.log('===', 'rootScreen_socketMainConnect', 'saga', 'err', err);
    // yield put(socketMainConnectFailure(err));
  }
}

export default [
  takeLatest(actionTypes.ASYNC_ADD, socketMainConnect),
];