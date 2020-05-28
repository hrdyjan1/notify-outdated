import React from 'react';
import {
  SafeAreaView, StyleSheet, Image, Dimensions, FlatList,
} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import image from '../assets/welcome.png';
import { theme } from '../constants';
import { Block, Text, TextButton } from '../components';
import { UserContext } from '../contexts/User';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 0,
  },
  screen: {
    width: Dimensions.get('screen').width,
    paddingHorizontal: theme.sizes.base * 2,
  },
});

const data = [
  { key: 1, value: 1 },
  { key: 2, value: 2 },
  { key: 3, value: 3 },
];

const Welcome = ({ navigation }) => {
  const { login } = React.useContext(UserContext);
  const flatListRef = React.useRef(null);
  const renderItem = ({ item }) => {
    console.log('item', item);
    return (
      <Block style={{ width: Dimensions.get('window').width }} bordered>
        <Text>value</Text>
      </Block>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        initialNumToRender={1}
        horizontal
        ref={flatListRef}
        renderItem={renderItem}
        scrollEnabled
        keyExtractor={(item) => item.key}
        data={data}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
      {/* <ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={change}
        contentContainerStyle
      >
        <Block style={styles.screen}>
          <Block flex={5} bottom>
            <Image source={image} style={{ width: '100%', height: '90%', resizeMode: 'contain' }} />
          </Block>
          <Block middle padding={[0, 40]} flex={2}>
            <Text center>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit cumque dolore facere,
              velit alias, in expedita odit et dicta totam numquam optio vel iste minima aliquam
              fuga magni, earum!
            </Text>
            <TextButton
              text="Start using Notify!"
              style={{ fontWeight: 'bold', padding: 20, textAlign: 'center' }}
              onPress={login}
              color={theme.colors.primary}
            />
          </Block>
        </Block>
        <Block style={{ width: Dimensions.get('screen').width }}>
          <Text>222</Text>
        </Block>
      </ScrollView> */}
      <Block
        flex={0.1}
        row
        center
        style={{ justifyContent: 'space-between', paddingHorizontal: theme.sizes.base * 2 }}
      >
        <Text bold h3>
          Why?
        </Text>
        <Block row center middle>
          <Block
            flex={false}
            style={{ width: 8, height: 8 }}
            margin={[0, 4]}
            radius={4}
            color={theme.colors.primary}
          />
          <Block
            flex={false}
            style={{ width: 8, height: 8 }}
            radius={4}
            margin={[0, 4]}
            borderColor={theme.colors.primary}
          />
          <Block
            flex={false}
            style={{ width: 8, height: 8 }}
            radius={4}
            margin={[0, 4]}
            borderColor={theme.colors.primary}
          />
        </Block>
        <Text bold h3>
          How?
        </Text>
      </Block>
    </SafeAreaView>
  );
};

export default Welcome;
