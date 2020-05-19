import React from 'react';
import { View } from 'react-native';

import AnimatedActionContainer from './AnimatedActionContainer';
import Button from './Button';
import Text from './Text';

const SplashButton = ({
  onPress, started, disabled, style, color, text, icon,
}) => (
  <View
    style={{
      zIndex: 0,
    }}
  >
    <AnimatedActionContainer
      started={started}
      title={text.title}
      subtitle={text.subtitle}
      icon={icon}
    />
    <Button onPress={onPress} style={style} disabled={disabled} color={color}>
      <Text bold white center>
        {text.button}
      </Text>
    </Button>
  </View>
);

export default SplashButton;
