import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Button, Text, Image } from '@tarojs/components';
import Taro, { useDidShow } from "@tarojs/taro";
import _ from 'lodash'
import classnames from 'classnames';
import { AtIcon } from 'taro-ui'

import './main.scss'

import { keywordInHistory } from '../../../../../utilities/helpers';

const SearchHot = (props) => {
  const { hotList = [] } = useSelector((state) => state.search);
  const [isMore, setIsMore] = useState(false);
  // const { num = 0 } = index;
  // const dispatch = useDispatch();
  let renderList;
  if (isMore) renderList = hotList;
  else renderList = hotList.slice(0,10);
  const setMore = () => {
    setIsMore(true);
  }
  const goSearch = (data) => {
    Taro.navigateTo({
      url: `/pages/search/index?keywords=${data}`
    })
  };

  return (
    <View className='flex flex_column searchHot_container'>
      <View className='searchHot_title'>
          <Text className='searchHot_title_text'>熱搜榜</Text>
      </View>

      <View className='flex flex_column searchHot_List'>
        {renderList.map((item, index) => (
            <View
              className='flex searchHot_item_container'
              key={_.get(item, 'searchWord', '無歌名')}
              onClick={() => goSearch(_.get(item, 'searchWord', '無歌名'))}
            >

            <View className={classnames({
                searchHot_item_title: true,
                note: index + 1 >= 4 ? false : true,
            })}
            >{index + 1}</View>

            <View className='flex flex_column searchHot_item_context'>
              <View className='flex item_context_top'>
                  <Text className={classnames({
                      item_context_top_name: true,
                      note: index + 1 >= 4 ? false : true,
                  })}
                  >{_.get(item, 'searchWord', '無歌名')}</Text>
                  <Text className='item_context_top_num'>{_.get(item, 'score', '0')}</Text>
                  {_.get(item, 'iconType', 0) === 1 ? (
                  <Image 
                    className='serchHot_item_img'
                    src={_.get(item, 'iconUrl', '')}
                  />
                  ) : null}
              </View>
              <View className=' item_context_bottom'>{_.get(item, 'content', '暫無內容')}</View>
            </View>

        </View>
        ))}
      </View>
    
      {!isMore ? (
      <View
        className='flex searchHot_more'
        onClick={() => setMore()}
      >
          <Text>---更多---</Text>
      </View>
      ) : null}
    </View>
  );
};

SearchHot.propTypes = {

};

SearchHot.defaultProps = {
};

export default SearchHot;