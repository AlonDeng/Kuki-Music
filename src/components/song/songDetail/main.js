import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, ScrollView } from '@tarojs/components';
import Taro, { getCurrentInstance, setNavigationBarTitle } from '@tarojs/taro'
import { AtIcon } from 'taro-ui';
import _ from 'lodash';

import { songDetailInfoRequest, playingOpen } from '../../../pages/song/song.action'

import KMusicBox from '../../common/kMusicBox/kMusicBox';

import './main.scss'


const Main = (props) => {
   
    const { id = 347230 } = getCurrentInstance().router.params
    const dispatch = useDispatch();
    
    
    
    useEffect(() => {dispatch(songDetailInfoRequest({ id }));}, [])

    

  return (
      <View>
          <KMusicBox />
      </View>
  );
};

Main.propTypes = {

};

Main.defaultProps = {
};

export default Main;