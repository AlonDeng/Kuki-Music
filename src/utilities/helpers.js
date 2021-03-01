import Taro from "@tarojs/taro";

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