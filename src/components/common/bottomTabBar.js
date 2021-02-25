import React, { useState, useEffect } from 'react';
import Taro, { setNavigationBarColor } from "@tarojs/taro";
import { useDispatch, useSelector } from 'react-redux';
import { View, Button, } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'
import _ from 'lodash';

import { asyncAdd, indexAdd, indexMinus } from '../../pages/index/index.action';


const BottomTabBar = (props) => {
  const { current } = props;
  const dispatch = useDispatch();
  useEffect(() => { setNavigationBarColor({ backgroundColor: '#808082', frontColor: '#ffffff' }) }, [])

  const switchTab = (cur) => {
    switch (cur) {
      case 0:
        if (current === 0) return;
        Taro.reLaunch({
          url: "/pages/index/index"
        });
      break;
      case 1:
        if (current === 1) return;
        Taro.reLaunch({
          url: "/pages/mine/index"
        });
      break;
      case 2:
        if (current === 2) return;
        Taro.reLaunch({
          url: "/pages/cloudVillage/index"
        });
      break;
      default:
        break;
    }
  };

  return (
    <AtTabBar
      fixed
      backgroundColor='#808082'
      selectedColor='#44FDFF'
      tabList={[
        { title: '发现', iconType: 'lightning-bolt' },
        { title: '我的', iconType: 'sound' },
        { title: '云村', iconType: 'tags' }
      ]}
      onClick={(cur) => switchTab(cur)}
      current={current}
    />
  );
};

BottomTabBar.propTypes = {

};

BottomTabBar.defaultProps = {
};

export default BottomTabBar;