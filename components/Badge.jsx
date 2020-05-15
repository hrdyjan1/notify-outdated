/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { StyleSheet } from 'react-native';

import Block from './Block';
import { theme } from '../constants';

const styles = StyleSheet.create({
  badge: {
    height: theme.sizes.base,
    width: theme.sizes.base,
    borderRadius: theme.sizes.border,
  },
});

const Badge = ({
  children, style, size, color, ...others
}) => {
  const badgeStyles = StyleSheet.flatten([
    styles.badge,
    size && {
      height: size,
      width: size,
      borderRadius: size,
    },
    style,
  ]);

  return (
    <Block flex={false} middle center color={color} style={badgeStyles} {...others}>
      {children}
    </Block>
  );
};

export default Badge;
export { styles };
