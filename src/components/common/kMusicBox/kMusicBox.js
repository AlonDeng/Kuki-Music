import React, { useState, useEffect } from 'react';
import Taro, { setNavigationBarColor } from "@tarojs/taro";
import { useDispatch, useSelector } from 'react-redux';
import { View, Image, Text, ScrollView, SwiperItem } from '@tarojs/components';
import {  } from 'taro-ui';
import _, { bind } from 'lodash';

import { playingOpen, playingClose, songDetailInfoRequest } from '../../../pages/song/song.action';
import { bindBackGAudio, curSongIdFn } from '../../../utilities/backGAudio';

import './main.scss'

const backgroundAudioManager = Taro.getBackgroundAudioManager();

const KMusicBox = (props) => {
    const {  } = props;
    const song = useSelector((state) => state.song);
    const { curSongInfo = {}, isNoFirst = false, playMode, curSongIndex, curPlayList } = song;
    const dispatch = useDispatch();
    const routes = Taro.getCurrentPages();
    console.info('routes', routes[0].route)

    const setSongInfo = (songInfo) => {
        const { name = '', al = '', url = '' } = songInfo;
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

    const getNextSong = () => {
      let nextSongIndex = curSongIndex + 1;
      console.log("歌曲详情index", curSongIndex);
      if (playMode === "shuffle") {
        getShuffleSong();
        return;
      }
      if (curSongIndex === curPlayList.length - 1) {
        nextSongIndex = 0;
      }
      dispatch(songDetailInfoRequest({
        id: curPlayList[nextSongIndex].id
      }))
    }

    const getPrevSong = () => {
      let prevSongIndex = curSongIndex - 1;
      if (playMode === "shuffle") {
        getShuffleSong();
        return;
      }
      if (curSongIndex === 0) {
        prevSongIndex = curPlayList.length - 1;
      }
      dispatch(songDetailInfoRequest({
        id: curPlayList[prevSongIndex].id
      }))
    }

    const getCurrentSong = () => {
      setSongInfo(curSongInfo);
    }

    const getShuffleSong = () => {
      let nextSongIndex = Math.floor(Math.random() * (curPlayList.length - 1));
      dispatch(songDetailInfoRequest({
        id: curPlayList[nextSongIndex].id
      }))
    }

    const playByModeFn = (mode) => {
      switch (mode) {
        case "one":
          getCurrentSong();
          break;
        case "shuffle":
          getShuffleSong();
          break;
        default:
          getNextSong();
      }
    }
    
    useEffect(() => {
        if (!isNoFirst) {
            bindBackGAudio({ playByModeFn, playingOpen, playingClose, playMode, dispatch });
        }
     });
     useEffect(() => {
      Taro.eventCenter.on('nextSong', () => {
        playByModeFn(playMode)
      })
     }, [playMode]);
    useEffect(() => { if (curSongInfo.id !== curSongIdFn.get() ) { console.log(curSongIdFn.get()); setSongInfo(curSongInfo)}}, [curSongInfo])


  return (
      <View className='flex flex_column kMusic_container'>
          <View className='textcon' onClick={() =>playMusic()}>开始</View>
          <View className='textcon' onClick={() => pauseMusic()}>暂停</View>
          <View className='textcon'>上一首</View>
          <View className='textcon'>下一首</View>
      </View>
  );
};

KMusicBox.propTypes = {

};

KMusicBox.defaultProps = {
};

export default KMusicBox;