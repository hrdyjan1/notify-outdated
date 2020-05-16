import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { theme } from '../constants';
import Text from './Text';

const TextButton = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text h3 spacing={0.4} margin color={theme.colors.tertiary}>
      {text}
      {' '}
      <Icon
        name="ios-arrow-forward"
        color={theme.colors.tertiary}
        size={theme.sizes.h3 - 3}
      />
    </Text>
  </TouchableOpacity>
);

export default TextButton;
