import React from 'react';
import { View, Text } from 'react-native';
import DatePicker from 'react-native-modern-datepicker';

const Home = () => (
  <View>
    <DatePicker
      mode="time"
    />
  </View>
);

export default Home;
