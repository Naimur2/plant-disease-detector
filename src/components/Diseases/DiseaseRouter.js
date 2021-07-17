/* eslint-disable prettier/prettier */
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import ShowDisease from './ShowDisease';

const Stack = createStackNavigator();

function DiseaseRouter() {
  return (
    <>
      <Stack.Navigator initialRouteName="Detector">
        <Stack.Screen  options={{ title: 'Disease Detector' }} name="Detecor" component={ShowDisease} />

      </Stack.Navigator>
    </>
  );
}

export default DiseaseRouter;
