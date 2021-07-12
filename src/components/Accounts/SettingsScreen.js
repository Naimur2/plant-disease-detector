/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

export default function SettingsScreen() {

  return (
    <ScrollView >
    <View style={styles.card} />
    <View style={styles.card} />
    <View style={styles.card} />
    <View style={styles.card} />
    <View style={styles.card} />
    <View style={styles.card} />
    <View style={styles.card} />
    <View style={styles.card} />
    <View style={styles.card} />
    <View style={styles.card} />
    <View style={styles.card} />
    <View style={styles.card} />
  </ScrollView>
  );
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:'gray',
        width:'100%',
        height:80,
        marginTop:5,
        marginBottom:5,
      },
});
