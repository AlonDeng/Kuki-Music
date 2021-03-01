import { actionTypes } from './search.action';

export const exampleInitialState = {
    totalInfo: {
        noData: false,
        albumInfo: [],
        artistInfo: [],
        djRadioInfo: [],
        playListInfo: [],
        songInfo: [],
        userListInfo: [],
        videoInfo: [],
        sim_query: [],
    },
    HotList: [],
    isRequesting: false,
};

function reducer(state = exampleInitialState, { type: actionType, payload }) {
  switch (actionType) {
    case actionTypes.SEARCH_INFO_REQUEST:
      return { ...state, ...{ isRequesting: true } };
    case actionTypes.SEARCH_INFO_SUCCESS:
      return { ...state, ...{ isRequesting: false } };
    case actionTypes.SEARCH_INFO_FAILURE:
        return { ...state, ...{ isRequesting: false,  } };


    case actionTypes.SEARCH_HOT_REQUEST:
      return { ...state, ...{ isRequesting: true } };
    case actionTypes.SEARCH_HOT_SUCCESS:
      return { ...state, ...{ isRequesting: false, HotList: payload.data  } };
    case actionTypes.SEARCH_HOT_FAILURE:
        return { ...state, ...{ isRequesting: false,  } };

    default:
      return state;
  }
}

export default reducer;