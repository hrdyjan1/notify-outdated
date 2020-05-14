import React from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from 'react-native';
import {
  Text, Button, Block, Input,
} from '../../components';
import { theme } from '../../constants';
import AnimatedActionContainer from '../../components/AnimatedActionContainer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
  input: {
    backgroundColor: theme.colors.white,
  },
});

const Easy = () => {
  const [isCreatingNotification, setCreatingNotification] = React.useState(false);
  const [notificationName, setNotificationName] = React.useState('');

  const handleNotificationNameChange = (text) => {
    setNotificationName(text);
  };

  const createNotification = () => {
    setCreatingNotification(true);
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Block padding={[0, theme.sizes.base * 2]}>
            <Text h1 bold>
              Login
            </Text>
            <Block bottom>
              <Input
                label="Notification"
                style={[styles.input]}
                defaultValue={notificationName}
                onChangeText={handleNotificationNameChange}
              />
              <Button onPress={createNotification} color={theme.colors.primary}>
                <AnimatedActionContainer started={isCreatingNotification} />
                <Text bold white center>
                  Login
                </Text>
              </Button>
            </Block>
          </Block>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Easy;
