import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Button, Text, ScrollView } from '@tarojs/components';
import Taro, { setNavigationBarColor } from "@tarojs/taro";
import { AtSearchBar } from 'taro-ui';
import _ from 'lodash';

import { keywordInHistory } from '../../utilities/helpers';
import { getSearchHotRequest, getSearchInfoRequest } from '../../pages/search/search.action';

import './main.scss'
import SearchHistory from './components/searchHistory/main';
import SearchHot from './components/searchHot/main';

const Main = (props) => {   
  // const index = useSelector((state) => state.index);
  // const { num = 0 } = index;
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  useEffect(() => { 
    setNavigationBarColor({ backgroundColor: '#808082', frontColor: '#ffffff' });
    dispatch(getSearchHotRequest());
  }, [])

  const searchChangeValue = (data) => {
      setSearchValue(data);
  };
  const searchConfirm = () => {
    if (searchValue === '') return;
    keywordInHistory.set(searchValue);
  };
  return (
    <View className='searchTab_main flex flex_column'>
      <AtSearchBar
        value={searchValue}
        onChange={(data) => searchChangeValue(data)}
        onConfirm={() => searchConfirm()}
        onActionClick={() => searchConfirm()}
        focus
      />
      <ScrollView className='flex flex_column searchTab_scroll' scrollY>
        <SearchHistory />
        <SearchHot />
      </ScrollView>
    </View>
  );
};

Main.propTypes = {

};

Main.defaultProps = {
};

export default Main;