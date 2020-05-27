import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Block, Text } from '../../components';
import { theme } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 0,
    paddingHorizontal: theme.sizes.base * 2,
  },
});

const Template = () => (
  <View style={styles.container}>
    <Block middle>
      <Text>Jou</Text>
    </Block>
  </View>
);

export default Template;
