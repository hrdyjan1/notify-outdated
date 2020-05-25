import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Block, List } from '../../components';
import { theme } from '../../constants';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    paddingVertical: 0,
    paddingHorizontal: theme.sizes.base * 2,
  },
});

const Template = () => (
  <View style={styles.container}>
    <Block
      middle
      style={{
        borderWidth: 1,
      }}
    >
      <List />
    </Block>
  </View>
);

export default Template;
