import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Routes} from '../../constants/routes';
import {AccountsScreen} from '../../screens/tabs/accounts';

let Stack = createNativeStackNavigator();

const AccountsStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.ACCOUNTS} component={AccountsScreen} />
    </Stack.Navigator>
  );
};

export default AccountsStack;
