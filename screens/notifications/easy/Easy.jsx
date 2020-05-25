import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from 'react-native';

import image from '../../../assets/easy.png';
import {
  Text, SplashButton, Block, Input,
} from '../../../components';
import styles from './styles';
import { theme } from '../../../constants';
import { notificationReducer, notificationInitialState } from './helpers';

const Easy = ({ navigation }) => {
  const [notification, dispatch] = React.useReducer(notificationReducer, notificationInitialState);
  const isNotIdleStatus = notification.status !== 'IDLE';
  const isSuccessfullyCreated = notification.status === 'CREATED_SUCCESS';
  const actionButtonDisabled = isNotIdleStatus && !isSuccessfullyCreated;

  const handleNotificationNameChange = (text) => {
    dispatch({ type: 'CHANGE_TEXT', payload: { text } });
  };

  const createNotification = async () => {
    if (notification.valid) {
      Keyboard.dismiss();
      dispatch({ type: 'CREATE' });
    } else {
      dispatch({ type: 'INVALID', payload: { text: 'Invalid notification' } });
    }
  };

  const actionButtonOnPress = isSuccessfullyCreated
    ? () => navigation.navigate('Home')
    : createNotification;

  React.useEffect(() => {
    let didCancel = false;
    async function takeCare() {
      await new Promise((r) => setTimeout(r, 2000));
      dispatch({ type: 'CREATE_SUCCESS' });
    }
    if (notification.status === 'CREATING') {
      takeCare();
    }
    return () => {
      didCancel = true;
    };
  }, [notification.status, notification.text.notification]);

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Block padding={[0, theme.sizes.base * 2]}>
            <Block flex={2} center bottom style={styles.top}>
              <Image source={image} style={styles.image} />
              <Text center h2 primary bold>
                Quick, simple, soon.
              </Text>
              <Text center caption primary>
                See you after 5 minutes.
              </Text>
            </Block>

            <Block top padding={[20, 0]}>
              <Input
                label="Notification"
                errorText={notification.text.error}
                style={[styles.input]}
                defaultValue={notification.text.notification}
                onChangeText={handleNotificationNameChange}
              />
              <SplashButton
                started={isNotIdleStatus}
                onPress={actionButtonOnPress}
                disabled={actionButtonDisabled}
                color={isSuccessfullyCreated ? theme.colors.green : theme.colors.primary}
                text={notification.text}
                icon={notification.icon}
              />
            </Block>
          </Block>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Easy;
