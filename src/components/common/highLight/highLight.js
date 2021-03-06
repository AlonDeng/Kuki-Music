import React from 'react';
import { RichText } from '@tarojs/components';

const HighLight = (props) => {
    const { keyword, str, className } = props;
    const reg =new RegExp(keyword,'g');
        
  return (
    <RichText
      className={className}
      nodes={str.replace(reg, "<span style='color: #44FDFF'>" + keyword +"</span>")}
    />
  );
};

HighLight.propTypes = {

};

HighLight.defaultProps = {
};

export default HighLight;