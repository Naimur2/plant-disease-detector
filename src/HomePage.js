/* eslint-disable prettier/prettier */
import React from 'react';
import FlowerImage from './components/common/FlowerImage';
import ButtonView from './components/home/ButtonView';
import TitleContainer from './components/home/TitleContainer';

export default function HomePage({selectGalleryImage, takePhoto}) {
  return (
    <>
    <TitleContainer />
    <FlowerImage />
      <ButtonView
        selectGalleryImage={selectGalleryImage}
        takePhoto={takePhoto}
      />
    </>
  );
}

