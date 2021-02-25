import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Button, Text } from '@tarojs/components'
import _ from 'lodash';

import { asyncAdd, indexAdd, indexMinus } from '../../pages/index/index.action';
import './main.scss'

const Main = (props) => {
  // const index = useSelector((state) => state.index);
  // const { num = 0 } = index;
  // const dispatch = useDispatch();

  return (
    <View className='cloudVillage_main'>
      <Text>云村🎵</Text>
    </View>
  );
};

Main.propTypes = {

};

Main.defaultProps = {
};

export default Main;