/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { colors } from '../helpers/colors';
import Heading from './Heading';

const defaultScreenHeader = {
  title: 'Default Header',
  headerStyle: {
    backgroundColor: colors.primary,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontFamily: 'CarterOne-Regular',
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

const home = {
  ...defaultScreenHeader,
  title: 'Notify',
  headerTitle: (props) => <Heading {...props} />,
//   headerTitleStyle: {
//     ...defaultScreenHeader.headerTitleStyle,
//     fontSize: theme.sizes.h1,
//   },
};

const options = {
  easy,
  home,
  complex,
  creating,
  template,
  welcome,
};
// eslint-disable-next-line import/prefer-default-export
export { options };
