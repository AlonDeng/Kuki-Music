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

export function checkObj () {
  const args = Array.from(arguments);
  let flag = false;
  args.forEach((i) => {
    if (Object.keys(i).length !== 0) flag = true;
  })
  return flag;
}

export const formatNumber = (n) => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

export const formatDuration  = (ms) => {
  let minutes = formatNumber(parseInt(ms / 60000));
  let seconds = formatNumber(parseInt((ms / 1000) % 60));
  return `${minutes}:${seconds}`;
}

export const parse_lrc = (lrc_content) => {
  let now_lrc = [];
  let lrc_row = lrc_content.split("\n");
  let scroll = true;
  for (let i in lrc_row) {
    if ((lrc_row[i].indexOf(']') === -1) && lrc_row[i]) {
      now_lrc.push({ lrc_text: lrc_row[i] })
    } else if (lrc_row[i] !== '') {
      let tmp = lrc_row[i].split("]")
      for (let j in tmp) {
        scroll = false
        let tmp2 = tmp[j].substr(1, 8)
        let tmp3 = tmp2.split(":")
        let lrc_sec = Number(tmp3[0] * 60 + Number(tmp3[1]))
        if (lrc_sec && (lrc_sec > 0)) {
          let lrc = (tmp[tmp.length - 1]).replace(/(^\s*)|(\s*$)/g, "")
          lrc && now_lrc.push({ lrc_sec: lrc_sec, lrc_text: lrc })
        }
      }
    }
  }
  if (!scroll) {
    now_lrc.sort(function (a, b) {
      return a.lrc_sec - b.lrc_sec;
    });
  }
  return {
    now_lrc: now_lrc,
    scroll: now_lrc.length > 0
  };
}