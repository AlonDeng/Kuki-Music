import React from 'react';
import { View, Text } from '@tarojs/components';

import './main.scss';

const ScrollMore = (props) => {
    const { isMore = false } = props;
        
  return (
    <View className='scroll_more'>
        {isMore ? (<Text>---  更多  ---</Text>) : <Text>---我是有底線的---</Text>}
    </View>
  );
};

ScrollMore.propTypes = {

};

ScrollMore.defaultProps = {
};

export default ScrollMore;