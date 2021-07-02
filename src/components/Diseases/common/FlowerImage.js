/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import RenderImage from '../detectorPage/RenderImage';

export default function FlowerImage({recognitions,fileData}) {
      const {imageContainer} = styles;
  return (

    <View style={imageContainer}>
      <RenderImage recognitions={recognitions} fileData={fileData}/>
    </View>
  );
}
const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50,
    marginBottom:50,
  },
});
