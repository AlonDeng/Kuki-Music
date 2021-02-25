import React from 'react'
import { connect } from 'react-redux'
import { View } from '@tarojs/components'

import { indexAdd, indexMinus, asyncAdd } from './mine.action'
import BottomTabBar from '../../components/common/bottomTabBar';
import Main from '../../components/mine/main'

// import './index.scss'

const Mine = (props) => {

    return (
      <View className='index'>  
        <Main />
        <BottomTabBar current={1} />
      </View>                 
    );
};


const mapStateToProps = (state) => ({
    Mine: { },
  });
  
const mapDispatchToProps = (dispatch) => ({
  //   startup: () => dispatch(StartupActions.startup()),
});

export default  connect(mapStateToProps, mapDispatchToProps)(Mine);