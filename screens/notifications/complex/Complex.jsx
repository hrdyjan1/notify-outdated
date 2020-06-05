import React from 'react';
import {
  Image, SafeAreaView, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView,
} from 'react-native';

import { Header } from '@react-navigation/stack';
import {
  Block, Input, Button, Text,
} from '../../../components';
import image from '../../../assets/complex.png';
import styles from './styles';
import { notificationReducer, notificationInitialState } from './helpers';
import { theme } from '../../../constants';

const Complex = () => {
  const [state, dispatch] = React.useReducer(notificationReducer, notificationInitialState);

  const handleChange = (value, type) => {
    dispatch({ type: `CHANGE_${type}`, payload: { text: value } });
  };

  const handleTitleChange = (text) => handleChange(text, 'TITLE');
  const handleDescriptionChange = (text) => handleChange(text, 'DESCRIPTION');

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="height" keyboardVerticalOffset={Header.HEIGHT + 20}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <Block center style={{ marginVertical: 20 }}>
            <Image source={image} resizeMode="center" style={styles.image} />
          </Block>
          <Block flex={false} center bottom style={styles.middle}>
            <Text center h2 primary>
              Quick, simple, soon.
            </Text>
            <Text center caption primary>
              See you after 5 minutes.
            </Text>
          </Block>
          <Block middle top>
            <Input
              style={styles.input}
              label={state.title.label}
              errorText={state.title.error}
              defaultValue={state.title.name}
              onChangeText={handleTitleChange}
            />
            <Input
              style={styles.input}
              label={state.description.label}
              errorText={state.description.error}
              defaultValue={state.description.name}
              onChangeText={handleDescriptionChange}
            />
            <Button color={theme.colors.primary}>
              <Text white center>
                Next
              </Text>
            </Button>
          </Block>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default Complex;
