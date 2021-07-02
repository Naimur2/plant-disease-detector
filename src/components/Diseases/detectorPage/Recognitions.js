/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function Recognitions({recognitions}) {
  const {recog} = styles;
  const details = {
    diseaseName:()=> recognitions.name.replace('___', ',').split(',')[1].replace('_', ' '),
    fruitName:()=>recognitions.name.replace('___', ',').split(',')[0],
    getAccuracy:()=>`${recognitions.confidence}%`,
  };
  if (recognitions === null || !recognitions) {return   <Text style={recog}>Please Select an Image.</Text>;}
  return (
    <View style={styles.area}>
      <Text style={recog}>Tree Name:{details.fruitName()}</Text>
      <Text style={recog}>Disease Name:{details.diseaseName()}</Text>
      <Text style={recog}>Accuraccy: {details.getAccuracy()}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  recog: {
    fontSize: 20,
    textAlign: 'left',
    marginTop: 5,
    color: 'black',
    fontWeight: 'bold',
    padding:5,
  },
  area:{
backgroundColor:'#ccc',
padding:5,
  },
});
