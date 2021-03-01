const namespace = 'SINGLETION';

export const actionTypes = {
    SET_INDEX_PAGE: `${namespace}_SET_INDEX_PAGE`,
}

export function setIndexPage(payload) {
    console.log('SINGLETION', 'action', 'setIndexPage', payload);
    return { type: actionTypes.SET_INDEX_PAGE, payload }
}