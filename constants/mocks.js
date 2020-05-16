import { colors } from './theme';

const templates = [
  {
    key: '1589617572585',
    title: 'Title',
    subtitle: 'Subtitle',
    icon: {
      name: 'home',
      color: {
        background: '#ccc',
      },
    },
  },
  {
    key: '1589617572586',
    title: 'Title2',
    subtitle: 'Subtitle2',
    icon: {
      name: 'home',
      color: {
        background: '#ddd',
      },
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

export default { templates, complexScreen };
