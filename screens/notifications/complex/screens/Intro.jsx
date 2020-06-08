import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
  View,
} from 'react-native';
import { Header } from '@react-navigation/stack';

import image from '../../../../assets/complex.png';
import { notificationReducer, notificationInitialState } from '../helpers';
import {
  Block, Text, Input, Button,
} from '../../../../components';
import { theme } from '../../../../constants';
import styles from '../styles';

const Intro = ({ width, scrollTo }) => {
  const [state, dispatch] = React.useReducer(notificationReducer, notificationInitialState);

  const imageSize = new Animated.Value(1);
  const smallerSizeAnimation = Animated.timing(imageSize, { toValue: 0.2, duration: 500 });
  const originalSizeAnimation = Animated.timing(imageSize, {
    toValue: 1,
    duration: 500,
    delay: 100,
  });

  const makeSmaller = () => smallerSizeAnimation.start();
  const makeOriginalSize = () => originalSizeAnimation.start();

  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', makeSmaller);
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', makeOriginalSize);

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, [imageSize]);

  const handleChange = (value, type) => {
    dispatch({ type: `CHANGE_${type}`, payload: { text: value } });
  };

  const handleTitleChange = (text) => handleChange(text, 'TITLE');
  const handleDescriptionChange = (text) => handleChange(text, 'DESCRIPTION');
  const goToNextScreen = () => {
    Keyboard.dismiss();
    scrollTo(1);
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1, width }} keyboardVerticalOffset={Header.HEIGHT + 20}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Block style={{ padding: 24, flex: 1, justifyContent: 'flex-end' }}>
          <Block animated center style={{ flex: imageSize, marginVertical: 20 }}>
            <Image source={image} resizeMode="center" style={styles.image} />
          </Block>
          <Block flex={false} center bottom style={styles.middle}>
            <Text center h2 primary>
              Complete. Unique. Date
            </Text>
            <Text center caption primary>
              Customized on your own.
            </Text>
          </Block>
          <Block middle>
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
        </Block>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Intro;
