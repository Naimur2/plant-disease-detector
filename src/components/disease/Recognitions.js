/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text } from 'react-native';
export default function Recognitions({recognitions}) {
  const {recog} = styles;
  const details = {
    diseaseName:()=> recognitions.name.replace('___', ',').split(',')[1].replace('_', ' '),
    fruitName:()=>recognitions.name.replace('___', ',').split(',')[0],
    getAccuracy:()=>`${recognitions.confidence}%`,
  };
  if (recognitions === null || !recognitions) {return   <Text style={recog}>Please Select an Image.</Text>;}
  return (
    <>
      <Text style={recog}>{details.fruitName()}</Text>
      <Text style={recog}>{details.diseaseName()}</Text>
      <Text style={recog}>Accuraccy: {details.getAccuracy()}</Text>
    </>
  );
}
const styles = StyleSheet.create({
  recog: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 5,
    color: 'black',
    fontWeight: 'bold',
  },
});
