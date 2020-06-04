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
  const [sortedList, setSortedList] = React.useState(sortedTemplates);
  const toggleSort = () => setSortedDown((s) => !s);

  React.useEffect(() => {
    if (!isSortedDown) {
      setSortedList(reverseSortedTemplates);
    } else {
      setSortedList(sortedTemplates);
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
          <Block flex={3}>
            <List navigation={navigation} cards={sortedList} />
          </Block>
        </Block>
      </Block>
    </View>
  );
};

export default Template;
