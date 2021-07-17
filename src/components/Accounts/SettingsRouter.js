/* eslint-disable prettier/prettier */
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import SettingsScreen from './SettingsScreen';

const Stack = createStackNavigator();

function SettingsRouter({user,logOut}) {
  return (
    <>
      <Stack.Navigator initialRouteName="Settings">
        <Stack.Screen name="Settings">
            {
                props => <SettingsScreen {...props} user={user} logOut={logOut} />
            }
        </Stack.Screen>
      </Stack.Navigator>
    </>
  );
}

export default SettingsRouter;
