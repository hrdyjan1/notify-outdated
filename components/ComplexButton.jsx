import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import * as Icon from 'react-native-vector-icons';

import Block, { styles as blockStyles } from './Block';
import Text from './Text';
import { styles as cardStyles } from './Card';
import { theme } from '../constants';
import Badge from './Badge';
import { pathString } from '../helpers/func';

const styles = StyleSheet.create({
  container: {
    padding: theme.sizes.base,
    marginBottom: theme.sizes.padding,
  },
});

const getSize = pathString('size');
const getName = pathString('name');
const getTitle = pathString('title');
const getSubtitle = pathString('subtitle');
const getBackgroundColor = pathString('color.background');
const getForegroundColor = pathString('color.foreground');

function noop(info) {
  console.log(info ? ({ info }) : 'noop');
}

const ComplexButton = ({
  text, icon, onPress, style,
}) => {
  // Icon
  const iconName = getName(icon) || 'home';
  const iconSize = getSize(icon) || theme.sizes.h2;
  const iconBgColor = getBackgroundColor(icon) || '#00f';
  const iconFgColor = getForegroundColor(icon) || '#fff';

  // Text
  const textTitle = getTitle(text) || 'Title';
  const textSubtitle = getSubtitle(text) || 'Subtitle';
  const textForegroundColor = getForegroundColor(text) || '#fff';
  const textBackgroundColor = getBackgroundColor(text) || '#00f';

  return (
    <TouchableOpacity
      onPress={onPress || noop}
      style={[
        blockStyles.row,
        cardStyles.card,
        styles.createNew,
        { backgroundColor: textBackgroundColor },
        style,
      ]}
    >
      <Block middle padding={[0, 10]} flex={0.25}>
        <Badge color={iconBgColor} size={52}>
          <Icon.FontAwesome name={iconName} color={iconFgColor} size={iconSize} />
        </Badge>
      </Block>
      <Block middle>
        <Text h2 spacing={0.4} color={textForegroundColor}>
          {textTitle}
        </Text>
        <Text size={theme.sizes.extra.small} color={textForegroundColor}>
          {textSubtitle}
        </Text>
      </Block>
    </TouchableOpacity>
  );
};

export default ComplexButton;
