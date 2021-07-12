/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { Alert, BackHandler, StyleSheet } from 'react-native';
import BottomNavigation from './BottomNavigator';


export default function HomePage({history, userId}) {

  const backAction = () => {
    Alert.alert('Hold on!', 'Are you sure you want to go back?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);





  return (
    < >
      <BottomNavigation />
    </>
  );
}


const styles = StyleSheet.create({

});
