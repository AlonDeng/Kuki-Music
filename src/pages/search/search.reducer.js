import _ from 'lodash';
import { actionTypes } from './search.action';

export const exampleInitialState = {
    totalInfo: {
        isData: false,
        song: {
          songs: [],
          songsT: [],
        },
        playList: {
          playLists: [],
        },
        video: {
          videos: []
        },
        artist: {
          artists: [],
        },
        sim_query: {},
        user: {
          users: {},
        },
    },
    hotList: [],
    isRequesting: false,
};

function reducer(state = exampleInitialState, { type: actionType, payload }) {
  switch (actionType) {
    case actionTypes.SEARCH_HOT_REQUEST:
      return { ...state, ...{ isRequesting: true } };
    case actionTypes.SEARCH_HOT_SUCCESS:
      return { ...state, ...{ isRequesting: false, hotList: payload.data  } };
    case actionTypes.SEARCH_HOT_FAILURE:
        return { ...state, ...{ isRequesting: false,  } };

    case actionTypes.TOTAL_INFO_REQUEST:
      return { ...state, ...{ isRequesting: true } };
    case actionTypes.TOTAL_INFO_SUCCESS:
      switch (payload.type) {
        case 1:
          if (!payload.isBottomSearch) {
            return { ...state, ...{ isRequesting: false, totalInfo: { ...state.totalInfo, song: { ...state.totalInfo.song, ...payload } } } };
          } else {
            let songsTDCopy = _.cloneDeep(state.totalInfo.song.songsT)
            songsTDCopy = [...songsTDCopy, ...payload.songsT];
            return { ...state, ...{ isRequesting: false, totalInfo: { ...state.totalInfo, song: { ...state.totalInfo.song, ...payload , songsT: songsTDCopy } } } };  
          }
        case 1000:
          const playListsDCopy = _.cloneDeep(state.totalInfo.playList.playLists)
          playListsDCopy.push(payload.playLists);
          return { ...state, ...{ isRequesting: false, totalInfo: { ...state.totalInfo, playList: { ...state.totalInfo.playList, ...payload, playLists: playListsDCopy  } } } };
        case 1014:
          const videosDCopy = _.cloneDeep(state.totalInfo.video.videos)
          videosDCopy.push(payload.videos);
          return { ...state, ...{ isRequesting: false, totalInfo: { ...state.totalInfo, video: { ...state.totalInfo.video, ...payload, videos: videosDCopy  } } } };
        case 100:
          const artistsDCopy = _.cloneDeep(state.totalInfo.artist.artists)
          artistsDCopy.push(payload.artists);
          return { ...state, ...{ isRequesting: false, totalInfo: { ...state.totalInfo, artist: { ...state.totalInfo.artist, ...payload, artists: artistsDCopy  } } } };
        case 1002:
          const usersDCopy = _.cloneDeep(state.totalInfo.user.users)
          usersDCopy.push(payload.users);
          return { ...state, ...{ isRequesting: false, totalInfo: { ...state.totalInfo, user: { ...state.totalInfo.user, ...payload, users: usersDCopy } } } };
        case 1018:
          return { ...state, ...{ isRequesting: false, totalInfo: {
          ...state.totalInfo,
          isData: payload.isData,
          song: { ...state.totalInfo.song, ...payload.song },
          playList: { ...state.totalInfo.playList, ...payload.playList },
          video: { ...state.totalInfo.video, ...payload.video },
          artist: { ...state.totalInfo.artist, ...payload.artist },
          sim_query: { ...state.totalInfo.sim_query, ...payload.sim_query },
          user: { ...state.totalInfo.user, ...payload.user },
         } } };
        default:
          return { ...state, ...{ isRequesting: false,  } };
      }
      
    case actionTypes.TOTAL_INFO_FAILURE:
        return { ...state, ...{ isRequesting: false,  } };

    default:
      return state;
  }
}

export default reducer;