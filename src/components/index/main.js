import React, { useState, useEffect } from 'react';
import Taro, { setNavigationBarColor } from "@tarojs/taro";
import { useDispatch, useSelector } from 'react-redux';
import { View, Image, Text, ScrollView, Swiper, SwiperItem } from '@tarojs/components';
import { AtSearchBar } from 'taro-ui';
import classnames from 'classnames'
import _ from 'lodash';

import { getBannerInfoRequest, getBallInfoRequest } from '../../pages/index/index.action';
import { toastOpen } from '../../pages/singletion/singletion.action'
import { waitDevToast } from '../../utilities/helpers';

import RecomSong from './recomSong/recomSong';
import RecomMV from './recomMV/recomMV';
import RecomElec from './recomElec/recomElec';

import './main.scss'

const Main = (props) => {
  const index = useSelector((state) => state.index);
  const { bannerInfo = [], ballInfo = [] } = index;
  const dispatch = useDispatch();

  useEffect(() => { 
    dispatch(getBannerInfoRequest({ type: 2 }));
    dispatch(getBallInfoRequest());
   }, [dispatch])


  const goSearchMainPage = () => {
    Taro.reLaunch({
      url: "/pages/searchTab/index"
    });
  }

  const switchBallFn = (item) => {
    waitDevToast(dispatch)
  };

  return (
    <ScrollView scrollY className={classnames({
      index_main: true,
      hasBox: false,
    })}
    >
      <AtSearchBar 
        onFocus={() => goSearchMainPage()}
      />
      <View className='flex flex_column index_banner_container'>
        <Swiper
          className='index_banner_swiper'
          indicatorColor='#808082'
          indicatorActiveColor='#44FDFF'
          circular
          indicatorDots
          autoplay
        >
            {bannerInfo.map(item => (
              <SwiperItem
                key={_.get(item, 'targetId', 0)}
                className='index_banner_item'
                onClick={() => switchBallFn()}
              >
                <Image src={_.get(item, 'pic', '')} className='index_banner_item_img' />
              </SwiperItem>
            ))}
        </Swiper>
        <ScrollView scrollX className='flex flex_row index_ball_container'>
          {ballInfo.map((item) => (
            <View key={_.get(item, 'id', 0)} className='flex flex_column index_ball_item'>
              <View
                className='flex index_ball_item_imgCon'
                onClick={() => switchBallFn(item)}
              >
                <Image 
                  src={_.get(item, 'iconUrl', '')}
                  className='index_ball_item_img'
                />
              </View>
              <Text className='flex index_ball_item_text'>{_.get(item, 'name', '')}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      
      <RecomSong />
      <RecomMV />
      <RecomElec />

    </ScrollView>
  );
};

Main.propTypes = {

};

Main.defaultProps = {
};

export default Main;
