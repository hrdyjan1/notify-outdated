import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';

import {
  keyExtractor, SCREEN_DATA, getItemLayout, ITEM_WIDTH,
} from './helpers';
import ScreenSwitcher from './ScreenSwitcher';
import styles from './styles';

const Complex = () => {
  const flatListRef = React.useRef(null);
  const scrollTo = (index) => flatListRef.current.scrollToIndex({ index });

  const renderItem = ({ item }) => (
    <ScreenSwitcher item={item} scrollTo={scrollTo} width={ITEM_WIDTH} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal
        keyboardShouldPersistTaps="always"
        ref={flatListRef}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        data={SCREEN_DATA}
        scrollEnabled={false} // Can not use finger to scroll left/right (top/bottom)
        pagingEnabled // Can not stack on half transition
        getItemLayout={getItemLayout}
        initialScrollIndex={0}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};
export default Complex;
