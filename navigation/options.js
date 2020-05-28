import { colors } from '../helpers/colors';

const defaultScreenHeader = {
  title: 'Default Header',
  headerStyle: {
    backgroundColor: colors.primary,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerTitleAlign: 'center',
};

const easy = {
  ...defaultScreenHeader,
  title: 'Quick notification',
};

const complex = {
  ...defaultScreenHeader,
  title: 'Complete notification',
};

const template = {
  ...defaultScreenHeader,
  title: 'Templates',
};

const creating = {
  ...defaultScreenHeader,
  title: 'Creating',
};

const welcome = {
  ...defaultScreenHeader,
  title: 'Welcome',
};

const options = {
  easy,
  complex,
  creating,
  template,
  welcome,
};
// eslint-disable-next-line import/prefer-default-export
export { options };
