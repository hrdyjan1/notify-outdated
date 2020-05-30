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
