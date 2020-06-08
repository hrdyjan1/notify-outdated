/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Text as TextRN, TouchableOpacity, StyleSheet } from 'react-native';
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

function splitDate(date) {
  return date.split(' ');
}
function replaceSlashForDots(string) {
  return string.replace(/\//g, '.');
}

function changeOrder(string) {
  const array = string.split('.');
  [array[0], array[2]] = [array[2], array[0]];
  return array.toString().replace(/,/g, '.');
}

function modifyDate(date) {
  const [d, t] = splitDate(date);
  const dotDate = replaceSlashForDots(d);
  const dotDateOrdered = changeOrder(dotDate);
  return { date: dotDateOrdered, time: t };
}

const styles = StyleSheet.create({
  button: {
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.white,
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
  },
  text: {
    // fontSize: theme.textHeaderFontSize,
    padding: 2,
    color: theme.colors.primary,
    fontFamily: 'CarterOne-Regular',
    textAlignVertical: 'center',
    // ,
    // fontFamily: theme.headerFont,
  },
});

const DateScreen = ({ width, scrollTo }) => {
  const [selectedDate, setSelectedDate] = React.useState('');
  const goToNextScreen = () => scrollTo(2);
  const { date, time } = modifyDate(selectedDate);

  return (
    <Block
      style={{
        width,
        paddingHorizontal: theme.sizes.base * 2,
        paddingBottom: theme.sizes.base,
      }}
    >
      <Block flex={1}>
        <Block flex={false} margin={[theme.sizes.base * 1.5, 0]}>
          <Text primary h2 center>
            Date & Time
          </Text>
          <Text size={38} center>
            {time}
          </Text>
          <Text size={20} center>
            {date}
          </Text>
        </Block>
        <Block flex={false} margin={[10, 0]}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => <Switcher item={item} setSelectedDate={setSelectedDate} />}
            keyExtractor={(item) => item.id}
          />
        </Block>
        {/* -------------ACTION BUTTONS ---------- */}
        <Block margin={[0, 0, theme.sizes.base, 0]}>
          <Block center row style={{ justifyContent: 'space-between' }}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.button, { backgroundColor: theme.colors.primary }]}
            >
              <TextRN style={[styles.text, { color: theme.colors.white }]}>None</TextRN>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={styles.button}>
              <TextRN style={styles.text}>Day</TextRN>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={styles.button}>
              <TextRN style={styles.text}>Week</TextRN>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={styles.button}>
              <TextRN style={styles.text}>Month</TextRN>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={styles.button}>
              <TextRN style={styles.text}>Year</TextRN>
            </TouchableOpacity>
          </Block>
          <Block>
            <Button color={theme.colors.primary} onPress={goToNextScreen}>
              <Text white center>
                Next
              </Text>
            </Button>
          </Block>
        </Block>
        {/* -------------ACTION BUTTONS END---------- */}
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
