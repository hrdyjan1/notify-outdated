/* eslint-disable global-require */
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { useFonts } from '@use-expo/font';

import Navigation from './navigation';
import { UserContext } from './contexts/User';

function App() {
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const login = () => setLoggedIn(true);
  const [fontsLoaded] = useFonts({
    'CarterOne-Regular': require('./assets/fonts/CarterOne-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <PaperProvider>
      <UserContext.Provider value={{ isLoggedIn, login }}>
        <Navigation />
      </UserContext.Provider>
    </PaperProvider>
  );
}

export { App as default };
