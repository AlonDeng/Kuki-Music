import React from 'react'
import { connect } from 'react-redux'
import { View } from '@tarojs/components'

import Main from '../../components/search/main'

// import './index.scss'

const Search = (props) => {

    return (
      <View className='search_main_index'>  
        <Main />
      </View>                 
    );
};


const mapStateToProps = (state) => ({
    Search: { },
  });
  
const mapDispatchToProps = (dispatch) => ({
  //   startup: () => dispatch(StartupActions.startup()),
});

export default  connect(mapStateToProps, mapDispatchToProps)(Search);