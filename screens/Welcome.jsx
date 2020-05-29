import React from 'react';
import { SafeAreaView, FlatList, View } from 'react-native';

import { theme } from '../constants';
import { Block, TextButton } from '../components';
import {
  styles,
  SCREEN_DATA,
  getItemLayout,
  initialState,
  keyExtractor,
  reducer,
} from './welcome/helpers';
import RenderedItems from './welcome/RenderedItems';

const Welcome = () => {
  //   const userContext = React.useContext(UserContext);
  const flatListRef = React.useRef(null);
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const scrollTo = (index) => flatListRef.current.scrollToIndex({ index });
  const handleScrollTo = (index) => {
    scrollTo(index);
    dispatch({ index });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal
        ref={flatListRef}
        renderItem={RenderedItems}
        keyExtractor={keyExtractor}
        data={SCREEN_DATA}
        scrollEnabled={false} // Can not use finger to scroll left/right (top/bottom)
        pagingEnabled // Can not stack on half transition
        getItemLayout={getItemLayout}
        initialScrollIndex={state.SCROLL_INDEX}
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
        <View style={{ flex: 1 }}>
          {state.LEFT ? (
            <TextButton
              style={{ textAlign: 'left' }}
              text={state.LEFT.text}
              iconLeft={state.LEFT.icon}
              onPress={() => handleScrollTo(state.LEFT.index)}
            />
          ) : null}
        </View>
        <Block row center middle flex={2}>
          <Block
            flex={false}
            style={{ width: 8, height: 8 }}
            margin={[0, 4]}
            radius={4}
            color={state.DOTS[0].color}
            borderColor={state.DOTS[0].borderColor}
          />
          <Block
            flex={false}
            style={{ width: 8, height: 8 }}
            radius={4}
            margin={[0, 4]}
            color={state.DOTS[1].color}
            borderColor={state.DOTS[1].borderColor}
          />
          <Block
            flex={false}
            style={{ width: 8, height: 8 }}
            radius={4}
            margin={[0, 4]}
            color={state.DOTS[2].color}
            borderColor={state.DOTS[2].borderColor}
          />
        </Block>
        <View style={{ flex: 1 }}>
          {state.RIGHT ? (
            <TextButton
              style={{ textAlign: 'right' }}
              text={state.RIGHT.text}
              iconRight={state.RIGHT.icon}
              onPress={() => handleScrollTo(state.RIGHT.index)}
            />
          ) : null}
        </View>
      </Block>
    </SafeAreaView>
  );
};

export default Welcome;
