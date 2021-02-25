import React from 'react'
import { connect } from 'react-redux'
import { View } from '@tarojs/components'

import { indexAdd, indexMinus, asyncAdd } from './cloudVillage.action'
import BottomTabBar from '../../components/common/bottomTabBar';
import Main from '../../components/cloudVillage/main';

// import './index.scss'

const cloudVillage = (props) => {

    return (
      <>  
        <Main />
        <BottomTabBar current={2} />
      </>                 
    );
};


const mapStateToProps = (state) => ({
    cloudVillage: { },
  });
  
const mapDispatchToProps = (dispatch) => ({
  //   startup: () => dispatch(StartupActions.startup()),
});

export default  connect(mapStateToProps, mapDispatchToProps)(cloudVillage);