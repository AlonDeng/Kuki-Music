import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Button, Text } from '@tarojs/components'
import _ from 'lodash';

import { asyncAdd, indexAdd, indexMinus } from '../../pages/index/index.action';


const Count = (props) => {
  const index = useSelector((state) => state.index);
  const { num = 0 } = index;
  const dispatch = useDispatch();

  return (
    <View>
        <Button className='add_btn' onClick={() => dispatch(indexAdd())}>+</Button>
        <Button className='dec_btn' onClick={() => dispatch(indexMinus())}>-</Button>
        <Button className='dec_btn' onClick={() => dispatch(asyncAdd({ timeout: 2000 }))}>async</Button>
        <View><Text>{num}</Text></View>
        <View><Text>Hello, World</Text></View>
    </View>
  );
};

Count.propTypes = {

};

Count.defaultProps = {
};

export default Count;
