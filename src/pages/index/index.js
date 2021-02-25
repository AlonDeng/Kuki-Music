import React from 'react'
import { connect } from 'react-redux'
import { View } from '@tarojs/components'

import { indexAdd, indexMinus, asyncAdd } from './index.action'
import BottomTabBar from '../../components/common/bottomTabBar';

// import './index.scss'

const Index = (props) => {

    return (
      <View className='index'>  
        <BottomTabBar current={0} />
      </View>                 
    );
};


const mapStateToProps = (state) => ({
    singlton: { },
  });
  
const mapDispatchToProps = (dispatch) => ({
  //   startup: () => dispatch(StartupActions.startup()),
});

export default  connect(mapStateToProps, mapDispatchToProps)(Index);