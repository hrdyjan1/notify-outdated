import React from 'react';
import { Image } from 'react-native';

import image from '../../../assets/welcome.png';
import { Text, Block, TextButton } from '../../../components';
import { styles } from '../helpers';
import { theme } from '../../../constants';
import { UserContext } from '../../../contexts/User';

const Welcome = () => {
  const { login } = React.useContext(UserContext);
  return (
    <Block style={styles.screen}>
      <Block flex={5} bottom>
        <Image source={image} style={{ width: '100%', height: '90%', resizeMode: 'contain' }} />
      </Block>
      <Block middle padding={[0, 40]} flex={2}>
        <Text style={{ fontSize: theme.sizes.caption }} center>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, ea beatae enim fuga
          placeat odio voluptatem ut dignissimos, debitis deserunt quam dicta eius magni modi
          commodi, maxime voluptates suscipit velit.
        </Text>
        <TextButton
          text="Start using Notify!"
          style={{ padding: 25, textAlign: 'center' }}
          color={theme.colors.primary}
          onPress={login}
        />
      </Block>
    </Block>
  );
};

export default Welcome;
