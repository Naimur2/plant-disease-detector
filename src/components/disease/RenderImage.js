/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function RenderImage({recognitions = null,fileData = null}) {

  const getImage = ()=>{
        let url = '';
        if (recognitions && fileData) {url = {uri: 'data:image/jpeg;base64,' + fileData};}
        else {url = require('../../images/plant.png');}
        return url;

    };

  const {flowerImage, round } = styles;
  return (
        <Image
          source={getImage()}
          style={[flowerImage,round] }
        />
  );
}
const styles = StyleSheet.create({
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
