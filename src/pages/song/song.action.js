const namespace = 'SONG';

export const actionTypes = {
    BANNER_INFO_REQUEST: `BANNER_INFO_${namespace}_REQUEST`,
    BANNER_INFO_SUCCESS: `BANNER_INFO_${namespace}_SUCCESS`,
    BANNER_INFO_FAILURE: `BANNER_INFO_${namespace}_FAILURE`,
};

// get banner info
export function getBannerInfoRequest(payload) {  return { type: actionTypes.BANNER_INFO_REQUEST, payload }; }
export function getBannerInfoSuccess(payload) { console.log('SEARCH', 'action', 'getBannerInfoSuccess', payload); return { type: actionTypes.BANNER_INFO_SUCCESS, payload }; }
export function getBannerInfoFailure(payload) {  return { type: actionTypes.BANNER_INFO_FAILURE, payload }; }
// get ball info