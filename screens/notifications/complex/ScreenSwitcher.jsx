/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Intro from './screens/Intro';
import Date from './screens/Date';
import Attributes from './screens/Attributes';

const ScreenSwitcher = ({ item, ...others }) => {
  if (item.index === 0) {
    return <Intro item={item} {...others} />;
  }
  if (item.index === 1) {
    return <Date item={item} {...others} />;
  }
  if (item.index === 2) {
    return <Attributes item={item} {...others} />;
  }
  return null;
};

export default ScreenSwitcher;
