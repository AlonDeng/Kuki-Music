import React, { useState, useEffect } from 'react';
// import Taro from "@tarojs/taro";
import { useDispatch, useSelector } from 'react-redux';
import { View, Image, Text, ScrollView } from '@tarojs/components';
import { AtIcon } from 'taro-ui';
import _ from 'lodash';

import { getRecomSongInfoRequest } from '../../../pages/index/index.action';
import { waitDevToast, countNum } from '../../../utilities/helpers';

import KCard from '../../common/kCard/kCard';

import './main.scss'


const RecomSong = (props) => {
  const index = useSelector((state) => state.index);
  const { recomSongInfo = [] } = index;
  const dispatch = useDispatch();
  const d = [1,2,3,4,5,5,6,7]

  const moreFn = () => {
    waitDevToast(dispatch)
  }

  useEffect(() => {
    dispatch(getRecomSongInfoRequest())
  }, [dispatch])

  return (
    <KCard title='推薦歌單' secTitleFn={moreFn}>
      <ScrollView scrollX className='flex flex_row recomSong_slide'>
      {recomSongInfo.slice(0,10).map((item) => (
        <View
          key={_.get(item, 'id', 0)}
          className='flex flex_column recomSong_slide_imgCon'
          onClick={() => moreFn()}
        >
          <View className='recomSong_slide_imgConIn'>
            <Image
              className='recomSong_slide_img'
              src={_.get(item, 'picUrl', '')}
            />
          </View>
          <View className='flex recomSong_slide_nums'>
            <AtIcon value='play' size='10' color='#ffffff'></AtIcon>
            {countNum(_.get(item, 'playCount', 0))}
          </View>
          <View className='recomSong_slide_content'>{_.get(item, 'name', '')}</View>
        </View>
      ))}
    </ScrollView>
    </KCard>
  );
};

RecomSong.propTypes = {

};

RecomSong.defaultProps = {
};

export default RecomSong;