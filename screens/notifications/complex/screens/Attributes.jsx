import React from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
} from 'react-native';
import { theme } from '../../../../constants';

const Attributes = ({ width, scrollTo }) => {
  const [value, setValue] = React.useState('');
  const touch = () => console.log('touch');

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => setValue(text)}
        value={value}
      />
      <TouchableOpacity
        onPress={touch}
        style={{ width: theme.sizes.device.width - 10, height: 50, borderWidth: 1 }}
      >
        <Text>Touch</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Attributes;
