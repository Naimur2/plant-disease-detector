/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import BottomNavigator from './src/components/BottomNavigator';
import StackNavigator from './src/components/StackNavigator';

export default function App() {
  const [login, setLogin] = useState(false);
  const handleLogin = () =>{
    setLogin(!login);
  };
  return (
   <NavigationContainer>
   {
     login ? (<BottomNavigator />) : (< StackNavigator loginHandler={handleLogin} /> )
   }
   </NavigationContainer>
  );
}
