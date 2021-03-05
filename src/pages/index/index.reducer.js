import { actionTypes } from './index.action';

export const exampleInitialState = {
  bannerInfo: [],
  ballInfo: [],
  recomSongInfo: [],
  recomMVInfo: [],
  recomElecInfo: [],
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

    case actionTypes.BALL_INFO_REQUEST:
      return { ...state, ...{ isRequesting: true } };
    case actionTypes.BALL_INFO_SUCCESS:
      return { ...state, ...{ isRequesting: false, ballInfo: payload.ballInfo } };
    case actionTypes.BALL_INFO_FAILURE:
      return { ...state, ...{ isRequesting: false } };

    case actionTypes.RECOMSONG_INFO_REQUEST:
      return { ...state };
    case actionTypes.RECOMSONG_INFO_SUCCESS:
      return { ...state, ...{ recomSongInfo: payload.recomSongInfo } };
    case actionTypes.RECOMSONG_INFO_FAILURE:
      return { ...state, };

    case actionTypes.RECOMMV_INFO_REQUEST:
      return { ...state };
    case actionTypes.RECOMMV_INFO_SUCCESS:
      return { ...state, ...{ recomMVInfo: payload.recomMVInfo } };
    case actionTypes.RECOMMV_INFO_FAILURE:
      return { ...state };
    
    case actionTypes.RECOMELEC_INFO_REQUEST:
      return { ...state };
    case actionTypes.RECOMELEC_INFO_SUCCESS:
      return { ...state, ...{ recomElecInfo: payload.recomElecInfo } };
    case actionTypes.RECOMELEC_INFO_FAILURE:
      return { ...state };

    default:
      return state;
  }
}

export default reducer;