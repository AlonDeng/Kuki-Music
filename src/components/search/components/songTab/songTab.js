import React from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, ScrollView } from '@tarojs/components';
import { AtIcon } from 'taro-ui';
import _ from 'lodash';

import { getTotalInfoRequest } from '../../../../pages/search/search.action'

import SongItem from '../songItem/songItem';
import ScrollMore from '../../../common/scrollMore/scrollMore';

import './main.scss'

const SongTab = (props) => {
    const { data = [], searchValue = '', isMore = false  } = props;
    const dispatch = useDispatch();
  const searchMore = () => {
    if (isMore) dispatch(getTotalInfoRequest({
      keywords: searchValue,
      type: 1,
      limit: 20,
      offset: data.length,
      isBottomSearch: true,
    }));
  }

  return (
      <ScrollView
        scrollY
        className='search_content_scroll'
        onScrollToLower={() => searchMore()}
      >
        <View className='flex flex _row songTab_playAll'>
          <View className='songTab_playAll_iconCon'>
            <AtIcon value='play' size='13' color='#fff' />
            <Text className='songTab_playAll_text'>播放全部</Text>
          </View>
        </View>

        {data.map((item => (
            <SongItem item={item} searchValue={searchValue} key={_.get(item, 'id', 0)} />
        )))}
        <ScrollMore isMore={isMore} />
        <View className='scroll_occupancy' />
      </ScrollView>
  );
};

SongTab.propTypes = {

};

SongTab.defaultProps = {
};

export default SongTab;