import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Block, List, ComplexButton, Headings, Text, TextButton,
} from '../../components';
import { theme, mocks } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 0,
    paddingHorizontal: theme.sizes.base * 2,
  },
});

const { sortedTemplates, reverseSortedTemplates } = mocks;

const Template = ({ navigation }) => {
  const [isSortedDown, setSortedDown] = React.useState(true);
  const [sortedList, setSortedList] = React.useState(null);
  const [listHeight, setListHeight] = React.useState(null);
  const toggleSort = () => setSortedDown((s) => !s);

  const isListReadyToRender = listHeight && sortedList;

  const onLayout = (event) => {
    setListHeight(event.nativeEvent.layout.height);
  };

  React.useEffect(() => {
    if (isSortedDown) {
      setSortedList(sortedTemplates);
    } else {
      setSortedList(reverseSortedTemplates);
    }
  }, [isSortedDown]);

  return (
    <View style={styles.container}>
      <Block>
        <Block>
          <Block flex={false} style={{ marginTop: 20 }}>
            <ComplexButton
              text={mocks.complexScreen.templateButton.textSetting}
              icon={mocks.complexScreen.templateButton.iconSetting}
              onPress={() => navigation.navigate('Creating')}
            />
            <Headings>
              <Text h3 spacing={0.4} margin>
                Use template
              </Text>
              <TextButton
                text="Sort"
                icon={{
                  name: isSortedDown ? 'ios-arrow-up' : 'ios-arrow-down',
                }}
                onPress={toggleSort}
              />
            </Headings>
          </Block>
          <View style={{ flex: 3 }} onLayout={onLayout}>
            {isListReadyToRender ? <List cards={sortedList} height={listHeight} /> : null}
          </View>
        </Block>
      </Block>
    </View>
  );
};

export default Template;
