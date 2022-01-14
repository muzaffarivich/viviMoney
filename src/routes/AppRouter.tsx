import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Tabs from './tabs';

import {Routes} from '../constants/routes';
import WithoutTabs from '../screens/without-tabs';

export type RootStackParamList = {
  [Routes.TABS]: undefined;
  [Routes.WITHOUT_TABS]: undefined;
};

let RootStack = createNativeStackNavigator<RootStackParamList>();

const AppRouter = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name={Routes.TABS} component={Tabs} />
        <RootStack.Screen name={Routes.WITHOUT_TABS} component={WithoutTabs} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
