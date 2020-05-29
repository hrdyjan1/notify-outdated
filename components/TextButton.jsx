/* eslint-disable no-underscore-dangle */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { theme } from '../constants';
import Text from './Text';

const TextButton = ({
  text, onPress, color, style, icon, iconLeft, iconRight: iconEnd,
}) => {
  const iconRight = icon || iconEnd;
  return (
    <TouchableOpacity onPress={onPress}>
      <Text h3 spacing={0.4} margin color={color || theme.colors.tertiary} style={style}>
        {iconLeft ? (
          <Icon
            name={iconLeft.name}
            color={color || theme.colors.tertiary}
            size={theme.sizes.h3 - 3}
          />
        ) : null}
        {' '}
        {text}
        {' '}
        {iconRight ? (
          <Icon
            name={iconRight.name}
            color={color || theme.colors.tertiary}
            size={theme.sizes.h3 - 3}
          />
        ) : null}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
