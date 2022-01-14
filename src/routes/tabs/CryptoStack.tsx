import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Routes} from '../../constants/routes';
import {CryptoScreen} from '../../screens/tabs/crypto';

let Stack = createNativeStackNavigator();

const CryptoStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.CRYPTO} component={CryptoScreen} />
    </Stack.Navigator>
  );
};

export default CryptoStack;
