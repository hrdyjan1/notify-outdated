import React from 'react';
import {
  Animated, StyleSheet, View, Dimensions,
} from 'react-native';
import { useHeaderHeight } from '@react-navigation/stack';
import { theme } from '../constants';
import { Text } from '.';
import Block from './Block';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    backgroundColor: theme.colors.primary,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const AnimatedActionContainer = ({ started }) => {
  const animation = new Animated.Value(0);
  const fadeAnim = new Animated.Value(0);
  const headerHeight = useHeaderHeight();

  const scaleInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 50],
  });
  const backgroundStyle = {
    transform: [
      {
        scale: scaleInterpolate,
      },
    ],
  };

  React.useEffect(() => {
    if (started) {
      Animated.timing(animation, { toValue: 1, duration: 1400 }).start();
      Animated.timing(fadeAnim, { delay: 500, toValue: 1, duration: 500 }).start();
    }
  }, [started]);

  const styleActionBackground = started ? [styles.background, backgroundStyle] : null;
  return (
    <>
      <Animated.View style={styleActionBackground} />
      <Block
        animated
        middle
        style={{
          opacity: fadeAnim,
          position: 'absolute',
          height: Math.round(Dimensions.get('window').height) - headerHeight,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <Text h1 white bold center>Created!</Text>
      </Block>
    </>
  );
};

export default AnimatedActionContainer;
