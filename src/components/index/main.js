import React, { useState } from 'react';
import Taro, { setNavigationBarColor } from "@tarojs/taro";
import { useDispatch, useSelector } from 'react-redux';
import { View, Button, Text, } from '@tarojs/components';
import { AtSearchBar } from 'taro-ui';
import _ from 'lodash';

import './main.scss'

const Main = (props) => {
  // const index = useSelector((state) => state.index);
  // const { num = 0 } = index;
  // const dispatch = useDispatch();

  const goSearchMainPage = () => {
    Taro.reLaunch({
      url: "/pages/searchTab/index"
    });
  }
  return (
    <View className='index_main'>
      <AtSearchBar 
        fixed
        onFocus={() => goSearchMainPage()}
      />
      <Text>发现音乐🎵</Text>
    </View>
  );
};

Main.propTypes = {

};

Main.defaultProps = {
};

export default Main;
