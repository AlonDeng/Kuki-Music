import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Button, Text, Image, ScrollView } from '@tarojs/components'
import { AtSearchBar, AtTabs, AtTabsPane, AtIcon } from 'taro-ui';
import Taro, { getCurrentInstance, setNavigationBarTitle } from '@tarojs/taro'
import _ from 'lodash';

import { waitDevToast, countNum } from '../../utilities/helpers';
import { getTotalInfoRequest } from '../../pages/search/search.action';

import KCard from '../common/kCard/kCard';
import HighLight from '../common/highLight/highLight';
import SongTab from './components/songTab/songTab';
import SongItem from './components/songItem/songItem';
import LoadingView from '../common/loadingView/loadingView';

import './main.scss';

const tabInfo = [
  { title: '綜合' },
  { title: '單曲' },
  { title: '歌單' },
  { title: '視頻' },
  { title: '歌手' },
  { title: '相關搜索' },
  { title: '用戶' },
]
const extraStyle = 'margin-left: 1rem;margin-right: 1rem;margin-top: 1rem;background-color: #666667;';

const Main = (props) => {
  const search = useSelector((state) => state.search);
  const { totalInfo: { isData = false, song = {}, playList = {}, video, artist, sim_query, user } } = search;
  const { songs = [] } = song;
  const { playLists = [] } = playList;
  const dispatch = useDispatch();
  const { keywords: key = '不搭' } = getCurrentInstance().router.params
  const [searchValue, setSearchValue] = useState(key);
  const [currentTab, setCurrentTab] = useState(0);

  const searchChangeValue = (data) => {setSearchValue(data);};

  const searchConfirm = () => { 
    setCurrentTab(0);
    dispatch(getTotalInfoRequest({ keywords: searchValue, type: 1018 }));
   };
  
  const switchTab = (cur) => {
    setCurrentTab(cur);
    switch (cur) {
      case 1:
          dispatch(getTotalInfoRequest({
            keywords: searchValue,
            type: 1,
            limit: 20,
            offset: _.get(song, 'songsT', []).length,
          }))
        break;
    
      default:
        break;
    }
  };

  const notDev = () => { waitDevToast(dispatch) };

  useEffect(() => { setNavigationBarTitle({title: `🔍   ${searchValue}`}); }, [searchValue])
  useEffect(() => { dispatch(getTotalInfoRequest({ keywords: searchValue, type: 1018 })); }, [])

  return (
    <View className='mine_main flex flex_column'>
      <AtSearchBar
        value={searchValue}
        onChange={(data) => searchChangeValue(data)}
        onConfirm={() => searchConfirm()}
        onActionClick={() => searchConfirm()}
        focus 
      />
      <AtTabs
        current={currentTab}
        scroll
        tabList={tabInfo}
        onClick={(cur) => switchTab(cur)}
      >
        {!isData ? (<View className='flex tab_nodata'>暫無數據</View>) : (
          <AtTabsPane current={currentTab} index={0}>
            <ScrollView
              className='search_content_scroll'
              scrollY
            >
              {songs.length > 0 ? (
                <KCard style={extraStyle} secTitle='> 播放 <' title='單曲' secTitleFn={() => notDev()}>
                  {songs.map((item) => (
                    <SongItem key={_.get(item, 'id', 0)} item={item} searchValue={searchValue} />
                  ))}
                  {_.get(song, 'more', false) ? (<View className='flex bottom_all'>{_.get(song, 'moreText', '')} {">"}</View>) : null}
                  
                </KCard>
              ) : null}

          {playLists.length > 0 ? (
            <KCard style={extraStyle} secTitle='' title='歌單' isSecT={false}>
                {playLists.map((item) => (
                  <View key={_.get(item, 'id', 0)} className='flex flex_row k_playlist_bottom total_crad'>
                  <View className='k_playlist_imgCon'>
                    <Image className='k_playlist_img' src={_.get(item, 'coverImgUrl', '')} />
                  </View>
                  <View className='k_playlist_info'>
                    <HighLight keyword={searchValue} str={_.get(item, 'name', '')} className='k_playlist_name' />
                    <View className='k_playlist_detial'>{_.get(item, 'trackCount', '')}首, by {_.get(item, 'creator.nickname', '')},  {countNum(_.get(item, 'playCount', ''))}次</View>
                  </View>
                </View>
                ))}
                {_.get(playList, 'more', false) ? (<View className='flex bottom_all'>{_.get(playList, 'moreText', '')} {">"}</View>) : null}
                
            </KCard>
          ) : null}
            
          {_.get(video, 'videos', []).length > 0 ? (
            <KCard style={extraStyle} secTitle='' title='視頻' isSecT={false}>
              {_.get(video, 'videos', []).map((item) => (
                <View key={_.get(item, 'vid', '')} className='flex flex_row k_vedio_bottom total_crad'>
                <View className='k_vedio_imgCon'>
                  <Image className='k_vedio_img' src={_.get(item, 'coverUrl', '')} />
                </View>
                <View className='k_vedio_info'>
                  <HighLight className='k_vedio_name' str={_.get(item, 'title', '')} keyword={searchValue} />
                  {/* <Text className='k_vedio_name'>視頻名</Text> */}
              <View className='k_vedio_detial'>{_.get(item, 'durationms', '0')}, by {_.get(item, 'creator[0].userName', '')}, {countNum(_.get(item, 'playTime', 0))}播放</View>
                </View>
             </View>
              ))}
              {_.get(video, 'more', false) ? (<View className='flex bottom_all'>{_.get(video, 'moreText')} {">"}</View>) : null}
              
            </KCard>
          ) : null}  
            
          {_.get(artist, 'artists', []).length > 0 ? (
            <KCard style={extraStyle} secTitle='' title='歌手' isSecT={false}>
              {_.get(artist, 'artists', []).map((item) => (
                <View key={_.get(item, 'id', 0)} className='flex flex_row total_crad k_artist_bottom'>
                <View className='flex k_artist_imgCon'>
                  <Image className='k_artist_img' src={_.get(item, 'picUrl', '')} />
                  <HighLight str={_.get(item, 'name', '')} keyword={searchValue} className='k_artist_name' />
                </View>
                <View className='flex k_artist_info'>
                   <AtIcon value='user' size='13' color='#FF3A39'></AtIcon>
                   <Text className='k_artist_info_text'>已入駐</Text>
                </View>
             </View>
              ))}
              {_.get(artist, 'more', false) ? (<View className='flex bottom_all'>{_.get(artist, 'moreText')} {">"}</View>) : null}
            </KCard>
          ) : null}
          
          {_.get(sim_query, 'sim_querys', []).length > 0 ? (
            <KCard style={extraStyle} secTitle='' title='相關搜索' isSecT={false}>
              <View className='total_crad k_sim_query_bottom'>
                {_.get(sim_query, 'sim_querys', []).map((item) => (
                  <HighLight key={_.get(item, 'keyword', '')} str={_.get(item, 'keyword', '')} keyword={searchValue} className='k_sim_query_bottom_item' />
                ))}
              </View>
            </KCard>
          ) : null}
          
          {_.get(user, 'users', []).length > 0 ? (
            <KCard style={extraStyle} secTitle='' title='用戶' isSecT={false}>
              {_.get(user, 'users', []).map((item) => (
                <View key={_.get(item, 'userId', '')} className='flex flex_row total_crad k_user_bottom'>
                  <View className='flex k_user_imgCon'>
                    <Image className='k_user_img' src={_.get(item, 'avatarUrl', '')} />
                    <HighLight str={_.get(item, 'nickname', '')} keyword={searchValue} className='k_user_name' />
                  </View>
                <View className='flex k_user_follow'>+ 關注</View>
             </View>
              ))}
              {_.get(user, 'more', false) ? (<View className='flex bottom_all'>{_.get(user, 'moreText')} {">"}</View>) : null}
            </KCard>
          ) : null}

              <View className='scroll_occupancy' />
            </ScrollView>
          
          
        </AtTabsPane>
        )}
        
        <AtTabsPane current={currentTab} index={1} style='background-color: #7B7B7D;'>
            <LoadingView isLoading={_.get(song, 'songsT', []).length <= 0 && currentTab === 1} />
            <SongTab data={_.get(song, 'songsT', [])} searchValue={searchValue} isMore={_.get(song, 'hasMore', false)} />
        </AtTabsPane>
        <AtTabsPane current={currentTab} index={2}>
          <View style='font-size:18px;text-align:center;height:100px;'>标签页三的内容</View>
        </AtTabsPane>
        <AtTabsPane current={currentTab} index={3}>
          <View style='font-size:18px;text-align:center;height:100px;'>标签页四的内容</View>
        </AtTabsPane>
        <AtTabsPane current={currentTab} index={4}>
          <View style='font-size:18px;text-align:center;height:100px;'>标签页五的内容</View>
        </AtTabsPane>
        <AtTabsPane current={currentTab} index={5}>
          <View style='font-size:18px;text-align:center;height:100px;'>标签页六的内容</View>
        </AtTabsPane>
        <AtTabsPane current={currentTab} index={6}>
          <View style='font-size:18px;text-align:center;height:100px;'>标签页六的内容</View>
        </AtTabsPane>
      </AtTabs>
    </View>
  );
};

Main.propTypes = {

};

Main.defaultProps = {
};

export default Main;
