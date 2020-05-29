import React from 'react';
import { Text } from 'react-native';

import { Block } from '../../../components';
import { ITEM_WIDTH } from '../helpers';

const Why = ({ item }) => (
  <Block style={{ width: ITEM_WIDTH }}>
    <Text>{item.index}</Text>
  </Block>
);

export default Why;
