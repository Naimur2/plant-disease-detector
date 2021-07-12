/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet , View , ScrollView } from 'react-native';

export default function FavouritePage() {

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
        backgroundColor:'#ccc',
        width:'100%',
        height:80,
        marginTop:5,
        marginBottom:5,
      },
});
