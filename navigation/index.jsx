import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/Welcome';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import GetStarted from '../screens/GetStarted';
import { UserContext } from '../contexts/User';
import Main from './Main';
import { Easy } from '../screens/notifications/easy';
import Complex from '../screens/notifications/Complex';
import Template from '../screens/notifications/Template';

import { options } from './options';

const Stack = createStackNavigator();

function Navigation() {
  const { isLoggedIn } = React.useContext(UserContext);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen name="Home" component={Main} />
            <Stack.Screen name="Easy" component={Easy} options={options.easy} />
            <Stack.Screen name="Complex" component={Complex} options={options.complex} />
            <Stack.Screen name="Template" component={Template} options={options.template} />
          </>
        ) : (
          <>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="GetStarted" component={GetStarted} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
