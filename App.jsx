import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Navigation from './navigation';

import { UserContext } from './contexts/User';

function App() {
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const login = () => setLoggedIn(true);

  return (
    <PaperProvider>
      <UserContext.Provider value={{ isLoggedIn, login }}>
        <Navigation />
      </UserContext.Provider>
    </PaperProvider>
  );
}

export { App as default };
