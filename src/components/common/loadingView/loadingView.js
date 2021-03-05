import React, { useState, useEffect } from 'react';
import Taro, { setNavigationBarColor } from "@tarojs/taro";
import { useDispatch, useSelector } from 'react-redux';
import { View, Button, } from '@tarojs/components'
import { AtActivityIndicator } from 'taro-ui'
import _ from 'lodash';

import './main.scss'

const LoadingView = (props) => {
  const { isLoading = false, content = '加載中...' } = props;
  const dispatch = useDispatch();

  if (isLoading) return (
      <View className='loading_container'>
        <AtActivityIndicator size={50} color='#44FDFF' mode='center' content={content}></AtActivityIndicator>
      </View>
  );
  return null
};

LoadingView.propTypes = {

};

LoadingView.defaultProps = {
};

export default LoadingView;