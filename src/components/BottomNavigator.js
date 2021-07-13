/* eslint-disable prettier/prettier */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Icon} from 'react-native-elements';
import SettingsScreen from './Accounts/SettingsScreen';
import ShowDisease from './Diseases/ShowDisease';
import HomeScreen from './Main/HomeScreen';

const Tab = createBottomTabNavigator();

export default function BootmNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let icon = {name: '', iconType: 'ionicon'};

          if (route.name === 'Home') {
            icon.name = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Settings') {
            icon.name = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'Scan') {
            icon.name = focused ? 'scan' : 'scan-outline';
          }

          // You can return any component that you like here!
          return (
            <Icon
              type={icon.iconType}
              name={icon.name}
              size={size}
              color={color}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Scan" component={ShowDisease} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
