import React from 'react';
import { View } from 'react-native';

const Headings = ({ children }) => (
  <View
    style={{
      alignSelf: 'stretch',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 15,
      paddingHorizontal: 5,
    }}
  >
    {children}
  </View>
);

export default Headings;
