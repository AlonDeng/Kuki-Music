import React, { useState, useEffect } from 'react';
// import Taro from "@tarojs/taro";
import { useDispatch, useSelector } from 'react-redux';
import { View, Image, Text, ScrollView } from '@tarojs/components';
import { AtIcon } from 'taro-ui';
import _ from 'lodash';

import { getRecomElecInfoRequest } from '../../../pages/index/index.action';
import { waitDevToast, countNum } from '../../../utilities/helpers';

import KCard from '../../common/kCard/kCard';

import './main.scss'


const RecomElec = (props) => {
  const index = useSelector((state) => state.index);
  const { recomElecInfo = [] } = index;
  const dispatch = useDispatch();

  const moreFn = () => {
    waitDevToast(dispatch)
  }

  useEffect(() => {
    dispatch(getRecomElecInfoRequest())
  }, [dispatch])

  return (
    <KCard title='推薦電台' secTitleFn={moreFn}>
      <ScrollView scrollX className='flex flex_row recomElec_slide'>
      {recomElecInfo.slice(0,10).map((item) => (
        <View
          key={_.get(item, 'id', 0)}
          className='flex flex_column recomElec_slide_imgCon'
          onClick={moreFn}
        >
          <View className='recomElec_slide_imgConIn'>
            <Image
              className='recomElec_slide_img'
              src={_.get(item, 'picUrl', '')}
            />
          </View>
          <View className='flex recomElec_slide_nums'>
            <AtIcon value='play' size='10' color='#ffffff'></AtIcon>
            {countNum(_.get(item, 'playCount', 0))}
          </View>
          <View className='recomElec_slide_content'>{_.get(item, 'name', '')}</View>
        </View>
      ))}
    </ScrollView>
    </KCard>
  );
};

RecomElec.propTypes = {

};

RecomElec.defaultProps = {
};

export default RecomElec;