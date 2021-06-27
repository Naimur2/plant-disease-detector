/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import Recognitions from './Recognitions';

export default function RenderOutput({recognitions = null,fileData}) {

  const getImage = ()=>{
        let url = '';
        if (recognitions && fileData) {url = {uri: 'data:image/jpeg;base64,' + fileData};}
        else {url = require('../images/plant.png');}
        return url;

    };

  const {flowerImage, round} = styles;
  return (
    <>
      <Image
        source={getImage()}
        style={[flowerImage,round] }
      />
      <Recognitions recognitions={recognitions} />
    </>
  );
}
const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flowerImage: {
    height: 250,
    width: 250,
  },
  round: {
    borderRadius: 150,
    overflow: 'hidden',
    borderWidth: 5,
    borderColor: '#87f007',
  },
});
