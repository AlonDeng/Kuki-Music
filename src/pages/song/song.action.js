const namespace = 'SONG';

export const actionTypes = {
    CHECK_MUSIC_REQUEST: `CHECK_MUSIC_${namespace}_REQUEST`,
    CHECK_MUSIC_SUCCESS: `CHECK_MUSIC_${namespace}_SUCCESS`,
    CHECK_MUSIC_FAILURE: `CHECK_MUSIC_${namespace}_FAILURE`,
    
    SONG_DETAIL_REQUEST: `SONG_DETAIL_${namespace}_REQUEST`,
    SONG_DETAIL_SUCCESS: `SONG_DETAIL_${namespace}_SUCCESS`,
    SONG_DETAIL_FAILURE: `SONG_DETAIL_${namespace}_FAILURE`,

    PLAYING_OPEN: `PLAYING_OPEN_${namespace}`,
    PLAYING_CLOSE: `PLAYING_CLOSE_${namespace}`,
};

// checkmusic
export function checkMusicInfoRequest(payload) {  return { type: actionTypes.CHECK_MUSIC_REQUEST, payload }; }
export function checkMusicInfoSuccess(payload) { console.log('SEARCH', 'action', 'checkMusicInfoSuccess', payload); return { type: actionTypes.CHECK_MUSIC_SUCCESS, payload }; }
export function checkMusicInfoFailure(payload) {  return { type: actionTypes.CHECK_MUSIC_FAILURE, payload }; }
// songDetail
export function songDetailInfoRequest(payload) {  return { type: actionTypes.SONG_DETAIL_REQUEST, payload }; }
export function songDetailInfoSuccess(payload) { console.log('SEARCH', 'action', 'songDetailInfoSuccess', payload); return { type: actionTypes.SONG_DETAIL_SUCCESS, payload }; }
export function songDetailInfoFailure(payload) {  return { type: actionTypes.SONG_DETAIL_FAILURE, payload }; }
//set playing
export function playingOpen(payload) {  return { type: actionTypes.PLAYING_OPEN, payload }; }
export function playingClose(payload) {  return { type: actionTypes.PLAYING_CLOSE, payload }; }
