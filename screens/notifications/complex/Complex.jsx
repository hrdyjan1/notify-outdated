import React from 'react';
import { Image, SafeAreaView } from 'react-native';

import {
  Text, Block, ComplexButton, TextButton, Headings,
} from '../../../components';

import image from '../../../assets/complex.png';
import { mocks } from '../../../constants';
import styles from './styles';
import { textButtonIcon } from './helpers';


const Complex = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <Block center top style={styles.top}>
      <Image source={image} resizeMode="center" style={styles.image} />
    </Block>
    <Block middle center>
      <ComplexButton
        text={mocks.complexScreen.mainButton.textSetting}
        icon={mocks.complexScreen.mainButton.iconSetting}
        onPress={() => navigation.navigate('Creating')}
      />
      <Headings>
        <Text h3 spacing={0.4} margin bold>
          Use template
        </Text>
        <TextButton
          text="See more"
          onPress={() => navigation.navigate('Template')}
          icon={textButtonIcon}
        />
      </Headings>
      <ComplexButton
        onPress={() => navigation.navigate('Creating')}
        text={mocks.complexScreen.templateButton.textSetting}
        icon={mocks.complexScreen.templateButton.iconSetting}
      />
    </Block>
  </SafeAreaView>
);

export default Complex;
