/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Card from './UI/Card';

export default function Nurserys({route, navigation}) {

 const {shop} = route.params;



  return (
    <ScrollView style={styles.container}>
      {
        shop.map((s,id)=>(
          <Card key={id} name={s.name} address={s.address} phone={s.phone} time={s.time} />
        ))
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
