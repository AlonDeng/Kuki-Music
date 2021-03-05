import Taro from "@tarojs/taro";
import { toastOpen } from '../pages/singletion/singletion.action'

export const promiseTimeout = (promise, ms) => {
  const timeout = new Promise((resolve, reject) => {
    const id = setTimeout(() => { clearTimeout(id); reject(new Error(`Timed out in ${ms}ms.`)); }, ms);
  });
  return Promise.race([promise, timeout]);
};

export const keywordInHistory = {
  get: () => {
    return Taro.getStorageSync('keywordsList')
  },
  set: (keyword) => {
    const keywordsList = Taro.getStorageSync('keywordsList') || [];
    console.log('keywordsList',keywordsList);
    const index = keywordsList.findIndex((item) => item === keyword);
    if (index !== -1) {
      keywordsList.splice(index, 1);
    }
    keywordsList.unshift(keyword);
    Taro.setStorage({ key: 'keywordsList', data: keywordsList })
  },
  remove: () => {
    return Taro.removeStorageSync('keywordsList')
  },
}

export const waitDevToast = (dispatch) => {
  dispatch(toastOpen({ toastText: '該功能正在開發中...' }))
}

export const countNum = (num) => {
  if(num >= 10000 && num < 100000000) return String(Math.floor(num / 10000)) + '萬';
  else if(num >= 100000000) return String(Math.floor(num / 100000000)) + '億';
  else return String(num);
}