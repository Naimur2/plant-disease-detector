/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView } from 'react-native';
import ButtonView from './home/ButtonView';
import TitleContainer from './home/TitleContainer';
import TreatmentPage from './TreatmentPage';
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
