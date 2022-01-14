import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Routes} from '../../constants/routes';
import {StocksScreen} from '../../screens/tabs/stocks';

let Stack = createNativeStackNavigator();

const StocksStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.STOCKS} component={StocksScreen} />
    </Stack.Navigator>
  );
};

export default StocksStack;
