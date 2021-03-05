import { actionTypes } from './song.action';

export const exampleInitialState = {
  bannerInfo: [],
  isRequesting: false,
};

function reducer(state = exampleInitialState, { type: actionType, payload }) {
  switch (actionType) {
    case actionTypes.BANNER_INFO_REQUEST:
      return { ...state };
    case actionTypes.BANNER_INFO_SUCCESS:
      return { ...state, ...{ bannerInfo: payload.banners } };
    case actionTypes.BANNER_INFO_FAILURE:
      return { ...state };

    default:
      return state;
  }
}

export default reducer;