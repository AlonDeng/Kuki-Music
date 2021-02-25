import fetch from 'cross-fetch';
import qs from 'qs';

import { promiseTimeout } from './helpers';
import { httpConfig } from './config';

const defaultHeaders = {
  'Content-Type': 'application/json',
  'Cache-Control': 'no-store',
};

export async function request({ baseURL, url, method, body, headers = defaultHeaders, query, timeout }) {
  if (method === 'post') query = { ...query, ...{ timestamp: new Date().getTime() }}
  const queryString = qs.stringify(query);
  const finalURL = `${baseURL}${url}?${queryString}`;
  // console.log('startTime：：：：：', new Date(), 'baseURL', baseURL, 'url', url, 'query', query, 'body', body, 'method', method);
  console.log('startTime：：：：：', 'url', url);
  try {
    // console.log('[DEBUG]-request', 'body');
    const fetchPromise = fetch(finalURL, { method, headers, body: body ? JSON.stringify(body) : null });
    const res = await promiseTimeout(fetchPromise, timeout);
    // const { payload, error } = await res.json();
    const { payload, error, errorCode, errorMsg } = await res.json();
    // if (res.status > 400) {
    //   throw new Error({ payload, error, errorCode, errorMsg });
    // }
    // console.log('[DEBUG]-request', 'request', 'GOOD', payload);
    console.log('[DEBUG]-request', 'request', 'GOOD');
    // console.log('startTime：：：：：', new Date(), 'url', url, 'end');
    return { data: payload, error, errorCode, errorMsg };
  } catch (e) {
    // console.log('[DEBUG]-request', 'finalURL', finalURL, 'FAIL', e);
    console.log('[DEBUG]-request', 'FAIL', e);
    throw new Error(e);
  }
}

export const fetchInstance = {
  request: (localConfig) => {
    const { method, url, data, params } = localConfig;
    return request({ baseURL: `http://${httpConfig.SERVER_IP}:${httpConfig.SERVER_PORT}`, url, method, body: data, query: params, timeout: 10000 });
  },
};