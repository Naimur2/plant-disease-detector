/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TitleContainer() {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Plant Disease Detector</Text>
      <Text style={styles.subtitle}>Created By Asterisk</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 25,
    marginBottom:50,

  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
  },
});
