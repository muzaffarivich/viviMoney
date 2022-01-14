import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Routes} from '../../constants/routes';
import {CardsScreen} from '../../screens/tabs/cards';

let Stack = createNativeStackNavigator();

const CardsStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.CARDS} component={CardsScreen} />
    </Stack.Navigator>
  );
};

export default CardsStack;
