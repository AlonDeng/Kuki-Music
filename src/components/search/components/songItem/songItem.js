import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View } from '@tarojs/components';
import { AtIcon } from 'taro-ui';
import _ from 'lodash';

import { waitDevToast } from '../../../../utilities/helpers';
import { checkMusicInfoRequest } from '../../../../pages/song/song.action';

import HighLight from '../../../common/highLight/highLight';

import './main.scss'

const SongItem = (props) => {
    const { item = {}, searchValue = ''  } = props;
    const dispatch = useDispatch();
    const playSong = (id) => {
      dispatch(checkMusicInfoRequest({ id }))
    }

  return (
    <View key={_.get(item, 'id', 0)} className='flex flex_row songs_bottom total_crad' onClick={() => playSong(_.get(item, 'id', 0))}>
     <View className='flex flex_column songs_bottom_info'>
      <HighLight keyword={searchValue} className='songs_bottom_sname' str={_.get(item, 'name', '暫無')} />
      <HighLight
        keyword={searchValue}
        className='songs_bottom_sinfo'
        str={`${'ar' in item ? _.get(item, 'ar[0].name', '') : _.get(item, 'artists[0].name', '')}
        ${_.get(item, 'ar', []).length > 0 || _.get(item, 'artists', []).length > 0 ? ' - ' : ''}
        ${'al' in item ? _.get(item, 'al.name', '') : _.get(item, 'album.name', '')}`}
      />
     </View>
     <View className='flex songs_bottom_icon' onClick={() => waitDevToast(dispatch)}>
      <AtIcon value='menu' size='15' color='#fff'></AtIcon>
     </View>
    </View>
  );
};

SongItem.propTypes = {

};

SongItem.defaultProps = {
};

export default SongItem;