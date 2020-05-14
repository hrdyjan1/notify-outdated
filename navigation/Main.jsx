import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import R from 'ramda';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import { colors } from '../helpers/colors';
import ActionButtonAdd from '../components/navigation/ActionButtonAdd';

const screens = {
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

const addKeyToChildren = (obj, key) => ({ key, ...obj });
const makeArrayObjects = R.compose(R.values, R.mapObjIndexed(addKeyToChildren));

const initialRouteName = screens[1588745276027].routeName;
const activeColor = colors.white;

const Tab = createMaterialBottomTabNavigator();

const Main = ({ navigation }) => (
  <>
    <Tab.Navigator
      initialRouteName={initialRouteName}
      activeColor={activeColor}
      style={{ backgroundColor: colors.primary }}
      shifting
    >
      {makeArrayObjects(screens).map(({
        key, routeName, component, options,
      }) => (
        <Tab.Screen key={key} name={routeName} component={component} options={options} />
      ))}
    </Tab.Navigator>
    <ActionButtonAdd icon="plus" navigation={navigation} />
  </>
);

export default Main;
