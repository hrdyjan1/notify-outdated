import { Dimensions } from 'react-native';

const yellow = '#e2d810';
const pink = '#d9138a';
const green = '#228b22';
const blue = '#12a4d9';
const black = '#322e2f';
const gray = '#ccc';
const gray2 = '#ddd';
const red = pink;
const white = '#fff';

const colors = {
  accent: green,
  primary: blue,
  secondary: yellow,
  tertiary: pink,
  black,
  white,
  gray,
  gray2,
  red,
  green,
};

const themeColors = {
  red: pink,
  redLight: '#DA5AA7',
  blue,
  blueLight: '#59bfe4',
  green,
  greenLight: '#52BE80',
  orange: '#BA4A00',
  orangeLight: '#E59866',
  purple: '#6C3483',
  purpleLight: '#A569BD',
};

const sizes = {
  // global sizes
  base: 16,
  font: 14,
  radius: 6,
  padding: 25,
  border: 15,

  // font sizes
  h1: 26,
  h2: 20,
  h3: 18,
  title: 18,
  header: 16,
  body: 14,
  caption: 12,
  device: {
    width: Math.round(Dimensions.get('window').width),
    height: Math.round(Dimensions.get('window').height),
  },
};

const fonts = {
  h1: {
    fontSize: sizes.h1,
  },
  h2: {
    fontSize: sizes.h2,
  },
  h3: {
    fontSize: sizes.h3,
  },
  header: {
    fontSize: sizes.header,
  },
  title: {
    fontSize: sizes.title,
  },
  body: {
    fontSize: sizes.body,
  },
  caption: {
    fontSize: sizes.caption,
  },
};
export {
  sizes, fonts, colors, themeColors,
};
export default {
  sizes, fonts, colors, themeColors,
};
