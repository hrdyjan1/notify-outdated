import React from 'react';

import { colors } from '../helpers/colors';
import ActionButtonAdd from '../components/navigation/ActionButtonAdd';
import {
  BottomTabs, initialRouteName, activeColor, screens, makeArrayObjects,
} from './helpers';

const Main = ({ navigation }) => (
  <>
    <BottomTabs.Navigator
      screenOptions={{
        tabBarColor: colors.primary,
      }}
      initialRouteName={initialRouteName}
      activeColor={activeColor}
      shifting
    >
      {makeArrayObjects(screens).map(({
        key, routeName, component, options,
      }) => (
        <BottomTabs.Screen key={key} name={routeName} component={component} options={options} />
      ))}
    </BottomTabs.Navigator>
    <ActionButtonAdd icon="plus" navigation={navigation} />
  </>
);

export default Main;
