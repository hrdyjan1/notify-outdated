import React from 'react';
import { View, Text, Button } from 'react-native';
import { UserContext } from '../contexts/User';

const SignIn = () => {
  const { login } = React.useContext(UserContext);

  return (
    <View>
      <Text>SignIn</Text>
      <Button onPress={login} title="Login" />
    </View>
  );
};

export default SignIn;
