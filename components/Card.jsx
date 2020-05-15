/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { StyleSheet } from 'react-native';

import Block from './Block';
import { theme } from '../constants';

const styles = StyleSheet.create({
  card: {
    borderRadius: theme.sizes.border,
    padding: theme.sizes.base + 4,
    marginBottom: theme.sizes.base,
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOpacity: 0.11,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 13,
  },
});

const Card = ({
  color, style, children, ...others
}) => {
  const cardStyles = [styles.card, style];

  return (
    <Block color={color || theme.colors.white} style={cardStyles} {...others}>
      {children}
    </Block>
  );
};

export default Card;
export { styles };
