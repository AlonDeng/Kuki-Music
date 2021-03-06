const namespace = 'SEARCH';

export const actionTypes = {
    SEARCH_HOT_REQUEST: `SEARCH_HOT_${namespace}_REQUEST`,
    SEARCH_HOT_SUCCESS: `SEARCH_HOT_${namespace}_SUCCESS`,
    SEARCH_HOT_FAILURE: `SEARCH_HOT_${namespace}_FAILURE`,
    
    TOTAL_INFO_REQUEST: `TOTAL_INFO_${namespace}_REQUEST`,
    TOTAL_INFO_SUCCESS: `TOTAL_INFO_${namespace}_SUCCESS`,
    TOTAL_INFO_FAILURE: `TOTAL_INFO_${namespace}_FAILURE`,
};
// get search hot
export function getSearchHotRequest(payload) {  return { type: actionTypes.SEARCH_HOT_REQUEST, payload }; }
export function getSearchHotSuccess(payload) { console.log('SEARCH', 'action', 'getSearchHotSuccess', payload); return { type: actionTypes.SEARCH_HOT_SUCCESS, payload }; }
export function getSearchHotFailure(payload) {  return { type: actionTypes.SEARCH_HOT_FAILURE, payload }; }

// getTotalInfo
export function getTotalInfoRequest(payload) {  return { type: actionTypes.TOTAL_INFO_REQUEST, payload }; }
export function getTotalInfoSuccess(payload) { console.log('SEARCH', 'action', 'getTotalInfoSuccess', payload); return { type: actionTypes.TOTAL_INFO_SUCCESS, payload }; }
export function getTotalInfoFailure(payload) {  return { type: actionTypes.TOTAL_INFO_FAILURE, payload }; }
