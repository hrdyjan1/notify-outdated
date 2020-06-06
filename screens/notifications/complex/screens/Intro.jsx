import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Header } from '@react-navigation/stack';

import image from '../../../../assets/complex.png';
import { notificationReducer, notificationInitialState } from '../helpers';
import {
  Block, Text, Input, Button,
} from '../../../../components';
import { theme } from '../../../../constants';
import styles from '../styles';

const IntroScreen = ({ width, scrollTo }) => {
  const [state, dispatch] = React.useReducer(notificationReducer, notificationInitialState);

  const handleChange = (value, type) => {
    dispatch({ type: `CHANGE_${type}`, payload: { text: value } });
  };

  const handleTitleChange = (text) => handleChange(text, 'TITLE');
  const handleDescriptionChange = (text) => handleChange(text, 'DESCRIPTION');
  const goToNextScreen = () => scrollTo(1);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={[styles.innerContainer, { flex: 1, width }]}
        behavior="height" // padding throws an error
        keyboardVerticalOffset={Header.HEIGHT + 20}
      >
        <Block center style={{ marginVertical: 20 }}>
          <Image source={image} resizeMode="center" style={styles.image} />
        </Block>
        <Block flex={false} center bottom style={styles.middle}>
          <Text center h2 primary>
            Complete. Unique.
          </Text>
          <Text center caption primary>
            Customized on your own.
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
          <Button color={theme.colors.primary} onPress={goToNextScreen}>
            <Text white center>
              Next
            </Text>
          </Button>
        </Block>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default IntroScreen;
