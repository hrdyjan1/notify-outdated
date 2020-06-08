import React from 'react';
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker';
import { replace } from 'ramda';
import { Block, Text } from '../../../../../components';
import { theme } from '../../../../../constants';

const curriedRoundBy = (byNumber, maxValue, value) => {
  const round = (newValue) => (Math.ceil(newValue / byNumber) * byNumber) % maxValue;
  return value ? round(value) : round;
};

const roundByFiveToSixty = curriedRoundBy(5, 60);

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

function getCurrentTime() {
  const date = new Date();
  const currentMinutes = getFormatedDate(date, 'm');
  const roundedMinutes = roundByFiveToSixty(currentMinutes);
  const currentTime = getFormatedDate(date, `YYYY/MM/DD H:${roundedMinutes}`);
  const currentDate = getFormatedDate(date, 'YYYY/MM/DD');
  return { currentTime, currentDate };
}

const Calendar = React.memo(() => {
  const { currentTime, currentDate } = getCurrentTime();
  const [selectedDate, setSelectedDate] = React.useState('');
  const [date, time] = splitDate(selectedDate);
  const dotDate = replaceSlashForDots(date);
  const dotDateOrdered = changeOrder(dotDate);

  return (
    <Block>
      <Block>
        <Text h1 center>{time}</Text>
        <Text h2 center>{dotDateOrdered}</Text>
      </Block>
      <Block style={{ padding: theme.sizes.base }}>
        <DatePicker
          onSelectedChange={setSelectedDate}
          options={{
            backgroundColor: theme.colors.white,
            textHeaderColor: theme.colors.primary,
            textDefaultColor: theme.colors.black,
            selectedTextColor: theme.colors.white,
            mainColor: theme.colors.primary,
            textSecondaryColor: theme.colors.tertiary,
            borderColor: theme.colors.primary,
          }}
          current={currentTime}
          selected={currentTime}
          minimumDate={currentDate}
          minuteInterval={5}
          style={{ borderRadius: 10 }}
        />
      </Block>
    </Block>
  );
});

export default Calendar;
