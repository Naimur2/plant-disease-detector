/* eslint-disable prettier/prettier */
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert } from 'react-native';
import BottomNavigator from './src/components/BottomNavigator';
import StackNavigator from './src/components/StackNavigator';

export default function App() {
  const [login, setLogin] = useState(false);
  const handleLogin = (values) =>{
    auth()
    .signInWithEmailAndPassword(values.email, values.password)
    .then(() => {
      setLogin(true);
    })
    .catch(error => {
      Alert.alert('That email address is invalid!');
      if (error.code === 'auth/invalid-email') {
       Alert.alert('That email address is invalid!');
      }
    });
  };

  const registerHandler = (values) =>{
    auth()
    .createUserWithEmailAndPassword(values.email, values.password)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
       Alert.alert('That email address is invalid!');
      }
    });
  };
  return (
   <NavigationContainer>
   {
     login ? (<BottomNavigator />) : (< StackNavigator loginHandler={handleLogin} registerHandler={registerHandler} /> )
   }
   </NavigationContainer>
  );
}
