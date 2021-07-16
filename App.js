/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import BottomNavigator from './src/components/BottomNavigator';
import StackNavigator from './src/components/StackNavigator';

export default function App() {
  const [login, setLogin] = useState(false);
  const handleLogin = (values) =>{
    setLogin(!login);
    console.log(values);
  };

  const registerHandler = (values) =>{
   console.log(values);
  };
  return (
   <NavigationContainer>
   {
     login ? (<BottomNavigator />) : (< StackNavigator loginHandler={handleLogin} registerHandler={registerHandler} /> )
   }
   </NavigationContainer>
  );
}
