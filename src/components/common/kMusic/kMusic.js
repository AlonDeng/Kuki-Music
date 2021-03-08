import React, { useState, useEffect } from 'react';
import Taro, { setNavigationBarColor } from "@tarojs/taro";
import { useDispatch, useSelector } from 'react-redux';
import { View, Image, Text, ScrollView, SwiperItem } from '@tarojs/components';
import {  } from 'taro-ui';
import _ from 'lodash';

import { playingOpen, playingClose } from '../../../pages/song/song.action';

import './main.scss'

const backgroundAudioManager = Taro.getBackgroundAudioManager();

const KMusic = (props) => {
    const {  } = props;
    const song = useSelector((state) => state.song);
    const { curSongInfo = {}, curSongId = 0 } = song;
    const dispatch = useDispatch();

    const setSongInfo = () => {
        const { name = '', al = '', url = '' } = curSongInfo;
          console.info('curSongInfo', song);
        try {
          backgroundAudioManager.title = name
          backgroundAudioManager.coverImgUrl = al.picUrl
          backgroundAudioManager.src = url
        } catch(err) {
            console.log('err', err)
        }  
      }

    const pauseMusic = () => {
        backgroundAudioManager.pause();
        dispatch(playingClose())
      }
    
    const playMusic = () => {
        backgroundAudioManager.play();
        dispatch(playingOpen({}))
      }

    useEffect(() => { if (curSongId !== 0) { setSongInfo()}}, [curSongId])


  return (
      <View className='flex flex_column kMusic_container'>
          <View className='textcon' onClick={() =>playMusic()}>开始</View>
          <View className='textcon' onClick={() => pauseMusic()}>暂停</View>
          <View className='textcon'>上一首</View>
          <View className='textcon'>下一首</View>
      </View>
  );
};

KMusic.propTypes = {

};

KMusic.defaultProps = {
};

export default KMusic;