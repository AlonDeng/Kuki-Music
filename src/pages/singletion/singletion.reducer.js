import { actionTypes } from './singletion.action';

export const exampleInitialState = {
  indexPage: 'index',
  toastInfo: {
    toastText: '',
    toastIcon: '',
    isToast: false,
  },
};

function reducer(state = exampleInitialState, { type: actionType, payload }) {
  switch (actionType) {
    case actionTypes.SET_INDEX_PAGE:
      console.log('reducer', 'singleton', 'SET_INDEX_PAGE', payload);
      return { ...state, deviceId: payload };

    case actionTypes.TOAST_OPEN:
      return { ...state, ...{ ...state.toastInfo, toastInfo: { isToast: true, ...payload } }}
    case actionTypes.TOAST_CLOSE:
      return { ...state, ...{ ...state.toastInfo, toastInfo: { isToast: false } }}
    default:
      return state;
  }
}

export default reducer;
