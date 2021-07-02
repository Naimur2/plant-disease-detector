/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomePage({history}) {
  const {container} = styles;
    console.log(history);
    let auth = false;
    if (!auth){
        history.push('/login');
    }

  return (
    <View style={container}>
      <Text>Home Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
