import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  padding: 10,
});

function Space({ padding }) {
  return <View style={{ padding: padding || styles.padding }} />;
}
export default Space;
