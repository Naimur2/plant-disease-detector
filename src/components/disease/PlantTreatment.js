/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import getTreatment from '../../services/treatment';
import Recognitions from './Recognitions';
export default function PlantTreatment({recognitions}) {
  let diseaseName = recognitions.name.replace('(', '').replace(')', '');

  const treatments = getTreatment()[diseaseName];
  if (typeof treatments === 'undefined' || !treatments) {
    return <Text styles={[styles.textStyle]}>No Results Found</Text>;
  }
  return (
    <View style={styles.container}>
      <Recognitions recognitions={recognitions} />
      <View style={styles.section}>
        <Text style={styles.heading}>Symptoms</Text>
        <Text style={styles.textProp}>{treatments.symptoms}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Treatments</Text>
        {treatments.treatment.map((value)=><Text key={treatments.treatment.indexOf(value)} style={[styles.textProp,styles.treatments]}>{value}</Text>)}
      </View>
    </View>
  );
}
const styles = StyleSheet.create(
    {
        container:{
            backgroundColor:'white',
            marginTop:10,
            marginBottom:10,
            width:'100%',
            padding:5,
            borderRadius:10,
        },
        section:{
            backgroundColor:'#ccc',
            marginTop:10,
            marginBottom:10,
            padding:10,
        },
        heading:{
            fontSize:25,
            color:'tomato',
            textAlign:'center',
            fontWeight:'bold',
            marginTop:5,
            marginBottom:5,
            borderBottomWidth:2,
            borderBottomColor:'gray',
            padding:5,
        },
        textProp:{
            color:'black',
        },
        treatments:{
            paddingTop:5,
            paddingBottom:5,
        },
    }
);
