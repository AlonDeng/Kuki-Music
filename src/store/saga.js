import { all } from 'redux-saga/effects'

import index from '../pages/index/index.saga'
import search from '../pages/search/search.saga'
import song from '../pages/song/song.saga';

export default function* () {
  yield all([
    ...index,
    ...search,
    ...song,
  ])
}