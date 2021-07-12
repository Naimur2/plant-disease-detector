/* eslint-disable prettier/prettier */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import SettingsScreen from './Accounts/SettingsScreen';
import ShowDisease from './Diseases/ShowDisease';
import HomeScreen from './Main/HomeScreen';

const Tab = createBottomTabNavigator();

export default function BootmNavigator() {
    // const {bottomNav, bottomNavIcon ,linkStyle ,active} = styles;
    return (

        <Tab.Navigator
        initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings-outline';
              }

              // You can return any component that you like here!
              return <Icon type="ionicon" name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
          <Tab.Screen name="Scan" component={ShowDisease} />
        </Tab.Navigator>

    );
}

const styles = StyleSheet.create({
    bottomNav: {
      flex: 1,
      flexDirection:'row',
      alignItems: 'flex-end',

      backgroundColor:'blue',
      position:'absolute',
      left:0,
      right: 0,
      bottom:0,

    },
    bottomNavIcon: {
      fontSize: 30,
      color:'#fff',
    },
    linkStyle:{
      paddingLeft:25,
      paddingRight:25,
      paddingTop:10,
      paddingBottom:10,
    },
    active:{
      backgroundColor:'darkblue',
    },
  });
