import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Button, Text } from '@tarojs/components'
import _ from 'lodash';

import './searchTab.scss'
import Main from '../../components/searchTab/main';

const SearchTab = (props) => {
  // const index = useSelector((state) => state.index);
  // const { num = 0 } = index;
  // const dispatch = useDispatch();
  return (
    <View className='flex'>
      <Main />
    </View>
  );
};

SearchTab.propTypes = {

};

SearchTab.defaultProps = {
};

export default SearchTab;
