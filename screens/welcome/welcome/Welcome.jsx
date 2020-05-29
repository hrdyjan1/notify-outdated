import React from 'react';
import { Text, Image } from 'react-native';

import image from '../../../assets/welcome.png';
import { Block, TextButton } from '../../../components';
import { styles, ITEM_WIDTH } from '../helpers';
import { theme } from '../../../constants';

const Welcome = ({ item }) => (
  <Block style={{ width: ITEM_WIDTH }}>
    <Text>{item.index}</Text>
    <Text>{item.index}</Text>
  </Block>
//   <Block style={styles.screen}>
//     <Block flex={5} bottom>
//       <Image source={image} style={{ width: '100%', height: '90%', resizeMode: 'contain' }} />
//     </Block>
//     <Block middle padding={[0, 40]} flex={2}>
//       <Text center>
//         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit cumque dolore facere,
//         velit alias, in expedita odit et dicta totam numquam optio vel iste minima aliquam fuga
//         magni, earum!
//       </Text>
//       <TextButton
//         text="Start using Notify!"
//         style={{ fontWeight: 'bold', padding: 20, textAlign: 'center' }}
//         color={theme.colors.primary}
//       />
//     </Block>
//   </Block>
);

export default Welcome;
