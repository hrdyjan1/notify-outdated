import React from 'react';
import {
  Image, SafeAreaView, StyleSheet, View,
} from 'react-native';

import {
  Text, Block, ComplexButton, TextButton,
} from '../../components';

import image from '../../assets/complex.png';
import { theme } from '../../constants';

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

const mainButton = {
  iconSetting: {
    name: 'trophy',
    color: { background: '#59bfe4', foreground: 'white' },
  },
  textSetting: {
    title: 'Create',
    subtitle: 'Lets get started!',
    color: { background: theme.colors.primary, foreground: 'white' },
  },
};

const Complex = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <Block center top style={styles.top}>
      <Image source={image} resizeMode="center" style={styles.image} />
    </Block>
    <Block top center style={styles.mainSection}>
      <ComplexButton text={mainButton.textSetting} icon={mainButton.iconSetting} />
      <View
        style={{
          alignSelf: 'stretch',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 15,
          paddingHorizontal: 10,
        }}
      >
        <Text h3 spacing={0.4} margin bold>
          Use template
        </Text>
        <TextButton text="See more" onPress={() => navigation.navigate('Easy')} />
      </View>
    </Block>
  </SafeAreaView>
);

export default Complex;
