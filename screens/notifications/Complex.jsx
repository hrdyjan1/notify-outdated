import React from 'react';
import { Image, SafeAreaView, StyleSheet } from 'react-native';

import {
  Text, Block, ComplexButton, TextButton, Headings, List,
} from '../../components';

import image from '../../assets/complex.png';
import { theme, mocks } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    padding: 50,
  },
  image: {
    width: theme.sizes.device.width - 10,
    height: '100%',
    resizeMode: 'contain',
  },

  mainSection: {
    padding: 10,
  },
});

const Complex = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <Block center top style={styles.top}>
      <Image source={image} resizeMode="center" style={styles.image} />
    </Block>
    <Block middle center style={styles.mainSection}>
      <ComplexButton
        text={mocks.complexScreen.mainButton.textSetting}
        icon={mocks.complexScreen.mainButton.iconSetting}
      />
      <Headings>
        <Text h3 spacing={0.4} margin bold>
          Use template
        </Text>
        <TextButton text="See more" onPress={() => navigation.navigate('Easy')} />
      </Headings>
      <ComplexButton
        text={mocks.complexScreen.templateButton.textSetting}
        icon={mocks.complexScreen.templateButton.iconSetting}
      />
      {/* <Block style={{ width: theme.sizes.device.width }}>
        <List />
      </Block> */}
    </Block>
  </SafeAreaView>
);

export default Complex;
