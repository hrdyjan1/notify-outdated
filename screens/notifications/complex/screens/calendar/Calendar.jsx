import React from 'react';
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker';
import { theme } from '../../../../../constants';

const curriedRoundBy = (byNumber, maxValue, value) => {
  const round = (newValue) => (Math.ceil(newValue / byNumber) * byNumber) % maxValue;
  return value ? round(value) : round;
};

const roundByFiveToSixty = curriedRoundBy(5, 60);

function getCurrentTime() {
  const date = new Date();
  const currentMinutes = getFormatedDate(date, 'm');
  const roundedMinutes = roundByFiveToSixty(currentMinutes);
  const currentTime = getFormatedDate(date, `YYYY/MM/DD H:${roundedMinutes}`);
  const currentDate = getFormatedDate(date, 'YYYY/MM/DD');
  return { currentTime, currentDate };
}

const Calendar = React.memo(({ setSelectedDate }) => {
  const { currentTime, currentDate } = getCurrentTime();

  return (
    <DatePicker
      onSelectedChange={setSelectedDate}
      options={{
        defaultFont: 'CarterOne-Regular',
        headerFont: 'CarterOne-Regular',
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
  );
});

export default Calendar;
