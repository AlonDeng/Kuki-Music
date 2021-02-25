import { combineReducers } from 'redux';

import index from '../pages/index/index.reducer';

export const exampleInitialState = {};

const rootReducer = combineReducers({
    index,
});

export default rootReducer;