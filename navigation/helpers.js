import R from 'ramda';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import { colors } from '../constants/theme';

export const screens = {
  1588745331854: {
    routeName: 'Notifications',
    component: Home,
    options: {
      tabBarIcon: 'bell',
    },
  },
  1588745276027: {
    routeName: 'Profile',
    component: Profile,
    options: {
      tabBarIcon: 'account',
    },
  },
};

export function addKeyToChildren(obj, key) {
  return { key, ...obj };
}

export const activeColor = colors.white;
export const BottomTabs = createMaterialBottomTabNavigator();
export const initialRouteName = screens[1588745331854].routeName;
export const makeArrayObjects = R.compose(R.values, R.mapObjIndexed(addKeyToChildren));

export default {
  screens,
  makeArrayObjects,
};
