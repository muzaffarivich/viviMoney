// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import Accounts from './AccountsStack';
// import Cards from './CardsStack';
// import Crypto from './CryptoStack';
// import Stocks from './StocksStack';
// import Vaults from './VaultsStack';

// import TabComponent from '../../components/TabNavigationAnimation/Tab';

// const Tab = createBottomTabNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen
//           name="Home"
//           component={Accounts}
//           options={{
//             tabBarButton: props => <TabComponent label="home" {...props} />,
//           }}
//         />
//         <Tab.Screen
//           name="Logger"
//           component={Cards}
//           options={{
//             tabBarButton: props => <TabComponent label="logger" {...props} />,
//           }}
//         />
//         <Tab.Screen
//           name="Documents"
//           component={Crypto}
//           options={{
//             tabBarButton: props => (
//               <TabComponent label="documents" {...props} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Menu"
//           component={Stocks}
//           options={{
//             tabBarButton: props => <TabComponent label="menu" {...props} />,
//           }}
//         />
//         <Tab.Screen
//           name="Menu"
//           component={Vaults}
//           options={{
//             tabBarButton: props => <TabComponent label="menu" {...props} />,
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect, useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon, {Icons} from '../../components/TabNavigationAnimation/Icons';
import {colors} from '../../constants/color';
import * as Animatable from 'react-native-animatable';
import AccountsStack from './AccountsStack';
import CardsStack from './CardsStack';
import CryproStack from './CryptoStack';
import StocksStack from './StocksStack';
import VaultsStack from './VaultsStack';

const TabArr = [
  {
    route: 'Accounts',
    label: 'Accounts',
    type: Icons.Feather,
    icon: 'home',
    component: AccountsStack,
    color: colors.purple,
  },
  {
    route: 'Cards',
    label: 'Cards',
    type: Icons.Feather,
    icon: 'search',
    component: CardsStack,
    color: colors.purple,
  },
  {
    route: 'Crypto',
    label: 'Crypto',
    type: Icons.Feather,
    icon: 'plus-square',
    component: CryproStack,
    color: colors.purple,
  },
  {
    route: 'Stocks',
    label: 'Stocks',
    type: Icons.FontAwesome,
    icon: 'user-circle-o',
    component: StocksStack,
    color: colors.purple,
  },
  {
    route: 'Vaults',
    label: 'Vaults',
    type: Icons.FontAwesome,
    icon: 'user-circle-o',
    component: VaultsStack,
    color: colors.purple,
  },
];

const Tab = createBottomTabNavigator();

const TabButton = props => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const textViewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      // 0.3: { scale: .7 }, 0.5: { scale: .3 }, 0.8: { scale: .7 },
      viewRef.current.animate({0: {scale: 0}, 1: {scale: 1}});
      textViewRef.current.animate({0: {scale: 1}, 1: {scale: 1}});
    } else {
      viewRef.current.animate({0: {scale: 1}, 1: {scale: 0}});
      textViewRef.current.animate({0: {scale: 1}, 1: {scale: 0}});
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.container, {flex: focused ? 1 : 0.65}]}>
      <View>
        <Animatable.View
          ref={viewRef}
          style={[
            StyleSheet.absoluteFillObject,
            {backgroundColor: item.color, borderRadius: 16},
          ]}
          duration={200}
        />
        <View
          style={[
            styles.btn,
            {backgroundColor: focused ? null : item.alphaClr},
          ]}>
          <Icon
            style={{}}
            type={item.type}
            name={item.icon}
            color={focused ? colors.white : colors.black}
          />
          <Animatable.View ref={textViewRef}>
            {focused && (
              <Text
                style={{
                  color: colors.white,
                  paddingHorizontal: 8,
                }}>
                {item.label}
              </Text>
            )}
          </Animatable.View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function AnimTab3() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 90,
          paddingHorizontal: 10,
          paddingVertical: 5,
          position: 'absolute',
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
        },
      }}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: props => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 16,
  },
});
