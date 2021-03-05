const namespace = 'SINGLETION';

export const actionTypes = {
    SET_INDEX_PAGE: `${namespace}_SET_INDEX_PAGE`,

    TOAST_OPEN: `TOAST_OPEN_${namespace}`,
    TOAST_CLOSE: `TOAST_CLOSE_${namespace}`
}

export function setIndexPage(payload) {
    console.log('SINGLETION', 'action', 'setIndexPage', payload);
    return { type: actionTypes.SET_INDEX_PAGE, payload }
}

// toast info
export function toastOpen(payload) {  return { type: actionTypes.TOAST_OPEN, payload }; }
export function toastClose(payload) {  return { type: actionTypes.TOAST_CLOSE, payload }; }