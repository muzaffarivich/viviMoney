import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {SafeAreaView} from 'react-native-safe-area-context';
import AppRouter from './src/routes/AppRouter';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <AppRouter />
    </SafeAreaView>
  );
};

export default App;
