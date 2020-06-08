import React from 'react';
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker';

const curriedRoundBy = (byNumber, maxValue, value) => {
  const round = (newValue) => (Math.ceil(newValue / byNumber) * byNumber) % maxValue;
  return value ? round(value) : round;
};

const roundByFiveToSixty = curriedRoundBy(5, 60);


const Time = React.memo(() => {
  const [selectedDate, setSelectedDate] = React.useState('');

  const currentMinutes = getFormatedDate(new Date(), 'm');
  const roundedMinutes = roundByFiveToSixty(currentMinutes);
  const currentDateByMe = getFormatedDate(new Date(), `YYYY/MM/DD H:${roundedMinutes}`);
  const minimumDateByMe = getFormatedDate(new Date(), 'YYYY/MM/DD');
  console.log('selectedDate', selectedDate);

  return (
    <DatePicker
      onSelectedChange={setSelectedDate}
      options={{
        backgroundColor: '#090C08',
        textHeaderColor: '#FFA25B',
        textDefaultColor: '#F6E7C1',
        selectedTextColor: '#fff',
        mainColor: '#F4722B',
        textSecondaryColor: '#D6C7A1',
        borderColor: 'rgba(122, 146, 165, 0.1)',
      }}
      minuteInterval={5}
      style={{ borderRadius: 10 }}
      mode="time"
      current={currentDateByMe}
    />
  );
});

export default Time;
