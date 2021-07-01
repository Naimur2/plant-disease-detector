/* eslint-disable prettier/prettier */
import React from 'react';
import OutputPage from './disease/OutputPage';

export default function TreatmentPage({recognitions, fileData}) {
  return (

      <OutputPage recognitions={recognitions} fileData={fileData} />
  );
}
