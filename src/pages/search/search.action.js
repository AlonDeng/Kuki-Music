const namespace = 'SEARCH';

export const actionTypes = {
    SEARCH_INFO_REQUEST: `SEARCH_INFO_${namespace}_REQUEST`,
    SEARCH_INFO_SUCCESS: `SEARCH_INFO_${namespace}_SUCCESS`,
    SEARCH_INFO_FAILURE: `SEARCH_INFO_${namespace}_FAILURE`,

    SEARCH_HOT_REQUEST: `SEARCH_HOT_${namespace}_REQUEST`,
    SEARCH_HOT_SUCCESS: `SEARCH_HOT_${namespace}_SUCCESS`,
    SEARCH_HOT_FAILURE: `SEARCH_HOT_${namespace}_FAILURE`,
};

// get search info
export function getSearchInfoRequest(payload) {  return { type: actionTypes.SEARCH_INFO_REQUEST, payload }; }
export function getSearchInfoSuccess(payload) { console.log('SEARCH', 'action', 'getSearchInfoSuccess', payload); return { type: actionTypes.SEARCH_INFO_SUCCESS, payload }; }
export function getSearchInfoFailure(payload) {  return { type: actionTypes.SEARCH_INFO_FAILURE, payload }; }

// get search hot
export function getSearchHotRequest(payload) {  return { type: actionTypes.SEARCH_HOT_REQUEST, payload }; }
export function getSearchHotSuccess(payload) { console.log('SEARCH', 'action', 'getSearchHotSuccess', payload); return { type: actionTypes.SEARCH_HOT_SUCCESS, payload }; }
export function getSearchHotFailure(payload) {  return { type: actionTypes.SEARCH_HOT_FAILURE, payload }; }
