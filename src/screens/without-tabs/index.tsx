import React from 'react';
import {View, Text} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type WithoutStackParamList = {};

let Stack = createNativeStackNavigator<WithoutStackParamList>();

const WithoutTabsStack = () => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default WithoutTabsStack;
