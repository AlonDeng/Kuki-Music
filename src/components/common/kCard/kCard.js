import React, { useState, useEffect } from 'react';
import Taro, { setNavigationBarColor } from "@tarojs/taro";
import { useDispatch, useSelector } from 'react-redux';
import { View, Image, Text, ScrollView, SwiperItem } from '@tarojs/components';
import {  } from 'taro-ui';
import _ from 'lodash';


import './main.scss'

const KCard = (props) => {
    const { title = '標題名', secTitle = '更多>', secTitleFn = () => {}, children, isSecT = true, ...otherProps } = props;

  return (
      <View className='flex flex_column kCard_container' {...otherProps}>
          <View className='flex flex_row kCard_top'>
              <Text className='kCard_top_title'>{title}</Text>
              {isSecT ? (
                <View
                  className='flex kCard_top_more'
                  onClick={() => secTitleFn()}
                >{secTitle}</View>
              ) : null}
          </View>

          {children}
      </View>
  );
};

KCard.propTypes = {

};

KCard.defaultProps = {
};

export default KCard;