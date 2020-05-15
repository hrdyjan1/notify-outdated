import React from 'react';
import { View, StyleSheet } from 'react-native';
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

const ComplexButton = ({ text, icon }) => {
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
    <View
      style={[
        blockStyles.row,
        cardStyles.card,
        styles.createNew,
        { backgroundColor: textBackgroundColor },
      ]}
    >
      <Block middle padding={[0, 10]} flex={0.25}>
        <Badge color={iconBgColor} size={52}>
          <Icon.FontAwesome name={iconName} color={iconFgColor} size={iconSize} />
        </Badge>
      </Block>
      <Block middle>
        <Text bold h2 spacing={0.4} color={textForegroundColor}>
          {textTitle}
        </Text>
        <Text size={theme.sizes.medium} medium color={textForegroundColor}>
          {textSubtitle}
        </Text>
      </Block>
    </View>
  );
};

export default ComplexButton;
