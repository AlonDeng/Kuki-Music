import React, { useState } from 'react';
import Taro from "@tarojs/taro";
import { useDispatch, useSelector } from 'react-redux';
import { View, Button, } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'
import _ from 'lodash';

import { asyncAdd, indexAdd, indexMinus } from '../../pages/index/index.action';


const BottomTabBar = (props) => {
  const { current } = props;
  const dispatch = useDispatch();

  const switchTab = (cur) => {
    console.log(cur);
  };

  return (
    <AtTabBar
      fixed
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