/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Text as TextRN, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { FlatList } from 'react-native-gesture-handler';

import { Block, Button, Text } from '../../../../components';
import Calendar from './calendar/Calendar';
import {
  modifyDate, DATA, REPETITION, DECREASE_MAXIMUM_DATE, BACK_TO_NORMAL_MAXIMUM_DATE,
} from './helpers';
import styles from './styles';
import { theme } from '../../../../constants';

const Switcher = ({ item, ...others }) => {
  if (item.id === '0') {
    return <Calendar {...others} />;
  }
  return null;
};

const active = {
  style: {
    text: {
      color: theme.colors.white,
    },
    button: {
      backgroundColor: theme.colors.primary,
    },
  },
};

const initialRepetitionState = {
  once: { style: {} },
  daily: { style: {} },
  weekly: { style: {} },
  monthly: { style: {} },
  yearly: { style: {} },
  maximumDate: null,
  activeState: null,
  decreased: false,
};

const DateGetter = {
  get once() {
    return null;
  },
  get daily() {
    return this.getFormatted(moment().add(1, 'days'));
  },
  get weekly() {
    return this.getFormatted(moment().add(1, 'weeks'));
  },
  get monthly() {
    return this.getFormatted(moment().add(1, 'months'));
  },
  get yearly() {
    return this.getFormatted(moment().add(1, 'years'));
  },
  getZero(date) {
    if (date) {
      return this.getFormatted(moment(date).subtract(1, 'days'));
    }
    return null;
  },
  getFormatted(date) {
    if (date) {
      return date.format('YYYY/MM/DD');
    }
    return null;
  },
};

function init() {
  return {
    ...initialRepetitionState,
    once: active,
    activeState: REPETITION.once,
    maximumDate: DateGetter.once,
  };
}

function repetitionReducer(state, action) {
  switch (action.type) {
    case REPETITION.once:
      return {
        ...initialRepetitionState,
        once: active,
        activeState: REPETITION.once,
        maximumDate: action.payload.value,
      };
    case REPETITION.daily:
      return {
        ...initialRepetitionState,
        daily: active,
        activeState: REPETITION.daily,
        maximumDate: action.payload.value,
      };
    case REPETITION.weekly:
      return {
        ...initialRepetitionState,
        weekly: active,
        activeState: REPETITION.weekly,
        maximumDate: action.payload.value,
      };
    case REPETITION.monthly:
      return {
        ...initialRepetitionState,
        monthly: active,
        activeState: REPETITION.monthly,
        maximumDate: action.payload.value,
      };
    case REPETITION.yearly:
      return {
        ...initialRepetitionState,
        yearly: active,
        activeState: REPETITION.yearly,
        maximumDate: action.payload.value,
      };
    case DECREASE_MAXIMUM_DATE:
      return {
        ...state,
        decreased: true,
        maximumDate: action.payload.value,
      };
    case BACK_TO_NORMAL_MAXIMUM_DATE:
      return {
        ...state,
        decreased: false,
        maximumDate: action.payload.value,
      };
    default:
      throw new Error();
  }
}

const DateScreen = ({ width, scrollTo }) => {
  const [selectedDate, setSelectedDate] = React.useState('');
  const [repetition, dispatch] = React.useReducer(repetitionReducer, initialRepetitionState, init);
  const goToNextScreen = () => scrollTo(2);
  const { date, time } = modifyDate(selectedDate);
  const {
    once, daily, weekly, monthly, yearly, maximumDate, decreased, activeState,
  } = repetition;

  const handleRepetition = (type, value) => dispatch({ type, payload: { value } });

  const setRepetitionOnce = () => handleRepetition(REPETITION.once, DateGetter.once);
  const setRepetitionDaily = () => handleRepetition(REPETITION.daily, DateGetter.daily);
  const setRepetitionWeekly = () => handleRepetition(REPETITION.weekly, DateGetter.weekly);
  const setRepetitionMonthly = () => handleRepetition(REPETITION.monthly, DateGetter.monthly);
  const setRepetitionYearly = () => handleRepetition(REPETITION.yearly, DateGetter.yearly);

  //   ❗ Handled Edge case ⌚ zero time
  React.useLayoutEffect(() => {
    const d = moment(selectedDate);
    const hours = d.get('hours');
    const minutes = d.get('minutes');

    if (hours === 0 && minutes === 0) {
      const value = DateGetter.getZero(DateGetter[activeState]);
      dispatch({ type: DECREASE_MAXIMUM_DATE, payload: { value } });
    } else if (decreased) {
      dispatch({ type: BACK_TO_NORMAL_MAXIMUM_DATE, payload: { value: DateGetter[activeState] } });
    }
  }, [selectedDate, maximumDate]);

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
            renderItem={({ item }) => (
              <Switcher item={item} setSelectedDate={setSelectedDate} maximumDate={maximumDate} />
            )}
            keyExtractor={(item) => item.id}
          />
        </Block>
        {/* -------------ACTION BUTTONS ---------- */}
        <Block margin={[0, 0, theme.sizes.base, 0]}>
          <Block center row style={{ justifyContent: 'space-between' }}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.button, once.style.button]}
              onPress={setRepetitionOnce}
            >
              <TextRN style={[styles.text, once.style.text]}>Once</TextRN>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.button, daily.style.button]}
              onPress={setRepetitionDaily}
            >
              <TextRN style={[styles.text, daily.style.text]}>Daily</TextRN>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.button, weekly.style.button]}
              onPress={setRepetitionWeekly}
            >
              <TextRN style={[styles.text, weekly.style.text]}>Weekly</TextRN>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.button, monthly.style.button]}
              onPress={setRepetitionMonthly}
            >
              <TextRN style={[styles.text, monthly.style.text]}>Monthly</TextRN>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.button, yearly.style.button]}
              onPress={setRepetitionYearly}
            >
              <TextRN style={[styles.text, yearly.style.text]}>Yearly</TextRN>
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
      </Block>
    </Block>
  );
};
export default DateScreen;
