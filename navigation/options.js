import { colors } from '../helpers/colors';

const easy = {
  title: 'Quick notification',
  headerStyle: {
    backgroundColor: colors.primary,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerTitleAlign: 'center',
};

const complex = {
  title: 'Complete notification',
  headerStyle: {
    backgroundColor: colors.primary,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerTitleAlign: 'center',
};

const options = {
  easy,
  complex,
};
// eslint-disable-next-line import/prefer-default-export
export { options };
