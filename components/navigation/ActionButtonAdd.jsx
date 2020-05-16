/* eslint-disable no-underscore-dangle */
import React from 'react';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { View, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { colors } from '../../helpers/colors';

const ActionButtonAdd = ({ icon, navigation }) => {
  const visibilityOfMini = React.useRef();
  const timeoutId = React.useRef();
  visibilityOfMini.current = false;
  const toggleMiniVisibility = () => {
    visibilityOfMini.current = !visibilityOfMini.current;
  };

  const buttonSize = new Animated.Value(1);
  const buttonMode = new Animated.Value(0);
  const miniLeftButtonMode = new Animated.Value(0);
  const miniMiddleButtonMode = new Animated.Value(0);
  const miniRightButtonMode = new Animated.Value(0);

  const rotation = buttonMode.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '45deg'] });
  // Output range [(Button width / 2) - (miniButtonWith / 2), ...]
  const leftMini = miniLeftButtonMode.interpolate({ inputRange: [0, 1], outputRange: [12, -50] });
  const rightMiniTop = miniRightButtonMode.interpolate({
    inputRange: [0, 1],
    outputRange: [12, -50],
  });
  const rightMiniLeft = miniRightButtonMode.interpolate({
    inputRange: [0, 1],
    outputRange: [12, 74],
  });
  const middleMiniTop = miniMiddleButtonMode.interpolate({
    inputRange: [0, 1],
    outputRange: [12, -82],
  });
  const middleMiniLeft = miniMiddleButtonMode.interpolate({
    inputRange: [0, 1],
    outputRange: [12, 12],
  });

  const runAnimation = (areMiniVisible) => {
    Animated.sequence([
      Animated.timing(buttonSize, { toValue: 0.9, duration: 150 }),
      Animated.timing(buttonSize, { toValue: 1, duration: 150 }),
      Animated.timing(buttonMode, { duration: 150, toValue: areMiniVisible ? 0 : 1 }),
      Animated.timing(miniLeftButtonMode, {
        duration: 150,
        toValue: areMiniVisible ? 0 : 1,
      }),
      Animated.timing(miniMiddleButtonMode, {
        duration: 150,
        toValue: areMiniVisible ? 0 : 1,
      }),
      Animated.timing(miniRightButtonMode, {
        duration: 150,
        toValue: areMiniVisible ? 0 : 1,
      }),
    ]).start();
  };

  const onPress = async () => {
    clearTimeout(timeoutId.current);
    const areMiniVisible = visibilityOfMini.current;
    toggleMiniVisibility();
    runAnimation(areMiniVisible);
    timeoutId.current = setTimeout(() => {
      const areMiniCurrentlyVisible = visibilityOfMini.current;
      if (areMiniCurrentlyVisible) {
        toggleMiniVisibility();
        runAnimation(true);
      }
    }, 2500);
  };

  return (
    <View
      style={{
        position: 'absolute',
        alignSelf: 'center',
        bottom: 30,
      }}
    >
      <Animated.View style={{ position: 'absolute', left: leftMini, top: leftMini }}>
        <View
          style={{
            position: 'absolute',
            width: 48,
            height: 48,
            borderRadius: 24,
            backgroundColor: colors.primary,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate('Easy')}>
            <View
              style={{
                width: 48,
                alignItems: 'center',
                justifyContent: 'center',
                height: 48,
              }}
            >
              <Icon name="clock" size={18} color={colors.white} />
            </View>
          </TouchableOpacity>
        </View>
      </Animated.View>
      <Animated.View style={{ position: 'absolute', left: middleMiniLeft, top: middleMiniTop }}>
        <View
          style={{
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            width: 48,
            height: 48,
            borderRadius: 24,
            backgroundColor: colors.primary,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate('Complex')}>
            <View
              style={{
                width: 48,
                alignItems: 'center',
                justifyContent: 'center',
                height: 48,
              }}
            >
              <Icon name="paper-plane" size={20} color={colors.white} />
            </View>
          </TouchableOpacity>
        </View>
      </Animated.View>
      <Animated.View style={{ position: 'absolute', left: rightMiniLeft, top: rightMiniTop }}>
        <View
          style={{
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            width: 48,
            height: 48,
            borderRadius: 24,
            backgroundColor: colors.primary,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate('Template')}>
            <View
              style={{
                width: 48,
                alignItems: 'center',
                justifyContent: 'center',
                height: 48,
              }}
            >
              <Icon name="file-text" size={18} color={colors.white} />
            </View>
          </TouchableOpacity>
        </View>
      </Animated.View>

      <Animated.View
        style={{
          backgroundColor: colors.ternary,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: colors.white,
          borderWidth: 2,
          width: 72,
          height: 72,
          borderRadius: 36,

          transform: [{ scale: buttonSize }],
        }}
      >
        <TouchableHighlight
          onPress={onPress}
          underlayColor={colors.ternary}
          style={{
            borderRadius: 34,
            width: 68,
            height: 68,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Animated.View style={{ transform: [{ rotate: rotation }] }}>
            <Icon name={icon} size={35} color={colors.white} />
          </Animated.View>
        </TouchableHighlight>
      </Animated.View>
    </View>
  );
};

export default React.memo(ActionButtonAdd);
