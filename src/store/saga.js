import { all } from 'redux-saga/effects'

import index from '../pages/index/index.saga'

export default function* () {
  yield all([
    ...index,
  ])
}