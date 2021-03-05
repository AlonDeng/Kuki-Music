import React, { useEffect } from 'react'
import Taro, { setNavigationBarColor } from "@tarojs/taro";
import { connect, useDispatch } from 'react-redux'
import { View } from '@tarojs/components'
import { AtToast } from "taro-ui"

import BottomTabBar from '../../components/common/bottomTabBar';
import Main from '../../components/index/main'
import LoadingView from '../../components/common/loadingView/loadingView';

import './index.scss'

const Index = (props) => {
    // console.warn('Index', props);
    const { isRequesting = false, toastInfo = { } } = props;
    const { toastText = '', toastIcon = '', isToast = false } = toastInfo;
    return (
      <> 
        <LoadingView isLoading={isRequesting} />
        <AtToast isOpened={isToast} text={toastText} icon={toastIcon}></AtToast>
        <Main />
        <BottomTabBar current={0} />
      </>                 
    );
};


const mapStateToProps = (state) => {
  return {                                                                            
    isRequesting: state.index.isRequesting,
    toastInfo: state.singletion.toastInfo,
  };
}
  
  
const mapDispatchToProps = (dispatch) => ({
  //   startup: () => dispatch(StartupActions.startup()),
});

export default  connect(mapStateToProps, mapDispatchToProps)(Index);