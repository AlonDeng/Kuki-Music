import { actionTypes } from './index.action';

export const exampleInitialState = {
  num: 0,
};

function reducer(state = exampleInitialState, { type: actionType, data }) {
  switch (actionType) {
    case actionTypes.ADD:
      return { ...state, num: state.num + 1 };
    case actionTypes.MINUS:
      return { ...state, num: state.num - 1 };

    default:
      return state;
  }
}

export default reducer;