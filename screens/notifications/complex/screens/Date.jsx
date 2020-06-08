/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Block, Button, Text } from '../../../../components';
import Calendar from './calendar/Calendar';
import { theme } from '../../../../constants';

const DATA = [
  {
    id: '0',
  },
];

const Switcher = ({ item, ...others }) => {
  if (item.id === '0') {
    return <Calendar {...others} />;
  }
  return null;
};

const DateScreen = ({ width, scrollTo }) => {
  const goToNextScreen = () => scrollTo(2);
  return (
    <Block style={{ width, padding: 5 }}>
      <Block>
        <Block flex={false}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => <Switcher item={item} />}
            keyExtractor={(item) => item.id}
          />
        </Block>
        <Block>
          <Button color={theme.colors.primary} onPress={goToNextScreen}>
            <Text white center>
              Next
            </Text>
          </Button>
        </Block>
        {/* <DatePicker
            mode="time"
            //   selected={minimumDate}
            //   minimumDate={minimumDate}
            //   options={{
            //     //   backgroundColor: '#fff',
            //     //   textHeaderColor: theme.colors.primary,
            //     //   textDefaultColor: '#f00', // red
            //     //   selectedTextColor: '#0f0', // green
            //     //   mainColor: theme.colors.primary,
            //     //   textSecondaryColor: theme.colors.secondary,
            //     //   borderColor: 'rgba(122, 146, 165, 0.1)',
            //   }}
          /> */}
      </Block>
    </Block>
  );
};
export default DateScreen;
