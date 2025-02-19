import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Home} from './src/screens';
import './src/theme/unistyles';

function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Home />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
