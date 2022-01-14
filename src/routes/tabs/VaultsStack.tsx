import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Routes} from '../../constants/routes';
import {ValultsScreen} from '../../screens/tabs/valults';

let Stack = createNativeStackNavigator();

const VaultsStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.VAULTS} component={ValultsScreen} />
    </Stack.Navigator>
  );
};

export default VaultsStack;
