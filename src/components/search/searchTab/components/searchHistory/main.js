import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Button, Text, ScrollView } from '@tarojs/components';
import Taro, { useDidShow } from "@tarojs/taro";
import { AtIcon } from 'taro-ui'

import _ from 'lodash';

import './main.scss'

import { keywordInHistory } from '../../../../../utilities/helpers';

const SearchHistory = (props) => {
  // const index = useSelector((state) => state.index);
  // const { num = 0 } = index;
  // const dispatch = useDispatch();
  const [historyList, setHistoryList] = useState([]);
  useDidShow(() => {
    setHistoryList(keywordInHistory.get());
  })

  const goSearch = (data) => {
    Taro.navigateTo({
      url: `/pages/search/index?keywords=${data}`
    })
  };
  return (
    <View className='search_history flex flex_column'>
      {historyList.length > 0 ? (
        <>
        <View className='flex search_history_top'>
        <View className='search_history_title'>
            <Text className='search_history_title_text'>搜索歷史</Text>
        </View>
        <View 
          className='search_history_icon'
          onClick={() => {
            keywordInHistory.remove()
            setHistoryList([])
          }}
        >
          <AtIcon value='trash' size='25' color='#44FDFF'></AtIcon>
        </View>
      </View>

      <View className='flex search_history_bottom'>
            <ScrollView className='flex flex_row search_bottom_scroll' scrollX>
              {historyList.map((item) => (
                <Text
                  key={item}
                  className='search_scroll_item'
                  onClick={() => goSearch(item)}
                >{item}</Text>
              ))}
            </ScrollView>
      </View>
        </>
      ): null}
    </View>
  );
};

SearchHistory.propTypes = {

};

SearchHistory.defaultProps = {
};

export default SearchHistory;