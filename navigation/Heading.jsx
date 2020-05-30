import React from 'react';
import { Image } from 'react-native';

import { Block, Text } from '../components';
import image from '../assets/images/logo.png';
import { theme } from '../constants';

export default function Heading() {
  return (
    <Block row middle center style={{ left: -12 }}>
      <Image
        source={image}
        style={{
          width: 35,
          height: 35,
          resizeMode: 'contain',
          flex: 0,
        }}
      />
      <Text h1 white style={{ fontFamily: 'CarterOne-Regular' }}>
        Notify
      </Text>
    </Block>
  );
}
