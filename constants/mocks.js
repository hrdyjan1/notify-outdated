import {
  sortBy, compose, toLower, path, reverse,
} from 'ramda';
import { colors, themeColors } from './theme';

const templates = [
  {
    key: '1589617572585',
    iconSetting: {
      name: 'home',
      color: { background: themeColors.orangeLight, foreground: 'white' },
    },
    textSetting: {
      title: 'Daily',
      subtitle: 'Be ready every day!',
      color: { background: colors.white, foreground: colors.black },
    },
  },
  {
    key: '1589617572586',
    iconSetting: {
      name: 'bookmark',
      color: { background: themeColors.blueLight, foreground: 'white' },
    },
    textSetting: {
      title: 'Weekly',
      subtitle: 'Be ready every day!',
      color: { background: colors.white, foreground: colors.black },
    },
  },
  {
    key: '1589617572587',
    iconSetting: {
      name: 'lock',
      color: { background: themeColors.purpleLight, foreground: 'white' },
    },
    textSetting: {
      title: 'Only me',
      subtitle: 'Be ready every day!',
      color: { background: colors.white, foreground: colors.black },
    },
  },
  {
    key: '1589617572588',
    iconSetting: {
      name: 'plane',
      color: { background: themeColors.blueLight, foreground: 'white' },
    },
    textSetting: {
      title: 'Family pack',
      subtitle: 'Be ready every day!',
      color: { background: colors.white, foreground: colors.black },
    },
  },
  {
    key: '1589617572589',
    iconSetting: {
      name: 'warning',
      color: { background: themeColors.orangeLight, foreground: 'white' },
    },
    textSetting: {
      title: 'Important',
      subtitle: 'Be ready every day!',
      color: { background: colors.white, foreground: colors.black },
    },
  },
  {
    key: '1589617572590',
    iconSetting: {
      name: 'bookmark',
      color: { background: themeColors.blueLight, foreground: 'white' },
    },
    textSetting: {
      title: 'Daily',
      subtitle: 'Be ready every day!',
      color: { background: colors.white, foreground: colors.black },
    },
  },
  {
    key: '1589617572591',
    iconSetting: {
      name: 'lock',
      color: { background: themeColors.redLight, foreground: 'white' },
    },
    textSetting: {
      title: 'Daily',
      subtitle: 'Be ready every day!',
      color: { background: colors.white, foreground: colors.black },
    },
  },
  {
    key: '1589617572592',
    iconSetting: {
      name: 'plane',
      color: { background: themeColors.blueLight, foreground: 'white' },
    },
    textSetting: {
      title: 'Daily',
      subtitle: 'Be ready every day!',
      color: { background: colors.white, foreground: colors.black },
    },
  },
  {
    key: '1589617572593',
    iconSetting: {
      name: 'heart',
      color: { background: themeColors.greenLight, foreground: 'white' },
    },
    textSetting: {
      title: 'Lover',
      subtitle: 'Only you and me!',
      color: { background: colors.white, foreground: colors.black },
    },
  },
];

const complexScreen = {
  mainButton: {
    iconSetting: {
      name: 'paper-plane',
      color: { background: '#59bfe4', foreground: 'white' },
    },
    textSetting: {
      title: 'Create',
      subtitle: 'Lets get started!',
      color: { background: colors.primary, foreground: 'white' },
    },
  },
  templateButton: {
    iconSetting: {
      name: 'child',
      color: { background: colors.secondary, foreground: 'white' },
    },
    textSetting: {
      title: 'Daily',
      subtitle: 'Be ready every day!',
      color: { background: colors.white, foreground: colors.black },
    },
  },
};

const sortByTextSettingTitle = sortBy(compose(toLower, path(['textSetting', 'title'])));
const sortedTemplates = sortByTextSettingTitle(templates);
const reverseSortedTemplates = reverse(sortedTemplates);

export default {
  templates, sortedTemplates, reverseSortedTemplates, complexScreen,
};
