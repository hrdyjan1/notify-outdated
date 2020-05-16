import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Animated, { Extrapolate, add, interpolate } from 'react-native-reanimated';

import { PanGestureHandler } from 'react-native-gesture-handler';
import { diffClamp, usePanGestureHandler, withDecay } from 'react-native-redash';
import { theme } from '../constants';

const CARD_HEIGHT = 50;
const MARGIN = 16;
const HEIGHT = CARD_HEIGHT + MARGIN * 2;
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    borderWidth: 1,
  },
  card: {
    marginVertical: MARGIN,
  },
});

const Wallet = () => {
  const [containerHeight, setContainerHeight] = useState(null);
  const visibleCards = Math.floor(containerHeight / HEIGHT);
  console.log('visibleCards', visibleCards);
  const {
    gestureHandler, translation, velocity, state,
  } = usePanGestureHandler();
  const y = diffClamp(
    withDecay({
      value: translation.y,
      velocity: velocity.y,
      state,
    }),
    -HEIGHT * cards.length + visibleCards * HEIGHT,
    0,
  );
  return (
    <PanGestureHandler {...gestureHandler}>
      <Animated.View
        style={styles.container}
        onLayout={({
          nativeEvent: {
            layout: { height: h },
          },
        }) => setContainerHeight(h)}
      >
        {containerHeight
          ? cards.map(({ type }, index) => {
            const positionY = add(y, index * HEIGHT);
            const isDisappearing = -HEIGHT;
            const isTop = 0;
            const isBottom = HEIGHT * (visibleCards - 1);
            const isAppearing = HEIGHT * visibleCards;

            console.log('[isDisappearing, isTop, isBottom, isAppearing]', [isDisappearing, isTop, isBottom, isAppearing]);
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
            return (
              <Animated.View
                style={[styles.card, { opacity, transform: [{ translateY }, { scale }] }]}
              >
                <View
                  style={{
                    borderWidth: 1,
                    height: CARD_HEIGHT,
                    width: theme.sizes.device.width - 10,
                  }}
                />
              </Animated.View>
            );
          })
          : null}
      </Animated.View>
    </PanGestureHandler>
  );
};

export default Wallet;
