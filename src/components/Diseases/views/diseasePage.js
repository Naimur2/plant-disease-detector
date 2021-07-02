/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView } from 'react-native';
import TreatmentPage from '../detectorPage/TreatmentPage';
import ButtonView from './ButtonView';
import TitleContainer from './TitleContainer';
export default function HomePage({selectGalleryImage, takePhoto,history,nextPage,recognitions,fileData}) {

  return (
    <ScrollView>
      <TitleContainer />
      <ButtonView
        selectGalleryImage={selectGalleryImage}
        takePhoto={takePhoto}
      />
      <TreatmentPage recognitions={recognitions} fileData={fileData} />
    </ScrollView>
  );
}
