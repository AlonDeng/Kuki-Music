import { combineReducers } from 'redux';

import index from '../pages/index/index.reducer';
import search from '../pages/search/search.reducer';
import singletion from '../pages/singletion/singletion.reducer'

export const exampleInitialState = {};

const rootReducer = combineReducers({
    index,
    search,
    singletion,
});

export default rootReducer;