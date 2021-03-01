import { actionTypes } from './singletion.action';

export const exampleInitialState = {
  indexPage: 'index',
};

function reducer(state = exampleInitialState, { type: actionType, payload }) {
  switch (actionType) {
    case actionTypes.SET_INDEX_PAGE:
      console.log('reducer', 'singleton', 'SET_INDEX_PAGE', payload);
      return { ...state, deviceId: payload };
    default:
      return state;
  }
}

export default reducer;
