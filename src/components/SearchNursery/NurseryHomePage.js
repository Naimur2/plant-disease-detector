/* eslint-disable prettier/prettier */
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import AreaSelector from './AreaSelector';
import Nurserys from './Nurserys';
const Stack = createStackNavigator();


export default function NurseryHomePage() {
  const {container} = styles;

  return (
    <Stack.Navigator initialRouteName="Area">
        <Stack.Screen name="Nearest Nursery">
            {
                props => <AreaSelector {...props} />
            }
        </Stack.Screen>
        <Stack.Screen name="Nurserys" component={Nurserys} />
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
