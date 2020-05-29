import React from 'react';
import { Why } from './why';
import { Welcome } from './welcome';
import { How } from './how';

const RenderedItems = ({ item }) => {
  if (item.index === 0) {
    return <Why item={item} />;
  }
  if (item.index === 1) {
    return <Welcome item={item} />;
  }
  if (item.index === 2) {
    return <How item={item} />;
  }
  return null;
};

export default RenderedItems;
