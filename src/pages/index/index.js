import React, { useEffect } from 'react'
import Taro, { setNavigationBarColor } from "@tarojs/taro";
import { connect } from 'react-redux'
import { View } from '@tarojs/components'

import BottomTabBar from '../../components/common/bottomTabBar';
import Main from '../../components/index/main'

import './index.scss'

const Index = (props) => {

    useEffect(() => {  }, [])
    return (
      <> 
        <Main />
        <BottomTabBar current={0} />
      </>                 
    );
};


const mapStateToProps = (state) => ({
    index: { },
  });
  
const mapDispatchToProps = (dispatch) => ({
  //   startup: () => dispatch(StartupActions.startup()),
});

export default  connect(mapStateToProps, mapDispatchToProps)(Index);