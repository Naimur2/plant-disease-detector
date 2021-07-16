/* eslint-disable prettier/prettier */
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginScreen from './AuthPage/LoginScreen';
import RegisterScreen from './AuthPage/RegisterScreen';
import BottomNavigation from './BottomNavigator';

const Stack = createStackNavigator();
export default function StackNavigator({loginHandler,registerHandler}) {
  return (

      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login"  >
            { props => <LoginScreen {...props} loginHandler={loginHandler} /> }
        </Stack.Screen>
        <Stack.Screen name="Register" >
          {props=> <RegisterScreen {...props} registerHandler={registerHandler} /> }
        </Stack.Screen>
        <Stack.Screen name="Home" component={BottomNavigation} />
      </Stack.Navigator>

  );
}
