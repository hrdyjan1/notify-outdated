import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { Extrapolate, add, interpolate } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { diffClamp, usePanGestureHandler, withDecay } from 'react-native-redash';
import { useNavigation } from '@react-navigation/native';

import ComplexButton from './ComplexButton';

const CARD_HEIGHT = 80;
const MARGIN = 10;
const HEIGHT = CARD_HEIGHT + MARGIN * 2;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
  },
  card: {
    width: '100%',
    marginVertical: MARGIN,
  },
});

const Wallet = ({ cards, height: containerHeight }) => {
  const navigation = useNavigation();
  const visibleCards = Math.ceil(containerHeight / HEIGHT);
  const {
    gestureHandler, translation, velocity, state,
  } = usePanGestureHandler();
  const animatedNode = withDecay({
    value: translation.y,
    velocity: velocity.y,
    state,
  });
  const y = diffClamp(animatedNode, -HEIGHT * (cards.length + 0.5) + visibleCards * HEIGHT, 0);

  const preparedList = containerHeight
    ? cards.map((item, index) => {
      const positionY = add(y, index * HEIGHT);
      const isDisappearing = -HEIGHT;
      const isTop = 0;
      const isBottom = HEIGHT * (visibleCards - 1);
      const isAppearing = HEIGHT * visibleCards;

      const translateY = interpolate(y, {
        inputRange: [-HEIGHT * index, 0],
        outputRange: [-HEIGHT * index, 0],
        extrapolate: Extrapolate.CLAMP,
      });
      const scale = interpolate(positionY, {
        inputRange: [isDisappearing, isTop, isBottom, isAppearing],
        outputRange: [0.5, 1, 1, 0.5],
        extrapolate: Extrapolate.CLAMP,
      });
      const opacity = interpolate(positionY, {
        inputRange: [isDisappearing, isTop, isBottom, isAppearing],
        outputRange: [0, 1, 1, 0],
        extrapolate: Extrapolate.CLAMP,
      });

      return {
        ...item,
        translateY,
        scale,
        opacity,
      };
    })
    : null;

  return (
    <PanGestureHandler {...gestureHandler}>
      <Animated.View style={styles.container}>
        {preparedList
          ? preparedList.map((item) => (
            <Animated.View
              key={item.key}
              style={[
                styles.card,
                {
                  opacity: item.opacity,
                  transform: [{ translateY: item.translateY }, { scale: item.scale }],
                },
              ]}
            >
              <View style={{ height: CARD_HEIGHT }}>
                <ComplexButton
                  text={item.textSetting}
                  icon={item.iconSetting}
                  onPress={() => navigation.navigate('Creating')}
                />
              </View>
            </Animated.View>
          ))
          : null}
      </Animated.View>
    </PanGestureHandler>
  );
};

export default Wallet;
