import { delay, put, takeLatest } from 'redux-saga/effects';
import _ from 'lodash';
import { actionTypes, indexAdd } from './index.action';



// 获取床头设置信息
export function* asyncAddSaga({ payload }) {
  console.log('index', 'saga', 'async', payload);
  try {
    const { timeout } = payload;
    yield delay(timeout)
    yield put(indexAdd());
  } catch (err) {
    // yield put(billInfoFailure(err));
  }
}

export default [
  takeLatest(actionTypes.ASYNC_ADD, asyncAddSaga),
];