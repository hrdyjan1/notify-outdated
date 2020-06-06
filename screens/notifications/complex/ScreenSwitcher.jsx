/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Intro from './screens/Intro';

const ScreenSwitcher = ({ item, ...others }) => {
  if (item.index === 0) {
    return <Intro item={item} {...others} />;
  }
  if (item.index === 1) {
    return <Intro item={item} {...others} />;
  }
  if (item.index === 2) {
    return <Intro item={item} {...others} />;
  }
  return null;
};

export default ScreenSwitcher;
