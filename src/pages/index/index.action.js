const namespace = 'INDEX';

export const actionTypes = {
    BANNER_INFO_REQUEST: `BANNER_INFO_${namespace}_REQUEST`,
    BANNER_INFO_SUCCESS: `BANNER_INFO_${namespace}_SUCCESS`,
    BANNER_INFO_FAILURE: `BANNER_INFO_${namespace}_FAILURE`,

    BALL_INFO_REQUEST: `BALL_INFO_${namespace}_REQUEST`,
    BALL_INFO_SUCCESS: `BALL_INFO_${namespace}_SUCCESS`,
    BALL_INFO_FAILURE: `BALL_INFO_${namespace}_FAILURE`,

    RECOMSONG_INFO_REQUEST: `RECOMSONG_INFO_${namespace}_REQUEST`,
    RECOMSONG_INFO_SUCCESS: `RECOMSONG_INFO_${namespace}_SUCCESS`,
    RECOMSONG_INFO_FAILURE: `RECOMSONG_INFO_${namespace}_FAILURE`,

    RECOMMV_INFO_REQUEST: `RECOMMV_INFO_${namespace}_REQUEST`,
    RECOMMV_INFO_SUCCESS: `RECOMMV_INFO_${namespace}_SUCCESS`,
    RECOMMV_INFO_FAILURE: `RECOMMV_INFO_${namespace}_FAILURE`,

    RECOMELEC_INFO_REQUEST: `RECOMELEC_INFO_${namespace}_REQUEST`,
    RECOMELEC_INFO_SUCCESS: `RECOMELEC_INFO_${namespace}_SUCCESS`,
    RECOMELEC_INFO_FAILURE: `RECOMELEC_INFO_${namespace}_FAILURE`,

};

// get banner info
export function getBannerInfoRequest(payload) {  return { type: actionTypes.BANNER_INFO_REQUEST, payload }; }
export function getBannerInfoSuccess(payload) { console.log('SEARCH', 'action', 'getBannerInfoSuccess', payload); return { type: actionTypes.BANNER_INFO_SUCCESS, payload }; }
export function getBannerInfoFailure(payload) {  return { type: actionTypes.BANNER_INFO_FAILURE, payload }; }
// get ball info
export function getBallInfoRequest(payload) {  return { type: actionTypes.BALL_INFO_REQUEST, payload }; }
export function getBallInfoSuccess(payload) { console.log('SEARCH', 'action', 'getBallInfoSuccess', payload); return { type: actionTypes.BALL_INFO_SUCCESS, payload }; }
export function getBallInfoFailure(payload) {  return { type: actionTypes.BALL_INFO_FAILURE, payload }; }
//get recomSong info
export function getRecomSongInfoRequest(payload) {  return { type: actionTypes.RECOMSONG_INFO_REQUEST, payload }; }
export function getRecomSongInfoSuccess(payload) { console.log('SEARCH', 'action', 'getRecomSongInfoSuccess', payload); return { type: actionTypes.RECOMSONG_INFO_SUCCESS, payload }; }
export function getRecomSongInfoFailure(payload) {  return { type: actionTypes.RECOMSONG_INFO_FAILURE, payload }; }

//get recomMV info
export function getRecomMVInfoRequest(payload) {  return { type: actionTypes.RECOMMV_INFO_REQUEST, payload }; }
export function getRecomMVInfoSuccess(payload) { console.log('SEARCH', 'action', 'getRecomMVInfoSuccess', payload); return { type: actionTypes.RECOMMV_INFO_SUCCESS, payload }; }
export function getRecomMVInfoFailure(payload) {  return { type: actionTypes.RECOMMV_INFO_FAILURE, payload }; }

//get recomElec info
export function getRecomElecInfoRequest(payload) {  return { type: actionTypes.RECOMELEC_INFO_REQUEST, payload }; }
export function getRecomElecInfoSuccess(payload) { console.log('SEARCH', 'action', 'getRecomElecInfoSuccess', payload); return { type: actionTypes.RECOMELEC_INFO_SUCCESS, payload }; }
export function getRecomElecInfoFailure(payload) {  return { type: actionTypes.RECOMELEC_INFO_FAILURE, payload }; }

