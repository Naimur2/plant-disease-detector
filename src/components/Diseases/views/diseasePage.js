/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView } from 'react-native';
// import OutputPage from '../detectorPage/OutputPage';
import ButtonView from './ButtonView';
import TitleContainer from './TitleContainer';
export default function DiseasePage({selectGalleryImage, takePhoto,history,nextPage,recognitions,fileData}) {

  return (
    <ScrollView>
      <TitleContainer />
      <ButtonView
        selectGalleryImage={selectGalleryImage}
        takePhoto={takePhoto}
      />
      {/* <OutputPage recognitions={recognitions} fileData={fileData} /> */}
    </ScrollView>
  );
}
