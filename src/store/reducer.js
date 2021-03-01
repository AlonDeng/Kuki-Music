import { combineReducers } from 'redux';

import index from '../pages/index/index.reducer';
import search from '../pages/search/search.reducer';

export const exampleInitialState = {};

const rootReducer = combineReducers({
    index,
    search,
});

export default rootReducer;