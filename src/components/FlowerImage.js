/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import RenderOutput from './RenderOutput';

export default function FlowerImage({recognitions,fileData}) {
      const {imageContainer} = styles;
  return (

    <View style={imageContainer}>
      <RenderOutput recognitions={recognitions} fileData={fileData}/>
    </View>
  );
}
const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
