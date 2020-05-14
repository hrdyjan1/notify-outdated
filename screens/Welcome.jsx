import React from 'react';
import { View, Text, Button } from 'react-native';

const Welcome = ({ navigation }) => (
  <View>
    <Text>Welcome</Text>
    <Button title="Sign In" onPress={() => navigation.navigate('SignIn')} />
    <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
    <Button title="Get Started" onPress={() => navigation.navigate('GetStarted')} />
  </View>
);

export default Welcome;
