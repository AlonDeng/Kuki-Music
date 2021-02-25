const namespace = 'INDEX';

export const actionTypes = {
  ADD: `${namespace}_ADD`,
  MINUS: `${namespace}_MINUS`,
  ASYNC_ADD: `${namespace}_ASYNC_ADD`,
};

// 连接socket_main
export function indexAdd(payload) {  return { type: actionTypes.ADD, payload }; }
export function indexMinus(payload) { return { type: actionTypes.MINUS, payload }; }
export function asyncAdd(payload) { console.log('INDEX', 'action', 'async', payload); return { type: actionTypes.ASYNC_ADD, payload }; }
