import React from 'react'
import { connect } from 'react-redux'
import { View } from '@tarojs/components'
import { AtToast } from "taro-ui"

import Main from '../../components/search/main'
import LoadingView from '../../components/common/loadingView/loadingView';

// import './index.scss'

const Search = (props) => {
  const { isRequesting = false, toastInfo = { } } = props;
  const { toastText = '', toastIcon = '', isToast = false } = toastInfo;
  // console.log('props', props)
    return (
      <View className='search_main_index'> 
        {/* <LoadingView isLoading={isRequesting} /> */}
        <AtToast isOpened={isToast} text={toastText} icon={toastIcon}></AtToast>
        <Main />
      </View>                 
    );
};


const mapStateToProps = (state) => ({
  // isRequesting: state.,
  toastInfo: state.singletion.toastInfo,
  });
  
const mapDispatchToProps = (dispatch) => ({
  //   startup: () => dispatch(StartupActions.startup()),
});

export default  connect(mapStateToProps, mapDispatchToProps)(Search);